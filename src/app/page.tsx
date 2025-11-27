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
import {NoticeList} from "@/components/features/notice-list";

export default function HomePage() {
    return (
        <main className='flex-grow'>
            <HeroCarousel />

            <div className='max-w-4xl mx-auto overflow-hidden sm:overflow-hidden md:overflow-hidden lg:overflow-visible'>
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
                </section>
                <Separator className='mx-auto' />
                <section id='features' className='px-4 py-16 z-10'>
                    <div className='mb-80 sm:mb-75 md:mb-70 lg:mb-60 flex items-center justify-end overflow-visible h-250px'>
                        <div className="relative m-8 w-70vw rounded-lg bg-[#f6f7f4] border-gray-600 border-2 p-5 text-gray-600 text-center text-2xl font-semibold">
                            YMGサーバーってどんなコトができるの？
                            <div className="absolute z-10 right-[10.5px]">
                                <div className="rounded-sm before:absolute before:-bottom-2.5 before:-right-5 before:h-4 before:w-4 before:rotate-45 before:transform before:border-r-2 before:border-t-2 before:border-gray-600 before:bg-[#f6f7f4]"></div>
                            </div>
                        </div>
                        <div className='relative h-[200px] w-[200px] overflow-visible'>
                            <Image
                                src='/pictures/index/skins/matsuyuki1231_question_2.png'
                                alt='首をかしげて疑問に思っている人の画像'
                                width={550}
                                height={450}
                                className='absolute top-0 right-[-150px] w-[550px] h-[450px] max-w-none'
                            />
                        </div>
                    </div>
                    <h2 className='text-3xl font-bold text-center mb-12'>
                        こんなことができる！！
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
                    <div className='mb-80 sm:mb-60 md:mb-40 lg:mb-15 flex items-center justify-start'>
                        <div className='relative h-[250px] w-[150px] overflow-visible'>
                            <Image
                                src='/pictures/index/skins/kogumapotato_feature_2.png'
                                alt='左手を挙げて案内している人の画像'
                                width={560}
                                height={515}
                                className='
                                    absolute top-0 max-w-none w-[560px] h-[515px]
                                    right-[-200px] sm:right-[-200px] md:right-[-200px] lg:right-[-150px]
                                '
                            />
                        </div>
                        <div className="relative m-8 max-w-2xl rounded-lg bg-[#f6f7f4] border-gray-600 border-2 p-5 text-gray-600 text-center text-2xl font-semibold">
                            イベントやごらくが盛りだくさん！！
                            <div className=" absolute z-10 left-[10.5px]">
                                <div className="rounded-sm before:absolute before:-bottom-2.5 before:-left-5 before:h-4 before:w-4 before:-rotate-45 before:transform before:border-l-2 before:border-t-2 before:border-gray-600 before:bg-[#f6f7f4]"></div>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-3xl font-bold text-center mb-12'>
                        どんなイベントがあるの？
                    </h2>
                    <EventBlocks />
                </section>
                <Separator className='mx-auto' />
                <div className='mt-20 mb-80 sm:mb-75 md:mb-70 lg:mb-60  flex items-center justify-end overflow-visible h-250px'>
                    <div className="relative m-8 w-70vw rounded-lg bg-[#f6f7f4] border-gray-600 border-2 p-5 text-gray-600 text-center text-2xl font-semibold">
                        車を使えるよ！
                        <div className="absolute z-10 right-[10.5px]">
                            <div className="rounded-sm before:absolute before:-bottom-2.5 before:-right-5 before:h-4 before:w-4 before:rotate-45 before:transform before:border-r-2 before:border-t-2 before:border-gray-600 before:bg-[#f6f7f4]"></div>
                        </div>
                    </div>
                    <div className='relative h-[100px] w-[220px] overflow-visible'>
                        <Image
                            src='/pictures/index/skins/AirBass0941_vehicle_2.png'
                            alt='手を前に出している人の画像'
                            width={520}
                            height={550}
                            className='absolute top-[-110px] right-[-180px] w-[520px] h-[550px] max-w-none'
                        />
                    </div>
                </div>
                <CarFeature />
                <Separator className='mx-auto' />
                <section id='gallery'>
                    <ServerGallery />
                </section>
                <Separator className='mx-auto' />
                <DiscordInvite />
                <Separator className='mx-auto' />
                <section
                    id='notices'
                    className='mx-4 px-4 py-16 gradient-primary rounded-lg'
                >
                    <h2 className='text-3xl font-bold text-center mb-12'>
                        直近のお知らせ
                    </h2>
                    <NoticeList />
                </section>
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
