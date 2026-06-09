"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CreditCard, Download, FileText, Mail } from "lucide-react";
import { dodoLinks } from "@/lib/dodoLinks";

const productOptions: { label: string; slug: string; price: string }[] = [
  { label: "Daily Task Checklist", slug: "daily-task-checklist", price: "$1.99" },
  { label: "Weekly Goal Planner", slug: "weekly-goal-planner", price: "$6.99" },
  { label: "Business Card Copy Template", slug: "business-card-copy-template", price: "$3.99" },
  { label: "Instagram Bio Template Pack", slug: "instagram-bio-template-pack", price: "$9.99" },
  { label: "Password Manager Sheet", slug: "password-manager-sheet", price: "$4.99" },
  { label: "Meeting Agenda Template", slug: "meeting-agenda-template", price: "$12.99" },
  { label: "Invoice Template Pack", slug: "invoice-template-pack", price: "$7.99" },
  { label: "Blog Post Outline Template", slug: "blog-post-outline-template", price: "$14.99" },
  { label: "Cold Email Template Pack", slug: "cold-email-template-pack", price: "$5.99" },
  { label: "Social Media Bio Kit", slug: "social-media-bio-kit", price: "$11.99" },
  { label: "YouTube Description Template Pack", slug: "youtube-description-template-pack", price: "$8.99" },
  { label: "Small Business Legal Checklist", slug: "small-business-legal-checklist", price: "$16.99" },
  { label: "Client Welcome Email Template", slug: "client-welcome-email-template", price: "$2.99" },
  { label: "Brand Color Palette Planner", slug: "brand-color-palette-planner", price: "$19.99" },
  { label: "Website Copywriting Guide", slug: "website-copywriting-guide", price: "$13.99" },
  { label: "30-Day Content Plan Template", slug: "30-day-content-plan-template", price: "$24.99" },
  { label: "Facebook Page Setup Checklist", slug: "facebook-page-setup-checklist", price: "$17.99" },
  { label: "Email Signature Template Pack", slug: "email-signature-template-pack", price: "$21.99" },
  { label: "Business Budget Tracker", slug: "business-budget-tracker", price: "$15.99" },
  { label: "Google Business Profile Setup Guide", slug: "google-business-profile-setup-guide", price: "$27.99" },
  { label: "Customer Feedback Form Template", slug: "customer-feedback-form-template", price: "$22.99" },
  { label: "LinkedIn Profile Optimization Guide", slug: "linkedin-profile-optimization-guide", price: "$29.99" },
  { label: "Small Business Tax Prep Checklist", slug: "small-business-tax-prep-checklist", price: "$18.99" },
  { label: "Digital Product Pricing Guide", slug: "digital-product-pricing-guide", price: "$32.99" },
  { label: "Website Launch Checklist", slug: "website-launch-checklist", price: "$25.99" },
  { label: "Content Repurposing Guide", slug: "content-repurposing-guide", price: "$34.99" },
  { label: "Remote Work Productivity Planner", slug: "remote-work-productivity-planner", price: "$28.99" },
  { label: "Small Business Grant Checklist", slug: "small-business-grant-checklist", price: "$36.99" },
  { label: "Social Media Audit Template", slug: "social-media-audit-template", price: "$23.99" },
  { label: "Email Marketing Starter Kit", slug: "email-marketing-starter-kit", price: "$39.99" },
  { label: "Freelance Contract Template Pack", slug: "freelance-contract-template-pack", price: "$31.99" },
  { label: "Product Launch Planning Kit", slug: "product-launch-planning-kit", price: "$41.99" },
  { label: "Small Business SEO Checklist", slug: "small-business-seo-checklist", price: "$26.99" },
  { label: "Customer Onboarding Template Pack", slug: "customer-onboarding-template-pack", price: "$44.99" },
  { label: "Social Media Content Calendar Template", slug: "social-media-content-calendar-template", price: "$37.99" },
  { label: "Freelance Proposal Template Pack", slug: "freelance-proposal-template-pack", price: "$42.99" },
  { label: "Business Plan Template Kit", slug: "business-plan-template-kit", price: "$33.99" },
  { label: "Internet Setup Guide", slug: "internet-setup-guide", price: "$46.99" },
  { label: "Remote Team Communication Playbook", slug: "remote-team-communication-playbook", price: "$38.99" },
  { label: "Brand Identity Starter Kit", slug: "brand-identity-starter-kit", price: "$43.99" },
  { label: "Digital Branding Starter Kit", slug: "digital-branding-starter-kit", price: "$35.99" },
  { label: "Business Financial Planning Spreadsheet", slug: "business-financial-planning-spreadsheet", price: "$47.99" },
  { label: "Small Business Automation Template Kit", slug: "small-business-automation-template-kit", price: "$40.99" },
  { label: "Complete Marketing Template Bundle", slug: "complete-marketing-template-bundle", price: "$48.99" },
  { label: "Ecommerce Store Launch Kit", slug: "ecommerce-store-launch-kit", price: "$45.99" },
  { label: "SaaS Landing Page Template Kit", slug: "saas-landing-page-template-kit", price: "$49.99" },
  { label: "Business Website Starter Template", slug: "business-website-starter-template", price: "$44.99" },
  { label: "Complete Small Business Starter Bundle", slug: "complete-small-business-starter-bundle", price: "$46.99" },
  { label: "Ultimate Digital Business Kit", slug: "ultimate-digital-business-kit", price: "$48.99" },
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
  const mailBody = encodeURIComponent(`Hello Narostack Digital LLC,\n\nI would like to request an invoice for a downloadable digital product.\n\nCustomer Name: ${form.name}\nBusiness Name: ${form.businessName}\nCustomer Email: ${form.customerEmail}\nDigital Product: ${selectedProduct?.label ?? ""} (${selectedProduct?.price ?? ""})\n\nMessage:\n${form.message}\n\nI understand products are delivered automatically after payment confirmation.\n\nThank you.`);

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
                  <button type="button" disabled className="mt-6 inline-flex w-full cursor-not-allowed justify-center rounded-xl bg-slate-300 px-6 py-3 text-sm font-semibold text-slate-600">
                    Select a Product First
                  </button>
                )}
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><FileText className="h-6 w-6" /></div>
                <h2 className="mt-5 text-2xl font-bold text-slate-950">Request Invoice</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">Fill in your details below, then click one of the email buttons.</p>
                <div className="mt-6 grid gap-3">
                  <a href={gmailLink} target="_blank" rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">Send via Gmail</a>
                  <a href={emailAppLink}
                    className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">Send via Email App</a>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="font-semibold text-slate-950">Instant digital delivery</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">All products are downloadable digital resources. After payment your download link is delivered automatically. No physical items are shipped. No human involvement required.</p>
            </div>
            <h2 className="mt-10 text-2xl font-bold text-slate-950">Invoice Request Details</h2>
            <p className="mt-2 text-sm text-slate-600">Fill in your details before clicking the email buttons above.</p>
            <div className="mt-6 grid gap-5">
              {([["name","Your Name","text","Enter your name"],["businessName","Business Name","text","Enter business name"],["customerEmail","Email Address","email","Enter your email"]] as const).map(([key,label,type,ph]) => (
                <div key={key}>
                  <label htmlFor={key} className="text-sm font-semibold text-slate-800">{label}</label>
                  <input id={key} type={type} value={form[key as keyof typeof form]} placeholder={ph}
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
            <p className="mt-5 text-sm text-slate-500">If payment or email does not open, contact us at <span className="font-semibold text-slate-700">{EMAIL}</span>.</p>
          </div>
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">How it works</h2>
            <div className="mt-6 grid gap-4">
              {[
                { Icon: CreditCard, title: "Buy Now", text: "Secure payment via Dodo Payments." },
                { Icon: FileText, title: "Request Invoice", text: "Fill in details and send by email." },
                { Icon: Download, title: "Instant Delivery", text: "Download link sent automatically after payment." },
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
