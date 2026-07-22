"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import SecureDownloadButton from "@/components/SecureDownloadButton";
import { File, ShoppingBag } from "lucide-react";

type Order = {
  orderId: string;
  productId: string;
  productSlug: string;
  customerEmail: string;
  amount: number;
  currency: string;
  paidAt: string;
};

export default function PurchasesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [purchases, setPurchases] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/my-purchases")
        .then((res) => res.json())
        .then((data) => {
          setPurchases(data.orders ?? []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to load purchases:", err);
          setLoading(false);
        });
    }
  }, [status]);

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

  if (!session?.user) return null;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">📥 My Purchases</h1>
          <p className="mt-2 text-lg text-slate-600">Download your purchased digital products</p>
        </div>

        {purchases.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <ShoppingBag className="mx-auto h-16 w-16 text-slate-300" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">No purchases yet</h2>
            <p className="mt-2 text-slate-600">Start shopping to get access to digital products</p>
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
                      <p className="mt-1 text-sm text-slate-600">Order ID: {purchase.orderId}</p>
                      <p className="text-sm text-slate-500">
                        Purchased {new Date(purchase.paidAt).toLocaleDateString()} • {purchase.currency}{" "}
                        {purchase.amount.toFixed(2)}
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
      </section>
    </main>
  );
}