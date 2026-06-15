import Link from "next/link";
import { Download, Mail, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Order Delivery | Narostack Digital LLC",
  description:
    "Narostack Digital LLC delivers digital products after successful payment through Dodo Payments.",
};

export default function OrdersPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <Download className="h-7 w-7" />
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950">
            Digital Product Delivery
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Narostack Digital LLC delivers digital products only after a successful payment
            through Dodo Payments. Download links, files, or access instructions are sent
            automatically to the email address used at checkout.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="flex items-start gap-3 rounded-2xl bg-blue-50 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
              <div>
                <p className="font-semibold text-slate-950">Payment required first</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  No digital product access is provided before Dodo Payments confirms a successful payment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-green-50 p-4">
              <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <p className="font-semibold text-slate-950">Check your checkout email</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Your delivery email is sent automatically by Dodo Payments. Please check your inbox and spam folder.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
