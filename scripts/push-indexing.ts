/**
 * Submit all indexable URLs to IndexNow (Bing/Yandex) and print Search Console steps.
 *
 * Usage:
 *   SITE_URL=https://groundlevelcontracting.ca npm run push:indexing
 */
import site from "@/content/site.json";
import { getIndexableAbsoluteUrls } from "@/lib/site/indexable-urls";

const INDEXNOW_KEY = "glcindex2026ca8f3b2d1e9a4f7c";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const SITE_JSON_ORIGIN = site.url.replace(/\/$/, "");

function resolveSiteUrl(): string {
  const raw =
    process.env.SITE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    SITE_JSON_ORIGIN;
  return raw.replace(/\/$/, "");
}

function hostFromUrl(siteUrl: string): string {
  return new URL(siteUrl).host;
}

async function submitIndexNow(siteUrl: string, urlList: string[]): Promise<void> {
  const host = hostFromUrl(siteUrl);
  const keyLocation = `${siteUrl}/${INDEXNOW_KEY}.txt`;

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key: INDEXNOW_KEY, keyLocation, urlList }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`IndexNow failed (${res.status}): ${body || res.statusText}`);
  }

  console.log(`IndexNow: submitted ${urlList.length} URL(s) for ${host} (${res.status})`);
}

async function main(): Promise<void> {
  const siteUrl = resolveSiteUrl();
  const urls = getIndexableAbsoluteUrls(siteUrl);

  console.log(`\nIndexable URLs (${urls.length}) on ${siteUrl}:\n`);
  urls.forEach((url) => console.log(`  ${url}`));

  console.log("\n--- IndexNow ---");
  try {
    await submitIndexNow(siteUrl, urls);
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    console.error(
      "IndexNow failed — deploy public key file first:",
      `${siteUrl}/${INDEXNOW_KEY}.txt`,
    );
  }

  console.log("\n--- Google Search Console ---");
  console.log("1. Set Vercel env NEXT_PUBLIC_SITE_URL to this same origin, then redeploy.");
  console.log(`2. Sitemaps → Submit: ${siteUrl}/sitemap.xml`);
  console.log("3. URL Inspection → paste each priority URL → Request indexing");
  console.log("   (Google limits manual requests; sitemap covers the full set.)");
  console.log(`4. Confirm key file: ${siteUrl}/${INDEXNOW_KEY}.txt\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
