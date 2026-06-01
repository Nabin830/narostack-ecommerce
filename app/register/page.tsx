import Link from "next/link";
import { Building2, ShieldCheck, UserPlus } from "lucide-react";
import AuthButton from "@/components/AuthButton";

export const metadata = {
  title: "Register | Narostack Digital LLC",
  description:
    "Register with Google for Narostack Digital LLC customer account access.",
};

export default function RegisterPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto grid min-h-[80vh] max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-semibold text-blue-600">Google Registration</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Register using your Google account.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Create customer account access for Narostack Digital LLC using
            Google sign-in. No password is collected or stored by our website.
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
                Business Access
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Google Sign-In
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-2xl bg-blue-50 p-5">
            <h2 className="text-2xl font-bold text-slate-950">
              Continue with Google
            </h2>

            <p className="mt-3 text-slate-600">
              Use your Google account to register. This keeps account access
              simple and avoids password storage on the Narostack Digital LLC
              website.
            </p>
          </div>

          <div className="mt-6">
            <AuthButton />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-600">
              After signing in, you can access customer account features,
              request invoices, contact support, and use future delivery tools.
            </p>

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

          <p className="mt-5 text-center text-sm text-slate-600">
            Already registered?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Login with Google
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}