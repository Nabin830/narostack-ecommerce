import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { AddToCartButton } from "@/components/AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/products/${product.slug}`}>
        <Image src={product.image} alt={product.name} width={700} height={450} className="h-52 w-full object-cover" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{product.category}</div>
        <h3 className="text-xl font-bold text-slate-950"><Link href={`/products/${product.slug}`} className="hover:text-blue-700">{product.name}</Link></h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
        <div className="mt-5 flex items-center gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-blue-600" /> Digital delivery by email/download</div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-2xl font-bold text-slate-950">{formatPrice(product.price)}</p>
          <AddToCartButton product={product} />
        </div>
        <Link href={`/products/${product.slug}`} className="mt-4 text-sm font-semibold text-blue-700 hover:underline">View details</Link>
      </div>
    </article>
  );
}
