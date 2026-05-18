import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Badge, Card } from '@/components/ui';
import { getAllTools, getSource, getTool } from '@/lib/data';

function sourceTypeLabel(sourceType: string) {
  return sourceType === 'market_signal' ? 'market signal' : `${sourceType} source`;
}

export function generateStaticParams() { return getAllTools().map((tool) => ({ slug: tool.id })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: 'Tool' };
  return {
    title: `${tool.name} for AI Creators: Use Cases, Risk, and Source Notes`,
    description: `${tool.summary} Includes AI creator use cases, pricing model, automation/API status, policy risk, and last-checked source status.`,
    alternates: { canonical: `/tools/${tool.id}` },
    openGraph: {
      title: `${tool.name} for AI Creators`,
      description: tool.summary,
      url: `/tools/${tool.id}`,
      type: 'article'
    }
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();
  const sources = tool.sources.map((sourceId) => getSource(sourceId)).filter((source) => source !== undefined);
  return (
    <main className="wrap py-16">
      <Badge>{tool.category.replaceAll('_', ' ')}</Badge>
      <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.06em] md:text-7xl">{tool.name} for AI creator operations</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{tool.summary}</p>

      <section className="mt-10">
        <Card>
          <Badge tone="green">DIRECT ANSWER</Badge>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            {tool.name} is tracked as a {tool.category.replaceAll('_', ' ')} tool for AI creators, AI influencers, virtual influencer teams, and synthetic creator operators. Use this page as a source-status snapshot, not as a final endorsement: pricing, API availability, commercial rights, and platform policy details require current primary-source review.
          </p>
        </Card>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <Card><h2 className="font-semibold">Pricing model</h2><p className="mt-2 text-[var(--muted)]">{tool.pricing_model.replaceAll('_', ' ')}</p></Card>
        <Card><h2 className="font-semibold">API availability</h2><p className="mt-2 text-[var(--muted)]">{String(tool.api_available)}</p></Card>
        <Card><h2 className="font-semibold">Policy risk</h2><p className="mt-2 text-[var(--muted)]">{tool.policy_risk}</p></Card>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-[1fr_.6fr]">
        <Card><h2 className="text-2xl font-semibold tracking-[-.04em]">Best for</h2><ul className="mt-4 space-y-2 text-[var(--muted)]">{tool.best_for.map((item) => <li key={item}>• {item}</li>)}</ul></Card>
        <Card><h2 className="text-2xl font-semibold tracking-[-.04em]">Source status</h2><p className="mt-4 text-[var(--muted)]">Last checked: {tool.last_checked ?? 'pending source review'}</p><a className="mt-4 inline-block text-[var(--cyan)]" href={tool.url} rel="noopener noreferrer">{tool.name} official site</a></Card>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Related operator pages</h2>
          <ul className="mt-4 space-y-3 text-[var(--muted)]">
            <li><a className="text-[var(--cyan)]" href="/tools">AI Creator Tool Index</a></li>
            <li><a className="text-[var(--cyan)]" href="/platforms">AI Creator Platform Index</a></li>
            <li><a className="text-[var(--cyan)]" href="/guides/what-is-an-ai-creator">What is an AI creator?</a></li>
            <li><a className="text-[var(--cyan)]" href="/methodology">Scoring methodology</a></li>
          </ul>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Sources</h2>
          {sources.length > 0 ? (
            <ul className="mt-4 space-y-3 text-[var(--muted)]">
              {sources.map((source) => <li key={source.id}><a className="text-[var(--cyan)]" href={source.url} rel="noopener noreferrer">{source.title}</a> <span className="text-xs uppercase tracking-[.18em] text-[var(--dim)]">{sourceTypeLabel(source.source_type)}</span> — {source.publisher}, retrieved {source.retrieved_at}. {source.notes}</li>)}
            </ul>
          ) : (
            <p className="mt-4 text-[var(--muted)]">Primary-source review pending. Do not treat pricing, API, commercial-rights, or policy notes as fully verified until sources are attached.</p>
          )}
        </Card>
      </section>
    </main>
  );
}
