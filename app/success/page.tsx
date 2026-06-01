import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Request Received | Narostack Digital LLC",
  description: "Your request has been received by Narostack Digital LLC.",
};

export default function SuccessPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
            <CheckCircle2 className="h-9 w-9 text-blue-600" />
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950">
            Request received
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Thank you for contacting Narostack Digital LLC. If you submitted an
            invoice or service request, our team will review it and respond by
            email during support hours.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-left">
            <h2 className="font-bold text-slate-950">Next steps</h2>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Check your email for any reply or invoice information.</li>
              <li>Make sure your product or service details are included.</li>
              <li>
                Digital products are delivered by email, download, or online
                access after payment confirmation.
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              View Products
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}