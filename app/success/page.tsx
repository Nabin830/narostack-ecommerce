import Link from "next/link";
import { CheckCircle2, Download, Mail } from "lucide-react";

export const metadata = {
  title: "Payment Confirmed | Narostack Digital LLC",
  description: "Your payment was successful. Your download link will be sent automatically.",
};

export default function SuccessPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-2xl px-6 py-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm text-center">
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950">
            Payment Confirmed
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Thank you for your purchase. Your digital product is on its way.
          </p>

          <div className="mt-8 grid gap-4 text-left">
            <div className="flex items-start gap-3 rounded-2xl bg-green-50 p-4">
              <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <p className="font-semibold text-slate-950">Check your email</p>
                <p className="mt-1 text-sm text-slate-600">
                  Dodo Payments is sending your download link to the email you entered at checkout. This arrives within a few minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-blue-50 p-4">
              <Download className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
              <div>
                <p className="font-semibold text-slate-950">Access from My Orders</p>
                <p className="mt-1 text-sm text-slate-600">
                  You can also download your file anytime from <strong>My Orders</strong> — sign in with the same email you used at checkout.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/orders"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              My Orders
            </Link>
            <Link
              href="/products"
              className="inline-flex justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Continue Shopping
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Need help? Email{" "}
            <a href="mailto:pandeynabin@narostack.com" className="text-blue-600 hover:underline">
              pandeynabin@narostack.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}