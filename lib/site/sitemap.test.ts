import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { getIndexablePaths } from "@/lib/site/indexable-urls";
import { getSiteUrl } from "@/lib/site/metadata";

describe("sitemap coverage", () => {
  it("lists every indexable route from the registry", () => {
    const siteUrl = getSiteUrl();
    const urls = new Set(sitemap().map((entry) => entry.url.replace(siteUrl, "")));

    getIndexablePaths().forEach((path) => {
      expect(urls.has(path), `missing sitemap entry for ${path}`).toBe(true);
    });
    expect(urls.size).toBe(getIndexablePaths().length);
  });

  it("uses absolute URLs on the configured site origin", () => {
    const siteUrl = getSiteUrl();
    sitemap().forEach((entry) => {
      expect(entry.url.startsWith(`${siteUrl}/`) || entry.url === `${siteUrl}/`).toBe(true);
    });
  });
});
