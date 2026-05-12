"use client";

import { ContactLeadForm } from "@/components/contact/ContactLeadForm";
import { FOUNDATIONS_HUB_QUOTE_FORM } from "@/lib/site/foundations-civil-infrastructure-content";

export function FoundationsHubQuoteForm() {
  return (
    <ContactLeadForm
      idPrefix="foundations-quote"
      source="foundations-hub"
      variant="foundations"
      className="mx-auto max-w-xl"
      heading={FOUNDATIONS_HUB_QUOTE_FORM.h2}
      sub={FOUNDATIONS_HUB_QUOTE_FORM.sub}
      submitLabel={FOUNDATIONS_HUB_QUOTE_FORM.submitLabel}
      showPhone={false}
    />
  );
}
