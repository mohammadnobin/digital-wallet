import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("accessToken")?.value;
  if (!token) {
    console.log("No token found, redirecting to login");
    return NextResponse.redirect(new URL("/login", req.url));
  }
  console.log("Token found, allowing access");
  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*"],
};
