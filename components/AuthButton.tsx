"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button
        type="button"
        disabled
        className="w-full rounded-xl bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500"
      >
        Loading...
      </button>
    );
  }

  if (session?.user) {
    return (
      <div className="grid gap-4">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || "Customer"}
              width={44}
              height={44}
              className="rounded-full"
            />
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
              {session.user.name?.charAt(0) || "U"}
            </div>
          )}

          <div className="min-w-0">
            <p className="truncate font-semibold text-slate-900">
              {session.user.name}
            </p>
            <p className="truncate text-sm text-slate-600">
              {session.user.email}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signIn("google", { callbackUrl: "/account" })}
      className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
    >
      Continue with Google
    </button>
  );
}