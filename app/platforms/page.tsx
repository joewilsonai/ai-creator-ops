import { PageHero, Card, Badge } from '@/components/ui';
import { getAllPlatforms } from '@/lib/data';

export const metadata = {
  title: 'AI Creator Platform Index: AI Influencer, Fan Platform, and Commerce Rails',
  description: 'Source-backed platform notes for AI creator businesses, AI influencers, AI girlfriend brands, virtual influencers, fan platforms, social distribution, and commerce rails.',
  alternates: { canonical: '/platforms' }
};

export default function PlatformsPage() {
  const platforms = getAllPlatforms();
  return (
    <main>
      <PageHero eyebrow="PLATFORM INTELLIGENCE" title="AI Creator Platform Index" description="A source-backed operating map of social platforms, fan platforms, monetization rails, automation support, and policy risk for AI creator businesses." />
      <section className="wrap pb-8">
        <Card>
          <Badge tone="green">DIRECT ANSWER</Badge>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            AI Creator Ops tracks where AI influencers, virtual influencers, synthetic influencers, AI model brands, and AI companion operators can publish, automate, and monetize. Each platform page lists current source-reviewed notes, last-checked status, internal links, and visible citations.
          </p>
        </Card>
      </section>
      <section className="wrap grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {platforms.map((platform) => (
          <Card key={platform.id}>
            <Badge tone="cyan">{platform.type.replaceAll('_', ' ')}</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]"><a href={`/platforms/${platform.id}`}>{platform.name}</a></h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{platform.notes[0]}</p>
            <p className="mt-5 font-mono text-xs text-[var(--dim)]">Policy risk: {platform.policy_risk}</p>
            <p className="mt-2 font-mono text-xs text-[var(--dim)]">Last checked: {platform.last_checked ?? 'pending source review'} · Sources: {platform.sources.length}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
