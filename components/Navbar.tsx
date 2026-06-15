"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useCart } from "@/components/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const { data: session, status } = useSession();
  const isLoggedIn = Boolean(session?.user);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-slate-950 shadow-sm ring-1 ring-slate-200">
            <Image src="/images/logo.png" alt="Narostack Digital LLC logo" fill priority sizes="48px" className="object-cover" />
          </div>
          <div className="min-w-0">
            <p className="text-base font-bold leading-tight text-slate-950 sm:text-lg">Narostack Digital LLC</p>
            <p className="text-xs text-slate-500">Digital Products</p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-700 transition hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {status === "loading" ? (
            <div className="h-10 w-20 rounded-xl bg-slate-100" />
          ) : isLoggedIn ? (
            <>
              <Link href="/account" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                <User className="h-4 w-4" />Account
              </Link>
              <Link href="/orders" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Delivery
              </Link>
              <button type="button" onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              <User className="h-4 w-4" />Login
            </Link>
          )}

          <Link href="/checkout" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Checkout
          </Link>

          <Link href="/cart" className="relative inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            <ShoppingCart className="mr-2 h-4 w-4" />Cart
            {totalItems > 0 && (
              <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-xs font-bold text-blue-600">{totalItems}</span>
            )}
          </Link>
        </div>

        <button type="button" onClick={() => setOpen((v) => !v)}
          className="inline-flex rounded-xl border border-slate-300 p-2 md:hidden" aria-label="Open menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {link.label}
              </Link>
            ))}

            {status === "loading" ? null : isLoggedIn ? (
              <>
                <Link href="/account" onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-700">
                  Account
                </Link>
                <Link href="/orders" onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-700">
                  Delivery
                </Link>
                <button type="button" onClick={() => { setOpen(false); signOut({ callbackUrl: "/" }); }}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-700">
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-700">
                  Login
                </Link>
                <Link href="/register" onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-700">
                  Register
                </Link>
              </>
            )}

            <Link href="/checkout" onClick={() => setOpen(false)}
              className="rounded-xl border border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-700">
              Checkout
            </Link>

            <Link href="/cart" onClick={() => setOpen(false)}
              className="rounded-xl bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white">
              Cart {totalItems > 0 ? `(${totalItems})` : ""}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
