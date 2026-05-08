import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const INCIDENT_OVERVIEW_API =
  "https://continuityengineserver.fly.dev/incidents/overview";

export const metadata: Metadata = {
  title: "Sagitta Defense Review | Powered by SCE",
  description:
    "Buyer-facing defense reviews for protocols, treasuries, and on-chain systems.",
  openGraph: {
    title: "Sagitta Defense Review | Powered by SCE",
    description:
      "Buyer-facing defense reviews for protocols, treasuries, and on-chain systems.",
    siteName: "Sagitta Defense",
    type: "website",
    images: [
      {
        url: "/header.png",
        width: 1536,
        height: 614,
        alt: "Sagitta Defense Review",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagitta Defense Review | Powered by SCE",
    description:
      "Buyer-facing defense reviews for protocols, treasuries, and on-chain systems.",
    images: [
      {
        url: "/header.png",
        alt: "Sagitta Defense Review",
      },
    ],
  },
};

const navItems = [
  ["Defense Review", "#review"],
  ["How It Works", "#how-it-works"],
  ["Sample Report", "#sample-report"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
];

const trustBadges = [
  "No keys required",
  "Uses public data",
  "No custody access",
  "No signing authority",
];

const coverageCards = [
  {
    title: "Authority Paths",
    copy: "Identify which roles can move funds, change rules, pause flows, or alter critical dependencies.",
  },
  {
    title: "Treasury Controls",
    copy: "Review spending rules, withdrawal paths, reserve controls, and custody assumptions.",
  },
  {
    title: "Oracle & Price Risk",
    copy: "Check price feeds, stale-data handling, fallback behavior, and manipulation exposure.",
  },
  {
    title: "Governance / Timelocks",
    copy: "Review quorum rules, signer rotation, timelocks, and upgrade authority.",
  },
  {
    title: "Keeper & Liveness",
    copy: "Check automation, retry paths, and what happens when required services stop.",
  },
  {
    title: "Emergency Procedures",
    copy: "Review pause, recovery, escalation, and incident response readiness.",
  },
];

const processSteps = [
  ["Project Map", "Collect contract addresses and system context."],
  ["Control Path Scan", "Find roles that can change rules, move funds, or pause flows."],
  ["Incident Pattern Match", "Compare the system against known failure patterns."],
  ["Evidence Request", "Ask for policies, signer details, and supporting proof."],
  ["Readiness Review", "Evaluate controls and identify gaps."],
  ["Updated Defense Report", "Deliver an actionable report with findings and next steps."],
];

const proofCards = [
  {
    title: "Production Case Library",
    copy: "Sagitta Continuity Engine tracks live security records across CVE, De.Fi REKT, GitHub Advisories, and CISA KEV sources.",
  },
  {
    title: "Sample Review Available",
    copy: "Review the demo Defense Review PDF before requesting your own.",
  },
  {
    title: "Built by cybersecurity and systems architecture experts",
    copy: "Sagitta Defense combines security judgment and software architecture experience to find control risks before they become continuity failures.",
  },
  {
    title: "Public research coming next",
    copy: "Sagitta Defense will publish incident teardowns focused on authority failure, treasury exposure, oracle dependency, governance posture, and continuity response.",
    note: "Research notes coming soon",
  },
];

const proofChips = [
  "5 mapped assets",
  "29 control checks",
  "5 threat families",
  "0 keys required",
];

const sampleChecklist = [
  "Mapped assets and control paths",
  "Relevant incident patterns and risk summary",
  "Evidence status and missing controls",
  "Verification coverage",
  "Findings, severity, and next actions",
  "Executive summary for stakeholders",
];

const comparisonRows = [
  {
    area: "Primary focus",
    audit: "Code correctness and exploit paths",
    defense: "Authority, continuity, and control readiness",
  },
  {
    area: "Best timing",
    audit: "When contracts are near final",
    defense:
      "Before mainnet, before capital scales, or before major treasury growth",
  },
  {
    area: "What gets reviewed",
    audit: "Source code, implementation, invariants",
    defense:
      "Admin roles, treasury rules, oracle dependencies, governance/timelocks, keeper/liveness, emergency procedures",
  },
  {
    area: "Output",
    audit: "Vulnerabilities and remediation notes",
    defense:
      "Mapped control paths, evidence checklist, relevant incident patterns, verification coverage, and next actions",
  },
  {
    area: "Relationship",
    audit: "Essential security review",
    defense: "Complements audit work; does not replace it",
  },
];

const timelineSteps = [
  {
    time: "Day 0",
    title: "Submit project context",
    copy: "Contract addresses, deployment chain, and known admin or owner roles.",
  },
  {
    time: "Days 1-3",
    title: "Review begins",
    copy: "Sagitta Continuity Engine maps assets, control paths, incident patterns, and missing evidence.",
  },
  {
    time: "Days 3-5",
    title: "Draft findings",
    copy: "Initial findings and evidence requests are prepared.",
  },
  {
    time: "Day 7",
    title: "Defense Review delivered",
    copy: "You receive the structured PDF report and next-action checklist.",
  },
  {
    time: "Optional follow-up",
    title: "Evidence update",
    copy: "Submit supporting proof and receive an updated verification view.",
  },
];

const intakeChecklist = [
  "Contract addresses",
  "Deployment chain",
  "Project context",
  "Known admin / owner paths",
  "Multisig or timelock details, if available",
  "Oracle, treasury, keeper, or governance notes",
  "Optional policies, runbooks, or public docs",
];

const receives = [
  "Public-data review",
  "Mapped assets and control gaps",
  "Evidence checklist",
  "Structured PDF report",
  "Follow-up update after evidence submission",
];

const provides = [
  "Contract addresses",
  "Deployment chain",
  "Project context",
  "Known admin / multisig / timelock details",
  "Optional policy or runbook evidence",
];

const faqs = [
  {
    question: "Is this a smart contract audit?",
    answer:
      "No. Sagitta Defense complements audits; it does not replace them. Audits review code and exploit paths. A Defense Review looks at whether the system can keep operating through control failures, dependency issues, and emergency events.",
  },
  {
    question: "Do you need access to our keys or wallets?",
    answer:
      "No. Never. Sagitta Defense does not request private keys, seed phrases, custody access, signing authority, or transaction approval rights.",
  },
  {
    question: "What do we need to provide?",
    answer:
      "Contract addresses, deployment chain, project context, and known admin, multisig, timelock, oracle, treasury, keeper, or governance details. Optional evidence can include policies, proposals, runbooks, or public documentation.",
  },
  {
    question: "Is this useful before mainnet?",
    answer:
      "Yes. Pre-launch is a strong use case because roles, timelocks, multisigs, oracle fallbacks, treasury rules, and emergency procedures are easier to improve before capital scales.",
  },
  {
    question: "Which chains are supported?",
    answer:
      "Active now: EVM and Ethereum-compatible deployments where public contract data, explorer data, or project-submitted details are available. Coverage targets include Ethereum, Base, Arbitrum, Optimism, Polygon, Avalanche C-Chain, BNB Chain, and Moonbeam. Expansion targets include Solana, AO / Arweave, ICP, Cosmos, bridges, and oracle networks through future adapters.",
  },
  {
    question: "What do we receive?",
    answer:
      "A structured report with mapped assets, control gaps, relevant incident patterns, evidence status, severity framing, and next actions. After evidence is submitted, Sagitta Continuity Engine can generate an updated verification view.",
  },
  {
    question: "Does Sagitta Defense certify that our protocol is safe?",
    answer:
      "No. Sagitta Defense does not guarantee safety or certify that a protocol cannot fail. The review identifies visible continuity risks, missing evidence, and control gaps so teams can improve readiness.",
  },
  {
    question: "Who is this for?",
    answer:
      "Protocol teams, DAOs, DeFi systems, treasury-heavy projects, infrastructure teams, grant programs, and ecosystem foundations that need a clearer view of authority, treasury, oracle, dependency, and emergency risk.",
  },
];

const builtFor = [
  ["Protocol Teams", "pre-launch authority and emergency procedures"],
  ["DAOs", "governance risk, quorum assumptions, signer rotation"],
  ["DeFi Systems", "oracle dependencies, settlement paths, keeper liveness"],
  ["Treasury Projects", "multisig setup, spending rules, withdrawal paths"],
  ["Infrastructure Teams", "dependency risk, access control, readiness"],
];

type IncidentTickerItem = {
  id: string;
  title: string;
  source: string;
  severity: string;
  publishedDiscoveredDate: string;
};

type IncidentOverview = {
  criticalIncidents: number;
  criticalTickerItems: IncidentTickerItem[];
};

const INCIDENT_TITLE_MAX = 48;

const defenseReviewEmailHref =
  "mailto:defense@sagitta.systems?subject=Sagitta%20Defense%20Review%20Request";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function normalizeTickerItem(value: unknown): IncidentTickerItem | null {
  if (!isRecord(value)) {
    return null;
  }

  const id = readString(value.id);
  const title = readString(value.title);

  if (!id || !title) {
    return null;
  }

  return {
    id,
    title,
    source: readString(value.source) || "Case Library",
    severity: readString(value.severity) || "critical",
    publishedDiscoveredDate: readString(value.published_discovered_date),
  };
}

async function getIncidentOverview(): Promise<IncidentOverview | null> {
  try {
    const response = await fetch(INCIDENT_OVERVIEW_API, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return null;
    }

    const payload: unknown = await response.json();

    if (!isRecord(payload)) {
      return null;
    }

    const criticalIncidents =
      typeof payload.critical_incidents === "number"
        ? payload.critical_incidents
        : 0;
    const criticalTickerItems = Array.isArray(payload.critical_ticker_items)
      ? payload.critical_ticker_items
          .map(normalizeTickerItem)
          .filter((item): item is IncidentTickerItem => item !== null)
      : [];

    return {
      criticalIncidents,
      criticalTickerItems,
    };
  } catch {
    return null;
  }
}

function formatIncidentDate(value: string): string {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function truncateTickerText(value: string, maxLength: number): string {
  return value.length > maxLength
    ? `${value.slice(0, maxLength).trimEnd()}...`
    : value;
}

function formatIncidentTickerItem(incident: IncidentTickerItem): string {
  const incidentDate = formatIncidentDate(incident.publishedDiscoveredDate);
  const meta = [incident.source, incidentDate, incident.id]
    .filter(Boolean)
    .join(" / ");

  return `${truncateTickerText(incident.title, INCIDENT_TITLE_MAX)} / ${meta}`;
}

function LiveIncidentTicker({
  overview,
}: {
  overview: IncidentOverview | null;
}) {
  const incidents = overview?.criticalTickerItems.slice(0, 8) ?? [];
  const criticalCount = overview?.criticalIncidents ?? 0;

  if (incidents.length === 0) {
    return (
      <section className="border-y border-white/10 bg-[#0d0818]/90 px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#c9c0dc] md:flex-row md:items-center md:justify-between lg:px-8">
          <span className="font-semibold text-white">Live incident context</span>
          <span>Critical incident feed temporarily unavailable</span>
          <a
            className="text-[#f1d18a] transition hover:text-[#ffe3a3]"
            href="#sample-report"
          >
            Review recent incidents in the Case Library
          </a>
        </div>
      </section>
    );
  }

  const tickerItems = incidents.map(formatIncidentTickerItem);
  const doubledTickerItems = [...tickerItems, ...tickerItems];

  return (
    <section
      aria-label="Live critical incident context"
      className="border-y border-white/10 bg-[#0d0818]/90 px-5 py-4"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:px-8">
        <div className="flex flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
          <span className="font-semibold text-white">Live incident context</span>
          <span className="text-[#c9c0dc]">
            {criticalCount.toLocaleString("en-US")} critical incidents tracked by
            SCE
          </span>
        </div>
        <div className="ticker-scroll relative overflow-hidden border-y border-white/10 bg-[#070511]/55 py-2">
          <div className="ticker-track">
            {doubledTickerItems.map((item, index) => (
              <span
                key={`${item}-${index}`}
                aria-hidden={index >= tickerItems.length}
                className="text-sm font-medium text-[#d8d0e8]"
              >
                {item}
                <span className="mx-5 font-bold text-[#d9b15a]">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrimaryCta({
  href = defenseReviewEmailHref,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#f1d18a]/40 bg-[#d9b15a] px-6 text-sm font-semibold text-[#150f05] shadow-[0_0_35px_rgba(217,177,90,0.28)] transition hover:bg-[#f4cf7d] focus:outline-none focus:ring-2 focus:ring-[#f1d18a] focus:ring-offset-2 focus:ring-offset-[#070511]"
    >
      {children}
    </a>
  );
}

function SampleLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="/sample-review.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d9b15a]/55 bg-[#d9b15a]/12 px-6 text-sm font-semibold text-[#ffe7a8] shadow-[0_0_28px_rgba(217,177,90,0.12)] transition hover:border-[#f1d18a] hover:bg-[#d9b15a]/18 focus:outline-none focus:ring-2 focus:ring-[#f1d18a] focus:ring-offset-2 focus:ring-offset-[#070511]"
    >
      {children}
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  wide = false,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  wide?: boolean;
}) {
  return (
    <div className={`mx-auto text-center ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b15a]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-7 text-[#c9c0dc] md:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function AuthorityPathMotif() {
  return (
    <div className="mx-auto mt-4 hidden w-full max-w-sm rounded-3xl border border-[#d9b15a]/20 bg-[#090613]/72 p-4 shadow-2xl shadow-black/30 backdrop-blur md:block">
      <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#d9b15a]">
        <span>Authority path</span>
        <span>Review map</span>
      </div>
      <svg
        viewBox="0 0 280 126"
        role="img"
        aria-label="Authority path graph from admin to multisig to contract to treasury"
        className="h-auto w-full"
      >
        <defs>
          <linearGradient id="authority-line" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#b99cff" />
            <stop offset="1" stopColor="#d9b15a" />
          </linearGradient>
        </defs>
        <path
          d="M34 58 C78 18 105 22 138 60 S205 100 244 56"
          fill="none"
          stroke="url(#authority-line)"
          strokeDasharray="5 7"
          strokeLinecap="round"
          strokeWidth="2"
        />
        {[
          ["Admin", 34, 58],
          ["Multisig", 104, 38],
          ["Contract", 174, 86],
          ["Treasury", 244, 56],
        ].map(([label, x, y]) => (
          <g key={label}>
            <circle
              cx={x}
              cy={y}
              fill="#120c24"
              r="15"
              stroke="#d9b15a"
              strokeOpacity="0.7"
              strokeWidth="2"
            />
            <circle cx={x} cy={y} fill="#f1d18a" r="4" />
            <text
              fill="#d8d0e8"
              fontSize="11"
              textAnchor="middle"
              x={x}
              y={Number(y) + 34}
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default async function DefensePage() {
  const incidentOverview = await getIncidentOverview();

  return (
    <main className="min-h-screen overflow-hidden bg-[#070511] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#7c3cff]/20 blur-3xl" />
        <div className="absolute right-[-14rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-[#d9b15a]/10 blur-3xl" />
        <div className="absolute bottom-[-18rem] left-[-12rem] h-[38rem] w-[38rem] rounded-full bg-[#4b1fb5]/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070511]/82 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <a href="#top" className="group flex shrink-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="Sagitta Defense"
              width={526}
              height={526}
              className="h-11 w-11 rounded-xl object-contain drop-shadow-[0_0_20px_rgba(124,60,255,0.28)]"
            />
            <span>
              <span className="block text-sm font-semibold tracking-wide text-white">
                Sagitta Defense
              </span>
              <span className="hidden text-[11px] uppercase tracking-[0.18em] text-[#9e91bd] sm:block">
                Powered by Sagitta Continuity Engine
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#c9c0dc] transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
          <PrimaryCta>Start Review</PrimaryCta>
        </nav>
      </header>

      <section id="top" className="relative px-5 pb-12 pt-10 md:pb-20 md:pt-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="order-2 lg:order-1">
            <p className="mb-5 inline-flex rounded-full border border-[#b99cff]/25 bg-[#b99cff]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7c8ff]">
              Sagitta Defense Review
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Know what breaks before it breaks you.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8d0e8] md:text-xl">
              Defense reviews for protocols, treasuries, and on-chain systems -
              powered by Sagitta Continuity Engine.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#bdb2d3]">
              We work from public contract data and project-submitted context,
              so reviews can start without keys, custody access, NDAs, or
              integration delays.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#eee8fb]"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta>Start Defense Review</PrimaryCta>
              <SampleLink>View the sample Defense Review PDF</SampleLink>
            </div>
            <p className="mt-5 max-w-2xl rounded-2xl border border-[#d9b15a]/20 bg-[#d9b15a]/8 px-4 py-3 text-sm leading-6 text-[#f1d18a]">
              Powered by a production Case Library tracking CVE, De.Fi REKT,
              GitHub Advisories, and CISA KEV sources.
            </p>
            <p className="mt-4 text-sm text-[#9e91bd]">
              No private keys. No custody access. No transaction signing.
            </p>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-10 -z-10 rounded-full bg-[#7c3cff]/25 blur-3xl" />
            <div className="overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_34%,rgba(0,0,0,0.78)_46%,rgba(0,0,0,0.24)_62%,transparent_78%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_34%,rgba(0,0,0,0.78)_46%,rgba(0,0,0,0.24)_62%,transparent_78%)]">
              <Image
                src="/hero.png"
                alt="Sagitta Defense shield visual"
                width={1448}
                height={1086}
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="h-auto w-full object-contain"
              />
            </div>
            <AuthorityPathMotif />
          </div>
        </div>
      </section>

      <LiveIncidentTicker overview={incidentOverview} />

      <section id="review" className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <SectionIntro title="What the Defense Review covers" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coverageCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10"
              >
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-[#c9c0dc]">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0818]/70 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <SectionIntro
            title="Defense Review vs. Smart Contract Audit"
            copy="Audits review code. Defense Reviews map whether the system can survive control failure."
            wide
          />
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#120c24] shadow-2xl shadow-black/20">
            <div className="grid border-b border-white/10 bg-white/[0.035] text-sm font-semibold uppercase tracking-[0.16em] text-[#d9b15a] md:grid-cols-[0.7fr_1fr_1fr]">
              <div className="hidden p-5 md:block">Area</div>
              <div className="border-white/10 p-5 md:border-l">Smart Contract Audit</div>
              <div className="border-t border-white/10 p-5 md:border-l md:border-t-0">
                Defense Review
              </div>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.area}
                className="grid border-b border-white/10 last:border-b-0 md:grid-cols-[0.7fr_1fr_1fr]"
              >
                <div className="bg-white/[0.025] p-5 font-semibold text-white">
                  {row.area}
                </div>
                <div className="border-t border-white/10 p-5 text-sm leading-6 text-[#c9c0dc] md:border-l md:border-t-0">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#9e91bd] md:hidden">
                    Smart Contract Audit
                  </span>
                  {row.audit}
                </div>
                <div className="border-t border-white/10 p-5 text-sm leading-6 text-[#d8d0e8] md:border-l md:border-t-0">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#9e91bd] md:hidden">
                    Defense Review
                  </span>
                  {row.defense}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-white/10 bg-[#0d0818]/70 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <SectionIntro
            title="Built on Sagitta Continuity Engine"
            copy="Defense is the client-facing service. Sagitta Continuity Engine is the intelligence layer behind it."
          />
          <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-8 text-[#d8d0e8] md:text-lg">
            Sagitta Continuity Engine is the intelligence layer behind the
            review: a live case library, control-path scanner, incident-pattern
            matcher, and verification workflow.
          </p>
          <div className="mt-12 grid gap-4 lg:grid-cols-6">
            {processSteps.map(([title, copy], index) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-[#130d24] p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9b15a]/30 bg-[#d9b15a]/10 text-sm font-semibold text-[#f1d18a]">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#bdb2d3]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl lg:px-8">
          <SectionIntro title="Why trust Sagitta Defense?" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {proofCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10"
              >
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-[#c9c0dc]">{card.copy}</p>
                {"note" in card ? (
                  <p className="mt-5 inline-flex rounded-full border border-[#d9b15a]/25 bg-[#d9b15a]/10 px-3 py-1.5 text-xs font-semibold text-[#f1d18a]">
                    {card.note}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sample-report" className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <SectionIntro
            title="Sample Defense Review"
            copy="See a demo Pre-Launch Defense Review before requesting your own."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[2rem] border border-[#d9b15a]/25 bg-[#120c24] p-4 shadow-2xl shadow-black/30 md:p-6">
              <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4 text-xs uppercase tracking-[0.2em] text-[#9e91bd]">
                <span>Defense Review PDF</span>
                <span>Demo</span>
              </div>
              <a
                href="/sample-review.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block overflow-hidden rounded-3xl border border-white/10 bg-[#080512] p-3 transition hover:border-[#d9b15a]/45 focus:outline-none focus:ring-2 focus:ring-[#f1d18a] focus:ring-offset-2 focus:ring-offset-[#120c24]"
              >
                <Image
                  src="/review-preview.png"
                  alt="Sample Pre-Launch Defense Review preview"
                  width={500}
                  height={625}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </a>
            </div>
            <div>
              <p className="leading-8 text-[#d8d0e8]">
                This sample is a demo report using Sagitta Protocol testnet
                deployment. It shows report structure, authority mapping,
                evidence status, and next actions. It is not a verified client
                result.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {proofChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#d9b15a]/25 bg-[#d9b15a]/10 px-4 py-2 text-sm text-[#f1d18a]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {sampleChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#d8d0e8]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b99cff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <SampleLink>View the sample Defense Review PDF</SampleLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-y border-white/10 bg-[#0d0818]/70 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <SectionIntro
            title="Sagitta Defense Review"
            copy="A protocol survival review before the emergency."
          />
          <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-[#d9b15a]/25 bg-[#130d24] p-6 shadow-[0_0_60px_rgba(217,177,90,0.08)] md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9b15a]">
                  Starter Defense Review
                </p>
                <div className="mt-5 flex items-end gap-3">
                  <span className="text-6xl font-semibold tracking-tight">
                    $3,000
                  </span>
                </div>
                <p className="mt-3 text-[#c9c0dc]">Flat fee - One-time</p>
                <div id="request-review" className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <PrimaryCta>Request Defense Review</PrimaryCta>
                  <SampleLink>View the sample Defense Review PDF</SampleLink>
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <h3 className="font-semibold text-white">What you receive</h3>
                  <ul className="mt-4 space-y-3">
                    {receives.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-[#d8d0e8]">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d9b15a]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <h3 className="font-semibold text-white">What you provide</h3>
                  <ul className="mt-4 space-y-3">
                    {provides.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-[#d8d0e8]">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#b99cff]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionIntro
                eyebrow="Typical starter review timeline"
                title="What happens after you submit"
              />
              <div className="mt-12 space-y-4">
                {timelineSteps.map((step) => (
                  <article
                    key={`${step.time}-${step.title}`}
                    className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 md:grid-cols-[9rem_1fr]"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9b15a]">
                      {step.time}
                    </p>
                    <div>
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#c9c0dc]">
                        {step.copy}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#d9b15a]/25 bg-[#120c24] p-6 shadow-2xl shadow-black/20 md:p-8">
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                What we need from you
              </h2>
              <p className="mt-4 leading-7 text-[#c9c0dc]">
                Most teams can prepare the starter intake in about 15 minutes.
              </p>
              <ul className="mt-7 space-y-3">
                {intakeChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#d8d0e8]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9b15a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-[#f1d18a]">
                Sagitta Defense does not request private keys, custody access,
                signing authority, seed phrases, or transaction approval rights.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <PrimaryCta>Request Defense Review</PrimaryCta>
                <SampleLink>Get the sample report</SampleLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl lg:px-8">
          <SectionIntro title="Frequently asked questions" />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#c9c0dc]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#b99cff]/20 bg-[#120c24] px-6 py-12 text-center shadow-2xl shadow-black/20 lg:px-8">
          <Image
            src="/header.png"
            alt=""
            aria-hidden="true"
            width={1536}
            height={614}
            className="pointer-events-none absolute -right-20 top-1/2 hidden w-[42rem] -translate-y-1/2 opacity-[0.08] lg:block"
            sizes="42rem"
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Ready for a Defense Review?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#d8d0e8]">
              Map control gaps and continuity risks before capital scales.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryCta>Request Defense Review</PrimaryCta>
              <SampleLink>View the sample Defense Review PDF</SampleLink>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#05030b] px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.4fr_0.7fr] lg:px-8">
          <div>
            <h2 className="text-xl font-semibold">Sagitta Defense</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#9e91bd]">
              Powered by Sagitta Continuity Engine
            </p>
            <p className="mt-5 text-sm leading-6 text-[#c9c0dc]">
              No private keys. No custody access. No signing authority.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9b15a]">
              Built For
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {builtFor.map(([title, copy]) => (
                <p key={title} className="text-sm leading-6 text-[#c9c0dc]">
                  <span className="font-semibold text-white">{title}:</span>{" "}
                  {copy}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9b15a]">
              Links
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#c9c0dc]">
              <a href={defenseReviewEmailHref} className="hover:text-white">
                Contact
              </a>
              <a href="/privacy" className="hover:text-white">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white">
                Terms
              </a>
              <a
                href="/sample-review.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Sample Report
              </a>
              <Link href="/" className="hover:text-white">
                Sagitta Continuity Engine
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
