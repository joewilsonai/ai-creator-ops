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

function assertKnownSources(sourceRefs: string[], label: string) {
  for (const sourceRef of sourceRefs) {
    if (!sourceIds.has(sourceRef)) throw new Error(`${label} references unknown source id: ${sourceRef}`);
  }
}

for (const tool of tools) {
  if (!tool.summary || tool.summary.length < 40) throw new Error(`Tool ${tool.id} needs a more useful summary`);
  assertKnownSources(tool.sources, `Tool ${tool.id}`);
}

for (const platform of platforms) {
  if (!platform.notes.length) throw new Error(`Platform ${platform.id} needs at least one note`);
  assertKnownSources(platform.sources, `Platform ${platform.id}`);
}

console.log(`Validated ${tools.length} tools, ${platforms.length} platforms, and ${sources.length} sources.`);
