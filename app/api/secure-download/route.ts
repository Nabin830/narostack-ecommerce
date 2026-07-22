import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { getOrdersByEmail } from "@/lib/orders";
import { getDownloadLink } from "@/lib/productDownloadLinks";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Please log in to download files" },
        { status: 401 }
      );
    }

    const { productSlug } = await req.json();

    if (!productSlug || typeof productSlug !== "string") {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }

    const userOrders = await getOrdersByEmail(session.user.email);
    const hasPurchased = userOrders.some((order) => order.productSlug === productSlug);

    if (!hasPurchased) {
      console.warn(
        `[Secure Download] Unauthorized: ${session.user.email} tried ${productSlug}`
      );
      return NextResponse.json(
        { error: "You haven't purchased this product" },
        { status: 403 }
      );
    }

    const downloadLink = getDownloadLink(productSlug);

    if (!downloadLink) {
      return NextResponse.json({ error: "Download not available" }, { status: 404 });
    }

    console.log(`✅ [Secure Download] Granted: ${productSlug} → ${session.user.email}`);

    return NextResponse.json({
      success: true,
      downloadLink,
      productSlug,
    });
  } catch (error) {
    console.error("[Secure Download] Error:", error);
    return NextResponse.json({ error: "Download service error" }, { status: 500 });
  }
}