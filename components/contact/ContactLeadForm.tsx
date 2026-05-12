"use client";

import Link from "next/link";
import { useCallback, useId, useState } from "react";
import { PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import type { ContactLeadSource } from "@/lib/contact/schema";

export type ContactLeadFormProps = {
  source: ContactLeadSource;
  variant: "default" | "foundations";
  heading?: string;
  sub?: string;
  submitLabel?: string;
  showPhone?: boolean;
  /** Prefix for input ids (avoid duplicate ids if multiple instances). */
  idPrefix: string;
  className?: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message", string[]>>;

const inputDefault =
  "mt-2 w-full min-h-[44px] border-2 border-[color:var(--g200)] bg-white px-3 py-2 font-sans text-sm text-ink outline-none ring-[color:var(--y)] focus-visible:ring-2";
const inputFoundations =
  "mt-2 w-full min-h-[44px] border-2 border-[color:var(--ink-deep)] bg-white px-3 py-2 font-sans text-sm text-ink outline-none ring-[color:var(--y)] focus-visible:ring-2";

export function ContactLeadForm({
  source,
  variant,
  heading,
  sub,
  submitLabel = "Send message",
  showPhone = true,
  idPrefix,
  className = "",
}: ContactLeadFormProps) {
  const reactId = useId();
  const baseId = `${idPrefix}-${reactId.replace(/:/g, "")}`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors | null>(null);

  const inputClass = variant === "foundations" ? inputFoundations : inputDefault;
  const labelClass =
    variant === "foundations" ? "eyebrow text-[color:var(--ink-deep)]" : "eyebrow text-ink";
  const headingClass =
    variant === "foundations"
      ? "font-serif text-2xl font-bold uppercase tracking-tight text-[color:var(--ink-deep)] sm:text-3xl"
      : "font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl";
  const subClass =
    variant === "foundations"
      ? "font-sans text-sm leading-relaxed text-[color:var(--ink-deep)]/85 sm:text-base"
      : "mt-2 font-sans text-[15px] leading-[1.72] text-ink-muted sm:text-base";

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("submitting");
      setErrorMessage(null);
      setFieldErrors(null);

      try {
        const res = await fetch("/api/contact/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone: showPhone ? phone : undefined,
            message,
            source,
            website: hp,
          }),
        });

        const payload = (await res.json()) as {
          ok?: boolean;
          error?: string;
          fieldErrors?: FieldErrors;
        };

        if (res.status === 200 && payload.ok) {
          setStatus("success");
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setHp("");
          return;
        }

        if (res.status === 422 && payload.fieldErrors) {
          setFieldErrors(payload.fieldErrors);
          setErrorMessage(payload.error ?? "Please fix the highlighted fields.");
          setStatus("error");
          return;
        }

        setErrorMessage(payload.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } catch {
        setErrorMessage("Network error. Check your connection and try again.");
        setStatus("error");
      }
    },
    [name, email, phone, message, source, hp, showPhone],
  );

  if (status === "success") {
    return (
      <div className={className} role="status" aria-live="polite">
        <p className={headingClass}>Message sent</p>
        <p className={subClass}>
          Thanks — we received your note and will follow up as soon as we can. You can still reach us by phone if your
          request is urgent.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={PHONE_TEL}
            className="cta-primary inline-flex min-h-[44px] items-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]"
          >
            Call now
          </Link>
          <button
            type="button"
            className="inline-flex min-h-[44px] items-center border border-[color:var(--g200)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink"
            onClick={() => setStatus("idle")}
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  const headingId = `${baseId}-heading`;

  return (
    <form className={className} onSubmit={onSubmit} aria-labelledby={heading ? headingId : undefined}>
      {heading ? (
        <>
          <h2 id={headingId} className={headingClass}>
            {heading}
          </h2>
          {sub ? <p className={`mt-3 ${subClass}`}>{sub}</p> : null}
        </>
      ) : null}

      <div className={heading ? "mt-6 space-y-4" : "space-y-4"}>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          value={hp}
          onChange={(ev) => setHp(ev.target.value)}
          className="absolute -left-[9999px] h-px w-px overflow-hidden border-0 p-0"
        />

        <div>
          <label htmlFor={`${baseId}-name`} className={labelClass}>
            Name
          </label>
          <input
            id={`${baseId}-name`}
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className={inputClass}
            aria-invalid={Boolean(fieldErrors?.name?.length)}
            aria-describedby={fieldErrors?.name ? `${baseId}-name-err` : undefined}
          />
          {fieldErrors?.name ? (
            <p id={`${baseId}-name-err`} className="mt-1 text-sm text-red-700" role="alert">
              {fieldErrors.name[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${baseId}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${baseId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className={inputClass}
            aria-invalid={Boolean(fieldErrors?.email?.length)}
            aria-describedby={fieldErrors?.email ? `${baseId}-email-err` : undefined}
          />
          {fieldErrors?.email ? (
            <p id={`${baseId}-email-err`} className="mt-1 text-sm text-red-700" role="alert">
              {fieldErrors.email[0]}
            </p>
          ) : null}
        </div>

        {showPhone ? (
          <div>
            <label htmlFor={`${baseId}-phone`} className={labelClass}>
              Phone <span className="font-normal normal-case text-ink-muted">(optional)</span>
            </label>
            <input
              id={`${baseId}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
              className={inputClass}
              aria-invalid={Boolean(fieldErrors?.phone?.length)}
              aria-describedby={fieldErrors?.phone ? `${baseId}-phone-err` : undefined}
            />
            {fieldErrors?.phone ? (
              <p id={`${baseId}-phone-err`} className="mt-1 text-sm text-red-700" role="alert">
                {fieldErrors.phone[0]}
              </p>
            ) : null}
          </div>
        ) : null}

        <div>
          <label htmlFor={`${baseId}-message`} className={labelClass}>
            {source === "foundations-hub" ? "Project summary" : "How can we help?"}
          </label>
          <textarea
            id={`${baseId}-message`}
            name="message"
            required
            rows={variant === "foundations" ? 3 : 5}
            maxLength={8000}
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
            className={`${inputClass} resize-y`}
            aria-invalid={Boolean(fieldErrors?.message?.length)}
            aria-describedby={fieldErrors?.message ? `${baseId}-message-err` : undefined}
          />
          {fieldErrors?.message ? (
            <p id={`${baseId}-message-err`} className="mt-1 text-sm text-red-700" role="alert">
              {fieldErrors.message[0]}
            </p>
          ) : null}
        </div>

        {errorMessage && status === "error" ? (
          <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          <button
            type="submit"
            disabled={status === "submitting"}
            className={
              variant === "foundations"
                ? "inline-flex min-h-[48px] min-w-[200px] items-center justify-center bg-[color:var(--ink-deep)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transform-none"
                : "cta-primary inline-flex min-h-[48px] min-w-[200px] items-center justify-center px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] disabled:cursor-not-allowed disabled:opacity-60"
            }
          >
            {status === "submitting" ? "Sending…" : submitLabel}
          </button>
          <Link
            href={PHONE_TEL}
            className={
              variant === "foundations"
                ? "inline-flex min-h-[48px] min-w-[200px] items-center justify-center border-2 border-[color:var(--ink-deep)] bg-transparent px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--ink-deep)]"
                : "inline-flex min-h-[48px] min-w-[200px] items-center justify-center border-2 border-ink px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-ink"
            }
          >
            Call (705) 619-4902
          </Link>
          {source === "foundations-hub" ? (
            <Link
              href="/contact/"
              className="inline-flex min-h-[48px] items-center justify-center text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--ink-deep)] underline decoration-[color:var(--ink-deep)]/40 underline-offset-4"
            >
              Full contact page
            </Link>
          ) : null}
        </div>
      </div>
    </form>
  );
}
