import { PageHero, Card, Badge } from '@/components/ui';

const terms = ['AI Creator', 'Synthetic Influencer', 'Virtual Influencer', 'Identity Consistency', 'Fan Platform', 'Creator Funnel', 'DM Automation', 'Provenance'];

export const metadata = { title: 'Glossary' };
export default function GlossaryPage() { return <main><PageHero eyebrow="GLOSSARY" title="Entity pages for the AI creator economy" description="Concise, internally linked definitions designed for humans, search engines, and LLM answer engines." /><section className="wrap grid gap-4 md:grid-cols-3">{terms.map((term) => <Card key={term}><Badge tone="cyan">ENTITY</Badge><h2 className="mt-4 text-xl font-semibold tracking-[-.03em]">{term}</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Definition page queued for launch cluster.</p></Card>)}</section></main>; }
