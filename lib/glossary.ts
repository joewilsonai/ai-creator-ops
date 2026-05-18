export type GlossaryTerm = {
  slug: string;
  term: string;
  alsoKnownAs: string[];
  definition: string;
  whyItMatters: string;
  operatorNotes: string[];
  related: { label: string; href: string }[];
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
  }
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}
