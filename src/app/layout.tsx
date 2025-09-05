import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Geist, Geist_Mono } from 'next/font/google';
import type React from 'react';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Yomogi Server',
    description: '24時間365日いつでもログイン可能なMCBE版生活サーバーです！経済システムや豊富なコンテンツで、初心者から上級者まで楽しめます！',
    keywords: 'Minecraft, MCBE, サーバー, サバイバル,生活鯖, Yomogi Server',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ja'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className='min-h-screen bg-gradient-to-br from-primary/10 to-primary/5 flex flex-col'>
                    <Header />
                    <div className='flex-1'>{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
