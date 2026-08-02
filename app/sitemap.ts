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
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.canonical}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
