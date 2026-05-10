import type { Metadata } from "next";
import { SEO_TITLES } from "@/lib/site/registry";
import { COPY_LAB_HERO } from "@/lib/ground-level/home-copy-lab-content";
import { buildPageMetadata } from "@/lib/site/metadata";
import { GLHomeCopyLab } from "@/components/ground-level/home-copy-lab/GLHomeCopyLab";

export const metadata: Metadata = buildPageMetadata({
  title: SEO_TITLES.home,
  description: COPY_LAB_HERO.lede,
  path: "/",
});

export default function Home() {
  return <GLHomeCopyLab />;
}
