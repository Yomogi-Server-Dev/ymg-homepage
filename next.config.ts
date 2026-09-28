import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        qualities: [75, 90],
    },
    turbopack: {
        root: process.cwd(),
    },
    async headers() {
        if (process.env.NODE_ENV === 'production') return [];

        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex, nofollow, noarchive',
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/team',
                destination: '/#team',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
