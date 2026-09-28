import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import { featuredVideos } from '@/data/videos';
import { ExternalLink, Play, Youtube } from 'lucide-react';
import Link from 'next/link';

export function HomeYoutubeSection() {
    return (
        <section className='mc-ground-biome relative overflow-hidden bg-[#fffaf2] px-5 py-20 sm:px-8 lg:py-24'>
            <DecorativeMinecraftBlock
                type='redstone'
                className='-left-24 top-24 size-56 -rotate-6 opacity-20'
            />
            <DecorativeMinecraftBlock
                type='stone'
                className='-right-20 bottom-10 size-56 rotate-6 opacity-25'
            />
            <MinecraftBlocks
                biome='overworld'
                className='absolute -right-7 top-14 hidden opacity-65 lg:grid'
            />

            <div className='relative mx-auto w-full max-w-6xl'>
                <div className='mx-auto max-w-2xl text-center'>
                    <span className='mc-section-chip inline-flex items-center gap-2 rounded-full bg-[#ffe4df] px-4 py-2 text-xs font-black text-[#a74e43]'>
                        <Youtube className='size-4' />
                        YOMOGI VIDEOS
                    </span>
                    <h2 className='mt-5 text-balance text-4xl font-black tracking-[-0.05em] text-[#1f2c20] sm:text-6xl'>
                        おすすめ動画！
                    </h2>
                    <p className='mt-4 font-bold leading-7 text-[#718071]'>
                        よもぎサーバー入門にはこれ！
                    </p>
                </div>

                <div className='mt-12 grid gap-6 lg:grid-cols-2'>
                    {featuredVideos.map((video) => (
                        <article
                            key={video.videoId}
                            className='overflow-hidden rounded-[2.25rem] bg-white p-3 shadow-[0_20px_50px_rgba(49,64,46,0.1)]'
                        >
                            <div className='relative aspect-video overflow-hidden rounded-[1.65rem] bg-[#1c251b]'>
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                                    title={`${video.creator}「${video.title}」`}
                                    loading='lazy'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                    referrerPolicy='strict-origin-when-cross-origin'
                                    allowFullScreen
                                    className='absolute inset-0 size-full border-0'
                                />
                            </div>

                            <div className='px-4 pb-5 pt-5 sm:px-5'>
                                <div className='flex flex-wrap items-center gap-2'>
                                    <span className='inline-flex items-center gap-1.5 rounded-full bg-[#ffebe7] px-3 py-1.5 text-[10px] font-black text-[#a34b41]'>
                                        <Play className='size-3 fill-current' />
                                        {video.label}
                                    </span>
                                    <span className='text-xs font-black text-[#7aa166]'>
                                        by {video.creator}
                                    </span>
                                </div>
                                <h3 className='mt-4 text-2xl font-black tracking-[-0.03em] text-[#263326]'>
                                    {video.title}
                                </h3>
                                <p className='mt-2 text-sm font-bold leading-6 text-[#748074]'>
                                    {video.description}
                                </p>
                                <Link
                                    href={video.channelUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='mt-5 inline-flex items-center gap-2 text-sm font-black text-[#527146] transition hover:text-[#355e2d]'
                                >
                                    {video.creator}のYouTubeを見る
                                    <ExternalLink className='size-4' />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
