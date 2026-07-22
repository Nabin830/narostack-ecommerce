"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { getOrdersByEmail } from "@/lib/orders";
import SecureDownloadButton from "@/components/SecureDownloadButton";
import type { Order } from "@/lib/orders";
import { File, ShoppingBag } from "lucide-react";

export default function PurchasesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [purchases, setPurchases] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Load user's purchases
  useEffect(() => {
    if (session?.user?.email) {
      const orders = getOrdersByEmail(session.user.email);
      setPurchases(orders);
      setLoading(false);
    }
  }, [session?.user?.email]);

  if (status === "loading" || loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="h-12 w-12 mx-auto rounded-full bg-blue-100 animate-pulse" />
          <p className="mt-4 text-slate-600">Loading your purchases...</p>
        </div>
      </main>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">
            📥 My Purchases
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Download your purchased digital products
          </p>
        </div>

        {purchases.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <ShoppingBag className="mx-auto h-16 w-16 text-slate-300" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">
              No purchases yet
            </h2>
            <p className="mt-2 text-slate-600">
              Start shopping to get access to digital products
            </p>
            <Link
              href="/products"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {purchases.map((purchase) => (
              <div
                key={purchase.orderId}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 flex-shrink-0">
                      <File className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">
                        {purchase.productSlug.replace(/-/g, " ")}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Order ID: {purchase.orderId}
                      </p>
                      <p className="text-sm text-slate-500">
                        Purchased {new Date(purchase.paidAt).toLocaleDateString()} • {purchase.currency} {purchase.amount.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <SecureDownloadButton
                    productSlug={purchase.productSlug}
                    productName={purchase.productSlug}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 rounded-2xl bg-blue-50 p-6 border border-blue-200">
          <h3 className="font-semibold text-blue-900">💡 Tips</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-800">
            <li>✅ Click the download button to get your file</li>
            <li>✅ Files are hosted securely on Google Drive</li>
            <li>✅ You can download multiple times</li>
            <li>✅ Files are private and only accessible to you</li>
          </ul>
        </div>
      </section>
    </main>
  );
}