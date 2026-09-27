import { BeginnerMarkIcon } from '@/components/icons/brand-icons';
import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import { TUTORIAL_UNDER_CONSTRUCTION } from '@/config/app';
import { serverInfo } from '@/data/server';
import { ArrowLeft, ExternalLink, HardHat } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function TutorialLayout({ children }: { children: ReactNode }) {
    if (!TUTORIAL_UNDER_CONSTRUCTION) {
        return children;
    }

    return (
        <main className='mc-sky-biome relative flex min-h-[calc(100svh-5rem)] flex-1 items-center overflow-hidden bg-[#dff5ff] px-5 pb-24 pt-32 text-[#19231a] sm:px-8 sm:pt-36'>
            <DecorativeMinecraftBlock
                type='grass'
                className='-left-20 top-32 size-52 -rotate-6 opacity-35'
            />
            <DecorativeMinecraftBlock
                type='stone'
                className='-right-24 bottom-10 size-64 rotate-6 opacity-30'
            />
            <MinecraftBlocks
                biome='overworld'
                className='absolute -right-8 top-24 hidden opacity-65 sm:grid'
            />

            <div className='relative mx-auto w-full max-w-3xl text-center'>
                <div className='mx-auto flex size-24 rotate-3 items-center justify-center rounded-[2rem] bg-[#ffe184] text-[#55400d] shadow-[0_12px_0_#d0a92f] sm:size-28'>
                    <HardHat className='size-12 sm:size-14' />
                </div>
                <div className='mt-10 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-black text-[#477234] shadow-sm'>
                    <BeginnerMarkIcon className='size-5' />
                    初めての方へ
                </div>
                <h1 className='mt-6 text-balance text-5xl font-black tracking-[-0.06em] sm:text-7xl'>
                    ただいま、
                    <span className='relative mt-2 inline-block text-[#355b31]'>
                        工事中！
                        <span className='absolute -bottom-2 left-1 -z-10 h-5 w-[96%] rounded-full bg-[#ffda68]' />
                    </span>
                </h1>
                <p className='mx-auto mt-7 max-w-xl text-sm font-bold leading-7 text-[#5d6d5d] sm:text-base sm:leading-8'>
                    よもぎ暮らしの始め方を、もっと分かりやすく準備しています。
                    <br className='hidden sm:block' />
                    完成までもう少しだけ待っていてね。
                </p>

                <div className='mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row'>
                    <Link
                        href='/'
                        className='inline-flex min-h-13 items-center gap-2 rounded-full bg-[#243323] px-6 py-3 text-sm font-black text-white shadow-[0_7px_0_#8ed35f] transition hover:-translate-y-1'
                    >
                        <ArrowLeft className='size-4' />
                        よもぎポータルへ戻る
                    </Link>
                    <Link
                        href={serverInfo.discordInvite}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex min-h-13 items-center gap-2 rounded-full bg-white/85 px-6 py-3 text-sm font-black text-[#40533f] transition hover:bg-white'
                    >
                        困ったらDiscordへ
                        <ExternalLink className='size-4' />
                    </Link>
                </div>
            </div>
        </main>
    );
}
