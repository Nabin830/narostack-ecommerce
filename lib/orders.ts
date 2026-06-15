/**
 * lib/orders.ts
 *
 * Lightweight payment record helpers for Dodo webhook events.
 *
 * Important compliance note:
 * Narostack does NOT deliver files from this website using placeholder links.
 * Product access and digital delivery are managed inside Dodo Payments through
 * Dodo's customer-facing checkout and Entitlement/Digital Product Delivery setup.
 */

export type Order = {
  orderId: string;
  productId: string;
  productSlug: string;
  customerEmail: string;
  amount: number;
  currency: string;
  paidAt: string;
};

// In-memory record only. This is not used for product delivery.
const orderStore = new Map<string, Order>();

export function saveOrder(order: Order): Order {
  orderStore.set(order.orderId, order);
  return order;
}

export function getOrderById(orderId: string): Order | undefined {
  return orderStore.get(orderId);
}

export function getOrdersByEmail(email: string): Order[] {
  return Array.from(orderStore.values())
    .filter((o) => o.customerEmail.toLowerCase() === email.toLowerCase())
    .sort((a, b) => b.paidAt.localeCompare(a.paidAt));
}
