# MVP Build Plan

> For Hermes: Use subagent-driven-development when turning this into code.

## Goal

Build a fast, authoritative Next.js/MDX site for AI Creator Ops with structured data, SEO/LLM SEO foundations, and an editorial/data architecture agents can maintain.

## Recommended stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui style components
- MDX content
- YAML/JSON data files
- static generation
- RSS, sitemap, llms.txt
- JSON-LD schema
- Plausible/Umami + Google Search Console later

## Phase 1: project scaffold

1. Create Next.js app in this directory.
2. Add Tailwind and content tooling.
3. Create route groups for guides, tools, platforms, comparisons, reports, glossary, news.
4. Add base layout, nav, footer, metadata.
5. Add design tokens from `docs/UI_DIRECTION.md`.

## Phase 2: content model

1. Create MDX frontmatter schema.
2. Create data files for tools, platforms, sources, comparisons.
3. Add validation scripts.
4. Add page templates for guide, tool, platform, comparison, glossary.

## Phase 3: launch content

1. Write homepage.
2. Draft first 5 pillar guides.
3. Add first 10 tool pages.
4. Add first 5 platform pages.
5. Add first 5 comparison pages.
6. Add first 20 glossary pages.
7. Add methodology page.

## Phase 4: SEO/LLM SEO

1. Generate sitemap.
2. Generate RSS/feed.
3. Add llms.txt.
4. Add JSON-LD schema.
5. Add answer blocks and citation components.
6. Add internal related-page blocks.

## Phase 5: agent workflow

1. Add content brief templates.
2. Add update brief templates.
3. Add validation CI.
4. Add PR workflow docs.
5. Add daily/weekly agent runbooks.

## First implementation recommendation

Start by building a polished static prototype: homepage + tool index + one guide + one comparison + one platform page. Nail the UI and content model before scaling pages.
