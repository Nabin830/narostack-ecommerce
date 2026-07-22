import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { saveOrder, getOrderById } from "@/lib/orders";
import { PADDLE_PRICE_ID_TO_SLUG } from "@/lib/paddleProductMap";
import { getDownloadLink } from "@/lib/productDownloadLinks";
import { sendDownloadEmail } from "@/lib/sendEmail";
import { products } from "@/data/products";

function verifyPaddleSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string
): boolean {
  if (!secret) {
    console.warn("[Paddle] No PADDLE_WEBHOOK_SECRET set — skipping verification");
    return true;
  }

  try {
    const parts: Record<string, string> = {};
    for (const part of signatureHeader.split(";")) {
      const eqIdx = part.indexOf("=");
      if (eqIdx !== -1) {
        parts[part.slice(0, eqIdx)] = part.slice(eqIdx + 1);
      }
    }

    const { ts, h1 } = parts;
    if (!ts || !h1) {
      console.error("[Paddle] Missing ts or h1 in signature header");
      return false;
    }

    const age = Math.abs(Date.now() / 1000 - parseInt(ts, 10));
    if (age > 300) {
      console.error(`[Paddle] Webhook too old: ${age}s`);
      return false;
    }

    const signedPayload = `${ts}:${rawBody}`;
    const expected = crypto
      .createHmac("sha256", secret)
      .update(signedPayload)
      .digest("hex");

    if (expected.length !== h1.length) return false;
    let diff = 0;
    for (let i = 0; i < expected.length; i++) {
      diff |= expected.charCodeAt(i) ^ h1.charCodeAt(i);
    }
    return diff === 0;
  } catch (err) {
    console.error("[Paddle] Signature verification error:", err);
    return false;
  }
}

/**
 * Paddle's transaction.completed webhook only gives us customer_id,
 * not the actual email. We fetch it from Paddle's Customer API.
 */
async function getCustomerEmail(customerId: string): Promise<string | null> {
  const apiKey = process.env.PADDLE_API_KEY;

  if (!apiKey) {
    console.error("[Paddle] PADDLE_API_KEY not set — cannot fetch customer email");
    return null;
  }

  try {
    const response = await fetch(`https://api.paddle.com/customers/${customerId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      console.error(`[Paddle] Failed to fetch customer ${customerId}: ${response.status}`);
      return null;
    }

    const result = await response.json();
    return result?.data?.email ?? null;
  } catch (err) {
    console.error("[Paddle] Error fetching customer email:", err);
    return null;
  }
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signatureHeader = req.headers.get("Paddle-Signature") ?? "";
  const secret = process.env.PADDLE_WEBHOOK_SECRET ?? "";

  if (!verifyPaddleSignature(rawBody, signatureHeader, secret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: Record<string, unknown>;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const eventType = (event.event_type ?? event.type) as string;
  console.log(`[Paddle] Event: ${eventType}`);

  if (eventType === "transaction.completed") {
    const data = event.data as Record<string, unknown>;

    // Log the raw data once so we can confirm field names if anything else is off
    console.log("[Paddle] Raw transaction data:", JSON.stringify(data));

    const orderId    = (data.id ?? "") as string;
    const customerId = (data.customer_id ?? "") as string;
    const details    = data.details as Record<string, unknown> | undefined;
    const totals     = details?.totals as Record<string, unknown> | undefined;
    const amount     = Number(totals?.total ?? 0);
    const currencyCode = (data.currency_code ?? "USD") as string;

    const items = data.items as Array<Record<string, unknown>> | undefined;
    const firstItem = items?.[0];
    // Handle both possible shapes Paddle may send
    const priceId =
      (firstItem?.price_id as string) ??
      ((firstItem?.price as Record<string, unknown> | undefined)?.id as string) ??
      "";

    if (!orderId || !customerId) {
      console.error("[Paddle] Missing orderId or customerId", { orderId, customerId });
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Fetch the real customer email via Paddle's API
    const customerEmail = await getCustomerEmail(customerId);

    if (!customerEmail) {
      console.error(`[Paddle] Could not resolve email for customer ${customerId}`);
      return NextResponse.json({ error: "Could not resolve customer email" }, { status: 400 });
    }

    // Deduplicate
    const existing = await getOrderById(`paddle_${orderId}`);
    if (existing) {
      console.log(`[Paddle] Duplicate ${orderId} — ignored`);
      return NextResponse.json({ received: true });
    }

    const productSlug = PADDLE_PRICE_ID_TO_SLUG[priceId] ?? priceId;
    const product = products.find((p) => p.slug === productSlug);
    const productName = product?.name ?? productSlug;

    const order = await saveOrder({
      orderId: `paddle_${orderId}`,
      productId: priceId,
      productSlug,
      customerEmail: customerEmail.toLowerCase().trim(),
      amount,
      currency: currencyCode,
      paidAt: new Date().toISOString(),
    });

    console.log(`[Paddle] ✅ Saved: ${order.productSlug} for ${order.customerEmail}`);

    const downloadLink = getDownloadLink(productSlug);

    if (downloadLink) {
      await sendDownloadEmail({
        to: customerEmail,
        productName,
        downloadLink,
        orderId: `paddle_${orderId}`,
      });
    } else {
      console.error(`[Paddle] ⚠️ No download link configured for: ${productSlug}`);
    }
  }

  return NextResponse.json({ received: true });
}