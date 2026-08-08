import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import StaffLoginForm from "@/components/StaffLoginForm";
import { STAFF_COOKIE_NAME, verifyStaffSessionToken } from "@/lib/staffAuth";

export const metadata = {
  title: "Staff Login | Narostack Digital LLC",
  description: "Internal staff login for payment notification monitoring.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StaffLoginPage() {
  const token = cookies().get(STAFF_COOKIE_NAME)?.value;

  if (verifyStaffSessionToken(token)) {
    redirect("/extra/dashboard");
  }

  return (
    <main className="bg-slate-50">
      <section className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-600">Staff Access</p>
              <h1 className="text-2xl font-bold text-slate-950">Sign In</h1>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Internal staff login for monitoring Paddle, Polar, and Dodo payment
            notifications. This is separate from customer accounts and is not
            linked to Google sign-in.
          </p>

          <div className="mt-6">
            <StaffLoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
