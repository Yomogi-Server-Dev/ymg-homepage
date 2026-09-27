import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import { featuredServerGalleryItems } from '@/data/gallery';
import { ArrowRight, Camera, MessageCircleMore, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const bubblePositions = {
    'top-left': '-top-5 left-4 sm:left-7',
    'top-right': '-top-5 right-4 sm:right-7',
    'bottom-left': '-bottom-5 left-4 sm:left-7',
    'bottom-right': '-bottom-5 right-4 sm:right-7',
} as const;

export function ServerGallery() {
    return (
        <section
            id='gallery'
            aria-labelledby='gallery-heading'
            className='mc-ground-biome relative scroll-mt-28 overflow-hidden bg-[#fff8ec] px-5 py-12 sm:px-8 lg:py-16'
        >
            <DecorativeMinecraftBlock
                type='diamond'
                className='-left-24 top-20 size-52 -rotate-6 opacity-20'
            />
            <DecorativeMinecraftBlock
                type='grass'
                className='-right-20 bottom-20 size-56 rotate-6 opacity-25'
            />
            <MinecraftBlocks
                biome='overworld'
                className='absolute -right-7 top-16 hidden opacity-65 lg:grid'
            />

            <div className='relative mx-auto w-full max-w-6xl'>
                <div className='mx-auto max-w-2xl text-center'>
                    <span className='mc-section-chip inline-flex items-center gap-2 rounded-full bg-[#e7f5d7] px-4 py-2 text-xs font-black text-[#4b7640]'>
                        <Camera className='size-4' />
                        SERVER GALLERY
                    </span>
                    <h2
                        id='gallery-heading'
                        className='mt-5 text-balance text-4xl font-black tracking-[-0.05em] text-[#1f2c20] sm:text-6xl'
                    >
                        サーバーの様子
                    </h2>
                    <p className='mt-4 font-bold leading-7 text-[#718071]'>
                        日々の様子をのぞき見👀
                    </p>
                </div>

                <div className='mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:mt-16'>
                    {featuredServerGalleryItems.map((item, index) => (
                        <figure
                            key={item.image}
                            className='server-gallery-card'
                        >
                            <div className='relative'>
                                <div className='server-gallery-image relative aspect-[16/10] overflow-hidden rounded-[2.25rem] bg-[#dfe8dc] shadow-[0_20px_45px_rgba(49,64,46,0.13)]'>
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        sizes='(max-width: 767px) 100vw, 50vw'
                                        className='object-cover transition duration-700 group-hover:scale-105'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5' />
                                </div>
                                <span
                                    data-placement={
                                        item.bubblePosition.startsWith('top')
                                            ? 'top'
                                            : 'bottom'
                                    }
                                    data-side={
                                        item.bubblePosition.endsWith('left')
                                            ? 'left'
                                            : 'right'
                                    }
                                    className={`server-gallery-speech absolute z-20 inline-flex items-center gap-2 rounded-[1.1rem] px-4 py-2.5 text-sm font-black shadow-[0_10px_25px_rgba(38,49,36,0.16)] ${bubblePositions[item.bubblePosition]} ${item.bubbleColor}`}
                                >
                                    <MessageCircleMore className='size-4' />
                                    {item.bubble}
                                </span>
                            </div>

                            <figcaption className='mt-9 flex items-start gap-4 px-2 sm:px-3'>
                                <span className='mc-item-slot flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#527146]'>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span>
                                    <span className='flex items-center gap-1.5 text-[10px] font-black tracking-[0.16em] text-[#7aa166]'>
                                        <Sparkles className='size-3.5' />
                                        {item.eyebrow}
                                    </span>
                                    <strong className='mt-1 block text-xl font-black text-[#263326] sm:text-2xl'>
                                        {item.title}
                                    </strong>
                                    <span className='mt-2 block text-sm font-bold leading-6 text-[#748074]'>
                                        {item.description}
                                    </span>
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className='mt-14 text-center'>
                    <Link
                        href='/gallery'
                        className='group inline-flex h-14 items-center gap-2 rounded-full bg-[#47753c] px-7 text-sm font-black text-white shadow-[0_7px_0_#2d5728] transition hover:-translate-y-1 hover:bg-[#5d914f]'
                    >
                        すべての写真を見る
                        <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
                    </Link>
                </div>
            </div>
        </section>
    );
}
