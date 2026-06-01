export const metadata = {
  title: "Delivery Policy | Narostack Digital LLC",
  description:
    "Delivery Policy for Narostack Digital LLC downloadable digital products.",
};

export default function DeliveryPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="font-semibold text-blue-600">Policy</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          Delivery Policy
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: June 2026
        </p>

        <div className="mt-10 space-y-8 rounded-3xl border border-slate-200 bg-white p-8 leading-7 text-slate-600 shadow-sm">
          <section>
            <h2 className="text-xl font-bold text-slate-950">
              1. Digital Delivery Only
            </h2>

            <p className="mt-3">
              Narostack Digital LLC sells downloadable digital products,
              including templates, guides, checklists, and resource packs.
              Products are delivered electronically by email, download link, or
              online access after payment confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              2. No Physical Shipping
            </h2>

            <p className="mt-3">
              We do not ship physical products. No physical delivery, postage,
              courier service, merchandise, hardware, books, or printed
              materials are provided through this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              3. Delivery Time
            </h2>

            <p className="mt-3">
              Delivery timing may depend on the product ordered and invoice
              review process. Most digital products are delivered by email,
              download link, or online access after payment confirmation and
              order review.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              4. Customer Information
            </h2>

            <p className="mt-3">
              Customers must provide a valid email address and accurate order
              information. Narostack Digital LLC is not responsible for delivery
              delays caused by incorrect customer email addresses or incomplete
              order information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              5. Product-Only Delivery
            </h2>

            <p className="mt-3">
              Delivery includes access to the purchased downloadable digital
              resource only. Products do not include custom consulting,
              done-for-you implementation, manual setup, hosting, server access,
              managed services, remote repair, or professional advisory
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">
              6. Delivery Support
            </h2>

            <p className="mt-3">
              If you do not receive your digital product or access information,
              contact pandeynabin@narostack.com with your name, product name,
              invoice number, and purchase details.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}