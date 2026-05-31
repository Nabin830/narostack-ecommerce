import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-950">Digital Products</h1>
      <p className="mt-4 max-w-2xl text-slate-600">Browse digital templates, guides, checklists, and online service packages from Narostack Digital LLC.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </main>
  );
}
