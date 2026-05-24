import type { Metadata } from 'next';
import { Badge, Card } from '@/components/ui';
import { getAllPlatforms, getAllTools, getSource } from '@/lib/data';

const baseUrl = 'https://aicreatorops.com';

export const metadata: Metadata = {
  title: 'AI Creator Ops: AI Influencer, Virtual Creator, and AI Girlfriend Business Intelligence',
  description:
    'Source-backed operating intelligence for AI creator businesses, AI influencers, AI girlfriend brands, AI models, virtual influencers, synthetic influencers, automation, and monetization.',
  alternates: { canonical: `${baseUrl}/` },
  openGraph: {
    title: 'AI Creator Ops',
    description: 'Build the creator business, not just the character.',
    url: `${baseUrl}/`,
    type: 'website'
  }
};

function sourceTypeLabel(sourceType: string) {
  return sourceType === 'market_signal' ? 'market signal' : `${sourceType} source`;
}

const entityLinks = [
  { label: 'AI influencer', href: '/glossary/ai-influencer' },
  { label: 'AI girlfriend business', href: '/glossary/ai-girlfriend-business' },
  { label: 'AI model', href: '/glossary/ai-model' },
  { label: 'Virtual influencer', href: '/glossary/virtual-influencer' },
  { label: 'Synthetic influencer', href: '/glossary/synthetic-influencer' },
  { label: 'Virtual creator', href: '/glossary/virtual-creator' },
  { label: 'AI companion', href: '/glossary/ai-companion' }
];

const homepageSourceIds = [
  'fanvue-ai-content-allowed',
  'tiktok-aigc-support',
  'youtube-help-altered-synthetic-content',
  'meta-labeling-ai-content-impact'
];

const pillars = [
  ['Build', 'Persona, brand, identity, world, and site foundations.'],
  ['Produce', 'Image, video, content ops, QA, and continuity workflows.'],
  ['Publish', 'Instagram, TikTok, schedulers, APIs, cadence, and risk.'],
  ['Monetize', 'Fan platforms, affiliate, sponsorship, paid drops, products.'],
  ['Automate', 'Agent teams, GitHub review, cron, analytics loops.'],
  ['Govern', 'Policy, disclosure, provenance, copyright, platform safety.'],
  ['Measure', 'Benchmarks, rankings, conversion, retention, experiments.']
];

export default function HomePage() {
  const allTools = getAllTools();
  const allPlatforms = getAllPlatforms();
  const tools = allTools.slice(0, 4);
  const platforms = allPlatforms.slice(0, 4);
  const sources = homepageSourceIds
    .map((sourceId) => getSource(sourceId))
    .filter((source): source is NonNullable<ReturnType<typeof getSource>> => Boolean(source));

  return (
    <main>
      <section className="wrap py-20 text-center md:py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,.035)] px-3 py-2 font-mono text-xs text-[#d8ddff]">
          <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_14px_var(--green)]" />
          LIVE INTELLIGENCE FOR SYNTHETIC CREATOR BUSINESSES
        </div>
        <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.065em] md:text-[82px]">
          The operating manual for AI creator businesses.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
          Tools, platform intelligence, workflows, and monetization playbooks for synthetic creators, virtual influencers, fan-platform brands, and agent-run creator operations.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a className="rounded-[9px] border border-[rgba(255,255,255,.14)] bg-gradient-to-br from-[var(--violet)] to-[#6d5dfc] px-4 py-3 text-sm font-semibold" href="/reports/ai-creator-platform-index-2026">Explore the Platform Index</a>
          <a className="rounded-[9px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold" href="/tools">Browse Tool Database</a>
        </div>
        <div className="card-glow mt-9 overflow-hidden rounded-[18px] border border-[var(--border)] bg-[rgba(15,16,22,.68)] text-left">
          <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-5 py-4 font-mono text-xs text-[var(--muted)]">
            <span>CREATOR OPS SIGNAL</span><span>UPDATED DAILY</span>
          </div>
          <div className="grid md:grid-cols-4">
            {['Policy watch|AI/synthetic content rules tracked across fan platforms.', 'Tool watch|Image/video model releases mapped by creator use case.', 'Monetization|Fan-platform, affiliate, and funnel strategies scored.', 'Automation|Agent desk workflows for publishing, QA, and analytics.'].map((item) => {
              const [label, text] = item.split('|');
              return <div key={label} className="border-b border-[var(--border-soft)] p-5 md:border-b-0 md:border-r last:md:border-r-0"><span className="font-mono text-[11px] uppercase tracking-[.06em] text-[var(--dim)]">{label}</span><strong className="mt-2 block text-sm leading-6">{text}</strong></div>;
            })}
          </div>
        </div>
      </section>

      <section className="wrap grid gap-4 md:grid-cols-[1fr_.85fr]">
        <Card className="bg-gradient-to-br from-[rgba(34,211,238,.12)] to-[rgba(255,255,255,.035)]">
          <Badge tone="green">DIRECT ANSWER</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-.05em]">What AI Creator Ops tracks</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            AI Creator Ops tracks the operating layer behind AI influencers, AI girlfriend businesses, AI models, virtual influencers, synthetic influencers, virtual creators, and AI companion brands: identity consistency, platform policy, tool choice, publishing automation, monetization, disclosure, and measurement.
          </p>
        </Card>
        <Card>
          <Badge tone="cyan">ENTITY LAYER</Badge>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">Popular search terms mapped to operator pages</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {entityLinks.map((link) => (
              <a key={link.href} className="text-[var(--cyan)]" href={link.href}>{link.label}</a>
            ))}
          </div>
        </Card>
      </section>

      <section className="wrap mt-4 grid gap-3 md:grid-cols-7">
        {pillars.map(([title, text]) => <Card key={title} className="min-h-32"><b className="block text-[15px]">{title}</b><p className="mt-2 text-xs leading-6 text-[var(--muted)]">{text}</p></Card>)}
      </section>

      <section className="wrap py-16">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold tracking-[-.05em]">Authority assets</h2>
          <p className="max-w-xl leading-7 text-[var(--muted)]">Original indexes, scoring systems, and data-backed reports designed to be cited by humans and LLMs.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-[1.2fr_.9fr_.9fr]">
          <Card className="min-h-60 bg-gradient-to-br from-[rgba(139,92,246,.18)] to-[rgba(255,255,255,.035)]">
            <Badge>FLAGSHIP REPORT</Badge><h3 className="mt-5 text-2xl font-semibold tracking-[-.04em]"><a href="/reports/ai-creator-platform-index-2026">AI Creator Platform Index 2026</a></h3><p className="mt-3 leading-7 text-[var(--muted)]">A scored map of fan platforms, social networks, and monetization rails for AI creator businesses.</p>
            <a className="mt-5 inline-block text-sm font-semibold text-[var(--cyan)]" href="/reports/ai-creator-platform-index-2026">Open the flagship report →</a>
          </Card>
          <Card><Badge tone="cyan">DATABASE</Badge><h3 className="mt-5 text-2xl font-semibold tracking-[-.04em]"><a href="/tools">Tool Index</a></h3><p className="mt-3 leading-7 text-[var(--muted)]">{allTools.length} seed tools scored by creator usefulness, workflow fit, rights clarity, and automation support.</p><a className="mt-5 inline-block text-sm font-semibold text-[var(--cyan)]" href="/tools">Browse source-backed tools →</a></Card>
          <Card><Badge tone="amber">POLICY TRACKER</Badge><h3 className="mt-5 text-2xl font-semibold tracking-[-.04em]"><a href="/platforms">Platform Risk Watch</a></h3><p className="mt-3 leading-7 text-[var(--muted)]">{allPlatforms.length} seed platforms with policy, automation, monetization, and risk notes.</p><a className="mt-5 inline-block text-sm font-semibold text-[var(--cyan)]" href="/platforms">Browse platform records →</a></Card>
        </div>
      </section>

      <section className="wrap pb-16">
        <div className="grid gap-4 md:grid-cols-[1fr_.9fr]">
          <Card>
            <Badge tone="green">FEATURED RECORDS</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.05em]">Crawlable tool and platform records</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold">Tools</h3>
                <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                  {tools.map((tool) => (
                    <li key={tool.id}><a className="text-[var(--cyan)]" href={`/tools/${tool.id}`}>{tool.name}</a> — {tool.category.replaceAll('_', ' ')}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Platforms</h3>
                <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                  {platforms.map((platform) => (
                    <li key={platform.id}><a className="text-[var(--cyan)]" href={`/platforms/${platform.id}`}>{platform.name}</a> — {platform.policy_risk} policy risk</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
          <Card>
            <Badge tone="amber">SOURCE POSTURE</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.05em]">Visible source links</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Official docs and help-center pages are the authority for policy, pricing, payout, API, and disclosure claims. YouTube or X links, when present, are labeled as market-signal context.</p>
            <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              {sources.map((source) => (
                <li key={source.id}>
                  <a className="text-[var(--cyan)]" href={source.url} rel="noopener noreferrer">{source.title}</a>{' '}
                  <span className="text-xs uppercase tracking-[.14em] text-[var(--dim)]">{sourceTypeLabel(source.source_type)}</span> — {source.publisher}, retrieved {source.retrieved_at}.
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </main>
  );
}
