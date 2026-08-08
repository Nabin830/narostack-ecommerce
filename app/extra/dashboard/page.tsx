import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import StaffNotificationsDashboard from "@/components/StaffNotificationsDashboard";
import { STAFF_COOKIE_NAME, verifyStaffSessionToken } from "@/lib/staffAuth";

export const metadata = {
  title: "Staff Dashboard | Narostack Digital LLC",
  description: "Live payment notification feed for Paddle, Polar, and Dodo.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StaffDashboardPage() {
  const token = cookies().get(STAFF_COOKIE_NAME)?.value;

  if (!verifyStaffSessionToken(token)) {
    redirect("/extra");
  }

  return <StaffNotificationsDashboard />;
}
