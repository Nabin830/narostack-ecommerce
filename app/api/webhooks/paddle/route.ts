import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { saveOrder, getOrderById } from "@/lib/orders";
import { PADDLE_PRICE_ID_TO_SLUG } from "@/lib/paddleProductMap";

/**
 * Paddle webhook signature verification.
 *
 * Paddle sends the signature in the "Paddle-Signature" header.
 * Format: "ts=TIMESTAMP;h1=HMAC_SHA256_HEX"
 *
 * The signed payload is: "TIMESTAMP:RAW_BODY"
 * The secret is your webhook secret key from Paddle dashboard (no prefix to strip).
 *
 * Docs: https://developer.paddle.com/webhooks/signature-verification
 */
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
    // Parse ts and h1 from "ts=...;h1=..."
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

    // Reject events older than 5 minutes
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

    // Constant-time comparison
    if (expected.length !== h1.length) return false;
    let diff = 0;
    for (let i = 0; i < expected.length; i++) {
      diff |= expected.charCodeAt(i) ^ h1.charCodeAt(i);
    }
    if (diff !== 0) {
      console.error("[Paddle] Signature mismatch");
      return false;
    }

    return true;
  } catch (err) {
    console.error("[Paddle] Signature verification error:", err);
    return false;
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

  // Paddle Billing fires "transaction.completed" on successful payment
  if (eventType === "transaction.completed") {
    const data = event.data as Record<string, unknown>;

    const orderId       = (data.id ?? "") as string;
    const customerData  = data.customer as Record<string, unknown> | undefined;
    const customerEmail = ((customerData?.email ?? "") as string).toLowerCase().trim();
    const details       = data.details as Record<string, unknown> | undefined;
    const totals        = details?.totals as Record<string, unknown> | undefined;
    const amount        = Number(totals?.total ?? 0);
    const currencyCode  = (data.currency_code ?? "USD") as string;
    const items         = data.items as Array<Record<string, unknown>> | undefined;
    const priceId       = (items?.[0]?.price as Record<string, unknown> | undefined)?.id as string ?? "";

    if (!orderId || !customerEmail) {
      console.error("[Paddle] Missing orderId or email");
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Deduplicate
    if (getOrderById(`paddle_${orderId}`)) {
      console.log(`[Paddle] Duplicate ${orderId} — ignored`);
      return NextResponse.json({ received: true });
    }

    const productSlug = PADDLE_PRICE_ID_TO_SLUG[priceId] ?? priceId;

    const order = saveOrder({
      orderId: `paddle_${orderId}`,
      productId: priceId,
      productSlug,
      customerEmail,
      amount,
      currency: currencyCode,
      paidAt: new Date().toISOString(),
    });

    console.log(`[Paddle] ✅ Saved: ${order.productSlug} for ${order.customerEmail}`);
  }

  return NextResponse.json({ received: true });
}
