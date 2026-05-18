# Agent Team

## Operating model

Agents maintain the site like a media desk plus data operations team. They should not spam low-quality posts. They should detect changes, update structured data, draft sourced content, and open reviewable PRs.

## Roles

1. Scout Agent
- monitors sources, competitors, product pages, docs, X, GitHub, changelogs, newsletters
- creates update briefs

2. Source Agent
- extracts primary-source facts and citations
- records source reliability and retrieval date

3. SEO Strategist Agent
- maps keywords, intent, clusters, internal links, and content gaps

4. LLM SEO / AEO Agent
- improves answer blocks, entity clarity, structured summaries, glossary links, and citation density

5. Writer Agent
- drafts useful, non-generic content from briefs and sources

6. Editor Agent
- removes fluff, improves structure, sharpens POV, checks usefulness

7. Fact Checker Agent
- verifies claims and blocks unsupported statements

8. Data Curator Agent
- updates YAML/JSON datasets for tools, platforms, policies, pricing, comparisons

9. Internal Link Agent
- finds contextual links and updates related-page blocks

10. Monetization Agent
- identifies affiliate, template, lead magnet, report, sponsor opportunities without degrading trust

11. Analytics Agent
- reviews Search Console/analytics/rankings and recommends refreshes or new pages

12. Quality Gate Agent
- blocks thin content, duplicate pages, hallucinated claims, weak sourcing, spam patterns

## Publishing authority

Default:
- Agents may draft and open PRs.
- New pages and major claims require review.
- Low-risk data refreshes can later be auto-merged only after validators exist.

GitHub control plane rule:
- Unmerged PR = proposal.
- Merged main branch = approved source of truth.
