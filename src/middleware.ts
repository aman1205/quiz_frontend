import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

interface UserToken {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "USER";
  accessToken: string;
  iat: number;
  exp: number;
  jti: string;
}

const ADMIN_ROUTES = ["/admin"];
const USER_ROUTES = ["/quizzes"];
const AUTH_ROUTES = ["/login", "/register"];

export default async function middleware(request: NextRequest) {
  const token = (await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })) as UserToken | null;

  const pathname = request.nextUrl.pathname;
  const isProtectedRoute = [...ADMIN_ROUTES, ...USER_ROUTES].some(route =>
    pathname.startsWith(route)
  );
  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const userRole = token?.role;

  console.log("Token:", token);

  if (isAuthRoute) {
    if (token) {
      console.log("User is authorized. Redirecting from auth page.");
      return NextResponse.redirect(new URL("/", request.url));
    }
    console.log("User is not authorized and no token found on auth page.");
    return NextResponse.next();
  }

  if (isProtectedRoute) {
    if (!token) {
      console.log("User is not authorized. Redirecting to login page.");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (ADMIN_ROUTES.includes(pathname) && userRole !== "ADMIN") {
      console.log("User is not authorized to access admin routes.");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // if (USER_ROUTES.includes(pathname) && userRole !== "USER") {
    //   console.log("User is not authorized to access user routes.");
    //   return NextResponse.redirect(new URL("/", request.url));
    // }

    console.log("User is authorized. Accessing protected route.");
    return NextResponse.next();
  }

  console.log("Middleware executed.");
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/admin/:path*", "/quizzes", "/login", "/register"],
};
