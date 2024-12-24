import axios from "axios";
import { getSession } from "next-auth/react";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface UserToken {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  accessToken: string;
}

// Axios instance for general use
const api = axios.create({
  baseURL: BASE_URL,
});

// Axios instance for authentication
const apiAuth = axios.create({
  baseURL: BASE_URL,
});

apiAuth.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    config.headers.Authorization = `Bearer ${session?.user.access_token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api, apiAuth };
export default api;
