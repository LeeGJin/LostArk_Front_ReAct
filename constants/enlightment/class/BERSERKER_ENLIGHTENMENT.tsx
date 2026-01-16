export const BERSERKER_ENLIGHTENMENT = {
    "ENLIGHTENMENT|버서커|강인한 육체": {
        key: "ENLIGHTENMENT|버서커|강인한 육체",
        name: "강인한 육체",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 3,
        tier: 1,
        lines: [
            {
                base: "폭주 중 X키를 이용해 일반 상태로 돌아갈 수 있다.",
                values: {},
            },
            {
                base: "폭주 상태 돌입 시 {x}초 동안 피격이상 면역이 된다.",
                values: { x: { 1: 0.5, 2: 1.5, 3: 2.5 } },
            },
        ],
    },

    "ENLIGHTENMENT|버서커|광기": {
        key: "ENLIGHTENMENT|버서커|광기",
        name: "광기",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 3,
        tier: 1,
        lines: [
            {
                base: "일반 상태에서 분노 게이지가 항상 최대치로 유지되며, 폭주 시 어둠의 힘을 이용한 광기 상태가 된다.",
                values: {},
            },
            {
                base: "광기 상태에서는 공격속도 및 이동속도가 {x}%, 치명타 적중률이 {y}% 증가하며 분노 게이지가 자연소모되지 않는다.",
                values: { x: { 1: 5.0, 2: 10.0, 3: 15.0 }, y: { 1: 10.0, 2: 20.0, 3: 30.0 } },
            },
            {
                base: "광기 상태일 때 받는 모든 피해가 72.0% 감소하지만 최대 생명력이 25.0%로 전환되며, 생명력 회복효과가 적용되더라도 이를 초과할 수 없다.",
                values: {},
            },
            {
                base: "또한, 회복효과는 40.0%, 쉴드는 25.0%만 적용된다.",
                values: {},
            },
            {
                base: "광기 상태에서 X키를 이용해 광기 상태를 해제할 수 있지만, 30.0초 동안 구속 상태가 되어 광기 상태가 될 수 없다.",
                values: {},
            },
        ],
    },

    "ENLIGHTENMENT|버서커|신체 활성": {
        key: "ENLIGHTENMENT|버서커|신체 활성",
        name: "신체 활성",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 3,
        tier: 2, // 해방 조건: 티어1 -> 2티어
        lines: [
            {
                base: "폭주 종료 후 탈진 시간이 {x}% 감소한다.",
                values: { x: { 1: 20.0, 2: 60.0, 3: 100.0 } },
            },
        ],
    },

    "ENLIGHTENMENT|버서커|분노 반환": {
        key: "ENLIGHTENMENT|버서커|분노 반환",
        name: "분노 반환",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 3,
        tier: 2, // 해방 조건: 티어1 -> 2티어
        lines: [
            {
                base: "광기 상태 해제 시 {x}%의 생명력을 회복한다.",
                values: { x: { 1: 5.0, 2: 15.0, 3: 25.0 } },
            },
        ],
    },

    "ENLIGHTENMENT|버서커|신체 각성": {
        key: "ENLIGHTENMENT|버서커|신체 각성",
        name: "신체 각성",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 5,
        tier: 3, // 해방 조건: 티어2 -> 3티어
        lines: [
            {
                base: "적에게 주는 피해가 {x}% 증가한다.",
                values: { x: { 1: 0.8, 2: 1.6, 3: 2.4, 4: 3.2, 5: 4.0 } },
            },
            {
                base: "폭주 및 광기 상태에서 공격 적중 시 0.5초에 한 번 최대 마나의 {y}%를 회복한다.",
                values: { y: { 1: 0.2, 2: 0.3, 3: 0.4, 4: 0.5, 5: 0.6 } },
            },
        ],
    },

    "ENLIGHTENMENT|버서커|폭주 강화": {
        key: "ENLIGHTENMENT|버서커|폭주 강화",
        name: "폭주 강화",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 3,
        tier: 3, // 해방 조건: 티어2 -> 3티어
        lines: [
            {
                base: "폭주 시 적에게 주는 피해가 {x}% 증가한다.",
                values: { x: { 1: 6.0, 2: 12.0, 3: 18.0 } },
            },
            {
                base: "폭주 중 '격노' 효과를 획득하여 공격력이 24.0% 증가하고, 마나의 자연 회복량이 {y}% 증가한다.",
                values: { y: { 1: 40.0, 2: 50.0, 3: 60.0 } },
            },
        ],
    },

    "ENLIGHTENMENT|버서커|차가운 분노": {
        key: "ENLIGHTENMENT|버서커|차가운 분노",
        name: "차가운 분노",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 3,
        tier: 3, // 해방 조건: 티어2 -> 3티어
        lines: [
            {
                base: "광기 상태에서 적에게 주는 피해가 {x}% 증가한다.",
                values: { x: { 1: 6.0, 2: 12.0, 3: 18.0 } },
            },
        ],
    },

    "ENLIGHTENMENT|버서커|분노 자극": {
        key: "ENLIGHTENMENT|버서커|분노 자극",
        name: "분노 자극",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 5,
        tier: 3, // 해방 조건: 티어2 -> 3티어
        lines: [
            {
                base: "폭주 및 광기 상태에서 치명타 피해량이 {x}% 증가한다.",
                values: { x: { 1: 3.0, 2: 6.0, 3: 9.0, 4: 12.0, 5: 15.0 } },
            },
        ],
    },

    "ENLIGHTENMENT|버서커|분노 소모": {
        key: "ENLIGHTENMENT|버서커|분노 소모",
        name: "분노 소모",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 5,
        tier: 4, // 해방 조건: 티어3 -> 4티어
        lines: [
            {
                base: "폭주 및 광기 상태에서 일반 스킬과 블러디 러쉬 및 다크 러쉬 사용 시 기본 재사용 대기시간의 15.0%만큼 분노 게이지를 소모하여 적에게 주는 피해가 {x}% 증가한다.",
                values: { x: { 1: 2.4, 2: 3.4, 3: 4.4, 4: 5.4, 5: 6.4 } },
            },
        ],
    },

    "ENLIGHTENMENT|버서커|광전사의 비기": {
        key: "ENLIGHTENMENT|버서커|광전사의 비기",
        name: "광전사의 비기",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 3,
        tier: 4, // 해방 조건: 티어3 -> 4티어
        lines: [
            {
                base: "폭주 상태에서 블러디 러쉬를 3회 사용할 수 있게 변경되며 사용할 때마다 점점 더 강력한 블러디 러쉬를 사용할 수 있다.",
                values: {},
            },
            {
                base: "블러디 러쉬를 다른 스킬과 연계 시 더욱 빠르게 사용할 수 있다.",
                values: {},
            },
            {
                base: "폭주 상태에서 스킬 사용 시 블러디 러쉬의 재사용 대기시간이 9.0초 감소되며, 3번째 블러디 러쉬를 사용하면 폭주 상태가 종료된다.",
                values: {},
            },
            {
                base: "적에게 주는 피해가 {x}% 증가한다.",
                values: { x: { 1: 0.0, 2: 1.7, 3: 3.4 } },
            },
            {
                base: "블러디 러쉬 피해량이 {y}% 증가한다.",
                values: { y: { 1: 0.0, 2: 10.0, 3: 20.0 } },
            },
        ],
    },

    "ENLIGHTENMENT|버서커|어둠 강화": {
        key: "ENLIGHTENMENT|버서커|어둠 강화",
        name: "어둠 강화",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 3,
        tier: 4, // 해방 조건: 티어3 -> 4티어
        lines: [
            {
                base: "광기 상태에서 공격 적중 시 1.0초에 한 번 '어둠 강화' 효과가 부여된다.",
                values: {},
            },
            {
                base: "'어둠 강화'는 광기 상태 동안 유지되며, 중첩 당 적에게 주는 피해가 {x}% 증가되고, 최대 10중첩까지 적용된다.",
                values: { x: { 1: 0.7, 2: 1.4, 3: 2.1 } },
            },
        ],
    },

    "ENLIGHTENMENT|버서커|쇄도": {
        key: "ENLIGHTENMENT|버서커|쇄도",
        name: "쇄도",
        category: "ENLIGHTENMENT",
        className: "버서커",
        max: 5,
        tier: 4, // 해방 조건: 티어3 -> 4티어
        lines: [
            {
                base: "폭주 및 광기 상태 돌입 시 이동기가 초기화되며 몸을 낮춘 상태에서 빠르게 돌진하는 '쇄도'로 변경되어, 이동하는 거리가 1.0m 감소하지만 재사용 대기시간이 2.0초 감소한다.",
                values: {},
            },
            {
                base: "적에게 주는 피해가 {x}% 증가한다.",
                values: { x: { 1: 1.0, 2: 2.0, 3: 3.0, 4: 4.0, 5: 5.0 } },
            },
        ],
    },
} as const;
