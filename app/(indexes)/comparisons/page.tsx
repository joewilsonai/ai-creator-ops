import { PageHero, Card, Badge } from '@/components/ui';
import { getSource } from '@/lib/data';
import { comparisonPages } from '@/lib/editorial';

const baseUrl = 'https://aicreatorops.com';

export const metadata = {
  title: 'AI Creator Comparisons',
  description: 'Decision pages for AI creator tools and platforms, including Fanvue vs OnlyFans and Instagram vs TikTok for AI creators.',
  alternates: { canonical: `${baseUrl}/comparisons` },
  openGraph: {
    title: 'AI Creator Comparisons',
    description: 'Criteria-led comparisons for AI creator tools, fan platforms, social platforms, automation stacks, and creator funnels.',
    url: `${baseUrl}/comparisons`,
    type: 'website'
  }
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
            <div className="mt-5 border-t border-[var(--border-soft)] pt-4">
              <p className="font-mono text-[11px] uppercase tracking-[.08em] text-[var(--dim)]">Methodology and source preview</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                <li><a className="text-[var(--cyan)]" href="/methodology">AI Creator Ops comparison methodology</a></li>
                {page.sourceIds.slice(0, 2).map((sourceId) => {
                  const source = getSource(sourceId);
                  if (!source) return null;
                  return (
                    <li key={source.id}>
                      <a className="text-[var(--cyan)]" href={source.url} rel="noopener noreferrer">{source.title}</a>{' '}
                      <span className="text-xs uppercase tracking-[.14em] text-[var(--dim)]">{source.source_type === 'market_signal' ? 'market signal' : `${source.source_type} source`}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Card>
        ))}
      </section>
      <section className="wrap mt-8">
        <Card>
          <Badge tone="violet">YOUTUBE</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-.05em]">Current video links</h2>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">Each live comparison page now includes current YouTube demos or comparison videos where useful. Treat them as visual workflow context and market signals; official source links on each page remain the authority for policy, pricing, and API claims.</p>
          <ul className="mt-5 grid gap-3 text-sm md:grid-cols-2">
            <li><a className="text-[var(--cyan)]" href="/comparisons/fanvue-vs-onlyfans">Fanvue vs OnlyFans creator-platform videos</a></li>
            <li><a className="text-[var(--cyan)]" href="/comparisons/instagram-vs-tiktok-for-ai-creators">Instagram vs TikTok AI influencer workflow videos</a></li>
            <li><a className="text-[var(--cyan)]" href="/comparisons/runway-vs-kling">Runway vs Kling video demos</a></li>
            <li><a className="text-[var(--cyan)]" href="/comparisons/gpt-image-vs-midjourney">GPT Image vs Midjourney visual comparison</a></li>
            <li><a className="text-[var(--cyan)]" href="/comparisons/buffer-vs-metricool">Buffer vs Metricool scheduler videos</a></li>
            <li><a className="text-[var(--cyan)]" href="/comparisons/fanvue-vs-fansly">Fanvue vs Fansly creator-platform videos</a></li>
            <li><a className="text-[var(--cyan)]" href="/comparisons/linktree-vs-beacons">Linktree vs Beacons funnel videos</a></li>
          </ul>
        </Card>
      </section>
    </main>
  );
}
