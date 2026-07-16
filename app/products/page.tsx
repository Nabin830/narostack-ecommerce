"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

// 6 categories — each product's category maps to one of these
const CATEGORY_MAP: Record<string, string> = {
  // Business & Planning
  Business:    "Business & Planning",
  Automation:  "Business & Planning",
  Technology:  "Business & Planning",
  // Marketing & Content
  Marketing:   "Marketing & Content",
  Content:     "Marketing & Content",
  // Social Media
  "Social Media": "Social Media",
  // Finance & Legal
  Finance:     "Finance & Legal",
  // Branding & Design
  Branding:    "Branding & Design",
  Website:     "Branding & Design",
  // Productivity
  Productivity: "Productivity",
};

const TABS = [
  { label: "All",                  icon: "◈", count: products.length },
  { label: "Business & Planning",  icon: "💼", count: products.filter(p => CATEGORY_MAP[p.category] === "Business & Planning").length },
  { label: "Marketing & Content",  icon: "📣", count: products.filter(p => CATEGORY_MAP[p.category] === "Marketing & Content").length },
  { label: "Social Media",         icon: "📱", count: products.filter(p => CATEGORY_MAP[p.category] === "Social Media").length },
  { label: "Finance & Legal",      icon: "💰", count: products.filter(p => CATEGORY_MAP[p.category] === "Finance & Legal").length },
  { label: "Branding & Design",    icon: "🎨", count: products.filter(p => CATEGORY_MAP[p.category] === "Branding & Design").length },
  { label: "Productivity",         icon: "⚡", count: products.filter(p => CATEGORY_MAP[p.category] === "Productivity").length },
];

export default function ProductsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? products
    : products.filter(p => CATEGORY_MAP[p.category] === active);

  return (
    <main className="bg-slate-50">
      {/* Premium header band */}
      <div className="relative overflow-hidden bg-slate-950 bg-ink-radial">
        <div className="bg-grid-ink pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Downloadable Digital Products</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Digital templates, guides, and resource packs.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              {products.length} downloadable digital products for small businesses. Pay securely
              through Dodo Payments and receive your download link automatically.
            </p>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-12">

        {/* Stats bar */}
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-900">Digital products only</p>
            <p className="mt-1 text-sm text-slate-600">Templates, guides, and resource packs. Nothing physical is shipped.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Instant delivery</p>
            <p className="mt-1 text-sm text-slate-600">Download link sent automatically after payment. No waiting, no manual steps.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Secure checkout</p>
            <p className="mt-1 text-sm text-slate-600">Pay securely through Dodo Payments.</p>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-6 rounded-3xl border border-blue-200/60 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-card">
          <p className="font-semibold text-slate-950">Product store notice</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Narostack Digital LLC sells downloadable digital resources only. All products are
            delivered electronically and automatically after payment — no physical items are
            shipped, no human involvement required.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10">
          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActive(tab.label)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  active === tab.label
                    ? "bg-brand-gradient text-white shadow-card-hover"
                    : "bg-white text-slate-700 border border-slate-200 shadow-sm hover:-translate-y-px hover:border-blue-300 hover:text-blue-600 hover:shadow-card"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                  active === tab.label
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active category heading */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              {active === "All" ? "All Products" : active}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
              {active !== "All" ? ` in ${active}` : " across all categories"}
            </p>
          </div>
          {active !== "All" && (
            <button
              type="button"
              onClick={() => setActive("All")}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all →
            </button>
          )}
        </div>

        {/* Product grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Empty state (shouldn't happen but just in case) */}
        {filtered.length === 0 && (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-950">No products in this category yet.</p>
            <button type="button" onClick={() => setActive("All")}
              className="mt-4 rounded-xl bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-px hover:shadow-card-hover hover:brightness-110">
              View all products
            </button>
          </div>
        )}

      </section>
    </main>
  );
}
