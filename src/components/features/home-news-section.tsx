import { NoticeList } from '@/components/features/notice-list';
import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HomeNewsSection() {
    return (
        <section
            id='news'
            className='mc-sky-biome relative scroll-mt-28 overflow-hidden bg-[#e6f6ff] py-20 lg:py-20'
        >
            <DecorativeMinecraftBlock
                type='dirt'
                className='-right-20 -top-20 size-64 rotate-6 opacity-55'
            />
            <MinecraftBlocks
                biome='ocean'
                className='absolute -left-8 bottom-10 hidden opacity-65 lg:grid'
            />
            <div className='relative mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.38fr_1fr] lg:items-start'>
                <div>
                    <span className='mc-section-chip inline-flex rounded-full bg-white px-4 py-2 text-xs font-black text-[#487188]'>
                        INFO
                    </span>
                    <h2 className='mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl'>
                        お知らせ
                    </h2>
                    <p className='mt-4 font-bold leading-7 text-[#617986]'>
                        最新情報をチェック！
                    </p>
                    <Link
                        href='/notices'
                        className='group mt-7 inline-flex items-center gap-2 text-sm font-black text-[#315d72]'
                    >
                        もっと見る
                        <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
                    </Link>
                </div>
                <NoticeList limit={3} variant='home' />
            </div>
        </section>
    );
}
