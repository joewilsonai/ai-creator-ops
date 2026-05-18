import { PageHero, Card, Badge } from '@/components/ui';
import { getAllTools } from '@/lib/data';

export const metadata = { title: 'AI Creator Tool Index' };

export default function ToolsPage() {
  const tools = getAllTools();
  return (
    <main>
      <PageHero eyebrow="TOOL DATABASE" title="AI Creator Tool Index" description="A structured map of image, video, fan-platform, scheduling, identity, analytics, and automation tools for AI creator businesses." />
      <section className="wrap grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.id}>
            <Badge>{tool.category.replaceAll('_', ' ')}</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]"><a href={`/tools/${tool.id}`}>{tool.name}</a></h2>
            <p className="mt-3 min-h-24 leading-7 text-[var(--muted)]">{tool.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">{tool.best_for.slice(0, 3).map((item) => <span key={item} className="rounded-full border border-[var(--border)] px-2 py-1 text-xs text-[var(--muted)]">{item}</span>)}</div>
          </Card>
        ))}
      </section>
    </main>
  );
}
