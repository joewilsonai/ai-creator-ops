import type { ReactNode } from 'react';

export function Badge({ children, tone = 'violet' }: { children: ReactNode; tone?: 'violet' | 'cyan' | 'green' | 'amber' }) {
  const colors = {
    violet: 'text-[#dcd7ff] border-[rgba(139,92,246,.28)] bg-[rgba(139,92,246,.12)]',
    cyan: 'text-[#c7f8ff] border-[rgba(34,211,238,.28)] bg-[rgba(34,211,238,.10)]',
    green: 'text-[#c9ffe8] border-[rgba(52,211,153,.28)] bg-[rgba(52,211,153,.10)]',
    amber: 'text-[#ffe8b4] border-[rgba(245,158,11,.28)] bg-[rgba(245,158,11,.10)]'
  }[tone];
  return <span className={`inline-flex rounded-full border px-2.5 py-1 font-mono text-[11px] ${colors}`}>{children}</span>;
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-5 ${className}`}>{children}</div>;
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="wrap py-16 md:py-24">
      <Badge tone="cyan">{eyebrow}</Badge>
      <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.06em] md:text-7xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{description}</p>
    </section>
  );
}
