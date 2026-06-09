import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = { title: "Order Confirmed | Narostack Digital LLC", description: "Your digital product order has been received." };

export default function SuccessPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="flex justify-center"><CheckCircle2 className="h-16 w-16 text-blue-600" /></div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950">Order Received</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">Thank you for your order. Your digital product will be delivered automatically by download link after payment confirmation.</p>
        <p className="mt-4 text-slate-600">All products are downloadable digital resources only — no physical items are shipped, no human involvement required.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/products" className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">View Products</Link>
          <Link href="/contact" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50">Contact Support</Link>
        </div>
      </section>
    </main>
  );
}
