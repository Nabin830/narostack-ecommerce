import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Cloud,
  CreditCard,
  Download,
  FileText,
  FolderDown,
  HelpCircle,
  LayoutGrid,
  Lock,
  Mail,
  Megaphone,
  MousePointerClick,
  PackageCheck,
  Palette,
  PiggyBank,
  ShieldCheck,
  Share2,
  Sparkles,
  Timer,
  Wallet,
  Zap,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { featuredProducts, products } from "@/data/products";

const CATEGORY_MAP: Record<string, string> = {
  Business: "Business & Planning",
  Automation: "Business & Planning",
  Technology: "Business & Planning",
  Marketing: "Marketing & Content",
  Content: "Marketing & Content",
  "Social Media": "Social Media",
  Finance: "Finance & Legal",
  Branding: "Branding & Design",
  Website: "Branding & Design",
  Productivity: "Productivity",
};

const categoryCount = (label: string) =>
  products.filter((p) => CATEGORY_MAP[p.category] === label).length;

const categories = [
  { label: "Business & Planning", icon: Briefcase, blurb: "Plans, checklists, contracts, and launch kits for running your business." },
  { label: "Marketing & Content", icon: Megaphone, blurb: "SEO checklists, email kits, content calendars, and copywriting guides." },
  { label: "Social Media", icon: Share2, blurb: "Bio templates, audit tools, and setup checklists for every platform." },
  { label: "Finance & Legal", icon: PiggyBank, blurb: "Budget trackers, tax prep checklists, and grant planning resources." },
  { label: "Branding & Design", icon: Palette, blurb: "Color palette planners, brand kits, and identity starter resources." },
  { label: "Productivity", icon: Zap, blurb: "Daily checklists, weekly planners, and remote work productivity tools." },
];

const steps = [
  {
    icon: MousePointerClick,
    title: "Browse & choose",
    text: "Explore clearly described digital templates, guides, and resource packs — every product page tells you exactly what's included.",
  },
  {
    icon: Lock,
    title: "Pay securely",
    text: "Check out in seconds through secure payment processing. One-time payment — no subscriptions, no hidden fees.",
  },
  {
    icon: FolderDown,
    title: "Download instantly",
    text: "Your download link is delivered automatically after payment. Start using your resources right away.",
  },
];

const whyUs = [
  { icon: Timer, title: "Instant automatic delivery", text: "Every product is delivered by download link immediately after payment — no waiting, no manual steps." },
  { icon: ShieldCheck, title: "Secure payment processing", text: "All payments run through trusted, PCI-compliant checkout providers. Your card details never touch our servers." },
  { icon: BadgeCheck, title: "Clear, honest descriptions", text: "Every product lists exactly what's included and who it's best for, so you always know what you're buying." },
  { icon: Wallet, title: "One-time payment", text: "Buy once, download, and keep it. No subscriptions, no recurring charges, no upsells." },
];

const faqs = [
  {
    q: "How are products delivered?",
    a: "All products are digital downloads. After your payment is confirmed, a download link is sent to you automatically — no human involvement required.",
  },
  {
    q: "Do I receive a physical product?",
    a: "No. Narostack Digital LLC sells downloadable digital products only. Nothing is physically shipped.",
  },
  {
    q: "Is my payment secure?",
    a: "Yes. Payments are processed securely through trusted payment providers with industry-standard encryption.",
  },
  {
    q: "Are these one-time payments?",
    a: "Yes. Every product is a one-time purchase. There are no subscriptions or recurring charges.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-slate-950 bg-ink-radial">
        <div className="bg-grid-ink pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[140px]" />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              Downloadable Digital Products for Small Businesses
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Practical digital{" "}
              <span className="text-gradient-brand">templates, guides,</span>{" "}
              and resource packs for small businesses.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Narostack Digital LLC sells downloadable digital products,
              including website templates, automation templates, Internet setup
              guides, digital branding kits, and business resource packs.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center rounded-xl bg-brand-gradient px-7 py-3.5 font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Shop Digital Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                Go to Checkout
              </Link>
            </div>

            <div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                One-time digital products
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-5 w-5 text-blue-400" />
                Email/download delivery
              </div>

              <div className="flex items-center gap-2.5">
                <Download className="h-5 w-5 text-blue-400" />
                Online access available
              </div>
            </div>
          </div>

          <div className="glass-dark animate-fade-up rounded-3xl p-6 shadow-inner-ring [animation-delay:150ms]">
            <div className="relative overflow-hidden rounded-2xl bg-brand-gradient p-6 text-white shadow-glow">
              <div className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full bg-white/15 blur-2xl" />
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-100">
                Narostack Digital LLC
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-snug">
                Downloadable resources for business planning.
              </h2>

              <p className="mt-4 leading-7 text-blue-100/90">
                Prepare your website structure, organize workflows, plan Internet
                setup, and build a cleaner brand foundation using digital
                templates, guides, and checklists.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Sparkles,
                  title: "Website Templates",
                  text: "Downloadable website layout and content structure resources.",
                },
                {
                  icon: Cloud,
                  title: "Internet Guides",
                  text: "Digital guides for organizing files, access, and Internet planning.",
                },
                {
                  icon: FileText,
                  title: "Planning Templates",
                  text: "Simple templates for workflow and business organization.",
                },
                {
                  icon: PackageCheck,
                  title: "Digital Delivery",
                  text: "Delivered by email, download link, or online access.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-lift rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:border-white/25 hover:bg-white/[0.07]"
                >
                  <div className="inline-flex rounded-lg bg-blue-500/15 p-2 ring-1 ring-inset ring-blue-400/30">
                    <item.icon className="h-5 w-5 text-blue-300" />
                  </div>
                  <h3 className="mt-3 font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NEW: Live stats strip inside hero */}
        <div className="relative border-t border-white/10 bg-white/[0.03] backdrop-blur">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 text-center sm:grid-cols-4">
            {[
              { value: `${products.length}+`, label: "Digital products" },
              { value: "6", label: "Product categories" },
              { value: "Instant", label: "Automatic delivery" },
              { value: "100%", label: "Digital downloads" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="border-b border-slate-200 bg-slate-50 py-7">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 text-center sm:grid-cols-4">
          {[
            "Digital Downloads",
            "Secure Dodo Checkout",
            "Email Delivery",
            "No Physical Shipping",
          ].map((item) => (
            <div
              key={item}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500 transition-colors hover:text-blue-600"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ============ NEW: CATEGORY SHOWCASE ============ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Browse by Category</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything your business needs, organized.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              From daily planning to full launch kits — explore {products.length}+ downloadable
              resources across six clearly organized categories.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.label} delay={i * 90}>
              <Link
                href="/products"
                className="card-lift group relative overflow-hidden rounded-3xl h-full block border border-slate-200 bg-white p-6 shadow-card hover:border-blue-300/60 hover:shadow-card-hover"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-100/60 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-xl bg-brand-gradient p-3 shadow-card">
                    <cat.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 ring-1 ring-inset ring-slate-500/10">
                    {categoryCount(cat.label)} products
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-950 transition-colors group-hover:text-blue-700">
                  {cat.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{cat.blurb}</p>
                <p className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600">
                  Explore category
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </p>
              </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEW: HOW IT WORKS ============ */}
      <section className="relative overflow-hidden bg-slate-950 bg-ink-radial py-24">
        <div className="bg-grid-ink pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From browsing to download in under a minute.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              No accounts required to buy. No waiting for delivery. Every purchase is
              fully automatic from checkout to download.
            </p>
          </ScrollReveal>

          <div className="relative mt-14 grid gap-6 md:grid-cols-3">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent md:block" />
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 130}>
              <div className="glass-dark card-lift relative h-full rounded-3xl p-7 hover:border-white/25">
                <div className="relative inline-flex rounded-2xl bg-brand-gradient p-3.5 shadow-glow">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Step {i + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{step.text}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="relative bg-white py-24">
        <div className="bg-grid-light pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Featured Products</p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Popular downloadable products
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Simple and clearly described digital products designed for small
                business planning and organization.
              </p>
            </div>

            <Link
              href="/products"
              className="group inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              View all products →
            </Link>
          </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {featuredProducts.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 110} className="h-full">
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEW: WHY NAROSTACK ============ */}
      <section className="border-y border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ScrollReveal from="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Why Narostack</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Built for small businesses that want to move fast.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Every product in the store is designed to save you time — clearly
                described, instantly delivered, and yours to keep after a single
                one-time payment.
              </p>
              <Link
                href="/products"
                className="group mt-8 inline-flex items-center justify-center rounded-xl bg-brand-gradient px-7 py-3.5 font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover hover:brightness-110"
              >
                Browse the store
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {whyUs.map((item, i) => (
                <ScrollReveal key={item.title} from="right" delay={i * 100}>
                <div className="card-lift h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-card hover:border-blue-300/60">
                  <div className="inline-flex rounded-xl bg-blue-50 p-2.5 ring-1 ring-inset ring-blue-600/15">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="mt-4 font-bold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ NEW: FAQ PREVIEW ============ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Questions & Answers</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Quick answers about how the store works.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-4">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 80}>
              <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 open:border-blue-300/60 open:shadow-card-hover">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
                    {f.q}
                  </span>
                  <span className="text-xl font-light text-blue-600 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 pl-8 text-sm leading-7 text-slate-600">{f.a}</p>
              </details>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/faq" className="group inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-700">
              View all FAQs
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ NEW: FINAL CTA ============ */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal from="zoom">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 bg-ink-radial px-8 py-16 text-center shadow-glow sm:px-16">
            <div className="bg-grid-ink pointer-events-none absolute inset-0" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-blue-600/30 blur-[100px]" />
            <div className="relative">
              <div className="mx-auto inline-flex rounded-2xl bg-brand-gradient p-3.5 shadow-glow">
                <LayoutGrid className="h-6 w-6 text-white" />
              </div>
              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to organize, brand, and grow your business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                Browse {products.length}+ downloadable templates, guides, and resource packs.
                Pay once, download instantly, keep forever.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center rounded-xl bg-brand-gradient px-8 py-3.5 font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Shop Digital Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2"><CreditCard className="h-4 w-4 text-blue-400" />Secure checkout</span>
                <span className="inline-flex items-center gap-2"><Timer className="h-4 w-4 text-blue-400" />Instant delivery</span>
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-400" />One-time payment</span>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
