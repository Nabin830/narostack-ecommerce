/**
 * lib/orders.ts
 *
 * Persistent order storage using Upstash Redis.
 * Replaces the old in-memory Map, which did not survive
 * across Vercel's serverless function instances.
 *
 * Used by both the Paddle and Dodo webhooks.
 */

import { redis } from "@/lib/redis";

export type Order = {
  orderId: string;
  productId: string;
  productSlug: string;
  customerEmail: string;
  amount: number;
  currency: string;
  paidAt: string;
};

const ORDER_KEY = (orderId: string) => `order:${orderId}`;
const EMAIL_INDEX_KEY = (email: string) => `orders_by_email:${email.toLowerCase().trim()}`;

/**
 * Save an order and index it by customer email.
 */
export async function saveOrder(order: Order): Promise<Order> {
  await redis.set(ORDER_KEY(order.orderId), order);

  const emailKey = EMAIL_INDEX_KEY(order.customerEmail);
  await redis.sadd(emailKey, order.orderId);

  return order;
}

/**
 * Look up a single order by its ID (used for webhook deduplication).
 */
export async function getOrderById(orderId: string): Promise<Order | undefined> {
  const order = await redis.get<Order>(ORDER_KEY(orderId));
  return order ?? undefined;
}

/**
 * Get all orders for a customer email, newest first.
 */
export async function getOrdersByEmail(email: string): Promise<Order[]> {
  const emailKey = EMAIL_INDEX_KEY(email);
  const orderIds = await redis.smembers(emailKey);

  if (!orderIds || orderIds.length === 0) return [];

  const orders = await Promise.all(
    orderIds.map((id) => redis.get<Order>(ORDER_KEY(id)))
  );

  return orders
    .filter((o): o is Order => o !== null)
    .sort((a, b) => b.paidAt.localeCompare(a.paidAt));
}