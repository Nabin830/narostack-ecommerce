import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Lock,
  Mail,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Digital IT Services & Software Products
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Practical digital products and IT services for small businesses.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Narostack Digital LLC provides website templates, automation
              resources, cloud setup guidance, cybersecurity checklists, digital
              branding kits, and IT support services delivered online.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Shop Digital Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                Request Invoice
              </Link>
            </div>

            <div className="mt-8 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                One-time digital products
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Email/download delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                Business-focused support
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold text-blue-300">
                Narostack Digital LLC
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                Professional digital solutions for modern small businesses.
              </h2>
              <p className="mt-4 text-slate-300">
                Build your online presence, improve workflows, organize cloud
                tools, and strengthen digital operations with simple products
                and services.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Sparkles,
                  title: "Website Templates",
                  text: "Professional layouts for business websites.",
                },
                {
                  icon: Cloud,
                  title: "Cloud Guidance",
                  text: "Simple setup resources for small teams.",
                },
                {
                  icon: Lock,
                  title: "Cybersecurity",
                  text: "Basic checklists for business protection.",
                },
                {
                  icon: PackageCheck,
                  title: "Digital Delivery",
                  text: "Delivered by email, download, or online access.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <item.icon className="h-6 w-6 text-blue-600" />
                  <h3 className="mt-3 font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-8">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 text-center sm:grid-cols-4">
          {[
            "Digital Products",
            "Invoice Available",
            "Email Delivery",
            "Small Business Focused",
          ].map((item) => (
            <div key={item} className="font-semibold text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-semibold text-blue-600">Featured Products</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">
                Popular digital products
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Simple, practical, and professional resources designed for small
                business technology needs.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex font-semibold text-blue-600 hover:text-blue-700"
            >
              View all products →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="font-semibold text-blue-600">Simple Order Process</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              How orders work
            </h2>
            <p className="mt-3 text-slate-600">
              Our checkout is currently invoice-based while online payment
              integration is being prepared.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              "Choose a digital product or service",
              "Add it to your cart",
              "Request an invoice",
              "Receive delivery by email/download",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {index + 1}
                </div>
                <p className="mt-5 font-semibold text-slate-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              Secure Digital Delivery
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Products and services are delivered electronically by email,
              download, or online access after payment confirmation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              Small Business Focused
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Our templates, guides, and support packages are designed for small
              businesses that need simple and professional IT solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              Invoice-Based Orders
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Online payment integration is coming soon. Customers can request
              an invoice and receive secure payment instructions by email.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}