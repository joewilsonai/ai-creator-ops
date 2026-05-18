import { PageHero, Card, Badge } from '@/components/ui';
import { guidePages } from '@/lib/editorial';

const guides = [
  {
    title: 'What Is an AI Creator?',
    href: '/guides/what-is-an-ai-creator',
    status: 'LIVE',
    description: 'Meaning, AI influencer overlap, virtual influencer terminology, and the operating model behind synthetic creator businesses.'
  },
  ...guidePages.map((page) => ({
    title: page.shortTitle,
    href: page.canonicalPath,
    status: 'LIVE',
    description: page.description
  })),
  { title: 'AI Creator Automation Stack', href: null, status: 'COMING MVP', description: 'Queued for launch content production after platform/tool source review.' }
];

export const metadata = {
  title: 'AI Creator Guides',
  description: 'Operator-first guides for AI influencers, AI girlfriend brands, AI models, virtual influencers, synthetic influencers, disclosure, monetization, and identity consistency.'
};

export default function GuidesPage() {
  return (
    <main>
      <PageHero eyebrow="GUIDES" title="Operating manuals for AI creator businesses" description="Evergreen playbooks for building, producing, publishing, monetizing, automating, governing, and measuring synthetic creator brands." />
      <section className="wrap grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <Card key={guide.title}>
            <Badge tone={guide.status === 'LIVE' ? 'green' : 'violet'}>{guide.status}</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">
              {guide.href ? <a href={guide.href}>{guide.title}</a> : guide.title}
            </h2>
            <p className="mt-3 text-[var(--muted)]">{guide.description}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
