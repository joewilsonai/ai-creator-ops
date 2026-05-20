import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Badge, Card } from '@/components/ui';
import { getSource } from '@/lib/data';
import { getGlossaryTerm, glossarySourceIds, glossaryTerms } from '@/lib/glossary';

const baseUrl = 'https://aicreatorops.com';

function sourceTypeLabel(sourceType: string) {
  return sourceType === 'market_signal' ? 'market signal' : `${sourceType} source`;
}

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) return { title: 'Glossary Term' };
  return {
    title: `${term.term}: Definition for AI Creator Operators`,
    description: `${term.definition} Includes related AI creator, AI influencer, platform, tool, and monetization links.`,
    alternates: { canonical: `${baseUrl}/glossary/${term.slug}` },
    openGraph: {
      title: `${term.term}: Definition for AI Creator Operators`,
      description: term.definition,
      url: `${baseUrl}/glossary/${term.slug}`,
      type: 'article'
    }
  };
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) notFound();
  const sources = (glossarySourceIds[term.slug] ?? [])
    .map((sourceId) => getSource(sourceId))
    .filter((source) => source !== undefined);

  return (
    <main className="wrap py-16">
      <Badge tone="cyan">GLOSSARY ENTITY</Badge>
      <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.06em] md:text-7xl">{term.term}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{term.definition}</p>

      <section className="mt-10">
        <Card>
          <Badge tone="green">KEY FACTS</Badge>
          <ul className="mt-4 grid gap-3 leading-7 text-[var(--muted)] md:grid-cols-3">
            <li><strong className="text-[var(--ink)]">Entity:</strong> {term.term}</li>
            <li><strong className="text-[var(--ink)]">Also searched as:</strong> {term.alsoKnownAs.slice(0, 3).join(', ')}</li>
            <li><strong className="text-[var(--ink)]">Last updated:</strong> 2026-05-18</li>
          </ul>
        </Card>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-[1fr_.7fr]">
        <Card>
          <Badge tone="green">DIRECT ANSWER</Badge>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">What {term.term.toLowerCase()} means in AI Creator Ops</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">{term.whyItMatters}</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Also known as</h2>
          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            {term.alsoKnownAs.map((alias) => <li key={alias}>• {alias}</li>)}
          </ul>
        </Card>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-[1fr_.7fr]">
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Operator notes</h2>
          <ul className="mt-4 space-y-3 leading-7 text-[var(--muted)]">
            {term.operatorNotes.map((note) => <li key={note}>• {note}</li>)}
          </ul>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Related AI Creator Ops pages</h2>
          <ul className="mt-4 space-y-3 text-[var(--muted)]">
            {term.related.map((link) => (
              <li key={link.href}><a className="text-[var(--cyan)]" href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-8">
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Source and review status</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            Last updated: 2026-05-18. This glossary page is an editorial entity definition. Platform, pricing, API, payout, and policy claims should be verified on the linked platform/tool pages and methodology-backed source records before being treated as current operational guidance.
          </p>
          {sources.length > 0 ? (
            <ul className="mt-4 space-y-3 text-[var(--muted)]">
              {sources.map((source) => (
                <li key={source.id}>
                  <a className="text-[var(--cyan)]" href={source.url} rel="noopener noreferrer">{source.title}</a>{' '}
                  <span className="text-xs uppercase tracking-[.18em] text-[var(--dim)]">{sourceTypeLabel(source.source_type)}</span> — {source.publisher}, retrieved {source.retrieved_at}.
                </li>
              ))}
            </ul>
          ) : null}
        </Card>
      </section>
    </main>
  );
}
