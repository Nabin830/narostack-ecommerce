import Link from "next/link";

export function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-px hover:shadow-card-hover hover:brightness-110">
      {children}
    </Link>
  );
}
