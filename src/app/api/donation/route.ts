import { NextResponse } from 'next/server';

interface DonationData {
    userGameTag: string;
    giftCardCode: string;
    message: string;
}

async function sendDiscordWebhook(data: DonationData) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not set');
        return;
    }

    const embed = {
        title: '新しい寄付が届きました！',
        color: 0x00ff00,
        fields: [
            {
                name: 'ユーザーゲームタグ',
                value: data.userGameTag,
                inline: true,
            },
            {
                name: 'Amazonギフト券コード',
                value: `||${data.giftCardCode}||`,
                inline: true,
            },
            {
                name: 'メッセージ',
                value: data.message,
                inline: false,
            },
        ],
        timestamp: new Date().toISOString(),
        footer: {
            text: 'YMG Server Donation System',
        },
    };

    const payload = {
        content: '新しい寄付が届きました！',
        embeds: [embed],
    };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error(
                'Discord webhook failed:',
                response.status,
                response.statusText,
            );
        }
    } catch (error) {
        console.error('Error sending Discord webhook:', error);
    }
}

export async function POST(request: Request) {
    try {
        const body: DonationData = await request.json();

        if (!body.userGameTag || !body.giftCardCode || !body.message) {
            return NextResponse.json(
                { error: '必須項目が入力されていません' },
                { status: 400 },
            );
        }

        if (body.userGameTag.trim().length === 0) {
            return NextResponse.json(
                { error: 'ユーザーゲームタグを入力してください' },
                { status: 400 },
            );
        }

        if (body.giftCardCode.trim().length < 10) {
            return NextResponse.json(
                { error: 'ギフト券コードが無効です' },
                { status: 400 },
            );
        }

        if (body.message.trim().length === 0) {
            return NextResponse.json(
                { error: 'メッセージを入力してください' },
                { status: 400 },
            );
        }

        await sendDiscordWebhook({
            userGameTag: body.userGameTag.trim(),
            giftCardCode: body.giftCardCode.trim(),
            message: body.message.trim(),
        });

        return NextResponse.json(
            { message: '寄付を受け付けました。ありがとうございます！' },
            { status: 200 },
        );
    } catch (error) {
        console.error('Donation API error:', error);
        return NextResponse.json(
            { error: 'サーバーエラーが発生しました' },
            { status: 500 },
        );
    }
}
