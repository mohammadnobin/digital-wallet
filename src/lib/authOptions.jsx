// app/api/auth/[...nextauth].ts (বা pages/api/auth/[...nextauth].ts)
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import axiosSecure from "@/hooks/useAxiosSecure";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "Enter your email" },
//         password: { label: "Password", type: "password", placeholder: "Enter your password" },
//       },
//       async authorize(credentials, req) {
//         try {
//           const { email, password } = credentials || {};
//           if (!email || !password) {
//             throw new Error("Email and password are required");
//           }

//           // API কল করা
//           const response = await axiosSecure.post(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`,
//             { email, password },
//             { withCredentials: true }
//           );
//           // API response থেকে user এবং accessToken নেওয়া
//           const { user, accessToken } = response.data.data;


//           if (user) {
//             return {
//               id: user._id,
//               email: user.email,
//               name: user.name,
//               accessToken, // JWT callback এ ব্যবহার করা যাবে
//             };
//           }

//           return null; // যদি user না থাকে
//         } catch (error) {
//           console.error("Login error:", error.response?.data || error.message);
//           return null;
//         }
//       },
//     }),
//   ],

//   pages: {
//     signIn: "/login", // লগইন পেইজ
//   },

//   callbacks: {
//     // JWT তৈরি করার সময় user data যোগ করা
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.name = user.name;
//         token.accessToken = user.accessToken;
//       }
//       return token;
//     },

//     // session তৈরি করার সময় token থেকে user data যোগ করা
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id;
//         session.user.email = token.email;
//         session.user.name = token.name;
//         session.user.accessToken = token.accessToken;
//       }
//       return session;
//     },
//   },

//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt", // JWT ব্যবহার করা হচ্ছে
//     maxAge: 60 * 60 * 24, // ১ দিন
//   },
// };


import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { cookies } from "next/headers";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials || {};
          if (!email || !password) {
            throw new Error("Email and password are required");
          }

          // API কল
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`,
            { email, password },
            { withCredentials: true }
          );

          const { user, accessToken } = response.data.data;

          if (!user || !accessToken) {
            return null;
          }

          // Next.js 13+ App Router cookies API
          const cookieStore = cookies();
          cookieStore.set("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            sameSite: "lax",
          });

          // NextAuth user object
          return {
            id: user._id,
            email: user.email,
            name: user.name,
            accessToken,
          };
        } catch (error) {
          console.error("Login error:", error.response?.data || error.message);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.accessToken = user.accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 1 day
  },
};


export default NextAuth(authOptions);
