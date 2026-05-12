"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { EMAIL_ADDRESS, PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import { FOUNDATIONS_HUB_QUOTE_FORM } from "@/lib/site/foundations-civil-infrastructure-content";

export function FoundationsHubQuoteForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nProject / location:\n${project}\n`,
      );
      const subject = encodeURIComponent(FOUNDATIONS_HUB_QUOTE_FORM.mailtoSubject);
      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    },
    [name, email, project],
  );

  return (
    <form
      className="mx-auto max-w-xl space-y-4"
      onSubmit={onSubmit}
      aria-labelledby="foundations-quote-form-heading"
    >
      <h2 id="foundations-quote-form-heading" className="font-serif text-2xl font-bold uppercase tracking-tight text-[color:var(--ink-deep)] sm:text-3xl">
        {FOUNDATIONS_HUB_QUOTE_FORM.h2}
      </h2>
      <p className="font-sans text-sm leading-relaxed text-[color:var(--ink-deep)]/85 sm:text-base">{FOUNDATIONS_HUB_QUOTE_FORM.sub}</p>
      <div>
        <label htmlFor="foundations-quote-name" className="eyebrow text-[color:var(--ink-deep)]">
          Name
        </label>
        <input
          id="foundations-quote-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          required
          className="mt-2 w-full min-h-[44px] border-2 border-[color:var(--ink-deep)] bg-white px-3 py-2 font-sans text-sm text-ink outline-none ring-[color:var(--y)] focus-visible:ring-2"
        />
      </div>
      <div>
        <label htmlFor="foundations-quote-email" className="eyebrow text-[color:var(--ink-deep)]">
          Email
        </label>
        <input
          id="foundations-quote-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          required
          className="mt-2 w-full min-h-[44px] border-2 border-[color:var(--ink-deep)] bg-white px-3 py-2 font-sans text-sm text-ink outline-none ring-[color:var(--y)] focus-visible:ring-2"
        />
      </div>
      <div>
        <label htmlFor="foundations-quote-project" className="eyebrow text-[color:var(--ink-deep)]">
          Project summary
        </label>
        <textarea
          id="foundations-quote-project"
          name="project"
          value={project}
          onChange={(ev) => setProject(ev.target.value)}
          required
          rows={3}
          className="mt-2 w-full resize-y border-2 border-[color:var(--ink-deep)] bg-white px-3 py-2 font-sans text-sm text-ink outline-none ring-[color:var(--y)] focus-visible:ring-2"
        />
      </div>
      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
        <button
          type="submit"
          className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center bg-[color:var(--ink-deep)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none"
        >
          {FOUNDATIONS_HUB_QUOTE_FORM.submitLabel}
        </button>
        <Link
          href={PHONE_TEL}
          className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center border-2 border-[color:var(--ink-deep)] bg-transparent px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--ink-deep)]"
        >
          Call 705-619-4902
        </Link>
        <Link
          href="/contact/"
          className="inline-flex min-h-[48px] items-center justify-center text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--ink-deep)] underline decoration-[color:var(--ink-deep)]/40 underline-offset-4"
        >
          Full contact page
        </Link>
      </div>
    </form>
  );
}
