'use client';

import { ArrowUpRight, Clock3 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type SimpleNotice = {
    id: number;
    title: string;
    content: string;
    author: string;
    created_at: string;
    created_at_diff: string;
};

interface NoticeListProps {
    limit?: number;
    variant?: 'default' | 'home';
}

function summarize(content: string, maxLength = 52) {
    const plainText = content.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
    return plainText.length > maxLength
        ? `${plainText.slice(0, maxLength)}…`
        : plainText;
}

export function NoticeList({
    limit = 4,
    variant = 'default',
}: NoticeListProps) {
    const [notices, setNotices] = useState<SimpleNotice[]>([]);
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        let active = true;
        const timeout = window.setTimeout(() => {
            controller.abort();
            if (active) setFailed(true);
        }, 8000);

        const fetchNotices = async () => {
            try {
                const response = await fetch(
                    `https://notice-ymgs.f5.si/get_index.php?page=1&limit=${limit}`,
                    { signal: controller.signal },
                );
                if (!response.ok) throw new Error('Failed to fetch notices');
                const data: { notices?: SimpleNotice[] } =
                    await response.json();
                if (active) setNotices(data.notices ?? []);
            } catch (error) {
                if (
                    active &&
                    error instanceof Error &&
                    error.name !== 'AbortError'
                ) {
                    setFailed(true);
                }
            } finally {
                window.clearTimeout(timeout);
                if (active) setLoading(false);
            }
        };

        fetchNotices();
        return () => {
            active = false;
            window.clearTimeout(timeout);
            controller.abort();
        };
    }, [limit]);

    if (loading) {
        return (
            <div
                className='divide-y divide-slate-100 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white'
                aria-label='お知らせを読み込み中'
            >
                {['first', 'second', 'third', 'fourth']
                    .slice(0, limit)
                    .map((item) => (
                        <div
                            key={item}
                            className='animate-pulse px-6 py-7 sm:px-8'
                        >
                            <div className='h-3 w-24 rounded bg-slate-200' />
                            <div className='mt-4 h-5 w-3/5 rounded bg-slate-200' />
                            <div className='mt-3 h-3 w-4/5 rounded bg-slate-100' />
                        </div>
                    ))}
            </div>
        );
    }

    if (failed || notices.length === 0) {
        return (
            <div className='rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center'>
                <p className='text-sm text-slate-500'>
                    現在、お知らせを読み込めません。少し時間をおいてお試しください。
                </p>
            </div>
        );
    }

    if (variant === 'home') {
        return (
            <div className='space-y-3'>
                {notices.slice(0, limit).map((notice) => (
                    <Link
                        key={notice.id}
                        href={`/notices/${notice.id}`}
                        className='group flex items-center gap-4 rounded-[1.6rem] bg-white px-5 py-5 shadow-[0_10px_28px_rgba(52,92,112,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(52,92,112,0.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50 sm:px-6'
                    >
                        <div className='min-w-0 flex-1'>
                            <span className='inline-flex items-center gap-1.5 text-xs font-black text-[#78909d]'>
                                <Clock3 className='size-3.5' />
                                {notice.created_at_diff}
                            </span>
                            <h3 className='mt-2 truncate text-base font-black text-[#27373f] sm:text-lg'>
                                {notice.title}
                            </h3>
                            <p className='mt-1 hidden truncate text-sm font-bold text-[#8799a2] sm:block'>
                                {summarize(notice.content, 36)}
                            </p>
                        </div>
                        <span className='flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e6f6ff] text-[#4b7388] transition-transform group-hover:translate-x-1'>
                            <ArrowUpRight className='size-4' />
                        </span>
                    </Link>
                ))}
            </div>
        );
    }

    return (
        <div className='divide-y divide-slate-100 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm'>
            {notices.slice(0, limit).map((notice, index) => (
                <Link
                    key={notice.id}
                    href={`/notices/${notice.id}`}
                    className='group grid gap-4 px-6 py-6 transition hover:bg-lime-50/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-lime-400/40 sm:grid-cols-[64px_1fr_auto] sm:items-center sm:px-8'
                >
                    <span className='font-mono text-2xl font-black text-lime-600/35 transition group-hover:text-lime-600'>
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    <div>
                        <div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-400'>
                            <span className='rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black tracking-[0.12em] text-slate-500'>
                                NEWS
                            </span>
                            <span className='inline-flex items-center gap-1.5'>
                                <Clock3 className='size-3.5' />
                                {notice.created_at_diff}
                            </span>
                        </div>
                        <h3 className='mt-3 text-lg font-black leading-7 text-slate-900 transition group-hover:text-lime-800'>
                            {notice.title}
                        </h3>
                        <p className='mt-2 max-w-3xl text-sm leading-6 text-slate-500'>
                            {summarize(notice.content)}
                        </p>
                    </div>

                    <span className='hidden size-11 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-lime-300 group-hover:bg-white group-hover:text-lime-700 sm:flex'>
                        <ArrowUpRight className='size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                    </span>
                </Link>
            ))}
        </div>
    );
}
