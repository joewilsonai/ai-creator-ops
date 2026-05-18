import { describe, expect, it } from 'vitest';
import { getAllPlatforms, getAllSources, getAllTools, getPlatform, getSource, getTool } from './data';

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
});
