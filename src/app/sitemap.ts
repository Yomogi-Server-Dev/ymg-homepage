import type { MetadataRoute } from 'next';
import { TUTORIAL_UNDER_CONSTRUCTION } from '@/config/app';

const baseUrl = 'https://ymg24.org';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/join`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...(TUTORIAL_UNDER_CONSTRUCTION
            ? []
            : [
                  {
                      url: `${baseUrl}/tutorial`,
                      lastModified: new Date(),
                      changeFrequency: 'monthly' as const,
                      priority: 0.9,
                  },
              ]),
        {
            url: `${baseUrl}/notices`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/werewolf`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.75,
        },
    ];
}
