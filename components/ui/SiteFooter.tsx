import Link from "next/link";
import { PRIMARY_SERVICES } from "@/lib/site/registry";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--g200)] bg-[color:var(--brand-canvas)]">
      <div className="mx-auto grid max-w-[min(100%,var(--max))] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="label-overline">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {PRIMARY_SERVICES.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-ink-muted hover:text-[color:var(--y)]">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-overline">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="text-ink-muted hover:text-[color:var(--y)]">About</Link></li>
            <li><Link href="/contact" className="text-ink-muted hover:text-[color:var(--y)]">Contact</Link></li>
            <li><Link href="/#why" className="text-ink-muted hover:text-[color:var(--y)]">Why Ground Level</Link></li>
            <li><Link href="/#process" className="text-ink-muted hover:text-[color:var(--y)]">Process</Link></li>
            <li><Link href="/#coverage" className="text-ink-muted hover:text-[color:var(--y)]">Coverage</Link></li>
            <li><Link href="/#testimonials" className="text-ink-muted hover:text-[color:var(--y)]">Projects</Link></li>
          </ul>
        </div>
        <div>
          <p className="label-overline">Coverage</p>
          <p className="mt-3 text-sm text-ink-muted">Barrie, Midland, Orillia, Simcoe County</p>
          <Link href="/#coverage" className="mt-2 inline-block text-sm text-ink-muted hover:text-[color:var(--y)]">
            View coverage area
          </Link>
        </div>
        <div>
          <p className="label-overline">Legal</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/privacy" className="text-ink-muted hover:text-[color:var(--y)]">Privacy</Link></li>
            <li><Link href="/terms" className="text-ink-muted hover:text-[color:var(--y)]">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
