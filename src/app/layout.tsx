import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/noto-sans-jp';
import './globals.css';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { siteLinks } from '@/data/links';
import { serverInfo } from '@/data/server';
import type React from 'react';

const siteUrl = 'https://www.ymg24.org';
const siteDescription =
    '建築、経済、会社、イベントを楽しめる、24時間参加可能なMinecraft Bedrock Edition生活サーバー。参加方法、利用規約、ガイド、最新情報を公式ポータルから確認できます。';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'よもぎサーバー | Minecraft BE 生活サーバー',
        template: '%s | よもぎサーバー',
    },
    description: siteDescription,
    applicationName: 'Yomogi Server',
    authors: [{ name: 'Yomogi Server Team', url: siteUrl }],
    creator: 'Yomogi Server Team',
    publisher: 'Yomogi Server Team',
    category: 'game',
    keywords: [
        'Minecraft',
        'Minecraft Bedrock Edition',
        'MCBE',
        '生活サーバー',
        'マイクラサーバー',
        'よもぎサーバー',
        'Yomogi Server',
    ],
    openGraph: {
        type: 'website',
        locale: 'ja_JP',
        url: siteUrl,
        siteName: 'Yomogi Server',
        title: 'よもぎサーバー | 建てて、遊んで、暮らしを紡ぐ。',
        description: siteDescription,
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                type: 'image/jpeg',
                alt: 'よもぎサーバーの都市エリア',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'よもぎサーバー | Minecraft BE 生活サーバー',
        description: siteDescription,
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/icon.png',
    },
};

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Yomogi Server',
            alternateName: 'よもぎサーバー',
            description: siteDescription,
            inLanguage: 'ja-JP',
            publisher: { '@id': `${siteUrl}/#organization` },
        },
        {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'Yomogi Server',
            url: siteUrl,
            logo: `${siteUrl}/icon.png`,
            sameAs: [
                serverInfo.discordInvite,
                siteLinks.youtube,
                siteLinks.youtubeHt,
            ],
        },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ja'>
            <body className='antialiased'>
                <script type='application/ld+json'>
                    {JSON.stringify(structuredData)}
                </script>
                <div className='min-h-screen bg-primary-50/20 flex flex-col'>
                    <Header />
                    <div className='flex flex-1 flex-col'>{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
