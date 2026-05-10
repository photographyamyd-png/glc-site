import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: `/${string}`;
  noIndex?: boolean;
};

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://groundlevel.example.com").replace(/\/$/, "");
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonicalPath = path.endsWith("/") ? path : `${path}/`;

  return {
    metadataBase: new URL(getSiteUrl()),
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalPath,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
