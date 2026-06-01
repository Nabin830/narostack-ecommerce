import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

export const metadata: Metadata = {
  title: {
    default: "Narostack Digital LLC",
    template: "%s | Narostack Digital LLC",
  },
  description:
    "Narostack Digital LLC provides digital IT services, software products, website templates, automation kits, cloud guides, cybersecurity checklists, branding kits, and IT support packages for small businesses.",
  keywords: [
    "Narostack Digital LLC",
    "digital IT services",
    "small business IT services",
    "website templates",
    "business automation",
    "cloud setup guide",
    "cybersecurity checklist",
    "digital branding kit",
    "IT support",
  ],
  openGraph: {
    title: "Narostack Digital LLC",
    description:
      "Digital IT services and software products for small businesses.",
    url: "https://narostack.com",
    siteName: "Narostack Digital LLC",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}