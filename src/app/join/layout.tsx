import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'サーバーに参加',
    description:
        'Minecraft Bedrock Editionからよもぎサーバーへ参加する方法と、サーバーアドレスをご案内します。',
    alternates: { canonical: '/join' },
};

export default function JoinLayout({ children }: { children: ReactNode }) {
    return children;
}
