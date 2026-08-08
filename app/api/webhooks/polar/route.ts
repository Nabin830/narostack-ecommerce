import { NextRequest, NextResponse } from "next/server";
import { validateEvent, WebhookVerificationError } from "@polar-sh/sdk/webhooks";
import { saveOrder, getOrderById } from "@/lib/orders";
import { getDownloadLink } from "@/lib/productDownloadLinks";
import { sendDownloadEmail } from "@/lib/sendEmail";
import { products } from "@/data/products";
import { polarProductIds } from "@/lib/polarProductIds";
import { logNotification } from "@/lib/notifications";

function slugFromProductId(productId: string | null): string {
  if (!productId) return "";
  const entry = Object.entries(polarProductIds).find(([, id]) => id === productId);
  return entry?.[0] ?? "";
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const headers = Object.fromEntries(req.headers);

  let event: ReturnType<typeof validateEvent>;
  try {
    event = validateEvent(rawBody, headers, process.env.POLAR_WEBHOOK_SECRET ?? "");
  } catch (err) {
    if (err instanceof WebhookVerificationError) {
      console.error("[Polar] Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
    throw err;
  }

  console.log(`[Polar] Event: ${event.type}`);

  await logNotification({
    provider: "polar",
    eventType: event.type,
    summary: `Polar event: ${event.type}`,
  }).catch((err) => console.error("[Polar] Failed to log staff notification:", err));

  if (event.type === "order.paid") {
    const order = event.data;
    const orderId = `polar_${order.id}`;
    const customerEmail = (order.customer?.email ?? "").toLowerCase().trim();
    const productSlug =
      (order.metadata?.productSlug as string | undefined) ||
      slugFromProductId(order.productId);

    if (!customerEmail || !productSlug) {
      console.error("[Polar] Missing customer email or product slug", {
        orderId,
        customerEmail,
        productSlug,
      });
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const existing = await getOrderById(orderId);
    if (existing) {
      console.log(`[Polar] Duplicate ${orderId} — ignored`);
      return NextResponse.json({ received: true });
    }

    const product = products.find((p) => p.slug === productSlug);
    const productName = product?.name ?? productSlug;

    const saved = await saveOrder({
      orderId,
      productId: order.productId ?? "",
      productSlug,
      customerEmail,
      amount: order.totalAmount,
      currency: order.currency,
      paidAt: new Date().toISOString(),
    });

    console.log(`[Polar] ✅ Saved: ${saved.productSlug} for ${saved.customerEmail}`);

    const downloadLink = getDownloadLink(productSlug);
    if (downloadLink) {
      await sendDownloadEmail({
        to: customerEmail,
        productName,
        downloadLink,
        orderId,
      });
    } else {
      console.error(`[Polar] ⚠️ No download link configured for: ${productSlug}`);
    }
  }

  return NextResponse.json({ received: true });
}
