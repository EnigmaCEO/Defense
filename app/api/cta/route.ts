// Records Defense CTA activity by emailing the operator, one message per event.
//
// No personal data is collected or sent: the payload is only which control was
// used ("cta_click" or "email_copy") and where on the page. The IP is used in
// memory for rate limiting and is never stored or emailed. Off unless
// DEFENSE_CTA_EMAILS, RESEND_API_KEY, and DEFENSE_EMAIL_FROM are all set.

const EVENTS = new Set(["cta_click", "email_copy"]);
const LOCATION_PATTERN = /^[a-z0-9-]{1,40}$/;
const BOT_PATTERN = /bot|crawl|spider|slurp|preview|monitor|curl|wget|python|headless/i;

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 20;
const recent = new Map<string, number[]>();

function rateLimited(key: string, now: number): boolean {
  const hits = (recent.get(key) ?? []).filter((at) => now - at < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 5_000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

function describe(event: string, location: string): string {
  return event === "email_copy"
    ? `A visitor copied the Defense email address (${location}).`
    : `A visitor clicked a Defense review request button (${location}). This opens their mail app; it does not mean an email was sent.`;
}

export async function POST(request: Request) {
  const userAgent = request.headers.get("user-agent") ?? "";
  if (BOT_PATTERN.test(userAgent)) return new Response(null, { status: 204 });

  let event = "";
  let location = "";
  try {
    const body = (await request.json()) as { event?: unknown; location?: unknown };
    event = typeof body.event === "string" ? body.event : "";
    location = typeof body.location === "string" ? body.location : "";
  } catch {
    return new Response(null, { status: 400 });
  }
  if (!EVENTS.has(event) || !LOCATION_PATTERN.test(location)) return new Response(null, { status: 400 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip, Date.now())) return new Response(null, { status: 204 });

  const to = (process.env.DEFENSE_CTA_EMAILS ?? "")
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry));
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.DEFENSE_EMAIL_FROM?.trim();
  if (to.length === 0 || !apiKey || !from) return new Response(null, { status: 204 });

  const at = new Date().toISOString();
  const text = [describe(event, location), "", `Event:    ${event}`, `Location: ${location}`, `Time:     ${at}`].join("\n");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to,
        subject: event === "email_copy" ? "Defense: email address copied" : "Defense: review request clicked",
        text,
      }),
    });
    if (!response.ok) console.error("Defense CTA email failed", response.status);
  } catch (error) {
    console.error("Defense CTA email failed", error instanceof Error ? error.message : error);
  }
  return new Response(null, { status: 204 });
}
