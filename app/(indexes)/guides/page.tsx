import { PageHero, Card, Badge } from '@/components/ui';

const guides = [
  {
    title: 'What Is an AI Creator?',
    href: '/guides/what-is-an-ai-creator',
    status: 'LIVE',
    description: 'Meaning, AI influencer overlap, virtual influencer terminology, and the operating model behind synthetic creator businesses.'
  },
  { title: 'How to Build an AI Creator Brand', href: null, status: 'COMING MVP', description: 'Seed page queued for launch content production.' },
  { title: 'AI Creator Business Models', href: null, status: 'COMING MVP', description: 'Seed page queued for launch content production.' },
  { title: 'AI Creator Identity Consistency Guide', href: null, status: 'COMING MVP', description: 'Seed page queued for launch content production.' },
  { title: 'AI Creator Automation Stack', href: null, status: 'COMING MVP', description: 'Seed page queued for launch content production.' }
];

export const metadata = { title: 'Guides' };
export default function GuidesPage() { return <main><PageHero eyebrow="GUIDES" title="Operating manuals for AI creator businesses" description="Evergreen playbooks for building, producing, publishing, monetizing, automating, governing, and measuring synthetic creator brands." /><section className="wrap grid gap-4 md:grid-cols-2">{guides.map((guide) => <Card key={guide.title}><Badge tone={guide.status === 'LIVE' ? 'green' : 'violet'}>{guide.status}</Badge><h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">{guide.href ? <a href={guide.href}>{guide.title}</a> : guide.title}</h2><p className="mt-3 text-[var(--muted)]">{guide.description}</p></Card>)}</section></main>; }
