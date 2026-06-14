export const metadata = { title: "FAQ | Narostack Digital LLC", description: "Frequently asked questions about Narostack Digital LLC downloadable digital products, delivery, refunds, and product access." };

const faqs = [
  { question: "What does Narostack Digital LLC sell?", answer: "Narostack Digital LLC sells downloadable digital products for small businesses, including website templates, automation templates, internet setup guides, digital branding kits, marketing templates, financial planning spreadsheets, and business resource packs." },
  { question: "Are these physical products?", answer: "No. All listed products are digital resources only. Nothing physical is shipped. Products are delivered electronically as a download link after payment confirmation." },
  { question: "How are products delivered?", answer: "After payment is confirmed through Dodo Payments, your download link is sent automatically. There is no human involvement required — delivery is instant and fully automated." },
  { question: "Can I pay online?", answer: "Yes. You can pay securely through Dodo Payments on any product page, in your cart, or through the checkout page." },
  { question: "Do you offer refunds?", answer: "Because products are digital and delivered automatically, refunds may be limited once the download link has been sent. Refund requests may be reviewed for duplicate payments, incorrect charges, non-delivery, or technical delivery issues. See our Refund Policy for full details." },
  { question: "Does the Internet Setup Guide include Internet accounts?", answer: "No. The Internet Setup Guide is a downloadable planning guide only. It does not include any paid internet account, live account setup, infrastructure access, or third-party platform account." },
  { question: "How can I contact support?", answer: "Contact us by email at pandeynabin@narostack.com. Support hours are Monday–Friday, 9:00 AM–5:00 PM." },
];

export default function FAQPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="font-semibold text-blue-600">FAQ</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Frequently Asked Questions</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">Find answers about Narostack Digital LLC downloadable products, digital delivery, payment, refunds, and product access.</p>
        <div className="mt-10 grid gap-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-bold text-slate-950">{faq.question}</h2>
              <p className="mt-3 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
