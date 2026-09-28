'use client';

import { WerewolfPortalLink } from '@/components/features/werewolf-portal-link';
import { Button } from '@/components/ui/button';
import { TUTORIAL_UNDER_CONSTRUCTION } from '@/config/app';
import { siteLinks } from '@/data/links';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navigation } from './navigation';

const mainNavigation = [
    {
        label: TUTORIAL_UNDER_CONSTRUCTION
            ? '初めての方（工事中）'
            : 'チュートリアル',
        href: '/tutorial',
        external: false,
        disabled: TUTORIAL_UNDER_CONSTRUCTION,
    },
    { label: 'お知らせ', href: '/notices', external: false },
    { label: 'よもぎガイド', href: siteLinks.guide, external: true },
    { label: '利用規約', href: siteLinks.rules, external: true },
];

export function Header() {
    const pathname = usePathname();
    const isWerewolf = pathname === '/werewolf';

    return (
        <header className='fixed inset-x-0 top-3 z-50 px-3'>
            <div
                className={`mc-header-shell isolate mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-3 overflow-hidden rounded-[1.6rem] border px-3 backdrop-blur-xl transition-colors duration-500 sm:px-5 lg:px-7 ${
                    isWerewolf
                        ? 'border-red-200/10 bg-[#0b0809]/92'
                        : 'border-white/80 bg-white/92'
                }`}
            >
                <Link
                    href='/'
                    className='group flex shrink-0 items-center gap-2 rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-400/40 sm:gap-3'
                    aria-label='Yomogi Server トップページ'
                >
                    <Image
                        src='/icon.png'
                        alt=''
                        width={44}
                        height={44}
                        priority
                        className={`size-11 rounded-[1rem] ring-2 transition-transform group-hover:-rotate-3 group-hover:scale-105 ${isWerewolf ? 'ring-red-400/30' : 'ring-lime-300/55'}`}
                    />
                    <div>
                        <p
                            className={`text-sm font-black leading-tight transition-colors sm:hidden ${
                                isWerewolf ? 'text-white' : 'text-slate-900'
                            }`}
                        >
                            Yomogi Server
                        </p>
                        <p
                            className={`hidden text-base font-black leading-tight tracking-tight transition-colors sm:block ${
                                isWerewolf ? 'text-white' : 'text-slate-900'
                            }`}
                        >
                            Yomogi Server
                        </p>
                        <p
                            className={`hidden text-[10px] font-bold tracking-[0.15em] transition-colors sm:block ${
                                isWerewolf ? 'text-red-400' : 'text-lime-700'
                            }`}
                        >
                            {isWerewolf ? 'マイクラ人狼' : '生活サーバー'}
                        </p>
                    </div>
                </Link>

                <nav
                    className='hidden items-center gap-1 lg:flex'
                    aria-label='メインナビゲーション'
                >
                    {mainNavigation.map((item) => {
                        const className = `inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-black transition focus-visible:outline-none focus-visible:ring-4 ${
                            isWerewolf
                                ? 'text-stone-400 hover:bg-white/10 hover:text-white focus-visible:ring-red-400/40'
                                : 'text-slate-600 hover:bg-lime-50 hover:text-lime-800 focus-visible:ring-lime-400/40'
                        }`;

                        if (item.disabled) {
                            return (
                                <span
                                    key={item.label}
                                    aria-disabled='true'
                                    className={`${className} cursor-not-allowed opacity-55`}
                                >
                                    {item.label}
                                </span>
                            );
                        }

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                target={
                                    item.external ? '_blank' : undefined
                                }
                                rel={
                                    item.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                                className={className}
                            >
                                {item.label}
                                {item.external && (
                                    <ExternalLink className='size-3' />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className='flex items-center gap-2'>
                    {isWerewolf ? (
                        <Link
                            href='/'
                            className='group inline-flex h-11 items-center gap-2 rounded-[1rem] bg-white/8 px-4 text-sm font-black text-stone-200 shadow-[0_5px_0_#47363a] transition hover:-translate-y-0.5 hover:bg-lime-300 hover:text-slate-950 hover:shadow-[0_7px_0_#51763d] active:translate-y-1 active:shadow-[0_2px_0_#47363a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-300/30'
                        >
                            <ArrowLeft className='size-4 transition-transform group-hover:-translate-x-1' />
                            <span className='hidden sm:inline'>
                                生活サーバーに戻る
                            </span>
                        </Link>
                    ) : (
                        <WerewolfPortalLink compact />
                    )}
                    <Button
                        asChild
                        className={`hidden h-11 rounded-[1rem] px-5 font-bold text-white transition hover:-translate-y-0.5 active:translate-y-1 sm:inline-flex ${
                            isWerewolf
                                ? 'bg-red-700 shadow-[0_5px_0_#651a1a] hover:bg-red-600 hover:shadow-[0_7px_0_#651a1a] active:shadow-[0_2px_0_#651a1a]'
                                : 'bg-[#47753c] shadow-[0_5px_0_#2d5728] hover:bg-[#5d914f] hover:shadow-[0_7px_0_#2d5728] active:shadow-[0_2px_0_#2d5728]'
                        }`}
                    >
                        <Link href='/join'>
                            サーバーに入る
                            <ArrowRight className='size-4' />
                        </Link>
                    </Button>
                    <Navigation theme={isWerewolf ? 'werewolf' : 'default'} />
                </div>
            </div>
        </header>
    );
}
