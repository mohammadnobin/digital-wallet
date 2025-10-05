// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import axios from "axios";

// const backendURL = process.env.NEXT_PUBLIC_BASE_URL;

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           // Call your backend login endpoint
//           const res = await axios.post(`${backendURL}/api/auth/login`, {
//             email: credentials.email,
//             password: credentials.password,
//           });

//           const user = res.data.user; // your backend should return user info + token

//           if (user) {
//             return user;
//           } else {
//             return null;
//           }
//         } catch (err) {
//           throw new Error(err.response?.data?.message || "Invalid credentials");
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/login", // your login page
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
