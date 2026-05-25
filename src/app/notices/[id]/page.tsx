import Link from 'next/link';
import { ChevronLeft, Paperclip } from 'lucide-react';
import { notFound } from 'next/navigation';

const API_BASE = 'https://notice-ymgs.f5.si';

type Notice = {
    id: number;
    title: string;
    content: string;
    author: string;
    created_at: string;
    has_attachment: number;
};

async function fetchNotice(id: string): Promise<Notice | null> {
    const res = await fetch(`${API_BASE}/get.php?id=${id}`, {
        cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.id) return null;
    return data;
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
    const parts = line.split(/(\*\*[^*]+\*\*|https?:\/\/\S+)/g);
    return parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('http://') || part.startsWith('https://')) {
            return (
                <a
                    key={j}
                    href={part}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-cyan-600 underline break-all'
                >
                    {part}
                </a>
            );
        }
        return <span key={j}>{part}</span>;
    });
}

function renderContent(content: string) {
    return content.split('\n').map((line, i) => {
        if (line.trim() === '') return <br key={i} />;
        return (
            <p key={i} className='mb-3 leading-relaxed'>
                {renderLine(line)}
            </p>
        );
    });
}

export default async function NoticeDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const notice = await fetchNotice(id);

    if (!notice) {
        notFound();
    }

    return (
        <main className='max-w-3xl mx-auto px-4 py-24'>
            <Link
                href='/notices'
                className='inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors'
            >
                <ChevronLeft className='w-4 h-4' />
                お知らせ一覧に戻る
            </Link>

            <article className='bg-white rounded-xl border shadow-sm p-6 sm:p-8'>
                <h1 className='text-2xl font-bold text-gray-800 mb-3'>
                    {notice.title}
                </h1>

                <div className='flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6 pb-6 border-b'>
                    <span>{notice.author}</span>
                    <span>·</span>
                    <span>{formatDate(notice.created_at)}</span>
                    {notice.has_attachment === 1 && (
                        <span className='inline-flex items-center gap-1 text-cyan-600'>
                            <Paperclip className='w-3 h-3' />
                            添付あり
                        </span>
                    )}
                </div>

                <div className='text-gray-700 text-base'>
                    {renderContent(notice.content)}
                </div>
            </article>
        </main>
    );
}
