"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();
  const { data: session, status } = useSession();
  const isLoggedIn = Boolean(session?.user);

  // Shrink + elevate navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "border-slate-200 shadow-[0_8px_30px_-12px_rgba(74,77,231,0.25)]"
          : "border-slate-200/60 shadow-none"
      }`}
    >
      {/* Tech beam — animated gradient line sweeping across the bottom edge */}
      <div className="nav-beam pointer-events-none" aria-hidden="true" />

      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          {/* Spinning conic-gradient orbit around the logo */}
          <div className="logo-orbit flex-shrink-0">
            <div className="relative z-10 h-11 w-11 overflow-hidden rounded-full bg-slate-950">
              <Image src="/images/logo.png" alt="Narostack Digital LLC logo" fill priority sizes="44px" className="object-cover" />
            </div>
          </div>
          <div className="min-w-0">
            <p className="font-display text-base font-bold leading-tight tracking-tight text-slate-950 sm:text-lg">Narostack Digital LLC</p>
            <p className="text-xs font-medium tracking-wide text-slate-500 transition-colors duration-300 group-hover:text-blue-600">Digital Products</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link relative rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          {status === "loading" ? (
            <div className="h-10 w-20 animate-pulse rounded-xl bg-slate-100" />
          ) : isLoggedIn ? (
            <>
              <Link href="/account" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-blue-300 hover:shadow-card">
                <User className="h-4 w-4 text-blue-600" />Account
              </Link>
              <Link href="/orders" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-blue-300 hover:shadow-card">
                Delivery
              </Link>
              <button type="button" onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-blue-300 hover:shadow-card">
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-blue-300 hover:shadow-card">
              <User className="h-4 w-4 text-blue-600" />Login
            </Link>
          )}

          <Link href="/checkout" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-blue-300 hover:shadow-card">
            Checkout
          </Link>

          {/* Cart button with shine sweep + badge pop */}
          <Link href="/cart" className="btn-shine relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-brand-gradient px-5 py-2 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-px hover:shadow-card-hover">
            <ShoppingCart className="mr-2 h-4 w-4" />Cart
            {totalItems > 0 && (
              <span className="badge-pop ml-2 rounded-full bg-white px-2 py-0.5 text-xs font-bold text-blue-700">{totalItems}</span>
            )}
          </Link>
        </div>

        <button type="button" onClick={() => setOpen((v) => !v)}
          className="inline-flex rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-colors hover:bg-slate-50 md:hidden" aria-label="Open menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="animate-fade-up border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="grid gap-2.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700">
                {link.label}
              </Link>
            ))}

            {status === "loading" ? null : isLoggedIn ? (
              <>
                <Link href="/account" onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-700 shadow-sm">
                  Account
                </Link>
                <Link href="/orders" onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-700 shadow-sm">
                  Delivery
                </Link>
                <button type="button" onClick={() => { setOpen(false); signOut({ callbackUrl: "/" }); }}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-700 shadow-sm">
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-700 shadow-sm">
                  Login
                </Link>
                <Link href="/register" onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-700 shadow-sm">
                  Register
                </Link>
              </>
            )}

            <Link href="/checkout" onClick={() => setOpen(false)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-700 shadow-sm">
              Checkout
            </Link>

            <Link href="/cart" onClick={() => setOpen(false)}
              className="rounded-xl bg-brand-gradient px-3 py-2.5 text-center text-sm font-semibold text-white shadow-card">
              Cart {totalItems > 0 ? `(${totalItems})` : ""}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
