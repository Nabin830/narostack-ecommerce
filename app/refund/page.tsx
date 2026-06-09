export const metadata = {
  title: "Refund Policy | Narostack Digital LLC",
  description:
    "Refund Policy for Narostack Digital LLC. 30-day money-back guarantee on all downloadable digital products.",
};

export default function RefundPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="font-semibold text-blue-600">Policy</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Refund Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>

        {/* 30-day badge */}
        <div className="mt-8 flex items-start gap-5 rounded-2xl border border-green-200 bg-green-50 p-6">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-2xl text-white">
            ✓
          </div>
          <div>
            <p className="text-lg font-bold text-slate-950">30-Day Money-Back Guarantee</p>
            <p className="mt-1 leading-7 text-slate-700">
              Every product sold by Narostack Digital LLC comes with a full 30-day money-back
              guarantee. If you are not happy with your purchase for any reason, contact us within
              30 days and we will refund you in full — no difficult questions asked.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-8 rounded-3xl border border-slate-200 bg-white p-8 leading-7 text-slate-600 shadow-sm">

          <section>
            <h2 className="text-xl font-bold text-slate-950">1. About Our Products</h2>
            <p className="mt-3">
              Narostack Digital LLC sells downloadable digital products — templates, guides,
              checklists, planners, spreadsheets, and resource packs. All products are delivered
              electronically and automatically after payment is confirmed. No physical items are
              shipped and no human involvement is required for delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">2. Our 30-Day Guarantee</h2>
            <p className="mt-3">
              We stand behind every product we sell. If you purchase any product from
              narostack.com and are not satisfied for any reason, you may request a full refund
              within <strong>30 days</strong> of the date your order was completed.
            </p>
            <p className="mt-3">
              When you complete a purchase, you are confirming that you understand you have 30
              days from your order date to request a refund or cancellation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">3. How to Request a Refund</h2>
            <p className="mt-3">
              To request a refund, email us at{" "}
              <span className="font-semibold text-slate-800">pandeynabin@narostack.com</span> and
              include the following:
            </p>
            <ul className="mt-3 space-y-2 pl-6 list-disc">
              <li>Your full name</li>
              <li>The email address used to place the order</li>
              <li>Your order or invoice number</li>
              <li>The name of the product you purchased</li>
              <li>A brief description of the issue or reason for the request</li>
            </ul>
            <p className="mt-3">
              We review all refund requests during business hours — Monday to Friday, 9:00 AM to
              5:00 PM. We aim to respond within one business day.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">4. Your Statutory Rights</h2>
            <p className="mt-3">
              Depending on where you are located, you may have a legal right to withdraw from your
              purchase within 14 days of the transaction date under applicable consumer protection
              laws. Our 30-day guarantee goes beyond this minimum and applies to all customers
              regardless of location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">5. Products Not as Described</h2>
            <p className="mt-3">
              If a product you received does not match what was described on the product page —
              including its contents, format, or stated purpose — please contact us immediately at
              pandeynabin@narostack.com. We will resolve the issue as a priority, either by
              correcting the delivery or issuing a full refund.
            </p>
            <p className="mt-3">
              This commitment applies regardless of the 30-day window and is separate from our
              standard money-back guarantee.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">6. When Refunds Do Not Apply</h2>
            <p className="mt-3">
              We reserve the right to decline a refund request in the following situations:
            </p>
            <ul className="mt-3 space-y-2 pl-6 list-disc">
              <li>The request is submitted more than 30 days after the order was completed,
                unless required by applicable law</li>
              <li>There is clear evidence of fraudulent activity, abuse of our refund policy,
                or manipulation of the refund process</li>
              <li>The same customer has previously received a refund for the same product</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">7. Disputes and Chargebacks</h2>
            <p className="mt-3">
              Before raising a dispute or chargeback with your bank or card provider, we encourage
              you to contact us directly first. We are committed to resolving issues quickly and
              fairly, and most concerns can be addressed through a simple email exchange. Reaching
              out to us directly is the fastest route to a resolution.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">8. Contact Us</h2>
            <div className="mt-3 space-y-2">
              <p>
                <span className="font-semibold text-slate-800">Email:</span>{" "}
                pandeynabin@narostack.com
              </p>
              <p>
                <span className="font-semibold text-slate-800">Business hours:</span>{" "}
                Monday–Friday, 9:00 AM–5:00 PM
              </p>
              <p>
                <span className="font-semibold text-slate-800">Company:</span>{" "}
                Narostack Digital LLC
              </p>
              <p>
                <span className="font-semibold text-slate-800">Address:</span>{" "}
                30 N Gould St Ste R, Sheridan, WY 82801, United States
              </p>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}
