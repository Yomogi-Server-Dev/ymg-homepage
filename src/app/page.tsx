'use client';

import { AdminList } from '@/components/features/admin-list';
import { CarFeature } from '@/components/features/car-feature';
import { DiscordInvite } from '@/components/features/discord-invite';
import { EventBlocks } from '@/components/features/event-blocks';
import { FeatureBlocks } from '@/components/features/feature-blocks';
import { HeroCarousel } from '@/components/features/hero-carousel';
import { ServerGallery } from '@/components/features/server-gallery';
import { ServerStatus } from '@/components/features/server-status';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function HomePage() {
    return (
        <main className='flex-grow'>
            <HeroCarousel />

            <div className='max-w-4xl mx-auto'>
                <section className='px-4'>
                    <div className='text-center'>
                        <section id='status'>
                            <ServerStatus />
                        </section>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up'>
                            24時間365日いつでもログイン可能なMCBE版生活サーバーです！
                            <br />
                            経済システムや豊富なコンテンツで、初心者から上級者まで楽しめます！
                        </p>
                    </div>
                    <div className='mt-12 rounded-lg overflow-hidden shadow-lg'>
                        <Image
                            src='/pictures/index/でかい表示.png'
                            alt='Yomogi Server'
                            width={1200}
                            height={600}
                            className='w-full h-auto'
                        />
                    </div>
                </section>
                <Separator className='mx-auto' />
                <section id='features' className='px-4 py-16'>
                    <h2 className='text-3xl font-bold text-center mb-12'>
                        何ができるの？
                    </h2>
                    <h3 className='text-xl font-semibold mb-4 text-center'>
                        タップして詳細を確認してみよう！
                    </h3>
                    <FeatureBlocks />
                </section>
                <Separator className='mx-auto' />
                <section
                    id='events'
                    className='mx-4 px-4 py-16 gradient-primary rounded-lg'
                >
                    <h2 className='text-3xl font-bold text-center mb-12'>
                        イベントが盛りだくさん！
                    </h2>
                    <EventBlocks />
                </section>
                <Separator className='mx-auto' />
                <CarFeature />
                <Separator className='mx-auto' />
                <section id='gallery'>
                    <ServerGallery />
                </section>
                <Separator className='mx-auto' />
                <DiscordInvite />
                <Separator className='mx-auto' />
                <section
                    id='admins'
                    className='mx-4 px-4 py-16 gradient-primary rounded-lg'
                >
                    <h2 className='text-3xl font-bold text-center mb-12'>
                        運営一覧
                    </h2>
                    <AdminList />
                </section>
            </div>
        </main>
    );
}
