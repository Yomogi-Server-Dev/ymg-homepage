'use client';

import { WolfIcon } from '@/components/icons/brand-icons';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { MouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface WerewolfPortalLinkProps {
    compact?: boolean;
}

export function WerewolfPortalLink({
    compact = false,
}: WerewolfPortalLinkProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [transitioning, setTransitioning] = useState(false);
    const navigationTimer = useRef<number | null>(null);

    useEffect(() => {
        router.prefetch('/werewolf');
    }, [router]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: the shared header persists across routes, so every pathname change must clear its transition layer
    useEffect(() => {
        setTransitioning(false);
        if (navigationTimer.current) {
            window.clearTimeout(navigationTimer.current);
            navigationTimer.current = null;
        }

        return () => {
            if (navigationTimer.current) {
                window.clearTimeout(navigationTimer.current);
            }
        };
    }, [pathname]);

    const handleNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
        if (
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey ||
            event.button !== 0
        ) {
            return;
        }

        event.preventDefault();
        if (transitioning || pathname === '/werewolf') return;
        setTransitioning(true);
        navigationTimer.current = window.setTimeout(() => {
            router.push('/werewolf');
        }, 620);
    };

    return (
        <>
            <Link
                href='/werewolf'
                onClick={handleNavigation}
                aria-current={pathname === '/werewolf' ? 'page' : undefined}
                className={`group relative inline-flex shrink-0 items-center overflow-hidden rounded-[1rem] bg-[#2a191e] font-black text-white shadow-[0_5px_0_#6f2d3a,0_12px_28px_rgba(91,18,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[#3a1e25] hover:shadow-[0_7px_0_#7e3443,0_16px_32px_rgba(91,18,32,0.2)] active:translate-y-1 active:shadow-[0_2px_0_#6f2d3a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-400/35 ${
                    compact
                        ? 'h-11 w-auto gap-1.5 px-2.5 text-xs sm:gap-2 sm:px-4 sm:text-sm'
                        : 'h-11 gap-2 px-4'
                }`}
                aria-label='マイクラ人狼ページへ移動'
            >
                <span className='absolute inset-0 translate-y-full bg-gradient-to-r from-red-950 to-red-700 transition-transform duration-300 group-hover:translate-y-0' />
                <WolfIcon className='relative size-5 text-red-300' />
                <span className='relative'>マイクラ人狼</span>
                <ArrowRight
                    className={`relative size-3.5 transition-transform group-hover:translate-x-1 ${
                        compact ? 'hidden sm:block' : ''
                    }`}
                />
            </Link>

            {transitioning &&
                pathname !== '/werewolf' &&
                typeof document !== 'undefined' &&
                createPortal(
                    <div
                        className='werewolf-transition-overlay pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-[#0b0809] text-white'
                        aria-hidden='true'
                    >
                        <div className='werewolf-transition-mark text-center'>
                            <WolfIcon className='mx-auto size-16 text-red-400' />
                            <p className='mt-5 text-xs font-black tracking-[0.35em] text-red-200'>
                                TRUST NO ONE
                            </p>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}
