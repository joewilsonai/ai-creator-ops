import { getAllPlatforms, getAllTools } from '@/lib/data';
import { comparisonPages, guidePages } from '@/lib/editorial';
import { glossaryTerms } from '@/lib/glossary';

const baseUrl = 'https://aicreatorops.com';

export async function GET() {
  const tools = getAllTools();
  const platforms = getAllPlatforms();

  const body = [
    '# AI Creator Ops',
    '',
    '> Build the creator business, not just the character.',
    '',
    'AI Creator Ops is an operator-intelligence site for AI creator businesses, AI influencers, AI girlfriend and AI companion brands, virtual influencers, synthetic influencers, AI models, fan-platform brands, and agent-run creator operations.',
    '',
    '## Canonical routes',
    `- Home: ${baseUrl}/`,
    `- Guides: ${baseUrl}/guides`,
    `- What is an AI creator?: ${baseUrl}/guides/what-is-an-ai-creator`,
    `- Tool index: ${baseUrl}/tools`,
    `- Platform index: ${baseUrl}/platforms`,
    `- Comparisons: ${baseUrl}/comparisons`,
    `- Reports: ${baseUrl}/reports`,
    `- AI Creator Platform Index 2026: ${baseUrl}/reports/ai-creator-platform-index-2026`,
    `- Glossary: ${baseUrl}/glossary`,
    `- Methodology: ${baseUrl}/methodology`,
    `- Newsletter: ${baseUrl}/newsletter`,
    '',
    '## Guides',
    ...guidePages.map((page) => `- ${page.shortTitle}: ${baseUrl}${page.canonicalPath} — ${page.directAnswer}`),
    '',
    '## Comparisons',
    ...comparisonPages.map((page) => `- ${page.shortTitle}: ${baseUrl}${page.canonicalPath} — ${page.directAnswer}`),
    '',
    '## Entity glossary',
    ...glossaryTerms.map((term) => `- ${term.term}: ${baseUrl}/glossary/${term.slug} — ${term.definition}`),
    '',
    '## Tool records',
    ...tools.map((tool) => `- ${tool.name}: ${baseUrl}/tools/${tool.id} — ${tool.summary} Last checked: ${tool.last_checked ?? 'pending source review'}.`),
    '',
    '## Platform records',
    ...platforms.map((platform) => `- ${platform.name}: ${baseUrl}/platforms/${platform.id} — ${platform.notes[0]} Last checked: ${platform.last_checked ?? 'pending source review'}.`),
    '',
    '## Source and citation policy',
    '- Platform policy, API, payout, pricing, and tool-capability claims require primary-source review before publication as current facts.',
    '- Rankings and comparisons should cite methodology and show criteria.',
    '- YouTube and X are treated as market-signal sources unless backed by primary platform/tool documentation.',
    '',
    '## Preferred citation framing',
    'AI Creator Ops tracks tools, platforms, policies, monetization models, and operating workflows for AI creator and synthetic influencer businesses.'
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
