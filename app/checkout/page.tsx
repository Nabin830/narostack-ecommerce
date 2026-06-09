"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CreditCard, Download, FileText, Mail } from "lucide-react";
import { dodoLinks } from "@/lib/dodoLinks";

const productOptions: { label: string; slug: string; price: string }[] = [
  { label: "Business Website Starter Template", slug: "business-website-starter-template", price: "$49" },
  { label: "Small Business Automation Template Kit", slug: "small-business-automation-template-kit", price: "$79" },
  { label: "Internet Setup Guide", slug: "internet-setup-guide", price: "$39" },
  { label: "Digital Branding Starter Kit", slug: "digital-branding-starter-kit", price: "$59" },
  { label: "Social Media Content Calendar Template", slug: "social-media-content-calendar-template", price: "$29" },
  { label: "Small Business SEO Checklist", slug: "small-business-seo-checklist", price: "$34" },
  { label: "Email Marketing Starter Kit", slug: "email-marketing-starter-kit", price: "$44" },
  { label: "Business Financial Planning Spreadsheet", slug: "business-financial-planning-spreadsheet", price: "$54" },
  { label: "Customer Onboarding Template Pack", slug: "customer-onboarding-template-pack", price: "$39" },
  { label: "Product Launch Planning Kit", slug: "product-launch-planning-kit", price: "$49" },
  { label: "Freelance Proposal Template Pack", slug: "freelance-proposal-template-pack", price: "$34" },
  { label: "Business Password and Access Organizer", slug: "business-password-and-access-organizer", price: "$19" },
  { label: "Digital Product Pricing Guide", slug: "digital-product-pricing-guide", price: "$24" },
  { label: "Remote Team Communication Playbook", slug: "remote-team-communication-playbook", price: "$44" },
];

const EMAIL = "pandeynabin@narostack.com";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("product");
  const [selectedSlug, setSelectedSlug] = useState("");
  const [form, setForm] = useState({ name: "", businessName: "", customerEmail: "", message: "" });

  useEffect(() => {
    if (productSlug) {
      const match = productOptions.find((p) => p.slug === productSlug);
      if (match) setSelectedSlug(match.slug);
    }
  }, [productSlug]);

  const selectedProduct = productOptions.find((p) => p.slug === selectedSlug);
  const checkoutLink = selectedSlug ? dodoLinks[selectedSlug] : "";

  const mailSubject = encodeURIComponent("Digital Product Invoice Request - Narostack Digital LLC");
  const mailBody = encodeURIComponent(`Hello Narostack Digital LLC,\n\nI would like to request an invoice for a downloadable digital product.\n\nCustomer Name: ${form.name}\nBusiness Name: ${form.businessName}\nCustomer Email: ${form.customerEmail}\nDigital Product: ${selectedProduct?.label ?? ""}\n\nMessage:\n${form.message}\n\nI understand that products are delivered automatically by download link after payment confirmation.\n\nThank you.`);

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${mailSubject}&body=${mailBody}`;
  const emailAppLink = `mailto:${EMAIL}?subject=${mailSubject}&body=${mailBody}`;

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/cart" className="text-sm font-semibold text-blue-600 hover:text-blue-700">← Back to Cart</Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <p className="font-semibold text-blue-600">Digital Product Checkout</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Choose How to Order</h1>
            <p className="mt-4 text-slate-600">Select a product, then pay instantly through Dodo Payments or request an invoice by email.</p>

            <div className="mt-8">
              <label htmlFor="product-select" className="text-sm font-semibold text-slate-800">Digital Product</label>
              <select id="product-select" value={selectedSlug} onChange={(e) => setSelectedSlug(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600">
                <option value="">Select a product</option>
                {productOptions.map((p) => (<option key={p.slug} value={p.slug}>{p.label} — {p.price}</option>))}
              </select>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white"><CreditCard className="h-6 w-6" /></div>
                <h2 className="mt-5 text-2xl font-bold text-slate-950">Buy Now</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">Secure payment through Dodo Payments. Your download link is sent automatically — no human steps required.</p>
                {checkoutLink ? (
                  <a href={checkoutLink} target="_blank" rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                    Buy Now via Dodo Payments
                  </a>
                ) : (
                  <button type="button" disabled
                    className="mt-6 inline-flex w-full cursor-not-allowed justify-center rounded-xl bg-slate-300 px-6 py-3 text-sm font-semibold text-slate-600">
                    Select a Product First
                  </button>
                )}
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><FileText className="h-6 w-6" /></div>
                <h2 className="mt-5 text-2xl font-bold text-slate-950">Request Invoice</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">Fill in your details below, then click one of the email buttons to send your invoice request.</p>
                <div className="mt-6 grid gap-3">
                  <a href={gmailLink} target="_blank" rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                    Send via Gmail
                  </a>
                  <a href={emailAppLink}
                    className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                    Send via Email App
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="font-semibold text-slate-950">Instant digital delivery</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">All products are downloadable digital resources. After payment your download link is delivered automatically. No physical items are shipped. No human involvement required.</p>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-slate-950">Invoice Request Details</h2>
            <p className="mt-2 text-sm text-slate-600">Fill in your details before clicking &quot;Send via Gmail&quot; or &quot;Send via Email App&quot; above.</p>

            <div className="mt-6 grid gap-5">
              {[
                { id: "name", label: "Your Name", type: "text", key: "name" as const, placeholder: "Enter your name" },
                { id: "business", label: "Business Name", type: "text", key: "businessName" as const, placeholder: "Enter business name" },
                { id: "email", label: "Email Address", type: "email", key: "customerEmail" as const, placeholder: "Enter your email" },
              ].map(({ id, label, type, key, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="text-sm font-semibold text-slate-800">{label}</label>
                  <input id={id} type={type} value={form[key]} placeholder={placeholder}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600" />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="text-sm font-semibold text-slate-800">Message</label>
                <textarea id="message" value={form.message} placeholder="Any extra details" rows={4}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600" />
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-500">If payment or email does not open, contact us directly at <span className="font-semibold text-slate-700">{EMAIL}</span>.</p>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">How it works</h2>
            <div className="mt-6 grid gap-4">
              {[
                { Icon: CreditCard, title: "Buy Now", text: "Secure payment via Dodo Payments — instant checkout." },
                { Icon: FileText, title: "Request Invoice", text: "Fill in your details and send an invoice request by email." },
                { Icon: Download, title: "Instant Delivery", text: "Download link sent automatically after payment. No waiting." },
                { Icon: Mail, title: "Support", text: EMAIL },
              ].map(({ Icon, title, text }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div><p className="font-semibold text-slate-900">{title}</p><p className="text-sm text-slate-600 break-words">{text}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm font-semibold text-slate-900">Support Hours</p>
              <p className="mt-1 text-sm text-slate-600">Monday–Friday, 9:00 AM–5:00 PM</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
