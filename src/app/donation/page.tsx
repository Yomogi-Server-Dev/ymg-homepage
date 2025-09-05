import DonationForm from '@/components/features/donation-form';

export default function DonationPage() {
    return (
        <div className='min-h-screen pt-24 px-4'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                        サーバー寄付
                    </h1>
                </div>

                <DonationForm />

                <div className='mt-12 bg-white rounded-xl shadow-lg p-6'>
                    <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                        寄付について
                    </h2>
                    <div className='space-y-4 text-gray-700'>
                        <div>
                            <h3 className='font-semibold text-lg mb-2'>
                                寄付の使用用途
                            </h3>
                            <ul className='list-disc list-inside space-y-1 ml-4'>
                                <li>サーバーの維持・運営費用</li>
                                <li>サーバーインフラの改善</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-semibold text-lg mb-2'>
                                注意事項
                            </h3>
                            <ul className='list-disc list-inside space-y-1 ml-4'>
                                <li>寄付は任意であり、強制ではありません</li>
                                <li>寄付によって特別な権限や優遇は提供されません</li>
                                <li>ギフト券コードは正確に入力してください</li>
                                <li>寄付後のキャンセルはできませんのでご注意ください</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
