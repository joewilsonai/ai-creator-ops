const navItems = [
  ['Guides', '/guides'],
  ['Tools', '/tools'],
  ['Platforms', '/platforms'],
  ['Comparisons', '/comparisons'],
  ['Reports', '/reports'],
  ['Glossary', '/glossary']
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[rgba(7,8,12,.72)] backdrop-blur-xl">
      <div className="wrap flex h-[72px] items-center justify-between">
        <a className="flex items-center gap-3 font-semibold tracking-[-0.02em]" href="/">
          <span className="h-[30px] w-[30px] rounded-[9px] bg-gradient-to-br from-[var(--violet)] to-[var(--cyan)] shadow-[0_0_34px_rgba(139,92,246,.35)]" />
          <span>AI Creator Ops</span>
        </a>
        <nav className="hidden gap-6 text-[13px] font-medium text-[var(--muted)] md:flex">
          {navItems.map(([label, href]) => <a key={href} className="hover:text-[var(--text)]" href={href}>{label}</a>)}
        </nav>
        <a className="rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,.03)] px-3.5 py-2 text-[13px] font-medium" href="/newsletter">
          Creator Ops Brief
        </a>
      </div>
    </header>
  );
}
