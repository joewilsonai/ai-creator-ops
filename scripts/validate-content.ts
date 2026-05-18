import * as fs from 'node:fs';
import * as path from 'node:path';
import sitemap from '../app/sitemap';
import { GET as getLlmsTxt } from '../app/llms.txt/route';
import { comparisonPages, guidePages } from '../lib/editorial';
import { glossarySourceIds, glossaryTerms } from '../lib/glossary';
import { getAllPlatforms, getAllSources, getAllTools } from '../lib/data';

function assertUnique(ids: string[], label: string) {
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) throw new Error(`Duplicate ${label} id: ${id}`);
    seen.add(id);
  }
}

const tools = getAllTools();
const platforms = getAllPlatforms();
const sources = getAllSources();

assertUnique(tools.map((tool) => tool.id), 'tool');
assertUnique(platforms.map((platform) => platform.id), 'platform');
assertUnique(sources.map((source) => source.id), 'source');
assertUnique(sources.map((source) => source.url), 'source URL');

const sourceIds = new Set(sources.map((source) => source.id));
const baseUrl = 'https://aicreatorops.com';

function assertKnownSources(sourceRefs: string[], label: string) {
  for (const sourceRef of sourceRefs) {
    if (!sourceIds.has(sourceRef)) throw new Error(`${label} references unknown source id: ${sourceRef}`);
  }
}

function assertSourceVisibility(sourceRefs: string[], label: string) {
  if (!sourceRefs.length) throw new Error(`${label} needs at least one visible clickable source reference`);
  assertKnownSources(sourceRefs, label);
}

function assertDescriptiveSource(sourceId: string) {
  const source = sources.find((candidate) => candidate.id === sourceId);
  if (!source) return;
  if (source.title.trim().length < 8 || /^source\s*\d*$/i.test(source.title.trim())) {
    throw new Error(`Source ${source.id} needs a descriptive anchor label, not a generic label: ${source.title}`);
  }
  if (!source.publisher.trim()) throw new Error(`Source ${source.id} needs a publisher for citation visibility`);
  if (!source.retrieved_at.trim()) throw new Error(`Source ${source.id} needs retrieved_at metadata`);
}

for (const source of sources) assertDescriptiveSource(source.id);

for (const tool of tools) {
  if (!tool.summary || tool.summary.length < 40) throw new Error(`Tool ${tool.id} needs a more useful summary`);
  assertSourceVisibility(tool.sources, `Tool ${tool.id}`);
}

for (const platform of platforms) {
  if (!platform.notes.length) throw new Error(`Platform ${platform.id} needs at least one note`);
  assertSourceVisibility(platform.sources, `Platform ${platform.id}`);
}

for (const page of [...guidePages, ...comparisonPages]) {
  assertSourceVisibility(page.sourceIds, `Editorial page ${page.canonicalPath}`);
}

const publicRoutes = new Set([
  '/',
  '/guides',
  '/guides/what-is-an-ai-creator',
  '/tools',
  '/platforms',
  '/comparisons',
  '/reports',
  '/reports/ai-creator-platform-index-2026',
  '/glossary',
  '/methodology',
  '/newsletter',
  ...guidePages.map((page) => page.canonicalPath),
  ...comparisonPages.map((page) => page.canonicalPath),
  ...tools.map((tool) => `/tools/${tool.id}`),
  ...platforms.map((platform) => `/platforms/${platform.id}`),
  ...glossaryTerms.map((term) => `/glossary/${term.slug}`)
]);

for (const page of [...guidePages, ...comparisonPages]) {
  for (const link of page.internalLinks) {
    if (!publicRoutes.has(link.href)) throw new Error(`Editorial page ${page.canonicalPath} links to unknown route: ${link.href}`);
  }
}

for (const term of glossaryTerms) {
  const sourceRefs = glossarySourceIds[term.slug] ?? [];
  assertSourceVisibility(sourceRefs, `Glossary page /glossary/${term.slug}`);
  for (const link of term.related) {
    if (!publicRoutes.has(link.href)) throw new Error(`Glossary page /glossary/${term.slug} links to unknown route: ${link.href}`);
    if (!link.label || link.label.trim().length < 4) throw new Error(`Glossary page /glossary/${term.slug} has a non-descriptive internal link label for ${link.href}`);
  }
}

const sitemapUrls = new Set(sitemap().map((entry) => entry.url.replace(baseUrl, '') || '/'));
for (const route of publicRoutes) {
  if (!sitemapUrls.has(route)) throw new Error(`Public route missing from sitemap: ${route}`);
}

async function validateRouteSurfaces() {
  const llmsResponse = await getLlmsTxt();
  const llmsText = await llmsResponse.text();
  for (const route of publicRoutes) {
    if (!llmsText.includes(`${baseUrl}${route === '/' ? '/' : route}`)) throw new Error(`Public route missing from llms.txt: ${route}`);
  }
}

function walkFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkFiles(fullPath);
    return /\.(tsx|ts)$/.test(entry.name) ? [fullPath] : [];
  });
}

const filesToScan = [...walkFiles('app'), ...walkFiles('components')];
const internalHrefPattern = /href=(?:["'](\/[^"'#?]*)["']|\{["'](\/[^"'#?]*)["']\})/g;

for (const filePath of filesToScan) {
  const raw = fs.readFileSync(filePath, 'utf8');
  if (raw.includes('nofollow')) throw new Error(`Do not use nofollow for editorial citations: ${filePath}`);

  for (const line of raw.split('\n')) {
    if (line.includes('<a') && /href=\{[^}]*\.url\}/.test(line) && !line.includes('rel="noopener noreferrer"')) {
      throw new Error(`External data-driven anchor missing rel="noopener noreferrer": ${filePath}`);
    }
    if (line.includes('<a') && /href=["']https?:\/\//.test(line) && !line.includes('rel="noopener noreferrer"')) {
      throw new Error(`External literal anchor missing rel="noopener noreferrer": ${filePath}`);
    }
  }

  let match: RegExpExecArray | null;
  while ((match = internalHrefPattern.exec(raw)) !== null) {
    const href = match[1] ?? match[2];
    if (!href || href.startsWith('/_next')) continue;
    if (!publicRoutes.has(href)) throw new Error(`Internal link points at unknown public route: ${href} in ${filePath}`);
  }
}

validateRouteSurfaces()
  .then(() => {
    console.log(`Validated ${tools.length} tools, ${platforms.length} platforms, ${sources.length} sources, and ${publicRoutes.size} public routes.`);
  })
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  });
