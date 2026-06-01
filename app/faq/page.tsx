export const metadata = {
  title: "FAQ | Narostack Digital LLC",
  description:
    "Frequently asked questions about Narostack Digital LLC downloadable digital products, delivery, refunds, invoices, and product access.",
};

const faqs = [
  {
    question: "What does Narostack Digital LLC sell?",
    answer:
      "Narostack Digital LLC sells downloadable digital products for small businesses, including website templates, automation templates, cloud setup guides, digital branding kits, and business resource packs.",
  },
  {
    question: "Are these physical products?",
    answer:
      "No. All listed products are digital products. They are delivered electronically by email, download link, or online access after payment confirmation.",
  },
  {
    question: "How are products delivered?",
    answer:
      "Products are delivered electronically by email, download link, or online access after payment confirmation. Customers must provide a valid email address for delivery.",
  },
  {
    question: "Can I pay online now?",
    answer:
      "Online payment integration is being prepared. At this time, customers can request an invoice and receive payment instructions by email.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Because products are digital, refunds may be limited once a product has been delivered, accessed, or downloaded. Refund requests may be reviewed for duplicate payments, incorrect charges, non-delivery, or technical delivery issues.",
  },
  {
    question: "Does the cloud guide include cloud accounts?",
    answer:
      "No. The Cloud Setup Guide is a downloadable guide only. It does not include any paid cloud account, live account setup, infrastructure access, or third-party platform account.",
  },
  {
    question: "Can I request an invoice?",
    answer:
      "Yes. Customers can request an invoice through the checkout page. Invoice and payment instructions are sent by email.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact us by email at pandeynabin@narostack.com. Support hours are Monday–Friday, 9:00 AM–5:00 PM.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="font-semibold text-blue-600">FAQ</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Frequently Asked Questions
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Find answers about Narostack Digital LLC downloadable products,
          digital delivery, invoice requests, refunds, and product access.
        </p>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="font-semibold text-slate-950">
            Digital product store notice
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            Narostack Digital LLC sells downloadable digital resources only.
            Products are delivered electronically by email, download link, or
            online access.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-bold text-slate-950">
                {faq.question}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}