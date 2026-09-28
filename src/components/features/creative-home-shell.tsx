import type { ReactNode } from 'react';

interface CreativeHomeShellProps {
    children: ReactNode;
}

export function CreativeHomeShell({ children }: CreativeHomeShellProps) {
    return (
        <main className='kid-home overflow-hidden bg-[#fffaf2] text-[#19231a]'>
            {children}
        </main>
    );
}
