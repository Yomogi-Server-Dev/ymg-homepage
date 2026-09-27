import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import {
    ArrowUpRight,
    Box,
    ChevronLeft,
    ChevronRight,
    Clock3,
    Megaphone,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'お知らせ',
    description:
        'よもぎサーバーのアップデート、メンテナンス、イベントに関する最新情報です。',
    alternates: { canonical: '/notices' },
};

const API_BASE = 'https://notice-ymgs.f5.si';
const LIMIT = 10;

type Notice = {
    id: number;
    title: string;
    content: string;
    author: string;
    created_at: string;
    created_at_diff: string;
};

type NoticeListResponse = {
    count: number;
    page_count: number;
    page_required: number;
    notices: Notice[];
};

async function fetchNotices(page: number): Promise<NoticeListResponse> {
    const res = await fetch(
        `${API_BASE}/get_index.php?page=${page}&limit=${LIMIT}`,
        {
            cache: 'no-store',
            signal: AbortSignal.timeout(8000),
        },
    );
    if (!res.ok) throw new Error('Failed to fetch notices');
    return res.json();
}

function truncateContent(content: string, maxLength: number): string {
    const plain = content.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
    if (plain.length <= maxLength) return plain;
    return `${plain.slice(0, maxLength)}…`;
}

type PageNumber = number | `ellipsis-${number}-${number}`;

function getPageNumbers(current: number, total: number): PageNumber[] {
    if (total <= 7) {
        return Array.from({ length: total }, (_, index) => index + 1);
    }

    const result: PageNumber[] = [];
    const delta = 2;
    let previous = 0;

    for (let page = 1; page <= total; page++) {
        if (
            page === 1 ||
            page === total ||
            (page >= current - delta && page <= current + delta)
        ) {
            if (page - previous > 1) {
                result.push(`ellipsis-${previous}-${page}`);
            }
            result.push(page);
            previous = page;
        }
    }

    return result;
}

export default async function NoticesPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const { page } = await searchParams;
    const currentPage = Math.max(1, Number.parseInt(page || '1') || 1);

    let data: NoticeListResponse | null = null;
    try {
        data = await fetchNotices(currentPage);
    } catch {
        // 通信に失敗しても、ポータルへ戻れるページ構造は維持する。
    }

    const pageNumbers = data
        ? getPageNumbers(currentPage, data.page_count)
        : [];

    return (
        <main className='mc-sky-biome min-h-screen overflow-hidden bg-[#dff5ff] pt-32 text-[#19231a] sm:pt-36'>
            <section className='relative px-5 pb-20 sm:px-8 sm:pb-21'>
                <DecorativeMinecraftBlock
                    type='diamond'
                    className='-left-20 top-8 size-52 -rotate-6 opacity-20 sm:size-64'
                />
                <DecorativeMinecraftBlock
                    type='grass'
                    className='-right-8 top-2 size-28 rotate-6 opacity-85 sm:right-[8%] sm:size-36'
                />
                <MinecraftBlocks
                    biome='overworld'
                    className='absolute -right-12 bottom-5 hidden opacity-55 lg:grid'
                />

                <div className='relative mx-auto grid w-full max-w-6xl items-end gap-10 lg:grid-cols-[1fr_23rem]'>
                    <div>
                        <span className='mc-section-chip inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-[#4d7c3c]'>
                            <Megaphone className='size-4' />
                            INFO
                        </span>
                        <h1 className='mt-6 text-balance text-5xl font-black leading-[0.98] tracking-[-0.065em] sm:text-7xl lg:text-[5.5rem]'>
                            お知らせ
                        </h1>
                        <p className='mt-6 max-w-xl text-base font-bold leading-8 text-[#58705b] sm:text-lg'>
                            最新のよもぎを確認しよう。
                            <br className='hidden sm:block' />
                            アップデートやイベント情報はここをチェック！
                        </p>
                    </div>

                    <div className='relative overflow-hidden rounded-[2.25rem] bg-[#243323] p-7 text-white shadow-[0_20px_50px_rgba(35,51,35,0.18)] sm:p-8'>
                        <Box className='absolute -right-5 -top-6 size-32 rotate-12 text-white/[0.06]' />
                        <p className='text-xs font-black tracking-[0.18em] text-[#a9dd89]'>
                            NEWS LOG
                        </p>
                        <p className='mt-3 text-3xl font-black tracking-tight'>
                            {data ? `${data.count}件` : '確認中'}
                        </p>
                        <p className='mt-2 text-sm font-bold leading-6 text-white/55'>
                            {data
                                ? `全${data.page_count}ページのうち、${currentPage}ページ目`
                                : 'お知らせサーバーへ接続しています'}
                        </p>
                    </div>
                </div>
            </section>

            <section className='mc-ground-biome relative bg-[#fffaf2] px-5 pb-28 pt-2 sm:px-8 sm:pb-32 sm:pt-2'>
                <div className='absolute inset-x-[-8%] -top-9 h-20 rounded-[50%] bg-[#fffaf2]' />
                <DecorativeMinecraftBlock
                    type='dirt'
                    className='-right-24 top-40 size-64 rotate-6 opacity-25'
                />
                <MinecraftBlocks
                    biome='cave'
                    className='absolute -left-8 bottom-20 hidden opacity-45 lg:grid'
                />

                <div className='relative mx-auto w-full max-w-5xl'>
                    <div className='mb-8 flex flex-wrap items-end justify-between gap-4'>
                        <div>
                            <p className='text-xs font-black tracking-[0.16em] text-[#69925d]'>
                                UPDATE FEED
                            </p>
                            <h2 className='mt-2 text-3xl font-black tracking-[-0.045em] sm:text-4xl'>
                                新しい順に見る
                            </h2>
                        </div>
                        {data && (
                            <span className='rounded-full bg-[#eaf5df] px-4 py-2 text-xs font-black text-[#507641]'>
                                PAGE {currentPage} / {data.page_count}
                            </span>
                        )}
                    </div>

                    {data ? (
                        <div className='space-y-4'>
                            {data.notices.map((notice, index) => (
                                <Link
                                    key={notice.id}
                                    href={`/notices/${notice.id}`}
                                    className='mc-notice-card group relative grid gap-4 overflow-hidden rounded-[1.85rem] bg-white p-5 transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-400/40 sm:grid-cols-[4.25rem_minmax(0,1fr)_3rem] sm:items-center sm:gap-5 sm:p-6'
                                >
                                    <span className='mc-item-slot flex size-14 items-center justify-center rounded-[1.15rem] bg-[#dff2cf] font-mono text-lg font-black text-[#527743] sm:size-16 sm:text-xl'>
                                        {String(
                                            (currentPage - 1) * LIMIT +
                                                index +
                                                1,
                                        ).padStart(2, '0')}
                                    </span>

                                    <div className='min-w-0'>
                                        <div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-[#829085]'>
                                            <span className='inline-flex items-center gap-1.5'>
                                                <Clock3 className='size-3.5' />
                                                {notice.created_at_diff}
                                            </span>
                                            <span className='rounded-full bg-[#eef6e8] px-2.5 py-1 text-[10px] font-black text-[#648055]'>
                                                {notice.author}
                                            </span>
                                        </div>
                                        <h3 className='mt-2 text-lg font-black leading-7 tracking-[-0.025em] text-[#233024] transition group-hover:text-[#4c783d] sm:text-xl'>
                                            {notice.title}
                                        </h3>
                                        <p className='mt-1.5 line-clamp-2 text-sm font-bold leading-6 text-[#778178]'>
                                            {truncateContent(
                                                notice.content,
                                                72,
                                            )}
                                        </p>
                                    </div>

                                    <span className='absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-[#eaf7ff] text-[#4d7588] transition group-hover:translate-x-1 group-hover:bg-[#d7f0ff] sm:static sm:size-11'>
                                        <ArrowUpRight className='size-4' />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className='rounded-[2rem] bg-white px-6 py-14 text-center shadow-[0_14px_36px_rgba(66,82,58,0.08)] sm:px-10'>
                            <span className='mx-auto flex size-14 items-center justify-center rounded-[1.1rem] bg-[#fff0bb] text-[#80651f]'>
                                <Megaphone className='size-6' />
                            </span>
                            <h2 className='mt-5 text-xl font-black'>
                                お知らせを読み込めませんでした
                            </h2>
                            <p className='mt-3 text-sm font-bold leading-7 text-[#778178]'>
                                少し時間をおいて、もう一度アクセスしてみてください。
                            </p>
                            <Link
                                href='/'
                                className='mt-6 inline-flex items-center gap-2 rounded-full bg-[#243323] px-5 py-3 text-sm font-black text-white shadow-[0_6px_0_#8ed35f] transition hover:-translate-y-1'
                            >
                                ポータルへ戻る
                                <ArrowUpRight className='size-4' />
                            </Link>
                        </div>
                    )}

                    {data && data.page_count > 1 && (
                        <nav
                            aria-label='お知らせのページ送り'
                            className='mt-10 flex flex-wrap items-center justify-center gap-2'
                        >
                            <Link
                                href={
                                    currentPage > 1
                                        ? `/notices?page=${currentPage - 1}`
                                        : '#'
                                }
                                aria-disabled={currentPage <= 1}
                                className={`inline-flex h-11 items-center gap-1 rounded-full bg-white px-4 text-sm font-black text-[#526052] shadow-sm transition hover:-translate-y-0.5 ${
                                    currentPage <= 1
                                        ? 'pointer-events-none opacity-35'
                                        : 'hover:bg-[#eff9e8]'
                                }`}
                            >
                                <ChevronLeft className='size-4' />
                                前へ
                            </Link>

                            {pageNumbers.map((pageNumber) =>
                                typeof pageNumber === 'string' ? (
                                    <span
                                        key={pageNumber}
                                        className='px-1 text-[#a5afa5]'
                                    >
                                        …
                                    </span>
                                ) : (
                                    <Link
                                        key={pageNumber}
                                        href={`/notices?page=${pageNumber}`}
                                        aria-current={
                                            pageNumber === currentPage
                                                ? 'page'
                                                : undefined
                                        }
                                        className={`flex size-11 items-center justify-center rounded-[0.95rem] text-sm font-black shadow-sm transition hover:-translate-y-0.5 ${
                                            pageNumber === currentPage
                                                ? 'pointer-events-none bg-[#527b43] text-white shadow-[0_4px_0_#33582c]'
                                                : 'bg-white text-[#526052] hover:bg-[#eff9e8]'
                                        }`}
                                    >
                                        {pageNumber}
                                    </Link>
                                ),
                            )}

                            <Link
                                href={
                                    currentPage < data.page_count
                                        ? `/notices?page=${currentPage + 1}`
                                        : '#'
                                }
                                aria-disabled={currentPage >= data.page_count}
                                className={`inline-flex h-11 items-center gap-1 rounded-full bg-white px-4 text-sm font-black text-[#526052] shadow-sm transition hover:-translate-y-0.5 ${
                                    currentPage >= data.page_count
                                        ? 'pointer-events-none opacity-35'
                                        : 'hover:bg-[#eff9e8]'
                                }`}
                            >
                                次へ
                                <ChevronRight className='size-4' />
                            </Link>
                        </nav>
                    )}
                </div>
            </section>
        </main>
    );
}
