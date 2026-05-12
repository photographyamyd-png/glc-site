import type { Metadata } from "next";
import Link from "next/link";
import { ContactLeadForm } from "@/components/contact/ContactLeadForm";
import { MarketingPageShell } from "@/components/templates/MarketingPageShell";
import { SEO_TITLES } from "@/lib/site/registry";
import { CORE_COPY } from "@/lib/site/copy";
import { buildPageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: SEO_TITLES.contact,
  description: CORE_COPY.contact.lead,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <MarketingPageShell
      id="contact-dispatch"
      eyebrow={CORE_COPY.contact.eyebrow}
      title={
        <>
          Dispatch <span className="text-[color:var(--y)]">contact</span>
        </>
      }
      lede={CORE_COPY.contact.heading}
      ledeSplit={{ primary: CORE_COPY.contact.leadIntro, secondary: CORE_COPY.contact.leadClosing }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-xl border border-[color:var(--g200)] bg-white/80 p-5 backdrop-blur-sm">
          <p className="label-overline">{CORE_COPY.contact.phoneHeading}</p>
          <Link href={CORE_COPY.contact.phone.href} className="mt-2 block font-serif text-2xl font-semibold tracking-tight text-ink">
            {CORE_COPY.contact.phone.label}
          </Link>
          <p className="mt-4 label-overline">{CORE_COPY.contact.emailHeading}</p>
          <Link href={CORE_COPY.contact.email.href} className="mt-2 block text-sm font-semibold text-ink">
            {CORE_COPY.contact.email.label}
          </Link>
          <p className="mt-6 label-overline">{CORE_COPY.contact.primaryContactEyebrow}</p>
          <p className="mt-2 font-serif text-xl font-semibold uppercase tracking-tight text-ink">
            {CORE_COPY.contact.primaryContact.name}
          </p>
          <p className="mt-1 text-[15px] leading-[1.72] text-ink-muted sm:text-base">
            {CORE_COPY.contact.primaryContact.title}
          </p>
        </article>
        <article className="rounded-xl border border-[color:var(--g200)] bg-white/80 p-5 backdrop-blur-sm">
          <p className="label-overline">{CORE_COPY.contact.addressHeading}</p>
          <p className="mt-2 text-sm text-ink-muted">{CORE_COPY.contact.address}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {CORE_COPY.contact.supportLinks.map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex min-h-[44px] items-center rounded-md border border-[color:var(--g200)] px-3 py-2 text-xs text-ink">
                {link.label}
              </Link>
            ))}
          </div>
        </article>
        <article className="rounded-xl border border-[color:var(--g200)] bg-white/80 p-5 backdrop-blur-sm sm:col-span-2">
          <p className="label-overline">Send a message</p>
          <p className="mt-2 max-w-prose text-[15px] leading-[1.72] text-ink-muted sm:text-base">
            Submit the form and we will route it to dispatch. For urgent mobilization, call the number above.
          </p>
          <ContactLeadForm
            idPrefix="contact-page"
            source="contact"
            variant="default"
            className="mt-6 max-w-2xl"
            submitLabel="Send message"
          />
        </article>
      </div>
    </MarketingPageShell>
  );
}
