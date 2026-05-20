import Link from 'next/link';
import { PageHero, Card, Badge } from '@/components/ui';

const baseUrl = 'https://aicreatorops.com';

export const metadata = {
  title: 'AI Creator Ops Reports: Platform Index and Market Intelligence',
  description: 'Original indexes and source-backed market reports for AI creator businesses, AI influencers, virtual influencers, fan platforms, and AI companion operators.',
  alternates: { canonical: `${baseUrl}/reports` },
  openGraph: {
    title: 'AI Creator Ops Reports',
    description: 'Citation-ready reports built from structured data, methodology, source links, and last-checked platform intelligence.',
    url: `${baseUrl}/reports`,
    type: 'website'
  }
};

export default function ReportsPage() {
  return (
    <main>
      <PageHero
        eyebrow="RESEARCH"
        title="Original indexes and market reports"
        description="Linkable authority assets built from structured data, transparent methodology, and continuously updated platform/tool intelligence."
      />
      <section className="wrap pb-8">
        <Card>
          <Badge tone="green">DIRECT ANSWER</Badge>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            AI Creator Ops reports are citation-ready authority assets for the AI creator economy. They connect public search language — AI influencer, AI girlfriend, AI model, virtual influencer, synthetic influencer, virtual creator, and AI companion — to transparent platform/tool scoring, visible sources, and methodology-backed caveats.
          </p>
        </Card>
      </section>
      <section className="wrap grid gap-4 md:grid-cols-2">
        <Link href={'/reports/ai-creator-platform-index-2026' as any}>
          <Card className="h-full bg-gradient-to-br from-[rgba(139,92,246,.18)] to-[rgba(255,255,255,.035)] transition hover:border-[rgba(34,211,238,.45)]">
            <Badge>FLAGSHIP</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.05em]">AI Creator Platform Index 2026</h2>
            <p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">A scored map of social platforms, fan platforms, and monetization rails for AI creator businesses. First version: methodology + seed dataset.</p>
            <p className="mt-6 text-sm text-[var(--cyan)]">Open report →</p>
          </Card>
        </Link>
      </section>
      <section className="wrap mt-8 grid gap-4 md:grid-cols-3">
        <Card><Badge tone="cyan">METHODOLOGY</Badge><h2 className="mt-4 text-xl font-semibold">How reports are scored</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Every ranking needs explicit criteria, source hierarchy, last-checked metadata, caveats, and a visible link to methodology.</p><a className="mt-4 inline-block text-sm text-[var(--cyan)]" href="/methodology">Read methodology</a></Card>
        <Card><Badge tone="amber">SOURCES</Badge><h2 className="mt-4 text-xl font-semibold">Citation posture</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Official docs are authority for policy, pricing, API, payout, and terms claims. YouTube/X references are market-signal context unless corroborated.</p></Card>
        <Card><Badge tone="green">ENTITY LAYER</Badge><h2 className="mt-4 text-xl font-semibold">Glossary support</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Reports link into glossary definitions so answer engines can resolve entities and related operator concepts.</p><a className="mt-4 inline-block text-sm text-[var(--cyan)]" href="/glossary">Open glossary</a></Card>
      </section>
    </main>
  );
}
