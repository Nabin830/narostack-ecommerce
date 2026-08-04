"use client";

import Image from "next/image";
import Link from "next/link";
import { CreditCard } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import PaddleCheckoutButton from "@/components/PaddleCheckoutButton";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { dodoLinks } from "@/lib/dodoLinks";
import { paddleLinks } from "@/lib/paddleLinks";
import { polarProductIds } from "@/lib/polarProductIds";

type ProductCardProps = { product: Product };

export default function ProductCard({ product }: ProductCardProps) {
  const dodoLink   = dodoLinks[product.slug];
  const paddleLink = paddleLinks[product.slug];
  const polarReady = Boolean(polarProductIds[product.slug]);

  return (
    <div className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card hover:border-blue-300/60 hover:shadow-card-hover">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/15">{product.badge}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-inset ring-slate-500/10">{product.category}</span>
        </div>
        <Link href={`/products/${product.slug}`}>
          <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-950 transition-colors duration-200 hover:text-blue-700">{product.name}</h2>
        </Link>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
        <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4">
          <p className="font-display text-2xl font-bold tracking-tight text-slate-950">{formatPrice(product.price)}</p>
          <p className="text-xs font-medium text-slate-500">Secure checkout</p>
        </div>
        <div className="mt-5 grid gap-2.5">
          {dodoLink && (
            <a href={dodoLink}
              className="inline-flex items-center justify-center rounded-xl bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-px hover:shadow-card-hover hover:brightness-110">
              <CreditCard className="mr-2 h-4 w-4" />Buy with Dodo
            </a>
          )}
          {paddleLink && (
            <PaddleCheckoutButton
              priceId={paddleLink}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-px hover:bg-indigo-700 hover:shadow-card-hover"
            />
          )}
          {polarReady && (
            <a href={`/api/polar/checkout?product=${product.slug}`}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-px hover:bg-slate-800 hover:shadow-card-hover">
              <CreditCard className="mr-2 h-4 w-4" />Buy with Polar
            </a>
          )}
          <AddToCartButton product={product} />
          <Link href={`/products/${product.slug}`}
            className="inline-flex justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
