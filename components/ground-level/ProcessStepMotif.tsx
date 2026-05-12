import type { ProcessStepMotifId } from "@/lib/ground-level/process-step-types";

const shell =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[rgb(255_255_255/0.04)] text-[color:var(--y)] opacity-95";

function IconConsultation() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  );
}

function IconQuote() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function IconMobilization() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16V8h8v8M4 16H3m9 0h8l2-3V10h-3V8" />
      <circle cx="7.5" cy="16.5" r="1.75" />
      <circle cx="17" cy="16.5" r="1.75" />
    </svg>
  );
}

function IconSignoff() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function ProcessStepMotif({ id }: { id: ProcessStepMotifId }) {
  return (
    <div className={shell} data-motif-id={`process-step-${id}`}>
      {id === "consultation" ? <IconConsultation /> : null}
      {id === "quote" ? <IconQuote /> : null}
      {id === "mobilization" ? <IconMobilization /> : null}
      {id === "signoff" ? <IconSignoff /> : null}
    </div>
  );
}
