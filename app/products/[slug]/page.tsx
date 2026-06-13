import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, CreditCard, Download, FileText, Mail, ShoppingCart } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductBySlug, products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { dodoLinks } from "@/lib/dodoLinks";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found | Narostack Digital LLC" };
  return { title: `${product.name} | Narostack Digital LLC`, description: product.shortDescription };
}

export default function ProductDetailsPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  const checkoutLink = dodoLinks[product.slug];

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-700">← Back to Products</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-square bg-slate-100">
              <Image src={product.image} alt={product.name} fill priority className="object-cover" />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{product.badge}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{product.category}</span>
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{product.name}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{product.description}</p>
            <div className="mt-6 text-4xl font-bold text-blue-600">{formatPrice(product.price)}</div>
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex gap-3">
                <Download className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                <div>
                  <p className="font-bold text-slate-900">Instant digital delivery</p>
                  <p className="mt-1 text-sm text-slate-700">{product.delivery}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {checkoutLink && (
                <a href={checkoutLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700">
                  <CreditCard className="mr-2 h-4 w-4" />Buy Now
                </a>
              )}
              <AddToCartButton product={product} />

            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><ShoppingCart className="h-5 w-5 text-blue-600" /><p className="mt-2 text-sm font-semibold text-slate-900">One-time purchase</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><Mail className="h-5 w-5 text-blue-600" /><p className="mt-2 text-sm font-semibold text-slate-900">Download link by email</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><FileText className="h-5 w-5 text-blue-600" /><p className="mt-2 text-sm font-semibold text-slate-900">Clear contents</p></div>
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">What is included</h2>
            <div className="mt-6 space-y-4">
              {product.includes.map((item) => (
                <div key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" /><p className="text-slate-700">{item}</p></div>
              ))}
            </div>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Best for</h2>
            <div className="mt-6 space-y-4">
              {product.bestFor.map((item) => (
                <div key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" /><p className="text-slate-700">{item}</p></div>
              ))}
            </div>
          </section>
        </div>
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Purchase and delivery</h2>
          <p className="mt-4 text-slate-600">Pay securely through Dodo Payments. Your download link is delivered automatically after payment is confirmed — no human involvement required. Nothing physical is shipped.</p>
        </section>
      </section>
    </main>
  );
}
