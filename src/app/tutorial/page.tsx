import { BeginnerMarkIcon, DiscordIcon } from '@/components/icons/brand-icons';
import { Button } from '@/components/ui/button';
import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import { TUTORIAL_UNDER_CONSTRUCTION } from '@/config/app';
import { features } from '@/data/features';
import { siteLinks } from '@/data/links';
import { serverInfo } from '@/data/server';
import { tutorialGuides, tutorialSteps } from '@/data/tutorial';
import {
    ArrowDown,
    ArrowRight,
    BookOpen,
    ExternalLink,
    FileCheck2,
    MessageCircle,
    Play,
    Sparkles,
    Sprout,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const pageTitle = '初めての方へ｜生活サーバーの始め方';
const pageDescription =
    'よもぎサーバーで初めて遊ぶ方へ。よもぎ端末の使い方、ワールドの移動、お金の集め方、土地を買って家を建てるまでを、写真とコマンド付きの4ステップで紹介します。';

export const metadata: Metadata = {
    title: TUTORIAL_UNDER_CONSTRUCTION
        ? '初めての方へ｜ただいま工事中'
        : pageTitle,
    description: TUTORIAL_UNDER_CONSTRUCTION
        ? 'よもぎサーバーの「初めての方」ページは、ただいま準備中です。'
        : pageDescription,
    robots: TUTORIAL_UNDER_CONSTRUCTION
        ? { index: false, follow: false }
        : undefined,
    alternates: { canonical: '/tutorial' },
    openGraph: {
        title: `${pageTitle} | よもぎサーバー`,
        description: pageDescription,
        url: '/tutorial',
        images: [
            {
                url: '/pictures/index/top/lobby1.png',
                width: 1920,
                height: 1080,
                alt: 'よもぎサーバーのロビー',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${pageTitle} | よもぎサーバー`,
        description: pageDescription,
        images: ['/pictures/index/top/lobby1.png'],
    },
};

const howToData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'よもぎ生活サーバーの始め方',
    description: pageDescription,
    inLanguage: 'ja',
    step: tutorialSteps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title,
        text: `${step.description} ${step.commands.map((command) => `${command.value}：${command.label}。`).join(' ')} ${step.action}`,
        url: `https://ymg24.org/tutorial#${step.id}`,
        image: `https://ymg24.org${step.image}`,
    })),
};

export default function TutorialPage() {
    return (
        <main className='flex-1 overflow-hidden bg-[#fffaf2] text-[#19231a]'>
            <script type='application/ld+json'>
                {JSON.stringify(howToData)}
            </script>

            <section className='mc-sky-biome relative isolate overflow-hidden bg-[#dff5ff] px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:pb-32'>
                <DecorativeMinecraftBlock
                    type='diamond'
                    className='-left-16 top-36 -z-10 size-48 -rotate-6 opacity-30'
                />
                <DecorativeMinecraftBlock
                    type='grass'
                    className='-right-24 bottom-10 -z-10 size-64 rotate-6 opacity-55'
                />
                <MinecraftBlocks
                    biome='overworld'
                    className='absolute -right-20 top-[48%] -z-10 grid opacity-40 sm:-left-8 sm:bottom-20 sm:right-auto sm:top-auto sm:opacity-70'
                />

                <div className='mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16'>
                    <div className='max-w-2xl'>
                        <span className='mc-section-chip inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-[#477234]'>
                            <BeginnerMarkIcon className='size-5' />
                            初めての方へ
                        </span>
                        <h1 className='mt-6 text-balance text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.2] tracking-[-0.06em]'>
                            よもぎ暮らし、
                            <br />
                            <span className='relative inline-block'>
                                はじめよう。
                                <span className='absolute -bottom-2 left-1 -z-10 h-5 w-[98%] rounded-full bg-[#ffda68]' />
                            </span>
                        </h1>
                        <p className='mt-7 max-w-lg text-base font-bold leading-8 text-[#536353] sm:text-lg'>
                            移動のしかた、お金のため方、自分の家づくり。
                            <br />
                            最初の一歩を、写真といっしょに案内します。
                        </p>
                        <Link
                            href='#route'
                            className='group mt-8 inline-flex items-center gap-2 rounded-full bg-[#243323] px-6 py-3.5 text-sm font-black text-white shadow-[0_8px_0_#8ed35f] transition hover:-translate-y-1'
                        >
                            はじめの{tutorialSteps.length}ステップを見る
                            <ArrowDown className='size-4 transition-transform group-hover:translate-y-1' />
                        </Link>
                        <Link
                            href='#before-play'
                            className='mt-6 flex w-fit items-center gap-2 rounded-lg py-2 text-sm font-bold text-[#477234] underline decoration-[#477234]/30 underline-offset-4 transition hover:text-[#243323] focus-visible:outline-2 focus-visible:outline-offset-4'
                        >
                            まだサーバーに入っていない方はこちら
                            <ArrowDown className='size-4 shrink-0' />
                        </Link>
                    </div>

                    <div className='relative mx-auto aspect-[4/3] w-full max-w-3xl'>
                        <div className='tutorial-hero-photo absolute inset-[3%] overflow-hidden bg-[#7cbb5f] shadow-[0_28px_70px_rgba(37,77,34,0.2)]'>
                            <Image
                                src='/pictures/index/top/lobby1.png'
                                alt='よもぎサーバーのロビー'
                                fill
                                priority
                                sizes='(max-width: 1024px) 100vw, 55vw'
                                className='object-cover'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-[#18301c]/25 via-transparent to-white/5' />
                        </div>
                        <span className='absolute -left-2 top-[12%] rounded-[1.25rem] bg-[#ffda68] px-5 py-3 text-sm font-black shadow-lg sm:text-base'>
                            街さんぽからでもOK
                        </span>
                        <span className='absolute -bottom-2 right-[4%] rounded-[1.25rem] bg-white px-5 py-3 text-sm font-black text-[#477234] shadow-lg sm:text-base'>
                            <Sparkles className='mr-2 inline size-4' />
                            自分のペースで
                        </span>
                    </div>
                </div>

                <div className='pointer-events-none absolute -bottom-1 left-1/2 h-14 w-[115%] -translate-x-1/2 rounded-[50%_50%_0_0/100%_100%_0_0] bg-[#fffaf2]' />
            </section>

            <section
                id='before-play'
                aria-labelledby='before-play-heading'
                className='scroll-mt-28 px-5 pt-6 sm:px-8 lg:pt-10'
            >
                <div className='mx-auto grid w-full max-w-6xl gap-6 rounded-[2rem] bg-white p-6 shadow-[0_12px_35px_rgba(49,73,43,0.06)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center'>
                    <div>
                        <h2
                            id='before-play-heading'
                            className='flex items-center gap-2 text-xl font-black'
                        >
                            <BeginnerMarkIcon className='size-6 shrink-0' />
                            遊びに行く前に
                        </h2>
                        <p className='mt-3 text-sm font-medium leading-7 text-[#536153]'>
                            用意するのはMinecraft統合版。参加方法と、みんなで遊ぶためのルールを確認しておこう。
                        </p>
                        <p className='mt-1 text-xs font-medium leading-6 text-[#647164]'>
                            もうサーバーに入れたら、下のステップへ進んでね。
                        </p>
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        <Link
                            href={tutorialGuides.join}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex min-h-12 items-center gap-2 rounded-2xl bg-[#e7f5d7] px-5 py-3 text-sm font-black text-[#35542a] transition hover:bg-[#d7eec0] focus-visible:outline-2 focus-visible:outline-offset-4'
                        >
                            <Play className='size-4' />
                            参加方法を見る
                            <ExternalLink className='size-3.5' />
                        </Link>
                        <Link
                            href={siteLinks.rules}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex min-h-12 items-center gap-2 rounded-2xl bg-[#fff4c9] px-5 py-3 text-sm font-black text-[#614c1c] transition hover:bg-[#ffe9a3] focus-visible:outline-2 focus-visible:outline-offset-4'
                        >
                            <FileCheck2 className='size-4' />
                            おやくそく
                            <ExternalLink className='size-3.5' />
                        </Link>
                    </div>
                </div>
            </section>

            <section
                id='route'
                aria-labelledby='route-heading'
                className='mc-ground-biome relative scroll-mt-28 px-5 py-16 sm:px-8 lg:py-24'
            >
                <MinecraftBlocks
                    biome='cave'
                    className='absolute -right-7 top-[28%] hidden opacity-55 xl:grid'
                />
                <div className='mx-auto w-full max-w-6xl'>
                    <div className='text-center'>
                        <span className='mc-section-chip inline-flex items-center gap-2 rounded-full bg-[#e7f5d7] px-4 py-2 text-xs font-black text-[#4b7640]'>
                            <Sprout className='size-4' />
                            サーバーに入ったら
                        </span>
                        <h2
                            id='route-heading'
                            className='mt-5 text-balance text-3xl font-black tracking-[-0.05em] sm:text-5xl'
                        >
                            はじめの{tutorialSteps.length}ステップ。
                        </h2>
                        <p className='mt-4 text-sm font-medium leading-7 text-[#647164] sm:text-base'>
                            ひとつずつ試してみよう。できたところは飛ばしてOK。
                        </p>
                    </div>

                    <nav aria-label='はじめのステップの目次' className='mt-8'>
                        <ol className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
                            {tutorialSteps.map((step, index) => (
                                <li key={step.id}>
                                    <Link
                                        href={`#${step.id}`}
                                        className='group flex h-full min-h-16 items-center gap-2 rounded-2xl bg-white p-3 shadow-sm transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#477234] sm:gap-3 sm:p-4'
                                    >
                                        <span
                                            className={`flex size-8 shrink-0 items-center justify-center rounded-xl text-xs font-black sm:size-10 ${step.marker}`}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className='text-xs font-black sm:text-sm'>
                                            {step.label}
                                        </span>
                                        <ArrowDown className='ml-auto hidden size-3.5 shrink-0 text-[#647164] transition-transform group-hover:translate-y-0.5 sm:block' />
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </nav>
                    <p className='mx-auto mt-6 flex max-w-xl items-start justify-center gap-2 text-xs font-medium leading-6 text-[#647164] sm:text-sm'>
                        <MessageCircle className='mt-1 size-4 shrink-0' />
                        コマンドは、ゲーム内のチャットに「/」も含めて入力してね。
                    </p>

                    <div className='tutorial-route relative mt-8 space-y-8 sm:mt-10 lg:space-y-12'>
                        {tutorialSteps.map((step, index) => {
                            const Icon = step.icon;
                            const reverse = index % 2 === 1;

                            return (
                                <article
                                    id={step.id}
                                    aria-labelledby={`${step.id}-heading`}
                                    key={step.id}
                                    className={`mc-world-card relative grid scroll-mt-28 overflow-hidden rounded-[2.5rem] p-3 shadow-[0_20px_55px_rgba(49,73,43,0.1)] sm:p-4 lg:grid-cols-2 lg:items-stretch ${step.color}`}
                                >
                                    <div
                                        className={`relative overflow-hidden rounded-[1.9rem] bg-white lg:aspect-auto lg:min-h-[430px] ${step.imageFit === 'contain' ? 'aspect-[4/3]' : 'aspect-video'} ${reverse ? 'lg:order-2' : ''}`}
                                    >
                                        <Image
                                            src={step.image}
                                            alt={step.imageAlt}
                                            fill
                                            sizes='(max-width: 1023px) 100vw, 560px'
                                            className={
                                                step.imageFit === 'contain'
                                                    ? 'object-contain'
                                                    : 'object-cover transition duration-700 hover:scale-105'
                                            }
                                        />
                                        <span
                                            className={`absolute left-4 top-4 flex size-14 items-center justify-center rounded-[1.15rem] text-lg font-black shadow-lg ${step.marker}`}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <div
                                        className={`relative min-w-0 px-4 py-6 sm:px-7 sm:py-8 lg:px-8 lg:py-10 ${reverse ? 'lg:order-1' : ''}`}
                                    >
                                        <div
                                            className={`mc-item-slot mb-5 flex size-11 items-center justify-center rounded-2xl ${step.marker}`}
                                        >
                                            <Icon className='size-6' />
                                        </div>
                                        <h3
                                            id={`${step.id}-heading`}
                                            className='text-balance text-2xl font-black leading-snug tracking-[-0.04em] sm:text-3xl'
                                        >
                                            {step.title}
                                        </h3>
                                        <p className='mt-4 text-sm font-medium leading-7 text-[#536153] sm:text-base sm:leading-8'>
                                            {step.description}
                                        </p>
                                        <div className='mt-5 rounded-2xl bg-white/80 p-4'>
                                            <dl className='space-y-3'>
                                                {step.commands.map(
                                                    (command) => (
                                                        <div
                                                            key={command.value}
                                                            className='flex flex-wrap items-center gap-x-3 gap-y-1.5'
                                                        >
                                                            <dt>
                                                                <code className='inline-block select-all rounded-lg bg-[#eaf0e7] px-2.5 py-1.5 text-sm font-bold text-[#294124]'>
                                                                    {
                                                                        command.value
                                                                    }
                                                                </code>
                                                            </dt>
                                                            <dd className='text-xs font-bold leading-6 text-[#536153]'>
                                                                {command.label}
                                                            </dd>
                                                        </div>
                                                    ),
                                                )}
                                            </dl>
                                            <p className='mt-3 text-xs font-medium leading-6 text-[#536153] sm:text-sm'>
                                                {step.action}
                                            </p>
                                        </div>
                                        <Link
                                            href={step.guide}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-black text-[#35542a] underline decoration-[#35542a]/30 underline-offset-4 transition hover:text-[#19231a] focus-visible:outline-2 focus-visible:outline-offset-4'
                                        >
                                            {step.guideLabel}
                                            <ExternalLink className='size-3.5 shrink-0' />
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section
                aria-labelledby='more-play-heading'
                className='mc-ground-biome bg-[#f0fae8] px-5 py-14 sm:px-8 lg:py-20'
            >
                <div className='mx-auto w-full max-w-6xl'>
                    <div className='text-center'>
                        <span className='mc-section-chip inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-[#4b7640]'>
                            <Sparkles className='size-4' />
                            慣れてきたら
                        </span>
                        <h2
                            id='more-play-heading'
                            className='mt-5 text-balance text-3xl font-black tracking-[-0.05em] sm:text-5xl'
                        >
                            次は、好きなことを。
                        </h2>
                        <p className='mt-4 text-sm font-medium leading-7 text-[#647164] sm:text-base'>
                            会社も、車も、料理も。気になる遊びをひとつ見つけてみよう。
                        </p>
                    </div>
                    <ul className='mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                        {features.map((feature) => (
                            <li
                                key={feature.id}
                                className='flex items-center gap-4 rounded-3xl bg-white p-4'
                            >
                                <div className='relative size-20 shrink-0 overflow-hidden rounded-2xl bg-[#e7f5d7]'>
                                    <Image
                                        src={feature.imageUrl}
                                        alt={feature.imageAlt}
                                        fill
                                        sizes='80px'
                                        className='object-cover'
                                    />
                                </div>
                                <div className='min-w-0'>
                                    <h3 className='text-base font-black'>
                                        {feature.title}
                                    </h3>
                                    <p className='mt-1 text-xs font-medium leading-6 text-[#536153]'>
                                        {feature.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='mt-7 text-center'>
                        <Link
                            href='/#about'
                            className='inline-flex min-h-12 items-center gap-2 rounded-full bg-[#243323] px-6 py-3 text-sm font-black text-white transition hover:bg-[#3b5734] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#477234]'
                        >
                            それぞれの遊びを詳しく見る
                            <ArrowRight className='size-4' />
                        </Link>
                    </div>
                </div>
            </section>

            <section className='mc-ground-biome bg-[#eaf6df] px-5 pb-28 pt-12 sm:px-8 lg:pb-36 lg:pt-20'>
                <div className='relative mx-auto grid w-full max-w-6xl overflow-hidden rounded-[3rem] bg-[#213321] text-white shadow-[0_25px_70px_rgba(31,61,29,0.18)] lg:grid-cols-[1fr_0.85fr]'>
                    <div className='relative z-10 px-7 py-14 sm:px-12 lg:px-14 lg:py-20'>
                        <p className='text-xs font-black tracking-[0.18em] text-[#aee881]'>
                            困ったときは
                        </p>
                        <h2 className='mt-4 text-balance text-4xl font-black tracking-[-0.05em] sm:text-5xl'>
                            わからないこと、聞いてみよう。
                        </h2>
                        <p className='mt-5 max-w-lg font-bold leading-8 text-white/65'>
                            「サーバーに入れない」「次に何をすればいい？」。
                            困っていることを、そのままDiscordで教えてね。
                            操作を調べたいときは、各ステップのガイドも役立ちます。
                        </p>
                        <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                            <Button
                                asChild
                                size='lg'
                                className='h-14 rounded-full bg-[#aee881] px-7 font-black text-[#1b301a] hover:bg-[#c9f2a8]'
                            >
                                <Link href='/join'>
                                    <Play className='size-5 fill-current' />
                                    Minecraftで開く
                                    <ArrowRight className='size-4' />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size='lg'
                                variant='outline'
                                className='h-14 rounded-full border-white/15 bg-white/5 px-7 font-black text-white hover:bg-white/10 hover:text-white'
                            >
                                <Link
                                    href={tutorialGuides.join}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <BookOpen className='size-5' />
                                    参加方法を確認
                                    <ExternalLink className='size-4' />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className='relative flex min-h-72 items-center justify-center overflow-hidden bg-[#2c482a] p-8 lg:min-h-full'>
                        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,#7eb85b55,transparent_68%)]' />
                        <div className='relative text-center'>
                            <div className='mx-auto flex size-24 items-center justify-center rounded-[2rem] bg-[#5865f2] shadow-[0_14px_0_#303a99]'>
                                <DiscordIcon className='size-12' />
                            </div>
                            <Link
                                href={serverInfo.discordInvite}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#273327] transition hover:-translate-y-1'
                            >
                                Discordで相談する
                                <ExternalLink className='size-4' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
