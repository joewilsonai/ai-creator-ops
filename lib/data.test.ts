import { describe, expect, it } from 'vitest';
import { getAllComparisons, getAllPlatforms, getAllSources, getAllTools, getComparison, getPlatform, getSource, getTool } from './data';

describe('content data loaders', () => {
  it('loads seeded tool records with stable ids', () => {
    const tools = getAllTools();
    expect(tools.length).toBeGreaterThanOrEqual(10);
    expect(getTool('fanvue')?.name).toBe('Fanvue');
  });

  it('loads seeded platform records with policy risk metadata', () => {
    const platforms = getAllPlatforms();
    expect(platforms.length).toBeGreaterThanOrEqual(5);
    expect(getPlatform('instagram')?.policy_risk).toBe('medium');
  });

  it('loads primary source records with stable ids', () => {
    const sources = getAllSources();
    expect(sources.length).toBeGreaterThanOrEqual(15);
    expect(getSource('youtube-help-altered-synthetic-content')?.publisher).toBe('YouTube Help');
    expect(getSource('tiktok-aigc-support')?.source_type).toBe('primary');
  });

  it('loads structured comparison records with criteria and sources', () => {
    const comparisons = getAllComparisons();
    expect(comparisons.length).toBeGreaterThanOrEqual(7);
    expect(getComparison('fanvue-vs-onlyfans')?.criteria.length).toBeGreaterThanOrEqual(5);
    expect(getComparison('instagram-vs-tiktok-for-ai-creators')?.methodology_path).toBe('/methodology');
  });
});
