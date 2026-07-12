"use client";

import { CreditCard } from "lucide-react";

interface Props {
  priceId: string;
  className?: string;
  label?: string;
}

export default function PaddleCheckoutButton({ priceId, className, label = "Buy with Paddle" }: Props) {
  function handleClick() {
    const Paddle = (window as any).Paddle;
    if (!Paddle) {
      alert("Paddle is still loading, please try again in a moment.");
      return;
    }
    Paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      settings: {
        successUrl: "https://narostack.com/success",
        displayMode: "overlay",
      },
    });
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      <CreditCard className="mr-2 h-4 w-4 inline" />
      {label}
    </button>
  );
}
