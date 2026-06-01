"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Clock,
  Download,
  FileText,
  Mail,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

export default function AccountPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="bg-slate-50">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-slate-600">Loading account...</p>
          </div>
        </section>
      </main>
    );
  }

  if (!session?.user) {
    return (
      <main className="bg-slate-50">
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h1 className="text-4xl font-bold tracking-tight text-slate-950">
              Sign in required
            </h1>

            <p className="mt-4 text-slate-600">
              Please sign in with Google to view your Narostack Digital LLC
              customer account page.
            </p>

            <Link
              href="/login"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Login with Google
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              {session.user.image ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name || "Customer"}
                  width={72}
                  height={72}
                  className="rounded-full"
                />
              ) : (
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  {session.user.name?.charAt(0) || "U"}
                </div>
              )}

              <div>
                <p className="font-semibold text-blue-600">
                  Customer Account
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                  Welcome, {session.user.name || "Customer"}
                </h1>

                <p className="mt-1 text-slate-600">{session.user.email}</p>
              </div>
            </div>

            <Link
              href="/checkout"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Request Invoice
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <FileText className="h-7 w-7 text-blue-600" />
            <h2 className="mt-4 text-xl font-bold text-slate-950">
              Invoice Records
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Future customer accounts may allow customers to view invoice
              requests, payment status, and order records.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <Download className="h-7 w-7 text-blue-600" />
            <h2 className="mt-4 text-xl font-bold text-slate-950">
              Digital Downloads
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Digital products may be accessible through email, download links,
              or online account access after payment confirmation.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <Mail className="h-7 w-7 text-blue-600" />
            <h2 className="mt-4 text-xl font-bold text-slate-950">
              Support Requests
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Contact support for product delivery, invoice questions, and IT
              service enquiries.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              Account Dashboard
            </h2>

            <div className="mt-6 rounded-2xl bg-blue-50 p-5">
              <p className="font-semibold text-slate-950">
                Google sign-in is active.
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                You are signed in with Google. Full customer dashboard features
                such as order history, invoice records, and download links can
                be connected later with a database.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <PackageCheck className="h-6 w-6 text-blue-600" />
                <p className="mt-3 font-semibold text-slate-900">
                  Current Purchase Method
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Invoice request by email.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
                <p className="mt-3 font-semibold text-slate-900">
                  Payment Integration
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Secure online checkout coming soon.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <Download className="h-6 w-6 text-blue-600" />
                <p className="mt-3 font-semibold text-slate-900">
                  Delivery Method
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Email, download, or online access.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <Clock className="h-6 w-6 text-blue-600" />
                <p className="mt-3 font-semibold text-slate-900">
                  Support Hours
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Monday–Friday, 9:00 AM–5:00 PM.
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Need help now?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              For current orders, invoice requests, product delivery, or service
              enquiries, please contact Narostack Digital LLC by email.
            </p>

            <div className="mt-6 grid gap-3">
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

              <Link
                href="/products"
                className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                View Products
              </Link>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm font-semibold text-slate-900">Email</p>
              <p className="mt-1 break-words text-sm text-slate-600">
                pandeynabin@narostack.com
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}