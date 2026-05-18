export type EditorialPage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  badge: string;
  canonicalPath: string;
  lastUpdated: string;
  directAnswer: string;
  keyFacts: string[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  framework?: { label: string; detail: string }[];
  internalLinks: { href: string; label: string }[];
  sourceIds: string[];
};

export const guidePages: EditorialPage[] = [
  {
    slug: 'how-to-build-ai-influencer-brand',
    title: 'How to Build an AI Influencer Brand: Operator Workflow for Synthetic Creators',
    shortTitle: 'How to Build an AI Influencer Brand',
    description: 'A practical workflow for building an AI influencer, virtual influencer, AI model, or AI girlfriend brand with identity, distribution, disclosure, and monetization controls.',
    badge: 'GUIDE',
    canonicalPath: '/guides/how-to-build-ai-influencer-brand',
    lastUpdated: '2026-05-18',
    directAnswer: 'Build an AI influencer brand by designing a durable character system before scaling content: define the audience promise, lock visual identity, write a character bible, choose public discovery channels, set disclosure rules, build a monetization path, and measure retention instead of only likes.',
    keyFacts: [
      'A strong AI influencer is a repeatable media asset, not a random attractive image feed.',
      'Instagram and TikTok can both support discovery, but they impose different automation and AI-labeling constraints.',
      'Fan-platform or AI girlfriend monetization needs stricter provenance, age-appearance, consent, and disclosure review than public-safe social content.'
    ],
    sections: [
      {
        heading: 'Start with the audience promise',
        body: 'The first operator question is not which image model to use. It is why a follower should care tomorrow. Pick a narrow promise: luxury-noir fitness discipline, anime-coded travel fantasy, AI girlfriend intimacy, synthetic fashion editorial, creator education, or another repeatable lane. The promise controls wardrobe, captions, offers, and platform fit.',
        bullets: ['Define the audience segment and emotional job.', 'Write 3 recurring content pillars.', 'Choose what the character never does, not just what she does.']
      },
      {
        heading: 'Lock identity before volume',
        body: 'Most synthetic influencer accounts fail because every post looks like a different person. Create reference assets, negative prompts, body/face rules, voice guidelines, wardrobe modes, and location continuity. Treat identity QA as a publishing gate, especially for realistic AI model or AI companion brands.'
      },
      {
        heading: 'Build the funnel deliberately',
        body: 'Discovery platforms should send people somewhere useful: a fan platform, newsletter, link-in-bio hub, creator site, product offer, or waitlist. Do not make monetization an afterthought after a feed already has inconsistent expectations.'
      },
      {
        heading: 'Disclose and document synthetic production',
        body: 'Use disclosure as a trust layer, not a punishment. Meta, TikTok, YouTube, and Fanvue all have rules or guidance around realistic altered or AI-generated media in specific contexts. Keep a lightweight production log so the brand can answer provenance questions later.'
      }
    ],
    framework: [
      { label: 'Positioning', detail: 'Audience, promise, persona boundaries, and content pillars.' },
      { label: 'Continuity', detail: 'Reference set, character bible, image QA, and recurring world details.' },
      { label: 'Distribution', detail: 'Instagram/TikTok/Shorts/X roles, cadence, and format testing.' },
      { label: 'Monetization', detail: 'Fan platform, affiliate, sponsorship, product, or owned-audience path.' },
      { label: 'Governance', detail: 'Disclosure, consent, likeness, IP, age appearance, and platform-risk checks.' }
    ],
    internalLinks: [
      { href: '/guides/ai-creator-identity-consistency', label: 'AI creator identity consistency guide' },
      { href: '/guides/ai-influencer-ai-girlfriend-monetization', label: 'AI influencer and AI girlfriend monetization' },
      { href: '/comparisons/instagram-vs-tiktok-for-ai-creators', label: 'Instagram vs TikTok for AI creators' },
      { href: '/platforms/instagram', label: 'Instagram platform notes' }
    ],
    sourceIds: ['meta-community-standards-misinformation-ai-disclosure', 'tiktok-aigc-support', 'fanvue-ai-content-allowed']
  },
  {
    slug: 'ai-creator-business-models',
    title: 'AI Creator Business Models: How AI Influencers, Virtual Creators, and AI Companions Make Money',
    shortTitle: 'AI Creator Business Models',
    description: 'Operator map of AI creator business models: fan platforms, subscriptions, sponsorships, affiliates, owned audience, products, agencies, and companion-style monetization.',
    badge: 'GUIDE',
    canonicalPath: '/guides/ai-creator-business-models',
    lastUpdated: '2026-05-18',
    directAnswer: 'The main AI creator business models are fan-platform subscriptions, paid messages or locked content, sponsorships, affiliate funnels, digital products, owned community/newsletter, agency services, and licensing. The best model depends on platform policy, audience trust, character continuity, and how much human operation sits behind the synthetic persona.',
    keyFacts: [
      'Revenue-share platforms can monetize directly, but policy and payout rules matter more than headline platform size.',
      'Social platforms are usually discovery layers; they are not automatically the best place to capture revenue.',
      'AI companion and AI girlfriend positioning can convert well but carries higher disclosure, expectation, moderation, and age/likeness risk.'
    ],
    sections: [
      { heading: 'Fan-platform revenue', body: 'Fanvue, OnlyFans, Fansly, and adjacent platforms are used for subscriptions, paid messages, tips, locked posts, and bundles. Operators should compare AI-content rules, verification, payout terms, chargeback risk, and what synthetic or real-person likenesses are allowed before choosing a home base.' },
      { heading: 'Discovery-to-owned-audience funnels', body: 'Instagram, TikTok, YouTube Shorts, and X are strongest as discovery surfaces. A durable AI creator brand should capture owned audience through email, site search, community, or a link hub so a single enforcement event does not destroy the business.' },
      { heading: 'Sponsorships, affiliates, and products', body: 'Synthetic influencers can promote tools, fashion, games, apps, courses, or digital goods, but every claim needs ad disclosure and brand-safety review. The operator must be clear when content is fictional, generated, sponsored, or performance-based.' },
      { heading: 'Licensing and agency work', body: 'Some AI creator operations become production studios: character licensing, custom campaigns, synthetic content ops, or AI workflow services. This model depends on repeatable production and rights hygiene rather than audience intimacy alone.' }
    ],
    framework: [
      { label: 'Direct revenue', detail: 'Subscriptions, tips, paid messages, locked content, and fan bundles.' },
      { label: 'Indirect revenue', detail: 'Sponsorships, affiliates, products, newsletters, and community offers.' },
      { label: 'Service revenue', detail: 'Production ops, licensing, character campaigns, and agency workflows.' }
    ],
    internalLinks: [
      { href: '/guides/ai-influencer-ai-girlfriend-monetization', label: 'Monetization guide' },
      { href: '/platforms/fanvue', label: 'Fanvue for AI creators' },
      { href: '/comparisons/fanvue-vs-onlyfans', label: 'Fanvue vs OnlyFans' },
      { href: '/reports/ai-creator-platform-index-2026', label: 'AI Creator Platform Index 2026' }
    ],
    sourceIds: ['fanvue-creator-earnings-payouts', 'fanvue-receive-payout-help', 'youtube-shorts-monetization-policies']
  },
  {
    slug: 'ai-influencer-ai-girlfriend-monetization',
    title: 'How to Monetize an AI Influencer or AI Girlfriend Brand',
    shortTitle: 'AI Influencer / AI Girlfriend Monetization',
    description: 'A risk-aware monetization guide for AI influencer, AI girlfriend, AI model, AI companion, virtual influencer, and synthetic influencer brands.',
    badge: 'GUIDE',
    canonicalPath: '/guides/ai-influencer-ai-girlfriend-monetization',
    lastUpdated: '2026-05-18',
    directAnswer: 'Monetize an AI influencer or AI girlfriend brand by matching content intensity to the right platform: public-safe discovery on social channels, paid depth on fan platforms where synthetic content is allowed, and owned audience capture through links, email, and products. Do not promise earnings; model revenue around conversion, retention, payout rules, refunds, and enforcement risk.',
    keyFacts: [
      'Fanvue publicly documents AI creator support and AI-content rules; other fan platforms may need more conservative review before synthetic positioning.',
      'OnlyFans has an official AI-content help article, but synthetic creator launches still need careful review of verified-creator, captioning, acceptable-use, and likeness constraints.',
      'AI girlfriend and AI companion monetization needs clear expectation-setting: fictional character, AI-generated or AI-assisted media, and human/automated messaging boundaries.'
    ],
    sections: [
      { heading: 'Use social for appetite, not everything', body: 'Instagram, TikTok, YouTube Shorts, and X should test audience demand with public-safe edits, recurring story beats, and clear positioning. Keep the content clean enough to protect reach and account health, then route deeper fans to controlled monetization surfaces.' },
      { heading: 'Package paid value concretely', body: 'Paid value cannot be “more pictures” forever. Package weekly sets, behind-the-scenes lore, polls, personalized-safe messages, character diaries, training arcs, cosplay sets, or themed drops. The fan should understand what renewal buys.' },
      { heading: 'Build retention before intensity', body: 'Churn kills fan-platform revenue. Track renewal rate, paid-message response, unlock conversion, refund/chargeback flags, and which storylines create repeat buyers. A coherent world often retains better than random high-gloss generation.' },
      { heading: 'Keep claims and chat boundaries clean', body: 'If the brand uses AI chat, human assistants, or scripted messaging, do not misrepresent who or what is responding. The more intimate the offer, the more important disclosure and moderation become.' }
    ],
    framework: [
      { label: 'Top funnel', detail: 'Public-safe reels, shorts, carousels, posts, and creator website landing pages.' },
      { label: 'Conversion', detail: 'Link-in-bio, pinned explainers, offer menu, free preview, and launch sequence.' },
      { label: 'Retention', detail: 'Drop calendar, recurring lore, paid requests, renewal perks, and analytics.' },
      { label: 'Risk control', detail: 'Disclosure, age appearance, real-person likeness, co-creator verification, and refund monitoring.' }
    ],
    internalLinks: [
      { href: '/guides/ai-creator-business-models', label: 'AI creator business models' },
      { href: '/platforms/fanvue', label: 'Fanvue for AI creators' },
      { href: '/comparisons/fanvue-vs-onlyfans', label: 'Fanvue vs OnlyFans' },
      { href: '/guides/ai-creator-disclosure', label: 'AI creator disclosure guide' }
    ],
    sourceIds: ['fanvue-ai-content-allowed', 'fanvue-creator-earnings-payouts', 'fanvue-receive-payout-help', 'onlyfans-terms', 'onlyfans-help-ai-content', 'onlyfans-acceptable-use-policy']
  },
  {
    slug: 'ai-creator-identity-consistency',
    title: 'AI Creator Identity Consistency Guide',
    shortTitle: 'AI Creator Identity Consistency',
    description: 'A production workflow for keeping an AI influencer, AI model, virtual influencer, or synthetic influencer recognizable across images, videos, captions, and offers.',
    badge: 'GUIDE',
    canonicalPath: '/guides/ai-creator-identity-consistency',
    lastUpdated: '2026-05-18',
    directAnswer: 'AI creator identity consistency means the audience can recognize the same character across posts, platforms, media types, and story contexts. Operators need a character bible, locked references, prompt and negative-prompt rules, visual QA, voice guidelines, provenance notes, and a kill switch for assets that look like a different person.',
    keyFacts: [
      'Identity consistency is a business control: it affects trust, conversion, sponsorship safety, and fan retention.',
      'Visual consistency alone is not enough; voice, lore, posting routine, offer design, and boundaries must also repeat.',
      'Face-swap or real-person likeness workflows raise consent, verification, and policy risk and should be documented carefully.'
    ],
    sections: [
      { heading: 'Create a character bible', body: 'Document face and body traits, age presentation, wardrobe lanes, voice, recurring locations, boundaries, origin story, content pillars, and banned outputs. The bible becomes the editor’s standard, not a decoration.' },
      { heading: 'Use quality gates', body: 'Score every asset before publishing: identity match, world continuity, artifact level, platform fit, disclosure need, and monetization relevance. Anything below threshold goes to retouch, regeneration, or the archive.' },
      { heading: 'Separate canon from experiments', body: 'Motion tests, style tests, and prompt experiments should not automatically become canon. Keep a canon library for published identity-locked work and a sandbox for experiments.' },
      { heading: 'Track provenance and rights', body: 'For realistic AI model or AI companion work, record source references, model/tool used, consent basis, and whether real-person likeness appears. This matters when platform review, collaborator verification, or brand partnership questions appear.' }
    ],
    framework: [
      { label: 'Face/body lock', detail: 'Reference sheets, embeddings or approved workflows, age presentation, and artifact checks.' },
      { label: 'World lock', detail: 'Recurring rooms, objects, lighting, routines, wardrobe, and story constraints.' },
      { label: 'Voice lock', detail: 'Caption style, vocabulary, boundaries, reply patterns, and persona memory.' },
      { label: 'Ops lock', detail: 'Asset naming, review status, source notes, approvals, and rollback plan.' }
    ],
    internalLinks: [
      { href: '/guides/how-to-build-ai-influencer-brand', label: 'How to build an AI influencer brand' },
      { href: '/glossary/identity-consistency', label: 'Identity consistency glossary' },
      { href: '/tools/facefusion', label: 'FaceFusion tool record' },
      { href: '/guides/ai-creator-disclosure', label: 'Disclosure guide' }
    ],
    sourceIds: ['fanvue-ai-generated-model-definition', 'fanvue-ai-generated-content', 'meta-labeling-ai-generated-content-manipulated-media']
  },
  {
    slug: 'ai-creator-disclosure',
    title: 'AI Creator Disclosure Guide: Labels, Trust, and Platform Risk',
    shortTitle: 'AI Creator Disclosure Guide',
    description: 'How AI influencers, AI girlfriend brands, AI models, virtual creators, and synthetic influencers should think about AI labels, platform rules, and audience trust.',
    badge: 'GUIDE',
    canonicalPath: '/guides/ai-creator-disclosure',
    lastUpdated: '2026-05-18',
    directAnswer: 'AI creator disclosure is the practice of telling platforms and audiences when realistic media, characters, voices, or interactions are AI-generated, AI-assisted, synthetic, or meaningfully altered. Treat disclosure as a default operating layer, then verify the exact requirement for each platform and media format before publishing.',
    keyFacts: [
      'TikTok requires labeling for realistic AI-generated images, audio, or video and may auto-label some AI-generated content.',
      'YouTube requires creators to disclose realistic meaningfully altered or synthetic content in specific contexts.',
      'Meta says disclosure tools are required for organic photorealistic video or realistic-sounding audio that was digitally created or altered.',
      'Fanvue requires clear disclosure that AI-generated media is not real and was generated using AI.'
    ],
    sections: [
      { heading: 'Disclosure is not one universal label', body: 'A static fantasy illustration, a photorealistic AI model, a cloned voice, a deepfake, and an AI companion chat all have different risk levels. The practical operator move is to maintain a disclosure matrix by platform, media type, realism, and monetization surface.' },
      { heading: 'Use plain language', body: 'Avoid vague wording such as “enhanced” when the audience may reasonably believe the character or event is real. Plain labels like “AI-generated character,” “synthetic scene,” or “fictional AI creator” are easier to defend.' },
      { heading: 'Pair labels with provenance notes', body: 'Keep internal notes on prompts, source references, edits, tools, and human review. Public labels handle audience clarity; internal provenance handles audits, takedowns, partner questions, and platform appeals.' },
      { heading: 'Disclose sponsored or affiliate content separately', body: 'AI disclosure does not replace ad disclosure. A synthetic influencer can still need platform-specific branded content, affiliate, or sponsorship labeling.' }
    ],
    framework: [
      { label: 'Platform label', detail: 'Use built-in AI/synthetic media tools where required or available.' },
      { label: 'Audience label', detail: 'Bio, caption, pinned post, FAQ, or paywall description that sets expectations.' },
      { label: 'Commercial label', detail: 'Sponsored, affiliate, paid partnership, or promotional disclosure when money changes incentives.' },
      { label: 'Internal record', detail: 'Source references, tool chain, human approval, and policy review notes.' }
    ],
    internalLinks: [
      { href: '/guides/what-is-an-ai-creator', label: 'What is an AI creator?' },
      { href: '/platforms/instagram', label: 'Instagram policy and publishing notes' },
      { href: '/platforms/tiktok', label: 'TikTok AIGC and posting notes' },
      { href: '/platforms/youtube-shorts', label: 'YouTube Shorts disclosure and API notes' }
    ],
    sourceIds: ['tiktok-aigc-support', 'youtube-help-altered-synthetic-content', 'meta-community-standards-misinformation-ai-disclosure', 'fanvue-ai-content-allowed']
  },
  {
    slug: 'ai-creator-automation-stack',
    title: 'AI Creator Automation Stack: Publishing, QA, and Workflow Controls',
    shortTitle: 'AI Creator Automation Stack',
    description: 'A practical automation-stack guide for AI influencers, virtual influencers, AI girlfriend funnels, and synthetic creator operations that need speed without policy or quality failures.',
    badge: 'GUIDE',
    canonicalPath: '/guides/ai-creator-automation-stack',
    lastUpdated: '2026-05-18',
    directAnswer: 'An AI creator automation stack should automate repeatable operations — asset naming, QA checklists, scheduling, link routing, reporting, and source review — while keeping human approval around identity, disclosure, adult/age-sensitive boundaries, sponsorship claims, and platform policy risk. Automation is useful only when it preserves continuity and account health.',
    keyFacts: [
      'Official posting APIs exist for major platforms, but they are not blanket permission for bot-like posting or unrestricted automation.',
      'TikTok Content Posting API audit status can affect whether posts created by an integration are public or private-only.',
      'Instagram Content Publishing API has documented professional-account, media-container, publishing, and rate-limit constraints.'
    ],
    sections: [
      { heading: 'Start with the control points', body: 'Map the workflow before buying tools: generation, retouching, identity QA, captioning, disclosure decision, scheduling, comments/DM handling, funnel routing, analytics, and archive. The most valuable automation usually sits between these handoffs, not inside the image prompt itself.' },
      { heading: 'Separate production automation from publishing authority', body: 'It is reasonable to automate file movement, draft creation, caption variants, and reporting. Final publish authority should stay behind a checklist when the asset is realistic, monetized, sponsored, intimate, or policy-sensitive.' },
      { heading: 'Use platform APIs conservatively', body: 'Treat official API documentation as the minimum operating surface. Instagram and TikTok publishing APIs have scopes, account requirements, audit expectations, supported-media rules, and rate or visibility constraints that should be reflected in the operator runbook.' },
      { heading: 'Track failures as data', body: 'Log rejected assets, disclosure escalations, identity mismatches, moderation events, low-retention drops, and support issues. A mature creator operation learns where automation creates risk, then tightens that step.' }
    ],
    framework: [
      { label: 'Create', detail: 'Prompt libraries, reference packs, approved tool chains, and sandbox experiments.' },
      { label: 'Review', detail: 'Identity, artifacts, realism, disclosure, rights, age appearance, and brand-safety checks.' },
      { label: 'Publish', detail: 'Scheduler/API drafts, platform-specific captions, labels, and manual approval gates.' },
      { label: 'Measure', detail: 'Reach, conversion, retention, unlocks, account health, and content-quality feedback loops.' }
    ],
    internalLinks: [
      { href: '/guides/ai-creator-identity-consistency', label: 'AI creator identity consistency guide' },
      { href: '/guides/ai-creator-disclosure', label: 'AI creator disclosure guide' },
      { href: '/comparisons/instagram-vs-tiktok-for-ai-creators', label: 'Instagram vs TikTok automation comparison' },
      { href: '/platforms/tiktok', label: 'TikTok platform notes' }
    ],
    sourceIds: ['meta-instagram-content-publishing', 'tiktok-content-posting-api-get-started', 'tiktok-content-posting-api-product', 'x-developer-guidelines']
  },
  {
    slug: 'persistent-character-universe',
    title: 'How to Create a Persistent Character Universe for an AI Creator Brand',
    shortTitle: 'Persistent Character Universe',
    description: 'How operators turn an AI influencer, AI model, AI companion, or virtual influencer from disconnected posts into a durable world with lore, formats, and monetizable continuity.',
    badge: 'GUIDE',
    canonicalPath: '/guides/persistent-character-universe',
    lastUpdated: '2026-05-18',
    directAnswer: 'A persistent character universe is the operating system behind a synthetic creator: recurring identity, settings, relationships, rituals, conflicts, products, and audience promises that make each post feel like part of the same brand. Build it as a bible, canon library, content calendar, and QA process before scaling volume.',
    keyFacts: [
      'Continuity is what separates a synthetic creator brand from a folder of attractive generated images.',
      'The universe should define what is canon, what is experimental, and what is prohibited before audience expectations harden.',
      'Fan-platform and AI companion offers need especially clear world boundaries so fictional intimacy does not become misleading representation.'
    ],
    sections: [
      { heading: 'Write the world bible', body: 'Document the character origin, age presentation, recurring locations, visual rules, relationships, routines, content pillars, audience promise, monetization boundaries, and off-limits themes. Keep it specific enough that another operator can reject an asset confidently.' },
      { heading: 'Create recurring formats', body: 'Use repeatable episode types: morning check-ins, training arcs, outfit drops, travel logs, character diaries, polls, behind-the-scenes notes, or product tests. Recurring formats give the audience a reason to come back and give the team a production rhythm.' },
      { heading: 'Maintain canon and sandbox libraries', body: 'Published identity-locked assets belong in the canon library. Tests, prompt variants, failed videos, and alternate styles belong in the sandbox. Never let sandbox artifacts redefine the public character by accident.' },
      { heading: 'Connect lore to business outcomes', body: 'The point of a universe is not endless lore. It should clarify sponsorship fit, paid drops, fan-platform packages, newsletter themes, affiliate selection, and why a follower would subscribe or buy again.' }
    ],
    framework: [
      { label: 'Character', detail: 'Identity, voice, motivations, boundaries, and recurring traits.' },
      { label: 'World', detail: 'Locations, objects, rituals, relationships, timeline, and visual atmosphere.' },
      { label: 'Formats', detail: 'Repeatable posts, arcs, drops, polls, captions, and paid content packages.' },
      { label: 'Canon control', detail: 'Approved assets, rejected variants, lore changes, and continuity reviews.' }
    ],
    internalLinks: [
      { href: '/guides/how-to-build-ai-influencer-brand', label: 'How to build an AI influencer brand' },
      { href: '/guides/ai-creator-identity-consistency', label: 'Identity consistency workflow' },
      { href: '/guides/ai-creator-business-models', label: 'AI creator business models' },
      { href: '/glossary/synthetic-influencer', label: 'Synthetic influencer definition' }
    ],
    sourceIds: ['fanvue-ai-generated-model-definition', 'fanvue-ai-content-allowed', 'meta-labeling-ai-generated-content-manipulated-media']
  },
  {
    slug: 'synthetic-influencer-legal-platform-risks',
    title: 'Synthetic Influencer Legal and Platform Risks: Operator Checklist',
    shortTitle: 'Synthetic Influencer Risks',
    description: 'A risk checklist for AI influencers, AI girlfriend brands, AI models, virtual creators, and synthetic influencers covering disclosure, likeness, age appearance, monetization, and automation.',
    badge: 'GUIDE',
    canonicalPath: '/guides/synthetic-influencer-legal-platform-risks',
    lastUpdated: '2026-05-18',
    directAnswer: 'The biggest synthetic influencer risks are misleading realism, undisclosed AI-generated or altered media, real-person likeness or deepfake misuse, underage-looking content, copyright/source-reference issues, unsafe monetization claims, spammy automation, and platform-specific enforcement. Operators should maintain a documented review checklist before publishing or monetizing realistic synthetic media.',
    keyFacts: [
      'Fanvue AI-content sources explicitly reference disclosure, age-appearance, real-person likeness, copyright, and moderation constraints.',
      'OnlyFans official sources require careful review of AI captions, verified-creator appearance, acceptable use, and account terms before synthetic content launches.',
      'Major social platforms have separate synthetic-media, AI-labeling, and automation surfaces; no single disclosure rule covers every channel.'
    ],
    sections: [
      { heading: 'Likeness and consent risk', body: 'Do not use a real person’s face, body, voice, or identity markers without a clear rights and verification basis. Deepfake, face-swap, or “inspired by” workflows are higher risk than fully fictional character generation.' },
      { heading: 'Age appearance and adult-context risk', body: 'For AI girlfriend, AI model, and fan-platform workflows, age presentation must be treated as a hard gate. If a realistic character could be read as underage, do not publish or monetize the asset.' },
      { heading: 'Disclosure and deception risk', body: 'Realistic synthetic scenes, voices, or claims can mislead audiences even when technically fictional. Use platform labels, plain-language bios or captions, and internal provenance logs to reduce review and trust problems.' },
      { heading: 'Automation and monetization risk', body: 'Automation can create spam, undisclosed paid promotion, misleading chat expectations, or policy-breaking posting patterns at scale. Keep human review around sponsored claims, paid messages, direct posting, and support escalations.' }
    ],
    framework: [
      { label: 'Identity rights', detail: 'Consent, verified likeness, no impersonation, and no unauthorized real-person references.' },
      { label: 'Content safety', detail: 'Age appearance, prohibited content, claims, realism, and audience deception checks.' },
      { label: 'Commercial safety', detail: 'Ad labels, payout terms, refund risk, affiliate claims, and platform eligibility.' },
      { label: 'Operational safety', detail: 'API limits, spam rules, audit logs, moderation events, and rollback procedures.' }
    ],
    internalLinks: [
      { href: '/guides/ai-creator-disclosure', label: 'AI creator disclosure guide' },
      { href: '/comparisons/fanvue-vs-onlyfans', label: 'Fanvue vs OnlyFans policy comparison' },
      { href: '/guides/ai-influencer-ai-girlfriend-monetization', label: 'AI influencer and AI girlfriend monetization' },
      { href: '/methodology', label: 'AI Creator Ops methodology' }
    ],
    sourceIds: ['fanvue-ai-content-allowed', 'fanvue-ai-generated-content', 'onlyfans-terms', 'onlyfans-help-ai-content', 'onlyfans-acceptable-use-policy', 'tiktok-aigc-support', 'x-developer-guidelines']
  }
];

export const comparisonPages: EditorialPage[] = [
  {
    slug: 'fanvue-vs-onlyfans',
    title: 'Fanvue vs OnlyFans for AI Creators: Platform Comparison',
    shortTitle: 'Fanvue vs OnlyFans',
    description: 'A source-backed comparison of Fanvue and OnlyFans for AI creator, AI model, AI girlfriend, synthetic influencer, and fan-platform monetization strategies.',
    badge: 'COMPARISON',
    canonicalPath: '/comparisons/fanvue-vs-onlyfans',
    lastUpdated: '2026-05-18',
    directAnswer: 'For explicitly synthetic or AI-generated creator brands, Fanvue currently has the clearest reviewed public AI-creator positioning because its Help Centre says it welcomes AI creators and allows fully AI-generated content with disclosure and restrictions. OnlyFans also has official AI-content guidance, but it should be evaluated more narrowly around verified creator likeness, clear AI captions, acceptable-use limits, and account-specific review before launch.',
    keyFacts: [
      'Fanvue publishes AI-content help pages covering disclosure, deepfakes/face-swaps, real-model verification, age appearance, copyright, and moderation.',
      'Fanvue’s earnings policy states a standard 80% creator earning rate and 20% platform fee unless otherwise agreed.',
      'OnlyFans has official AI-content, terms, and acceptable-use sources to review; this page treats it as usable only with verified-creator likeness, clear AI-captioning, and conservative policy checks.'
    ],
    sections: [
      { heading: 'Winner by use case', body: 'Choose Fanvue when the brand is openly AI-generated and wants the clearest AI-creator positioning in reviewed sources. Consider OnlyFans when existing audience demand, creator familiarity, or market reach matters more, but constrain the launch to verified-creator likeness, clear AI labeling, and acceptable-use review.' },
      { heading: 'Criteria', body: 'This comparison evaluates AI-content clarity, payout model, verification/consent risk, public discovery fit, automation clarity, and operator documentation quality. It is not an earnings prediction.' },
      { heading: 'Fanvue strengths and cautions', body: 'Fanvue is stronger on public AI-creator clarity and documented AI-generated content rules. Cautions include moderation discretion, deepfake/real-person restrictions, age-appearance rules, payout workflow requirements, and the need to keep disclosure clear.' },
      { heading: 'OnlyFans strengths and cautions', body: 'OnlyFans has large category awareness and creator familiarity, plus official AI-content guidance that should be read alongside terms and acceptable-use rules. For synthetic creators, the caution is narrower fit: verify the creator likeness, label AI-generated or altered content clearly, document consent, and avoid assuming that a fully fictional AI companion brand will pass account review without friction.' }
    ],
    framework: [
      { label: 'AI-content clarity', detail: 'Fanvue is broad and explicit for AI creators; OnlyFans is narrower around verified creator likeness and clear AI labeling.' },
      { label: 'Monetization', detail: 'Both are fan-platform style monetization candidates; payout terms, chargebacks, and fees must be verified from official terms.' },
      { label: 'Risk', detail: 'Both require age, consent, likeness, copyright, disclosure, and moderation controls.' },
      { label: 'Operator pick', detail: 'Fanvue for broad explicit AI creator launches; OnlyFans for verified-likeness AI content only after conservative review.' }
    ],
    internalLinks: [
      { href: '/platforms/fanvue', label: 'Fanvue for AI creators' },
      { href: '/platforms/onlyfans', label: 'OnlyFans platform record' },
      { href: '/guides/ai-influencer-ai-girlfriend-monetization', label: 'AI influencer monetization guide' },
      { href: '/guides/ai-creator-disclosure', label: 'AI creator disclosure guide' },
      { href: '/methodology', label: 'AI Creator Ops comparison methodology' }
    ],
    sourceIds: ['fanvue-ai-content-allowed', 'fanvue-ai-generated-content', 'fanvue-ai-generated-model-definition', 'fanvue-creator-earnings-payouts', 'onlyfans-terms', 'onlyfans-help-ai-content', 'onlyfans-acceptable-use-policy']
  },
  {
    slug: 'instagram-vs-tiktok-for-ai-creators',
    title: 'Instagram vs TikTok for AI Creators: Discovery, Disclosure, and Automation Comparison',
    shortTitle: 'Instagram vs TikTok for AI Creators',
    description: 'Comparison of Instagram and TikTok for AI influencers, virtual influencers, AI models, AI girlfriend funnels, synthetic influencers, and creator automation workflows.',
    badge: 'COMPARISON',
    canonicalPath: '/comparisons/instagram-vs-tiktok-for-ai-creators',
    lastUpdated: '2026-05-18',
    directAnswer: 'Use Instagram when the AI creator brand needs a polished portfolio, visual trust, link/funnel support, and Meta publishing infrastructure. Use TikTok when the priority is motion-first discovery and fast creative testing. For serious operator workflows, run both only if the team can satisfy each platform’s AI-labeling, API, format, and moderation requirements.',
    keyFacts: [
      'Instagram Content Publishing API supports professional-account publishing workflows with documented media-container and publish endpoints and a 100 API-published-posts-per-24-hour limit.',
      'TikTok Content Posting API supports direct posting and upload/draft workflows, but unaudited clients are restricted to private viewing mode until audit approval.',
      'Both platforms have AI-generated or altered-media labeling expectations for realistic synthetic media in specific contexts.'
    ],
    sections: [
      { heading: 'Winner by use case', body: 'Instagram wins for visual identity, editorial grid, link-in-bio funnels, and controlled brand presentation. TikTok wins for short-form testing, motion hooks, and discovery volatility. A virtual influencer with strong lore may use Instagram as the canonical gallery and TikTok as the motion lab.' },
      { heading: 'Automation comparison', body: 'Instagram has official Content Publishing API documentation for professional accounts and supported media types. TikTok also offers Content Posting APIs, but app audit status affects whether posts can go public from the integration. Operators should not assume either platform allows unrestricted bot-like publishing.' },
      { heading: 'Disclosure and synthetic media risk', body: 'Meta, TikTok, and related platform rules can require labels or disclosure for realistic AI-generated or meaningfully altered media. AI creator teams should pre-classify each asset by realism, media type, and claim risk before scheduling.' },
      { heading: 'Content strategy', body: 'Instagram favors consistent identity, aesthetic repetition, carousels, Reels, and profile trust. TikTok favors hook speed, embodied motion, trend translation, and test volume. For AI girlfriend or AI model funnels, keep public posts safer and route deeper offers off-platform within policy.' }
    ],
    framework: [
      { label: 'Instagram', detail: 'Best for identity trust, polished public brand, profile funnel, and API-backed scheduled publishing.' },
      { label: 'TikTok', detail: 'Best for discovery testing, motion-first edits, trend experiments, and early demand signals.' },
      { label: 'Use both when', detail: 'You have enough QA capacity for identity, disclosure, format adaptation, and moderation review.' }
    ],
    internalLinks: [
      { href: '/platforms/instagram', label: 'Instagram for AI creators' },
      { href: '/platforms/tiktok', label: 'TikTok for AI creators' },
      { href: '/guides/how-to-build-ai-influencer-brand', label: 'How to build an AI influencer brand' },
      { href: '/guides/ai-creator-disclosure', label: 'AI creator disclosure guide' },
      { href: '/methodology', label: 'AI Creator Ops comparison methodology' }
    ],
    sourceIds: ['meta-instagram-content-publishing', 'meta-community-standards-misinformation-ai-disclosure', 'tiktok-content-posting-api-get-started', 'tiktok-content-posting-api-product', 'tiktok-aigc-support']
  }
];

export function getGuidePage(slug: string) {
  return guidePages.find((page) => page.slug === slug);
}

export function getComparisonPage(slug: string) {
  return comparisonPages.find((page) => page.slug === slug);
}
