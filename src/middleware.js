// import { getToken } from "next-auth/jwt"
// import { NextResponse } from "next/server"

// export const middleware = async (req) => {
//     console.log(req);

//     const token = await getToken({
//         req,
//         secret: process.env.NEXTAUTH_SECRET,
//         secureCookie: process.env.NODE_ENV === "production" ? true : false,
//     })
//     console.log(token);


//     if (token) {

//         return NextResponse.next()
//     } else {
//         return NextResponse.rewrite(new URL('/login', req.url))
//     }

// }

// export const config = {
//     matcher: [
//         '/dashboard/:path*',
//     ],
// }



// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export const middleware = async (req) => {
//   const { pathname } = req.nextUrl;

//   const token = await getToken({
//     req,
//     secret: process.env.NEXTAUTH_SECRET,
//     secureCookie: process.env.NODE_ENV === "production",
//   });

//   if (!token) {
//     // Token nai -> login e redirect
//     return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, req.url));
//   }

//   console.log(token);
//   const role = token.role;
//   console.log(role);

//   // Role-based route control
//   if (pathname.startsWith("/admin-dashboard") && role !== "admin") {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (pathname.startsWith("/dashboard") && role !== "user") {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   // Role match korle next
//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/dashboard/:path*", "/admin-dashboard/:path*"],
// };


import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"; 

export const middleware = async (req) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
 secureCookie: process.env.NODE_ENV === "production" ? true : false,
  });

   const { pathname } = req.nextUrl;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  const decoded = jwt.decode(token.accessToken);
  console.log("Decoded token:", decoded);

  const role = decoded?.role;
  console.log("Role:", role);

  if (pathname.startsWith("/adminDashboard") && role !== "admin") {
    return NextResponse.rewrite(new URL("/", req.url));
  }


  if (pathname.startsWith("/dashboard") && role !== "user") {
    return NextResponse.rewrite(new URL("/", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*", "/adminDashboard/:path*"],
};
