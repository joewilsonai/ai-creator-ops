import type { Metadata } from 'next';
import { Badge, Card } from '@/components/ui';
import { getSource } from '@/lib/data';

const canonical = 'https://aicreatorops.com/guides/what-is-an-ai-creator';
const lastUpdated = '2026-05-18';

const sourceIds = [
  'fanvue-ai-content-allowed',
  'fanvue-ai-generated-model-definition',
  'meta-community-standards-misinformation-ai-disclosure',
  'tiktok-aigc-support',
  'youtube-help-altered-synthetic-content'
];

const relatedLinks = [
  ['/platforms/fanvue', 'Fanvue for AI creators'],
  ['/platforms/instagram', 'Instagram for AI creators'],
  ['/platforms/tiktok', 'TikTok for AI creators'],
  ['/reports/ai-creator-platform-index-2026', 'AI Creator Platform Index 2026'],
  ['/methodology', 'Creator platform methodology']
];

export const metadata: Metadata = {
  title: 'What Is an AI Creator? Meaning, AI Influencer Overlap, and Business Model',
  description:
    'A practical definition of AI creators, AI influencers, virtual influencers, synthetic influencers, AI models, and AI girlfriend brands — with the operating model behind the category.',
  alternates: { canonical },
  openGraph: {
    title: 'What Is an AI Creator?',
    description:
      'An operator-first definition of AI creators and the business systems behind AI influencer, virtual influencer, AI model, and AI girlfriend brands.',
    url: canonical,
    type: 'article'
  }
};

export default function WhatIsAnAiCreatorPage() {
  const sources = sourceIds.map((id) => getSource(id)).filter((source): source is NonNullable<ReturnType<typeof getSource>> => Boolean(source));

  return (
    <main className="wrap py-16">
      <article className="mx-auto max-w-5xl">
        <Badge tone="cyan">GUIDE</Badge>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.06em] md:text-7xl">
          What is an AI creator?
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          An AI creator is a creator-brand or media property built around AI-generated, AI-assisted, or synthetic talent. Public searchers often call the same category an AI influencer, virtual influencer, synthetic influencer, AI model, or AI girlfriend brand.
        </p>

        <section className="mt-8 grid gap-4 md:grid-cols-[1fr_.45fr]">
          <Card className="bg-gradient-to-br from-[rgba(34,211,238,.12)] to-[rgba(255,255,255,.035)]">
            <h2 className="text-2xl font-semibold tracking-[-.04em]">Direct answer</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              An AI creator is not just a generated face. It is an operating system for a synthetic or AI-assisted persona: identity design, content production, platform distribution, disclosure, monetization, automation, and analytics. The business risk is usually not image quality alone; it is whether the operator can keep the character consistent, compliant, and commercially useful across platforms.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Last updated</h2>
            <p className="mt-2 font-mono text-sm text-[var(--muted)]">{lastUpdated}</p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Source posture: definition and framework page. Platform-policy examples cite primary sources where available.
            </p>
          </Card>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <Card>
            <h2 className="font-semibold">Common public terms</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">
              <li>• AI influencer</li>
              <li>• virtual influencer</li>
              <li>• synthetic influencer</li>
              <li>• AI model</li>
              <li>• AI girlfriend or AI companion brand</li>
            </ul>
          </Card>
          <Card>
            <h2 className="font-semibold">Operator jobs</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">
              <li>• Maintain identity continuity</li>
              <li>• Publish to discovery platforms</li>
              <li>• Monetize without unsupported earnings claims</li>
              <li>• Track disclosure and platform risk</li>
              <li>• Build repeatable production workflows</li>
            </ul>
          </Card>
          <Card>
            <h2 className="font-semibold">What it is not</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">
              <li>• Not a one-off image prompt</li>
              <li>• Not permission to impersonate real people</li>
              <li>• Not a guaranteed fan-platform income stream</li>
              <li>• Not exempt from ad, disclosure, age, IP, or platform rules</li>
            </ul>
          </Card>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-[-.05em]">AI creator vs AI influencer vs virtual influencer</h2>
          <div className="mt-5 overflow-hidden rounded-[18px] border border-[var(--border)]">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[rgba(255,255,255,.045)] text-[var(--muted)]">
                <tr>
                  <th className="border-b border-[var(--border)] p-4">Term</th>
                  <th className="border-b border-[var(--border)] p-4">Practical meaning</th>
                  <th className="border-b border-[var(--border)] p-4">Operator implication</th>
                </tr>
              </thead>
              <tbody className="text-[var(--muted)]">
                <tr>
                  <td className="border-b border-[var(--border-soft)] p-4 font-semibold text-white">AI creator</td>
                  <td className="border-b border-[var(--border-soft)] p-4">Umbrella term for AI-assisted or synthetic creator businesses.</td>
                  <td className="border-b border-[var(--border-soft)] p-4">Think in systems: character, content, channels, monetization, governance, and measurement.</td>
                </tr>
                <tr>
                  <td className="border-b border-[var(--border-soft)] p-4 font-semibold text-white">AI influencer</td>
                  <td className="border-b border-[var(--border-soft)] p-4">Public-facing synthetic persona optimized for attention, social content, and audience growth.</td>
                  <td className="border-b border-[var(--border-soft)] p-4">Instagram, TikTok, YouTube Shorts, and X strategy matter as much as generation quality.</td>
                </tr>
                <tr>
                  <td className="border-b border-[var(--border-soft)] p-4 font-semibold text-white">Virtual or synthetic influencer</td>
                  <td className="border-b border-[var(--border-soft)] p-4">A fictional or computer-generated public persona; may use AI, CGI, illustration, or mixed production.</td>
                  <td className="border-b border-[var(--border-soft)] p-4">Continuity, authorship, disclosure, and audience trust are core production requirements.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">AI model / AI girlfriend brand</td>
                  <td className="p-4">Search-market language for synthetic persona businesses, often tied to fan platforms or companion-style monetization.</td>
                  <td className="p-4">Requires especially careful review of identity, age appearance, consent, chat claims, payout terms, and platform policy.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-[.8fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-.05em]">The AI Creator Ops framework</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Most weak AI creator projects stop at “make attractive images.” A durable AI creator business needs seven operating layers.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              ['Identity', 'Character bible, visual references, voice, boundaries, lore, and continuity rules.'],
              ['Production', 'Image, video, copy, QA, asset management, and provenance-aware workflows.'],
              ['Distribution', 'Discovery channels such as Instagram, TikTok, YouTube Shorts, X, newsletters, and creator websites.'],
              ['Monetization', 'Fan platforms, subscriptions, paid messages, sponsorships, products, affiliate funnels, and owned audience paths.'],
              ['Automation', 'Scheduling, analytics, DM support, content routing, editorial review, and agent-assisted operations.'],
              ['Governance', 'Disclosure, age/likeness controls, copyright checks, platform rules, and moderation risk.'],
              ['Measurement', 'Retention, conversion, audience quality, content performance, and risk-adjusted revenue.']
            ].map(([label, text]) => (
              <Card key={label}>
                <h3 className="font-semibold">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-[-.05em]">Policy reality: allowed does not mean risk-free</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
            Primary-source platform rules increasingly distinguish between synthetic media that is disclosed and safe versus synthetic media that deceives, impersonates, violates intellectual property, or creates age/likeness risk. Fanvue, for example, says it welcomes AI creators and allows fully AI-generated content, but also requires clear disclosure and sets boundaries around deepfakes, real-person bodies, age appearance, copyright, and moderation. Meta, TikTok, and YouTube all maintain disclosure or labeling rules for realistic altered or synthetic media in specific contexts.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold tracking-[-.04em]">FAQ</h2>
            <div className="mt-5 space-y-5">
              <div>
                <h3 className="font-semibold">Can an AI creator make money?</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Yes, but AI Creator Ops treats monetization as an operating question, not a promise. Revenue depends on audience, platform eligibility, disclosure, content quality, conversion, retention, payout rules, and enforcement risk.</p>
              </div>
              <div>
                <h3 className="font-semibold">Is an AI girlfriend brand the same as an AI creator?</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">It can be one subtype. The AI girlfriend term usually implies companion-style positioning or fan-platform monetization, so it needs stricter controls around representation, consent, age appearance, chat claims, and platform policy.</p>
              </div>
              <div>
                <h3 className="font-semibold">Do AI creators need disclosure?</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Often, yes. The exact requirement depends on the platform, media type, realism, and context. Treat disclosure as a default operating control, then verify each platform’s current rules before publishing.</p>
              </div>
            </div>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold tracking-[-.04em]">Related AI Creator Ops pages</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {relatedLinks.map(([href, label]) => (
                <li key={href}>
                  <a className="text-[var(--cyan)]" href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-[-.05em]">Sources</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
            {sources.map((source) => (
              <li key={source.id}>
                <a className="text-[var(--cyan)]" href={source.url}>{source.title}</a> — {source.publisher}, retrieved {source.retrieved_at}. {source.notes}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
