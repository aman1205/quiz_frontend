import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export default function middleware(request: NextRequest) {
  let tokenverify = request.cookies.get("session")?.value;
  console.log(request);
  const notAutizate =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname == "/register";

  if (notAutizate) {
    if (tokenverify) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (!tokenverify) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  console.log("middleware");
}

export const config = {
  matcher: ["/", "/admin/*", "/login", "/register"],
};
