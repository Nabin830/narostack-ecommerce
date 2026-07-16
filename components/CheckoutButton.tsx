"use client";

import Link from "next/link";

export function CheckoutButton() {
  return (
    <Link
      href="/checkout"
      className="block w-full rounded-xl bg-brand-gradient px-6 py-3 text-center font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-px hover:shadow-card-hover hover:brightness-110"
    >
      Proceed to Checkout
    </Link>
  );
}
