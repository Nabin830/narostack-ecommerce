import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Products | Narostack Digital LLC",
  description:
    "Shop digital IT products, templates, automation kits, cloud guides, cybersecurity checklists, branding kits, and IT support packages.",
};

export default function ProductsPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="font-semibold text-blue-600">Digital Products</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Digital IT products for small businesses
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Browse professional templates, guides, checklists, automation
            resources, branding kits, and support packages from Narostack
            Digital LLC. All products are delivered electronically by email,
            download, or online access after payment confirmation.
          </p>
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-900">One-time purchase</p>
            <p className="mt-1 text-sm text-slate-600">
              No subscription required for listed digital products.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Digital delivery</p>
            <p className="mt-1 text-sm text-slate-600">
              Delivered by email, download, or online access.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Invoice available</p>
            <p className="mt-1 text-sm text-slate-600">
              Request invoice while payment integration is being prepared.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}