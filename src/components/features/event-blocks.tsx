'use client';

import { events } from '@/data/events';
import { ContentBlocks } from './content-blocks';

export function EventBlocks() {
    return (
        <ContentBlocks
            items={events}
            gridCols='grid sm:grid-cols-2 md:grid-cols-3 gap-6'
        />
    );
}
