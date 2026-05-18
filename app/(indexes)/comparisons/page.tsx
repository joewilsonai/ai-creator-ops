import { PageHero, Card, Badge } from '@/components/ui';
import { comparisonPages } from '@/lib/editorial';

const queuedComparisons = ['Runway vs Kling', 'GPT Image vs Midjourney', 'Buffer vs Metricool', 'Fanvue vs Fansly', 'Linktree vs Beacons'];

export const metadata = {
  title: 'AI Creator Comparisons',
  description: 'Decision pages for AI creator tools and platforms, including Fanvue vs OnlyFans and Instagram vs TikTok for AI creators.'
};

export default function ComparisonsPage() {
  return (
    <main>
      <PageHero eyebrow="COMPARISONS" title="Decision pages for creator operators" description="High-intent comparisons with explicit criteria, source-backed claims, and winner-by-use-case recommendations." />
      <section className="wrap grid gap-4 md:grid-cols-2">
        {comparisonPages.map((page) => (
          <Card key={page.slug}>
            <Badge tone="green">LIVE</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]"><a href={page.canonicalPath}>{page.shortTitle}</a></h2>
            <p className="mt-3 text-[var(--muted)]">{page.description}</p>
          </Card>
        ))}
        {queuedComparisons.map((item) => (
          <Card key={item}>
            <Badge tone="violet">QUEUED</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">{item}</h2>
            <p className="mt-3 text-[var(--muted)]">Comparison methodology and source review pending.</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
