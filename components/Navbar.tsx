"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartContext";

const links = [
  ["Home", "/"],
  ["Products", "/products"],
  ["About", "/about"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"]
];

export function Navbar() {
  const { totalItems } = useCart();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black text-slate-950">Narostack Digital</Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-medium text-slate-600 hover:text-blue-700">{label}</Link>)}
        </div>
        <Link href="/cart" className="relative inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50">
          <ShoppingCart className="h-4 w-4" /> Cart
          {totalItems > 0 && <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs text-white">{totalItems}</span>}
        </Link>
      </nav>
    </header>
  );
}
