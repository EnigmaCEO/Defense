# SCE Build State

## 2026-05-06

- Initialized a new Next.js App Router project in `d:\Projects\Sagitta\Defense`.
- Current framework versions from scaffold:
  - Next.js 16.2.4
  - React 19.2.4
  - TypeScript 5
  - Tailwind CSS 4
- Built the Sagitta Defense service landing page, originally at `/defense`.
- Moved the Sagitta Defense service page to `/` and kept `/defense` as a redirect for old links.
- Added `/sample-review.pdf` as the target for sample report CTAs.
- No live SCE incident ticker exists in this new project yet, so the incident strip uses non-fictional fallback copy.

## Remaining TODOs

- Replace the placeholder sample PDF with the final designed Defense Review PDF when available.
- Wire `Start Review` / `Request Defense Review` to the final contact or review intake route when that route exists.
- Add Privacy and Terms pages or point footer links to the production policy URLs.
- If SCE incident APIs are later added to this project, replace the fallback incident strip with the real feed and safe empty states.

## 2026-05-06 Asset Integration

- Integrated `public/logo.png` into the Defense page header/nav as the Sagitta Defense mark.
- Integrated `public/hero.png` into the hero as the primary above-the-fold shield visual with Next.js image optimization and priority loading.
- Integrated `public/header.png` as a subtle decorative brand accent in the final CTA section.
- Kept `/sample-review.pdf` links and sample report CTA behavior unchanged.

## Remaining Asset TODOs

- Consider adding transparent SVG or transparent PNG wordmark variants for sharper small-header rendering.
- Replace `public/sample-review.pdf` placeholder with the final designed Defense Review sample when available.

## 2026-05-06 Conversion-Proof Pass

- Made sample report CTAs more prominent and updated CTA copy to `View the sample Defense Review PDF` where space allows.
- Strengthened the Sample Defense Review preview card while preserving the demo/testnet framing and `/sample-review.pdf` behavior.
- Added concrete SCE explanation near the process section: live case library, authority-surface scanner, threat-family matcher, and control-verification workflow.
- Added low-friction public-surface review copy explaining that reviews can start from public contract data and project-submitted context without keys, custody access, NDAs, or integration delays.
- Added a `Why trust Sagitta Defense?` proof section with non-client proof cards for the production case library, sample PDF, and founder-operator build context.
- Clarified the footer link label from `SCE` to `Sagitta Continuity Engine`.

## 2026-05-06 Trust Copy Refinement

- Refined the `Why trust Sagitta Defense?` expertise card from founder-operator wording to cybersecurity and systems architecture expertise language.
- Connected the expertise claim to identifying control risks before they become continuity failures, without adding unsupported social proof or credentials.

## 2026-05-06 Proof and Conversion Upgrade

- Added a conservative hero proof point tied to the production Case Library sources: CVE, De.Fi REKT, GitHub Advisories, and CISA KEV.
- Added a lightweight authority-path visual motif in the hero to reinforce admin-to-treasury control mapping without new dependencies.
- Added a `Defense Review vs. Smart Contract Audit` comparison section that positions Defense Reviews as complementary to audits, not replacements.
- Added a typical starter review timeline and a `What we need from you` intake checklist near pricing, including explicit no-keys / no-custody language.
- Integrated `public/review-preview.png` into the Sample Defense Review section while keeping `/sample-review.pdf` CTAs opening in a new tab.
- Added a `Public research coming next` proof card without claiming published research, clients, testimonials, or unsupported credentials.
- Sharpened high-impact copy around authority paths and expanded first-time visitor clarity for Sagitta Continuity Engine references.
- Wired Defense Review CTAs to email `defense@sagitta.systems` with the subject `Sagitta Defense Review Request`.
- Ran a copy cleanup pass to reduce repeated phrases and simplify overly technical sentences while preserving claims safety.

## Remaining Proof / Conversion TODOs

- Replace the placeholder sample PDF when the final designed Defense Review PDF is ready.
- Replace the email CTA fallback with the final contact or intake flow when available.
- Link future research notes once a real research/blog route exists.
- Replace the fallback incident strip with the real Case Library feed if SCE incident APIs are added to this project.

## 2026-05-06 Root Route Move

- Moved the Defense landing page implementation from `app/defense/page.tsx` to `app/page.tsx`.
- Replaced `/defense` with a redirect to `/` so existing Defense links continue to resolve.
