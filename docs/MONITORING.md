# AI Creator Ops Monitoring

This site tracks progress with three loops: search visibility, on-site behavior, and weekly editorial actions.

## 1. Required setup

### Google Search Console

Add `https://aicreatorops.com` as a property in Google Search Console.

Submit:

- `https://aicreatorops.com/sitemap.xml`
- `https://aicreatorops.com/robots.txt`
- `https://aicreatorops.com/llms.txt`

Track weekly:

- clicks
- impressions
- CTR
- average position
- indexed pages
- top queries
- top pages
- indexing/crawl errors

Core query groups:

- `ai creator`, `ai creator tools`, `ai creator platform`
- `ai influencer`, `ai influencer monetization`, `ai influencer tools`
- `ai girlfriend business`, `ai girlfriend monetization`
- `virtual influencer`, `synthetic influencer`, `virtual creator`
- `fanvue vs onlyfans`, `fanvue ai creator`, `onlyfans ai content`

### Web analytics

The app supports Plausible and GA4 without code changes.

Preferred simple setup:

```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=aicreatorops.com
```

Optional custom Plausible/self-hosted script:

```bash
NEXT_PUBLIC_PLAUSIBLE_SRC=https://plausible.io/js/script.outbound-links.js
```

GA4 fallback/parallel setup:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

The app automatically tracks:

- outbound link clicks
- newsletter CTA clicks
- Platform Index clicks
- Tool Index clicks
- comparison clicks

Plausible receives custom events when available. GA4 receives matching events when configured.

## 2. Weekly snapshot workflow

Every week, export a JSON snapshot into:

```text
data/monitoring/YYYY-MM-DD.json
```

Use the template in `data/monitoring/README.md`.

Then run:

```bash
pnpm traffic:report
```

The report compares the newest snapshot to the previous snapshot and prints:

- search visibility deltas
- analytics deltas
- top queries
- top search pages
- top analytics pages
- recommended editorial actions

## 3. What counts as progress

### Weeks 0-2: indexing

Good signs:

- sitemap submitted
- pages discovered/indexed
- no serious crawl errors
- first impressions appear in Search Console

### Weeks 2-6: impressions

Good signs:

- impressions rising
- long-tail queries appearing
- glossary/comparison pages entering top 100
- pages ranking for `AI influencer`, `AI girlfriend business`, `virtual influencer`, and tool/platform terms

### Weeks 6-12: ranking/clicks

Good signs:

- pages moving from positions 30-80 into 10-30
- comparison pages getting clicks
- high-impression low-CTR pages become title/meta refresh candidates
- near-page-one pages receive internal links and content refreshes

### 12+ weeks: authority/conversion

Good signs:

- newsletter clicks/signups
- direct/referral traffic
- citations/backlinks
- stronger rankings for operator-intent searches

## 4. Weekly action rules

Each weekly report should create at most five actions:

1. Refresh 1-2 pages with rising impressions but weak CTR.
2. Add internal links into 1-2 pages ranking positions 8-30.
3. Create 0-2 new pages only when Search Console reveals real demand.
4. Fix crawl/index errors before adding more content.
5. Keep source quality higher than output volume.

## 5. Dashboard fields

Minimum weekly scorecard:

| Field | Source | Why it matters |
| --- | --- | --- |
| Indexed pages | Search Console | Confirms crawl/index health |
| Impressions | Search Console | Earliest SEO progress signal |
| Clicks | Search Console | Search demand reaching the site |
| CTR | Search Console | Title/meta/search-intent quality |
| Avg position | Search Console | Ranking trend |
| Top queries | Search Console | Demand discovery |
| Top pages | Search Console + analytics | Page-level winners/losers |
| Visitors/pageviews | Plausible/GA4 | On-site reach |
| Newsletter CTA clicks | Plausible/GA4 event | Conversion intent |
| Outbound clicks | Plausible/GA4 event | Tool/platform interest |
