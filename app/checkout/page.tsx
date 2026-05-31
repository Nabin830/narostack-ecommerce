"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { formatPrice } from "@/lib/format";
import { CheckoutButton } from "@/components/CheckoutButton";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  if (items.length === 0) {
    return <main className="mx-auto max-w-3xl px-6 py-16"><h1 className="text-3xl font-bold">Checkout</h1><p className="mt-4 text-slate-600">Your cart is empty.</p><Link href="/products" className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white">Shop Products</Link></main>;
  }
  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1fr_380px]">
      <section className="rounded-2xl border bg-white p-6 shadow-soft">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="mt-2 text-slate-600">Demo checkout page. Connect Pockyt, Stripe, PayPal, or Paddle later.</p>
        <form className="mt-8 grid gap-4">
          <input className="rounded-xl border px-4 py-3" placeholder="Full name" />
          <input className="rounded-xl border px-4 py-3" placeholder="Email address" defaultValue="pandeynabin@narostack.com" />
          <input className="rounded-xl border px-4 py-3" placeholder="Company name optional" />
          <textarea className="min-h-28 rounded-xl border px-4 py-3" placeholder="Order notes optional" />
        </form>
        <div className="mt-6 rounded-2xl bg-blue-50 p-4 text-sm text-blue-900">Payment is not live yet. This button creates a demo order success page only.</div>
      </section>
      <aside className="h-fit rounded-2xl border bg-white p-6 shadow-soft">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <div className="mt-5 grid gap-3">{items.map((item) => <div key={item.slug} className="flex justify-between text-sm"><span>{item.name} × {item.quantity}</span><strong>{formatPrice(item.price * item.quantity)}</strong></div>)}</div>
        <div className="mt-6 flex justify-between border-t pt-4 text-lg"><span>Total</span><strong>{formatPrice(subtotal)}</strong></div>
        <div className="mt-6"><CheckoutButton /></div>
      </aside>
    </main>
  );
}
