import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';

interface BrandIconProps {
    className?: string;
}

function FontAwesomeBrandIcon({
    icon,
    className,
}: BrandIconProps & { icon: typeof faDiscord }) {
    const [width, height, , , pathData] = icon.icon;
    const paths = Array.isArray(pathData) ? pathData : [pathData];

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            className={className}
            aria-hidden='true'
            focusable='false'
            role='img'
        >
            {paths.map((path) => (
                <path key={path} fill='currentColor' d={path} />
            ))}
        </svg>
    );
}

export function DiscordIcon({ className }: BrandIconProps) {
    return <FontAwesomeBrandIcon icon={faDiscord} className={className} />;
}

export function BeginnerMarkIcon({ className }: BrandIconProps) {
    return (
        <svg
            viewBox='0 0 64 64'
            className={className}
            aria-hidden='true'
            focusable='false'
            role='img'
            fill='none'
        >
            <path
                d='M8 7c10 1 18 6 24 14v38C19 53 8 43 8 34V7Z'
                fill='#63b84f'
            />
            <path
                d='M56 7c-10 1-18 6-24 14v38c13-6 24-16 24-25V7Z'
                fill='#f4d84a'
            />
            <path
                d='M8 7c10 1 18 6 24 14C38 13 46 8 56 7v27c0 9-11 19-24 25C19 53 8 43 8 34V7Z'
                stroke='currentColor'
                strokeWidth='3.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M32 21v38'
                stroke='currentColor'
                strokeWidth='3.5'
                strokeLinecap='round'
            />
            <path
                d='M14 15h6v6h-6zM44 15h6v6h-6z'
                fill='white'
                opacity='.28'
            />
        </svg>
    );
}

export function WolfIcon({ className }: BrandIconProps) {
    return (
        <svg
            viewBox='0 0 64 64'
            className={className}
            aria-hidden='true'
            focusable='false'
            role='img'
            fill='none'
        >
            <path
                d='m11 11 13 7c5-2 11-2 16 0l13-7-2 18 3 4-5 3c-1 9-7 16-17 22-10-6-16-13-17-22l-5-3 3-4-2-18Z'
                fill='currentColor'
                opacity='.18'
            />
            <path
                d='m11 11 13 7c5-2 11-2 16 0l13-7-2 18 3 4-5 3c-1 9-7 16-17 22-10-6-16-13-17-22l-5-3 3-4-2-18Z'
                stroke='currentColor'
                strokeWidth='3.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='m15 17 9 5-7 7-2-12Zm34 0-9 5 7 7 2-12Z'
                fill='currentColor'
                opacity='.42'
            />
            <path
                d='M20 31c3-2 6-2 9 0M35 31c3-2 6-2 9 0'
                stroke='currentColor'
                strokeWidth='2.5'
                strokeLinecap='round'
            />
            <ellipse cx='25' cy='35' rx='2.6' ry='3.2' fill='currentColor' />
            <ellipse cx='39' cy='35' rx='2.6' ry='3.2' fill='currentColor' />
            <circle cx='25.8' cy='34' r='.8' fill='white' opacity='.9' />
            <circle cx='39.8' cy='34' r='.8' fill='white' opacity='.9' />
            <path
                d='M23 44c2-4 5-6 9-6s7 2 9 6l-3 8-6 4-6-4-3-8Z'
                fill='white'
                opacity='.48'
            />
            <path
                d='m28 44 4-2 4 2-4 4-4-4Z'
                fill='currentColor'
                stroke='currentColor'
                strokeLinejoin='round'
            />
            <path
                d='M32 48v4M20 43l-5 3 5 1M44 43l5 3-5 1'
                stroke='currentColor'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
