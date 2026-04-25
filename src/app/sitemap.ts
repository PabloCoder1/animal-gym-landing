// 📄 src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Troque pelo domínio real quando fizer o deploy (ex: https://animalgym.com.br)
  const baseUrl = 'https://animalgym.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}