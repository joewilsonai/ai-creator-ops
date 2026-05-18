import type { MetadataRoute } from 'next';
import { getAllPlatforms, getAllTools } from '@/lib/data';
import { glossaryTerms } from '@/lib/glossary';

const baseUrl = 'https://aicreatorops.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/guides', '/guides/what-is-an-ai-creator', '/tools', '/platforms', '/comparisons', '/reports', '/reports/ai-creator-platform-index-2026', '/glossary', '/methodology'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.7
  }));
  const toolRoutes = getAllTools().map((tool) => ({ url: `${baseUrl}/tools/${tool.id}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.6 }));
  const platformRoutes = getAllPlatforms().map((platform) => ({ url: `${baseUrl}/platforms/${platform.id}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.6 }));
  const glossaryRoutes = glossaryTerms.map((term) => ({ url: `${baseUrl}/glossary/${term.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.55 }));
  return [...staticRoutes, ...toolRoutes, ...platformRoutes, ...glossaryRoutes];
}
