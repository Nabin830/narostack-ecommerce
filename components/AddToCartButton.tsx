"use client";

import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/components/CartContext";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      Add to Cart
    </button>
  );
}