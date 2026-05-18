import { PageHero, Card, Badge } from '@/components/ui';

const comparisons = ['Fanvue vs OnlyFans', 'Runway vs Kling', 'GPT Image vs Midjourney', 'Buffer vs Metricool', 'Instagram vs TikTok for AI Creators'];

export const metadata = { title: 'Comparisons' };
export default function ComparisonsPage() { return <main><PageHero eyebrow="COMPARISONS" title="Decision pages for creator operators" description="High-intent comparisons with explicit criteria, source-backed claims, and winner-by-use-case recommendations." /><section className="wrap grid gap-4 md:grid-cols-2">{comparisons.map((item) => <Card key={item}><Badge tone="green">QUEUED</Badge><h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">{item}</h2><p className="mt-3 text-[var(--muted)]">Comparison methodology and source review pending.</p></Card>)}</section></main>; }
