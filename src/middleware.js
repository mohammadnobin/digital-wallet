import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const middleware = async (req) => {
  const { pathname } = req.nextUrl;

  const publicRoutes = ["/login", "/register"];
  if (publicRoutes.includes(pathname)) return NextResponse.next();

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, req.nextUrl.origin));
  }

  const decoded = jwt.decode(token.accessToken);
  const role = decoded?.role;
  const adminOnlyRoutes = [
    "/dashboard/allHistory",
    "/dashboard/userManagement",
    "/dashboard/userReports"
  ];

  if (role === "admin") {
    return NextResponse.next();
  }

  if (role === "user") {
    if (adminOnlyRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
};

export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/login",
    "/register",
  ],
};
