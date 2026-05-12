import type { Metadata } from "next";

/** Used when routes do not pass `openGraphExtra.images` / `twitterExtra.images`. */
const DEFAULT_SOCIAL_IMAGE_PATH = "/images/services/Excavation/excavation-016.jpg" as const;

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

  const openGraph: NonNullable<Metadata["openGraph"]> = {
    title,
    description,
    type: "website",
    url: canonical,
    locale: "en_CA",
    siteName: "Ground Level Contracting",
    ...openGraphExtra,
  };
  if (!openGraph.images || (Array.isArray(openGraph.images) && openGraph.images.length === 0)) {
    openGraph.images = [
      {
        url: DEFAULT_SOCIAL_IMAGE_PATH,
        width: 1920,
        height: 1280,
        alt: "Ground Level Contracting commercial excavation and site operations",
      },
    ];
  }

  const twitter: NonNullable<Metadata["twitter"]> = {
    card: "summary_large_image",
    title,
    description,
    ...twitterExtra,
  };
  if (!twitter.images || (Array.isArray(twitter.images) && twitter.images.length === 0)) {
    twitter.images = [DEFAULT_SOCIAL_IMAGE_PATH];
  }

  return {
    metadataBase: new URL(site),
    title,
    description,
    alternates: {
      canonical,
      ...(alternatesLanguages ? { languages: alternatesLanguages } : {}),
    },
    openGraph,
    twitter,
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
