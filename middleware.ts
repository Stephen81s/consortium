// middleware.ts
// Protège toutes les pages sauf /login

import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function middleware(req: any) {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getUser();

  const isLogged = !!data.user;
  const isLoginPage = req.nextUrl.pathname.startsWith("/login");

  if (!isLogged && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|login|favicon.ico).*)"],
};