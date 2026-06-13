/**
 * app/api/webhooks/dodo/route.ts
 *
 * Dodo Payments webhook — verifies signature, records order, generates download token.
 *
 * ENV required:
 *   DODO_WEBHOOK_SECRET   — from Dodo Dashboard → Settings → Webhooks
 *   DOWNLOAD_TOKEN_SECRET — run: openssl rand -hex 32
 */

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { saveOrder, getOrderById } from "@/lib/orders";
import { DODO_PRODUCT_ID_TO_SLUG } from "@/lib/dodoProductMap";

const WEBHOOK_SECRET = process.env.DODO_WEBHOOK_SECRET ?? "";

// Safe constant-time string comparison — no buffers, no length errors
function safeHmacEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function verifyDodoSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string
): boolean {
  if (!secret) {
    console.warn("[Dodo Webhook] No DODO_WEBHOOK_SECRET set — skipping verification");
    return true;
  }
  try {
    // Dodo sends: "t=<timestamp>,v1=<hex_sig>"
    const parts: Record<string, string> = {};
    for (const part of signatureHeader.split(",")) {
      const idx = part.indexOf("=");
      if (idx !== -1) {
        parts[part.slice(0, idx)] = part.slice(idx + 1);
      }
    }
    const timestamp = parts["t"];
    const receivedSig = parts["v1"];
    if (!timestamp || !receivedSig) return false;

    const signedPayload = `${timestamp}.${rawBody}`;
    const expectedSig = crypto
      .createHmac("sha256", secret)
      .update(signedPayload)
      .digest("hex");

    return safeHmacEqual(receivedSig, expectedSig);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  // Must read raw body BEFORE any parsing
  const rawBody = await req.text();
  const signatureHeader = req.headers.get("webhook-signature") ?? "";

  // 1. Verify signature
  if (!verifyDodoSignature(rawBody, signatureHeader, WEBHOOK_SECRET)) {
    console.error("[Dodo Webhook] Signature verification failed");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  // 2. Parse event
  let event: Record<string, unknown>;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const eventType = event.type as string;
  console.log(`[Dodo Webhook] Received: ${eventType}`);

  // ── payment.succeeded ────────────────────────────────────────────────────────
  if (eventType === "payment.succeeded") {
    const data = event.data as Record<string, unknown>;

    const orderId       = (data.payment_id ?? data.id ?? "") as string;
    const dodoProductId = (data.product_id ?? "") as string;
    const customer      = data.customer as Record<string, unknown> | undefined;
    const customerEmail = (customer?.email ?? data.customer_email ?? "") as string;
    const amount        = (data.amount ?? 0) as number;
    const currency      = (data.currency ?? "USD") as string;

    if (!orderId || !customerEmail) {
      console.error("[Dodo Webhook] Missing orderId or email", { orderId, customerEmail });
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Idempotency — ignore duplicate events
    if (getOrderById(orderId)) {
      console.log(`[Dodo Webhook] Duplicate event for ${orderId} — ignored`);
      return NextResponse.json({ received: true });
    }

    const productSlug = DODO_PRODUCT_ID_TO_SLUG[dodoProductId] ?? dodoProductId;

    const order = saveOrder({
      orderId,
      productId:     dodoProductId,
      productSlug,
      customerEmail: customerEmail.toLowerCase().trim(),
      amount,
      currency,
      paidAt:        new Date().toISOString(),
    });

    console.log(`[Dodo Webhook] ✅ Order saved:`, {
      orderId:   order.orderId,
      product:   order.productSlug,
      email:     order.customerEmail,
      expiresAt: new Date(order.tokenExpiresAt).toISOString(),
    });
  }

  if (eventType === "subscription.active") {
    const data = event.data as Record<string, unknown>;
    console.log("[Dodo Webhook] subscription.active:", data);
  }

  return NextResponse.json({ received: true });
}