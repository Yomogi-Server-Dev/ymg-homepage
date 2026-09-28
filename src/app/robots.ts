import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://www.ymg24.org/sitemap.xml',
        host: 'https://www.ymg24.org',
    };
}
