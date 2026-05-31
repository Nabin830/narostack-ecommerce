"use client";

import { useRouter } from "next/navigation";
import type { Product } from "@/types/product";
import { useCart } from "@/components/CartContext";

export function AddToCartButton({ product, fullWidth = false }: { product: Product; fullWidth?: boolean }) {
  const { addToCart } = useCart();
  const router = useRouter();

  function handleClick() {
    addToCart(product);
    router.push("/cart");
  }

  return (
    <button
      onClick={handleClick}
      className={`${fullWidth ? "w-full" : ""} rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700`}
    >
      Add to Cart
    </button>
  );
}
