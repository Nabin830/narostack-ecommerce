import { NextRequest, NextResponse } from "next/server";
import {
  checkStaffCredentials,
  createStaffSessionToken,
  STAFF_COOKIE_NAME,
  STAFF_COOKIE_MAX_AGE_SECONDS,
} from "@/lib/staffAuth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const username = typeof body?.username === "string" ? body.username : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!username || !password || !checkStaffCredentials(username, password)) {
    return NextResponse.json(
      { error: "Invalid username or password" },
      { status: 401 }
    );
  }

  const token = createStaffSessionToken(username);
  const res = NextResponse.json({ success: true });

  res.cookies.set(STAFF_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: STAFF_COOKIE_MAX_AGE_SECONDS,
  });

  return res;
}
