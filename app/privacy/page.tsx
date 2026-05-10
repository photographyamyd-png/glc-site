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
      sections={[
        {
          heading: "Information We Collect",
          body: "We collect contact and project details required to respond to dispatch and service inquiries.",
        },
        {
          heading: "How We Use Information",
          body: "Information is used to evaluate scope, coordinate responses, and maintain service communication records.",
        },
        {
          heading: "Data Retention",
          body: "Data is retained only as long as necessary for project communication, compliance, and operational recordkeeping.",
        },
      ]}
    />
  );
}
