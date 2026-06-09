/**
 * lib/dodoLinks.ts
 * Single source of truth for all Dodo Payments checkout URLs.
 * To add a new product:
 *  1. Create it in your Dodo Payments dashboard
 *  2. Add its product ID here
 *  3. Add the product to data/products.ts
 *  4. Add the product to the productOptions array in app/checkout/page.tsx
 */

export const dodoLinks: Record<string, string> = {
  // ── Existing 4 products (live Dodo IDs) ─────────────────────────────────────
  "business-website-starter-template":
    "https://checkout.dodopayments.com/buy/pdt_0NgYs2CiHthhVsIUqLUpR?quantity=1",
  "small-business-automation-template-kit":
    "https://checkout.dodopayments.com/buy/pdt_0NgdaIvD0fKOqoVr8Ib0s?quantity=1",
  "internet-setup-guide":
    "https://checkout.dodopayments.com/buy/pdt_0NgdbCYgyO24OQVGWK5AS?quantity=1",
  "digital-branding-starter-kit":
    "https://checkout.dodopayments.com/buy/pdt_0NgdbXKYzRcSI9wGKeUk4?quantity=1",

  // ── 10 New products — replace PLACEHOLDER_* after creating in Dodo dashboard ─
  "social-media-content-calendar-template":
    "https://checkout.dodopayments.com/buy/PLACEHOLDER_SOCIAL_CALENDAR?quantity=1",
  "small-business-seo-checklist":
    "https://checkout.dodopayments.com/buy/PLACEHOLDER_SEO_CHECKLIST?quantity=1",
  "email-marketing-starter-kit":
    "https://checkout.dodopayments.com/buy/PLACEHOLDER_EMAIL_MARKETING?quantity=1",
  "business-financial-planning-spreadsheet":
    "https://checkout.dodopayments.com/buy/PLACEHOLDER_FINANCIAL_PLANNING?quantity=1",
  "customer-onboarding-template-pack":
    "https://checkout.dodopayments.com/buy/PLACEHOLDER_ONBOARDING?quantity=1",
  "product-launch-planning-kit":
    "https://checkout.dodopayments.com/buy/PLACEHOLDER_LAUNCH_KIT?quantity=1",
  "freelance-proposal-template-pack":
    "https://checkout.dodopayments.com/buy/PLACEHOLDER_PROPOSAL_PACK?quantity=1",
  "business-password-and-access-organizer":
    "https://checkout.dodopayments.com/buy/PLACEHOLDER_PASSWORD_ORGANIZER?quantity=1",
  "digital-product-pricing-guide":
    "https://checkout.dodopayments.com/buy/PLACEHOLDER_PRICING_GUIDE?quantity=1",
  "remote-team-communication-playbook":
    "https://checkout.dodopayments.com/buy/PLACEHOLDER_REMOTE_PLAYBOOK?quantity=1",
};
