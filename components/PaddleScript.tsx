"use client";

import Script from "next/script";

export default function PaddleScript() {
  return (
    <Script
      src="https://cdn.paddle.com/paddle/v2/paddle.js"
      strategy="afterInteractive"
      onLoad={() => {
        const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
        if (token) {
          (window as any).Paddle.Initialize({ token });
        }
      }}
    />
  );
}
