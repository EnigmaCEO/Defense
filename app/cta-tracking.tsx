"use client";

import { useState, type ReactNode } from "react";

export const DEFENSE_EMAIL = "defense@sagitta.systems";

export type CtaEvent = "cta_click" | "email_copy";

/**
 * Records that a visitor acted, without personal data: only which control was
 * used and where on the page. A mailto click otherwise leaves no trace, so
 * there is no way to tell clicks that never became emails from no clicks.
 */
export function recordCta(event: CtaEvent, location: string) {
  try {
    const body = JSON.stringify({ event, location });
    if (navigator.sendBeacon?.(new URL("/api/cta", window.location.origin), new Blob([body], { type: "application/json" }))) {
      return;
    }
    void fetch("/api/cta", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true });
  } catch {
    // Recording is best-effort and must never block the visitor.
  }
}

export function TrackedMailto({
  href,
  location,
  className,
  children,
}: {
  href: string;
  location: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={() => recordCta("cta_click", location)}>
      {children}
    </a>
  );
}

/**
 * The address as visible text with a copy button. A mailto link does nothing
 * on a desktop with no mail app set up, which covers most webmail users; this
 * gives them a way to reach Defense anyway.
 */
export function EmailAddressCopy({ location, className = "" }: { location: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    recordCta("email_copy", location);
    try {
      await navigator.clipboard.writeText(DEFENSE_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <p className={`flex flex-wrap items-center gap-2 text-sm text-[#c9c0dc] ${className}`}>
      <span>Or email</span>
      <span className="select-all font-semibold text-[#f1d18a]">{DEFENSE_EMAIL}</span>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-[#d9b15a]/40 px-3 py-1 text-xs font-semibold text-[#f1d18a] transition hover:border-[#d9b15a]/70 hover:bg-[#d9b15a]/10 focus:outline-none focus:ring-2 focus:ring-[#f1d18a]"
        aria-live="polite"
      >
        {copied ? "Copied" : "Copy address"}
      </button>
    </p>
  );
}
