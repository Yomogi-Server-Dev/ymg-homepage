'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { admins, roleColors } from '@/data/admins';
import { User } from 'lucide-react';
import Image from 'next/image';

export function AdminList() {
    return (
        <div className='grid sm:grid-cols-2 gap-6'>
            {admins.map((admin) => (
                <Card
                    key={admin.id}
                    className='p-4 hover:shadow-lg transition-shadow'
                >
                    <div className='flex items-center gap-3 mb-2'>
                        <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden'>
                            {admin.avatar && admin.avatar !== '/img.png' ? (
                                <Image
                                    src={admin.avatar}
                                    alt={admin.name}
                                    width={32}
                                    height={32}
                                    className='w-full h-full object-cover'
                                />
                            ) : (
                                <User className='w-5 h-5 text-gray-500' />
                            )}
                        </div>
                        <div className='flex items-center justify-between min-w-0 w-full'>
                            <h3 className='font-bold text-base truncate mr-auto'>
                                {admin.name}
                            </h3>
                            <Badge
                                className={`${roleColors[admin.role]} text-white text-xs flex-shrink-0 ml-auto`}
                            >
                                {admin.role}
                            </Badge>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <p className='text-sm text-primary font-medium'>
                            @{admin.gamerTag}
                        </p>
                    </div>
                    <p className='text-sm text-gray-600 leading-relaxed'>
                        {admin.description}
                    </p>
                </Card>
            ))}
        </div>
    );
}
