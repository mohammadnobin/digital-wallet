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


// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken"; 

// export const middleware = async (req) => {
//   const token = await getToken({
//     req,
//     secret: process.env.NEXTAUTH_SECRET,
//  secureCookie: process.env.NODE_ENV === "production" ? true : false,
//   });

//    const { pathname } = req.nextUrl;

//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
//   const decoded = jwt.decode(token.accessToken);
//   console.log("Decoded token:", decoded);

//   const role = decoded?.role;
//   console.log("Role:", role);

//   if (pathname.startsWith("/adminDashboard") && role !== "admin") {
//     return NextResponse.rewrite(new URL("/", req.url));
//   }


//   if (pathname.startsWith("/dashboard") && role !== "user") {
//     return NextResponse.rewrite(new URL("/", req.url));
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/dashboard/:path*", "/adminDashboard/:path*"],
// };



// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export const middleware = async (req) => {
//   // বর্তমান URL path পাওয়া
//   const { pathname } = req.nextUrl;
//   console.log(pathname);

//   // access token পাওয়া (NextAuth থেকে)
//   const token = await getToken({
//     req,
//     secret: process.env.NEXTAUTH_SECRET,
//     secureCookie: process.env.NODE_ENV === "production" ? true : false,
//   });

//   // যদি টোকেন না থাকে (মানে ইউজার লগইন করেনি)
//   if (!token) {
//     // login বা register ছাড়া অন্য রুটে গেলে → login পেজে রিডাইরেক্ট করো
//     if (pathname === "/login" || pathname === "/register") {
//       return NextResponse.next();
//     } else {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//   }

//   // টোকেন ডিকোড করা
//   const decoded = jwt.decode(token.accessToken);
//   const role = decoded?.role;

//   console.log("Decoded Token:", decoded);
//   console.log("User Role:", role);
//   console.log("Current Path:", pathname);

//   // যদি user admin dashboard এ ঢোকার চেষ্টা করে
//   if (pathname.startsWith("/adminDashboard") && role !== "admin") {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   // যদি admin user dashboard এ ঢোকার চেষ্টা করে
//   if (pathname.startsWith("/dashboard") && role !== "user") {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   // Login & Register রুট সবসময় Allow করো
//   if (pathname === "/login" || pathname === "/register") {
//     return NextResponse.next();
//   }

//   // অন্যসব ক্ষেত্রে Access Allow
//   return NextResponse.next();
// };

// // কোন কোন route এ এই middleware কাজ করবে
// export const config = {
//   matcher: [
//     "/login",
//     "/register",
//     "/dashboard/:path*",
//     "/adminDashboard/:path*",
//   ],
// };



// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export const middleware = async (req) => {
//   const { pathname } = req.nextUrl;

//   const token = await getToken({
//     req,
//     secret: process.env.NEXTAUTH_SECRET,
//     secureCookie: process.env.NODE_ENV === "production",
//   });

//   const publicRoutes = ["/login", "/register"];

//   if (!token) {
//     if (publicRoutes.includes(pathname)) {
//       return NextResponse.next();
//     }

//     // ✅ ঠিক করা রিডাইরেক্ট URL
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${pathname}`, req.nextUrl.origin)
//     );
//   }

//   const decoded = jwt.decode(token.accessToken);
//   const role = decoded?.role;

//   if (pathname.startsWith("/adminDashboard") && role !== "admin") {
//     return NextResponse.redirect(new URL("/", req.nextUrl.origin));
//   }

//   if (pathname.startsWith("/dashboard") && role !== "user") {
//     return NextResponse.redirect(new URL("/", req.nextUrl.origin));
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: [
//     "/login",
//     "/register",
//     "/dashboard/:path*",
//     "/adminDashboard/:path*",
//   ],
// };


import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const middleware = async (req) => {
  const { pathname } = req.nextUrl;

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  const publicRoutes = ["/login", "/register"];

  // Public routes
  if (!token) {
    if (publicRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, req.nextUrl.origin)
    );
  }

  // Decode token to get user role
  const decoded = jwt.decode(token.accessToken);
  const role = decoded?.role;

  // Admin can access everything
  if (role === "admin") {
    return NextResponse.next();
  }

  // User restrictions
  if (role === "user") {
    if (pathname.startsWith("/dashboard")) {
      return NextResponse.next();
    }
    
    // User trying to access admin routes or other protected routes
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  // Default fallback: redirect to login
  return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
};

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:path*",
    "/adminDashboard/:path*",// match all protected routes
  ],
};
