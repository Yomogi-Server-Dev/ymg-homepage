'use client';

import { Button } from '@/components/ui/button';
import { APP_CONFIG } from '@/config';
import { serverInfo } from '@/data/server';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DiscordPage() {
    const [showFallback, setShowFallback] = useState(false);
    const [redirecting, setRedirecting] = useState(true);

    useEffect(() => {
        window.location.href = serverInfo.discordInvite;
        const timer = setTimeout(() => {
            setRedirecting(false);
            setShowFallback(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleDiscordOpen = () => {
        window.open(serverInfo.discordInvite, '_blank');
    };

    return (
        <div className='min-h-screen flex items-center justify-center p-4'>
            <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center'>
                <div className='mb-6'>
                    <MessageCircle className='w-16 h-16 mx-auto mb-4 text-indigo-600' />
                    <h1 className='text-2xl font-bold text-gray-800 mb-2'>
                        {APP_CONFIG.name} Discord
                    </h1>

                    {redirecting ? (
                        <p className='text-gray-600'>
                            Discordに移動しています...
                        </p>
                    ) : (
                        <p className='text-gray-600'>
                            コミュニティに参加して、他のプレイヤーと交流しましょう！
                        </p>
                    )}
                </div>

                {redirecting && (
                    <div className='mb-6'>
                        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto'></div>
                    </div>
                )}

                {showFallback && (
                    <>
                        <div className='mb-6'>
                            <Button
                                onClick={handleDiscordOpen}
                                size='lg'
                                className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold'
                                disabled={!serverInfo.discordInvite}
                            >
                                <ExternalLink className='w-5 h-5 mr-2' />
                                Discordで開く
                            </Button>
                        </div>
                    </>
                )}

                <div className='mt-6 pt-4 border-t'>
                    <a
                        href='/'
                        className='text-sm inline-block px-4 py-2 border rounded hover:bg-gray-100 transition-colors'
                    >
                        戻る
                    </a>
                </div>
            </div>
        </div>
    );
}
