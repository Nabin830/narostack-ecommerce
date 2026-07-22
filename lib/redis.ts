import { Redis } from "@upstash/redis";

/**
 * Upstash Redis client — persistent storage that works
 * correctly across Vercel's serverless functions.
 */
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});