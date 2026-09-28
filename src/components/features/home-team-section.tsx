import { AdminList } from '@/components/features/admin-list';
import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import { admins } from '@/data/admins';
import { UsersRound } from 'lucide-react';

export function HomeTeamSection() {
    return (
        <section
            id='team'
            className='mc-ground-biome relative scroll-mt-28 overflow-hidden bg-[#fff0bb] py-20 lg:py-28'
        >
            <DecorativeMinecraftBlock
                type='grass'
                className='-left-28 top-24 size-64 -rotate-6 opacity-35'
            />
            <DecorativeMinecraftBlock
                type='stone'
                className='-right-20 bottom-12 size-56 rotate-6 opacity-30'
            />
            <MinecraftBlocks
                biome='overworld'
                className='absolute -right-6 top-20 hidden opacity-65 lg:grid'
            />

            <div className='relative mx-auto w-full max-w-6xl px-5 sm:px-8'>
                <div className='flex flex-col justify-between gap-6 sm:flex-row sm:items-end'>
                    <div>
                        <span className='mc-section-chip inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-black text-[#81651c]'>
                            <UsersRound className='size-4' />
                            {admins.length}人の運営
                        </span>
                        <h2 className='mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl'>
                            運営チーム
                        </h2>
                        <p className='mt-4 font-bold text-[#7a6b42]'>
                            このメンバーがよもぎを作ってます！
                        </p>
                    </div>
                </div>

                <div className='mt-10'>
                    <AdminList />
                </div>
            </div>
        </section>
    );
}
