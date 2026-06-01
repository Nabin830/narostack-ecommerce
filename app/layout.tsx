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
    "Narostack Digital LLC provides digital IT services, software products, website templates, automation kits, cloud guides, cybersecurity checklists, branding kits, and IT support packages for small businesses.",
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