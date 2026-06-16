"use client";

import type { NavigationConfig } from "@/content/types";
import navigation from "@/content/navigation.json";
import { GlcRecoveredSiteHeader } from "@/components/layout/glc-recovered-site-header";
import { applySiteContactToNavigation } from "@/lib/site/navigation-contact";

const nav = applySiteContactToNavigation(navigation as NavigationConfig);

export function SiteHeader() {
  return <GlcRecoveredSiteHeader navigation={nav} />;
}
