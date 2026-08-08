/**
 * lib/notifications.ts
 *
 * Rolling feed of incoming Paddle / Polar / Dodo webhook events, stored in
 * Redis so the staff dashboard (/extra/dashboard) can show a live list of
 * payment notifications across all three providers.
 */

import crypto from "crypto";
import { redis } from "@/lib/redis";

export type NotificationProvider = "paddle" | "polar" | "dodo";

export type StaffNotification = {
  id: string;
  provider: NotificationProvider;
  eventType: string;
  summary: string;
  orderId?: string;
  customerEmail?: string;
  customerName?: string;
  amount?: number;
  currency?: string;
  receivedAt: string;
};

const LIST_KEY = "staff_notifications";
const MAX_NOTIFICATIONS = 200;

export async function logNotification(
  entry: Omit<StaffNotification, "id" | "receivedAt">
): Promise<void> {
  const notification: StaffNotification = {
    ...entry,
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
  };

  await redis.lpush(LIST_KEY, notification);
  await redis.ltrim(LIST_KEY, 0, MAX_NOTIFICATIONS - 1);
}

export async function getNotifications(limit = 100): Promise<StaffNotification[]> {
  const raw = await redis.lrange<StaffNotification>(LIST_KEY, 0, limit - 1);
  return raw ?? [];
}
