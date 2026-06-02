import Link from "next/link";
import { Clock, Download, Mail, MapPin, PackageCheck } from "lucide-react";

export const metadata = {
  title: "Contact | Narostack Digital LLC",
  description:
    "Contact Narostack Digital LLC for questions about downloadable digital products, invoice requests, and delivery support.",
};

export default function ContactPage() {
  const email = "pandeynabin@narostack.com";

  const subject = encodeURIComponent("Contact Request - Narostack Digital LLC");

  const body = encodeURIComponent(`Hello Narostack Digital LLC,

I would like to contact you about a downloadable digital product.

Name:
Business Name:
Product Name:
Question:

Thank you.`);

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  const emailAppLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="font-semibold text-blue-600">Contact Us</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Contact Narostack Digital LLC.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Contact us for questions about downloadable digital products,
            invoice requests, product delivery, download access, or general
            product information.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="font-semibold text-slate-950">Product Store Notice</p>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            Narostack Digital LLC provides downloadable digital products and
            technology resources for small businesses. Our products include
            templates, guides, checklists, and digital resource packs delivered
            electronically after purchase. For product questions, delivery
            assistance, invoice requests, or support enquiries, please contact us
            by email.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-950">
              Send a product enquiry
            </h2>

            <p className="mt-3 text-slate-600">
              Use the buttons below to open an email message. You can ask about
              a product, delivery method, invoice request, or download access.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">What to include</p>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Your name and business name</li>
                <li>The digital product you are interested in</li>
                <li>Your question about product contents or delivery</li>
                <li>Your best contact email</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Contact by Gmail
              </a>

              <a
                href={emailAppLink}
                className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Contact by Email App
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Or email us directly at{" "}
              <span className="font-semibold text-slate-700">{email}</span>.
            </p>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Mail className="h-6 w-6 text-blue-600" />

              <h3 className="mt-4 font-bold text-slate-950">Email</h3>

              <p className="mt-2 break-words text-sm text-slate-600">
                {email}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <MapPin className="h-6 w-6 text-blue-600" />

              <h3 className="mt-4 font-bold text-slate-950">
                Business Address
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Narostack Digital LLC
                <br />
                30 N Gould St Ste R
                <br />
                Sheridan, WY 82801
                <br />
                United States
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Clock className="h-6 w-6 text-blue-600" />

              <h3 className="mt-4 font-bold text-slate-950">Support Hours</h3>

              <p className="mt-2 text-sm text-slate-600">
                Monday–Friday, 9:00 AM–5:00 PM
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Download className="h-6 w-6 text-blue-600" />

              <h3 className="mt-4 font-bold text-slate-950">
                Digital Delivery
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Products are delivered electronically by email, download link,
                or online access after payment confirmation.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <PackageCheck className="h-6 w-6 text-blue-600" />

              <h3 className="mt-4 font-bold text-slate-950">
                Product Questions
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Contact us if you need help understanding product contents,
                delivery method, or invoice request steps.
              </p>
            </div>

            <Link
              href="/checkout"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              Request Invoice
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}