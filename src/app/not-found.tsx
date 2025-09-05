import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='max-w-md my-35 mx-auto text-center'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                ページが見つかりません
            </h2>
            <p className='text-gray-600 mb-8'>
                お探しのページは存在しないか、移動された可能性があります。
            </p>
            <Link
                href='/'
                className='inline-block bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors'
            >
                ホームに戻る
            </Link>
        </div>
    );
}
