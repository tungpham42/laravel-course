// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the user is authenticated
  const token = request.cookies.get("__session")?.value;

  // If trying to access admin routes without authentication, redirect to signin
  if (request.nextUrl.pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // If authenticated and trying to access signin page, redirect to admin
  if (request.nextUrl.pathname.startsWith("/auth/signin") && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/auth/signin"],
};
