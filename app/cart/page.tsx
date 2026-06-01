"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-950">Your Cart</h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Review your selected downloadable digital products and request an
          invoice to complete your order.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="font-semibold text-slate-950">
            Digital product cart notice
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            Items in this cart are downloadable digital resources only. Products
            do not include physical shipping, custom consulting, done-for-you
            implementation, hosting, server access, managed services, or manual
            professional services.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              Your cart is empty
            </h2>

            <p className="mt-3 text-slate-600">
              Browse our downloadable templates, guides, checklists, and
              resource packs for small businesses.
            </p>

            <Link
              href="/products"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Shop Digital Products
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="grid gap-5">
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[120px_1fr_auto] md:items-center"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={120}
                    className="h-24 w-32 rounded-2xl object-cover"
                  />

                  <div>
                    <Link href={`/products/${item.slug}`}>
                      <h2 className="font-bold text-slate-950 hover:text-blue-700">
                        {item.name}
                      </h2>
                    </Link>

                    <p className="mt-1 text-sm text-slate-600">
                      {formatPrice(item.price)} each
                    </p>

                    <p className="mt-1 text-xs font-medium text-blue-700">
                      Digital delivery by email, download link, or online access
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
                        className="w-20 rounded-lg border border-slate-300 px-3 py-2 text-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.slug)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between border-b border-slate-200 pb-4">
                <span className="text-slate-600">Subtotal</span>
                <strong className="text-slate-950">
                  {formatPrice(subtotal)}
                </strong>
              </div>

              <div className="mt-4 flex justify-between gap-4 text-sm text-slate-600">
                <span>Delivery</span>
                <span className="text-right">
                  Digital delivery after payment confirmation
                </span>
              </div>

              <div className="mt-5 rounded-2xl bg-blue-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Invoice checkout
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Online payment integration is being prepared. For now, request
                  an invoice and receive payment instructions by email.
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Product-only purchase
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Cart items are downloadable digital products only. No custom
                  consulting, manual setup, or physical shipping is included.
                </p>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
                Request Invoice
              </Link>

              <Link
                href="/products"
                className="mt-3 block rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}