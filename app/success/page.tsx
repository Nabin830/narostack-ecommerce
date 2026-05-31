import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-center">
      <div className="rounded-3xl border bg-white p-10 shadow-soft">
        <p className="text-5xl">✅</p>
        <h1 className="mt-5 text-4xl font-bold">Order Created</h1>
        <p className="mt-4 text-slate-600">This is a demo success page. After payment integration, customers will see this page after successful payment.</p>
        <Link href="/products" className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white">Continue Shopping</Link>
      </div>
    </main>
  );
}
