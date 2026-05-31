import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">Narostack Digital LLC</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">Digital IT services and one-time digital products for small businesses.</p>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/faq">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Policies</h4>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link><Link href="/refund">Refund Policy</Link><Link href="/delivery">Delivery Policy</Link>
          </div>
        </div>
      </div>
      <p className="border-t px-6 py-4 text-center text-sm text-slate-500">© 2026 Narostack Digital LLC. Email: pandeynabin@narostack.com</p>
    </footer>
  );
}
