import type { Admin, AdminRole } from '@/types';

export const admins: Admin[] = [
    {
        id: 1,
        name: 'Matsuyuki1231',
        gamerTag: 'matsuyuki1231',
        role: 'Admin',
        avatar: '/pictures/index/admin/matsuyuki.jpg',
        description: '管理者',
    },
    {
        id: 2,
        name: 'Sagaと申す',
        gamerTag: "byakko9",
        role: 'Admin',
        avatar: '/pictures/index/admin/saga.jpg',
        description: 'Discord管理者',
    },
    {
        id: 3,
        name: 'mydeacy',
        gamerTag: 'mydeacy',
        role: 'Admin',
        avatar: '',
        description: '',
    },
    {
        id: 4,
        name: 'aida',
        gamerTag: 'aida0710',
        role: 'Admin',
        avatar: '/pictures/index/admin/aida.jpg',
        description: '鯖管(物理)だったりプラグイン開発してます。ネットワークインフラが好きです。',
    },
    {
        id: 5,
        name: 'kogumapotato',
        gamerTag: 'kogumapotato',
        role: 'Admin',
        avatar: '',
        description: '',
    },
    {
        id: 6,
        name: 'koruma0317',
        gamerTag: 'koruma0317',
        role: 'Admin',
        avatar: '',
        description: '',
    },
    {
        id: 7,
        name: 'airbass0941',
        gamerTag: 'airbass0941',
        role: 'Admin',
        avatar: '',
        description: '',
    },
    {
        id: 8,
        name: 'terracat2020',
        gamerTag: 'terracat2020',
        role: 'Builder',
        avatar: '',
        description: '',
    },
    {
        id: 9,
        name: 'nassan2727',
        gamerTag: 'nassan2727',
        role: 'Builder',
        avatar: '',
        description: '',
    },
    {
        id: 10,
        name: 'makonbu714',
        gamerTag: 'makonbu714',
        role: 'Builder',
        avatar: '',
        description: '',
    },
];

export const roleColors: Record<AdminRole, string> = {
    Admin: 'bg-orange-500',
    Builder: 'bg-yellow-500',
};