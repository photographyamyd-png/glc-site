import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: `/${string}`;
  noIndex?: boolean;
  /** Full canonical URL (with origin) when it must differ from path-only canonical */
  canonicalUrl?: string;
  alternatesLanguages?: Record<string, string>;
  openGraphExtra?: Partial<Metadata["openGraph"]>;
  twitterExtra?: Partial<Metadata["twitter"]>;
};

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://groundlevel.example.com").replace(/\/$/, "");
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
  canonicalUrl,
  alternatesLanguages,
  openGraphExtra,
  twitterExtra,
}: PageMetadataInput): Metadata {
  const canonicalPath = path.endsWith("/") ? path : `${path}/`;
  const site = getSiteUrl().replace(/\/$/, "");
  const pathClean = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const canonical = canonicalUrl ?? `${site}${pathClean}`;

  return {
    metadataBase: new URL(site),
    title,
    description,
    alternates: {
      canonical,
      ...(alternatesLanguages ? { languages: alternatesLanguages } : {}),
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      ...openGraphExtra,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...twitterExtra,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
