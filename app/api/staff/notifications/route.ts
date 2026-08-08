import { NextRequest, NextResponse } from "next/server";
import { STAFF_COOKIE_NAME, verifyStaffSessionToken } from "@/lib/staffAuth";
import { getNotifications } from "@/lib/notifications";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(STAFF_COOKIE_NAME)?.value;

  if (!verifyStaffSessionToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const notifications = await getNotifications(200);
  return NextResponse.json({ notifications });
}
