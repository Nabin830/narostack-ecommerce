"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/components/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {product.badge}
          </span>

          <span className="text-sm font-semibold text-slate-900">
            {formatPrice(product.price)}
          </span>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-bold text-slate-900 transition hover:text-blue-700">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-slate-600">
          {product.shortDescription}
        </p>

        <p className="mt-3 text-xs font-medium text-slate-500">
          Digital delivery by email/download
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="rounded-xl border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            View Product
          </Link>

          <button
            type="button"
            onClick={handleAddToCart}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}