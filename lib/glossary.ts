export type GlossaryTerm = {
  slug: string;
  term: string;
  alsoKnownAs: string[];
  definition: string;
  whyItMatters: string;
  operatorNotes: string[];
  related: { label: string; href: string }[];
};

export const glossarySourceIds: Record<string, string[]> = {
  'ai-creator': ['meta-labeling-ai-content-impact', 'tiktok-aigc-support', 'youtube-help-altered-synthetic-content'],
  'ai-influencer': ['meta-labeling-ai-content-impact', 'tiktok-aigc-support'],
  'ai-girlfriend-business': ['fanvue-ai-content-allowed', 'onlyfans-terms', 'onlyfans-acceptable-use-policy'],
  'ai-companion': ['fanvue-ai-content-allowed', 'onlyfans-terms', 'onlyfans-acceptable-use-policy', 'x-developer-guidelines'],
  'synthetic-influencer': ['meta-labeling-ai-content-impact', 'youtube-help-altered-synthetic-content'],
  'virtual-influencer': ['meta-labeling-ai-content-impact', 'tiktok-aigc-support'],
  'identity-consistency': ['openai-image-generation-guide', 'midjourney-terms', 'facefusion-docs'],
  'fan-platform': ['fanvue-creator-earnings-payouts', 'onlyfans-creator-center', 'onlyfans-terms'],
  'creator-funnel': ['linktree-pricing', 'beacons-pricing'],
  'dm-automation': ['manychat-instagram-product', 'manychat-developer-docs', 'x-developer-guidelines'],
  provenance: ['meta-labeling-ai-content-impact', 'tiktok-aigc-support', 'youtube-help-altered-synthetic-content'],
  'ai-disclosure': ['meta-community-standards-misinformation-ai-disclosure', 'tiktok-aigc-support', 'youtube-help-altered-synthetic-content', 'x-api-create-post'],
  'locked-content': ['fanvue-ai-content-allowed', 'fanvue-creator-earnings-payouts', 'onlyfans-terms'],
  'creator-automation': ['buffer-api-docs', 'metricool-api-overview', 'zernio-docs', 'x-developer-guidelines'],
  'image-to-video': ['runway-api-docs', 'kling-terms'],
  lora: ['lora-paper', 'openai-usage-policies'],
  'face-swap': ['facefusion-github', 'fanvue-ai-content-allowed', 'onlyfans-acceptable-use-policy'],
  'platform-risk': ['meta-community-standards-misinformation-ai-disclosure', 'tiktok-aigc-support', 'youtube-channel-monetization-policies', 'x-authenticity-policy']
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'ai-creator',
    term: 'AI Creator',
    alsoKnownAs: ['AI influencer', 'AI model', 'virtual creator', 'synthetic creator'],
    definition:
      'An AI creator is a synthetic or AI-assisted creator brand built around a repeatable identity, content system, distribution strategy, and monetization model.',
    whyItMatters:
      'The term maps messy public searches such as AI influencer, AI model, and virtual creator into the operator work that actually determines whether the brand can grow: continuity, publishing, policy, analytics, and monetization.',
    operatorNotes: [
      'Treat the creator as a business system, not just a character prompt.',
      'Document disclosure, provenance, and platform-specific policy requirements before scaling output.',
      'Separate public distribution surfaces from fan-platform or paid-content monetization rails.'
    ],
    related: [
      { label: 'What is an AI creator?', href: '/guides/what-is-an-ai-creator' },
      { label: 'AI Creator Tool Index', href: '/tools' },
      { label: 'AI Creator Platform Index', href: '/platforms' },
      { label: 'Scoring methodology', href: '/methodology' }
    ]
  },
  {
    slug: 'ai-influencer',
    term: 'AI Influencer',
    alsoKnownAs: ['virtual influencer', 'synthetic influencer', 'AI model'],
    definition:
      'An AI influencer is a creator-facing synthetic persona designed to publish social content, build an audience, and influence attention or buying behavior.',
    whyItMatters:
      'AI influencer is the public search term many operators use first; AI Creator Ops uses it as the distribution-facing layer of a broader creator business system.',
    operatorNotes: [
      'Audience trust depends on identity consistency, disclosure choices, and non-generic content angles.',
      'Instagram, TikTok, YouTube Shorts, and X each have different automation and synthetic-media labeling constraints.',
      'Influencer reach does not equal business durability unless there is a monetization and retention path.'
    ],
    related: [
      { label: 'What is an AI creator?', href: '/guides/what-is-an-ai-creator' },
      { label: 'Instagram for AI creators', href: '/platforms/instagram' },
      { label: 'TikTok for AI creators', href: '/platforms/tiktok' },
      { label: 'YouTube Shorts for AI creators', href: '/platforms/youtube-shorts' }
    ]
  },
  {
    slug: 'ai-girlfriend-business',
    term: 'AI Girlfriend Business',
    alsoKnownAs: ['AI girlfriend', 'AI companion creator', 'companion creator brand'],
    definition:
      'An AI girlfriend business is an AI companion or synthetic relationship brand that monetizes attention, chat, community, subscriptions, or paid content while managing consent, disclosure, and platform risk.',
    whyItMatters:
      'Search demand around AI girlfriend businesses is high, but sustainable operators need policy review, payment resilience, safety boundaries, and brand systems rather than lurid growth hacks.',
    operatorNotes: [
      'Review platform rules, age/identity constraints, payout policies, and synthetic-media disclosure before monetizing.',
      'Keep companion positioning separate from unsupported medical, therapeutic, or deceptive claims.',
      'A fan platform may be one monetization rail, but retention, messaging workflows, and risk controls drive the business.'
    ],
    related: [
      { label: 'Fanvue for AI creators', href: '/platforms/fanvue' },
      { label: 'OnlyFans for AI creators', href: '/platforms/onlyfans' },
      { label: 'Fan platform', href: '/glossary/fan-platform' },
      { label: 'DM automation', href: '/glossary/dm-automation' }
    ]
  },
  {
    slug: 'synthetic-influencer',
    term: 'Synthetic Influencer',
    alsoKnownAs: ['virtual influencer', 'AI influencer', 'synthetic creator'],
    definition:
      'A synthetic influencer is a media persona whose public identity is partly or fully created with digital production, AI generation, or virtual-character workflows.',
    whyItMatters:
      'Synthetic influencer pages help search engines and answer engines understand the entity layer behind AI creator businesses, virtual influencers, and AI models.',
    operatorNotes: [
      'Synthetic does not remove the need for rights, consent, disclosure, and platform compliance.',
      'Continuity systems are essential: face, voice, lore, style, publishing cadence, and audience promises must stay coherent.',
      'The production stack should be evaluated against commercial rights, policy risk, and repeatability.'
    ],
    related: [
      { label: 'Virtual influencer', href: '/glossary/virtual-influencer' },
      { label: 'Identity consistency', href: '/glossary/identity-consistency' },
      { label: 'FaceFusion', href: '/tools/facefusion' },
      { label: 'Runway', href: '/tools/runway' }
    ]
  },
  {
    slug: 'ai-companion',
    term: 'AI Companion',
    alsoKnownAs: ['AI companion creator', 'AI girlfriend', 'virtual companion', 'synthetic companion'],
    definition:
      'An AI companion is a synthetic or AI-assisted character experience designed around conversation, relationship-style engagement, recurring attention, and sometimes paid fan or subscription access.',
    whyItMatters:
      'AI companion demand overlaps with AI girlfriend businesses, fan-platform funnels, DM automation, and synthetic influencer brands, but it carries higher disclosure, expectation-setting, moderation, and platform-risk requirements than a simple social persona.',
    operatorNotes: [
      'State clearly whether the companion is fictional, AI-generated, AI-assisted, human-operated, automated, or a mix of workflows.',
      'Separate intimacy, paid messaging, support, and sales flows so automation does not mislead users or violate platform rules.',
      'Review fan-platform rules, age/likeness constraints, acceptable-use policies, payout terms, and DM automation limits before monetizing.'
    ],
    related: [
      { label: 'AI girlfriend business', href: '/glossary/ai-girlfriend-business' },
      { label: 'DM automation', href: '/glossary/dm-automation' },
      { label: 'Fan platform', href: '/glossary/fan-platform' },
      { label: 'AI influencer monetization guide', href: '/guides/ai-influencer-ai-girlfriend-monetization' }
    ]
  },
  {
    slug: 'virtual-influencer',
    term: 'Virtual Influencer',
    alsoKnownAs: ['synthetic influencer', 'AI influencer', 'virtual creator'],
    definition:
      'A virtual influencer is a fictional or digitally produced creator persona used for social publishing, brand storytelling, audience development, or monetization.',
    whyItMatters:
      'Virtual influencer is a familiar market term; AI Creator Ops connects it to operational questions around tools, platforms, disclosure, and monetization.',
    operatorNotes: [
      'The virtual identity should have a brand bible before high-volume publishing begins.',
      'Photorealistic virtual influencers trigger stronger disclosure and provenance questions than stylized characters.',
      'Use platform-specific pages to check automation and labeling constraints.'
    ],
    related: [
      { label: 'Synthetic influencer', href: '/glossary/synthetic-influencer' },
      { label: 'AI influencer', href: '/glossary/ai-influencer' },
      { label: 'Platform index', href: '/platforms' },
      { label: 'Tool index', href: '/tools' }
    ]
  },
  {
    slug: 'identity-consistency',
    term: 'Identity Consistency',
    alsoKnownAs: ['character consistency', 'creator continuity', 'visual continuity'],
    definition:
      'Identity consistency is the discipline of keeping an AI creator recognizable across images, videos, voice, captions, lore, offers, and platform contexts.',
    whyItMatters:
      'Most AI creator brands fail when attractive outputs do not add up to a coherent, trusted entity that audiences can remember and follow.',
    operatorNotes: [
      'Track reference images, prompt patterns, editing passes, rejected outputs, and style rules.',
      'Consistency is operational as much as technical: calendar, QA, and brand memory matter.',
      'Do not use face-swap or likeness workflows without consent, rights, and platform-policy review.'
    ],
    related: [
      { label: 'What is an AI creator?', href: '/guides/what-is-an-ai-creator' },
      { label: 'FaceFusion', href: '/tools/facefusion' },
      { label: 'GPT Image', href: '/tools/gpt-image' },
      { label: 'Midjourney', href: '/tools/midjourney' }
    ]
  },
  {
    slug: 'fan-platform',
    term: 'Fan Platform',
    alsoKnownAs: ['subscription platform', 'creator monetization platform', 'paid fan platform'],
    definition:
      'A fan platform is a monetization surface where creators sell subscriptions, locked content, messages, tips, or other direct-to-fan products.',
    whyItMatters:
      'Fan platforms are central to many AI girlfriend, AI companion, and AI model business plans, but payout rules, verification, disclosure, and synthetic-media policies vary by platform.',
    operatorNotes: [
      'Evaluate platform fit using policy clarity, monetization mechanics, payout reliability, and enforcement risk.',
      'Keep source-backed notes for synthetic media, co-creator verification, deepfake restrictions, and revenue share.',
      'Do not assume rules for one fan platform apply to another.'
    ],
    related: [
      { label: 'Fanvue for AI creators', href: '/platforms/fanvue' },
      { label: 'OnlyFans for AI creators', href: '/platforms/onlyfans' },
      { label: 'Fanvue tool record', href: '/tools/fanvue' },
      { label: 'Methodology', href: '/methodology' }
    ]
  },
  {
    slug: 'creator-funnel',
    term: 'Creator Funnel',
    alsoKnownAs: ['audience funnel', 'monetization funnel', 'creator business funnel'],
    definition:
      'A creator funnel is the path from public discovery to owned audience, paid offer, retention, and repeat revenue for a creator brand.',
    whyItMatters:
      'AI creator operations need funnels because reach alone does not create a durable business; every platform role should connect to a measurable next step.',
    operatorNotes: [
      'Use social platforms for discovery, link-in-bio tools for routing, and fan platforms or owned channels for monetization.',
      'Track conversion points instead of only likes or views.',
      'Design content pillars around both audience growth and downstream monetization intent.'
    ],
    related: [
      { label: 'Platform index', href: '/platforms' },
      { label: 'Tool index', href: '/tools' },
      { label: 'AI creator', href: '/glossary/ai-creator' },
      { label: 'Fan platform', href: '/glossary/fan-platform' }
    ]
  },
  {
    slug: 'dm-automation',
    term: 'DM Automation',
    alsoKnownAs: ['message automation', 'chat automation', 'creator inbox automation'],
    definition:
      'DM automation is the use of approved tools, workflows, or agents to triage, respond to, or route creator audience messages.',
    whyItMatters:
      'For AI companion and fan-platform brands, messaging can drive revenue, but automation also carries policy, safety, and user-expectation risks.',
    operatorNotes: [
      'Use platform-approved APIs and tools where possible; avoid brittle scraping or spam behavior.',
      'Separate customer support, sales routing, and persona chat boundaries.',
      'Disclosure, consent, and escalation rules matter more when automation mimics intimate or personal interaction.'
    ],
    related: [
      { label: 'AI girlfriend business', href: '/glossary/ai-girlfriend-business' },
      { label: 'Fan platform', href: '/glossary/fan-platform' },
      { label: 'Creator funnel', href: '/glossary/creator-funnel' },
      { label: 'Tool index', href: '/tools' }
    ]
  },
  {
    slug: 'provenance',
    term: 'Provenance',
    alsoKnownAs: ['content provenance', 'AI disclosure', 'content credentials'],
    definition:
      'Provenance is the record of where a piece of media came from, how it was produced or altered, and what disclosures or credentials travel with it.',
    whyItMatters:
      'Provenance matters for AI creators because platforms increasingly require synthetic-media labeling, and audiences need clear signals about realistic AI-generated media.',
    operatorNotes: [
      'Track source assets, model/tool usage, edits, releases, and platform disclosure choices.',
      'Review each platform’s current synthetic-media labeling policy before publishing realistic AI media.',
      'Provenance practices reduce risk but do not replace rights, consent, or platform compliance.'
    ],
    related: [
      { label: 'Instagram for AI creators', href: '/platforms/instagram' },
      { label: 'TikTok for AI creators', href: '/platforms/tiktok' },
      { label: 'YouTube Shorts for AI creators', href: '/platforms/youtube-shorts' },
      { label: 'Synthetic influencer', href: '/glossary/synthetic-influencer' }
    ]
  },
  {
    slug: 'ai-disclosure',
    term: 'AI Disclosure',
    alsoKnownAs: ['AI label', 'synthetic media disclosure', 'AI-generated content label'],
    definition:
      'AI disclosure is the visible or machine-readable signal that a creator asset, persona, audio track, image, or video was generated or materially altered with AI.',
    whyItMatters:
      'AI influencer and virtual creator brands need disclosure rules because platforms increasingly treat realistic synthetic media, AI-generated models, and altered likenesses as policy-sensitive content.',
    operatorNotes: [
      'Build disclosure into the publishing checklist before scaling output volume.',
      'Track platform-specific language for realistic AI images, video, audio, altered likenesses, and paid partnerships.',
      'Disclosure reduces trust and enforcement risk, but it does not replace consent, rights, or age-safety review.'
    ],
    related: [
      { label: 'Provenance', href: '/glossary/provenance' },
      { label: 'Platform risk', href: '/glossary/platform-risk' },
      { label: 'Instagram for AI creators', href: '/platforms/instagram' },
      { label: 'TikTok for AI creators', href: '/platforms/tiktok' }
    ]
  },
  {
    slug: 'locked-content',
    term: 'Locked Content',
    alsoKnownAs: ['paid content', 'gated content', 'premium fan content'],
    definition:
      'Locked content is creator media or messaging access placed behind a subscription, pay-per-view unlock, tip, membership, or other direct fan-payment gate.',
    whyItMatters:
      'Locked content is a core monetization mechanic for AI girlfriend, AI companion, AI model, and fan-platform creator businesses, but it raises stronger provenance, consent, and platform-policy requirements.',
    operatorNotes: [
      'Separate public discovery posts from paid fan-platform inventory and track which assets are safe for each surface.',
      'Do not publish likeness-based or face-swap material without documented rights, consent, and platform verification where required.',
      'Measure unlock rate, refund risk, churn, and repeat buyer behavior rather than only content volume.'
    ],
    related: [
      { label: 'Fan platform', href: '/glossary/fan-platform' },
      { label: 'AI girlfriend business', href: '/glossary/ai-girlfriend-business' },
      { label: 'Creator funnel', href: '/glossary/creator-funnel' },
      { label: 'Fanvue', href: '/tools/fanvue' }
    ]
  },
  {
    slug: 'creator-automation',
    term: 'Creator Automation',
    alsoKnownAs: ['AI creator automation', 'agentic creator ops', 'creator workflow automation'],
    definition:
      'Creator automation is the use of schedulers, APIs, agents, templates, and QA workflows to produce, route, publish, measure, and improve creator content with less manual work.',
    whyItMatters:
      'AI creator operations become durable when automation supports repeatable quality, policy checks, publishing cadence, analytics, and monetization rather than simply generating more assets.',
    operatorNotes: [
      'Automate low-risk queueing, metadata, reporting, and QA first; keep approvals around policy-sensitive content and payments.',
      'Prefer official APIs and approved partner tools over scraping or brittle browser automation.',
      'Treat creator automation as a system with logs, source records, rollback paths, and human review gates for risky surfaces.'
    ],
    related: [
      { label: 'DM automation', href: '/glossary/dm-automation' },
      { label: 'Buffer', href: '/tools/buffer' },
      { label: 'Metricool', href: '/tools/metricool' },
      { label: 'Zernio', href: '/tools/zernio' }
    ]
  },
  {
    slug: 'image-to-video',
    term: 'Image-to-Video',
    alsoKnownAs: ['I2V', 'AI motion generation', 'still-to-video'],
    definition:
      'Image-to-video is an AI video workflow that animates a still image or reference frame into a short motion clip while attempting to preserve the subject, setting, and visual style.',
    whyItMatters:
      'Virtual influencers and AI models often start from identity-locked stills, so image-to-video tools are useful for reels, Shorts, TikToks, and motion tests when continuity can be maintained.',
    operatorNotes: [
      'Use short motion tests to evaluate identity drift, hand artifacts, wardrobe continuity, and scene plausibility before publishing.',
      'Pair image-to-video with a content calendar and platform-specific synthetic-media disclosure rules.',
      'Do not treat a high-quality still as proof the animated output remains identity-safe.'
    ],
    related: [
      { label: 'Runway', href: '/tools/runway' },
      { label: 'Kling', href: '/tools/kling' },
      { label: 'Identity consistency', href: '/glossary/identity-consistency' },
      { label: 'AI influencer', href: '/glossary/ai-influencer' }
    ]
  },
  {
    slug: 'lora',
    term: 'LoRA',
    alsoKnownAs: ['low-rank adaptation', 'character LoRA', 'style LoRA'],
    definition:
      'LoRA is a lightweight model-adaptation technique commonly used to steer image or video generation toward a specific character, style, object, wardrobe mode, or visual domain.',
    whyItMatters:
      'For AI creator brands, LoRA-style workflows can support identity consistency and repeatable aesthetics, but training data rights, likeness consent, and overfitting risk must be controlled.',
    operatorNotes: [
      'Document training data, consent, rights, model version, prompt recipes, and rejected outputs.',
      'Use LoRA as one continuity layer, not a substitute for QA, brand memory, or post-production review.',
      'Avoid training or distributing likeness models without explicit rights and a clear operational purpose.'
    ],
    related: [
      { label: 'Identity consistency', href: '/glossary/identity-consistency' },
      { label: 'Synthetic influencer', href: '/glossary/synthetic-influencer' },
      { label: 'GPT Image', href: '/tools/gpt-image' },
      { label: 'Midjourney', href: '/tools/midjourney' }
    ]
  },
  {
    slug: 'face-swap',
    term: 'Face Swap',
    alsoKnownAs: ['face replacement', 'likeness transfer', 'deepfake workflow'],
    definition:
      'Face swap is a post-production or generation workflow that transfers or replaces a face or likeness across media to improve continuity or create altered synthetic content.',
    whyItMatters:
      'Face-swap workflows can help identity consistency for consented synthetic creator pipelines, but they are high-risk because platforms and fan sites scrutinize likeness rights, consent, disclosure, and impersonation.',
    operatorNotes: [
      'Use only with documented consent, rights, and platform-specific verification where a real person or real body is involved.',
      'Label realistic altered media when platform rules require it and keep provenance records for source assets.',
      'Run identity QA and policy QA separately; a convincing face match can still be unacceptable for publication.'
    ],
    related: [
      { label: 'FaceFusion', href: '/tools/facefusion' },
      { label: 'Identity consistency', href: '/glossary/identity-consistency' },
      { label: 'Provenance', href: '/glossary/provenance' },
      { label: 'AI disclosure', href: '/glossary/ai-disclosure' }
    ]
  },
  {
    slug: 'platform-risk',
    term: 'Platform Risk',
    alsoKnownAs: ['policy risk', 'enforcement risk', 'account risk'],
    definition:
      'Platform risk is the chance that a tool, social network, fan platform, payment rail, or marketplace limits, labels, demonetizes, removes, or bans creator activity.',
    whyItMatters:
      'AI creators, AI girlfriends, synthetic influencers, and virtual creators depend on third-party surfaces whose rules for automation, synthetic media, adult content, monetization, and identity can change quickly.',
    operatorNotes: [
      'Track policy sources, last-checked dates, account status, moderation events, and fallback distribution paths.',
      'Treat high-risk workflows such as adult locked content, face swaps, DMs, and aggressive automation as separately gated operations.',
      'Design the creator funnel so no single platform owns the audience, payment flow, and operational memory.'
    ],
    related: [
      { label: 'AI disclosure', href: '/glossary/ai-disclosure' },
      { label: 'Creator automation', href: '/glossary/creator-automation' },
      { label: 'Platform index', href: '/platforms' },
      { label: 'Methodology', href: '/methodology' }
    ]
  }
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}
