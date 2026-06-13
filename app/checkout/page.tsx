"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CreditCard, Download, ShieldCheck, Zap } from "lucide-react";
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

function CheckoutInner() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("product");
  const [selectedSlug, setSelectedSlug] = useState("");

  useEffect(() => {
    if (productSlug) {
      const match = productOptions.find((p) => p.slug === productSlug);
      if (match) setSelectedSlug(match.slug);
    }
  }, [productSlug]);

  const selectedProduct = productOptions.find((p) => p.slug === selectedSlug);
  const checkoutLink = selectedSlug ? dodoLinks[selectedSlug] : "";

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link href="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          ← Back to Products
        </Link>

        <div className="mt-8">
          <p className="font-semibold text-blue-600">Secure Checkout</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Complete Your Purchase
          </h1>
          <p className="mt-4 text-slate-600">
            Select your product and pay securely through Dodo Payments. Your download link is sent to you automatically — no waiting, no manual steps.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main checkout panel */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <CreditCard className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-slate-950">Choose Your Product</h2>
            <p className="mt-2 text-sm text-slate-600">
              Select a product from the list, then click the button below to go directly to the Dodo Payments secure checkout.
            </p>

            <div className="mt-6">
              <label htmlFor="product-select" className="text-sm font-semibold text-slate-800">
                Digital Product
              </label>
              <select
                id="product-select"
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600"
              >
                <option value="">Select a product to continue</option>
                {productOptions.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.label} — {p.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Selected product preview */}
            {selectedProduct && (
              <div className="mt-5 rounded-2xl bg-blue-50 border border-blue-100 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-950">{selectedProduct.label}</p>
                    <p className="mt-1 text-sm text-slate-600">Instant digital download after payment</p>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">{selectedProduct.price}</p>
                </div>
              </div>
            )}

            {/* Dodo Pay button */}
            <div className="mt-6">
              {checkoutLink ? (
                <a
                  href={checkoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-blue-700"
                >
                  <CreditCard className="h-5 w-5" />
                  Pay Now via Dodo Payments
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-xl bg-slate-200 px-6 py-4 text-base font-bold text-slate-400"
                >
                  <CreditCard className="h-5 w-5" />
                  Select a Product to Continue
                </button>
              )}
            </div>

            <p className="mt-4 text-center text-xs text-slate-400">
              You will be taken to Dodo Payments&apos; secure checkout. Payment is processed entirely by Dodo Payments.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5">
            {[
              {
                Icon: ShieldCheck,
                title: "Secure payment",
                text: "Payments are processed entirely by Dodo Payments. We never see or store your card details.",
              },
              {
                Icon: Zap,
                title: "Instant delivery",
                text: "Your download link is sent automatically by Dodo Payments the moment payment is confirmed.",
              },
              {
                Icon: Download,
                title: "Digital only",
                text: "All products are downloadable digital resources. Nothing physical is shipped.",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="h-6 w-6 text-blue-600" />
                <p className="mt-3 font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Browse all products</p>
              <p className="mt-1 text-sm text-slate-600">Each product page also has a direct Buy Now button.</p>
              <Link
                href="/products"
                className="mt-3 inline-flex w-full justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                View All Products →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <main className="bg-slate-50">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="animate-pulse space-y-4">
            <div className="h-10 w-48 rounded-xl bg-slate-200" />
            <div className="h-96 rounded-3xl bg-slate-200" />
          </div>
        </section>
      </main>
    }>
      <CheckoutInner />
    </Suspense>
  );
}