"use client";

import type { NavigationConfig } from "@/content/types";
import navigation from "@/content/navigation.json";
import { GlcRecoveredSiteHeader } from "@/components/layout/glc-recovered-site-header";

const nav = navigation as NavigationConfig;

export function SiteHeader() {
  return <GlcRecoveredSiteHeader navigation={nav} />;
}
