import { CreativeHomeShell } from '@/components/features/creative-home-shell';
import { HomeCommunitySection } from '@/components/features/home-community-section';
import { HomeFeaturesSection } from '@/components/features/home-features-section';
import { HomeHero } from '@/components/features/home-hero';
import { HomeNewsSection } from '@/components/features/home-news-section';
import { HomeTeamSection } from '@/components/features/home-team-section';
import { HomeYoutubeSection } from '@/components/features/home-youtube-section';
import { PortalBoard } from '@/components/features/portal-board';
import { ServerGallery } from '@/components/features/server-gallery';
import { WerewolfTeaserSection } from '@/components/features/werewolf-teaser-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: { canonical: '/' },
    description:
        '建築、経済、会社、イベントを楽しめるMinecraft Bedrock Edition生活サーバー「よもぎサーバー」の公式ポータル。',
};

export default function HomePage() {
    return (
        <CreativeHomeShell>
            <HomeHero />
            <PortalBoard />
            <HomeFeaturesSection />
            <ServerGallery />
            <HomeYoutubeSection />
            <WerewolfTeaserSection />
            <HomeNewsSection />
            <HomeCommunitySection />
            <HomeTeamSection />
        </CreativeHomeShell>
    );
}
