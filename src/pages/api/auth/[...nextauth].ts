import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          console.log("Authorize function called with credentials:", credentials);

          // const res = await fetch("http://localhost:8000/api/auth/login", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({
          //     email: credentials?.email,
          //     password: credentials?.password,
          //   }),
          // });
          const res = await axios.post("http://localhost:8000/api/auth/login", {
            email: credentials?.email,
            password: credentials?.password,
          }, {withCredentials: true});

          console.log("Response status:", res.status);

          if (!(res.status === 201)) {
            const errorDetails = await res.data.message;
            console.error("Login failed:", errorDetails);
            // throw new Error(errorDetails.message || "Login failed");
          }

          const user = await res.data;
          console.log("User data received:", user);

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authorize error:", error);
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  callbacks: {
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
