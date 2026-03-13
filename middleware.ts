import { NextResponse } from "next/server";

export function middleware(req) {
  const isLoginPage = req.nextUrl.pathname.startsWith("/login");

  // Désactive toute auth pour tester
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};