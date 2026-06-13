"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { CheckCircle2, Download, Lock, Package } from "lucide-react";

type OrderItem = {
  orderId: string;
  productSlug: string;
  amount: number;
  currency: string;
  paidAt: string;
  downloadUrl: string;
  tokenExpired: boolean;
};

function formatAmount(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

function formatSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function OrdersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login?next=/orders");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetch("/api/orders")
      .then((r) => r.json())
      .then((data) => {
        if (data.orders) setOrders(data.orders);
        else setError("Could not load orders.");
      })
      .catch(() => setError("Could not load orders."))
      .finally(() => setLoading(false));
  }, [status]);

  if (status === "loading" || loading) {
    return (
      <main className="bg-slate-50">
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="animate-pulse space-y-4">
            <div className="h-10 w-48 rounded-xl bg-slate-200" />
            <div className="h-32 rounded-3xl bg-slate-200" />
            <div className="h-32 rounded-3xl bg-slate-200" />
          </div>
        </section>
      </main>
    );
  }

  if (!session?.user) return null;

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="font-semibold text-blue-600">My Account</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">My Orders</h1>
        <p className="mt-4 text-slate-600">
          Your purchased products are listed below. Click <strong>Download</strong> to access your files.
          Download links are valid for <strong>7 days</strong> from purchase.
        </p>

        {/* Security notice */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <Lock className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
          <div>
            <p className="font-semibold text-slate-950">Secure download links</p>
            <p className="mt-1 text-sm text-slate-700">
              Download links are signed, tied to your account ({session.user.email}), and expire after 7 days.
              They cannot be shared or used by anyone else.
            </p>
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {orders.length === 0 && !error ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <Package className="mx-auto h-12 w-12 text-slate-300" />
            <h2 className="mt-4 text-xl font-bold text-slate-950">No orders yet</h2>
            <p className="mt-3 text-slate-600">
              Your purchases will appear here after payment is confirmed.
              Make sure you are signed in with the same email you used at checkout.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-4">
            {orders.map((order) => (
              <div
                key={order.orderId}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-950">{formatSlug(order.productSlug)}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Order #{order.orderId.slice(0, 16)}…
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Paid{" "}
                        {new Date(order.paidAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        {" · "}
                        {formatAmount(order.amount, order.currency)}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:items-end">
                    {order.tokenExpired ? (
                      <>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-400">
                          Link expired
                        </div>
                        <Link
                          href="/contact"
                          className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                        >
                          Request new link →
                        </Link>
                      </>
                    ) : (
                      <a
                        href={order.downloadUrl}
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">Not seeing your order?</p>
          <p className="mt-2 text-sm text-slate-600">
            Orders appear here only after payment is confirmed by Dodo Payments.
            If you just paid, wait a moment and refresh. Make sure you are logged in with{" "}
            <strong>{session.user.email}</strong> — the same email used at checkout.
          </p>
          <Link href="/contact" className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700">
            Contact support →
          </Link>
        </div>
      </section>
    </main>
  );
}