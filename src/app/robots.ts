import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://ymg24.org/sitemap.xml',
        host: 'https://ymg24.org',
    };
}
