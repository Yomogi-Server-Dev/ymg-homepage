'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type React from 'react';
import { useState } from 'react';

interface DonationFormData {
    userGameTag: string;
    giftCardCode: string;
    message: string;
}

export default function DonationForm() {
    const [formData, setFormData] = useState<DonationFormData>({
        userGameTag: '',
        giftCardCode: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<DonationFormData>>({});

    const validateForm = (): boolean => {
        const newErrors: Partial<DonationFormData> = {};

        if (!formData.userGameTag.trim()) {
            newErrors.userGameTag = 'ユーザーゲームタグを入力してください';
        }

        if (!formData.giftCardCode.trim()) {
            newErrors.giftCardCode =
                'Amazonギフト券のコード番号を入力してください';
        } else if (formData.giftCardCode.length < 10) {
            newErrors.giftCardCode = 'ギフト券コードが短すぎます';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'メッセージを入力してください';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/donation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('寄付ありがとうございます！Discordに通知されました。');
                setFormData({
                    userGameTag: '',
                    giftCardCode: '',
                    message: '',
                });
                setErrors({});
            } else {
                const error = await response.text();
                alert(`エラーが発生しました: ${error}`);
            }
        } catch (error) {
            alert('送信中にエラーが発生しました。しばらく後にお試しください。');
        }

        setIsSubmitting(false);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name as keyof DonationFormData]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    return (
        <Card className='w-full max-w-2xl mx-auto'>
            <CardHeader>
                <CardTitle className='text-2xl font-bold text-center'>
                    寄付フォーム
                </CardTitle>
                <CardDescription className='text-center'>
                    サーバー運営への寄付をお受けしています。Amazonギフト券のコードを入力してください。
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='space-y-2'>
                        <label
                            htmlFor='userGameTag'
                            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                            マインクラフトのゲームタグ
                        </label>
                        <Input
                            id='userGameTag'
                            name='userGameTag'
                            type='text'
                            placeholder='例: aida0710'
                            value={formData.userGameTag}
                            onChange={handleChange}
                            className={
                                errors.userGameTag ? 'border-red-500' : ''
                            }
                        />
                        {errors.userGameTag && (
                            <p className='text-sm text-red-500'>
                                {errors.userGameTag}
                            </p>
                        )}
                    </div>

                    <div className='space-y-2'>
                        <label
                            htmlFor='giftCardCode'
                            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                            Amazonギフト券コード番号
                        </label>
                        <Input
                            id='giftCardCode'
                            name='giftCardCode'
                            type='text'
                            placeholder='例: ABCD-EFGH12-IJKL'
                            value={formData.giftCardCode}
                            onChange={handleChange}
                            className={
                                errors.giftCardCode ? 'border-red-500' : ''
                            }
                        />
                        {errors.giftCardCode && (
                            <p className='text-sm text-red-500'>
                                {errors.giftCardCode}
                            </p>
                        )}
                    </div>

                    <div className='space-y-2'>
                        <label
                            htmlFor='message'
                            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                            メッセージ(何かあれば)
                        </label>
                        <Textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            className={`min-h-[100px] ${
                                errors.message ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.message && (
                            <p className='text-sm text-red-500'>
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <Button
                        type='submit'
                        className='w-full'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? '送信中...' : '寄付する'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
