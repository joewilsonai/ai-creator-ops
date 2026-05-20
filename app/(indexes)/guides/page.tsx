import { PageHero, Card, Badge } from '@/components/ui';
import { guidePages } from '@/lib/editorial';

const baseUrl = 'https://aicreatorops.com';

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
  }))
];

export const metadata = {
  title: 'AI Creator Guides',
  description: 'Operator-first guides for AI influencers, AI girlfriend brands, AI models, virtual influencers, synthetic influencers, disclosure, monetization, and identity consistency.',
  alternates: { canonical: `${baseUrl}/guides` },
  openGraph: {
    title: 'AI Creator Guides',
    description: 'Source-backed operating guides for AI creator brands, AI influencers, AI girlfriend businesses, virtual creators, and synthetic influencers.',
    url: `${baseUrl}/guides`,
    type: 'website'
  }
};

export default function GuidesPage() {
  return (
    <main>
      <PageHero eyebrow="GUIDES" title="Operating manuals for AI creator businesses" description="Evergreen playbooks for building, producing, publishing, monetizing, automating, governing, and measuring synthetic creator brands." />
      <section className="wrap pb-8">
        <Card>
          <Badge tone="green">DIRECT ANSWER</Badge>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            Start with the AI creator definition, then move into operating guides for AI influencer brand building, AI girlfriend and AI companion monetization, identity consistency, disclosure, automation, and platform risk. These guides are written as source-backed operator playbooks, not generic AI trend articles.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a className="text-[var(--cyan)]" href="/glossary/ai-influencer">AI influencer</a>
            <a className="text-[var(--cyan)]" href="/glossary/ai-girlfriend-business">AI girlfriend business</a>
            <a className="text-[var(--cyan)]" href="/glossary/ai-creator">AI model / AI creator</a>
            <a className="text-[var(--cyan)]" href="/glossary/virtual-influencer">Virtual influencer</a>
            <a className="text-[var(--cyan)]" href="/glossary/synthetic-influencer">Synthetic influencer</a>
            <a className="text-[var(--cyan)]" href="/glossary/ai-companion">AI companion</a>
          </div>
        </Card>
      </section>
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
