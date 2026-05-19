import { PageHero, Card, Badge } from '@/components/ui';

export const metadata = {
  title: 'AI Creator Ops Methodology: Tool, Platform, and Comparison Scoring',
  description:
    'Transparent methodology for AI Creator Ops rankings, platform index scores, tool records, comparisons, source hierarchy, and citation review.',
  alternates: { canonical: '/methodology' },
  openGraph: {
    title: 'AI Creator Ops Methodology',
    description: 'How AI Creator Ops scores tools, platforms, comparisons, and source confidence for AI creator businesses.',
    url: '/methodology',
    type: 'article'
  }
};

export default function MethodologyPage() {
  return (
    <main>
      <PageHero eyebrow="METHODOLOGY" title="How AI Creator Ops scores tools and platforms" description="A public methodology is part of the trust layer: every ranking needs criteria, source hierarchy, last-checked metadata, and a correction path." />
      <section className="wrap pb-8">
        <Card>
          <Badge tone="green">DIRECT ANSWER</Badge>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            AI Creator Ops scores platforms, tools, and comparisons by operator utility for AI creator businesses: policy clarity, monetization fit, automation support, discovery value, workflow repeatability, rights clarity, source quality, and enforcement risk. Rankings are provisional when primary-source coverage is incomplete and should show last-checked metadata on the public page.
          </p>
        </Card>
      </section>
      <section className="wrap grid gap-4 md:grid-cols-3">
        <Card><Badge>TOOLS</Badge><h2 className="mt-4 text-xl font-semibold">Tool score</h2><p className="mt-3 text-[var(--muted)]">Creator usefulness, workflow quality, automation/API support, rights clarity, pricing/value, reliability, learning curve, and fit for AI influencer, AI model, virtual creator, or AI companion operations.</p></Card>
        <Card><Badge tone="cyan">PLATFORMS</Badge><h2 className="mt-4 text-xl font-semibold">Platform score</h2><p className="mt-3 text-[var(--muted)]">Policy clarity, monetization, discovery, API/scheduler support, fan tools, payout or conversion fit, and enforcement risk for synthetic and AI-generated creator brands.</p></Card>
        <Card><Badge tone="green">SOURCES</Badge><h2 className="mt-4 text-xl font-semibold">Source hierarchy</h2><p className="mt-3 text-[var(--muted)]">Primary docs first, then official changelogs/help centers, then secondary reporting. YouTube and X are labeled as market-signal context unless supported by official documentation.</p></Card>
      </section>
      <section className="wrap mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Comparison criteria</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">
            <li>• Which option is better by use case, not a universal winner.</li>
            <li>• Clear criteria table: policy, monetization, automation, workflow quality, pricing/value, and risk.</li>
            <li>• Visible source links for policy, pricing, API, payout, and terms claims.</li>
            <li>• Current video sections can show workflow context but do not replace official docs.</li>
          </ul>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold tracking-[-.04em]">Entity coverage</h2>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">The methodology deliberately maps messy public terms into operator categories, so pages remain discoverable for AI influencer, AI girlfriend, AI model, virtual influencer, synthetic influencer, virtual creator, and AI companion searches without becoming keyword-stuffed.</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a className="text-[var(--cyan)]" href="/glossary/ai-influencer">AI influencer</a>
            <a className="text-[var(--cyan)]" href="/glossary/ai-girlfriend-business">AI girlfriend business</a>
            <a className="text-[var(--cyan)]" href="/glossary/virtual-influencer">Virtual influencer</a>
            <a className="text-[var(--cyan)]" href="/glossary/synthetic-influencer">Synthetic influencer</a>
            <a className="text-[var(--cyan)]" href="/glossary/ai-creator">AI model / AI creator</a>
            <a className="text-[var(--cyan)]" href="/glossary/dm-automation">AI companion ops</a>
          </div>
        </Card>
      </section>
    </main>
  );
}
