import Link from "next/link";
import { ShieldCheck, Cloud, Zap } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold text-blue-700">Narostack Digital LLC</p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-slate-950">Professional digital products and IT services for small businesses.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">Buy ready-to-use digital products, templates, checklists, cloud guides, and online IT support packages. Payment integration can be connected later.</p>
            <div className="mt-8 flex gap-4"><Link href="/products" className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">Shop Products</Link><Link href="/contact" className="rounded-xl border px-6 py-3 font-semibold hover:bg-white">Contact Us</Link></div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-bold">Why customers choose us</h2>
            <div className="mt-6 grid gap-4">
              <div className="flex gap-3"><ShieldCheck className="text-blue-600" /><p>Clear policies, digital delivery, and simple support.</p></div>
              <div className="flex gap-3"><Cloud className="text-blue-600" /><p>Cloud, website, cybersecurity, branding, and automation resources.</p></div>
              <div className="flex gap-3"><Zap className="text-blue-600" /><p>One-time digital products with fast online access.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-4"><div><h2 className="text-3xl font-bold">Featured Products</h2><p className="mt-2 text-slate-600">Professional digital tools for small business operations.</p></div><Link href="/products" className="font-semibold text-blue-700">View all</Link></div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.slice(0,3).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
    </main>
  );
}
