import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/login", "/api/auth", "/api/health"];
const SKIP_PREFIXES = ["/_next/", "/favicon.ico", "/icon", "/apple-icon"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and public paths
  if (
    SKIP_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    PUBLIC_PATHS.some((p) => pathname.startsWith(p))
  ) {
    return NextResponse.next();
  }

  // Allow K8s health probes through
  const userAgent = request.headers.get("user-agent") || "";
  if (userAgent.includes("kube")) {
    return NextResponse.next();
  }

  // Check auth cookie
  const token = request.cookies.get("auth-token")?.value;
  const secret = process.env.MAINTENANCE_SECRET;

  if (!secret || token !== secret) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
