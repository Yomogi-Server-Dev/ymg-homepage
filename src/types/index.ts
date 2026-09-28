export type AdminRole = 'Admin' | 'Builder';

export interface Admin {
    id: number;
    name: string;
    gamerTag: string;
    role: AdminRole;
    avatar: string;
    description: string;
}

export interface Feature {
    id: number;
    title: string;
    description: string;
    details: string;
    highlights: readonly string[];
    imageUrl: string;
    imageAlt: string;
    accentColor: string;
    galleryImages?: readonly {
        imageUrl: string;
        imageAlt: string;
        caption?: string;
    }[];
}

export interface ServerInfo {
    name: string;
    address: string;
    port: string;
    discordInvite: string;
}
