import { ServerStatus } from '@/components/features/server-status';
import { Button } from '@/components/ui/button';
import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import { TUTORIAL_UNDER_CONSTRUCTION } from '@/config/app';
import { ArrowDown, ArrowRight, BookOpen, Box, HardHat, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HomeHero() {
    return (
        <section className='mc-sky-biome relative isolate overflow-hidden bg-[#dff5ff] pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pt-28'>
            <DecorativeMinecraftBlock
                type='stone'
                className='-left-16 top-40 -z-10 size-48 -rotate-6 opacity-20'
            />
            <DecorativeMinecraftBlock
                type='diamond'
                className='left-[36%] top-24 -z-10 hidden size-24 rotate-6 opacity-40 sm:block'
            />
            <DecorativeMinecraftBlock
                type='dirt'
                className='-right-24 bottom-16 -z-10 hidden size-80 rotate-6 opacity-80 sm:block'
            />
            <DecorativeMinecraftBlock
                type='grass'
                className='right-5 top-28 -z-10 size-16 -rotate-6 sm:right-[12%] sm:top-32 sm:size-24'
            />
            <MinecraftBlocks
                biome='overworld'
                className='absolute -right-20 top-[47%] -z-10 grid opacity-45 sm:-left-7 sm:bottom-24 sm:right-auto sm:top-auto sm:opacity-75'
            />

            <div className='mx-auto grid w-full max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10'>
                <div className='relative z-20 max-w-2xl'>
                    <div className='relative isolate mt-3 grid min-h-56 grid-cols-[minmax(0,1fr)_6.25rem] items-start gap-1 min-[360px]:grid-cols-[minmax(0,1fr)_8rem] sm:min-h-64 sm:grid-cols-[minmax(0,1fr)_11rem] sm:gap-4 lg:block lg:min-h-0'>
                        <div className='storybook-orbit absolute -right-52 top-0 -z-10 size-[29.5rem] overflow-hidden bg-[#8ed35f] shadow-[0_28px_78px_rgba(39,75,31,0.22)] min-[360px]:-right-44 lg:hidden'>
                            <Image
                                src='/pictures/index/top/life1.png'
                                alt=''
                                fill
                                priority
                                quality={90}
                                sizes='(max-width: 1023px) 472px, 55vw'
                                className='object-cover object-center'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-[#18301c]/25 via-transparent to-white/10' />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#dff5ff]/95 via-[#dff5ff]/35 to-transparent' />
                        </div>
                        <div className='relative z-10'>
                            <h1 className='whitespace-nowrap text-[2.5rem] font-black leading-[0.94] tracking-[-0.065em] text-[#19231a] min-[360px]:text-[3.35rem] sm:text-[clamp(3.35rem,7.5vw,6.2rem)]'>
                                <span className='block'>Yomogi</span>
                                <span className='relative ml-[0.7em] block w-fit text-[#263b27] before:absolute before:-left-[0.42em] before:top-[0.18em] before:size-[0.22em] before:rounded-[0.06em] before:bg-[#79bf53] before:shadow-[0.1em_0.1em_0_#4e8438]'>
                                    Server
                                    <DecorativeMinecraftBlock
                                        type='emerald'
                                        className='-right-[0.78em] top-[0.22em] size-[0.58em] rotate-6'
                                    />
                                    <span className='absolute -bottom-2 left-1 -z-10 h-5 w-[98%] rounded-full bg-[#ffda68]' />
                                </span>
                            </h1>
                            <p className='mt-5 flex items-center gap-2 text-sm font-black text-[#5a8f42]'>
                                <Box className='size-5' />
                                よもぎサーバー
                            </p>
                            <p className='mt-5 text-[15px] font-bold leading-7 text-[#536353] min-[360px]:text-base min-[360px]:leading-8 sm:text-lg lg:hidden'>
                                建てて、遊んで、暮らしを紡ぐ
                                <br />
                                マイクラ統合版専用サーバー
                            </p>
                        </div>
                        <Image
                            src='/pictures/index/top/misia-display.webp'
                            alt='緑とグレーの髪のキャラクターのイラスト'
                            width={894}
                            height={1600}
                            priority
                            quality={90}
                            sizes='(max-width: 359px) 110px, (max-width: 639px) 141px, 194px'
                            draggable={false}
                            className='hero-misia storybook-avatar pointer-events-none relative z-10 -mb-3 h-auto w-full origin-bottom-right scale-110 select-none self-end lg:hidden'
                        />
                    </div>
                    <p className='mt-5 hidden max-w-lg text-base font-bold leading-8 text-[#536353] sm:text-lg lg:block'>
                        建てて、遊んで、暮らしを紡ぐ
                        <br />
                        マイクラ統合版専用サーバー
                    </p>

                    <div className='relative z-20 mt-7 grid grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] gap-2.5 sm:flex sm:gap-3'>
                        <Button
                            asChild
                            size='lg'
                            className='group h-14 w-full min-w-0 gap-1.5 rounded-full bg-[#243323] px-1.5 text-[13px] font-black text-white shadow-[0_9px_0_#8ed35f] transition hover:-translate-y-1 hover:bg-[#385837] has-[>svg]:px-1.5 min-[360px]:gap-2 min-[360px]:px-3 min-[360px]:text-sm min-[360px]:has-[>svg]:px-3 sm:h-15 sm:w-auto sm:px-7 sm:text-base sm:has-[>svg]:px-7'
                        >
                            <Link href='/join'>
                                <Play className='size-4 fill-current sm:size-5' />
                                サーバーに入る
                                <ArrowRight className='hidden size-3.5 transition-transform group-hover:translate-x-1 min-[360px]:block' />
                            </Link>
                        </Button>
                        {TUTORIAL_UNDER_CONSTRUCTION ? (
                            <Button
                                disabled
                                size='lg'
                                variant='outline'
                                className='h-14 w-full min-w-0 cursor-not-allowed gap-1.5 rounded-full border-2 border-[#243323]/15 bg-white/65 px-1.5 text-[13px] font-black text-[#655d43] opacity-80 has-[>svg]:px-1.5 min-[360px]:gap-2 min-[360px]:px-3 min-[360px]:text-sm min-[360px]:has-[>svg]:px-3 sm:h-15 sm:w-auto sm:px-7 sm:text-base sm:has-[>svg]:px-7'
                            >
                                <HardHat className='size-4 sm:size-5' />
                                工事中！
                            </Button>
                        ) : (
                            <Button
                                asChild
                                size='lg'
                                variant='outline'
                                className='h-14 w-full min-w-0 gap-1.5 rounded-full border-2 border-[#243323]/15 bg-white/75 px-1.5 text-[13px] font-black text-[#243323] hover:bg-white has-[>svg]:px-1.5 min-[360px]:gap-2 min-[360px]:px-3 min-[360px]:text-sm min-[360px]:has-[>svg]:px-3 sm:h-15 sm:w-auto sm:px-7 sm:text-base sm:has-[>svg]:px-7'
                            >
                                <Link href='/tutorial'>
                                    <BookOpen className='size-4 sm:size-5' />
                                    まず何する？
                                </Link>
                            </Button>
                        )}
                    </div>

                    <div className='relative z-20 mt-6 lg:hidden'>
                        <ServerStatus variant='compact' />
                    </div>

                    <Link
                        href='#portal'
                        className='group relative z-20 mt-7 inline-flex items-center gap-2 text-sm font-black text-[#5b715a] transition hover:text-[#315f2e]'
                    >
                        よもぎサーバーをもっと見る
                        <ArrowDown className='size-4 transition-transform group-hover:translate-y-1' />
                    </Link>
                </div>

                <div className='relative hidden min-h-[590px] lg:block'>
                    <div className='storybook-orbit absolute left-1/2 top-1/2 h-[105%] w-[125%] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-[#8ed35f] shadow-[0_30px_80px_rgba(39,75,31,0.18)]'>
                        <Image
                            src='/pictures/index/top/life1.png'
                            alt='よもぎサーバーの街並み'
                            fill
                            priority
                            sizes='(max-width: 1024px) 100vw, 55vw'
                            className='object-cover object-center'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-[#18301c]/30 via-transparent to-white/10' />
                    </div>

                    <span className='float-word absolute left-0 top-[15%] z-20 rotate-[-6deg] bg-[#ffda68] text-[#533d0c]'>
                        建てる
                    </span>
                    <span className='float-word absolute right-0 top-[9%] z-20 rotate-6 bg-white text-[#365736]'>
                        あそぶ
                    </span>
                    <span className='float-word absolute bottom-[18%] left-[2%] z-20 rotate-3 bg-[#ff9f8f] text-[#632a24]'>
                        仲間と生活
                    </span>

                    <Image
                        src='/pictures/index/top/misia-display.webp'
                        alt='緑とグレーの髪のキャラクターのイラスト'
                        width={894}
                        height={1600}
                        priority
                        quality={90}
                        sizes='(max-width: 1279px) 280px, 322px'
                        draggable={false}
                        className='hero-misia storybook-avatar pointer-events-none absolute bottom-12 right-[4%] z-10 h-auto w-[53%] max-w-[322px] select-none'
                    />

                    <div className='absolute bottom-0 left-1/2 z-30 w-[min(92%,430px)] -translate-x-1/2'>
                        <ServerStatus variant='compact' />
                    </div>
                </div>
            </div>

            <div className='pointer-events-none absolute -bottom-1 left-1/2 h-10 w-[115%] -translate-x-1/2 rounded-[50%_50%_0_0/100%_100%_0_0] bg-[#fffaf2]' />
        </section>
    );
}
