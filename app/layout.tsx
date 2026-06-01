import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: {
    default: "Narostack Digital LLC",
    template: "%s | Narostack Digital LLC",
  },
  description:
    "Narostack Digital LLC sells downloadable digital products for small businesses, including website templates, automation templates, cloud setup guides, digital branding kits, and online business resource packs.",
  keywords: [
    "Narostack Digital LLC",
    "downloadable digital products",
    "small business templates",
    "website templates",
    "business automation templates",
    "cloud setup guide",
    "digital branding kit",
    "digital resource packs",
  ],
  openGraph: {
    title: "Narostack Digital LLC",
    description:
      "Downloadable templates, guides, and digital resource packs for small businesses.",
    url: "https://narostack.com",
    siteName: "Narostack Digital LLC",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}