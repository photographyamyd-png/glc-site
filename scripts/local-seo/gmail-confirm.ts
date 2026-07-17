/**
 * Poll Gmail (IMAP) for directory signup confirmation emails and print confirm links.
 *
 * Secrets (Cloud Agents dashboard):
 *   GMAIL_IMAP_USER or LISTING_SIGNUP_EMAIL
 *   GMAIL_APP_PASSWORD
 *
 * Examples:
 *   npx tsx scripts/local-seo/gmail-confirm.ts --wait=180
 *   npx tsx scripts/local-seo/gmail-confirm.ts --from=hotfrog.com --wait=120
 *   npx tsx scripts/local-seo/gmail-confirm.ts --query=confirm --since-minutes=45
 */
import { ImapFlow } from "imapflow";
import { getGmailImapCredentials } from "./gmail-credentials";

const CONFIRM_SUBJECT =
  /confirm|verif|activat|validat|welcome|sign.?up|register|account|email.?address/i;

const CONFIRM_HREF =
  /(?:confirm|verif|activat|validat|token|click|accept|approve|email.?address|signup|sign-up|register)/i;

type FoundMessage = {
  uid: number;
  from: string;
  subject: string;
  date: string;
  links: string[];
};

function parseArgs(): {
  from?: string;
  query?: string;
  waitSeconds: number;
  sinceMinutes: number;
  pollSeconds: number;
} {
  const args = process.argv.slice(2);
  let from: string | undefined;
  let query: string | undefined;
  let waitSeconds = 120;
  let sinceMinutes = 30;
  let pollSeconds = 12;

  for (const arg of args) {
    if (arg.startsWith("--from=")) from = arg.slice(7).trim();
    else if (arg.startsWith("--query=")) query = arg.slice(8).trim();
    else if (arg.startsWith("--wait=")) waitSeconds = Math.max(0, Number(arg.slice(7)) || 0);
    else if (arg.startsWith("--since-minutes="))
      sinceMinutes = Math.max(1, Number(arg.slice(16)) || 30);
    else if (arg.startsWith("--poll=")) pollSeconds = Math.max(5, Number(arg.slice(7)) || 12);
  }

  return { from, query, waitSeconds, sinceMinutes, pollSeconds };
}

function extractLinks(raw: string): string[] {
  const decoded = raw
    .replace(/=\r?\n/g, "")
    .replace(/=3D/gi, "=")
    .replace(/&amp;/gi, "&");

  const hrefs = [...decoded.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1]);
  const bare = [...decoded.matchAll(/https?:\/\/[^\s<>"')\]]+/gi)].map((m) =>
    m[0].replace(/[.,;:>\]]+$/, ""),
  );

  const all = [...hrefs, ...bare]
    .map((u) => u.trim())
    .filter((u) => /^https?:\/\//i.test(u))
    .filter((u) => !/unsubscribe|privacy|terms|support\.google|schemas\.google/i.test(u));

  const confirmish = all.filter((u) => CONFIRM_HREF.test(u));
  const preferred = confirmish.length > 0 ? confirmish : all;
  return [...new Set(preferred)].slice(0, 8);
}

async function fetchRecent(options: {
  from?: string;
  query?: string;
  sinceMinutes: number;
}): Promise<FoundMessage[]> {
  const creds = getGmailImapCredentials();
  if (!creds) {
    throw new Error(
      "Missing Gmail IMAP secrets. Set GMAIL_APP_PASSWORD and GMAIL_IMAP_USER (or LISTING_SIGNUP_EMAIL) in Cloud Agents secrets.",
    );
  }

  const client = new ImapFlow({
    host: "imap.gmail.com",
    port: 993,
    secure: true,
    auth: { user: creds.user, pass: creds.appPassword },
    logger: false,
  });

  await client.connect();
  const lock = await client.getMailboxLock("INBOX");
  const found: FoundMessage[] = [];

  try {
    const since = new Date(Date.now() - options.sinceMinutes * 60 * 1000);
    const uids = await client.search({ since }, { uid: true });
    if (!uids || uids.length === 0) return [];

    const recent = uids.slice(-40);
    for await (const msg of client.fetch(
      recent,
      { uid: true, envelope: true, source: true },
      { uid: true },
    )) {
      const from =
        msg.envelope?.from?.map((a) => a.address || a.name || "").join(", ") || "";
      const subject = msg.envelope?.subject || "";
      const date = msg.envelope?.date?.toISOString() || "";

      if (options.from && !from.toLowerCase().includes(options.from.toLowerCase())) {
        continue;
      }
      if (options.query) {
        const hay = `${from} ${subject}`.toLowerCase();
        if (!hay.includes(options.query.toLowerCase())) continue;
      } else if (!CONFIRM_SUBJECT.test(subject) && !CONFIRM_SUBJECT.test(from)) {
        // Still allow if body has confirm links — checked after extract
      }

      const source = msg.source?.toString("utf8") || "";
      const links = extractLinks(source);
      if (links.length === 0) continue;
      if (
        !options.query &&
        !options.from &&
        !CONFIRM_SUBJECT.test(subject) &&
        !links.some((l) => CONFIRM_HREF.test(l))
      ) {
        continue;
      }

      found.push({
        uid: msg.uid,
        from,
        subject,
        date,
        links,
      });
    }
  } finally {
    lock.release();
    await client.logout();
  }

  return found.sort((a, b) => b.date.localeCompare(a.date));
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main(): Promise<void> {
  const { from, query, waitSeconds, sinceMinutes, pollSeconds } = parseArgs();
  const deadline = Date.now() + waitSeconds * 1000;
  let attempt = 0;

  console.log(
    JSON.stringify({
      status: "polling",
      from: from || null,
      query: query || null,
      waitSeconds,
      sinceMinutes,
    }),
  );

  while (true) {
    attempt += 1;
    try {
      const messages = await fetchRecent({ from, query, sinceMinutes });
      if (messages.length > 0) {
        const top = messages[0];
        console.log(
          JSON.stringify(
            {
              status: "found",
              attempt,
              count: messages.length,
              best: top,
              all: messages.slice(0, 5),
              openFirstLink: top.links[0] || null,
            },
            null,
            2,
          ),
        );
        return;
      }
    } catch (err) {
      console.error(
        JSON.stringify({
          status: "error",
          attempt,
          message: err instanceof Error ? err.message : String(err),
        }),
      );
      process.exit(1);
    }

    if (Date.now() >= deadline) {
      console.log(
        JSON.stringify({
          status: "not_found",
          attempt,
          hint: "No confirmation email yet — wait longer, widen --since-minutes, or check spam in Gmail once.",
        }),
      );
      process.exit(2);
    }

    console.log(
      JSON.stringify({
        status: "waiting",
        attempt,
        nextPollInSeconds: pollSeconds,
        remainingSeconds: Math.max(0, Math.round((deadline - Date.now()) / 1000)),
      }),
    );
    await sleep(pollSeconds * 1000);
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
