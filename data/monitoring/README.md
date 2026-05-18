# Monitoring snapshots

Store weekly Search Console and analytics snapshots here as JSON files named `YYYY-MM-DD.json`.

Run:

```bash
pnpm traffic:report
```

Snapshot shape:

```json
{
  "date": "2026-05-18",
  "searchConsole": {
    "clicks": 0,
    "impressions": 0,
    "ctr": 0,
    "position": 0,
    "indexedPages": 0,
    "topQueries": [
      { "query": "ai influencer monetization", "clicks": 0, "impressions": 25, "ctr": 0, "position": 42.1 }
    ],
    "topPages": [
      { "page": "/guides/ai-influencer-ai-girlfriend-monetization", "clicks": 0, "impressions": 18, "ctr": 0, "position": 36.4 }
    ]
  },
  "analytics": {
    "visitors": 0,
    "pageviews": 0,
    "topPages": [
      { "path": "/", "views": 0 }
    ],
    "referrers": []
  },
  "notes": ["Initial baseline after analytics install."]
}
```
