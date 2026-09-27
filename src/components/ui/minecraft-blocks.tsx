interface MinecraftBlocksProps {
    biome?: 'overworld' | 'cave' | 'ocean' | 'night';
    className?: string;
}

interface DecorativeMinecraftBlockProps {
    type: 'grass' | 'dirt' | 'stone' | 'diamond' | 'emerald' | 'redstone';
    className?: string;
}

const blockSets = {
    overworld: [
        { id: 'overworld-ground-left', type: 'grass' },
        { id: 'overworld-top-center', type: 'stone' },
        { id: 'overworld-ground-center', type: 'grass' },
        { id: 'overworld-ground-right', type: 'dirt' },
        { id: 'overworld-top-right', type: 'diamond' },
    ],
    cave: [
        { id: 'cave-ground-left', type: 'stone' },
        { id: 'cave-top-center', type: 'diamond' },
        { id: 'cave-ground-center', type: 'stone' },
        { id: 'cave-ground-right', type: 'stone' },
        { id: 'cave-top-right', type: 'dirt' },
    ],
    ocean: [
        { id: 'ocean-ground-left', type: 'diamond' },
        { id: 'ocean-top-center', type: 'dirt' },
        { id: 'ocean-ground-center', type: 'grass' },
        { id: 'ocean-ground-right', type: 'stone' },
        { id: 'ocean-top-right', type: 'grass' },
    ],
    night: [
        { id: 'night-ground-left', type: 'stone' },
        { id: 'night-top-center', type: 'redstone' },
        { id: 'night-ground-center', type: 'stone' },
        { id: 'night-ground-right', type: 'grass' },
        { id: 'night-top-right', type: 'dirt' },
    ],
} as const;

export function MinecraftBlocks({
    biome = 'overworld',
    className = '',
}: MinecraftBlocksProps) {
    return (
        <div
            aria-hidden='true'
            className={`mc-block-cluster mc-block-cluster-${biome} ${className}`}
        >
            {blockSets[biome].map((block) => (
                <span
                    key={block.id}
                    className={`mc-voxel mc-voxel-${block.type}`}
                />
            ))}
        </div>
    );
}

export function DecorativeMinecraftBlock({
    type,
    className = '',
}: DecorativeMinecraftBlockProps) {
    return (
        <span
            aria-hidden='true'
            className={`mc-decor-block mc-decor-block-${type} ${className}`}
        />
    );
}
