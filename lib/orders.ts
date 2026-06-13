/**
 * lib/orders.ts
 *
 * In-memory order store + signed download token system.
 */

import crypto from "crypto";

const TOKEN_SECRET = process.env.DOWNLOAD_TOKEN_SECRET ?? "change-me-in-production";
const TOKEN_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

// ─── Types ────────────────────────────────────────────────────────────────────

export type Order = {
  orderId: string;
  productId: string;
  productSlug: string;
  customerEmail: string;
  amount: number;
  currency: string;
  paidAt: string;
  downloadToken: string;
  tokenUsed: boolean;
  tokenExpiresAt: number;
};

// ─── In-memory store ──────────────────────────────────────────────────────────

const orderStore = new Map<string, Order>();
const tokenIndex = new Map<string, string>();

// ─── Safe constant-time string comparison ────────────────────────────────────

function safeHmacEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

// ─── Token helpers ────────────────────────────────────────────────────────────

export function generateDownloadToken(orderId: string, email: string): string {
  const ts = Date.now();
  const payload = `${orderId}:${email}:${ts}`;
  const sig = crypto
    .createHmac("sha256", TOKEN_SECRET)
    .update(payload)
    .digest("hex");
  return Buffer.from(JSON.stringify({ orderId, email, ts, sig })).toString("base64url");
}

export type TokenVerifyResult =
  | { ok: true; order: Order }
  | { ok: false; reason: string };

export function verifyDownloadToken(token: string, requesterEmail: string): TokenVerifyResult {
  let parsed: { orderId: string; email: string; ts: number; sig: string };

  try {
    parsed = JSON.parse(Buffer.from(token, "base64url").toString("utf8"));
  } catch (_e) {
    return { ok: false, reason: "invalid_token" };
  }

  // Recompute expected HMAC
  const payload = `${parsed.orderId}:${parsed.email}:${parsed.ts}`;
  const expected = crypto
    .createHmac("sha256", TOKEN_SECRET)
    .update(payload)
    .digest("hex");

  // Safe string comparison — no buffer length mismatch possible
  if (!safeHmacEqual(parsed.sig, expected)) {
    return { ok: false, reason: "invalid_signature" };
  }

  // Email must match the logged-in user
  if (parsed.email.toLowerCase() !== requesterEmail.toLowerCase()) {
    return { ok: false, reason: "email_mismatch" };
  }

  // Look up order
  const order = orderStore.get(parsed.orderId);
  if (!order) return { ok: false, reason: "order_not_found" };

  // Check expiry
  if (Date.now() > order.tokenExpiresAt) {
    return { ok: false, reason: "token_expired" };
  }

  return { ok: true, order };
}

// ─── Order CRUD ───────────────────────────────────────────────────────────────

export function saveOrder(
  order: Omit<Order, "downloadToken" | "tokenUsed" | "tokenExpiresAt">
): Order {
  const token = generateDownloadToken(order.orderId, order.customerEmail);
  const full: Order = {
    ...order,
    downloadToken: token,
    tokenUsed: false,
    tokenExpiresAt: Date.now() + TOKEN_TTL_MS,
  };
  orderStore.set(order.orderId, full);
  tokenIndex.set(token, order.orderId);
  return full;
}

export function getOrderById(orderId: string): Order | undefined {
  return orderStore.get(orderId);
}

export function getOrdersByEmail(email: string): Order[] {
  return Array.from(orderStore.values())
    .filter((o) => o.customerEmail.toLowerCase() === email.toLowerCase())
    .sort((a, b) => b.paidAt.localeCompare(a.paidAt));
}

export function markTokenUsed(orderId: string): void {
  const order = orderStore.get(orderId);
  if (order) {
    order.tokenUsed = true;
    orderStore.set(orderId, order);
  }
}

// ─── Product file URLs ────────────────────────────────────────────────────────
// Replace each REPLACE_xxx with your real Google Drive / S3 download URL.
// These URLs are server-side only — never sent to the browser.

export const PRODUCT_FILES: Record<string, string> = {
  "daily-task-checklist":                    "https://drive.google.com/uc?export=download&id=REPLACE_daily-task-checklist",
  "weekly-goal-planner":                     "https://drive.google.com/uc?export=download&id=REPLACE_weekly-goal-planner",
  "business-card-copy-template":             "https://drive.google.com/uc?export=download&id=REPLACE_business-card-copy-template",
  "instagram-bio-template-pack":             "https://drive.google.com/uc?export=download&id=REPLACE_instagram-bio-template-pack",
  "password-manager-sheet":                  "https://drive.google.com/uc?export=download&id=REPLACE_password-manager-sheet",
  "meeting-agenda-template":                 "https://drive.google.com/uc?export=download&id=REPLACE_meeting-agenda-template",
  "invoice-template-pack":                   "https://drive.google.com/uc?export=download&id=REPLACE_invoice-template-pack",
  "blog-post-outline-template":              "https://drive.google.com/uc?export=download&id=REPLACE_blog-post-outline-template",
  "cold-email-template-pack":                "https://drive.google.com/uc?export=download&id=REPLACE_cold-email-template-pack",
  "social-media-bio-kit":                    "https://drive.google.com/uc?export=download&id=REPLACE_social-media-bio-kit",
  "youtube-description-template-pack":       "https://drive.google.com/uc?export=download&id=REPLACE_youtube-description-template-pack",
  "small-business-legal-checklist":          "https://drive.google.com/uc?export=download&id=REPLACE_small-business-legal-checklist",
  "client-welcome-email-template":           "https://drive.google.com/uc?export=download&id=REPLACE_client-welcome-email-template",
  "brand-color-palette-planner":             "https://drive.google.com/uc?export=download&id=REPLACE_brand-color-palette-planner",
  "website-copywriting-guide":               "https://drive.google.com/uc?export=download&id=REPLACE_website-copywriting-guide",
  "30-day-content-plan-template":            "https://drive.google.com/uc?export=download&id=REPLACE_30-day-content-plan-template",
  "facebook-page-setup-checklist":           "https://drive.google.com/uc?export=download&id=REPLACE_facebook-page-setup-checklist",
  "email-signature-template-pack":           "https://drive.google.com/uc?export=download&id=REPLACE_email-signature-template-pack",
  "business-budget-tracker":                 "https://drive.google.com/uc?export=download&id=REPLACE_business-budget-tracker",
  "google-business-profile-setup-guide":     "https://drive.google.com/uc?export=download&id=REPLACE_google-business-profile-setup-guide",
  "customer-feedback-form-template":         "https://drive.google.com/uc?export=download&id=REPLACE_customer-feedback-form-template",
  "linkedin-profile-optimization-guide":     "https://drive.google.com/uc?export=download&id=REPLACE_linkedin-profile-optimization-guide",
  "small-business-tax-prep-checklist":       "https://drive.google.com/uc?export=download&id=REPLACE_small-business-tax-prep-checklist",
  "digital-product-pricing-guide":           "https://drive.google.com/uc?export=download&id=REPLACE_digital-product-pricing-guide",
  "website-launch-checklist":                "https://drive.google.com/uc?export=download&id=REPLACE_website-launch-checklist",
  "content-repurposing-guide":               "https://drive.google.com/uc?export=download&id=REPLACE_content-repurposing-guide",
  "remote-work-productivity-planner":        "https://drive.google.com/uc?export=download&id=REPLACE_remote-work-productivity-planner",
  "small-business-grant-checklist":          "https://drive.google.com/uc?export=download&id=REPLACE_small-business-grant-checklist",
  "social-media-audit-template":             "https://drive.google.com/uc?export=download&id=REPLACE_social-media-audit-template",
  "email-marketing-starter-kit":             "https://drive.google.com/uc?export=download&id=REPLACE_email-marketing-starter-kit",
  "freelance-contract-template-pack":        "https://drive.google.com/uc?export=download&id=REPLACE_freelance-contract-template-pack",
  "product-launch-planning-kit":             "https://drive.google.com/uc?export=download&id=REPLACE_product-launch-planning-kit",
  "small-business-seo-checklist":            "https://drive.google.com/uc?export=download&id=REPLACE_small-business-seo-checklist",
  "customer-onboarding-template-pack":       "https://drive.google.com/uc?export=download&id=REPLACE_customer-onboarding-template-pack",
  "social-media-content-calendar-template":  "https://drive.google.com/uc?export=download&id=REPLACE_social-media-content-calendar-template",
  "freelance-proposal-template-pack":        "https://drive.google.com/uc?export=download&id=REPLACE_freelance-proposal-template-pack",
  "business-plan-template-kit":              "https://drive.google.com/uc?export=download&id=REPLACE_business-plan-template-kit",
  "internet-setup-guide":                    "https://drive.google.com/uc?export=download&id=REPLACE_internet-setup-guide",
  "remote-team-communication-playbook":      "https://drive.google.com/uc?export=download&id=REPLACE_remote-team-communication-playbook",
  "brand-identity-starter-kit":              "https://drive.google.com/uc?export=download&id=REPLACE_brand-identity-starter-kit",
  "digital-branding-starter-kit":            "https://drive.google.com/uc?export=download&id=REPLACE_digital-branding-starter-kit",
  "business-financial-planning-spreadsheet": "https://drive.google.com/uc?export=download&id=REPLACE_business-financial-planning-spreadsheet",
  "small-business-automation-template-kit":  "https://drive.google.com/uc?export=download&id=REPLACE_small-business-automation-template-kit",
  "complete-marketing-template-bundle":      "https://drive.google.com/uc?export=download&id=REPLACE_complete-marketing-template-bundle",
  "ecommerce-store-launch-kit":              "https://drive.google.com/uc?export=download&id=REPLACE_ecommerce-store-launch-kit",
  "saas-landing-page-template-kit":          "https://drive.google.com/uc?export=download&id=REPLACE_saas-landing-page-template-kit",
  "business-website-starter-template":       "https://drive.google.com/uc?export=download&id=REPLACE_business-website-starter-template",
  "complete-small-business-starter-bundle":  "https://drive.google.com/uc?export=download&id=REPLACE_complete-small-business-starter-bundle",
  "ultimate-digital-business-kit":           "https://drive.google.com/uc?export=download&id=REPLACE_ultimate-digital-business-kit",
};