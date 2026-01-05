import { CharacterInfo } from '../types';

export const MOCK_CHARACTER: CharacterInfo = {
    name: "Gemini",
    server: "카마인",
    class: "블레이드",
    title: "운명의 부름",
    itemLevel: 1700.0,
    combatPower: 520412.45,
    battleLevel: 60,
    expeditionLevel: 300,
    guildName: "슈퍼스티어링",
    innerStats: { specialization: 1850, crit: 650, swiftness: 50 },
    arkPassivePoints: { evolution: 90, enlightenment: 72, leap: 60 },
    engravings: [
        { name: "잔재된 기운", level: 3 },
        { name: "원한", level: 3 },
        { name: "예리한 둔기", level: 3 },
        { name: "돌격대장", level: 3 },
        { name: "기습의 대가", level: 3 },
        { name: "아드레날린", level: 1 }
    ],
    gear: [
        { slot: "무기", honingLevel: 25, quality: 100, isT4: true, trans: "상급재련 20" },
        { slot: "투구", honingLevel: 20, quality: 95, isT4: true, trans: "상급재련 20" },
        { slot: "상의", honingLevel: 20, quality: 92, isT4: true, trans: "상급재련 20" },
        { slot: "하의", honingLevel: 20, quality: 94, isT4: true, trans: "상급재련 20" },
        { slot: "장갑", honingLevel: 20, quality: 98, isT4: true, trans: "상급재련 20" },
        { slot: "어깨", honingLevel: 20, quality: 90, isT4: true, trans: "상급재련 20" }
    ],
    accessories: [
        { slot: "목걸이", quality: 98, stats: "치특" },
        { slot: "귀걸이1", quality: 92, stats: "특화" },
        { slot: "귀걸이2", quality: 95, stats: "특화" },
        { slot: "반지1", quality: 90, stats: "특화" },
        { slot: "반지2", quality: 94, stats: "특화" }
    ],
    gems: Array(11).fill(null).map((_, i) => ({ level: 10, type: i < 5 ? 'Damage' : 'Cooldown', skillName: '스킬' })),
    skills: [
        { name: "버스트", level: 12, tripods: ["급소 타격", "피재", "버스트"], activeTripodIndices: [0, 1, 2], damageContribution: 45.5 },
        { name: "블리츠 러시", level: 12, tripods: ["급소 타격", "차지 강화", "쉐도우 러시"], activeTripodIndices: [0, 1, 2], damageContribution: 15.2 }
    ],
    collections: [
        { name: "섬의 마음", percent: 85 },
        { name: "오르페우스의 별", percent: 90 },
        { name: "거인의 심장", percent: 100 },
        { name: "위대한 미술품", percent: 75 }
    ],
    ranking: { overall: 124 }
};