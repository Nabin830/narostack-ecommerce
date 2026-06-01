"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <p className="font-semibold text-blue-600">Something went wrong</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            We could not load this page
          </h1>

          <p className="mt-4 text-slate-600">
            Please try again. If the problem continues, contact Narostack
            Digital LLC support.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Try Again
            </button>

            <Link
              href="/contact"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}