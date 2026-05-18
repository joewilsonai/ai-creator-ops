import { Badge, Card } from '@/components/ui';
import { getAllTools, getAllPlatforms } from '@/lib/data';

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
  const tools = getAllTools().slice(0, 4);
  const platforms = getAllPlatforms().slice(0, 4);

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

      <section className="wrap grid gap-3 md:grid-cols-7">
        {pillars.map(([title, text]) => <Card key={title} className="min-h-32"><b className="block text-[15px]">{title}</b><p className="mt-2 text-xs leading-6 text-[var(--muted)]">{text}</p></Card>)}
      </section>

      <section className="wrap py-16">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold tracking-[-.05em]">Authority assets</h2>
          <p className="max-w-xl leading-7 text-[var(--muted)]">Original indexes, scoring systems, and data-backed reports designed to be cited by humans and LLMs.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-[1.2fr_.9fr_.9fr]">
          <Card className="min-h-60 bg-gradient-to-br from-[rgba(139,92,246,.18)] to-[rgba(255,255,255,.035)]">
            <Badge>FLAGSHIP REPORT</Badge><h3 className="mt-5 text-2xl font-semibold tracking-[-.04em]">AI Creator Platform Index 2026</h3><p className="mt-3 leading-7 text-[var(--muted)]">A scored map of fan platforms, social networks, and monetization rails for AI creator businesses.</p>
          </Card>
          <Card><Badge tone="cyan">DATABASE</Badge><h3 className="mt-5 text-2xl font-semibold tracking-[-.04em]">Tool Index</h3><p className="mt-3 leading-7 text-[var(--muted)]">{tools.length} seed tools scored by creator usefulness, workflow fit, rights clarity, and automation support.</p></Card>
          <Card><Badge tone="amber">POLICY TRACKER</Badge><h3 className="mt-5 text-2xl font-semibold tracking-[-.04em]">Platform Risk Watch</h3><p className="mt-3 leading-7 text-[var(--muted)]">{platforms.length} seed platforms with policy, automation, monetization, and risk notes.</p></Card>
        </div>
      </section>
    </main>
  );
}
