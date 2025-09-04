'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className='bg-gray-700 text-white py-8 mt-16'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div>
            <h3 className='font-bold text-lg mb-4 text-primary'>
              Yomogi Server
            </h3>
            <p className='text-gray-400'>
              MCBE サバイバルサーバー
              <br />
              ymg24.org:19132
            </p>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4'>リンク</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <Link
                  href='https://docs.ymg24.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  サーバーガイド
                </Link>
              </li>
              <li>
                <Link
                  href='https://docs.ymg24.org/docs/category/%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href='https://docs.ymg24.org/blog'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  ブログ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4'>コミュニティ</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a
                  href='https://discord.gg/qkjfv5YGvY'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href='https://www.youtube.com/@NYB-OC/videos'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-800 text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} Yomogi Server. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
