import { DiscordIcon, WolfIcon } from '@/components/icons/brand-icons';
import { Button } from '@/components/ui/button';
import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import { serverInfo } from '@/data/server';
import {
    AlertTriangle,
    ArrowDown,
    ArrowRight,
    Clock3,
    ExternalLink,
    Eye,
    MessageSquareText,
    MoonStar,
    Search,
    UsersRound,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'マイクラ人狼',
    description:
        '独自プラグインを使用したマイクラ人狼。オンラインで知らない人と一緒に遊べます。毎週土曜日21時30分から定期開催。',
    alternates: { canonical: '/werewolf' },
    openGraph: {
        title: 'マイクラ人狼 | よもぎサーバー',
        description:
            '独自プラグインを使用したマイクラ人狼。毎週土曜日21時30分から定期開催。初参加の方も歓迎！',
        images: [
            {
                url: '/pictures/werewolf/werewolf1.webp',
                width: 1024,
                height: 539,
                alt: 'マイクラ人狼を遊ぶプレイヤーたち',
            },
        ],
    },
};

const mindGames = [
    {
        number: '01',
        icon: MessageSquareText,
        title: '41種類の役職',
        description:
            '占い師や霊媒師などの有名役職だけでなく、ここだけのオリジナル役職もたくさん！',
        color: 'bg-[#312126] text-[#ffaaa7]',
    },
    {
        number: '02',
        icon: Search,
        title: 'マイクOFFでも安心！',
        description:
            '定型文を素早くチャットしたり、ボタンを押してCOできる機能があるので、聞き専の方でも安心してプレイできます！',
        color: 'bg-[#29252f] text-[#c7b9ff]',
    },
    {
        number: '03',
        icon: Eye,
        title: '丁寧なルール説明',
        description:
            'イベント開始時に主催者がルールを説明するため、ルールの閲覧なしにそのまま参加できます！事前にご覧になった方の質問も受け付けています。',
        color: 'bg-[#292c27] text-[#bee59c]',
    },
];

const gameFlow = [
    {
        number: '1',
        title: 'Discordでイベント開催をチェック',
        description: '参加方法と当日の案内を確認しよう。',
    },
    {
        number: '2',
        title: '土曜 21:30にVCに集合',
        description: 'マイクラ人狼の専用VCに参加します。',
    },
    {
        number: '3',
        title: 'イベント用マイクラサーバーに参加しよう！',
        description:
            'Discordの案内に従って参加して、人狼イベントを楽しもう。',
    },
];

export default function WerewolfPage() {
    return (
        <main className='mc-night-biome flex-1 overflow-hidden bg-[#0b0c0d] text-[#f8f1eb]'>
            <section className='mc-night-biome relative isolate overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:pb-32'>
                <DecorativeMinecraftBlock
                    type='redstone'
                    className='-left-28 top-28 -z-10 size-72 -rotate-6 opacity-25'
                />
                <DecorativeMinecraftBlock
                    type='diamond'
                    className='-right-16 bottom-6 -z-10 size-72 rotate-6 opacity-15'
                />
                <MinecraftBlocks
                    biome='night'
                    className='absolute -right-20 top-[45%] -z-10 grid opacity-40 sm:-left-7 sm:bottom-16 sm:right-auto sm:top-auto sm:opacity-70'
                />

                <div className='mx-auto grid min-h-[690px] w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16'>
                    <div className='relative z-20 max-w-2xl'>
                        <div className='mc-section-chip inline-flex items-center gap-3 rounded-full border border-red-200/10 bg-white/[0.06] px-4 py-2.5 text-xs font-black text-[#ffaaa7] backdrop-blur'>
                            <WolfIcon className='size-5' />
                            よもぎオリジナル・マイクラ人狼
                        </div>

                        <h1 className='mt-7 text-balance text-[clamp(3.2rem,7vw,6.4rem)] font-black leading-[0.98] tracking-[-0.06em]'>
                            この村で、
                            <br />
                            <span className='relative inline-block text-[#ff7f7b]'>
                                嘘を見つけよう。
                                <span className='absolute -bottom-2 left-1 -z-10 h-4 w-[98%] rounded-full bg-[#7f1d2d]/70' />
                            </span>
                        </h1>
                        <p className='mt-7 max-w-lg text-base font-bold leading-8 text-stone-400 sm:text-lg'>
                            独自プラグインを使用したマイクラ人狼
                            <br />
                            オンラインで知らない人と一緒に遊べます
                        </p>

                        <div className='mt-7 flex flex-wrap gap-2.5'>
                            <span className='inline-flex items-center gap-2 rounded-full bg-[#ff7f7b] px-4 py-2.5 text-sm font-black text-[#2b0d12]'>
                                <Clock3 className='size-4' />
                                毎週土曜日 21:30〜 定期開催
                            </span>
                            <span className='rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-black text-stone-300'>
                                初参加の方も歓迎！
                            </span>
                        </div>

                        <div className='mt-9 flex flex-col gap-3 sm:flex-row'>

                            <Link
                                href='#how-to-play'
                                className='group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 text-sm font-black text-stone-200 transition hover:bg-white/10'
                            >
                                どんなゲーム？
                                <ArrowDown className='size-4 transition-transform group-hover:translate-y-1' />
                            </Link>
                        </div>
                    </div>

                    <div className='relative mx-auto aspect-[4/3] w-full max-w-3xl'>
                        <div className='wolf-photo-shape absolute inset-[3%] overflow-hidden border border-red-100/10 bg-[#27161b] shadow-[0_35px_90px_rgba(0,0,0,0.5)]'>
                            <Image
                                src='/pictures/werewolf/werewolf1.webp'
                                alt='マイクラ人狼の夜の村'
                                fill
                                priority
                                sizes='(max-width: 1024px) 100vw, 55vw'
                                className='object-cover saturate-[0.75]'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-[#15080c]/65 via-transparent to-[#321016]/15' />
                        </div>
                        <div className='wolf-pixel-moon absolute -right-3 -top-4 flex size-32 items-center justify-center rounded-[2.25rem] border-4 border-[#3c171d] text-[#3c1118] shadow-[0_0_60px_rgba(255,90,90,0.3)] sm:size-44 sm:rounded-[3rem]'>
                            <WolfIcon className='size-14 sm:size-20' />
                        </div>
                    </div>
                </div>

                <aside className='relative z-20 mx-auto mt-6 w-full max-w-7xl rounded-[1.75rem] border border-[#52282f]/70 bg-[#1c1518] px-5 py-5 shadow-[0_20px_55px_rgba(0,0,0,0.24)] sm:px-7 sm:py-6'>
                    <div className='flex items-start gap-4 sm:gap-5'>
                        <span className='flex size-11 shrink-0 items-center justify-center rounded-[1rem] bg-[#4a232a] text-[#ff7f7b] sm:size-12'>
                            <AlertTriangle className='size-5 sm:size-6' />
                        </span>
                        <div className='min-w-0 pt-0.5'>
                            <p className='text-base font-black text-stone-100 sm:text-lg'>
                                「生活サーバー」とは別のイベントです
                            </p>
                            <ul className='mt-3 list-disc space-y-1.5 pl-5 text-xs font-bold leading-6 text-stone-400 sm:text-sm'>
                                <li>
                                    生活サーバーとは異なり、24時間365日参加できるわけではありません
                                </li>
                                <li>
                                    参加にはDiscordサーバーへの入室が必要です
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </section>

            <section
                id='how-to-play'
                className='mc-night-biome relative scroll-mt-24 bg-[#121315] px-5 py-24 sm:px-8 lg:py-32'
            >
                <MinecraftBlocks
                    biome='night'
                    className='absolute -right-7 top-14 hidden opacity-60 lg:grid'
                />
                <div className='relative mx-auto w-full max-w-6xl'>
                    <div className='text-center'>
                        <span className='mc-section-chip inline-flex items-center gap-2 rounded-full bg-[#2a1b20] px-4 py-2 text-xs font-black text-[#ff9b97]'>
                            <MessageSquareText className='size-4' />
                            よもぎ人狼の特徴
                        </span>
                        <h2 className='mt-5 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl'>
                            よもぎの人狼ってなにがすごいの？
                        </h2>

                    </div>

                    <div className='mt-12 grid gap-5 md:grid-cols-3'>
                        {mindGames.map((item) => {
                            const Icon = item.icon;
                            return (
                                <article
                                    key={item.number}
                                    className='wolf-game-card group relative overflow-hidden rounded-[2.25rem] border border-white/[0.07] bg-[#1b1c1e] p-7 transition duration-300 hover:-translate-y-2 hover:border-red-200/15 sm:p-8'
                                >
                                    <span className='absolute right-4 top-1 font-mono text-7xl font-black text-white/[0.025]'>
                                        {item.number}
                                    </span>
                                    <div
                                        className={`flex size-16 items-center justify-center rounded-[1.4rem] ${item.color}`}
                                    >
                                        <Icon className='size-8' />
                                    </div>
                                    <h3 className='mt-8 text-3xl font-black'>
                                        {item.title}
                                    </h3>
                                    <p className='mt-3 text-sm font-bold leading-7 text-stone-500'>
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className='mc-night-biome relative px-5 py-24 sm:px-8 lg:py-32'>
                <div className='mx-auto grid w-full max-w-6xl overflow-hidden rounded-[3rem] border border-white/[0.07] bg-[#181416] shadow-[0_28px_80px_rgba(0,0,0,0.26)] lg:grid-cols-[0.9fr_1.1fr]'>
                    <div className='relative min-h-80 overflow-hidden lg:min-h-[570px]'>
                        <Image
                            src='/pictures/werewolf/werewolf2.webp'
                            alt='マイクラ人狼の会場'
                            fill
                            sizes='(max-width: 1024px) 100vw, 45vw'
                            className='object-cover saturate-[0.65] brightness-75'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-[#181416] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#181416]' />
                        <div className='absolute bottom-6 left-6 rounded-[1.25rem] border border-white/10 bg-black/45 px-4 py-3 text-xs font-black text-stone-200 backdrop-blur'>
                            NIGHT BIOME / YOMOGI
                        </div>
                    </div>

                    <div className='relative px-7 py-14 sm:px-12 lg:px-14 lg:py-20'>
                        <span className='inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 text-xs font-black text-stone-300'>
                            <UsersRound className='size-4 text-[#ff8f8b]' />
                            参加までの3ステップ
                        </span>
                        <h2 className='mt-5 text-balance text-4xl font-black tracking-[-0.045em] sm:text-5xl'>
                            次の土曜、村で会おう。
                        </h2>

                        <div className='mt-9 space-y-3'>
                            {gameFlow.map((step) => (
                                <div
                                    key={step.number}
                                    className='flex gap-4 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.035] p-4 sm:p-5'
                                >
                                    <span className='flex size-11 shrink-0 items-center justify-center rounded-[1rem] bg-[#54232b] font-mono text-sm font-black text-[#ffaaa7]'>
                                        {step.number}
                                    </span>
                                    <div>
                                        <h3 className='font-black text-stone-100'>
                                            {step.title}
                                        </h3>
                                        <p className='mt-1 text-sm font-bold leading-6 text-stone-500'>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button
                            asChild
                            size='lg'
                            className='mt-8 h-14 rounded-full bg-[#5865f2] px-7 font-black text-white shadow-[0_8px_0_#303a99] transition hover:-translate-y-1 hover:bg-[#6875f5]'
                        >
                            <Link
                                href={serverInfo.discordInvite}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <DiscordIcon className='size-5' />
                                Discordで参加する
                                <ExternalLink className='size-4' />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className='mc-night-biome bg-[#0b0c0d] px-5 pb-28 sm:px-8 lg:pb-36'>
                <div className='mx-auto flex w-full max-w-6xl flex-col items-center rounded-[3rem] bg-[#f2726f] px-7 py-16 text-center text-[#2a0e13] sm:px-12 lg:py-20'>
                    <WolfIcon className='size-14' />
                    <h2 className='mt-6 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl'>
                        嘘つきは、だれだ？
                    </h2>
                    <p className='mt-4 max-w-lg font-bold leading-8 opacity-70'>
                        まずはDiscordに入って詳細をチェック！
                    </p>
                    <Link
                        href={serverInfo.discordInvite}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-[#281014] px-7 text-sm font-black text-white transition hover:-translate-y-1'
                    >
                        Discordに参加する
                        <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
                    </Link>
                </div>
            </section>
        </main>
    );
}
