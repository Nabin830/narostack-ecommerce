import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Digital Products | Narostack Digital LLC",
  description:
    "Browse downloadable digital products, templates, guides, checklists, and resource packs for small businesses from Narostack Digital LLC.",
};

export default function ProductsPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="font-semibold text-blue-600">
            Downloadable Digital Products
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Digital templates, guides, checklists, and resource packs.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Narostack Digital LLC sells one-time downloadable digital products
            for small businesses. Products are delivered electronically by
            email, download link, or online access after payment confirmation.
          </p>
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-900">Digital products only</p>
            <p className="mt-1 text-sm text-slate-600">
              Listed products are templates, guides, checklists, and resource
              packs. No physical shipping is required.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Clear delivery</p>
            <p className="mt-1 text-sm text-slate-600">
              Products are delivered by email, download link, or online access
              after payment confirmation.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Invoice available</p>
            <p className="mt-1 text-sm text-slate-600">
              Online payment integration is being prepared. Customers can
              request an invoice by email.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="font-semibold text-slate-950">
            Product-only store notice
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Narostack Digital LLC does not sell custom consulting,
            done-for-you implementation, managed services, hosting, server
            access, or manual professional services through this product store.
            The products listed here are downloadable digital resources.
          </p>
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