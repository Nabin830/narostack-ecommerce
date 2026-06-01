"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Your Cart</h1>

      {items.length === 0 ? (
        <div className="mt-10 rounded-2xl border bg-white p-10 text-center shadow-soft">
          <p className="text-slate-600">Your cart is empty.</p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Shop Products
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-4">
            {items.map((item) => (
              <div
                key={item.slug}
                className="grid gap-4 rounded-2xl border bg-white p-4 shadow-sm md:grid-cols-[120px_1fr_auto] md:items-center"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={160}
                  height={120}
                  className="h-24 w-32 rounded-xl object-cover"
                />

                <div>
                  <h2 className="font-bold text-slate-900">{item.name}</h2>

                  <p className="text-sm text-slate-600">
                    {formatPrice(item.price)} each
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <label
                      htmlFor={`quantity-${item.slug}`}
                      className="text-sm text-slate-700"
                    >
                      Qty
                    </label>

                    <input
                      id={`quantity-${item.slug}`}
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => {
                        const quantity = parseInt(e.target.value, 10);

                        if (!Number.isNaN(quantity) && quantity >= 1) {
                          updateQuantity(item.slug, quantity);
                        }
                      }}
                      className="w-20 rounded-lg border px-3 py-2"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => removeFromCart(item.slug)}
                  className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Trash2 className="h-4 w-4" />
                  Remove
                </button>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-slate-900">
              Order Summary
            </h2>

            <div className="mt-6 flex justify-between border-b pb-4">
              <span className="text-slate-600">Subtotal</span>
              <strong className="text-slate-900">
                {formatPrice(subtotal)}
              </strong>
            </div>

            <div className="mt-4 flex justify-between gap-4 text-sm text-slate-600">
              <span>Delivery</span>
              <span className="text-right">
                Digital delivery by email/download
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              Online payment integration is coming soon. For now, please request
              an invoice and payment instructions by email.
            </p>

            <Link
              href="/checkout"
              className="mt-6 block rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              Request Invoice
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}