import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const policyLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund", label: "Refund Policy" },
  { href: "/delivery", label: "Delivery Policy" },
];
const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Digital Products" },
  { href: "/checkout", label: "Checkout" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];
const accountLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/account", label: "Account" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-card ring-2 ring-blue-500/30">
              <Image src="/images/logo.png" alt="Narostack Digital LLC logo" fill className="object-cover" />
            </div>
            <div>
              <p className="font-display font-bold tracking-tight">Narostack Digital LLC</p>
              <p className="text-sm text-slate-400">Downloadable Digital Products</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-6 text-slate-400">
            Narostack Digital LLC sells downloadable digital products for small businesses, including website templates, automation templates, internet setup guides, digital branding kits, and business resource packs. All products are delivered automatically after payment — no human involvement required.
          </p>
          <div className="mt-6 flex items-center gap-2.5 text-sm text-slate-300">
            <span className="inline-flex rounded-md bg-blue-500/10 p-1.5 ring-1 ring-inset ring-blue-400/25">
              <Mail className="h-4 w-4 flex-shrink-0 text-blue-400" />
            </span>
            <span>pandeynabin@narostack.com</span>
          </div>
          <div className="mt-3 flex items-start gap-2.5 text-sm text-slate-300">
            <span className="inline-flex rounded-md bg-blue-500/10 p-1.5 ring-1 ring-inset ring-blue-400/25">
              <MapPin className="h-4 w-4 flex-shrink-0 text-blue-400" />
            </span>
            <span className="pt-1">30 N Gould St Ste R, Sheridan, WY 82801, United States</span>
          </div>
          <p className="mt-4 text-sm text-slate-500">Hours: Monday–Friday, 9:00 AM–5:00 PM</p>
          <p className="mt-2 text-sm text-slate-500">Instant digital delivery. Download link sent automatically after payment.</p>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-slate-300">Company</h3>
          <div className="mt-5 grid gap-3 text-sm">
            {companyLinks.map((l) => <Link key={l.href} href={l.href} className="w-fit text-slate-400 transition-colors duration-200 hover:text-blue-300">{l.label}</Link>)}
          </div>
          <h3 className="mt-9 font-display text-sm font-bold uppercase tracking-[0.14em] text-slate-300">Account</h3>
          <div className="mt-5 grid gap-3 text-sm">
            {accountLinks.map((l) => <Link key={l.href} href={l.href} className="w-fit text-slate-400 transition-colors duration-200 hover:text-blue-300">{l.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-slate-300">Policies</h3>
          <div className="mt-5 grid gap-3 text-sm">
            {policyLinks.map((l) => <Link key={l.href} href={l.href} className="w-fit text-slate-400 transition-colors duration-200 hover:text-blue-300">{l.label}</Link>)}
          </div>
          <div className="glass-dark mt-9 rounded-2xl p-5">
            <p className="text-sm font-semibold text-white">Digital product store</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">All products are digital and delivered automatically. No physical shipping. No human involvement required after payment.</p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Narostack Digital LLC. All Rights Reserved.</p>
          <p>Payments processed securely through Dodo Payments.</p>
        </div>
      </div>
    </footer>
  );
}
