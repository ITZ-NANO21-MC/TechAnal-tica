import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://techanalitica-app.com';

  const staticRoutes = [
    '',
    '/guias',
    '/galeria',
    '/catalogo',
    '/contacto',
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // En un futuro, aquí se podrían añadir rutas dinámicas para las guías.

  return [...staticPages];
}
