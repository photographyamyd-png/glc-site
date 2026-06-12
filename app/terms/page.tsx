import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/templates/LegalPageTemplate";
import { SEO_TITLES } from "@/lib/site/registry";
import { CORE_COPY } from "@/lib/site/copy";
import { buildPageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: SEO_TITLES.terms,
  description: CORE_COPY.terms.body,
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title={CORE_COPY.terms.title}
      intro={CORE_COPY.terms.body}
      sections={CORE_COPY.terms.sections}
    />
  );
}
