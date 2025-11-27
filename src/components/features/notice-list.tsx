'use client';

import {Card, TriangleCard} from '@/components/ui/card';
import { User } from 'lucide-react';
import { useEffect, useState } from "react";

export type SimpleNotice = {
    id: number,
    title: string,
    content: string,
    author: string,
    created_at: string
}

export function NoticeList() {
    const [notices, setNotices] = useState<SimpleNotice[]>([]);
    let fetch_notices = async () => {
        try {
            const response = await fetch("https://notice-ymgs.f5.si/get_index.php?page=1&limit=5");
            const data = await response.json();
            setNotices(data.notices);
        } catch (error) {
            console.error('Failed to fetch notices:', error);
        }
    };

    useEffect(() => {
        fetch_notices();
    }, []);

    return (
        <div className='gap-6'>
            {notices.map((notice) => (
                <TriangleCard
                    key={notice.id}
                    className='p-3 hover:shadow-lg transition-shadow m-4'
                >
                    <div className='mt-2 mb-1 flex flex-row items-end ml-0.5'>
                        <p className='text-base text-cyan-600 font-medium mr-1'>
                            {notice.title}
                        </p>
                        <p className='text-sm text-cyan-700 font-medium opacity-70 truncate'>
                             - {notice.created_at} by {notice.author}
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p className='text-sm text-neutral-500 font-medium ml-2 mr-2'>
                            {notice.content}
                        </p>
                    </div>
                </TriangleCard>
            ))}
        </div>
    );
}
