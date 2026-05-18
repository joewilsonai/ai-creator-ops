import { PageHero, Card, Badge } from '@/components/ui';
import { getAllPlatforms } from '@/lib/data';

export const metadata = { title: 'AI Creator Platform Index' };

export default function PlatformsPage() {
  const platforms = getAllPlatforms();
  return (
    <main>
      <PageHero eyebrow="PLATFORM INTELLIGENCE" title="AI Creator Platform Index" description="A scored operating map of social platforms, fan platforms, monetization rails, automation support, and policy risk for AI creator businesses." />
      <section className="wrap grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {platforms.map((platform) => (
          <Card key={platform.id}>
            <Badge tone="cyan">{platform.type.replaceAll('_', ' ')}</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]"><a href={`/platforms/${platform.id}`}>{platform.name}</a></h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{platform.notes[0]}</p>
            <p className="mt-5 font-mono text-xs text-[var(--dim)]">Policy risk: {platform.policy_risk}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
