import type { Metadata } from 'next';
import { Badge, Card, PageHero } from '@/components/ui';

export const metadata: Metadata = {
  title: 'AI Creator Ops Newsletter',
  description: 'Updates on AI creator tools, platform policy, monetization, automation, and synthetic creator operations.',
  alternates: { canonical: '/newsletter' },
  openGraph: {
    title: 'AI Creator Ops Newsletter',
    description: 'Operator intelligence for AI creator businesses, synthetic influencers, and virtual creator teams.',
    url: '/newsletter',
    type: 'website'
  }
};

const coverage = [
  'Primary-source changes to platform policy, API access, payouts, synthetic-media disclosure, and monetization rules.',
  'Tool and workflow notes for AI influencer, AI girlfriend, virtual influencer, and synthetic creator operators.',
  'New reports, methodology updates, glossary/entity pages, and comparison pages from the AI Creator Ops desk.'
];

export default function NewsletterPage() {
  return (
    <main>
      <PageHero
        eyebrow="NEWSLETTER"
        title="Operator intelligence for AI creator businesses"
        description="A low-noise update surface for platform policy, tool changes, monetization notes, and original AI Creator Ops research. Signup plumbing is pending; this page keeps the public route discoverable and crawlable."
      />
      <section className="wrap grid gap-4 md:grid-cols-[1fr_.7fr]">
        <Card>
          <Badge tone="green">DIRECT ANSWER</Badge>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            The AI Creator Ops newsletter will summarize source-checked updates for operators building AI creators, AI influencers, AI girlfriend businesses, virtual influencers, synthetic influencers, AI models, and creator automation systems.
          </p>
          <ul className="mt-6 space-y-3 text-[var(--muted)]">
            {coverage.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Related pages</h2>
          <ul className="mt-4 space-y-3 text-[var(--muted)]">
            <li><a className="text-[var(--cyan)]" href="/reports/ai-creator-platform-index-2026">AI Creator Platform Index 2026</a></li>
            <li><a className="text-[var(--cyan)]" href="/guides/what-is-an-ai-creator">What is an AI creator?</a></li>
            <li><a className="text-[var(--cyan)]" href="/tools">AI Creator Tool Index</a></li>
            <li><a className="text-[var(--cyan)]" href="/platforms">AI Creator Platform Index</a></li>
            <li><a className="text-[var(--cyan)]" href="/methodology">Scoring methodology</a></li>
          </ul>
        </Card>
      </section>
    </main>
  );
}
