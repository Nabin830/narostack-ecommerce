"use client";

import Image from "next/image";
import Link from "next/link";
import { CreditCard } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { dodoLinks } from "@/lib/dodoLinks";
import { paddleLinks } from "@/lib/paddleLinks";

type ProductCardProps = { product: Product };

export default function ProductCard({ product }: ProductCardProps) {
  const dodoLink   = dodoLinks[product.slug];
  const paddleLink = paddleLinks[product.slug];

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] bg-slate-100">
          <Image src={product.image} alt={product.name} fill className="object-cover transition duration-300 hover:scale-105" />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{product.badge}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{product.category}</span>
        </div>
        <Link href={`/products/${product.slug}`}>
          <h2 className="mt-4 text-xl font-bold text-slate-950 hover:text-blue-700">{product.name}</h2>
        </Link>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-2xl font-bold text-blue-600">{formatPrice(product.price)}</p>
          <p className="text-xs font-medium text-slate-500">Secure checkout</p>
        </div>
        <div className="mt-5 grid gap-2">
          {dodoLink && (
            <a href={dodoLink}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              <CreditCard className="mr-2 h-4 w-4" />Buy with Dodo
            </a>
          )}
          {paddleLink && (
            <a href={paddleLink}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
              <CreditCard className="mr-2 h-4 w-4" />Buy with Paddle
            </a>
          )}
          <AddToCartButton product={product} />
          <Link href={`/products/${product.slug}`}
            className="inline-flex justify-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
