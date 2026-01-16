// ArkPassiveTooltipData.ts

export type ArkCategory = "EVOLUTION" | "ENLIGHTENMENT" | "LEAP";

export type ValueByLevel = Record<number, number | string>;

export type TooltipLine = {
    base: string; // 템플릿 문장 (예: "치명 +{x}")
    values?: Record<string, ValueByLevel>; // 예: { x: {1:13,2:26,3:40} }
};

export type ArkTooltipEntry = {
    key: string;
    name: string;
    category: ArkCategory;
    className?: string; // EVOLUTION은 없음(빈 문자열로 들어가도 됨)
    max: number;
    tier?: number;
    lines: TooltipLine[];
};

// ✅ 실제 DB (예시)
// key는 makeTooltipKey() 규칙과 반드시 동일해야 함
export const TOOLTIP_DB: Record<string, ArkTooltipEntry> = {
    "EVOLUTION||치명": {
        key: "EVOLUTION||치명",
        name: "치명",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            {
                base: "치명이 {x}증가합니다.",
                values: {
                    x: {
                        1: 50,
                        2: 100,
                        3: 150,
                        4: 200,
                        5: 250,
                        6: 300,
                        7: 350,
                        8: 400,
                        9: 450,
                        10: 500,
                        11: 550,
                        12: 600,
                        13: 650,
                        14: 700,
                        15: 750,
                        16: 800,
                        17: 850,
                        18: 900,
                        19: 950,
                        20: 1000,
                        21: 1050,
                        22: 1100,
                        23: 1150,
                        24: 1200,
                        25: 1250,
                        26: 1300,
                        27: 1350,
                        28: 1400,
                        29: 1450,
                        30: 1500,
                    },
                },
            },
        ],
    },

    "EVOLUTION||특화": {
        key: "EVOLUTION||특화",
        name: "특화",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            {
                base: "특화가 {x}증가합니다",
                values: { x: { 1: 50,
                        2: 100,
                        3: 150,
                        4: 200,
                        5: 250,
                        6: 300,
                        7: 350,
                        8: 400,
                        9: 450,
                        10: 500,
                        11: 550,
                        12: 600,
                        13: 650,
                        14: 700,
                        15: 750,
                        16: 800,
                        17: 850,
                        18: 900,
                        19: 950,
                        20: 1000,
                        21: 1050,
                        22: 1100,
                        23: 1150,
                        24: 1200,
                        25: 1250,
                        26: 1300,
                        27: 1350,
                        28: 1400,
                        29: 1450,
                        30: 1500, } }, // 예시 값
            },
        ],
    },
    "EVOLUTION||제압": {
        key: "EVOLUTION||제압",
        name: "제압",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            {
                base: "제압이 {x}증가합니다",
                values: { x: { 1: 50,
                        2: 100,
                        3: 150,
                        4: 200,
                        5: 250,
                        6: 300,
                        7: 350,
                        8: 400,
                        9: 450,
                        10: 500,
                        11: 550,
                        12: 600,
                        13: 650,
                        14: 700,
                        15: 750,
                        16: 800,
                        17: 850,
                        18: 900,
                        19: 950,
                        20: 1000,
                        21: 1050,
                        22: 1100,
                        23: 1150,
                        24: 1200,
                        25: 1250,
                        26: 1300,
                        27: 1350,
                        28: 1400,
                        29: 1450,
                        30: 1500, } }, // 예시 값
            },
        ],
    },

    "EVOLUTION||신속": {
        key: "EVOLUTION||신속",
        name: "신속",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            {
                base: "신속이 {x}증가합니다",
                values: { x: { 1: 50,
                        2: 100,
                        3: 150,
                        4: 200,
                        5: 250,
                        6: 300,
                        7: 350,
                        8: 400,
                        9: 450,
                        10: 500,
                        11: 550,
                        12: 600,
                        13: 650,
                        14: 700,
                        15: 750,
                        16: 800,
                        17: 850,
                        18: 900,
                        19: 950,
                        20: 1000,
                        21: 1050,
                        22: 1100,
                        23: 1150,
                        24: 1200,
                        25: 1250,
                        26: 1300,
                        27: 1350,
                        28: 1400,
                        29: 1450,
                        30: 1500, } }, // 예시 값
            },
        ],
    },

    "EVOLUTION||인내": {
        key: "EVOLUTION||인내",
        name: "인내",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            {
                base: "인내가 {x}증가합니다",
                values: { x: { 1: 50,
                        2: 100,
                        3: 150,
                        4: 200,
                        5: 250,
                        6: 300,
                        7: 350,
                        8: 400,
                        9: 450,
                        10: 500,
                        11: 550,
                        12: 600,
                        13: 650,
                        14: 700,
                        15: 750,
                        16: 800,
                        17: 850,
                        18: 900,
                        19: 950,
                        20: 1000,
                        21: 1050,
                        22: 1100,
                        23: 1150,
                        24: 1200,
                        25: 1250,
                        26: 1300,
                        27: 1350,
                        28: 1400,
                        29: 1450,
                        30: 1500, } }, // 예시 값
            },
        ],
    },

    "EVOLUTION||숙련": {
        key: "EVOLUTION||숙련",
        name: "숙련",
        category: "EVOLUTION",
        max: 30,
        tier: 1,
        lines: [
            {
                base: "숙련이 {x}증가합니다",
                values: { x: { 1: 50,
                        2: 100,
                        3: 150,
                        4: 200,
                        5: 250,
                        6: 300,
                        7: 350,
                        8: 400,
                        9: 450,
                        10: 500,
                        11: 550,
                        12: 600,
                        13: 650,
                        14: 700,
                        15: 750,
                        16: 800,
                        17: 850,
                        18: 900,
                        19: 950,
                        20: 1000,
                        21: 1050,
                        22: 1100,
                        23: 1150,
                        24: 1200,
                        25: 1250,
                        26: 1300,
                        27: 1350,
                        28: 1400,
                        29: 1450,
                        30: 1500, } }, // 예시 값
            },
        ],
    },

    "EVOLUTION||끝없는 마나": {
        key: "EVOLUTION||끝없는 마나",
        name: "끝없는 마나",
        category: "EVOLUTION",
        max: 2,
        tier: 2,
        lines: [
            {
                base: "마나 스킬의 재사용 대기 시간이 {x}%감소하고," +
                    "마나 소모량이 {y}%감소합니다.",
                values: { x: { 1: 7 , 2 :14, }  , y : {1 : 10.0 , 2 : 20.0}}, // 예시 값
            },
        ],
    },

    "EVOLUTION||금단의 주문": {
        key: "EVOLUTION||금단의 주문",
        name: "금단의 주문",
        category: "EVOLUTION",
        max: 2,
        tier: 2,
        lines: [
            {
                base: "진화형 피해가 {x}%증가," +
                    "마나 스킬의 진화형 피해는 {y}%더 증가하고," +
                    "마나 소모량이 {z}%감소합니다.",

                values: { x: { 1: 5 , 2 :10, }  , y : {1 : 5 , 2 : 10} , z:{1:6 , 2:12}}, // 예시 값
            },
        ],
    },

    "EVOLUTION||예리한 감각": {
        key: "EVOLUTION||예리한 감각",
        name: "예리한 감각",
        category: "EVOLUTION",
        max: 2,
        tier: 2,
        lines: [
            {
                base: "치명타 적중률이 {x}%증가하고," +
                    "진화형 피해가 {y}% 증가합니다.",
                values: { x: { 1: 4 , 2 :8, }  , y : {1 : 5 , 2 : 10} }, // 예시 값
            },
        ],
    },

    "EVOLUTION||한계 돌파": {
        key: "EVOLUTION||한계 돌파",
        name: "한계 돌파",
        category: "EVOLUTION",
        max: 2,
        tier: 2,
        lines: [
            {
                base:
                    "진화형 피해가 {y}% 증가합니다.",
                values: { y : {1 : 10 , 2 : 20} }, // 예시 값
            },
        ],
    },

    "ENLIGHTENMENT|워로드|고독한 기사": {
        key: "ENLIGHTENMENT|워로드|고독한 기사",
        name: "고독한 기사",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 3,
        tier: 1,
        lines: [
            { base: "공격력 +{x}%", values: { x: { 1: 3, 2: 6, 3: 9 } } },
            { base: "추가 효과: {y}", values: { y: { 1: "A", 2: "B", 3: "C" } } },
        ],
    },
    "LEAP|워로드|초월적인 힘": {
        key: "LEAP|워로드|초월적인 힘",
        name: "초월적인 힘",
        category: "LEAP",
        className: "워로드",
        max: 5,
        tier: 1,
        lines: [
            { base: "힘 +{x}", values: { x: { 1: 5, 2: 10, 3: 15, 4: 20, 5: 25 } } },
        ],
    },


};

