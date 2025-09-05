'use client';

import {Button} from '@/components/ui/button';
import {APP_CONFIG} from '@/config';
import {serverInfo} from '@/data/server';
import {Copy, ExternalLink, Smartphone} from 'lucide-react';
import {useEffect, useState} from 'react';

export default function JoinPage() {
    const [showFallback, setShowFallback] = useState(false);
    const [copied, setCopied] = useState(false);


    const minecraftUrl = `minecraft://?addExternalServer=${encodeURIComponent(serverInfo.name)}|${serverInfo.address}:${serverInfo.port}`;

    useEffect(() => {
        window.location.href = minecraftUrl;
        const timer = setTimeout(() => {
            setShowFallback(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(`${serverInfo.address}:${serverInfo.port}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="mb-6">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 text-primary"/>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        {APP_CONFIG.name}に参加
                    </h1>
                    <p className="text-gray-600">
                        Minecraftを起動してサーバーに参加しています...
                    </p>
                </div>

                <div className="mb-6">
                    <Button
                        onClick={() => window.location.href = minecraftUrl}
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold"
                    >
                        <ExternalLink className="w-5 h-5 mr-2"/>
                        Minecraftで開く
                    </Button>
                </div>

                <div className="border-t pt-6 mt-6">
                    <div className={`transition-all duration-500 ${showFallback ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-sm text-gray-600 mb-4">
                            Minecraftが起動しない場合は、<br/>
                            手動でサーバーを追加してください。
                        </p>

                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">サーバー名</span>
                                <span className="text-sm text-gray-900">{serverInfo.name}</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">サーバーアドレス</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-900 font-mono">
                                        {serverInfo.address}:{serverInfo.port}
                                    </span>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={copyToClipboard}
                                        className="h-6 px-2"
                                    >
                                        <Copy className="w-3 h-3"/>
                                    </Button>
                                </div>
                            </div>
                            {copied && (
                                <p className="text-xs text-primary mt-2">アドレスをコピーしました！</p>
                            )}
                        </div>

                        <div className="text-left text-sm text-gray-600 space-y-2">
                            <p className="font-medium">手動追加の手順：</p>
                            <ol className="list-decimal list-inside space-y-1 pl-2">
                                <li>Minecraftを起動</li>
                                <li>「遊ぶ」→「サーバー」を選択</li>
                                <li>「サーバーを追加」をタップ</li>
                                <li>上記の情報を入力</li>
                                <li>「保存」してサーバーに参加</li>
                            </ol>
                            <div className="bg-primary-50 text-primary-800 rounded p-2 mt-2 text-sm">
                                解決しない方やスイッチの方は
                                <a
                                    href="https://docs.ymg24.org/docs/wolf/faq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-primary-600"
                                >
                                    こちらのFAQ
                                </a>
                                をご参照ください。
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                    <a
                        href="/"
                        className="text-sm inline-block px-4 py-2 border rounded hover:bg-gray-100 transition-colors"
                    >
                        戻る
                    </a>
                </div>
            </div>
        </div>
    );
}