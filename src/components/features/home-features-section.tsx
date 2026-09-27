'use client';

import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { features } from '@/data/features';
import { Box, MousePointerClick } from 'lucide-react';
import Image from 'next/image';

export function HomeFeaturesSection() {
    return (
        <section
            id='about'
            className='mc-ground-biome relative scroll-mt-28 overflow-hidden bg-[#f0fae8] py-20 lg:py-24'
        >
            <DecorativeMinecraftBlock
                type='diamond'
                className='-left-24 -top-20 size-64 -rotate-6 opacity-25'
            />
            <DecorativeMinecraftBlock
                type='stone'
                className='-right-20 bottom-8 size-56 rotate-6 opacity-30'
            />
            <MinecraftBlocks
                biome='cave'
                className='absolute -right-6 top-16 hidden opacity-75 lg:grid'
            />

            <div className='relative mx-auto w-full max-w-6xl px-5 sm:px-8'>
                <div className='text-center'>
                    <span className='mc-section-chip inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-[#548446]'>
                        <Box className='size-4' />
                        できること
                    </span>
                    <h2 className='mt-5 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl'>
                        今日はなにする？
                    </h2>
                    <p className='mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#6b7b68]'>
                        <MousePointerClick className='size-4' />
                        タップして詳細を確認してみよう！
                    </p>
                </div>

                <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    {features.map((feature, index) => (
                        <Dialog key={feature.id}>
                            <DialogTrigger asChild>
                                <button
                                    type='button'
                                    aria-label={`${feature.title}の説明を見る`}
                                    className='mc-feature-card group overflow-hidden rounded-[2.25rem] bg-white p-3 text-left shadow-[0_18px_40px_rgba(51,79,45,0.09)] transition duration-300 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8ed35f]/55'
                                >
                                    <div className='mc-game-screen relative aspect-[4/3] overflow-hidden rounded-[1.65rem]'>
                                        <Image
                                            src={feature.imageUrl}
                                            alt={feature.imageAlt}
                                            fill
                                            sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw'
                                            className='object-cover transition duration-700 group-hover:scale-105'
                                        />
                                        <span className='absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-2 text-[10px] font-black text-[#45623e] shadow-md backdrop-blur'>
                                            <MousePointerClick className='size-3.5' />
                                            くわしく見る
                                        </span>
                                        <span
                                            className='absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-full text-sm font-black text-[#263326] shadow-md'
                                            style={{
                                                backgroundColor:
                                                    feature.accentColor,
                                            }}
                                        >
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className='px-4 pb-5 pt-5'>
                                        <h3 className='text-xl font-black sm:text-2xl'>
                                            {feature.title}
                                        </h3>
                                        <p className='mt-2 text-sm font-bold leading-6 text-[#697569]'>
                                            {feature.description}
                                        </p>
                                    </div>
                                </button>
                            </DialogTrigger>

                            <DialogContent className='max-h-[90vh] w-[calc(100%_-_2rem)] max-w-2xl overflow-y-auto rounded-[2.25rem] border-0 bg-[#fffdf8] p-3 shadow-[0_28px_90px_rgba(28,45,26,0.3)] sm:p-4'>
                                <div className='relative aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-[#dfe8dc]'>
                                    <Image
                                        src={feature.imageUrl}
                                        alt={feature.imageAlt}
                                        fill
                                        sizes='(max-width: 672px) 100vw, 672px'
                                        className='object-cover'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent' />
                                    <span
                                        className='absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-[1rem] text-base font-black text-[#263326] shadow-lg'
                                        style={{
                                            backgroundColor: feature.accentColor,
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <div className='px-3 pb-4 pt-3 sm:px-5 sm:pb-6'>
                                    <DialogHeader>
                                        <DialogTitle className='text-3xl font-black tracking-[-0.04em] text-[#263326] sm:text-4xl'>
                                            {feature.title}
                                        </DialogTitle>
                                        <DialogDescription className='pt-2 text-sm font-bold leading-7 text-[#687568] sm:text-base'>
                                            {feature.details}
                                        </DialogDescription>
                                    </DialogHeader>

                                    {feature.galleryImages?.map((image) => (
                                        <figure
                                            key={image.imageUrl}
                                            className='relative mt-5 aspect-[13/6] overflow-hidden rounded-[1.5rem] bg-[#dfe8dc] shadow-sm'
                                        >
                                            <Image
                                                src={image.imageUrl}
                                                alt={image.imageAlt}
                                                fill
                                                sizes='(max-width: 672px) 100vw, 672px'
                                                className='object-cover'
                                            />
                                            {image.caption ? (
                                                <figcaption className='absolute bottom-3 left-3 right-3 rounded-[1rem] bg-[#172017]/80 px-4 py-3 text-xs font-black leading-5 text-white shadow-lg backdrop-blur-sm sm:left-auto sm:max-w-[22rem] sm:text-sm'>
                                                    {image.caption}
                                                </figcaption>
                                            ) : null}
                                        </figure>
                                    ))}

                                    <div className='mt-6 rounded-[1.5rem] bg-[#f1f8ea] p-4 sm:p-5'>
                                        <p className='text-xs font-black text-[#527146]'>
                                            ここが楽しい！
                                        </p>
                                        <ul className='mt-3 grid gap-2 sm:grid-cols-3'>
                                            {feature.highlights.map(
                                                (highlight) => (
                                                    <li
                                                        key={highlight}
                                                        className='rounded-[1rem] bg-white px-3 py-3 text-center text-xs font-black text-[#41513f] shadow-sm'
                                                    >
                                                        {highlight}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}
