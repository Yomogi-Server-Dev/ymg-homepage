'use client';

import { ContentBlocks } from './content-blocks';
import { features } from '@/data/features';

export function FeatureBlocks() {
  return (
    <ContentBlocks 
      items={features} 
      gridCols='grid sm:grid-cols-2 md:grid-cols-3 gap-6' 
    />
  );
}
