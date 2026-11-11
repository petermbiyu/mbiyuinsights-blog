import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const sessionCookie = req.cookies.get("better-auth.session_token");

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard:path*"] };
