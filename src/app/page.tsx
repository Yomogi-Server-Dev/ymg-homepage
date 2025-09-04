'use client';

import { AdminList } from '@/components/features/admin-list';
import { CarFeature } from '@/components/features/car-feature';
import { EventBlocks } from '@/components/features/event-blocks';
import { FeatureBlocks } from '@/components/features/feature-blocks';
import { HeroCarousel } from '@/components/features/hero-carousel';
import { ServerGallery } from '@/components/features/server-gallery';
import { ServerStatus } from '@/components/features/server-status';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className='flex-grow max-w-4xl mx-auto'>
      <section className='relative my-12'>
        <HeroCarousel />
      </section>

      <section className='px-4 py-16'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-4 text-primary animate-slide-up'>
            Yomogi Serverへようこそ！
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up'>
            みんなで楽しく生活できるサバイバルサーバーです。
            車に乗ったり、イベントに参加したり、自由に建築を楽しめます！
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
        <h2 className='text-3xl font-bold text-center mb-12'>何ができるの？</h2>
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

      <section id='status'>
        <ServerStatus />
      </section>

      <Separator className='mx-auto' />

      <section
        id='admins'
        className='mx-4 px-4 py-16 gradient-primary rounded-lg'
      >
        <h2 className='text-3xl font-bold text-center mb-12'>運営一覧</h2>
        <AdminList />
      </section>
    </main>
  );
}
