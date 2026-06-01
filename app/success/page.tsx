import Link from "next/link";
import { CheckCircle2, Download, FileText, Mail } from "lucide-react";

export const metadata = {
  title: "Request Received | Narostack Digital LLC",
  description:
    "Your digital product request has been received by Narostack Digital LLC.",
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
            invoice or digital product request, we will review it and respond by
            email during support hours.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-left">
            <h2 className="font-bold text-slate-950">Next steps</h2>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Check your email for reply or invoice information.</li>
              <li>Make sure your selected digital product is clearly listed.</li>
              <li>
                Digital products are delivered by email, download link, or
                online access after payment confirmation.
              </li>
            </ul>
          </div>

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4">
              <FileText className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Invoice review
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Email response
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-4">
              <Download className="h-6 w-6 text-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Digital delivery
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-left">
            <p className="font-semibold text-slate-950">
              Digital product notice
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              Narostack Digital LLC sells downloadable templates, guides,
              checklists, and resource packs. Products do not include custom
              digital resource delivery only.
            </p>
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