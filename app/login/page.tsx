import Link from "next/link";
import { Download, Lock, Mail, ShieldCheck } from "lucide-react";
import AuthButton from "@/components/AuthButton";

export const metadata = {
  title: "Login | Narostack Digital LLC",
  description:
    "Login to Narostack Digital LLC using Google to access customer account features for downloadable digital products.",
};

export default function LoginPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto grid min-h-[80vh] max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-semibold text-blue-600">Google Account Login</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Sign in to Narostack Digital LLC.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Use your Google account to access customer account features for
            order history, digital product delivery, download access, and
            product support. Narostack Digital LLC does not collect or store
            website passwords.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Mail className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Order History
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Download className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Digital Delivery
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
            <div className="flex items-start gap-3">
              <Lock className="mt-1 h-6 w-6 text-blue-600" />

              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  Continue with Google
                </h2>

                <p className="mt-3 text-slate-600">
                  Sign in using your Google account. This keeps customer access
                  simple and avoids password storage on the Narostack Digital
                  LLC website.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <AuthButton />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-600">
              Narostack Digital LLC sells downloadable templates, guides,
              checklists, and resource packs. Products are delivered by email,
              download link, or online access after payment confirmation.
            </p>

            <p className="mt-3 text-sm text-slate-600">
              This website sells downloadable digital products only.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/checkout"
                className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Go to Checkout
              </Link>

              <Link
                href="/products"
                className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                View Products
              </Link>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-slate-600">
            New customer?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Register with Google
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}