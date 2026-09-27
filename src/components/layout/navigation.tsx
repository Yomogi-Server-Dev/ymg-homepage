'use client';

import { DiscordIcon, WolfIcon } from '@/components/icons/brand-icons';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { TUTORIAL_UNDER_CONSTRUCTION } from '@/config/app';
import { siteLinks } from '@/data/links';
import { serverInfo } from '@/data/server';
import {
    BookOpen,
    ExternalLink,
    FileCheck2,
    Home,
    Map as MapIcon,
    Megaphone,
    Menu,
    Newspaper,
    Play,
    UsersRound,
    Youtube,
} from 'lucide-react';
import Link from 'next/link';

const navItems = [
    { label: 'ホーム', href: '/', icon: Home, external: false },
    {
        label: '生活サーバー入門',
        href: '/tutorial',
        icon: MapIcon,
        external: false,
        disabled: TUTORIAL_UNDER_CONSTRUCTION,
    },
    { label: 'サーバーに参加', href: '/join', icon: Play, external: false },
    {
        label: 'マイクラ人狼',
        href: '/werewolf',
        icon: WolfIcon,
        external: false,
    },
    {
        label: 'くわしいガイド',
        href: siteLinks.guide,
        icon: BookOpen,
        external: true,
    },
    {
        label: '利用規約',
        href: siteLinks.rules,
        icon: FileCheck2,
        external: true,
    },
    { label: 'お知らせ', href: '/notices', icon: Megaphone, external: false },
    {
        label: 'チームよもぎ',
        href: '/#team',
        icon: UsersRound,
        external: false,
    },
    {
        label: '公式ブログ',
        href: siteLinks.blog,
        icon: Newspaper,
        external: true,
    },
    {
        label: 'Discord',
        href: serverInfo.discordInvite,
        icon: DiscordIcon,
        external: true,
    },
    {
        label: 'YouTube',
        href: siteLinks.youtube,
        icon: Youtube,
        external: true,
    },
];

interface NavigationProps {
    theme?: 'default' | 'werewolf';
}

export function Navigation({ theme = 'default' }: NavigationProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant='ghost'
                    size='icon'
                    className={`size-11 rounded-[1rem] shadow-[0_4px_0_rgba(51,65,48,0.14)] active:translate-y-0.5 active:shadow-none lg:hidden ${
                        theme === 'werewolf'
                            ? 'text-stone-200 hover:bg-white/10 hover:text-white'
                            : 'text-slate-700 hover:bg-lime-50 hover:text-lime-800'
                    }`}
                >
                    <Menu className='size-6' />
                    <span className='sr-only'>メニューを開く</span>
                </Button>
            </SheetTrigger>
            <SheetContent
                side='right'
                className='w-[min(90vw,380px)] overflow-y-auto overscroll-contain border-l-slate-200 p-0 sm:max-w-[380px]'
            >
                <SheetHeader className='border-b border-slate-100 px-6 py-7 text-left'>
                    <p className='text-xs font-bold tracking-[0.14em] text-lime-700'>
                        よもぎメニュー
                    </p>
                    <SheetTitle className='text-2xl font-black tracking-tight text-slate-900'>
                        どこへ行く？
                    </SheetTitle>
                </SheetHeader>

                <nav className='px-4 py-5' aria-label='モバイルナビゲーション'>
                    <ul className='space-y-1'>
                        {navItems.map((item) => {
                            const Icon = item.icon;

                            if (item.disabled) {
                                return (
                                    <li key={item.label}>
                                        <div
                                            aria-disabled='true'
                                            className='flex cursor-not-allowed items-center gap-4 rounded-2xl px-4 py-3.5 text-slate-400'
                                        >
                                            <span className='flex size-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700'>
                                                <Icon className='size-5' />
                                            </span>
                                            <span className='font-bold'>
                                                {item.label}
                                            </span>
                                            <span className='ml-auto rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-black text-amber-700'>
                                                工事中！
                                            </span>
                                        </div>
                                    </li>
                                );
                            }

                            return (
                                <li key={item.label}>
                                    <SheetClose asChild>
                                        <Link
                                            href={item.href}
                                            target={
                                                item.external
                                                    ? '_blank'
                                                    : undefined
                                            }
                                            rel={
                                                item.external
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }
                                            className='group flex items-center gap-4 rounded-2xl px-4 py-3.5 text-slate-700 transition hover:bg-lime-50 hover:text-lime-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-400/40'
                                        >
                                            <span className='flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition group-hover:bg-lime-100 group-hover:text-lime-700'>
                                                <Icon className='size-5' />
                                            </span>
                                            <span className='font-bold'>
                                                {item.label}
                                            </span>
                                            {item.external && (
                                                <ExternalLink className='ml-auto size-3.5 text-slate-300' />
                                            )}
                                        </Link>
                                    </SheetClose>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    );
}
