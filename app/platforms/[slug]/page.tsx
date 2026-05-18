import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Badge, Card } from '@/components/ui';
import { getAllPlatforms, getPlatform, getSource } from '@/lib/data';

function sourceTypeLabel(sourceType: string) {
  return sourceType === 'market_signal' ? 'market signal' : `${sourceType} source`;
}

export function generateStaticParams() { return getAllPlatforms().map((platform) => ({ slug: platform.id })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) return { title: 'Platform' };
  return {
    title: `${platform.name} for AI Creators: Policy, Monetization, and Automation Notes`,
    description: `${platform.notes[0]} Includes AI creator friendliness, monetization, automation, policy risk, sources, and last-checked status.`,
    alternates: { canonical: `/platforms/${platform.id}` },
    openGraph: {
      title: `${platform.name} for AI Creators`,
      description: platform.notes[0],
      url: `/platforms/${platform.id}`,
      type: 'article'
    }
  };
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) notFound();
  const sources = platform.sources.map((sourceId) => getSource(sourceId)).filter((source) => source !== undefined);
  const scores = [
    ['AI creator friendliness', platform.ai_creator_friendliness_score],
    ['Monetization', platform.monetization_score],
    ['Automation', platform.automation_score],
    ['Discovery', platform.discovery_score]
  ];
  return (
    <main className="wrap py-16">
      <Badge tone="cyan">{platform.type.replaceAll('_', ' ')}</Badge>
      <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.06em] md:text-7xl">{platform.name} for AI creators</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{platform.notes[0]}</p>

      <section className="mt-10">
        <Card>
          <Badge tone="green">DIRECT ANSWER</Badge>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            {platform.name} is tracked as a {platform.type.replaceAll('_', ' ')} for AI creators, AI influencers, AI girlfriend business operators, virtual influencers, synthetic creator teams, and AI companion operators. This page summarizes source-backed notes where available and labels unresolved scoring fields as pending methodology/source review.
          </p>
        </Card>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-4">
        {scores.map(([label, score]) => <Card key={label as string}><h2 className="text-sm text-[var(--muted)]">{label}</h2><p className="mt-3 font-mono text-2xl">{score ?? 'TBD'}</p></Card>)}
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-[1fr_.7fr]">
        <Card><h2 className="text-2xl font-semibold tracking-[-.04em]">Policy risk</h2><p className="mt-4 text-[var(--muted)]">Current seed rating: {platform.policy_risk}. Scoring remains provisional until the public methodology and source review are complete.</p><p className="mt-4 font-mono text-xs text-[var(--dim)]">Last checked: {platform.last_checked ?? 'pending source review'}</p></Card>
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Related pages</h2>
          <ul className="mt-4 space-y-3 text-[var(--muted)]">
            <li><a className="text-[var(--cyan)]" href="/platforms">AI Creator Platform Index</a></li>
            <li><a className="text-[var(--cyan)]" href="/reports/ai-creator-platform-index-2026">AI Creator Platform Index 2026 report</a></li>
            <li><a className="text-[var(--cyan)]" href="/methodology">Scoring methodology</a></li>
            <li><a className="text-[var(--cyan)]" href="/glossary/provenance">Provenance and disclosure</a></li>
          </ul>
        </Card>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-[1fr_.7fr]">
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Current notes</h2>
          <ul className="mt-4 space-y-3 leading-7 text-[var(--muted)]">
            {platform.notes.map((note) => <li key={note}>• {note}</li>)}
          </ul>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Sources</h2>
          {sources.length > 0 ? (
            <ul className="mt-4 space-y-3 text-[var(--muted)]">
              {sources.map((source) => <li key={source.id}><a className="text-[var(--cyan)]" href={source.url} rel="noopener noreferrer">{source.title}</a> <span className="text-xs uppercase tracking-[.18em] text-[var(--dim)]">{sourceTypeLabel(source.source_type)}</span> — {source.publisher}, retrieved {source.retrieved_at}. {source.notes}</li>)}
            </ul>
          ) : (
            <p className="mt-4 text-[var(--muted)]">Primary-source review pending. Treat policy, monetization, and automation notes as seed editorial context until source records are attached.</p>
          )}
        </Card>
      </section>
    </main>
  );
}
