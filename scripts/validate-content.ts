import { getAllPlatforms, getAllTools } from '../lib/data';

function assertUnique(ids: string[], label: string) {
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) throw new Error(`Duplicate ${label} id: ${id}`);
    seen.add(id);
  }
}

const tools = getAllTools();
const platforms = getAllPlatforms();

assertUnique(tools.map((tool) => tool.id), 'tool');
assertUnique(platforms.map((platform) => platform.id), 'platform');

for (const tool of tools) {
  if (!tool.summary || tool.summary.length < 40) throw new Error(`Tool ${tool.id} needs a more useful summary`);
}

for (const platform of platforms) {
  if (!platform.notes.length) throw new Error(`Platform ${platform.id} needs at least one note`);
}

console.log(`Validated ${tools.length} tools and ${platforms.length} platforms.`);
