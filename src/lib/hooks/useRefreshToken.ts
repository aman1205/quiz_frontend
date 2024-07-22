'use client';
import axios from "@/lib/axios";
import { signIn, useSession, getSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session, update } = useSession();

  const refreshToken = async () => {
    try {
      const res = await axios.post("/auth/refresh-token");
      const newAccessToken = res.data.accessToken;

      if (session) {
        await update({ ...session, user: { ...session.user, accessToken: newAccessToken } });
      } else {
        signIn();
      }

      return newAccessToken;
    } catch (error) {
      console.error("Failed to refresh token", error);
      signIn(); // Redirect to sign-in if refresh fails
    }
  };

  return refreshToken;
};
