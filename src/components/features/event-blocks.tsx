'use client';

import { ContentBlocks } from './content-blocks';
import { events } from '@/data/events';

export function EventBlocks() {
  return (
    <ContentBlocks 
      items={events} 
      gridCols='grid sm:grid-cols-2 md:grid-cols-3 gap-6' 
    />
  );
}
