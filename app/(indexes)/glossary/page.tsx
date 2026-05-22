import { PageHero, Card, Badge } from '@/components/ui';
import { getSource } from '@/lib/data';
import { glossarySourceIds, glossaryTerms } from '@/lib/glossary';

const baseUrl = 'https://aicreatorops.com';

export const metadata = {
  title: 'AI Creator Glossary: AI Influencer, AI Girlfriend, Virtual Influencer Terms',
  description:
    'Entity definitions for AI creator businesses, AI influencers, AI girlfriend brands, virtual influencers, synthetic influencers, creator funnels, fan platforms, and disclosure workflows.',
  alternates: { canonical: `${baseUrl}/glossary` },
  openGraph: {
    title: 'AI Creator Glossary',
    description: 'Crawlable entity definitions for AI influencer, AI girlfriend, AI model, virtual influencer, synthetic influencer, virtual creator, and AI companion terms.',
    url: `${baseUrl}/glossary`,
    type: 'website'
  }
};

export default function GlossaryPage() {
  return (
    <main>
      <PageHero
        eyebrow="GLOSSARY"
        title="AI creator economy glossary"
        description="Concise, internally linked entity pages that map public search language — AI influencer, AI girlfriend, virtual influencer, synthetic influencer, AI model, and AI companion — into operator-grade AI Creator Ops concepts."
      />
      <section className="wrap mb-8">
        <Card>
          <Badge tone="green">DIRECT ANSWER</Badge>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            AI Creator Ops uses the glossary as its entity layer: each term defines what the market means, why it matters for creator operators, and where to go next for platform, tool, methodology, or guide context.
          </p>
        </Card>
      </section>
      <section className="wrap grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {glossaryTerms.map((term) => (
          <Card key={term.slug}>
            <Badge tone="cyan">ENTITY</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]"><a href={`/glossary/${term.slug}`}>{term.term}</a></h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{term.definition}</p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[.06em] text-[var(--dim)]">
              Also searched as: {term.alsoKnownAs.join(', ')}
            </p>
            <div className="mt-4 border-t border-[var(--border-soft)] pt-4">
              <p className="font-mono text-[11px] uppercase tracking-[.08em] text-[var(--dim)]">Source preview</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                {(glossarySourceIds[term.slug] ?? []).slice(0, 2).map((sourceId) => {
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
    </main>
  );
}
