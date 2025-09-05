import { cn } from '@/utils';

interface LoadingProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    text?: string;
}

export function Loading({ size = 'md', className, text }: LoadingProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    };

    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center space-y-2',
                className,
            )}
        >
            <div
                className={cn(
                    'animate-spin rounded-full border-2 border-gray-200 border-t-blue-600',
                    sizeClasses[size],
                )}
            />
            {text && <p className='text-sm text-gray-600'>{text}</p>}
        </div>
    );
}

export function LoadingSkeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn('animate-pulse rounded-md bg-gray-200', className)}
            {...props}
        />
    );
}
