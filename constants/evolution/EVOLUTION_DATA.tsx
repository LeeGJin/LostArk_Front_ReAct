// ✅ 공통: 1~30 레벨, 50씩 증가 (50 ~ 1500)
const STAT_30_LV_50_STEP: Record<number, number> = {
    1: 50, 2: 100, 3: 150, 4: 200, 5: 250, 6: 300, 7: 350, 8: 400, 9: 450, 10: 500,
    11: 550, 12: 600, 13: 650, 14: 700, 15: 750, 16: 800, 17: 850, 18: 900, 19: 950, 20: 1000,
    21: 1050, 22: 1100, 23: 1150, 24: 1200, 25: 1250, 26: 1300, 27: 1350, 28: 1400, 29: 1450, 30: 1500,
};

export const EVOLUTION_DATA = {
    // --------------------
    // 스탯 (30레벨)
    // --------------------
    "EVOLUTION||치명": {
        key: "EVOLUTION||치명",
        name: "치명",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            { base: "치명이 {x}증가합니다.", values: { x: STAT_30_LV_50_STEP } },
        ],
    },

    "EVOLUTION||특화": {
        key: "EVOLUTION||특화",
        name: "특화",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            { base: "특화가 {x}증가합니다.", values: { x: STAT_30_LV_50_STEP } },
        ],
    },

    "EVOLUTION||제압": {
        key: "EVOLUTION||제압",
        name: "제압",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            { base: "제압이 {x}증가합니다.", values: { x: STAT_30_LV_50_STEP } },
        ],
    },

    "EVOLUTION||신속": {
        key: "EVOLUTION||신속",
        name: "신속",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            { base: "신속이 {x}증가합니다.", values: { x: STAT_30_LV_50_STEP } },
        ],
    },

    "EVOLUTION||인내": {
        key: "EVOLUTION||인내",
        name: "인내",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            { base: "인내가 {x}증가합니다.", values: { x: STAT_30_LV_50_STEP } },
        ],
    },

    "EVOLUTION||숙련": {
        key: "EVOLUTION||숙련",
        name: "숙련",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            { base: "숙련이 {x}증가합니다.", values: { x: STAT_30_LV_50_STEP } },
        ],
    },

    // --------------------
    // 티어1 (해방 조건: 티어1 진화 포인트 40)
    // --------------------
    "EVOLUTION||끝없는 마나": {
        key: "EVOLUTION||끝없는 마나",
        name: "끝없는 마나",
        category: "EVOLUTION",
        max: 2,
        tier: 1,
        lines: [
            {
                base: "마나 사용 스킬의 재사용 대기시간이 {x}%감소하고, 마나 소모량이 {y}%감소합니다.",
                values: {
                    x: { 1: 7, 2: 14 },
                    y: { 1: 10, 2: 20 },
                },
            },
        ],
    },

    "EVOLUTION||금단의 주문": {
        key: "EVOLUTION||금단의 주문",
        name: "금단의 주문",
        category: "EVOLUTION",
        max: 2,
        tier: 1,
        lines: [
            {
                base: "진화형 피해가 {x}%증가, 마나 스킬의 진화형 피해는 {y}%더 증가하고, 마나 소모량이 {z}%감소합니다.",
                values: {
                    x: { 1: 5, 2: 10 },
                    y: { 1: 5, 2: 10 },
                    z: { 1: 6, 2: 12 },
                },
            },
        ],
    },

    "EVOLUTION||예리한 감각": {
        key: "EVOLUTION||예리한 감각",
        name: "예리한 감각",
        category: "EVOLUTION",
        max: 2,
        tier: 1,
        lines: [
            {
                base: "치명타 적중률이 {x}%증가하고, 진화형 피해가 {y}%증가합니다.",
                values: {
                    x: { 1: 4, 2: 8 },
                    y: { 1: 5, 2: 10 },
                },
            },
        ],
    },

    "EVOLUTION||한계 돌파": {
        key: "EVOLUTION||한계 돌파",
        name: "한계 돌파",
        category: "EVOLUTION",
        max: 3,
        tier: 1,
        lines: [
            {
                base: "진화형 피해가 {x}%증가합니다.",
                values: { x: { 1: 10, 2: 20, 3: 30 } },
            },
        ],
    },

    "EVOLUTION||최적화 훈련": {
        key: "EVOLUTION||최적화 훈련",
        name: "최적화 훈련",
        category: "EVOLUTION",
        max: 2,
        tier: 1,
        lines: [
            {
                base: "각성기, 이동 및 기상기를 제외한 스킬의 재사용 대기시간이 {x}%감소하고, 진화형 피해가 {y}%증가합니다.",
                values: {
                    x: { 1: 4, 2: 8 },
                    y: { 1: 5, 2: 10 },
                },
            },
        ],
    },

    "EVOLUTION||축복의 여신": {
        key: "EVOLUTION||축복의 여신",
        name: "축복의 여신",
        category: "EVOLUTION",
        max: 3,
        tier: 1,
        lines: [
            {
                base:
                    "전투 중 자신 및 주변 파티원에게 '전투 축복' 효과를 적용합니다.(20초 지속, 매 초마다 갱신)\n" +
                    "전투 축복 : 공격 및 이동 속도 {x}%증가",
                values: { x: { 1: 3, 2: 6, 3: 9 } },
            },
        ],
    },

    // --------------------
    // 티어2 (해방 조건: 티어2 진화 포인트 20)
    // --------------------
    "EVOLUTION||무한한 마력": {
        key: "EVOLUTION||무한한 마력",
        name: "무한한 마력",
        category: "EVOLUTION",
        max: 2,
        tier: 2,
        lines: [
            {
                base: "진화형 피해가 {x}%증가하고, 마나 스킬의 재사용 대기시간이 {y}%감소, 마나 소모량이 {z}%감소합니다.",
                values: {
                    x: { 1: 8, 2: 16 },
                    y: { 1: 7, 2: 14 },
                    z: { 1: 8, 2: 16 },
                },
            },
        ],
    },

    "EVOLUTION||혼신의 강타": {
        key: "EVOLUTION||혼신의 강타",
        name: "혼신의 강타",
        category: "EVOLUTION",
        max: 2,
        tier: 2,
        lines: [
            {
                base: "치명타 적중률이 {x}%증가하고, 진화형 피해가 {y}%증가합니다.",
                values: {
                    x: { 1: 12, 2: 24 },
                    y: { 1: 2, 2: 4 },
                },
            },
        ],
    },

    "EVOLUTION||일격": {
        key: "EVOLUTION||일격",
        name: "일격",
        category: "EVOLUTION",
        max: 2,
        tier: 2,
        lines: [
            {
                base: "치명타 적중률이 {x}%증가하고, 방향성 공격 스킬의 치명타 피해가 {y}%증가합니다.",
                values: {
                    x: { 1: 10, 2: 20 },
                    y: { 1: 16, 2: 32 },
                },
            },
        ],
    },

    "EVOLUTION||파괴 전차": {
        key: "EVOLUTION||파괴 전차",
        name: "파괴 전차",
        category: "EVOLUTION",
        max: 2,
        tier: 2,
        lines: [
            {
                base: "진화형 피해가 {x}%증가하고, 공격 속도가 {y}%증가합니다.",
                values: {
                    x: { 1: 12, 2: 24 },
                    y: { 1: 4, 2: 8 },
                },
            },
        ],
    },

    "EVOLUTION||타이밍 지배": {
        key: "EVOLUTION||타이밍 지배",
        name: "타이밍 지배",
        category: "EVOLUTION",
        max: 2,
        tier: 2,
        lines: [
            {
                base: "각성기, 이동 및 기상기를 제외한 스킬의 재사용 대기시간이 {x}%감소하고, 진화형 피해가 {y}%증가합니다.",
                values: {
                    x: { 1: 5, 2: 10 },
                    y: { 1: 8, 2: 16 },
                },
            },
        ],
    },

    "EVOLUTION||정열의 춤사위": {
        key: "EVOLUTION||정열의 춤사위",
        name: "정열의 춤사위",
        category: "EVOLUTION",
        max: 2,
        tier: 2,
        lines: [
            {
                base:
                    "적중 시 아이덴티티 게이지 획득량이 {x}%증가합니다.\n" +
                    "전투 중 자신 및 주변 파티원에게 '정열의 춤' 효과를 적용합니다.(20초 지속, 매 초마다 갱신)\n" +
                    "정열의 춤 : 진화형 피해 {y}%증가",
                values: {
                    x: { 1: 10, 2: 20 },
                    y: { 1: 7, 2: 14 },
                },
            },
        ],
    },

    // --------------------
    // 티어3 (해방 조건: 티어3 진화 포인트 20)
    // --------------------
    "EVOLUTION||회심": {
        key: "EVOLUTION||회심",
        name: "회심",
        category: "EVOLUTION",
        max: 1,
        tier: 3,
        lines: [
            {
                base: "공격이 치명타로 적중 시 적에게 주는 피해가 {x}%증가하며, 받는 피해가 {y}%감소합니다.",
                values: { x: { 1: 12 }, y: { 1: 4 } },
            },
        ],
    },

    "EVOLUTION||달인": {
        key: "EVOLUTION||달인",
        name: "달인",
        category: "EVOLUTION",
        max: 1,
        tier: 3,
        lines: [
            {
                base:
                    "받는 피해가 {x}%감소하며, 이동기 및 기상기를 제외한 스킬 사용 시 10초간 '달인' 효과를 얻습니다.\n" +
                    "달인 : 치명타 적중률 +{a}% / 추가 피해 +{b}%, 최대 5중첩",
                values: { x: { 1: 4 }, a: { 1: 1.4 }, b: { 1: 1.7 } },
            },
        ],
    },

    "EVOLUTION||분쇄": {
        key: "EVOLUTION||분쇄",
        name: "분쇄",
        category: "EVOLUTION",
        max: 1,
        tier: 3,
        lines: [
            {
                base: "진화형 피해가 {x}%증가하며, 받는 피해가 {y}%감소합니다.",
                values: { x: { 1: 20 }, y: { 1: 4 } },
            },
        ],
    },

    "EVOLUTION||선각자": {
        key: "EVOLUTION||선각자",
        name: "선각자",
        category: "EVOLUTION",
        max: 1,
        tier: 3,
        lines: [
            {
                base:
                    "최대 생명력이 {x}%증가합니다.\n" +
                    "이동기 및 기상기를 제외한 스킬 사용 시 10초간 '통찰' 효과를 얻습니다. '통찰' 중첩이 최대에 도달하면 아군 공격력 강화 효과가 추가로 {y}%증가하고, 기상기 및 각성기를 제외한 스킬의 재사용 대기시간이 {z}%감소합니다.\n" +
                    "통찰 : 아군 공격력 강화 효과 +{a}%, 최대 5중첩",
                values: { x: { 1: 6 }, y: { 1: 11 }, z: { 1: 5 }, a: { 1: 2.2 } },
            },
        ],
    },

    "EVOLUTION||진군": {
        key: "EVOLUTION||진군",
        name: "진군",
        category: "EVOLUTION",
        max: 1,
        tier: 3,
        lines: [
            {
                base:
                    "최대 생명력이 {x}%증가합니다.\n" +
                    "아군에게 보호 효과 사용 시 자신의 5m 이내에 '진군 에테르'를 생성합니다. (발동 재사용 대기시간 7초)\n" +
                    "진군 에테르 : 15초간 아군 공격력 강화 효과 +{a}% / 공격속도 +{b}% / 이동속도 +{c}%",
                values: { x: { 1: 6 }, a: { 1: 24 }, b: { 1: 4 }, c: { 1: 4 } },
            },
        ],
    },

    "EVOLUTION||기원": {
        key: "EVOLUTION||기원",
        name: "기원",
        category: "EVOLUTION",
        max: 1,
        tier: 3,
        lines: [
            {
                base: "최대 생명력이 {x}%증가합니다.\n아군 공격력 강화 효과가 {y}%증가하고, 낙인력이 {z}%증가합니다.",
                values: { x: { 1: 6 }, y: { 1: 22 }, z: { 1: 4 } },
            },
        ],
    },

    // --------------------
    // 티어4 (해방 조건: 티어4 진화 포인트 20)
    // --------------------
    "EVOLUTION||뭉툭한 가시": {
        key: "EVOLUTION||뭉툭한 가시",
        name: "뭉툭한 가시",
        category: "EVOLUTION",
        max: 2,
        tier: 4,
        lines: [
            {
                base:
                    "진화형 피해가 {x}%증가합니다. 치명타가 발생할 확률이 최대 80.0%로 제한됩니다. 공격 시, 초과한 모든 치명타가 발생할 확률의 {a}%가 진화형 피해로 전환됩니다. 이 노드에 의한 진화형 피해는 최대 {b}%까지 적용됩니다.",
                values: {
                    x: { 1: 7.5, 2: 15.0 },
                    a: { 1: 125.0, 2: 150.0 },
                    b: { 1: 52.5, 2: 75.0 },
                },
            },
        ],
    },

    "EVOLUTION||음속 돌파": {
        key: "EVOLUTION||음속 돌파",
        name: "음속 돌파",
        category: "EVOLUTION",
        max: 2,
        tier: 4,
        lines: [
            {
                base:
                    "공격 적중 시, 공격 속도 및 이동 속도 증가량의 {x}%만큼 진화형 피해가 증가합니다. 공격 및 이동 속도가 모두 상한을 초과했다면, 진화형 피해가 추가로 {y}%증가하며, 상한을 초과한 속도 증가량의 {z}%만큼 적중 시 진화형 피해가 증가합니다. 이 노드에 의한 진화형 피해는 최대 {cap}%까지 적용됩니다.",
                values: {
                    x: { 1: 5, 2: 10 },
                    y: { 1: 4, 2: 8 },
                    z: { 1: 15, 2: 30 },
                    cap: { 1: 12, 2: 24 },
                },
            },
        ],
    },

    "EVOLUTION||인파이팅": {
        key: "EVOLUTION||인파이팅",
        name: "인파이팅",
        category: "EVOLUTION",
        max: 2,
        tier: 4,
        lines: [
            {
                base:
                    "공격 적중 시, '정면 승부' 효과를 얻습니다. (10초 지속, 재사용 대기시간 5초)\n" +
                    "정면 승부 : 진화형 피해 +{x}%",
                values: { x: { 1: 9, 2: 18 } },
            },
        ],
    },

    "EVOLUTION||입식 타격가": {
        key: "EVOLUTION||입식 타격가",
        name: "입식 타격가",
        category: "EVOLUTION",
        max: 2,
        tier: 4,
        lines: [
            {
                base:
                    "진화형 피해가 {x}%, 낙인력이 {y}%증가합니다.\n" +
                    "전투 시작 후, '입식 타격' 효과를 최대로 얻습니다. 피격 이상 시 중첩을 3회 잃습니다. 이후 2초가 지날 때마다 효과를 1중첩 회복합니다.\n" +
                    "입식 타격 : 진화형 피해 +{a}% / 낙인력 +{b}%, 최대 6중첩",
                values: {
                    x: { 1: 6, 2: 12 },
                    y: { 1: 4, 2: 8 },
                    a: { 1: 0.75, 2: 1.5 },
                    b: { 1: 1.0, 2: 2.0 },
                },
            },
        ],
    },

    "EVOLUTION||마나 용광로": {
        key: "EVOLUTION||마나 용광로",
        name: "마나 용광로",
        category: "EVOLUTION",
        max: 2,
        tier: 4,
        lines: [
            {
                base:
                    "낙인력이 {x}%증가합니다. 마나를 소모하는 스킬 사용 시, 최대 마나의 2.0%가 추가로 소모됩니다.\n" +
                    "해당 스킬로 피해를 줄 경우, 스킬의 증감 전 기본 마나 소모량에 비례하여 진화형 피해가 증가합니다. (기본 마나 소모량 10 당, 진화형 피해 {a}% 증가, 최대 {cap}%)",
                values: {
                    x: { 1: 10, 2: 20 },
                    a: { 1: 0.25, 2: 0.5 },
                    cap: { 1: 12, 2: 24 },
                },
            },
        ],
    },

    "EVOLUTION||안정된 관리자": {
        key: "EVOLUTION||안정된 관리자",
        name: "안정된 관리자",
        category: "EVOLUTION",
        max: 2,
        tier: 4,
        lines: [
            {
                base: "낙인력이 {x}%증가하지만, 아이덴티티 게이지 획득량이 {y}%감소합니다.",
                values: {
                    x: { 1: 10, 2: 20 },
                    y: { 1: 3, 2: 6 },
                },
            },
        ],
    },
} as const;