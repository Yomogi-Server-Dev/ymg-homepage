'use client';

import { DecorativeMinecraftBlock } from '@/components/ui/minecraft-blocks';
import { TUTORIAL_UNDER_CONSTRUCTION } from '@/config/app';
import { siteLinks } from '@/data/links';
import { serverInfo } from '@/data/server';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = [
    { label: '入ってみる', href: '/join', external: false },
    {
        label: TUTORIAL_UNDER_CONSTRUCTION
            ? '初めての方（工事中！）'
            : '生活サーバー入門',
        href: '/tutorial',
        external: false,
        disabled: TUTORIAL_UNDER_CONSTRUCTION,
    },
    { label: 'くわしいガイド', href: siteLinks.guide, external: true },
    { label: 'おやくそく', href: siteLinks.rules, external: true },
    { label: 'よくある質問', href: siteLinks.faq, external: true },
    { label: 'お知らせ', href: '/notices', external: false },
    { label: 'ブログ', href: siteLinks.blog, external: true },
    { label: 'マイクラ人狼', href: '/werewolf', external: false },
    { label: 'ギャラリー', href: '/gallery', external: false },
    { label: 'チームよもぎ', href: '/#team', external: false },
    { label: 'Discord', href: serverInfo.discordInvite, external: true },
    { label: 'NYB YouTube', href: siteLinks.youtube, external: true },
    { label: 'HT YouTube', href: siteLinks.youtubeHt, external: true },
];

export function Footer() {
    const pathname = usePathname();
    const surroundColor =
        pathname === '/'
            ? 'bg-[#fff0bb]'
            : pathname === '/werewolf'
              ? 'bg-[#0b0c0d]'
              : pathname === '/tutorial'
                ? 'bg-[#eaf6df]'
                : pathname === '/gallery'
                  ? 'bg-[#fff8ec]'
                : pathname.startsWith('/notices')
                  ? 'bg-[#fffaf2]'
                  : 'bg-[#f8fbf5]';

    return (
        <footer className={surroundColor}>
            <div className='mc-footer-shell relative overflow-hidden rounded-t-[3rem] bg-[#203020] text-white'>
                <DecorativeMinecraftBlock
                    type='diamond'
                    className='-right-28 -top-28 size-72 rotate-6 opacity-15'
                />
                <DecorativeMinecraftBlock
                    type='dirt'
                    className='-left-20 bottom-10 size-44 -rotate-6 opacity-10'
                />
                <div className='relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20'>
                    <div className='grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end'>
                        <div>
                            <Link
                                href='/'
                                className='inline-flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#9bdb68]/40'
                            >
                                <Image
                                    src='/icon.png'
                                    alt=''
                                    width={56}
                                    height={56}
                                    className='size-14 rounded-[1.25rem]'
                                />
                                <p className='text-lg font-black'>
                                    Yomogi Server
                                </p>
                            </Link>
                            <h2 className='mt-8 text-4xl font-black tracking-[-0.05em] sm:text-5xl'>
                                よもぎサーバーで会いましょう！
                            </h2>
                        </div>

                        <nav
                            className='flex flex-wrap gap-2 lg:justify-end'
                            aria-label='フッターナビゲーション'
                        >
                            {footerLinks.map((link) => {
                                if (link.disabled) {
                                    return (
                                        <span
                                            key={link.label}
                                            aria-disabled='true'
                                            className='inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-amber-200/15 bg-amber-200/5 px-4 py-2.5 text-sm font-black text-amber-100/45'
                                        >
                                            {link.label}
                                        </span>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        target={
                                            link.external
                                                ? '_blank'
                                                : undefined
                                        }
                                        rel={
                                            link.external
                                                ? 'noopener noreferrer'
                                                : undefined
                                        }
                                        className='group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-black text-white/65 transition hover:border-white/20 hover:bg-white/10 hover:text-white'
                                    >
                                        {link.label}
                                        {link.external && (
                                            <ArrowUpRight className='size-3 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    <div className='mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-bold text-white/35 sm:flex-row sm:items-center sm:justify-between'>
                        <p>
                            &copy; {new Date().getFullYear()} Yomogi Server ·{' '}
                            <Link
                                href='https://fontawesome.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition hover:text-white'
                            >
                                Icons by Font Awesome
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
