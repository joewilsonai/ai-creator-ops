import Link from 'next/link';
import { PageHero, Card, Badge } from '@/components/ui';

export const metadata = {
  title: 'Reports',
  description: 'Original indexes and market reports from AI Creator Ops.'
};

export default function ReportsPage() {
  return (
    <main>
      <PageHero
        eyebrow="RESEARCH"
        title="Original indexes and market reports"
        description="Linkable authority assets built from structured data, transparent methodology, and continuously updated platform/tool intelligence."
      />
      <section className="wrap grid gap-4 md:grid-cols-2">
        <Link href={'/reports/ai-creator-platform-index-2026' as any}>
          <Card className="h-full bg-gradient-to-br from-[rgba(139,92,246,.18)] to-[rgba(255,255,255,.035)] transition hover:border-[rgba(34,211,238,.45)]">
            <Badge>FLAGSHIP</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.05em]">AI Creator Platform Index 2026</h2>
            <p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">A scored map of social platforms, fan platforms, and monetization rails for AI creator businesses. First version: methodology + seed dataset.</p>
            <p className="mt-6 text-sm text-[var(--cyan)]">Open report →</p>
          </Card>
        </Link>
      </section>
    </main>
  );
}
