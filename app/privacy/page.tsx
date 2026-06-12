import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/templates/LegalPageTemplate";
import { SEO_TITLES } from "@/lib/site/registry";
import { CORE_COPY } from "@/lib/site/copy";
import { buildPageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: SEO_TITLES.privacy,
  description: CORE_COPY.privacy.body,
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <LegalPageTemplate
      title={CORE_COPY.privacy.title}
      intro={CORE_COPY.privacy.body}
      sections={CORE_COPY.privacy.sections}
    />
  );
}
