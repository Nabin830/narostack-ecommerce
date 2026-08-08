/**
 * lib/staffAuth.ts
 *
 * Lightweight username/password session for the internal staff
 * notifications dashboard. This is intentionally separate from the
 * customer-facing Google login (next-auth) — staff credentials are
 * configured via env vars, not stored per-user.
 */

import crypto from "crypto";

export const STAFF_COOKIE_NAME = "staff_session";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours
export const STAFF_COOKIE_MAX_AGE_SECONDS = SESSION_TTL_MS / 1000;

function getSecret(): string {
  const secret = process.env.STAFF_SESSION_SECRET || process.env.NEXTAUTH_SECRET;
  if (!secret) {
    throw new Error(
      "STAFF_SESSION_SECRET (or NEXTAUTH_SECRET) must be set to use the staff dashboard"
    );
  }
  return secret;
}

function sign(value: string): string {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

function timingSafeStringEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

/**
 * Validates a submitted username/password against the STAFF_USERNAME /
 * STAFF_PASSWORD env vars. Both must be set or every login is rejected.
 */
export function checkStaffCredentials(username: string, password: string): boolean {
  const expectedUser = process.env.STAFF_USERNAME || "";
  const expectedPass = process.env.STAFF_PASSWORD || "";
  if (!expectedUser || !expectedPass) {
    console.error("[Staff Auth] STAFF_USERNAME / STAFF_PASSWORD not configured");
    return false;
  }
  return (
    timingSafeStringEqual(username, expectedUser) &&
    timingSafeStringEqual(password, expectedPass)
  );
}

export function createStaffSessionToken(username: string): string {
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = `${username}.${expires}`;
  const signature = sign(payload);
  return Buffer.from(`${payload}.${signature}`).toString("base64url");
}

export function verifyStaffSessionToken(token: string | undefined | null): boolean {
  if (!token) return false;

  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const lastDot = decoded.lastIndexOf(".");
    const secondLastDot = decoded.lastIndexOf(".", lastDot - 1);
    if (lastDot === -1 || secondLastDot === -1) return false;

    const payload = decoded.slice(0, lastDot);
    const signature = decoded.slice(lastDot + 1);
    const expiresStr = decoded.slice(secondLastDot + 1, lastDot);

    const expectedSignature = sign(payload);
    const sigBuf = Buffer.from(signature);
    const expectedBuf = Buffer.from(expectedSignature);
    if (sigBuf.length !== expectedBuf.length) return false;
    if (!crypto.timingSafeEqual(sigBuf, expectedBuf)) return false;

    const expires = Number(expiresStr);
    if (!expires || Number.isNaN(expires) || Date.now() > expires) return false;

    return true;
  } catch {
    return false;
  }
}
