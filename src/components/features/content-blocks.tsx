'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { ContentItem } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface ContentBlocksProps {
  items: ContentItem[];
  gridCols?: string;
}

export function ContentBlocks({
  items,
  gridCols = 'grid sm:grid-cols-2 md:grid-cols-3 gap-6',
}: ContentBlocksProps) {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  return (
    <>
      <div className={gridCols}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.id}
              className='p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-xl border-2 hover:border-primary relative overflow-hidden'
              onClick={() => setSelectedItem(item)}
            >
              {item.status === 'upcoming' && (
                <div className='absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs rounded-bl-lg'>
                  Coming Soon
                </div>
              )}
              <div className='flex flex-col items-center text-center'>
                <div className='p-4 rounded-full bg-primary/10 mb-4'>
                  <Icon className='w-8 h-8 text-primary' />
                </div>
                <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                {item.schedule && (
                  <Badge variant='outline' className='mb-2'>
                    {item.schedule}
                  </Badge>
                )}
                <div className='text-gray-600 text-sm space-y-1'>
                  {item.description.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className='max-w-4xl p-0' forceMount>
          {selectedItem && (
            <>
              <DialogHeader className='px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <selectedItem.icon className='w-6 h-6 text-primary' />
                  </div>
                  <DialogTitle className='text-2xl flex items-center gap-2'>
                    {selectedItem.detailTitle}
                    {selectedItem.status === 'upcoming' && (
                      <Badge className='bg-primary text-white'>
                        Coming Soon
                      </Badge>
                    )}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <AspectRatio ratio={16 / 9} className='bg-muted'>
                <Image
                  src={selectedItem.imageUrl}
                  alt={selectedItem.detailTitle}
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
