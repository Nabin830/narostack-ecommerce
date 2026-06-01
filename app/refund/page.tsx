export const metadata = {
  title: "Refund Policy | Narostack Digital LLC",
  description:
    "Refund Policy for Narostack Digital LLC downloadable digital products.",
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
              Narostack Digital LLC sells downloadable digital products,
              including templates, guides, checklists, and resource packs.
              Because these products can be delivered, accessed, copied, or
              downloaded electronically, refunds may be limited once delivery has
              been completed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              2. Eligible Refund Review Situations
            </h2>

            <p className="mt-3">
              Refund requests may be reviewed for duplicate payments, incorrect
              charges, accidental duplicate orders, non-delivery of a digital
              product, or technical delivery issues that cannot be resolved by
              Narostack Digital LLC.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              3. Non-Refundable Situations
            </h2>

            <p className="mt-3">
              Refunds may not be available after a product has been successfully
              delivered, accessed, downloaded, or used, unless required by
              applicable law or approved by Narostack Digital LLC after review.
            </p>

            <p className="mt-3">
              Refunds are not provided simply because a customer changes their
              mind after receiving digital access, does not read the product
              description, or expects custom consulting, manual setup, or
              done-for-you implementation that is not included in the product.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              4. Product-Only Limitation
            </h2>

            <p className="mt-3">
              Products sold on this website are downloadable digital resources
              only. Narostack Digital LLC does not sell custom consulting,
              done-for-you services, hosting, managed services, server access,
              or professional advisory services through this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              5. How to Request a Refund Review
            </h2>

            <p className="mt-3">
              To request a refund review, contact pandeynabin@narostack.com
              with your name, invoice number, product name, payment date, and
              reason for the request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              6. Review Time
            </h2>

            <p className="mt-3">
              Refund requests are reviewed during support hours, Monday–Friday,
              9:00 AM–5:00 PM. Approval is not guaranteed and depends on the
              order status, delivery status, and reason for the request.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}