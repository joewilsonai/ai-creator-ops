import { PageHero, Card, Badge } from '@/components/ui';
import { getAllTools } from '@/lib/data';

export const metadata = {
  title: 'AI Creator Tool Index: AI Influencer, AI Model, and Automation Stack Tools',
  description:
    'Source-backed tool records for AI creator businesses, AI influencers, AI girlfriend brands, virtual influencers, AI models, scheduling, funnels, and automation workflows.',
  alternates: { canonical: '/tools' },
  openGraph: {
    title: 'AI Creator Tool Index',
    description:
      'A structured tool index for AI creator operators: image/video generation, identity workflows, fan platforms, link-in-bio funnels, schedulers, and DM automation.',
    url: '/tools',
    type: 'website'
  }
};

export default function ToolsPage() {
  const tools = getAllTools();
  const sourceReviewed = tools.filter((tool) => tool.sources.length > 0).length;
  return (
    <main>
      <PageHero eyebrow="TOOL DATABASE" title="AI Creator Tool Index" description="A structured map of image, video, fan-platform, scheduling, identity, analytics, and automation tools for AI creator businesses." />
      <section className="wrap pb-8">
        <Card>
          <Badge tone="green">DIRECT ANSWER</Badge>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            The AI Creator Tool Index tracks tools used by AI influencers, AI girlfriend business operators, AI model brands, virtual influencers, synthetic influencers, virtual creators, and AI companion teams. Each record prioritizes source status, workflow fit, policy risk, API or automation availability, and related glossary/entity links over generic “best tool” hype.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <p className="font-mono text-xs uppercase tracking-[.08em] text-[var(--dim)]">Tool records: {tools.length}</p>
            <p className="font-mono text-xs uppercase tracking-[.08em] text-[var(--dim)]">With source links: {sourceReviewed}</p>
            <p className="font-mono text-xs uppercase tracking-[.08em] text-[var(--dim)]">Last review batch: 2026-05-20</p>
          </div>
        </Card>
      </section>
      <section className="wrap pb-8">
        <Card>
          <Badge tone="cyan">ENTITY LINKS</Badge>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a className="text-[var(--cyan)]" href="/glossary/ai-influencer">AI influencer</a>
            <a className="text-[var(--cyan)]" href="/glossary/ai-girlfriend-business">AI girlfriend business</a>
            <a className="text-[var(--cyan)]" href="/glossary/virtual-influencer">Virtual influencer</a>
            <a className="text-[var(--cyan)]" href="/glossary/synthetic-influencer">Synthetic influencer</a>
            <a className="text-[var(--cyan)]" href="/glossary/ai-creator">AI model / AI creator</a>
            <a className="text-[var(--cyan)]" href="/glossary/dm-automation">AI companion / DM automation</a>
          </div>
        </Card>
      </section>
      <section className="wrap grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.id}>
            <Badge>{tool.category.replaceAll('_', ' ')}</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]"><a href={`/tools/${tool.id}`}>{tool.name}</a></h2>
            <p className="mt-3 min-h-24 leading-7 text-[var(--muted)]">{tool.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">{tool.best_for.slice(0, 3).map((item) => <span key={item} className="rounded-full border border-[var(--border)] px-2 py-1 text-xs text-[var(--muted)]">{item}</span>)}</div>
            <p className="mt-5 font-mono text-xs text-[var(--dim)]">Last checked: {tool.last_checked ?? 'pending source review'} · Sources: {tool.sources.length}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
