import { admins } from '@/data/admins';
import { Gamepad2 } from 'lucide-react';
import Image from 'next/image';

interface AdminListProps {
    limit?: number;
    variant?: 'grid' | 'preview' | 'compact';
}

const roleLabels = {
    Admin: '運営',
    Builder: '建築チーム',
} as const;

const profileGradients = [
    'from-lime-300 via-emerald-200 to-cyan-200',
    'from-violet-300 via-fuchsia-200 to-orange-200',
    'from-sky-300 via-cyan-200 to-lime-200',
    'from-amber-200 via-orange-200 to-rose-200',
];

export function AdminList({ limit, variant = 'grid' }: AdminListProps) {
    const visibleAdmins = limit ? admins.slice(0, limit) : admins;

    if (variant === 'compact') {
        return (
            <div
                className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'
                aria-label='チームよもぎのメンバー全員'
            >
                {visibleAdmins.map((admin, index) => (
                    <article
                        key={admin.id}
                        className='team-profile-card group flex min-w-0 flex-col rounded-[1.6rem] border border-white/70 bg-white/80 p-3 shadow-[0_10px_24px_rgba(93,75,28,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_30px_rgba(93,75,28,0.12)] sm:p-4'
                    >
                        <div
                            className={`relative aspect-square overflow-hidden rounded-[1.25rem] bg-gradient-to-br ${profileGradients[index % profileGradients.length]}`}
                        >
                            <Image
                                src={admin.avatar}
                                alt={`${admin.name}のプロフィール画像`}
                                fill
                                sizes='(max-width: 640px) 42vw, (max-width: 1024px) 22vw, 150px'
                                className='object-cover transition duration-500 group-hover:scale-105'
                            />
                            <span className='absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[9px] font-black text-[#5b522f] backdrop-blur'>
                                {roleLabels[admin.role]}
                            </span>
                        </div>
                        <h3 className='mt-3 break-words text-sm font-black leading-5 text-[#2f342d] sm:text-base'>
                            {admin.name}
                        </h3>
                        <p className='mt-1 truncate text-[10px] font-bold text-[#8a846f] sm:text-xs'>
                            @{admin.gamerTag}
                        </p>
                        <p className='mt-3 flex-1 rounded-[1rem] bg-[#f5f4e9] px-3 py-2.5 text-[11px] font-bold leading-[1.65] text-[#667063] sm:text-xs sm:leading-5'>
                            {admin.description.trim()}
                        </p>
                    </article>
                ))}
            </div>
        );
    }

    return (
        <div
            aria-label='チームよもぎのメンバープロフィール'
            tabIndex={variant === 'preview' ? 0 : undefined}
            className={
                variant === 'preview'
                    ? 'flex snap-x gap-4 overflow-x-auto pb-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-400/40 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]'
                    : 'grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4'
            }
        >
            {visibleAdmins.map((admin, index) => (
                <article
                    key={admin.id}
                    className={`group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                        variant === 'preview'
                            ? 'min-w-[82vw] snap-start sm:min-w-0'
                            : ''
                    }`}
                >
                    <div
                        className={`relative h-20 bg-gradient-to-br sm:h-24 ${profileGradients[index % profileGradients.length]}`}
                    >
                        <div className='absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:12px_12px]' />
                        <span className='absolute right-4 top-4 rounded-full border border-white/50 bg-white/75 px-3 py-1 text-[10px] font-black tracking-[0.12em] text-slate-700 backdrop-blur-sm'>
                            {roleLabels[admin.role]}
                        </span>
                    </div>

                    <div className='relative px-4 pb-5 pt-10 sm:px-5 sm:pb-6 sm:pt-12'>
                        <div className='absolute -top-8 left-4 size-16 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-md sm:-top-10 sm:left-5 sm:size-20'>
                            <Image
                                src={admin.avatar}
                                alt={`${admin.name}のプロフィール画像`}
                                fill
                                sizes='80px'
                                className='object-cover'
                            />
                        </div>

                        <h3 className='truncate text-base font-black text-slate-900 sm:text-lg'>
                            {admin.name}
                        </h3>
                        <p className='mt-1 flex items-center gap-1.5 truncate text-xs font-semibold text-slate-400'>
                            <Gamepad2 className='size-3.5 shrink-0' />
                            {admin.gamerTag}
                        </p>
                        <p className='mt-4 min-h-14 text-xs leading-5 text-slate-600 sm:mt-5 sm:text-sm sm:leading-6'>
                            {admin.description.trim()}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
}
