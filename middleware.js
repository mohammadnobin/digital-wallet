import { NextResponse } from "next/server";

export function middleware(req) {
    console.log(req);
  // cookie read
  const token = req.cookies.get("accessToken")?.value;

  // debug log
  console.log("Access Token in middleware:", token);

  if (!token) {
    console.log("No token found, redirecting to login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  console.log("Token found, allowing access");
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"]
};
