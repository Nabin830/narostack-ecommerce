/**
 * app/api/download/[token]/route.ts
 *
 * Secure download endpoint — files never exposed directly.
 *
 * All checks must pass:
 *   1. User must be logged in (NextAuth session)
 *   2. Token must have valid HMAC signature
 *   3. Token email must match logged-in user
 *   4. Token must not be expired (7 days)
 *   5. Product file URL must be configured
 */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { verifyDownloadToken, PRODUCT_FILES } from "@/lib/orders";

export async function GET(
  req: NextRequest,
  { params }: { params: { token: string } }
) {
  const token = params.token;

  // 1. Must be logged in
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.redirect(new URL("/login?next=/orders", req.url));
  }

  const userEmail = session.user.email;

  // 2. Verify token (signature + email + expiry)
  const result = verifyDownloadToken(token, userEmail);

  // Narrow the type explicitly so TypeScript is happy
  if (result.ok === false) {
    const reason = result.reason;
    console.warn(`[Download] Rejected (${reason}) for ${userEmail}`);
    return new NextResponse(buildErrorPage(reason), {
      status: 403,
      headers: { "Content-Type": "text/html" },
    });
  }

  // At this point TypeScript knows result.ok === true and result.order exists
  const order = result.order;

  // 3. Get file URL — server-side only, never sent to browser
  const fileUrl = PRODUCT_FILES[order.productSlug];
  if (!fileUrl || fileUrl.includes("REPLACE_")) {
    console.error(`[Download] No file URL for: ${order.productSlug}`);
    return new NextResponse(buildErrorPage("file_not_configured"), {
      status: 503,
      headers: { "Content-Type": "text/html" },
    });
  }

  console.log(`[Download] ✅ ${order.productSlug} → ${userEmail}`);

  return NextResponse.redirect(fileUrl, { status: 302 });
}

function buildErrorPage(reason: string): string {
  const messages: Record<string, string> = {
    invalid_token:       "This download link is invalid.",
    invalid_signature:   "This download link has been tampered with.",
    email_mismatch:      "This link belongs to a different account. Log in with the correct email.",
    order_not_found:     "No order found for this download link.",
    token_expired:       "This download link has expired (7-day limit). Contact support.",
    file_not_configured: "This file is not yet available. Please contact support.",
  };
  const message = messages[reason] ?? "Download not available.";
  return `<!DOCTYPE html><html><head><title>Download Error</title>
<meta http-equiv="refresh" content="5;url=/orders">
<style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f8fafc}
.box{max-width:400px;padding:2rem;border:1px solid #e2e8f0;border-radius:1rem;background:#fff;text-align:center}
h1{color:#dc2626;font-size:1.25rem}p{color:#64748b;margin-top:.75rem}a{color:#2563eb}</style>
</head><body><div class="box">
<h1>Download Error</h1>
<p>${message}</p>
<p><a href="/orders">← Back to My Orders</a></p>
<p style="font-size:.75rem;margin-top:1.5rem">Redirecting in 5 seconds…</p>
</div></body></html>`;
}