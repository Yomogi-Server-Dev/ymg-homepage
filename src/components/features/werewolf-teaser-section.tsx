import { WerewolfPortalLink } from '@/components/features/werewolf-portal-link';
import { WolfIcon } from '@/components/icons/brand-icons';
import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import { Clock3 } from 'lucide-react';
import Image from 'next/image';

export function WerewolfTeaserSection() {
    return (
        <section
            id='werewolf-teaser'
            className='mc-ground-biome relative scroll-mt-28 bg-[#fffaf2] px-5 py-14 sm:px-8 lg:py-16'
        >
            <div className='relative mx-auto grid min-h-[560px] w-full max-w-6xl overflow-hidden rounded-[3rem] bg-[#171012] text-white shadow-[0_28px_70px_rgba(64,22,29,0.16)] lg:grid-cols-[0.95fr_1.05fr]'>
                <MinecraftBlocks
                    biome='night'
                    className='absolute -left-8 bottom-8 z-10 hidden opacity-45 lg:grid'
                />
                <div className='relative z-10 flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-14'>
                    <span className='flex size-14 items-center justify-center rounded-2xl bg-[#3a171d] text-[#ff8585]'>
                        <WolfIcon className='size-8' />
                    </span>
                    <p className='mt-6 text-xs font-black tracking-[0.18em] text-[#ff9b9b]'>
                        マイクラ人狼
                    </p>
                    <h2 className='mt-4 text-balance text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-6xl'>
                        だれを信じる？
                    </h2>
                    <p className='mt-5 max-w-md text-base font-bold leading-8 text-white/65'>
                        話して、考えて、嘘を見抜く。
                        <br />
                        土曜の夜の特別なゲーム。
                    </p>
                    <div className='mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white/80'>
                        <Clock3 className='size-4 text-[#ff9b9b]' />
                        毎週土曜日 21:00〜
                    </div>
                    <div className='mt-8'>
                        <WerewolfPortalLink />
                    </div>
                </div>

                <div className='relative min-h-80 overflow-hidden lg:min-h-full'>
                    <Image
                        src='/pictures/werewolf/werewolf2.webp'
                        alt='マイクラ人狼のゲーム風景'
                        fill
                        sizes='(max-width: 1024px) 100vw, 52vw'
                        className='object-cover grayscale-[20%]'
                    />
                    <div className='absolute inset-0 bg-gradient-to-b from-[#171012] via-transparent to-transparent lg:bg-gradient-to-r' />
                    <DecorativeMinecraftBlock
                        type='redstone'
                        className='right-8 top-8 size-32 rotate-6 opacity-65 sm:size-48'
                    />
                </div>
            </div>
        </section>
    );
}
