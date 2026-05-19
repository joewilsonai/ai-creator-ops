import * as fs from 'node:fs';
import * as path from 'node:path';
import * as yaml from 'js-yaml';
import { z } from 'zod';

const dataDir = path.join(process.cwd(), 'data');

const ToolSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  url: z.string().url(),
  summary: z.string(),
  best_for: z.array(z.string()).default([]),
  pricing_model: z.string(),
  api_available: z.union([z.boolean(), z.literal('unknown')]),
  creator_ops_score: z.number().nullable(),
  policy_risk: z.enum(['low', 'medium', 'high', 'unknown']),
  sources: z.array(z.string()).default([]),
  last_checked: z.string().nullable()
});

const PlatformSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  ai_creator_friendliness_score: z.number().nullable(),
  monetization_score: z.number().nullable(),
  automation_score: z.number().nullable(),
  discovery_score: z.number().nullable(),
  policy_risk: z.enum(['low', 'medium', 'high', 'unknown']),
  notes: z.array(z.string()).default([]),
  sources: z.array(z.string()).default([]),
  last_checked: z.string().nullable()
});

const SourceSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  title: z.string(),
  publisher: z.string(),
  retrieved_at: z.string(),
  source_type: z.enum(['primary', 'secondary', 'market_signal']),
  notes: z.string()
});

const ComparisonSchema = z.object({
  id: z.string(),
  title: z.string(),
  entities: z.array(z.string()).min(2),
  intent: z.string(),
  criteria: z.array(z.string()).min(3),
  winner_by_use_case: z.array(z.object({
    use_case: z.string(),
    winner: z.string(),
    rationale: z.string()
  })).default([]),
  source_ids: z.array(z.string()).default([]),
  methodology_path: z.string(),
  last_checked: z.string().nullable()
});

export type Tool = z.infer<typeof ToolSchema>;
export type Platform = z.infer<typeof PlatformSchema>;
export type Source = z.infer<typeof SourceSchema>;
export type Comparison = z.infer<typeof ComparisonSchema>;

function readYaml<T>(fileName: string, schema: z.ZodSchema<T>): T {
  const fullPath = path.join(dataDir, fileName);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const parsed = yaml.load(raw);
  return schema.parse(parsed);
}

export function getAllTools(): Tool[] {
  return readYaml('tools.yaml', z.array(ToolSchema));
}

export function getTool(id: string): Tool | undefined {
  return getAllTools().find((tool) => tool.id === id);
}

export function getAllPlatforms(): Platform[] {
  return readYaml('platforms.yaml', z.array(PlatformSchema));
}

export function getPlatform(id: string): Platform | undefined {
  return getAllPlatforms().find((platform) => platform.id === id);
}

export function getAllSources(): Source[] {
  return readYaml('sources.yaml', z.array(SourceSchema));
}

export function getSource(id: string): Source | undefined {
  return getAllSources().find((source) => source.id === id);
}

export function getAllComparisons(): Comparison[] {
  return readYaml('comparisons.yaml', z.array(ComparisonSchema));
}

export function getComparison(id: string): Comparison | undefined {
  return getAllComparisons().find((comparison) => comparison.id === id);
}
