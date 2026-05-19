# Data Schema Draft

## `data/tools.yaml`

```yaml
- id: fanvue
  name: Fanvue
  category: fan_platform
  url: https://www.fanvue.com/
  summary: Creator monetization platform relevant to AI and synthetic creator businesses.
  best_for:
    - fan subscriptions
    - locked content
    - AI creator monetization
  pricing_model: revenue_share
  api_available: unknown
  creator_ops_score: null
  policy_risk: medium
  sources: [] # source IDs from data/sources.yaml
  last_checked: null
```

## `data/platforms.yaml`

```yaml
- id: instagram
  name: Instagram
  type: social_platform
  ai_creator_friendliness_score: null
  monetization_score: null
  automation_score: null
  discovery_score: null
  policy_risk: medium
  notes: []
  sources: [] # source IDs from data/sources.yaml
  last_checked: null
```

## `data/sources.yaml`

```yaml
- id: source_id
  url: https://example.com/source
  title: Source title
  publisher: Publisher
  retrieved_at: YYYY-MM-DD
  source_type: primary
  notes: ''
```

`source_type` values are `primary`, `secondary`, or `market_signal`. Public policy,
pricing, API, payout, and monetization claims should use `primary` sources where
possible. Tool and platform `sources` arrays should reference source IDs from
`data/sources.yaml`, not raw URLs, so templates can resolve titles, publishers,
retrieval dates, and notes consistently.

## `data/comparisons.yaml`

```yaml
- id: fanvue-vs-onlyfans
  title: Fanvue vs OnlyFans for AI Creators
  entities:
    - fanvue
    - onlyfans
  intent: Compare fan-platform monetization options for AI creator businesses.
  criteria:
    - AI/synthetic creator friendliness
    - monetization tools
    - policy clarity
    - automation support
    - discovery/funnel potential
  winner_by_use_case:
    - use_case: Explicitly synthetic creator brand
      winner: fanvue
      rationale: Fanvue has clearer reviewed AI-content guidance in the current source set.
  source_ids:
    - fanvue-ai-content-allowed
    - onlyfans-terms
  methodology_path: /methodology
  last_checked: YYYY-MM-DD
```

Comparison records are now validated as structured data, not just editorial copy.
Every public comparison route in `lib/editorial.ts` should have a matching
`data/comparisons.yaml` record with at least two known entities, explicit
criteria, winner-by-use-case notes, source IDs, `/methodology`, and a
last-checked date. Use the editorial page for prose and the YAML record for
machine-readable decision data.

## Scoring candidates

Tool score:
- creator usefulness
- identity consistency support
- media/workflow quality
- automation/API support
- commercial rights clarity
- pricing/value
- reliability
- learning curve

Platform score:
- AI policy clarity
- monetization potential
- discovery
- API/scheduler support
- fan relationship tools
- enforcement risk
- conversion potential
