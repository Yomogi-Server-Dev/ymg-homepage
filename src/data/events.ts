import type { Event } from '@/types';
import { Trophy } from 'lucide-react';

export const events: Event[] = [
    {
        id: 1,
        title: 'CreativeExpo2025',
        icon: Trophy,
        status: 'active',
        schedule: '開催終了',
        description: [''],
        detailTitle: 'CreativeExpo2025',
        imageUrl: '/pictures/index/event/CreativeEXPO2025.jpeg',
    },
    {
        id: 2,
        title: '人狼イベント',
        icon: Trophy,
        status: 'active',
        schedule: '毎週土曜日21時~',
        description: [''],
        detailTitle: '人狼イベント',
        imageUrl: '/pictures/index/event/wolf.png',
    },
    {
        id: 3,
        title: '銃撃戦イベント',
        icon: Trophy,
        status: 'active',
        schedule: '不定期土曜日21時~',
        description: [''],
        detailTitle: '銃撃戦イベント',
        imageUrl: '/pictures/index/event/gunfight.png',
    },
];
