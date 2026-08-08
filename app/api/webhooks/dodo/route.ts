import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { saveOrder, getOrderById } from "@/lib/orders";
import { DODO_PRODUCT_ID_TO_SLUG } from "@/lib/dodoProductMap";
import { logNotification } from "@/lib/notifications";

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function getSecret(): string {
  const raw = process.env.DODO_WEBHOOK_SECRET ?? "";
  if (raw.startsWith("whsec_")) {
    return raw.slice(6);
  }
  return raw;
}

function verifySignature(
  rawBody: string,
  webhookId: string,
  webhookTimestamp: string,
  signatureHeader: string
): boolean {
  const secret = getSecret();
  if (!secret) {
    console.warn("[Dodo] No secret — skipping verification");
    return true;
  }

  try {
    const signedPayload = `${webhookId}.${webhookTimestamp}.${rawBody}`;
    const expected = crypto
      .createHmac("sha256", Buffer.from(secret, "base64") as unknown as string)
      .update(signedPayload)
      .digest("base64");

    for (const sig of signatureHeader.split(" ")) {
      const commaIdx = sig.indexOf(",");
      if (commaIdx === -1) continue;
      const version = sig.slice(0, commaIdx);
      const value = sig.slice(commaIdx + 1);
      if (version === "v1" && safeEqual(value, expected)) {
        return true;
      }
    }

    console.error("[Dodo] Signature mismatch. Expected:", expected, "Got:", signatureHeader);
    return false;
  } catch (_e) {
    console.error("[Dodo] Signature error:", _e);
    return false;
  }
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const webhookId        = req.headers.get("webhook-id") ?? "";
  const webhookTimestamp = req.headers.get("webhook-timestamp") ?? "";
  const signatureHeader  = req.headers.get("webhook-signature") ?? "";

  if (!verifySignature(rawBody, webhookId, webhookTimestamp, signatureHeader)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: Record<string, unknown>;
  try {
    event = JSON.parse(rawBody);
  } catch (_e) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const eventType = event.type as string;
  console.log(`[Dodo] Event: ${eventType}`);

  if (eventType === "payment.succeeded") {
    const data = event.data as Record<string, unknown>;

    const orderId       = (data.payment_id ?? "") as string;
    const customer      = data.customer as Record<string, unknown> | undefined;
    const customerEmail = ((customer?.email ?? "") as string).toLowerCase().trim();
    const customerName  = (customer?.name as string | undefined) || undefined;
    const amount        = (data.total_amount ?? 0) as number;
    const currency      = (data.currency ?? "USD") as string;
    const productCart   = data.product_cart as Array<Record<string, unknown>> | undefined;
    const dodoProductId = (productCart?.[0]?.product_id ?? "") as string;

    if (!orderId || !customerEmail) {
      console.error("[Dodo] Missing orderId or email");
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await logNotification({
      provider: "dodo",
      eventType,
      orderId,
      customerEmail,
      customerName,
      amount,
      currency,
      summary: `Dodo payment received from ${customerName ?? customerEmail}`,
    }).catch((err) => console.error("[Dodo] Failed to log staff notification:", err));

    // ✅ FIX 1: await added — was: if (getOrderById(orderId)) {
    const existing = await getOrderById(orderId);
    if (existing) {
      console.log(`[Dodo] Duplicate ${orderId} — ignored`);
      return NextResponse.json({ received: true });
    }

    const productSlug = DODO_PRODUCT_ID_TO_SLUG[dodoProductId] ?? dodoProductId;

    // ✅ FIX 2: await added — was: const order = saveOrder({...
    const order = await saveOrder({
      orderId,
      productId: dodoProductId,
      productSlug,
      customerEmail,
      amount,
      currency,
      paidAt: new Date().toISOString(),
    });

    console.log(`[Dodo] ✅ Saved: ${order.productSlug} for ${order.customerEmail}`);
  } else {
    await logNotification({
      provider: "dodo",
      eventType,
      summary: `Dodo event: ${eventType}`,
    }).catch((err) => console.error("[Dodo] Failed to log staff notification:", err));
  }

  return NextResponse.json({ received: true });
}