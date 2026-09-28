import { BeginnerMarkIcon, DiscordIcon } from '@/components/icons/brand-icons';
import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import { TUTORIAL_UNDER_CONSTRUCTION } from '@/config/app';
import { siteLinks } from '@/data/links';
import { serverInfo } from '@/data/server';
import {
    ArrowRight,
    BookOpen,
    CircleHelp,
    ExternalLink,
    FileCheck2,
    HardHat,
    Images,
    Megaphone,
    Newspaper,
    Play,
    UsersRound,
    Youtube,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
    {
        title: '参加する',
        description: 'サーバーの入り方',
        href: '/join',
        icon: Play,
        external: false,
        color: 'bg-[#b7e987] text-[#20381d]',
    },
    {
        title: '初めての方',
        description: TUTORIAL_UNDER_CONSTRUCTION
            ? '工事中！'
            : '暮らしの始めかた',
        href: '/tutorial',
        icon: BeginnerMarkIcon,
        external: false,
        disabled: TUTORIAL_UNDER_CONSTRUCTION,
        color: 'bg-[#ffe184] text-[#4b390d]',
    },
    {
        title: '利用規約',
        description: '大切なルール',
        href: siteLinks.rules,
        icon: FileCheck2,
        external: true,
        color: 'bg-white text-[#273227]',
    },
    {
        title: 'お知らせ',
        description: '新しいできごと',
        href: '/notices',
        icon: Megaphone,
        external: false,
        color: 'bg-[#ffae9f] text-[#552820]',
    },
    {
        title: 'ブログ',
        description: 'よもぎのお話',
        href: siteLinks.blog,
        icon: Newspaper,
        external: true,
        color: 'bg-[#bfe9ff] text-[#1c4052]',
    },
    {
        title: 'Discord',
        description: 'みんなと話す',
        href: serverInfo.discordInvite,
        icon: DiscordIcon,
        external: true,
        color: 'bg-[#7768ee] text-white',
    },
];

export function PortalBoard() {
    return (
        <section
            id='portal'
            className='mc-ground-biome relative scroll-mt-28 overflow-hidden bg-[#fffaf2] pb-13 pt-5 sm:pb-13 sm:pt-5 lg:pb-18 lg:pt-8'
        >
            <DecorativeMinecraftBlock
                type='diamond'
                className='-left-28 top-36 size-64 -rotate-6 opacity-25'
            />
            <DecorativeMinecraftBlock
                type='stone'
                className='-right-20 bottom-24 size-52 rotate-6 opacity-25'
            />
            <MinecraftBlocks
                biome='overworld'
                className='absolute -right-8 top-20 hidden opacity-75 lg:grid'
            />

            <div className='relative mx-auto w-full max-w-6xl px-5 sm:px-8'>
                <div className='mx-auto flex w-full max-w-xl items-center justify-center gap-2 sm:gap-8'>
                    <div className='min-w-0 text-center'>
                        <span className='mc-section-chip inline-flex rounded-full bg-[#e7f5d7] px-4 py-2 text-xs font-black text-[#4b7640]'>
                            よもぎの案内図
                        </span>
                        <h2 className='mt-5 whitespace-nowrap text-3xl font-black tracking-[-0.045em] text-[#1f2c20] min-[360px]:text-4xl sm:text-6xl'>
                            どこへ行く？
                        </h2>
                        <p className='mt-4 text-xs font-bold text-[#718071] min-[360px]:text-sm sm:text-base'>
                            やりたいことを選んでね
                        </p>
                    </div>
                    <div className='pointer-events-none relative w-20 shrink-0 select-none min-[360px]:w-24 sm:w-36'>
                        <span className='absolute bottom-[4%] left-[18%] h-[9%] w-[64%] rounded-[50%] bg-[#477234]/10 blur-sm' />
                        <Image
                            src='/pictures/index/top/misia-sd-display.webp'
                            alt=''
                            width={540}
                            height={720}
                            sizes='(max-width: 359px) 80px, (max-width: 639px) 96px, 144px'
                            quality={90}
                            draggable={false}
                            className='storybook-avatar relative h-auto w-full drop-shadow-[0_8px_8px_rgba(50,77,40,0.12)] motion-safe:[animation-delay:-2s]'
                        />
                    </div>
                </div>

                <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                    {destinations.map((item, index) => {
                        const Icon = item.icon;
                        const cardContent = (
                            <>
                                <span className='mc-item-slot flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/75 shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110'>
                                    <Icon className='size-7' />
                                </span>
                                <span className='min-w-0'>
                                    <span className='block text-xl font-black sm:text-2xl'>
                                        {item.title}
                                    </span>
                                    <span className='mt-1 block text-sm font-bold opacity-60'>
                                        {item.description}
                                    </span>
                                </span>
                                <span className='ml-auto flex size-10 shrink-0 items-center justify-center rounded-full bg-white/65 transition-transform group-hover:translate-x-1'>
                                    {item.disabled ? (
                                        <HardHat className='size-4' />
                                    ) : item.external ? (
                                        <ExternalLink className='size-4' />
                                    ) : (
                                        <ArrowRight className='size-4' />
                                    )}
                                </span>
                            </>
                        );

                        if (item.disabled) {
                            return (
                                <div
                                    key={item.title}
                                    aria-disabled='true'
                                    className={`kid-map-card flex min-h-44 cursor-not-allowed items-center gap-5 overflow-hidden rounded-[2rem] p-6 opacity-75 sm:p-7 ${item.color}`}
                                >
                                    {cardContent}
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={
                                    item.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                                className={`kid-map-card group flex min-h-44 items-center gap-5 overflow-hidden rounded-[2rem] p-6 transition duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8ed35f]/50 sm:p-7 ${item.color}`}
                            >
                                {cardContent}
                            </Link>
                        );
                    })}
                </div>

                <div className='mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-black text-[#647164]'>
                    <Link
                        href={siteLinks.guide}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 transition hover:text-[#3f6f34]'
                    >
                        <BookOpen className='size-4' />
                        くわしいガイド
                    </Link>
                    <Link
                        href={siteLinks.faq}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 transition hover:text-[#3f6f34]'
                    >
                        <CircleHelp className='size-4' />
                        よくある質問
                    </Link>
                </div>
            </div>
        </section>
    );
}
