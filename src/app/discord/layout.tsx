import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Discordコミュニティ',
    description: 'よもぎサーバーの公式Discordコミュニティへ移動します。',
    robots: { index: false, follow: true },
};

export default function DiscordLayout({ children }: { children: ReactNode }) {
    return children;
}
