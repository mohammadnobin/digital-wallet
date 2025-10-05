// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import axios from "axios";

// export default NextAuth({
//   session: { strategy: "jwt" },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: { email: {}, password: {} },
//       async authorize(credentials) {
//         try {
//           const res = await axios.post("http://localhost:5000/api/auth/login", {
//             email: credentials.email,
//             password: credentials.password,
//           });
//           return res.data.user;
//         } catch (err) {
//           return null;
//         }
//       },
//     }),
//   ],
//   pages: { signIn: "/login" },
// });


import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        // You can verify credentials here manually, e.g., compare with a local store
        // OR simply return a user object without calling API
        if (credentials.email && credentials.password) {
          return { id: 1, email: credentials.email }; // dummy user
        }
        return null;
      },
    }),
  ],
  pages: { signIn: "/login" },
});
