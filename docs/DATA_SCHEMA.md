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
  sources: []
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
  sources: []
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

## `data/comparisons.yaml`

```yaml
- id: fanvue-vs-onlyfans
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
  winner_by_use_case: []
```

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
