# Weekly editorial plan: 2026-05-18

Role: autonomous weekly Editor-in-Chief  
Canonical domain: https://aicreatorops.com  
Positioning: Build the creator business, not just the character.

## Executive judgment

AI Creator Ops is staying on strategy: the strongest current opportunity is not generic AI news or broad tool blogging. The market is visibly converging around practical, monetizable synthetic persona workflows — especially `AI influencer`, `AI model`, `AI girlfriend`, `virtual influencer`, and Fanvue/Instagram-style funnels — while the site's editorial advantage is source-backed operations: disclosure, identity consistency, platform risk, monetization mechanics, automation limits, and methodology.

This week should move from seed pages toward a citable operating desk:

1. Finish primary-source review for the remaining high-risk fan platform: OnlyFans.
2. Turn the already-reviewed Fanvue, Instagram, TikTok, and YouTube Shorts findings into better public page sections.
3. Promote the Platform Index from a draft shell into a dataset-backed report with visible source status and scoring readiness.
4. Build the first canonical guides around search language people actually use: `AI influencer`, `AI girlfriend business`, `virtual influencer`, `AI model`, and `AI creator`.
5. Keep comparison pages gated until both sides have comparable source coverage.

## What changed in the market

### High-confidence changes from internal source briefs

- Fanvue is currently the clearest source-backed fan-platform fit for AI creator monetization. Its own Help Centre says it welcomes AI creators and allows fully AI-generated content, but requires clear disclosure and adds constraints around deepfakes/face-swaps, real-person bodies, age appearance, copyright, moderation, creator earnings, payout readiness, and verification.
- Instagram remains a discovery/funnel surface rather than a simple automation target. Meta's Content Publishing API supports professional-account publishing workflows, but with permissions, public media hosting, endpoint/rate-limit constraints, and caveats such as branded-content tag limitations.
- TikTok and YouTube Shorts both matter for discovery, but the useful editorial angle is not “post AI videos and get paid.” It is disclosure, upload/API constraints, originality/repetitiveness risk, and funnel design.
- Public market language is messier than the brand category. `AI model`, `AI girlfriend`, `AI influencer`, `AI OFM`, and `Fanvue` are recurring demand signals, especially in social/video tutorials.

### Market-signal findings from current search

Use as demand/terminology signal only, not as hard factual claims:

- Web and YouTube search continues surfacing 2026 tutorials around creating AI influencers/AI models, often using Higgsfield, then posting to Instagram/TikTok and funneling to Fanvue.
- Recent X chatter repeats a simple playbook: create a consistent AI girl/model, post short-form social content, funnel to Fanvue, and sell subscriptions or digital products. The same threads often contain promotional or unverifiable earnings claims.
- OnlyFans appears in search language, but current source coverage in the repo is weak. Secondary pages claim new AI-content rules, but AI Creator Ops should not publish those claims until official OnlyFans policy/help sources are captured cleanly.
- Higgsfield is increasingly visible in YouTube/X market chatter and deserves a primary-source tool review before being added to `data/tools.yaml` or public recommendations.

## Site and data status reviewed

### Recent git history

Recent commits show the project is moving in the right direction:

- `Improve SEO entity glossary coverage`
- `Add what is an AI creator guide`
- `Normalize source references in structured data`
- `Add Fanvue AI creator source brief`
- `Add Instagram AI labeling source brief`
- `docs: require youtube and x source scouting`
- `Add YouTube Shorts source brief`
- `docs: map ai creator ops to public search terms`

### Data records reviewed

Current structured records:

- `data/platforms.yaml`
  - Source-reviewed: Instagram, TikTok, Fanvue, YouTube Shorts.
  - Pending/weak: OnlyFans.
  - All scoring fields remain null, which is appropriate until methodology and criteria are operationalized.
- `data/tools.yaml`
  - Fanvue has source references because it is also tracked as a monetization tool/platform entity.
  - Most tool records remain unsourced seed entries: Runway, Kling, GPT Image, FaceFusion, Buffer, Metricool, Zernio, Midjourney, OnlyFans.
- `data/sources.yaml`
  - Contains primary source records for Meta/Instagram, Fanvue, TikTok, and YouTube.
- `data/comparisons.yaml`
  - Still empty. This is correct until comparison methodology and source parity are strong enough.

### Live route structure reviewed

Public routes currently include:

- `/`
- `/tools`
- `/tools/[slug]`
- `/platforms`
- `/platforms/[slug]`
- `/guides`
- `/guides/what-is-an-ai-creator`
- `/glossary`
- `/glossary/[slug]`
- `/reports`
- `/reports/ai-creator-platform-index-2026`
- `/methodology`
- `/comparisons`
- `/llms.txt`
- `/sitemap.xml`
- `/robots.txt`

The route base is strong for an authority site, but major pages need deeper trust layers, answer blocks, and source-specific sections.

## Source-backed pages/data records updated recently

Already updated by recent agent work:

- `data/platforms.yaml`
  - Instagram: source-backed publishing automation, AI disclosure, AI Info labels, branded-content caveat.
  - TikTok: source-backed Content Posting API and AIGC labeling notes.
  - Fanvue: source-backed AI content allowance, disclosure, deepfake/face-swap verification, age/copyright/moderation constraints, standard 80/20 creator earnings, payout workflow caveats.
  - YouTube Shorts: source-backed synthetic media disclosure, upload API, quota/compliance audit, Shorts monetization, repetitive/mass-produced content risk.
- `data/tools.yaml`
  - Fanvue source metadata added.
- `data/sources.yaml`
  - Primary source records added for Meta, Fanvue, TikTok, and YouTube.
- `/guides/what-is-an-ai-creator`
  - Added as the first canonical guide and correctly maps popular terms into the AI Creator Ops framework.

No new public factual claims were added in this weekly plan. This file is an internal editorial planning document.

## Stale or weakly sourced claims

Priority weak spots:

1. **OnlyFans**
   - `data/platforms.yaml` and `data/tools.yaml` include OnlyFans as high-risk/pending source review.
   - No public comparison with Fanvue should be launched until official OnlyFans AI-content, payout, identity/provenance, and automation/API policy sources are captured.

2. **Tool records**
   - Runway, Kling, GPT Image, FaceFusion, Buffer, Metricool, Zernio, and Midjourney are seed records without source references.
   - Tool pages are safe because they label source review as pending, but they are not yet authority pages.

3. **Methodology page**
   - `/methodology` is currently too thin for a flagship trust layer. It names categories but does not yet define scoring scales, evidence hierarchy, update cadence, correction policy, or ranking thresholds.

4. **Platform Index status copy**
   - `/reports/ai-creator-platform-index-2026` still says source status is broadly pending even though four platform records now have primary-source review. The page should be updated to report counts/status dynamically.

5. **Comparison cluster**
   - `/comparisons` exists, but `data/comparisons.yaml` is empty. This is safer than publishing weak comparisons, but the next comparison should only ship after source parity.

6. **Higgsfield chatter**
   - Higgsfield is a real market signal in X/YouTube search, but not yet primary-source reviewed. Do not add it as a recommended tool until official product/pricing/API/rights docs are captured.

## Are agents using real search language without becoming spammy?

Current verdict: mostly yes.

What is working:

- The project brief and public guide now explicitly include `AI influencer`, `AI girlfriend`, `virtual influencer`, `synthetic influencer`, `AI model`, and `AI companion` without abandoning the operator-first AI Creator Ops category.
- Source briefs correctly downgrade YouTube/X findings to market-signal evidence and avoid repeating earnings claims as fact.
- The `What is an AI creator?` guide uses search terms naturally and maps them to operating controls.

Risks to watch:

- `AI girlfriend` and `AI model` pages can easily become lurid or affiliate-style if not framed around consent, disclosure, age/likeness risk, platform policy, chat claims, and monetization mechanics.
- `best` and `vs` pages must not ship without criteria and source parity.
- Agents should avoid copying the hustle-culture promise of X/YouTube tutorials. The editorial stance should be: the playbook exists; the risk controls and economics are usually underspecified.

## Flagship asset progress

### AI Creator Platform Index 2026

Status: promising draft, not yet a finished flagship.

Progress:

- Route exists.
- Criteria and weights exist.
- Seed platform dataset exists.
- Four platform records have source-backed notes.

Needed next:

- Dynamic source-status counts.
- Clear definition of “source reviewed” vs “scored.”
- Criteria scales, not just weights.
- No numeric rankings until all major records have comparable source review.

### Methodology

Status: route exists but too thin.

Needed next:

- Expand into a real methodology page with source hierarchy, score definitions, 0–5 scale, evidence requirements, update cadence, and correction policy.

### Canonical guides

Status: first canonical guide shipped.

Needed next:

- Build `How to Build an AI Influencer Brand` and `How to Monetize an AI Influencer or AI Girlfriend Brand` with strict source-backed claims and no earnings hype.

### Platform pages

Status: generated pages exist and render source-backed notes where data is present.

Needed next:

- Add custom “Key facts for AI creators” sections to Fanvue, Instagram, TikTok, and YouTube Shorts pages from structured data.
- Source-review OnlyFans.

### Comparison pages

Status: intentionally gated.

Needed next:

- Prepare Fanvue vs OnlyFans only after OnlyFans source review is complete.

## Recommended next content cluster

Build the **AI influencer monetization and platform-risk cluster** next.

Why this cluster:

- It matches current search demand (`AI influencer`, `AI model`, `AI girlfriend business`, `Fanvue`, `OnlyFans`, `Instagram`).
- It uses the strongest existing source base: Fanvue, Instagram, TikTok, YouTube Shorts.
- It differentiates AI Creator Ops from generic tutorial/affiliate pages by focusing on operations, disclosure, policy, payout mechanics, and risk-adjusted monetization.

Cluster sequence:

1. Source brief: OnlyFans AI content, identity/provenance, payout, and automation/API policy.
2. Public page upgrade: `/platforms/fanvue` key facts and monetization caveats.
3. Public page upgrade: `/platforms/instagram` key facts and disclosure/automation caveats.
4. Guide: `/guides/how-to-monetize-an-ai-influencer-or-ai-girlfriend-brand`.
5. Comparison: `/comparisons/fanvue-vs-onlyfans` only after source parity.

## Highest-leverage next 5 tasks

1. **OnlyFans source review**
   - Capture official AI-content, acceptable-use, creator verification, payout, and API/automation constraints.
   - Update `data/sources.yaml`, `data/platforms.yaml`, and `data/tools.yaml`.

2. **Upgrade `/methodology`**
   - Add platform and tool scoring scales, source hierarchy, update cadence, correction policy, and “when not to score” rules.

3. **Upgrade `/reports/ai-creator-platform-index-2026`**
   - Show source-reviewed counts, pending records, and a non-ranked readiness table.
   - Keep scores withheld until criteria are fully operational.

4. **Add key-facts blocks to generated platform pages**
   - Start with Fanvue and Instagram because they have the strongest source briefs.
   - Use structured data first; avoid duplicating facts manually across pages unless necessary.

5. **Primary-source review Higgsfield before adding it to the tool index**
   - It is now a recurring market signal for AI influencer/AI model workflows.
   - Add only after official docs clarify product capabilities, pricing, commercial rights, and automation/API posture.

## Editorial guardrails for the coming week

- Do not publish earnings claims from YouTube/X.
- Do not call Fanvue “risk-free”; call it comparatively explicit about AI content with disclosure, verification, payout, and moderation constraints.
- Do not publish Fanvue vs OnlyFans until OnlyFans has comparable source coverage.
- Use `AI influencer`, `AI girlfriend`, `AI model`, `virtual influencer`, and `synthetic influencer` in titles/answer blocks where search intent warrants it, but always map the terms into operations and risk controls.
- Keep `AI Creator Ops` as the serious category and site entity.

## Changes made in this run

- Created this dated editorial plan at `docs/research/editorial-plans/2026-05-18-editorial-plan.md`.
- No public route, schema, or structured data changes were made in this run.
