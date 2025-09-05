'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { LoadingSkeleton } from './loading';

interface ImageWithLoadingProps extends ComponentProps<typeof Image> {
    containerClassName?: string;
    showSpinner?: boolean;
    fallbackIcon?: React.ComponentType<{ className?: string }>;
}

export function ImageWithLoading({
    className,
    containerClassName,
    showSpinner = false,
    fallbackIcon: FallbackIcon,
    onLoad,
    onError,
    alt,
    ...props
}: ImageWithLoadingProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsLoading(false);
        onLoad?.(e);
    };

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsLoading(false);
        setHasError(true);
        onError?.(e);
    };

    return (
        <div className={cn('relative overflow-hidden', containerClassName)}>
            {isLoading && (
                <div className="absolute inset-0 z-10">
                    {showSpinner ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-blue-600" />
                        </div>
                    ) : (
                        <LoadingSkeleton className="w-full h-full" />
                    )}
                </div>
            )}
            
            {hasError && FallbackIcon ? (
                <div className="flex items-center justify-center h-full bg-gray-100">
                    <FallbackIcon className="w-8 h-8 text-gray-400" />
                </div>
            ) : (
                <Image
                    className={cn(
                        'transition-opacity duration-300',
                        isLoading ? 'opacity-0' : 'opacity-100',
                        className
                    )}
                    alt={alt}
                    onLoad={handleLoad}
                    onError={handleError}
                    {...props}
                />
            )}
        </div>
    );
}