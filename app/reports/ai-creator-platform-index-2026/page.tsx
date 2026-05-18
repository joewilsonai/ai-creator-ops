import Link from 'next/link';
import { Badge, Card } from '@/components/ui';
import { getAllPlatforms } from '@/lib/data';

const criteria = [
  {
    name: 'Policy clarity',
    weight: '25%',
    description: 'How clearly the platform explains AI, synthetic media, adult, identity, disclosure, and enforcement rules.'
  },
  {
    name: 'Monetization fit',
    weight: '25%',
    description: 'How directly the platform can turn attention into revenue through subscriptions, tips, commerce, affiliate, ads, or off-platform funnel capture.'
  },
  {
    name: 'Discovery potential',
    weight: '20%',
    description: 'How well the platform can produce top-of-funnel reach for a new AI creator brand without already owning an audience.'
  },
  {
    name: 'Automation support',
    weight: '15%',
    description: 'How practical it is to schedule, publish, analyze, or integrate through official APIs, approved tools, or low-risk workflows.'
  },
  {
    name: 'Operator risk',
    weight: '15%',
    description: 'How exposed the operator is to account loss, payment friction, unclear moderation, synthetic identity concerns, or sudden policy shifts.'
  }
];

const sourcePlan = [
  'Official platform policy pages and terms',
  'Official creator monetization and payout documentation',
  'Official API, scheduler, and partner documentation',
  'Public changelogs, help-center updates, and enforcement announcements',
  'Clearly labeled secondary reporting only when primary docs are incomplete'
];

export const metadata = {
  title: 'AI Creator Platform Index 2026',
  description: 'A transparent scoring framework for comparing social platforms, fan platforms, and monetization rails for AI creator businesses.',
  alternates: { canonical: '/reports/ai-creator-platform-index-2026' },
  openGraph: {
    title: 'AI Creator Platform Index 2026',
    description: 'A transparent platform scoring framework for AI creator businesses.',
    url: 'https://aicreatorops.com/reports/ai-creator-platform-index-2026',
    siteName: 'AI Creator Ops',
    type: 'article'
  }
};

export default function PlatformIndexReportPage() {
  const platforms = getAllPlatforms();
  const rows = platforms.map((platform) => ({
    ...platform,
    status: platform.last_checked ? 'Source reviewed' : 'Source review pending'
  }));

  return (
    <main>
      <section className="wrap py-16 md:py-24">
        <div className="flex flex-wrap gap-2">
          <Badge>FLAGSHIP REPORT</Badge>
          <Badge tone="amber">DRAFT INDEX</Badge>
        </div>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.065em] md:text-7xl">
          AI Creator Platform Index 2026
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          A transparent scoring framework for comparing social platforms, fan platforms, and monetization rails for AI creator businesses. This first version defines the methodology and seed dataset before public source review.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <Card>
            <p className="font-mono text-xs text-[var(--dim)]">Current version</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-.04em]">0.1 draft</p>
          </Card>
          <Card>
            <p className="font-mono text-xs text-[var(--dim)]">Platforms seeded</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-.04em]">{platforms.length}</p>
          </Card>
          <Card>
            <p className="font-mono text-xs text-[var(--dim)]">Source status</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-.04em]">Pending review</p>
          </Card>
        </div>
      </section>

      <section className="wrap pb-10">
        <Card className="bg-gradient-to-br from-[rgba(139,92,246,.18)] to-[rgba(255,255,255,.035)] p-7 md:p-8">
          <Badge tone="cyan">KEY ANSWER</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-.05em]">What this index is for</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-[var(--muted)]">
            The index is designed to answer one operator question: which platforms are actually useful for building, distributing, monetizing, and safely operating an AI creator brand? It separates discovery platforms from monetization platforms and treats unclear policy as a business risk, not a footnote.
          </p>
        </Card>
      </section>

      <section className="wrap py-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <Badge>SEED DATASET</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.05em]">Platforms in the first pass</h2>
          </div>
          <Link className="hidden text-sm text-[var(--cyan)] md:block" href="/platforms">View platform pages →</Link>
        </div>
        <div className="overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface)]">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="border-b border-[var(--border)] text-[var(--dim)]">
              <tr>
                <th className="p-4 font-mono text-xs">Platform</th>
                <th className="p-4 font-mono text-xs">Type</th>
                <th className="p-4 font-mono text-xs">Policy risk</th>
                <th className="p-4 font-mono text-xs">Seed note</th>
                <th className="p-4 font-mono text-xs">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((platform) => (
                <tr key={platform.id} className="border-b border-[var(--border)] last:border-0">
                  <td className="p-4 font-medium"><Link className="text-white hover:text-[var(--cyan)]" href={`/platforms/${platform.id}`}>{platform.name}</Link></td>
                  <td className="p-4 text-[var(--muted)]">{platform.type.replaceAll('_', ' ')}</td>
                  <td className="p-4"><Badge tone={platform.policy_risk === 'high' ? 'amber' : 'cyan'}>{platform.policy_risk}</Badge></td>
                  <td className="max-w-md p-4 leading-6 text-[var(--muted)]">{platform.notes[0]}</td>
                  <td className="p-4 text-[var(--dim)]">{platform.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="wrap py-10">
        <Badge tone="green">METHODOLOGY</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-.05em]">Scoring criteria</h2>
        <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">
          Final scores should not be assigned until the platform has been source-reviewed. The draft weighting below makes the future ranking auditable instead of vibes-based.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {criteria.map((item) => (
            <Card key={item.name}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-[-.04em]">{item.name}</h3>
                <span className="font-mono text-sm text-[var(--cyan)]">{item.weight}</span>
              </div>
              <p className="mt-3 leading-7 text-[var(--muted)]">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="wrap py-10">
        <div className="grid gap-4 md:grid-cols-[.85fr_1.15fr]">
          <Card className="p-7">
            <Badge tone="amber">CAVEAT</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">Why this is a draft</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              The page is intentionally labeled as a draft index until the source desk reviews each platform's current policy, monetization, and automation documentation. That prevents fake certainty and gives the project a clean editorial standard from day one.
            </p>
          </Card>
          <Card className="p-7">
            <Badge tone="cyan">SOURCE PLAN</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">Primary-source review queue</h2>
            <ul className="mt-4 space-y-3 leading-7 text-[var(--muted)]">
              {sourcePlan.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </Card>
        </div>
      </section>

      <section className="wrap py-10 pb-20">
        <Card className="p-7">
          <Badge>RELATED</Badge>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">Next pages to build from this report</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <Link className="rounded-2xl border border-[var(--border)] p-4 text-[var(--muted)] hover:text-white" href="/methodology">Scoring methodology</Link>
            <Link className="rounded-2xl border border-[var(--border)] p-4 text-[var(--muted)] hover:text-white" href="/platforms/fanvue">Fanvue platform page</Link>
            <Link className="rounded-2xl border border-[var(--border)] p-4 text-[var(--muted)] hover:text-white" href="/comparisons">Platform comparisons</Link>
          </div>
        </Card>
      </section>
    </main>
  );
}
