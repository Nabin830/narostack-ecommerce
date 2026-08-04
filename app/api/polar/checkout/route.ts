import { NextRequest, NextResponse } from "next/server";
import { polar } from "@/lib/polar";
import { polarProductIds } from "@/lib/polarProductIds";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("product") ?? "";
  const productId = polarProductIds[slug];

  if (!productId) {
    return NextResponse.json({ error: "Unknown or unconfigured product" }, { status: 404 });
  }

  try {
    const checkout = await polar.checkouts.create({
      products: [productId],
      successUrl: "https://narostack.com/success",
      metadata: { productSlug: slug },
    });

    return NextResponse.redirect(checkout.url);
  } catch (err) {
    console.error("[Polar] Failed to create checkout session:", err);
    return NextResponse.json({ error: "Could not start checkout" }, { status: 502 });
  }
}
