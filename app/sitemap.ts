import type { MetadataRoute } from 'next';
import { getAllPlatforms, getAllTools } from '@/lib/data';

const baseUrl = 'https://aicreatorops.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/guides', '/tools', '/platforms', '/comparisons', '/reports', '/glossary', '/methodology'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.7
  }));
  const toolRoutes = getAllTools().map((tool) => ({ url: `${baseUrl}/tools/${tool.id}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.6 }));
  const platformRoutes = getAllPlatforms().map((platform) => ({ url: `${baseUrl}/platforms/${platform.id}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.6 }));
  return [...staticRoutes, ...toolRoutes, ...platformRoutes];
}
