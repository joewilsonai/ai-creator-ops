import { notFound } from 'next/navigation';
import { Badge, Card } from '@/components/ui';
import { getAllPlatforms, getPlatform } from '@/lib/data';

export function generateStaticParams() { return getAllPlatforms().map((platform) => ({ slug: platform.id })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  return { title: platform ? `${platform.name} for AI Creators` : 'Platform' };
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) notFound();
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
      <section className="mt-10 grid gap-4 md:grid-cols-4">
        {scores.map(([label, score]) => <Card key={label as string}><h2 className="text-sm text-[var(--muted)]">{label}</h2><p className="mt-3 font-mono text-2xl">{score ?? 'TBD'}</p></Card>)}
      </section>
      <Card className="mt-8"><h2 className="text-2xl font-semibold tracking-[-.04em]">Policy risk</h2><p className="mt-4 text-[var(--muted)]">Current seed rating: {platform.policy_risk}. This page needs primary-source policy review before public launch.</p></Card>
    </main>
  );
}
