"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { Product } from "@/data/products";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      Select Product
    </button>
  );
}