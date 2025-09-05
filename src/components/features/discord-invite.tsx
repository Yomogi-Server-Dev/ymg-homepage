import { Button } from '@/components/ui/button';
import { APP_CONFIG } from '@/config';
import { Bell, MessageCircle, Users } from 'lucide-react';
import Link from 'next/link';

export function DiscordInvite() {
    return (
        <section className='mx-4 px-8 py-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg text-white relative overflow-hidden'>
            <div className='absolute inset-0 bg-black/10'></div>
            <div className='relative z-10'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4 animate-fade-in'>
                        コミュニティに参加しよう！
                    </h2>
                    <p className='text-xl text-white/90 max-w-2xl mx-auto animate-fade-in'>
                        {APP_CONFIG.name}
                        のDiscordサーバーで、他のプレイヤーと交流しませんか？
                    </p>
                </div>

                <div className='grid md:grid-cols-3 gap-6 mb-12'>
                    <div className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20'>
                        <Bell className='w-12 h-12 mx-auto mb-4 text-yellow-300' />
                        <h3 className='text-xl font-semibold mb-2'>
                            最新情報をGet
                        </h3>
                        <p className='text-white/80'>
                            イベント情報やサーバーの最新情報をいち早くキャッチ！
                        </p>
                    </div>

                    <div className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20'>
                        <Users className='w-12 h-12 mx-auto mb-4 text-green-300' />
                        <h3 className='text-xl font-semibold mb-2'>
                            プレイヤー交流
                        </h3>
                        <p className='text-white/80'>
                            建築の相談や冒険の仲間探しなど、気軽にチャットしよう！
                        </p>
                    </div>

                    <div className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20'>
                        <MessageCircle className='w-12 h-12 mx-auto mb-4 text-blue-300' />
                        <h3 className='text-xl font-semibold mb-2'>
                            質問＆サポート
                        </h3>
                        <p className='text-white/80'>
                            わからないことがあれば運営や先輩プレイヤーがサポート！
                        </p>
                    </div>
                </div>

                <div className='text-center'>
                    <Link href='/discord'>
                        <Button
                            size='lg'
                            className='bg-white text-indigo-600 hover:bg-white/90 hover:text-indigo-700 font-bold px-12 py-4 text-lg shadow-lg transform transition-all duration-300 hover:scale-105'
                        >
                            <MessageCircle className='w-6 h-6 mr-3' />
                            Discordに参加する
                        </Button>
                    </Link>
                    <p className='mt-4 text-white/70 text-sm'>
                        クリックすると自動的にDiscordに移動します
                    </p>
                </div>
            </div>

            {/* 装飾用の背景要素 */}
            <div className='absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl'></div>
            <div className='absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl'></div>
            <div className='absolute top-1/2 right-10 w-16 h-16 bg-white/10 rounded-full blur-lg'></div>
        </section>
    );
}
