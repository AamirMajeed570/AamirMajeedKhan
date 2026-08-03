import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/projects',
  ].map((route) => ({
    url: `${siteConfig.canonical}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.canonical}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
