"use client";

import Link from "next/link";

export function CheckoutButton() {
  return (
    <Link
      href="/checkout"
      className="block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
    >
      Proceed to Checkout
    </Link>
  );
}
