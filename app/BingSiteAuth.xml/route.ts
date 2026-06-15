/** Bing Webmaster Tools XML verification — keep after verification succeeds. */
const VERIFICATION_BODY = `<?xml version="1.0"?>
<users>
\t<user>E55EF4BB7A4FF72354408FA2F4EFE29B</user>
</users>`;

export function GET() {
  return new Response(`${VERIFICATION_BODY}\n`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
