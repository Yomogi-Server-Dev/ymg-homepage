import type { MediaItem } from '@/types';

export const carFeatureImages: MediaItem[] = [
    {
        id: 'car-image-1',
        type: 'image',
        src: '/pictures/index/car/car1.jpeg',
        alt: '車の紹介1',
    },
    {
        id: 'car-image-2',
        type: 'image',
        src: '/pictures/index/car/car2.jpeg',
        alt: '車の紹介2',
    },
];

export const carFeatureVideo: MediaItem = {
    id: 'car-youtube',
    type: 'youtube',
    src: '',
    youtubeId: 'MRHCyJt8GU4',
    title: '車の機能紹介動画',
};

export const serverGalleryImages: MediaItem[] = [
    {
        id: 'server-1',
        type: 'image',
        src: '/pictures/index/gallery/server1.png',
        alt: 'サーバーの様子1',
    },
    {
        id: 'server-2',
        type: 'image',
        src: '/pictures/index/gallery/server2.png',
        alt: 'サーバーの様子2',
    },
    {
        id: 'server-3',
        type: 'image',
        src: '/pictures/index/gallery/server3.png',
        alt: 'サーバーの様子3',
    },
    {
        id: 'server-4',
        type: 'image',
        src: '/pictures/index/gallery/server4.png',
        alt: 'サーバーの様子4',
    },
];

export const serverGalleryVideo: MediaItem = {
    id: 'server-youtube',
    type: 'youtube',
    src: '',
    youtubeId: '6JiTUEuUrck',
    title: 'サーバーの様子紹介動画',
};
