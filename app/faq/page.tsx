const faqs = [
  ["How are products delivered?", "Digital products are delivered online by email, download, or project communication."],
  ["Is payment live?", "This draft includes a demo checkout. You can connect Pockyt, Stripe, PayPal, or Paddle later."],
  ["Do you offer support?", "Yes, support is available by email at pandeynabin@narostack.com."],
  ["Are products refundable?", "Digital products may be non-refundable after delivery unless there is a technical issue or duplicate payment."]
];
export default function FAQPage() {
  return <main className="mx-auto max-w-4xl px-6 py-16"><h1 className="text-4xl font-bold">FAQ</h1><div className="mt-8 grid gap-4">{faqs.map(([q,a]) => <div key={q} className="rounded-2xl border bg-white p-6 shadow-sm"><h2 className="font-bold">{q}</h2><p className="mt-2 text-slate-600">{a}</p></div>)}</div></main>;
}
