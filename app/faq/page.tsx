export const metadata = {
  title: "FAQ | Narostack Digital LLC",
  description:
    "Frequently asked questions about Narostack Digital LLC digital products, delivery, refunds, invoices, and support.",
};

const faqs = [
  {
    question: "What does Narostack Digital LLC sell?",
    answer:
      "Narostack Digital LLC sells digital IT services and one-time digital products for small businesses, including website templates, automation kits, cloud setup guides, cybersecurity checklists, digital branding kits, and IT support consultation packages.",
  },
  {
    question: "How are products delivered?",
    answer:
      "Products and services are delivered electronically by email, download, or online access after payment confirmation. No physical shipping is required.",
  },
  {
    question: "Can I pay online now?",
    answer:
      "Online payment integration is coming soon. At this time, customers can request an invoice and receive payment instructions by email.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Because our products are digital, refunds are limited once a product has been delivered or accessed. If there is a duplicate payment, incorrect charge, or delivery issue, customers should contact us for review.",
  },
  {
    question: "Do you provide custom IT services?",
    answer:
      "Yes. We provide digital IT services such as website assistance, cloud setup guidance, business automation support, cybersecurity assistance, branding support, and IT consultation.",
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
          Find answers about Narostack Digital LLC products, delivery, payment
          process, refunds, and support.
        </p>

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