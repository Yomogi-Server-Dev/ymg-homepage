'use client';

import { ImageWithLoading } from '@/components/ui/image-with-loading';
import { YouTubeEmbed } from '@/components/ui/youtube-embed';
import { serverGalleryImages, serverGalleryVideo } from '@/data/media';
import { Camera } from 'lucide-react';

export function ServerGallery() {
    return (
        <section className='px-4 py-16'>
            <h2 className='text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3'>
                <Camera className='w-8 h-8 text-primary' />
                サーバーの様子
            </h2>

            <div className='grid md:grid-cols-2 gap-8 mb-12'>
                {serverGalleryImages.map((image) => (
                    <div
                        key={image.id}
                        className='rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 relative'
                    >
                        <ImageWithLoading
                            src={image.src}
                            alt={image.alt || 'サーバーの様子'}
                            fill
                            className='object-contain'
                            containerClassName='w-full h-full'
                        />
                    </div>
                ))}
            </div>

            {serverGalleryVideo.youtubeId && (
                <div className='max-w-4xl mx-auto'>
                    <YouTubeEmbed
                        videoId={serverGalleryVideo.youtubeId}
                        title={serverGalleryVideo.title}
                    />
                </div>
            )}
        </section>
    );
}
