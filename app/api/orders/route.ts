/**
 * app/api/orders/route.ts
 *
 * Returns orders for the currently logged-in user only.
 * Email from session must match order email — no cross-account access.
 */

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getOrdersByEmail } from "@/lib/orders";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const orders = getOrdersByEmail(session.user.email);

  // Return safe subset — downloadToken is wrapped in /api/download/ route
  const safe = orders.map((o) => ({
    orderId:      o.orderId,
    productSlug:  o.productSlug,
    amount:       o.amount,
    currency:     o.currency,
    paidAt:       o.paidAt,
    downloadUrl:  `/api/download/${o.downloadToken}`,
    tokenExpired: Date.now() > o.tokenExpiresAt,
  }));

  return NextResponse.json({ orders: safe });
}