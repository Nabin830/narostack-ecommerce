"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, ShieldCheck, Truck } from "lucide-react";

export default function CheckoutPage() {
  const email = "pandeynabin@narostack.com";

  const [form, setForm] = useState({
    name: "",
    businessName: "",
    customerEmail: "",
    product: "",
    message: "",
  });

  const mailSubject = encodeURIComponent(
    "Invoice Request - Narostack Digital LLC"
  );

  const mailBody = encodeURIComponent(`Hello Narostack Digital LLC,

I would like to request an invoice.

Customer Name: ${form.name}
Business Name: ${form.businessName}
Customer Email: ${form.customerEmail}
Product / Service: ${form.product}

Message:
${form.message}

Thank you.`);

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${mailSubject}&body=${mailBody}`;
  const emailAppLink = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/cart"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          ← Back to Cart
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <p className="font-semibold text-blue-600">Invoice Checkout</p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              Request Invoice
            </h1>

            <p className="mt-4 text-slate-600">
              Online payment integration is coming soon. Please complete the
              invoice request details below and send the request by Gmail or
              your email app.
            </p>

            <div className="mt-8 grid gap-5">
              <div>
                <label
                  htmlFor="customer-name"
                  className="text-sm font-semibold text-slate-800"
                >
                  Your Name
                </label>

                <input
                  id="customer-name"
                  name="customerName"
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      name: e.target.value,
                    });
                  }}
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label
                  htmlFor="business-name"
                  className="text-sm font-semibold text-slate-800"
                >
                  Business Name
                </label>

                <input
                  id="business-name"
                  name="businessName"
                  type="text"
                  value={form.businessName}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      businessName: e.target.value,
                    });
                  }}
                  placeholder="Enter business name"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label
                  htmlFor="customer-email"
                  className="text-sm font-semibold text-slate-800"
                >
                  Email Address
                </label>

                <input
                  id="customer-email"
                  name="customerEmail"
                  type="email"
                  value={form.customerEmail}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      customerEmail: e.target.value,
                    });
                  }}
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label
                  htmlFor="product"
                  className="text-sm font-semibold text-slate-800"
                >
                  Product or Service
                </label>

                <select
                  id="product"
                  name="product"
                  title="Product or Service"
                  aria-label="Product or Service"
                  value={form.product}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      product: e.target.value,
                    });
                  }}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600"
                >
                  <option value="">Select product or service</option>

                  <option value="Business Website Starter Template">
                    Business Website Starter Template - $49
                  </option>

                  <option value="Small Business Automation Kit">
                    Small Business Automation Kit - $79
                  </option>

                  <option value="Cybersecurity Checklist Pack">
                    Cybersecurity Checklist Pack - $29
                  </option>

                  <option value="Cloud Setup Guide">
                    Cloud Setup Guide - $39
                  </option>

                  <option value="Digital Branding Starter Kit">
                    Digital Branding Starter Kit - $59
                  </option>

                  <option value="IT Support Consultation Package">
                    IT Support Consultation Package - $99
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      message: e.target.value,
                    });
                  }}
                  placeholder="Write any extra details here"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Request Invoice with Gmail
              </a>

              <a
                href={emailAppLink}
                className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Request Invoice with Email App
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              If the button does not open, email us directly at{" "}
              <span className="font-semibold text-slate-700">{email}</span>.
            </p>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">
              Payment Status
            </h2>

            <div className="mt-4 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">
                Payment integration coming soon
              </p>

              <p className="mt-2 text-sm text-slate-600">
                We are preparing secure online payment options through approved
                checkout providers such as Pockyt, Stripe, PayPal, Paddle, or
                another provider.
              </p>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-blue-600" />

                <div>
                  <p className="font-semibold text-slate-900">Email invoice</p>
                  <p className="text-sm text-slate-600">
                    Invoice details are sent by email.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-blue-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Secure instructions
                  </p>
                  <p className="text-sm text-slate-600">
                    Payment details are shared after order review.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Truck className="mt-1 h-5 w-5 text-blue-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Digital delivery
                  </p>
                  <p className="text-sm text-slate-600">
                    Delivered by email, download, or online access.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Support Hours</p>
              <p className="mt-1">Monday–Friday, 9:00 AM–5:00 PM</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}