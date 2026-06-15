import type { Metadata } from "next";
import { GLHomeCopyLab } from "@/components/ground-level/home-copy-lab/GLHomeCopyLab";
import { HomeFaqJsonLd } from "@/components/seo/HomeFaqJsonLd";
import { COPY_LAB_META } from "@/lib/ground-level/home-copy-lab-content";
import { buildPageMetadata } from "@/lib/site/metadata";
import { HOME_OG_IMAGE } from "@/lib/site/og-images";
import { SEO_TITLES } from "@/lib/site/registry";

export const metadata: Metadata = buildPageMetadata({
  title: SEO_TITLES.home,
  description: COPY_LAB_META.metaDescription,
  path: "/",
  openGraphExtra: {
    images: [HOME_OG_IMAGE],
    title: COPY_LAB_META.openGraphTitle,
    description: COPY_LAB_META.openGraphDescription,
  },
  twitterExtra: { images: [HOME_OG_IMAGE.url as string] },
});

export default function Home() {
  return (
    <>
      <HomeFaqJsonLd />
      <GLHomeCopyLab />
    </>
  );
}
