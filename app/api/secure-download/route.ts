import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { getOrdersByEmail } from "@/lib/orders";
import { getDownloadLink } from "@/lib/productDownloadLinks";

/**
 * POST /api/secure-download
 * 
 * SECURITY VERIFICATION:
 * 1. ✅ User must be authenticated
 * 2. ✅ User must have purchased the product
 * 3. ✅ Product must have a download link
 * 4. ✅ Only returns link if ALL checks pass
 * 
 * Logs all access for security audit
 */
export async function POST(req: NextRequest) {
  try {
    // Get authenticated user session
    const session = await getServerSession();

    // Security Check 1: User authenticated?
    if (!session?.user?.email) {
      console.warn("[Secure Download] Unauthorized access attempt (not logged in)");
      return NextResponse.json(
        { error: "Please log in to download files" },
        { status: 401 }
      );
    }

    // Get product slug from request
    const { productSlug } = await req.json();

    // Security Check 2: Valid product slug?
    if (!productSlug || typeof productSlug !== "string") {
      console.warn(`[Secure Download] Invalid product slug from ${session.user.email}`);
      return NextResponse.json(
        { error: "Invalid product" },
        { status: 400 }
      );
    }

    // Security Check 3: Has user purchased this product?
    const userOrders = getOrdersByEmail(session.user.email);
    const hasPurchased = userOrders.some(
      (order) => order.productSlug === productSlug
    );

    if (!hasPurchased) {
      console.warn(
        `[Secure Download] Unauthorized access: ${session.user.email} tried to download ${productSlug}`
      );
      return NextResponse.json(
        { error: "You haven't purchased this product" },
        { status: 403 }
      );
    }

    // Security Check 4: Download link exists?
    const downloadLink = getDownloadLink(productSlug);

    if (!downloadLink) {
      console.error(`[Secure Download] Missing link for product: ${productSlug}`);
      return NextResponse.json(
        { error: "Download not available" },
        { status: 404 }
      );
    }

    // ✅ ALL CHECKS PASSED - GRANT DOWNLOAD
    console.log(
      `✅ [Secure Download] Access granted: ${productSlug} → ${session.user.email}`
    );

    return NextResponse.json({
      success: true,
      downloadLink,
      productSlug,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error("[Secure Download] Server error:", error);
    return NextResponse.json(
      { error: "Download service error" },
      { status: 500 }
    );
  }
}