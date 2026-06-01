export const metadata = {
  title: "Refund Policy | Narostack Digital LLC",
  description: "Refund Policy for Narostack Digital LLC digital products.",
};

export default function RefundPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="font-semibold text-blue-600">Policy</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          Refund Policy
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: June 2026
        </p>

        <div className="mt-10 space-y-8 rounded-3xl border border-slate-200 bg-white p-8 leading-7 text-slate-600 shadow-sm">
          <section>
            <h2 className="text-xl font-bold text-slate-950">
              1. Digital Product Refunds
            </h2>
            <p className="mt-3">
              Narostack Digital LLC sells digital products and digital IT
              services. Because digital products can be accessed, downloaded, or
              delivered electronically, refunds may be limited once delivery has
              been completed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              2. Eligible Refund Situations
            </h2>
            <p className="mt-3">
              Refunds may be reviewed for duplicate payments, incorrect charges,
              non-delivery of a digital product, or technical delivery issues
              that cannot be resolved by our support team.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              3. Non-Refundable Situations
            </h2>
            <p className="mt-3">
              Refunds may not be available after a product has been successfully
              delivered, downloaded, accessed, or used, unless required by
              applicable law or approved by Narostack Digital LLC after review.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              4. How to Request a Refund
            </h2>
            <p className="mt-3">
              To request a refund review, contact pandeynabin@narostack.com
              with your name, invoice number, product name, payment date, and
              reason for the request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              5. Review Time
            </h2>
            <p className="mt-3">
              Refund requests are reviewed during support hours, Monday–Friday,
              9:00 AM–5:00 PM.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}