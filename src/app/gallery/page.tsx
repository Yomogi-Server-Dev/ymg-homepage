import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import { serverGalleryItems } from '@/data/gallery';
import { ArrowLeft, Camera, Expand, Images, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'サーバーギャラリー',
    description:
        'よもぎサーバーで生まれた建築、イベント、交流のスクリーンショットをまとめて紹介します。',
    alternates: { canonical: '/gallery' },
    openGraph: {
        title: 'サーバーギャラリー | よもぎサーバー',
        description:
            'よもぎサーバーの毎日を、スクリーンショットでのぞいてみよう。',
        images: ['/pictures/index/gallery/server8.webp'],
    },
};

export default function GalleryPage() {
    return (
        <main className='mc-ground-biome flex-1 overflow-hidden bg-[#fff8ec] text-[#263326]'>
            <section className='relative isolate px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:pb-24'>
                <DecorativeMinecraftBlock
                    type='diamond'
                    className='-left-24 top-28 -z-10 size-64 -rotate-6 opacity-25'
                />
                <DecorativeMinecraftBlock
                    type='grass'
                    className='-right-20 bottom-8 -z-10 size-64 rotate-6 opacity-30'
                />
                <MinecraftBlocks
                    biome='overworld'
                    className='absolute -right-7 top-40 -z-10 hidden opacity-70 lg:grid'
                />

                <div className='relative mx-auto w-full max-w-6xl'>
                    <Link
                        href='/#gallery'
                        className='inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-black text-[#527146] shadow-sm transition hover:-translate-y-0.5'
                    >
                        <ArrowLeft className='size-4' />
                        トップへ戻る
                    </Link>

                    <div className='mt-10 max-w-3xl'>
                        <span className='mc-section-chip inline-flex items-center gap-2 rounded-full bg-[#e7f5d7] px-4 py-2 text-xs font-black text-[#4b7640]'>
                            <Camera className='size-4' />
                            SERVER GALLERY ARCHIVE
                        </span>
                        <h1 className='mt-6 text-balance text-5xl font-black tracking-[-0.055em] sm:text-7xl'>
                            よもぎの景色
                        </h1>
                        <p className='mt-6 max-w-xl text-base font-bold leading-8 text-[#718071]'>
                            建築、イベント、何気ない集まり。
                            <br className='hidden sm:block' />
                            サーバーで生まれた{serverGalleryItems.length}
                            枚の思い出をまとめました。
                        </p>
                    </div>
                </div>
            </section>

            <section className='relative px-5 pb-28 sm:px-8 lg:pb-36'>
                <div className='mx-auto w-full max-w-7xl'>
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {serverGalleryItems.map((item, index) => (
                            <figure
                                key={item.image}
                                className='group overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_18px_45px_rgba(49,64,46,0.1)] transition duration-300 hover:-translate-y-2'
                            >
                                <a
                                    href={item.image}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={`${item.title}の画像を原寸で開く`}
                                    className='relative block aspect-[16/10] overflow-hidden rounded-[1.45rem] bg-[#dfe8dc] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8ed35f]/55'
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw'
                                        className='object-cover transition duration-700 group-hover:scale-105'
                                    />
                                    <span className='absolute right-3 top-3 flex size-10 items-center justify-center rounded-[1rem] bg-white/90 text-[#527146] opacity-0 shadow-md backdrop-blur transition group-hover:opacity-100 group-focus-within:opacity-100'>
                                        <Expand className='size-4' />
                                    </span>
                                    <span className='absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-[1rem] bg-[#e8f5dc] text-xs font-black text-[#527146] shadow-md'>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </a>

                                <figcaption className='px-3 pb-4 pt-5'>
                                    <span className='flex items-center gap-1.5 text-[10px] font-black tracking-[0.15em] text-[#7aa166]'>
                                        <Sparkles className='size-3.5' />
                                        {item.eyebrow}
                                    </span>
                                    <strong className='mt-1 block text-xl font-black'>
                                        {item.title}
                                    </strong>
                                    <span className='mt-2 block text-sm font-bold leading-6 text-[#748074]'>
                                        {item.description}
                                    </span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <div className='mt-16 flex justify-center'>
                        <Link
                            href='/#gallery'
                            className='group inline-flex h-14 items-center gap-2 rounded-full bg-[#47753c] px-7 text-sm font-black text-white shadow-[0_7px_0_#2d5728] transition hover:-translate-y-1 hover:bg-[#5d914f]'
                        >
                            <Images className='size-5' />
                            トップのギャラリーへ
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
