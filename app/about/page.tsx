import Link from "next/link";
import { Mail, Clock, PackageCheck } from "lucide-react";

export const metadata = {
  title: "Contact | Narostack Digital LLC",
  description:
    "Contact Narostack Digital LLC for digital products, IT services, support, and invoice requests.",
};

export default function ContactPage() {
  const email = "pandeynabin@narostack.com";

  const subject = encodeURIComponent("Contact Request - Narostack Digital LLC");

  const body = encodeURIComponent(`Hello Narostack Digital LLC,

I would like to contact you about:

Name:
Business Name:
Message:

Thank you.`);

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="font-semibold text-blue-600">Contact Us</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Get in touch with Narostack Digital LLC.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Contact us for product questions, invoice requests, digital
            delivery support, website services, cloud setup guidance,
            cybersecurity assistance, or IT support consultation.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-950">
              Send an enquiry
            </h2>

            <p className="mt-3 text-slate-600">
              Use the button below to open Gmail with a prepared message. You
              can edit the message before sending.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-900">
                  What to include
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  <li>Your name and business name</li>
                  <li>The product or service you are interested in</li>
                  <li>Your question or support request</li>
                  <li>Best contact email</li>
                </ul>
              </div>

              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Contact by Gmail
              </a>

              <p className="text-sm text-slate-500">
                Or email us directly at{" "}
                <span className="font-semibold text-slate-700">{email}</span>.
              </p>
            </div>
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
              <Clock className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-950">Support Hours</h3>
              <p className="mt-2 text-sm text-slate-600">
                Monday–Friday, 9:00 AM–5:00 PM
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <PackageCheck className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-950">
                Digital Delivery
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Products and services are delivered electronically by email,
                download, or online access.
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