import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { getOrdersByEmail } from "@/lib/orders";

/**
 * GET /api/my-purchases
 *
 * Server-side endpoint that returns the logged-in user's orders.
 * The purchases page (a client component) calls this instead of
 * importing lib/orders directly — direct imports run in the browser
 * and would always return empty data.
 */
export async function GET() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const orders = await getOrdersByEmail(session.user.email);
  return NextResponse.json({ orders });
}