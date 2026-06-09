import Link from "next/link";
import { CheckCircle2, CreditCard, Download, FileText } from "lucide-react";

export const metadata = { title: "About | Narostack Digital LLC", description: "Learn about Narostack Digital LLC, a digital product store selling downloadable templates, guides, and resource packs for small businesses." };

export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="font-semibold text-blue-600">About Us</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Downloadable digital resources for small businesses.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">Narostack Digital LLC sells downloadable digital products for small businesses. Our store includes website templates, automation templates, internet setup guides, digital branding kits, marketing templates, financial planning spreadsheets, and business resource packs.</p>
            <p className="mt-5 text-lg leading-8 text-slate-600">Our goal is to provide clear, practical, and easy-to-use digital resources that help small businesses organize their online presence, workflows, business documentation, and brand planning.</p>
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="font-semibold text-slate-950">Digital product store notice</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">All products on this website are downloadable digital resources. After payment, your download link is delivered automatically — no human involvement required, no physical items shipped.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700">View Digital Products</Link>
              <Link href="/contact" className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50">Contact Us</Link>
            </div>
          </div>
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Business Information</h2>
            <div className="mt-6 space-y-5 text-sm">
              {[
                { label: "Company", value: "Narostack Digital LLC" },
                { label: "Business Type", value: "Downloadable digital products, templates, guides, and resource packs." },
                { label: "Payment", value: "Secure checkout via Dodo Payments or invoice by email." },
                { label: "Product Delivery", value: "Download link sent automatically after payment — instant, no human involvement required." },
                { label: "Physical Shipping", value: "None. All products are digital." },
                { label: "Email", value: "pandeynabin@narostack.com" },
                { label: "Hours", value: "Monday–Friday, 9:00 AM–5:00 PM" },
              ].map(({ label, value }) => (
                <div key={label}><p className="font-semibold text-slate-900">{label}</p><p className="mt-1 text-slate-600">{value}</p></div>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">What we provide</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Our product catalog covers a wide range of digital resources delivered automatically after purchase.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Website template and page structure resources",
              "Business automation planning templates",
              "Internet setup and file organization guides",
              "Digital branding starter kit resources",
              "Social media content calendar templates",
              "Small business SEO checklists",
              "Email marketing starter kits",
              "Business financial planning spreadsheets",
              "Customer onboarding template packs",
              "Product launch planning kits",
              "Freelance proposal template packs",
              "Remote team communication playbooks",
            ].map((item) => (
              <div key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" /><p className="text-slate-700">{item}</p></div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><CreditCard className="h-7 w-7 text-blue-600" /><h3 className="mt-4 text-lg font-bold text-slate-900">Secure Payments</h3><p className="mt-2 text-sm leading-6 text-slate-600">Pay securely through Dodo Payments or request an invoice by email.</p></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><Download className="h-7 w-7 text-blue-600" /><h3 className="mt-4 text-lg font-bold text-slate-900">Instant Delivery</h3><p className="mt-2 text-sm leading-6 text-slate-600">Download link sent automatically after payment. No waiting, no manual steps, no human involvement required.</p></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><FileText className="h-7 w-7 text-blue-600" /><h3 className="mt-4 text-lg font-bold text-slate-900">Clear Contents</h3><p className="mt-2 text-sm leading-6 text-slate-600">Every product page lists exactly what is included, who it is for, and how delivery works before you buy.</p></div>
        </section>
      </section>
    </main>
  );
}
