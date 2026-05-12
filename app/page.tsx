import type { Metadata } from "next";
import { GLHomeCopyLab } from "@/components/ground-level/home-copy-lab/GLHomeCopyLab";
import { HomeFaqJsonLd } from "@/components/seo/HomeFaqJsonLd";
import { COPY_LAB_HERO } from "@/lib/ground-level/home-copy-lab-content";
import { buildPageMetadata } from "@/lib/site/metadata";
import { SEO_TITLES } from "@/lib/site/registry";

export const metadata: Metadata = buildPageMetadata({
  title: SEO_TITLES.home,
  description: COPY_LAB_HERO.lede,
  path: "/",
});

export default function Home() {
  return (
    <>
      <HomeFaqJsonLd />
      <GLHomeCopyLab />
    </>
  );
}
