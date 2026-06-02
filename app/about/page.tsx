import Link from "next/link";
import { CheckCircle2, Download, FileText, PackageCheck } from "lucide-react";

export const metadata = {
  title: "About | Narostack Digital LLC",
  description:
    "Learn about Narostack Digital LLC, a digital product store selling downloadable templates, guides, and resource packs for small businesses.",
};

export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="font-semibold text-blue-600">About Us</p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Downloadable digital resources for small businesses.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Narostack Digital LLC sells downloadable digital products for
              small businesses. Our product store includes website templates,
              automation templates, Internet setup guides, digital branding kits,
              and business resource packs delivered online.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our goal is to provide clear, practical, and easy-to-deliver
              digital resources that help small businesses organize their online
              presence, workflow planning, business documentation, and basic
              digital brand preparation.
            </p>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="font-semibold text-slate-950">
                Digital product store notice
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Products listed on this website are downloadable digital
                resources. Delivery is provided electronically by email,
                download link, or online access.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
                View Digital Products
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              Business Information
            </h2>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="font-semibold text-slate-900">Company</p>
                <p className="mt-1 text-slate-600">Narostack Digital LLC</p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">Business Type</p>
                <p className="mt-1 text-slate-600">
                  Downloadable digital products, templates, guides, and
                  resource packs.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">Product Delivery</p>
                <p className="mt-1 text-slate-600">
                  Email, download link, or online access after payment
                  confirmation.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">Physical Shipping</p>
                <p className="mt-1 text-slate-600">
                  No physical shipping. Products are delivered electronically.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="mt-1 text-slate-600">
                  pandeynabin@narostack.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">Hours</p>
                <p className="mt-1 text-slate-600">
                  Monday–Friday, 9:00 AM–5:00 PM
                </p>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            What we provide
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Our product catalog focuses on digital resources that can be
            delivered clearly and electronically after purchase.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Website template and page structure resources",
              "Business automation planning templates",
              "Internet setup and file organization guides",
              "Digital branding starter kit resources",
              "Business description and content planning worksheets",
              "Downloadable small business resource packs",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Download className="h-7 w-7 text-blue-600" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Digital Delivery
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Products are delivered electronically by email, download link, or
              online access after payment confirmation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <FileText className="h-7 w-7 text-blue-600" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Clear Contents
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Product pages explain what is included, who the resource is for,
              and how delivery works.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <PackageCheck className="h-7 w-7 text-blue-600" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Product Store
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Narostack Digital LLC focuses on downloadable templates, guides,
              and business resource packs.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}