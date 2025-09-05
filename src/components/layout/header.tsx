'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Navigation } from './navigation';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-sm border-b shadow-sm'
                    : 'bg-transparent'
            }`}
        >
            <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
                <Link href='/' className='flex items-center gap-2'>
                    <img
                        src='/icon.png'
                        alt='Yomogi Server icon'
                        className={`h-12 w-12 transition-all duration-300 ${
                            isScrolled ? '' : 'drop-shadow-lg'
                        }`}
                    />
                    <h1
                        className={`text-2xl font-bold max-sm:hidden transition-colors duration-300 ${
                            isScrolled
                                ? 'text-gray-900'
                                : 'text-white drop-shadow-lg'
                        }`}
                    >
                        Yomogi Server
                    </h1>
                </Link>
                <nav className='flex items-center gap-4'>
                    <Link
                        href='https://discord.gg/qkjfv5YGvY'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`flex items-center gap-2 transition-colors duration-300 ${
                            isScrolled
                                ? 'text-gray-700 hover:text-gray-900'
                                : 'text-white drop-shadow-lg hover:text-gray-200'
                        }`}
                    >
                        <MessageCircle className='w-4 h-4' />
                        Discordはこちら
                    </Link>
                    <Navigation isScrolled={isScrolled} />
                </nav>
            </div>
        </header>
    );
}
