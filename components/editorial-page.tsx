import { Badge, Card } from '@/components/ui';
import { getSource } from '@/lib/data';
import type { EditorialPage } from '@/lib/editorial';

function sourceTypeLabel(sourceType: string) {
  return sourceType === 'market_signal' ? 'market signal' : `${sourceType} source`;
}

export function EditorialArticle({ page }: { page: EditorialPage }) {
  const sources = page.sourceIds
    .map((id) => getSource(id))
    .filter((source): source is NonNullable<ReturnType<typeof getSource>> => Boolean(source));

  return (
    <main className="wrap py-16">
      <article className="mx-auto max-w-5xl">
        <Badge tone={page.badge === 'COMPARISON' ? 'green' : 'cyan'}>{page.badge}</Badge>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.06em] md:text-7xl">{page.shortTitle}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{page.description}</p>

        <section className="mt-8 grid gap-4 md:grid-cols-[1fr_.45fr]">
          <Card className="bg-gradient-to-br from-[rgba(34,211,238,.12)] to-[rgba(255,255,255,.035)]">
            <h2 className="text-2xl font-semibold tracking-[-.04em]">Direct answer</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">{page.directAnswer}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Last updated</h2>
            <p className="mt-2 font-mono text-sm text-[var(--muted)]">{page.lastUpdated}</p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Source posture: public editorial page using primary sources for platform policy, API, payout, and disclosure claims.
            </p>
          </Card>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {page.keyFacts.map((fact) => (
            <Card key={fact}>
              <h2 className="font-semibold">Key fact</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{fact}</p>
            </Card>
          ))}
        </section>

        {page.framework ? (
          <section className="mt-12">
            <h2 className="text-3xl font-semibold tracking-[-.05em]">Operator framework</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {page.framework.map((item) => (
                <Card key={item.label}>
                  <h3 className="font-semibold">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.detail}</p>
                </Card>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-semibold tracking-[-.05em]">{section.heading}</h2>
              <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">{section.body}</p>
              {section.bullets ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted)]">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              ) : null}
            </section>
          ))}
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold tracking-[-.04em]">Related AI Creator Ops pages</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {page.internalLinks.map((link) => (
                <li key={link.href}>
                  <a className="text-[var(--cyan)]" href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold tracking-[-.04em]">FAQ</h2>
            <div className="mt-5 space-y-5 text-sm leading-6 text-[var(--muted)]">
              <div>
                <h3 className="font-semibold text-white">Is this page legal or financial advice?</h3>
                <p className="mt-2">No. It is an operator research brief. Verify current platform terms, tax/payment obligations, and legal requirements before launch.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Can this apply to AI influencers and AI girlfriend brands?</h3>
                <p className="mt-2">Yes. The framework covers AI influencers, virtual influencers, synthetic influencers, AI models, AI girlfriend brands, virtual creators, and AI companion creator operations.</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-[-.05em]">Sources</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
            {sources.map((source) => (
              <li key={source.id}>
                <a className="text-[var(--cyan)]" href={source.url} rel="noopener noreferrer">{source.title}</a> <span className="text-xs uppercase tracking-[.18em] text-[var(--dim)]">{sourceTypeLabel(source.source_type)}</span> — {source.publisher}, retrieved {source.retrieved_at}. {source.notes}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
