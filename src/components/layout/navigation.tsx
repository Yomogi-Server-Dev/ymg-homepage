'use client';

import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Calendar, Home, Image, Info, Menu, Server, Users } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
    id: string;
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
    { id: 'home', label: 'ホーム', href: '#', icon: Home },
    { id: 'features', label: '特徴', href: '#features', icon: Info },
    { id: 'events', label: 'イベント', href: '#events', icon: Calendar },
    { id: 'gallery', label: 'ギャラリー', href: '#gallery', icon: Image },
    { id: 'status', label: 'サーバー情報', href: '#status', icon: Server },
    { id: 'admins', label: '運営一覧', href: '#admins', icon: Users },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (href: string) => {
        setIsOpen(false);

        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 80; // ヘッダーの高さ分オフセット
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant='ghost' size='lg' className='relative'>
                    <Menu className='w-8 h-8' />
                    <span className='sr-only'>メニューを開く</span>
                </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[350px]'>
                <SheetHeader>
                    <SheetTitle className='text-xl font-bold text-primary'>
                        メニュー
                    </SheetTitle>
                </SheetHeader>
                <nav className='mt-8'>
                    <ul className='space-y-2'>
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <li key={item.id}>
                                    <button
                                        type='button'
                                        onClick={() =>
                                            handleNavClick(item.href)
                                        }
                                        className='w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left'
                                    >
                                        <Icon className='w-5 h-5 text-gray-600' />
                                        <span className='text-base font-medium'>
                                            {item.label}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className='absolute bottom-8 left-6 right-6'>
                    <div className='border-t pt-6'>
                        <p className='text-sm text-gray-500 text-center'>
                            Yomogi Server © 2024
                        </p>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
