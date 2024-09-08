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

          console.log("Response status:", res.status);

          if (res.status !== 201) {
            const errorDetails = await res.data.message;
            console.error("Login failed:", errorDetails);
            return null; // Fail the authorization if status is not 201
          }

          const user = await res.data;
          console.log("User data received:", user);

          return user || null;
        } catch (err: any) {
          if (err.response) {
            console.error("Login failed:", err.response.data.message);
            throw new Error(err.response.data.message);
          }
          console.error("Authorization error:", err);
          return null; // Fail authorization on unexpected errors
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile) {
        // Map the sub field to id as NextAuth requires an id
        return {
          id: profile.sub, // Ensure id is properly set
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? "user",
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }: any) {
      if (account.provider === "google") {
        try {
          if (profile.email_verified && profile.email.endsWith("@akgec.ac.in")) {
            const password = generatePassword();
            const res = await api.post(
              "/user/register",
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

            return true; // Successful sign-in
          } else {
            throw new Error("Please use your AKGEC email to sign in");
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
