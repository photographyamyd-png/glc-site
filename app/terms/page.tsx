import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/templates/LegalPageTemplate";
import { SEO_TITLES } from "@/lib/site/registry";
import { CORE_COPY } from "@/lib/site/copy";

export const metadata: Metadata = {
  title: SEO_TITLES.terms,
  description: CORE_COPY.terms.body,
};

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title={CORE_COPY.terms.title}
      intro={CORE_COPY.terms.body}
      sections={[
        {
          heading: "Use of Site",
          body: "This site provides service information and dispatch contact pathways for commercial and industrial customers.",
        },
        {
          heading: "No Project Guarantee",
          body: "Website content does not constitute a binding project commitment until scope and contractual terms are confirmed.",
        },
        {
          heading: "Contact Submissions",
          body: "By submitting contact details, you consent to project-related communication from Ground Level Contracting.",
        },
      ]}
    />
  );
}
