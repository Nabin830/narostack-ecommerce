/**
 * lib/dodoProductMap.ts
 *
 * Maps Dodo Payments product IDs (pdt_xxxxx) back to our product slugs.
 * Used by the webhook to know which product was purchased.
 */

import { dodoLinks } from "@/lib/dodoLinks";

function buildReverseMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const [slug, url] of Object.entries(dodoLinks)) {
    // URL format: https://checkout.dodopayments.com/buy/pdt_XXXX?quantity=1
    const match = url.match(/\/buy\/(pdt_[^?]+)/);
    if (match) {
      map[match[1]] = slug;
    }
  }
  return map;
}

export const DODO_PRODUCT_ID_TO_SLUG: Record<string, string> = buildReverseMap();