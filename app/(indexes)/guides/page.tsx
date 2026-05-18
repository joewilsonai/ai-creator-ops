import { PageHero, Card, Badge } from '@/components/ui';

const guides = ['What Is an AI Creator?', 'How to Build an AI Creator Brand', 'AI Creator Business Models', 'AI Creator Identity Consistency Guide', 'AI Creator Automation Stack'];

export const metadata = { title: 'Guides' };
export default function GuidesPage() { return <main><PageHero eyebrow="GUIDES" title="Operating manuals for AI creator businesses" description="Evergreen playbooks for building, producing, publishing, monetizing, automating, governing, and measuring synthetic creator brands." /><section className="wrap grid gap-4 md:grid-cols-2">{guides.map((guide) => <Card key={guide}><Badge>COMING MVP</Badge><h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">{guide}</h2><p className="mt-3 text-[var(--muted)]">Seed page queued for launch content production.</p></Card>)}</section></main>; }
