import Link from "next/link";
import { Mail } from "lucide-react";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund", label: "Refund Policy" },
  { href: "/delivery", label: "Delivery Policy" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
              N
            </div>

            <div>
              <p className="font-bold">Narostack Digital LLC</p>
              <p className="text-sm text-slate-400">
                Digital IT Services & Software Products
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            Narostack Digital LLC provides website templates, business
            automation resources, cloud setup guidance, cybersecurity
            checklists, digital branding kits, and IT support services for small
            businesses.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
            <Mail className="h-4 w-4 text-blue-400" />
            <span>pandeynabin@narostack.com</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Company</h3>

          <div className="mt-4 grid gap-3 text-sm">
            <Link href="/about" className="text-slate-300 hover:text-white">
              About
            </Link>

            <Link href="/products" className="text-slate-300 hover:text-white">
              Products
            </Link>

            <Link href="/checkout" className="text-slate-300 hover:text-white">
              Request Invoice
            </Link>

            <Link href="/contact" className="text-slate-300 hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Policies</h3>

          <div className="mt-4 grid gap-3 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Narostack Digital LLC. All Rights Reserved.</p>
          <p>Digital delivery by email, download, or online access.</p>
        </div>
      </div>
    </footer>
  );
}