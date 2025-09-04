import type { Event } from '@/types';
import { Calendar, Clock, Star, Trophy } from 'lucide-react';

export const events: Event[] = [
  {
    id: 1,
    title: '建築コンテスト',
    icon: Trophy,
    status: 'active',
    schedule: '毎月第1土曜日',
    description: ['テーマに沿った建築で競い合おう！'],
    detailTitle: '建築コンテスト',
    imageUrl: '/pictures/index/top/life1.png',
  },
  {
    id: 2,
    title: 'PvP大会',
    icon: Star,
    status: 'active',
    schedule: '毎週日曜日',
    description: ['最強のプレイヤーを決めよう！'],
    detailTitle: 'PvP大会',
    imageUrl: '/pictures/index/top/expo2.png',
  },
  {
    id: 3,
    title: 'ハロウィンイベント',
    icon: Calendar,
    status: 'upcoming',
    schedule: '10月31日',
    description: ['特別なハロウィンイベント！'],
    detailTitle: 'ハロウィンイベント - Coming Soon',
    imageUrl: '/pictures/index/top/lobby1.png',
  },
  {
    id: 4,
    title: '宝探しイベント',
    icon: Clock,
    status: 'upcoming',
    schedule: '不定期開催',
    description: ['隠された宝を見つけよう！'],
    detailTitle: '宝探しイベント - Coming Soon',
    imageUrl: '/pictures/index/top/expo1.png',
  },
];
