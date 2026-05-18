# AI Creator Ops Agent Operating System

AI Creator Ops should run like a small editorial intelligence desk, not a single content bot.

Canonical domain: https://aicreatorops.com

Core rule: agents may research, draft, validate, and commit local changes, but they must not publish, deploy, merge, buy tools/domains, change DNS, or send external outreach without explicit approval.

## 24/7 team shape

### 1. Source Scout

Cadence: every 8 hours.

Purpose:
- Monitor primary sources and market signals.
- Find changes in platform policies, creator monetization docs, tool pricing, AI media tooling, synthetic creator discourse, and notable examples.
- Separate primary-source evidence from weaker market chatter.

Outputs:
- Brief written to `docs/research/source-briefs/`.
- Suggested pages/data records to update.
- No public claims unless source quality is clear.

### 2. Data Maintainer

Cadence: daily.

Purpose:
- Update structured data in `data/tools.yaml`, `data/platforms.yaml`, `data/sources.yaml`, and later comparison/report data.
- Add `last_checked` and source references when source review is complete.
- Keep data schemas valid.

Outputs:
- Small local commits with structured data changes.
- Validation report.

### 3. Content Builder

Cadence: daily.

Purpose:
- Create or improve one high-value page at a time.
- Prioritize flagship assets, canonical guides, tool pages, platform pages, and comparison pages.
- Avoid bulk thin content.

Outputs:
- One page or one meaningful section update.
- Internal links and metadata.
- Validation/build pass before commit.

### 4. SEO / AEO Auditor

Cadence: daily.

Purpose:
- Improve crawlability, metadata, internal links, answer blocks, `llms.txt`, sitemap coverage, page clarity, and entity structure.
- Check whether new routes are discoverable.

Outputs:
- Small improvements or a written audit if code changes are not safe.

### 5. Weekly Editor-in-Chief

Cadence: weekly.

Purpose:
- Review what changed.
- Decide next authority pages.
- Identify gaps, stale pages, and monetization opportunities.
- Keep the site from drifting into generic AI content.

Outputs:
- Weekly editorial plan in `docs/research/editorial-plans/`.

## Guardrails

Agents must:
- Prefer primary sources for factual claims.
- Mark uncertain claims as pending source review.
- Run `pnpm validate:content`, `pnpm test`, `pnpm typecheck`, and `pnpm build` before committing code/content changes when practical.
- Make small commits with clear messages.
- Stop if the working tree is dirty with unrelated changes.
- Never merge/deploy/publish externally without approval.
- Never add credentials or secrets to the repo.

## First priority queue

1. Finish `AI Creator Platform Index 2026` with source-backed criteria.
2. Expand `/methodology` into a real scoring methodology.
3. Create `What Is an AI Creator?` as the first canonical guide.
4. Source-review Fanvue, Instagram, TikTok, OnlyFans, and YouTube Shorts platform pages.
5. Add tool/resource link handling and typed source records.
6. Create `Fanvue vs OnlyFans for AI Creators` once the methodology is credible.
