import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAINTENANCE_PATH = "/maintenance";
const MINIMAL_SHELL_HEADER = "x-glc-minimal-shell";

/**
 * Comma-separated hostnames (no protocol) that should only receive the
 * maintenance shell — e.g. your GoDaddy parked domain while the app lives
 * elsewhere. Example: `www.example.com,example.com`
 *
 * If unset or empty, no host-based redirect runs (safe for local and primary hosting).
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

function isMaintenancePath(pathname: string): boolean {
  return (
    pathname === MAINTENANCE_PATH ||
    pathname.startsWith(`${MAINTENANCE_PATH}/`)
  );
}

export function middleware(request: NextRequest) {
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

  const maintenanceHosts = getMaintenanceHosts();
  if (maintenanceHosts.length > 0 && maintenanceHosts.includes(host)) {
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
