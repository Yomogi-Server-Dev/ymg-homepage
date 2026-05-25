import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
        { cache: 'no-store' },
    );
    if (!res.ok) throw new Error('Failed to fetch notices');
    return res.json();
}

function truncateContent(content: string, maxLength: number): string {
    const plain = content.replace(/\*\*/g, '').replace(/\n/g, ' ');
    if (plain.length <= maxLength) return plain;
    return `${plain.slice(0, maxLength)}…`;
}

function getPageNumbers(current: number, total: number): (number | '...')[] {
    if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }
    const result: (number | '...')[] = [];
    const delta = 2;
    let prev = 0;
    for (let i = 1; i <= total; i++) {
        if (
            i === 1 ||
            i === total ||
            (i >= current - delta && i <= current + delta)
        ) {
            if (i - prev > 1) result.push('...');
            result.push(i);
            prev = i;
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

    let data: NoticeListResponse;
    try {
        data = await fetchNotices(currentPage);
    } catch {
        return (
            <main className='max-w-3xl mx-auto px-4 py-24 text-center'>
                <p className='text-gray-500'>お知らせの取得に失敗しました。</p>
                <Link
                    href='/'
                    className='inline-block mt-6 text-sm text-cyan-600 hover:underline'
                >
                    トップページに戻る
                </Link>
            </main>
        );
    }

    const pageNumbers = getPageNumbers(currentPage, data.page_count);

    return (
        <main className='max-w-3xl mx-auto px-4 py-24 flex-grow'>
            <h1 className='text-3xl font-bold text-center mb-10'>
                お知らせ一覧
            </h1>

            <div className='space-y-3'>
                {data.notices.map((notice) => (
                    <Link key={notice.id} href={`/notices/${notice.id}`}>
                        <div className='bg-white rounded-xl border shadow-sm p-5 hover:shadow-md transition-shadow cursor-pointer mb-3'>
                            <div className='flex flex-wrap items-baseline gap-x-2 mb-2'>
                                <p className='text-base font-semibold text-cyan-600'>
                                    {notice.title}
                                </p>
                                <p className='text-sm text-cyan-700 opacity-70 whitespace-nowrap'>
                                    {notice.author} · {notice.created_at_diff}
                                </p>
                            </div>
                            <p className='text-sm text-neutral-500 leading-relaxed'>
                                {truncateContent(notice.content, 100)}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {data.page_count > 1 && (
                <div className='flex justify-center items-center gap-1 mt-10 flex-wrap'>
                    <Link
                        href={
                            currentPage > 1
                                ? `/notices?page=${currentPage - 1}`
                                : '#'
                        }
                        aria-disabled={currentPage <= 1}
                        className={`inline-flex items-center px-3 py-2 rounded-md border text-sm transition-colors ${
                            currentPage <= 1
                                ? 'pointer-events-none opacity-40 bg-white'
                                : 'bg-white hover:bg-gray-50'
                        }`}
                    >
                        <ChevronLeft className='w-4 h-4' />
                        前へ
                    </Link>

                    {pageNumbers.map((p, idx) =>
                        p === '...' ? (
                            <span
                                key={`ellipsis-${idx}`}
                                className='px-2 text-gray-400'
                            >
                                …
                            </span>
                        ) : (
                            <Link
                                key={p}
                                href={`/notices?page=${p}`}
                                className={`inline-flex items-center justify-center w-9 h-9 rounded-md border text-sm font-medium transition-colors ${
                                    p === currentPage
                                        ? 'bg-primary text-white border-primary pointer-events-none'
                                        : 'bg-white hover:bg-gray-50'
                                }`}
                            >
                                {p}
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
                        className={`inline-flex items-center px-3 py-2 rounded-md border text-sm transition-colors ${
                            currentPage >= data.page_count
                                ? 'pointer-events-none opacity-40 bg-white'
                                : 'bg-white hover:bg-gray-50'
                        }`}
                    >
                        次へ
                        <ChevronRight className='w-4 h-4' />
                    </Link>
                </div>
            )}

            <p className='text-center text-sm text-gray-400 mt-4'>
                全{data.count}件（{data.page_count}ページ中{currentPage}
                ページ目）
            </p>
        </main>
    );
}
