"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartContext";

export function CheckoutButton() {
  const router = useRouter();
  const { clearCart } = useCart();

  function placeOrder() {
    clearCart();
    router.push("/success");
  }

  return (
    <button onClick={placeOrder} className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
      Place Order Demo
    </button>
  );
}
