// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const token = req.cookies.get("accessToken")?.value;
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
//   return NextResponse.next();
// }
// export const config = {
//   matcher: ["/dashboard/:path*"],
// };


import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Redirect unauthenticated users to login
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect authenticated users away from login/register
  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
