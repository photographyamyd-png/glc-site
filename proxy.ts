import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Must match `trailingSlash: true` in next.config — avoids an extra redirect hop. */
const MAINTENANCE_PATH = "/maintenance/";
const MINIMAL_SHELL_HEADER = "x-glc-minimal-shell";
const BYPASS_COOKIE = "glc_maint_bypass";

function isTruthyEnv(v: string | undefined): boolean {
  if (!v) return false;
  const s = v.trim().toLowerCase();
  return s === "1" || s === "true" || s === "yes";
}

/**
 * When set (1/true/yes), every host is sent to /maintenance/ unless bypass cookie matches
 * MAINTENANCE_BYPASS_SECRET. Use for verification or full-site hold; turn off for normal production.
 */
function redirectAllHosts(): boolean {
  return isTruthyEnv(process.env.MAINTENANCE_REDIRECT_ALL);
}

function bypassSecret(): string | undefined {
  const s = process.env.MAINTENANCE_BYPASS_SECRET?.trim();
  return s || undefined;
}

function hasValidBypass(request: NextRequest): boolean {
  const secret = bypassSecret();
  if (!secret) return false;
  return request.cookies.get(BYPASS_COOKIE)?.value === secret;
}

/**
 * Comma-separated hostnames (no protocol) that should only receive the maintenance shell.
 * Example: `www.example.com,example.com`
 *
 * Ignored when MAINTENANCE_REDIRECT_ALL is enabled (unless bypass cookie is valid).
 */
function getMaintenanceHosts(): string[] {
  const raw = process.env.MAINTENANCE_HOSTS?.trim();
  if (!raw) return [];
  return raw
    .split(",")
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean);
}

function isAssetOrInternalPath(pathname: string): boolean {
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/favicon")) return true;
  return /\.(ico|png|jpg|jpeg|svg|webp|gif|woff2?|txt|xml|webmanifest)$/i.test(
    pathname,
  );
}

/** Normalize so `/maintenance` and `/maintenance/` both count as the maintenance route. */
function isMaintenancePath(pathname: string): boolean {
  const base = pathname.replace(/\/+$/, "") || "/";
  return base === "/maintenance" || base.startsWith("/maintenance/");
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host =
    request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";

  if (isAssetOrInternalPath(pathname)) {
    return NextResponse.next();
  }

  if (isMaintenancePath(pathname)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(MINIMAL_SHELL_HEADER, "1");
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  if (hasValidBypass(request)) {
    return NextResponse.next();
  }

  const maintenanceHosts = getMaintenanceHosts();
  const hostIsParked =
    maintenanceHosts.length > 0 && maintenanceHosts.includes(host);
  const forceAll = redirectAllHosts();

  if (forceAll || hostIsParked) {
    const url = request.nextUrl.clone();
    url.pathname = MAINTENANCE_PATH;
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
