import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { AddToCartButton } from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
      <Image src={product.image} alt={product.name} width={900} height={650} className="rounded-3xl object-cover shadow-soft" />
      <section>
        <p className="w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{product.category}</p>
        <h1 className="mt-5 text-4xl font-bold text-slate-950">{product.name}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{product.description}</p>
        <p className="mt-6 text-3xl font-bold text-slate-950">{formatPrice(product.price)}</p>
        <div className="mt-8"><AddToCartButton product={product} fullWidth /></div>
        <div className="mt-8 rounded-2xl border bg-white p-6">
          <h2 className="font-bold">What is included</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-600">{product.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
        </div>
        <p className="mt-4 text-sm text-slate-500">Digital delivery by email/download. Real payment provider can be connected later.</p>
      </section>
    </main>
  );
}
