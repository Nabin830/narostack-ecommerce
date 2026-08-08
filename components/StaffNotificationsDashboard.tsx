"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, LogOut, RefreshCw } from "lucide-react";

type StaffNotification = {
  id: string;
  provider: "paddle" | "polar" | "dodo";
  eventType: string;
  summary: string;
  orderId?: string;
  customerEmail?: string;
  customerName?: string;
  amount?: number;
  currency?: string;
  receivedAt: string;
};

type FilterKey = "all" | "paddle" | "polar" | "dodo";

function formatAmount(amount?: number, currency?: string): string | null {
  if (amount == null) return null;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${amount} ${currency ?? ""}`.trim();
  }
}

const PROVIDER_LABEL: Record<StaffNotification["provider"], string> = {
  paddle: "Paddle",
  polar: "Polar",
  dodo: "Dodo",
};

const PROVIDER_BADGE: Record<StaffNotification["provider"], string> = {
  paddle: "bg-indigo-100 text-indigo-700",
  polar: "bg-purple-100 text-purple-700",
  dodo: "bg-emerald-100 text-emerald-700",
};

const REFRESH_INTERVAL_MS = 15000;

export default function StaffNotificationsDashboard() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<StaffNotification[]>([]);
  const [filter, setFilter] = useState<FilterKey>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/staff/notifications", { cache: "no-store" });

      if (res.status === 401) {
        router.push("/extra");
        return;
      }

      if (!res.ok) throw new Error("Failed to load notifications");

      const data = await res.json();
      setNotifications(data.notifications ?? []);
      setError("");
    } catch {
      setError("Could not load notifications. Retrying shortly.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    load();
    const interval = setInterval(load, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [load]);

  async function handleLogout() {
    await fetch("/api/staff/logout", { method: "POST" });
    router.push("/extra");
    router.refresh();
  }

  const filtered = notifications.filter(
    (n) => filter === "all" || n.provider === filter
  );

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-blue-600">Staff Dashboard</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
              Payment Notifications
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Live feed of incoming Paddle, Polar, and Dodo webhook events.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {(["all", "paddle", "polar", "dodo"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === key
                  ? "bg-blue-600 text-white"
                  : "border border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {key === "all" ? "All" : PROVIDER_LABEL[key]}
            </button>
          ))}

          <button
            onClick={load}
            className="ml-auto flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-8 text-sm text-slate-500">Loading notifications...</div>
          ) : error ? (
            <div className="p-8 text-sm text-red-600">{error}</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-sm text-slate-500">No notifications yet.</div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {filtered.map((n) => (
                <li
                  key={n.id}
                  className="flex flex-wrap items-center justify-between gap-3 p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
                      <Bell className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${PROVIDER_BADGE[n.provider]}`}
                        >
                          {PROVIDER_LABEL[n.provider] ?? n.provider}
                        </span>
                        <span className="text-sm font-semibold text-slate-900">
                          {n.eventType}
                        </span>
                      </div>
                      {n.customerName && (
                        <p className="mt-1 text-sm font-semibold text-slate-800">
                          {n.customerName}
                        </p>
                      )}
                      <p className="mt-0.5 text-sm text-slate-600">
                        {[n.customerEmail, n.orderId, formatAmount(n.amount, n.currency)]
                          .filter(Boolean)
                          .join(" · ") || "No additional details"}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs text-slate-400">
                    {new Date(n.receivedAt).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
