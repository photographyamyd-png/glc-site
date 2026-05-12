import type { NavLink } from "@/content/types";

/** Normalize href for dedupe: trim, collapse trailing slash on path, lowercase path + hash. */
export function navHrefKey(href: string): string {
  const t = href.trim();
  const [pathRaw, ...hashParts] = t.split("#");
  const path = (pathRaw.replace(/\/$/, "") || "/").toLowerCase();
  const hash = hashParts.join("#").toLowerCase();
  return hash ? `${path}#${hash}` : path;
}

/** First occurrence wins; drops duplicate hrefs (e.g. same anchor from two labels). */
export function dedupeNavLinksPreserveOrder(links: NavLink[]): NavLink[] {
  const seen = new Set<string>();
  const out: NavLink[] = [];
  for (const link of links) {
    const key = navHrefKey(link.href);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(link);
  }
  return out;
}
