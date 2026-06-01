import Link from "next/link";
import { Building2, Mail, ShieldCheck, UserPlus } from "lucide-react";

export const metadata = {
  title: "Register | Narostack Digital LLC",
  description:
    "Business customer registration page for Narostack Digital LLC digital products and IT services.",
};

export default function RegisterPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto grid min-h-[80vh] max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-semibold text-blue-600">Business Account</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Create a Narostack Digital customer account.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Business customer accounts are being prepared for future invoice
            tracking, digital delivery access, order history, and support
            management.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <UserPlus className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Customer Account
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Building2 className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Business Details
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Secure Access
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-2xl bg-blue-50 p-5">
            <h2 className="text-2xl font-bold text-slate-950">
              Registration coming soon
            </h2>

            <p className="mt-3 text-slate-600">
              Narostack Digital LLC is preparing customer account registration.
              This placeholder page does not create real accounts or store
              passwords.
            </p>
          </div>

          <form className="mt-6 grid gap-5">
            <div>
              <label
                htmlFor="full-name"
                className="text-sm font-semibold text-slate-800"
              >
                Full Name
              </label>

              <input
                id="full-name"
                name="fullName"
                type="text"
                placeholder="Your full name"
                disabled
                className="mt-2 w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="business-name"
                className="text-sm font-semibold text-slate-800"
              >
                Business Name
              </label>

              <input
                id="business-name"
                name="businessName"
                type="text"
                placeholder="Your business name"
                disabled
                className="mt-2 w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-500 outline-none"
              />
            </div>

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
                placeholder="business@example.com"
                disabled
                className="mt-2 w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-500 outline-none"
              />
            </div>

            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-xl bg-slate-300 px-6 py-3 font-semibold text-slate-600"
            >
              Registration Coming Soon
            </button>
          </form>

          <div className="mt-6 rounded-2xl border border-slate-200 p-5">
            <div className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 text-blue-600" />

              <div>
                <p className="font-semibold text-slate-900">
                  Need to purchase now?
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  Request an invoice and our team will send payment instructions
                  by email.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/checkout"
                className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Request Invoice
              </Link>

              <Link
                href="/login"
                className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}