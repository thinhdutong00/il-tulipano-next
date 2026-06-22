import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isMaintenancePage = pathname === "/maintenance";
  const isNextAsset = pathname.startsWith("/_next");
  const isApiRoute = pathname.startsWith("/api");
  const isPublicFile =
    pathname.includes(".") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml";

  if (isMaintenancePage || isNextAsset || isApiRoute || isPublicFile) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";

  return NextResponse.rewrite(url);
}