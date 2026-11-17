import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy | Sagitta Defense",
  description:
    "What Sagitta Defense collects when you visit defense.sagitta.systems or request a review, and what it does not.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "16 November 2026";
const CONTACT = "defense@sagitta.systems";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Who we are",
    body: (
      <p>
        Sagitta Defense is a service of Sagitta Systems, which develops the Sagitta network of products. This
        notice covers defense.sagitta.systems and the review requests you send us. Questions about it go to{" "}
        <a href={`mailto:${CONTACT}`} className="text-[#f1d18a] hover:text-white">
          {CONTACT}
        </a>
        .
      </p>
    ),
  },
  {
    title: "What we collect",
    body: (
      <>
        <p>
          <strong className="text-white">When you email us.</strong> Your email address and whatever you choose to
          send, such as contract addresses, deployment chain, project context, and public documentation. We use it to
          scope, deliver, and follow up on your Defense Review, and to reply to you.
        </p>
        <p>
          <strong className="text-white">When you use the request buttons.</strong> When you click a review request
          button or copy our email address, the site records which control you used, where it is on the page, and the
          time. It does not record your name, your email address, or anything you type. Your IP address is used briefly,
          in memory, to limit repeated events and is not stored. A click tells us someone opened their mail app; it does
          not tell us who.
        </p>
        <p>
          <strong className="text-white">When you load the site.</strong> Our hosting provider processes standard
          request information, such as IP address, browser type, and the page requested, to serve the site and keep it
          secure.
        </p>
      </>
    ),
  },
  {
    title: "What we do not collect",
    body: (
      <>
        <p>
          The site sets no cookies and loads no analytics, advertising, or social tracking scripts. Fonts are served
          from this site, so loading a page does not contact a third-party font host.
        </p>
        <p>
          A Defense Review works from public contract data and the context you choose to share. We never ask for
          private keys, seed phrases, custody access, signing authority, or transaction approval rights. Please do not
          send them.
        </p>
      </>
    ),
  },
  {
    title: "Who processes it",
    body: (
      <p>
        We use a small number of service providers to run the site and handle email: our hosting provider serves the
        site, and our email provider delivers the notifications described above. They process data on our behalf. We do
        not sell or rent personal information, and we do not share it for advertising.
      </p>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        Review correspondence and materials are kept for as long as needed to deliver the review and any follow-up, and
        then as required for our records. Button and copy notifications contain no personal information. You can ask us
        to delete your correspondence at any time.
      </p>
    ),
  },
  {
    title: "Your choices",
    body: (
      <p>
        You can ask what we hold about you, ask us to correct or delete it, or object to how we use it, by writing to{" "}
        <a href={`mailto:${CONTACT}`} className="text-[#f1d18a] hover:text-white">
          {CONTACT}
        </a>
        . You can contact us without using the request buttons by copying the address into your own email.
      </p>
    ),
  },
  {
    title: "Changes",
    body: <p>If this notice changes, the new version will be posted here with a new date.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <main className="px-5 py-16 md:py-24">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-[#c9c0dc] transition hover:text-white">
          &larr; Sagitta Defense
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-5xl">Privacy</h1>
        <p className="mt-4 text-sm text-[#9e91bd]">Last updated {LAST_UPDATED}</p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <div className="mt-3 space-y-4 leading-7 text-[#d8d0e8]">{section.body}</div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
