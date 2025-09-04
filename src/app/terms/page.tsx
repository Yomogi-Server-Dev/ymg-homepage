import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">利用規約</h1>
          <p className="text-gray-600 text-center mb-12">
            最終更新日: {new Date().toLocaleDateString("ja-JP")}
          </p>

          <Card className="p-8 mb-8">
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  1. はじめに
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Yomogi
                  Server（以下「本サーバー」）をご利用いただき、ありがとうございます。
                  本利用規約は、本サーバーを利用するすべてのプレイヤー（以下「ユーザー」）に適用されます。
                  サーバーに参加することで、これらの規約に同意したものとみなされます。
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  2. 基本ルール
                </h2>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>
                    他のプレイヤーを尊重し、楽しいコミュニティを維持してください
                  </li>
                  <li>チート、ハッキング、不正なModの使用は禁止されています</li>
                  <li>
                    他のプレイヤーの建築物を無断で破壊・改変しないでください
                  </li>
                  <li>スパム、荒らし行為、過度な宣伝は禁止です</li>
                  <li>個人情報の公開や要求は行わないでください</li>
                  <li>
                    サーバーのパフォーマンスに悪影響を与える行為は避けてください
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  3. チャット・コミュニケーション
                </h2>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>暴言、差別的発言、ハラスメントは一切禁止です</li>
                  <li>不適切な内容やNSFWコンテンツの投稿は禁止です</li>
                  <li>他のプレイヤーのプライバシーを尊重してください</li>
                  <li>議論は建設的に、相手の意見も尊重しましょう</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  4. 建築・資源
                </h2>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>
                    他のプレイヤーのエリアから適切な距離を保って建築してください
                  </li>
                  <li>共有資源は適度に利用し、独占しないようにしてください</li>
                  <li>
                    大規模な自動化装置を作る場合は、事前に運営に相談してください
                  </li>
                  <li>景観を考慮した建築を心がけてください</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  5. イベント参加
                </h2>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>イベントのルールを守って参加してください</li>
                  <li>イベント中の不正行為は即座に失格となります</li>
                  <li>イベント報酬の譲渡や売買は禁止です</li>
                  <li>運営の判断を尊重してください</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  6. 処罰について
                </h2>
                <p className="text-gray-700 mb-4">
                  規約違反が確認された場合、違反の程度に応じて以下の処罰が科される場合があります：
                </p>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>口頭注意・警告</li>
                  <li>一時的なミュート（チャット禁止）</li>
                  <li>一時的なBAN（アクセス禁止）</li>
                  <li>永久BAN</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  処罰の判断は運営チームが行い、その決定は最終的なものとします。
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  7. 免責事項
                </h2>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>
                    サーバーのデータ損失やロールバックに対して、運営は責任を負いません
                  </li>
                  <li>
                    サーバーの一時的な停止やメンテナンスによる影響について責任を負いません
                  </li>
                  <li>ユーザー間のトラブルは当事者間で解決してください</li>
                  <li>
                    Minecraft本体のバグや仕様変更による影響は保証できません
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  8. プライバシー
                </h2>
                <p className="text-gray-700">
                  サーバー運営のため、以下の情報を記録する場合があります：
                </p>
                <ul className="space-y-3 list-disc list-inside text-gray-700 mt-4">
                  <li>MinecraftのユーザーID</li>
                  <li>IPアドレス（セキュリティ目的のみ）</li>
                  <li>プレイ時間とアクティビティログ</li>
                  <li>チャットログ（規約違反の確認のため）</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  これらの情報は適切に管理され、第三者に提供されることはありません。
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  9. 規約の変更
                </h2>
                <p className="text-gray-700">
                  本規約は必要に応じて更新される場合があります。
                  重要な変更がある場合は、Discordやサーバー内で通知します。
                  変更後もサーバーを利用し続けることで、新しい規約に同意したものとみなされます。
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  10. お問い合わせ
                </h2>
                <p className="text-gray-700">
                  規約に関するご質問やご不明な点がある場合は、以下の方法でお問い合わせください：
                </p>
                <ul className="space-y-3 list-disc list-inside text-gray-700 mt-4">
                  <li>Discord: サポートチャンネル</li>
                  <li>ゲーム内: 運営スタッフにDM</li>
                  <li>メール: support@ymg24.org</li>
                </ul>
              </div>
            </section>
          </Card>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <p className="text-center text-gray-700">
              楽しく、公平で、フレンドリーなコミュニティを維持するため、
              <br />
              皆様のご協力をお願いいたします。
            </p>
            <p className="text-center text-primary font-semibold mt-4">
              一緒に素晴らしいサーバーを作りましょう！
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
