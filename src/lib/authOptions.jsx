
import { loginUSer } from "@/app/actions/auth/login";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
          console.log("Credentials received in authorize:", credentials); 
        const user = await loginUSer(credentials);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
