"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Clock, CreditCard, Download, ShieldCheck, User } from "lucide-react";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <main className="bg-slate-50">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="animate-pulse space-y-4">
            <div className="h-10 w-48 rounded-xl bg-slate-200" />
            <div className="h-40 rounded-3xl bg-slate-200" />
          </div>
        </section>
      </main>
    );
  }

  if (!session?.user) return null;

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-semibold text-blue-600">My Account</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Account Overview</h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <User className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-950">{session.user.name || "Account"}</p>
                  <p className="text-sm text-slate-500">{session.user.email}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="mt-6 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Sign Out
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CreditCard className="h-6 w-6 text-blue-600" />
                <p className="mt-3 font-semibold text-slate-900">Secure Payments</p>
                <p className="mt-2 text-sm text-slate-600">Pay securely via Dodo Payments.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Download className="h-6 w-6 text-blue-600" />
                <p className="mt-3 font-semibold text-slate-900">Instant Delivery</p>
                <p className="mt-2 text-sm text-slate-600">Download link sent automatically after payment confirmation.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Clock className="h-6 w-6 text-blue-600" />
                <p className="mt-3 font-semibold text-slate-900">Support Hours</p>
                <p className="mt-2 text-sm text-slate-600">Monday–Friday, 9:00 AM–5:00 PM.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">Account Dashboard</h2>
              <div className="mt-6 rounded-2xl bg-blue-50 p-5">
                <p className="font-semibold text-slate-950">Google sign-in is active.</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">You are signed in with Google. Your order history and download links are available in My Orders.</p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                  <p className="mt-3 font-semibold text-slate-900">Payment Options</p>
                  <p className="mt-2 text-sm text-slate-600">Pay securely via Dodo Payments.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <Download className="h-6 w-6 text-blue-600" />
                  <p className="mt-3 font-semibold text-slate-900">Digital Delivery</p>
                  <p className="mt-2 text-sm text-slate-600">Products delivered automatically after payment confirmation.</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Need help?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">For product delivery questions or support, contact Narostack Digital LLC by email.</p>
            <div className="mt-6 grid gap-3">
              <Link href="/orders" className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700">My Orders &amp; Downloads</Link>
              <Link href="/checkout" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">Shop Products</Link>
              <Link href="/contact" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">Contact Support</Link>
              <Link href="/products" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">View Products</Link>
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm font-semibold text-slate-900">Email</p>
              <p className="mt-1 break-words text-sm text-slate-600">pandeynabin@narostack.com</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}