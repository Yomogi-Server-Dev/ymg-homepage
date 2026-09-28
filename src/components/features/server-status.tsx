'use client';

import { serverInfo } from '@/data/server';
import { Activity, Server, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ServerData {
    online: boolean;
    players: number;
    maxPlayers: number;
}

interface ServerStatusProps {
    variant?: 'default' | 'compact';
}

const fallbackData: ServerData = {
    online: false,
    players: 0,
    maxPlayers: 50,
};

let cachedServerData: ServerData | null = null;
let cacheUpdatedAt = 0;
let pendingServerRequest: Promise<ServerData> | null = null;

function loadServerStatus() {
    if (cachedServerData && Date.now() - cacheUpdatedAt < 15000) {
        return Promise.resolve(cachedServerData);
    }

    if (!pendingServerRequest) {
        pendingServerRequest = fetch('/api/server-status')
            .then((response) => {
                if (!response.ok) throw new Error('Failed to fetch status');
                return response.json() as Promise<ServerData>;
            })
            .then((data) => {
                cachedServerData = data;
                cacheUpdatedAt = Date.now();
                return data;
            })
            .finally(() => {
                pendingServerRequest = null;
            });
    }

    return pendingServerRequest;
}

export function ServerStatus({ variant = 'default' }: ServerStatusProps) {
    const [serverData, setServerData] = useState<ServerData>(
        cachedServerData ?? fallbackData,
    );
    const [loading, setLoading] = useState(cachedServerData === null);

    useEffect(() => {
        let active = true;

        const fetchServerStatus = async () => {
            try {
                const data = await loadServerStatus();
                if (active) setServerData(data);
            } catch (error) {
                if (active && error instanceof Error) {
                    console.error('Failed to fetch server status:', error);
                }
            } finally {
                if (active) setLoading(false);
            }
        };

        fetchServerStatus();
        const interval = window.setInterval(fetchServerStatus, 30000);

        return () => {
            active = false;
            window.clearInterval(interval);
        };
    }, []);

    if (variant === 'compact') {
        return (
            <div
                aria-live='polite'
                aria-busy={loading}
                className='flex flex-wrap items-center gap-x-5 gap-y-3 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 text-slate-900 shadow-2xl backdrop-blur-md'
            >
                <div className='flex items-center gap-3'>
                    <span
                        className={`size-2.5 rounded-full ${
                            loading
                                ? 'animate-pulse bg-amber-400'
                                : serverData.online
                                  ? 'bg-lime-500 shadow-[0_0_0_5px_rgba(132,204,22,0.15)]'
                                  : 'bg-rose-500 shadow-[0_0_0_5px_rgba(244,63,94,0.12)]'
                        }`}
                    />
                    <div>
                        <p className='text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400'>
                            Server status
                        </p>
                        <p className='text-sm font-bold'>
                            {loading
                                ? '確認中…'
                                : serverData.online
                                  ? 'オンライン'
                                  : 'オフライン'}
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Users className='size-4 text-lime-600' />
                    <p className='text-sm font-bold'>
                        {loading ? '—' : serverData.players}
                        <span className='ml-1 font-medium text-slate-400'>
                            / {serverData.maxPlayers}人
                        </span>
                    </p>
                </div>
                <div className='ml-auto hidden text-right sm:block'>
                    <p className='text-[11px] text-slate-400'>ADDRESS</p>
                    <code className='text-xs font-bold text-slate-700'>
                        {serverInfo.address}:{serverInfo.port}
                    </code>
                </div>
            </div>
        );
    }

    return (
        <div
            aria-live='polite'
            aria-busy={loading}
            className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'
        >
            <div className='grid gap-6 md:grid-cols-3'>
                <div className='flex items-center gap-4'>
                    <div className='flex size-12 items-center justify-center rounded-2xl bg-lime-100'>
                        <Activity className='size-5 text-lime-700' />
                    </div>
                    <div>
                        <p className='text-xs font-semibold text-slate-400'>
                            サーバー状態
                        </p>
                        <p className='font-bold text-slate-900'>
                            {loading
                                ? '確認中…'
                                : serverData.online
                                  ? 'オンライン'
                                  : 'オフライン'}
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex size-12 items-center justify-center rounded-2xl bg-lime-100'>
                        <Users className='size-5 text-lime-700' />
                    </div>
                    <div>
                        <p className='text-xs font-semibold text-slate-400'>
                            プレイヤー
                        </p>
                        <p className='font-bold text-slate-900'>
                            {loading
                                ? '—'
                                : `${serverData.players} / ${serverData.maxPlayers}人`}
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex size-12 items-center justify-center rounded-2xl bg-lime-100'>
                        <Server className='size-5 text-lime-700' />
                    </div>
                    <div>
                        <p className='text-xs font-semibold text-slate-400'>
                            サーバーアドレス
                        </p>
                        <code className='font-mono text-sm font-bold text-slate-900'>
                            {serverInfo.address}:{serverInfo.port}
                        </code>
                    </div>
                </div>
            </div>
        </div>
    );
}
