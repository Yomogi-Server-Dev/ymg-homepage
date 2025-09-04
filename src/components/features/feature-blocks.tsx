'use client';

import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { features } from '@/data/features';
import type { Feature } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

export function FeatureBlocks() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card
              key={feature.id}
              className='p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-xl border-2 hover:border-primary'
              onClick={() => setSelectedFeature(feature)}
            >
              <div className='flex flex-col items-center text-center'>
                <div className='p-4 rounded-full bg-primary/10 mb-4'>
                  <Icon className='w-8 h-8 text-primary' />
                </div>
                <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                <p className='text-gray-600 text-sm'>{feature.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <Dialog
        open={!!selectedFeature}
        onOpenChange={() => setSelectedFeature(null)}
      >
        <DialogContent className='max-w-4xl p-0' forceMount>
          {selectedFeature && (
            <>
              <DialogHeader className='px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <selectedFeature.icon className='w-6 h-6 text-primary' />
                  </div>
                  <DialogTitle className='text-2xl'>
                    {selectedFeature.detailTitle}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <AspectRatio ratio={16 / 9} className='bg-muted'>
                <Image
                  src={selectedFeature.imageUrl}
                  alt={selectedFeature.detailTitle}
                  fill
                  className='object-cover'
                />
              </AspectRatio>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
