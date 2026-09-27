import {
    DecorativeMinecraftBlock,
    MinecraftBlocks,
} from '@/components/ui/minecraft-blocks';
import {
    ArrowLeft,
    Clock3,
    Megaphone,
    Paperclip,
    UserRound,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';

const API_BASE = 'https://notice-ymgs.f5.si';

type Notice = {
    id: number;
    title: string;
    content: string;
    author: string;
    created_at: string;
    has_attachment: number;
};

const fetchNotice = cache(async (id: string): Promise<Notice | null> => {
    const res = await fetch(`${API_BASE}/get.php?id=${id}`, {
        cache: 'no-store',
        signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.id) return null;
    return data;
});

type NoticePageProps = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({
    params,
}: NoticePageProps): Promise<Metadata> {
    const { id } = await params;
    const notice = await fetchNotice(id);

    if (!notice) {
        return {
            title: 'お知らせが見つかりません',
            robots: { index: false, follow: false },
        };
    }

    const description = notice.content
        .replace(/\*\*/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 150);

    return {
        title: notice.title,
        description,
        alternates: { canonical: `/notices/${id}` },
        openGraph: {
            type: 'article',
            title: notice.title,
            description,
            publishedTime: notice.created_at,
        },
    };
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

function renderLine(line: string) {
    const parts = line.split(/(\*\*[^*]+\*\*|https?:\/\/\S+)/g).filter(Boolean);
    let partOffset = 0;

    return parts.map((part) => {
        const key = `part-${partOffset}`;
        partOffset += part.length;

        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <strong
                    key={key}
                    className='rounded-md bg-[#eef7e7] px-1 font-black text-[#395e31]'
                >
                    {part.slice(2, -2)}
                </strong>
            );
        }
        if (part.startsWith('http://') || part.startsWith('https://')) {
            return (
                <a
                    key={key}
                    href={part}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='break-all font-bold text-[#397690] underline decoration-[#8dcbe5] decoration-2 underline-offset-4 transition hover:text-[#24546a]'
                >
                    {part}
                </a>
            );
        }
        return <span key={key}>{part}</span>;
    });
}

function renderContent(content: string) {
    let lineOffset = 0;

    return content.split('\n').map((line) => {
        const key = `line-${lineOffset}`;
        lineOffset += line.length + 1;

        if (line.trim() === '') return <div key={key} className='h-3' />;
        return (
            <p key={key} className='leading-8'>
                {renderLine(line)}
            </p>
        );
    });
}

export default async function NoticeDetailPage({ params }: NoticePageProps) {
    const { id } = await params;
    const notice = await fetchNotice(id);

    if (!notice) {
        notFound();
    }

    return (
        <main className='mc-sky-biome min-h-screen overflow-hidden bg-[#dff5ff] pt-32 text-[#19231a] sm:pt-36'>
            <section className='relative px-5 pb-20 sm:px-8 sm:pb-16'>
                <DecorativeMinecraftBlock
                    type='diamond'
                    className='-left-20 top-20 size-56 -rotate-6 opacity-20'
                />
                <DecorativeMinecraftBlock
                    type='grass'
                    className='-right-10 top-4 size-32 rotate-6 opacity-80 sm:right-[9%] sm:size-40'
                />

                <div className='relative mx-auto w-full max-w-4xl'>
                    <Link
                        href='/notices'
                        className='group inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#4d674d] shadow-[0_8px_24px_rgba(39,75,31,0.08)] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-400/40'
                    >
                        <ArrowLeft className='size-4 transition-transform group-hover:-translate-x-1' />
                        お知らせ一覧へ
                    </Link>

                    <div className='mt-10'>
                        <span className='mc-section-chip inline-flex items-center gap-2 rounded-full bg-[#eaf5df] px-4 py-2 text-xs font-black text-[#527743]'>
                            <Megaphone className='size-4' />
                            YOMOGI NEWS
                        </span>
                        <h1 className='mt-5 text-balance text-4xl font-black leading-[1.12] tracking-[-0.055em] sm:text-6xl'>
                            {notice.title}
                        </h1>

                        <div className='mt-7 flex flex-wrap gap-2.5'>
                            <span className='inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-black text-[#617061]'>
                                <UserRound className='size-4 text-[#65914f]' />
                                {notice.author}
                            </span>
                            <time
                                dateTime={notice.created_at}
                                className='inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-black text-[#617061]'
                            >
                                <Clock3 className='size-4 text-[#65914f]' />
                                {formatDate(notice.created_at)}
                            </time>
                            {notice.has_attachment === 1 && (
                                <span className='inline-flex items-center gap-2 rounded-full bg-[#fff0bb] px-4 py-2 text-xs font-black text-[#7a611f]'>
                                    <Paperclip className='size-4' />
                                    添付ファイルあり
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className='mc-ground-biome relative bg-[#fffaf2] px-5 pb-28 pt-14 sm:px-8 sm:pb-32 sm:pt-10'>
                <div className='absolute inset-x-[-8%] -top-9 h-20 rounded-[50%] bg-[#fffaf2]' />
                <MinecraftBlocks
                    biome='overworld'
                    className='absolute -right-10 bottom-20 hidden opacity-45 lg:grid'
                />

                <article className='mc-article-block relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2.25rem] bg-white p-6 sm:p-10 lg:p-12'>
                    <div className='mb-8 flex items-center gap-3 rounded-[1.4rem] bg-[#eef7e7] px-5 py-4 text-sm font-black text-[#527743]'>
                        <span className='flex size-9 shrink-0 items-center justify-center rounded-[0.8rem] bg-white shadow-sm'>
                            <Megaphone className='size-4' />
                        </span>
                        チームよもぎからのお知らせ
                    </div>

                    <div className='space-y-2 text-[15px] font-medium leading-8 text-[#4e5a50] sm:text-base'>
                        {renderContent(notice.content)}
                    </div>

                    {notice.has_attachment === 1 && (
                        <div className='mt-9 flex items-start gap-3 rounded-[1.4rem] bg-[#fff7d8] px-5 py-4 text-sm font-bold leading-6 text-[#78642d]'>
                            <Paperclip className='mt-0.5 size-5 shrink-0' />
                            このお知らせには添付ファイルがあります。本文中の案内から確認してください。
                        </div>
                    )}
                </article>

                <div className='relative mx-auto mt-8 flex w-full max-w-4xl justify-center'>
                    <Link
                        href='/notices'
                        className='group inline-flex h-12 items-center gap-2 rounded-full bg-[#243323] px-6 text-sm font-black text-white shadow-[0_7px_0_#8ed35f] transition hover:-translate-y-1 hover:bg-[#385837]'
                    >
                        <ArrowLeft className='size-4 transition-transform group-hover:-translate-x-1' />
                        お知らせ一覧へ戻る
                    </Link>
                </div>
            </section>
        </main>
    );
}
