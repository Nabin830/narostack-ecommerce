"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CreditCard, Trash2 } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { formatPrice } from "@/lib/format";

const polarLinks: Record<string, string> = {
  "business-website-starter-template":
    "https://buy.polar.sh/polar_cl_csSBYq3JO1f7bYFUh83OPG7L55sTMhav5Em0b3yJATM",

  "small-business-automation-template-kit":
    "https://buy.polar.sh/polar_cl_TQk5oOqRAXFdSKAmtZ0T4CiY22ALmAYhTHOAW0S06Xd",

  "cloud-setup-guide":
    "https://buy.polar.sh/polar_cl_sE4nItVkvET3vzB0TreP0BLmtxqhG3THe1vzU2JRIns",

  "digital-branding-starter-kit":
    "https://buy.polar.sh/polar_cl_V14Gt5RmWiOQeIeTuxNvIhGiWG869BXIUcjE4108y5H",
};

export default function CartPage() {
  const { items, removeFromCart, subtotal } = useCart();

  const item = items[0];
  const polarCheckoutLink = item ? polarLinks[item.slug] : "";

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js"
        strategy="afterInteractive"
        data-auto-init
      />

      <main className="bg-slate-50">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-bold text-slate-950">Your Cart</h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Your cart can contain one digital product at a time. You can pay now
            or request an invoice for the selected product.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="font-semibold text-slate-950">
              Digital product cart notice
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              Products are delivered electronically by email, download link, or
              online access after payment confirmation.
            </p>
          </div>

          {items.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">
                Your cart is empty
              </h2>

              <p className="mt-3 text-slate-600">
                Browse our downloadable templates, guides, and resource packs.
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
                <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[120px_1fr_auto] md:items-center">
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
                      {formatPrice(item.price)}
                    </p>

                    <p className="mt-1 text-xs font-medium text-blue-700">
                      Digital delivery by email, download link, or online access
                    </p>

                    <p className="mt-3 text-sm text-slate-600">Quantity: 1</p>
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

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <p className="font-semibold text-slate-950">
                    One product cart
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    If you select another product, it will replace the current
                    product in your cart.
                  </p>
                </div>
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
                    Electronic delivery after payment confirmation
                  </span>
                </div>

                <div className="mt-5 rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Choose payment method
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    Pay directly through Polar or request invoice details by
                    email.
                  </p>
                </div>

                {polarCheckoutLink && (
                  <a
                    href={polarCheckoutLink}
                    data-polar-checkout
                    data-polar-checkout-theme="dark"
                    className="mt-6 flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay Now
                  </a>
                )}

                <Link
                  href={`/checkout?product=${item.slug}`}
                  className="mt-3 block rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
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
    </>
  );
}