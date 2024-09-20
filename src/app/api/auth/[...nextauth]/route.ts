import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { generatePassword } from "@/lib/generatePassword";
import api from "@/lib/axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await api.post(
            "/user/register",
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            { withCredentials: true }
          );
          console.log("Response status:", res.data.statusCode);
          if (res.data.statusCode !== 201) {
            const errorDetails = await res.data.message;
            console.error("Login failed:", errorDetails);
            return null; 
          }
          const user = await res.data.data;
          console.log("User data received:", user);
          return user || null;
        } catch (err: any) {
          if (err.response) {
            console.error("Login failed:", err.response.data.message);
            throw new Error(err.response.data.message);
          }
          console.error("Authorization error:", err);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // profile(profile) {
      //   return {
      //     id: profile.sub,
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.picture,
      //     role: profile.role ?? "user",
      //   };
      // },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }: any) {
      if (account.provider === "google") {
        // && profile.email.endsWith("@akgec.ac.in")  //TODO: Add domain restriction for email
        try {
          if (profile.email_verified ) {

            const password = generatePassword();
            const res = await api.post(
              "/auth/google/auth",
              {
              
                name: profile.name,
                email: profile.email,
                password,
              },
              { withCredentials: true }
            );

            if (res.status !== 201) {
              console.error("Google sign-in failed:", res.data.message);
              return false;
            }
            const user = res.data.data;
            return user;
          } 
        } catch (err) {
          console.error("Google sign-in error:", err);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token = { ...token, ...user };
      } 
      return token;
    },
    async session({ session, token }) {
      console.log("Session token:",session, token);
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
