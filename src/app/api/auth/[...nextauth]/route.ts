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
        const isRegister = req.body?.isRegister === 'true'; // Convert to boolean

        try {
          if (isRegister) {
            console.log("Registering user with credentials:", credentials);

            // Handle Registration
            const res = await api.post(
              "/user/register",
              {
                email: credentials?.email,
                password: credentials?.password,
              },
              { withCredentials: true }
            );
            if (res.data.statusCode !== 201) {
              console.error("Registration failed:", res.data.message);
              return null; 
            }
            return res.data.data || null; // Return the registered user data
          } else {
            // Handle Login
            console.log("Logging in with credentials:", credentials);
            const res = await api.post(
              "/auth/login",
              {
                email: credentials?.email,
                password: credentials?.password,
              },
              { withCredentials: true }
            );
            if (res.data.statusCode !== 200) {
              console.error("Login failed:", res.data.message);
              return null; 
            }
            return res.data.data || null; // Return the logged-in user data
          }
        } catch (err: any) {
          console.error("Authorization error:", err.response?.data?.message || err.message);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        if (profile?.email) {
          try {
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

            return true; // Sign-in successful
          } catch (err) {
            console.error("Google sign-in error:", err);
            return false;
          }
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
    maxAge: 4 * 60 * 60
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
