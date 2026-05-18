# AI Creator Ops Agent Operating System

AI Creator Ops should run like a small editorial intelligence desk, not a single content bot.

Canonical domain: https://aicreatorops.com

Core rule: agents operate in autonomy-first mode. They should research, decide, edit, validate, commit, and push improvements without waiting for human approval. Validated commits to `main` may flow through the standard GitHub/hosting deployment pipeline. They must not buy tools/domains, change billing, change DNS, add secrets, or send external outreach.

## 24/7 team shape

### 1. Source Scout

Cadence: every 8 hours.

Purpose:
- Monitor primary sources and market signals.
- Search YouTube and X as first-class signal sources for current discourse, creator examples, tutorials, tool demos, terminology shifts, announcements, and emerging monetization patterns.
- Find changes in platform policies, creator monetization docs, tool pricing, AI media tooling, synthetic creator discourse, and notable examples.
- Separate primary-source evidence from weaker market chatter; YouTube/X findings are useful market signals but should not become hard factual claims unless backed by primary sources.

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
- Capture real market/search language — AI influencer, AI girlfriend, virtual influencer, synthetic influencer, AI model, and virtual creator — while mapping it into the AI Creator Ops operator framework.
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
- Operate without waiting for approval on routine research, content, data, SEO/AEO, and code-quality improvements.
- Prefer primary sources for factual claims.
- Mark uncertain claims as pending source review.
- Run `pnpm validate:content`, `pnpm test`, `pnpm typecheck`, and `pnpm build` before committing code/content changes when practical.
- Make small commits with clear messages and push validated commits to `origin/main` when the remote is configured.
- If validation fails, either fix the failure or commit only a clear research/audit note; do not leave broken public routes.
- If the working tree is dirty with unrelated changes, inspect carefully and avoid overwriting user work; create additive files or stop with a note if conflict risk is high.
- Never add credentials or secrets to the repo.
- Never buy services, alter billing, change DNS, or send external outreach.
- Never manufacture sources, fake firsthand experience, or inflate weak evidence into hard claims.

## First priority queue

1. Finish `AI Creator Platform Index 2026` with source-backed criteria.
2. Expand `/methodology` into a real scoring methodology.
3. Create `What Is an AI Creator?` as the first canonical guide.
4. Source-review Fanvue, Instagram, TikTok, OnlyFans, and YouTube Shorts platform pages.
5. Add tool/resource link handling and typed source records.
6. Create `Fanvue vs OnlyFans for AI Creators` once the methodology is credible.
