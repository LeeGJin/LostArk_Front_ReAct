export interface GearInfo {
    slot: string;
    honingLevel: number;
    quality: number;
    isT4: boolean;
    trans: string;
}

export interface GemInfo {
    level: number;
    type: 'Damage' | 'Cooldown';
    skillName: string;
}

export interface SkillInfo {
    name: string;
    level: number;
    tripods: string[];
    activeTripodIndices: number[];
    rune?: string;
    damageContribution: number;
}

export interface CharacterInfo {
    name: string;
    server: string;
    class: string;
    title: string;
    itemLevel: number;
    combatPower: number;
    battleLevel: number;
    expeditionLevel: number;
    guildName?: string;
    innerStats: { specialization: number; crit: number; swiftness: number; };
    arkPassivePoints: { evolution: number; enlightenment: number; leap: number; };
    engravings: { name: string; level: number }[];
    gear: GearInfo[];
    accessories: { slot: string; quality: number; stats: string }[];
    gems: GemInfo[];
    skills: SkillInfo[];
    collections: { name: string; percent: number }[];
    ranking?: { overall: number };
}