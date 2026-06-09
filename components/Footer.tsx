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
  { href: "/checkout", label: "Request Invoice" },
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
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-700">
              <Image src="/images/logo.png" alt="Narostack Digital LLC logo" fill className="object-cover" />
            </div>
            <div>
              <p className="font-bold">Narostack Digital LLC</p>
              <p className="text-sm text-slate-400">Downloadable Digital Products</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            Narostack Digital LLC sells downloadable digital products for small businesses, including website templates, automation templates, internet setup guides, digital branding kits, and business resource packs. All products are delivered automatically after payment — no human involvement required.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
            <Mail className="h-4 w-4 flex-shrink-0 text-blue-400" />
            <span>pandeynabin@narostack.com</span>
          </div>
          <div className="mt-3 flex items-start gap-2 text-sm text-slate-300">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
            <span>30 N Gould St Ste R, Sheridan, WY 82801, United States</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">Hours: Monday–Friday, 9:00 AM–5:00 PM</p>
          <p className="mt-2 text-sm text-slate-400">Instant digital delivery. Download link sent automatically after payment.</p>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <div className="mt-4 grid gap-3 text-sm">
            {companyLinks.map((l) => <Link key={l.href} href={l.href} className="text-slate-300 hover:text-white">{l.label}</Link>)}
          </div>
          <h3 className="mt-8 font-bold">Account</h3>
          <div className="mt-4 grid gap-3 text-sm">
            {accountLinks.map((l) => <Link key={l.href} href={l.href} className="text-slate-300 hover:text-white">{l.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Policies</h3>
          <div className="mt-4 grid gap-3 text-sm">
            {policyLinks.map((l) => <Link key={l.href} href={l.href} className="text-slate-300 hover:text-white">{l.label}</Link>)}
          </div>
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm font-semibold text-white">Digital product store</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">All products are digital and delivered automatically. No physical shipping. No human involvement required after payment.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Narostack Digital LLC. All Rights Reserved.</p>
          <p>Payments processed securely through Dodo Payments.</p>
        </div>
      </div>
    </footer>
  );
}
