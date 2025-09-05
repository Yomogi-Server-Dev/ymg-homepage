'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from './navigation';

export function Header() {
    return (
        <header className='border-b sticky top-0 bg-white/80 backdrop-blur-sm z-50'>
            <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
                <Link href='/' className='flex items-center gap-2'>
                    <img
                        src='/icon.png'
                        alt='Yomogi Server icon'
                        className='h-12 w-12'
                    />
                    <h1 className='text-2xl font-bold max-sm:hidden'>
                        Yomogi Server
                    </h1>
                </Link>
                <nav className='flex items-center gap-4'>
                    <Link
                        href='https://discord.gg/qkjfv5YGvY'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'
                    >
                        <MessageCircle className='w-4 h-4' />
                        Discordはこちら
                    </Link>
                    <Navigation />
                </nav>
            </div>
        </header>
    );
}
