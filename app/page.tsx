import type { Metadata } from "next";
import { SEO_TITLES } from "@/lib/site/registry";
import { HOME_COPY } from "@/lib/site/copy";
import { GLHomeCopyLab } from "@/components/ground-level/home-copy-lab/GLHomeCopyLab";

export const metadata: Metadata = {
  title: SEO_TITLES.home,
  description: HOME_COPY.hero.lede,
};

export default function Home() {
  return <GLHomeCopyLab />;
}
