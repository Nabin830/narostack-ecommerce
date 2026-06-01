import Link from "next/link";
import { Lock, Mail, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Login | Narostack Digital LLC",
  description:
    "Customer account login page for Narostack Digital LLC digital products and IT services.",
};

export default function LoginPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto grid min-h-[80vh] max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-semibold text-blue-600">Customer Account</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Login to your Narostack Digital account.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Customer account access is being prepared for future order history,
            digital delivery access, invoice records, and support requests.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Mail className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Invoice Support
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Lock className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Account Access
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Secure Delivery
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-2xl bg-blue-50 p-5">
            <h2 className="text-2xl font-bold text-slate-950">
              Login coming soon
            </h2>

            <p className="mt-3 text-slate-600">
              Narostack Digital LLC is preparing secure customer account access.
              Please do not enter real passwords on this placeholder page.
            </p>
          </div>

          <form className="mt-6 grid gap-5">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-800"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="customer@example.com"
                disabled
                className="mt-2 w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-semibold text-slate-800"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password access coming soon"
                disabled
                className="mt-2 w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-500 outline-none"
              />
            </div>

            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-xl bg-slate-300 px-6 py-3 font-semibold text-slate-600"
            >
              Login Coming Soon
            </button>
          </form>

          <div className="mt-6 rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-600">
              For purchases today, please request an invoice. Digital products
              are delivered by email, download, or online access after payment
              confirmation.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/checkout"
                className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Request Invoice
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Contact Support
              </Link>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-slate-600">
            Need an account later?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              View registration page
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}