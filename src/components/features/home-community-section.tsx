import { DiscordIcon } from '@/components/icons/brand-icons';
import { Button } from '@/components/ui/button';
import { serverInfo } from '@/data/server';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function HomeCommunitySection() {
    return (
        <section
            id='community'
            className='mc-ground-biome relative scroll-mt-28 bg-[#fffaf2] px-5 py-12 sm:px-8 lg:py-12'
        >
            <div className='relative mx-auto flex w-full max-w-6xl flex-col items-center overflow-hidden rounded-[3rem] bg-[#7164eb] px-7 py-16 text-center text-white shadow-[0_24px_70px_rgba(83,70,205,0.2)] sm:px-12 lg:py-20'>
                <DiscordIcon className='pointer-events-none absolute -right-14 -top-16 size-72 rotate-12 text-white/[0.07]' />
                <div className='flex size-16 items-center justify-center rounded-[1.4rem] bg-white text-[#6256df] shadow-lg'>
                    <DiscordIcon className='size-8' />
                </div>
                <h2 className='mt-7 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl'>
                    公式Discordはこちら！
                </h2>
                <p className='mt-5 max-w-lg text-base font-bold leading-8 text-white/70'>
                    みんなと繋がろう！ お知らせや質問受付も行ってます！
                </p>
                <Button
                    asChild
                    size='lg'
                    className='mt-8 h-15 rounded-full bg-white px-7 text-base font-black text-[#5649d3] hover:bg-[#efffdc]'
                >
                    <Link
                        href={serverInfo.discordInvite}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <DiscordIcon className='size-5' />
                        Discordに参加
                        <ExternalLink className='size-4' />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
