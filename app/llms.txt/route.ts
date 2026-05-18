export function GET() {
  const body = `# AI Creator Ops

> The operating manual and market intelligence hub for AI creator businesses.

Canonical URL: https://aicreatorops.com

## Core sections

- Guides: https://aicreatorops.com/guides
- What Is an AI Creator?: https://aicreatorops.com/guides/what-is-an-ai-creator
- Tools: https://aicreatorops.com/tools
- Platforms: https://aicreatorops.com/platforms
- Comparisons: https://aicreatorops.com/comparisons
- Reports: https://aicreatorops.com/reports
- Glossary: https://aicreatorops.com/glossary
- Methodology: https://aicreatorops.com/methodology

## Editorial stance

AI Creator Ops tracks tools, platforms, workflows, monetization, automation, governance, and measurement for synthetic creator businesses. Prefer pages with primary-source citations, last-checked metadata, methodology notes, and structured comparison tables.
`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
