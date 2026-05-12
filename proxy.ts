import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Must match `trailingSlash: true` in next.config — avoids an extra redirect hop. */
const MAINTENANCE_PATH = "/maintenance/";
const MINIMAL_SHELL_HEADER = "x-glc-minimal-shell";
const BYPASS_COOKIE = "glc_maint_bypass";

function stripQuotes(s: string): string {
  const t = s.trim();
  if (
    (t.startsWith('"') && t.endsWith('"')) ||
    (t.startsWith("'") && t.endsWith("'"))
  ) {
    return t.slice(1, -1).trim();
  }
  return t;
}

function isTruthyEnv(v: string | undefined): boolean {
  if (!v) return false;
  const s = stripQuotes(v).toLowerCase();
  return s === "1" || s === "true" || s === "yes";
}

/**
 * Host-based redirect to `/maintenance/` runs only when this is truthy (`1`, `true`, `yes`).
 * Lets you keep `MAINTENANCE_HOSTS` / `MAINTENANCE_PRIMARY_DOMAIN` in env for later without
 * parking the site until you explicitly turn parking on.
 */
function maintenanceParkingActive(): boolean {
  return isTruthyEnv(process.env.MAINTENANCE_ENABLED);
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
 * Hosts that receive `/maintenance/` when {@link maintenanceParkingActive} is on:
 *
 * - **MAINTENANCE_HOSTS** — comma-separated, no protocol, e.g.
 *   `groundlevelcontracting.ca,www.groundlevelcontracting.ca`
 * - **MAINTENANCE_PRIMARY_DOMAIN** — apex only, e.g. `groundlevelcontracting.ca`;
 *   we also add `www.<apex>` so one variable covers both.
 */
function getMaintenanceHosts(): string[] {
  const hosts = new Set<string>();

  const raw = process.env.MAINTENANCE_HOSTS?.trim();
  if (raw) {
    for (const h of raw.split(",")) {
      const part = stripQuotes(h).toLowerCase();
      if (part) hosts.add(part);
    }
  }

  const primary = process.env.MAINTENANCE_PRIMARY_DOMAIN?.trim();
  if (primary) {
    const apex = stripQuotes(primary).toLowerCase().replace(/^www\./, "");
    if (apex) {
      hosts.add(apex);
      hosts.add(`www.${apex}`);
    }
  }

  return [...hosts];
}

function isAssetOrInternalPath(pathname: string): boolean {
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/favicon")) return true;
  if (pathname.startsWith("/api/")) return true;
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

  if (!maintenanceParkingActive()) {
    return NextResponse.next();
  }

  if (hasValidBypass(request)) {
    return NextResponse.next();
  }

  const maintenanceHosts = getMaintenanceHosts();
  const hostIsParked =
    maintenanceHosts.length > 0 && maintenanceHosts.includes(host);

  if (hostIsParked) {
    const url = request.nextUrl.clone();
    url.pathname = MAINTENANCE_PATH;
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Include `/` explicitly — some matcher patterns only match paths with an extra segment.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
    "/",
  ],
};
