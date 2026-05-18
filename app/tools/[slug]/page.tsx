import { notFound } from 'next/navigation';
import { Badge, Card } from '@/components/ui';
import { getAllTools, getTool } from '@/lib/data';

export function generateStaticParams() { return getAllTools().map((tool) => ({ slug: tool.id })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  return { title: tool ? `${tool.name} for AI Creators` : 'Tool' };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();
  return (
    <main className="wrap py-16">
      <Badge>{tool.category.replaceAll('_', ' ')}</Badge>
      <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.06em] md:text-7xl">{tool.name} for AI creator operations</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{tool.summary}</p>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Card><h2 className="font-semibold">Pricing model</h2><p className="mt-2 text-[var(--muted)]">{tool.pricing_model.replaceAll('_', ' ')}</p></Card>
        <Card><h2 className="font-semibold">API availability</h2><p className="mt-2 text-[var(--muted)]">{String(tool.api_available)}</p></Card>
        <Card><h2 className="font-semibold">Policy risk</h2><p className="mt-2 text-[var(--muted)]">{tool.policy_risk}</p></Card>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-[1fr_.6fr]">
        <Card><h2 className="text-2xl font-semibold tracking-[-.04em]">Best for</h2><ul className="mt-4 space-y-2 text-[var(--muted)]">{tool.best_for.map((item) => <li key={item}>• {item}</li>)}</ul></Card>
        <Card><h2 className="text-2xl font-semibold tracking-[-.04em]">Source status</h2><p className="mt-4 text-[var(--muted)]">Last checked: {tool.last_checked ?? 'pending source review'}</p><a className="mt-4 inline-block text-[var(--cyan)]" href={tool.url}>Official site</a></Card>
      </section>
    </main>
  );
}
