/**
 * lib/polar.ts
 *
 * Shared Polar API client, used to create checkout sessions server-side.
 * Requires POLAR_ACCESS_TOKEN (an Organization Access Token from
 * Polar Dashboard -> Settings -> Developers -> Access Tokens).
 */

import { Polar } from "@polar-sh/sdk";

export const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  server: "production",
});
