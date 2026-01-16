export const WARLORD_ENLIGHTENMENT_DATA = {
    // =========================
    // T1 (해방 조건 문구 없음)
    // =========================

    "ENLIGHTENMENT|워로드|철옹성": {
        key: "ENLIGHTENMENT|워로드|철옹성",
        name: "철옹성",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 3,
        tier: 1,
        lines: [
            {
                base: "방어 태세의 실드량이 {x}% 증가한다.",
                values: { x: { 1: 30.0, 2: 40.0, 3: 50.0 } },
            },
            {
                base:
                    "▶ [철옹성] 습득 시 다음 아크 패시브는 습득이 불가능 합니다.\n{y}",
                values: { y: { 1: "고독한 기사", 2: "고독한 기사", 3: "고독한 기사" } },
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
            {
                base:
                    "최대 실드 게이지가 30.0% 감소한다. 일반 스킬로 아군에게 부여하는 보호막의 양이 80.0% 감소하며, 일반 스킬 공격 적중 시 실드 게이지 충전량도 80.0% 감소한다.",
                values: {},
            },
            { base: "Z 스킬이 진격 태세 스킬로 변경된다.", values: {} },
            {
                base:
                    "진격 태세 동안 이동속도가 10.0% 감소한다. 피격 시 실드 게이지를 대신 소모하며 피해를 받지 않으며, 시간이 지남에 따라 실드 게이지가 소모되고 실드 게이지가 모두 소모되면 진격 태세가 해제된다. 또한, 랜스 스킬 사용 중에도 Z키를 눌러 해제할 수 있다.",
                values: {},
            },
            { base: "X 스킬이 전장의 창 스킬로 변경된다.", values: {} },
            {
                base:
                    "전장의 창 사용 시 이동기 스킬의 재사용 대기시간이 초기화된다. 이어서 6.0초 동안 자신의 최대 생명력의 30.0%에 해당하는 보호막을 획득하며, 실드 게이지가 2000 증가하고 진격 태세로 전환된다. 또한, 다음 사용하는 랜스 스킬의 피해량이 {x}% 증가한다.",
                values: { x: { 1: 13.0, 2: 26.0, 3: 40.0 } },
            },
            {
                base:
                    "▶ [고독한 기사] 습득 시 다음 아크 패시브는 습득이 불가능 합니다.\n{y}",
                values: { y: { 1: "철옹성", 2: "철옹성", 3: "철옹성" } },
            },
        ],
    },

    // =========================
    // T2 (툴팁에 '티어1 ...' => tier 2)
    // =========================

    "ENLIGHTENMENT|워로드|정교함": {
        key: "ENLIGHTENMENT|워로드|정교함",
        name: "정교함",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 3,
        tier: 2,
        lines: [
            {
                base: "치명타 적중률이 {x}% 증가한다.",
                values: { x: { 1: 5.0, 2: 10.0, 3: 15.0 } },
            },
        ],
    },

    "ENLIGHTENMENT|워로드|전투 태세": {
        key: "ENLIGHTENMENT|워로드|전투 태세",
        name: "전투 태세",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 3,
        tier: 2,
        lines: [
            {
                base: "방어 태세 중 적에게 주는 피해가 {x}% 증가한다.",
                values: { x: { 1: 10.0, 2: 15.0, 3: 20.0 } },
            },
            {
                base:
                    "방어 태세 중 공격 적중 시 대상에게 5.0초간 '갑옷 파괴' 효과를 부여한다.",
                values: {},
            },
            {
                base:
                    "갑옷 파괴 : 물리 방어력이 12.0% 감소하고, 마법 방어력이 12.0% 감소한다.",
                values: {},
            },
        ],
    },

    // =========================
    // T3 (툴팁에 '티어2 ...' => tier 3)
    // =========================

    "ENLIGHTENMENT|워로드|숙련된 전술가": {
        key: "ENLIGHTENMENT|워로드|숙련된 전술가",
        name: "숙련된 전술가",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 3,
        tier: 3,
        lines: [
            {
                base: "일반 스킬 피해량이 {x}% 증가한다.",
                values: { x: { 1: 12.0, 2: 24.0, 3: 36.0 } },
            },
        ],
    },

    "ENLIGHTENMENT|워로드|효율 증대": {
        key: "ENLIGHTENMENT|워로드|효율 증대",
        name: "효율 증대",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 5,
        tier: 3,
        lines: [
            {
                base:
                    "전투 중 마나 회복량이 10.0% 증가하고. 랜스 스킬의 피해량이 {x}% 증가한다.",
                values: { x: { 1: 1.0, 2: 2.0, 3: 3.0, 4: 4.0, 5: 5.0 } },
            },
        ],
    },

    "ENLIGHTENMENT|워로드|건랜스 수련": {
        key: "ENLIGHTENMENT|워로드|건랜스 수련",
        name: "건랜스 수련",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 3,
        tier: 3,
        lines: [
            {
                base:
                    "모든 치명타 발생 확률 1.0% 당 랜스 스킬의 피해량이 {x}% 증가한다. 피해량 증가 효과는 최대 {y}%까지 적용된다.",
                values: {
                    x: { 1: 0.2, 2: 0.4, 3: 0.6 },
                    y: { 1: 20.0, 2: 40.0, 3: 60.0 },
                },
            },
        ],
    },

    "ENLIGHTENMENT|워로드|전술 훈련": {
        key: "ENLIGHTENMENT|워로드|전술 훈련",
        name: "전술 훈련",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 5,
        tier: 3,
        lines: [
            {
                base:
                    "일반 스킬의 치명타 적중률이 {x}% 증가하며, 방어 태세 중에는 {y}% 증가한다.",
                values: {
                    x: { 1: 0.8, 2: 1.6, 3: 2.4, 4: 3.2, 5: 4.0 },
                    y: { 1: 1.6, 2: 3.2, 3: 4.8, 4: 6.4, 5: 8.0 },
                },
            },
            {
                base: "전장의 방패 치명타 적중률이 {z}% 증가한다.",
                values: { z: { 1: 1.6, 2: 3.2, 3: 4.8, 4: 6.4, 5: 8.0 } },
            },
        ],
    },

    // =========================
    // T4 (툴팁에 '티어3 ...' => tier 4)
    // =========================

    "ENLIGHTENMENT|워로드|결사대": {
        key: "ENLIGHTENMENT|워로드|결사대",
        name: "결사대",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 5,
        tier: 4,
        lines: [
            {
                base:
                    "랜스 스킬의 피해량이 {x}% 증가하며, 헤드어택 공격 적중 시 적에게 주는 피해가 {y}% 증가한다.",
                values: {
                    x: { 1: 0.8, 2: 1.6, 3: 2.4, 4: 3.2, 5: 4.0 },
                    y: { 1: 0.6, 2: 1.2, 3: 1.8, 4: 2.4, 5: 3.0 },
                },
            },
        ],
    },

    "ENLIGHTENMENT|워로드|선봉장의 함성": {
        key: "ENLIGHTENMENT|워로드|선봉장의 함성",
        name: "선봉장의 함성",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 3,
        tier: 4,
        lines: [
            {
                base:
                    "진격 태세 중 랜스 스킬의 치명타 피해량이 {x}% 증가한다. 전장의 창 스킬 사용 시 자신에게 '선봉장의 함성' 효과를 10.0초간 부여하며, 강하게 포효하여 주변 10.0m 반경 내의 적에게 2,616의 피해를 주며, '약점 노출' 효과를 부여하고 적을 도발한다.",
                values: { x: { 1: 15.0, 2: 30.0, 3: 45.0 } },
            },
            { base: "선봉장의 함성 : 공격속도가 10.0% 증가한다.", values: {} },
            {
                base:
                    "약점 노출 : 자신 및 파티원에게 받는 피해를 4.0% 증가시킨다. 헤드 어택 및 백 어택의 경우, 받는 피해 효과가 추가로 5.0% 증가한다.",
                values: {},
            },
        ],
    },

    "ENLIGHTENMENT|워로드|선봉장의 마음가짐": {
        key: "ENLIGHTENMENT|워로드|선봉장의 마음가짐",
        name: "선봉장의 마음가짐",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 3,
        tier: 4,
        lines: [
            {
                base: "방어 태세 중 적에게 주는 피해가 {x}% 추가로 증가한다.",
                values: { x: { 1: 6.0, 2: 15.0, 3: 25.0 } },
            },
            {
                base:
                    "전장의 방패 스킬의 고정 실드량이 20.0% 증가하고, 스킬 종료 시 범위 내 자신 및 파티원에게 2.0초 동안 피격이상 면역 효과가 있는 자신의 최대 생명력의 30.0% 보호막을 부여한다.",
                values: {},
            },
        ],
    },

    "ENLIGHTENMENT|워로드|전술 이동": {
        key: "ENLIGHTENMENT|워로드|전술 이동",
        name: "전술 이동",
        category: "ENLIGHTENMENT",
        className: "워로드",
        max: 5,
        tier: 4,
        lines: [
            {
                base:
                    "이동기 재사용 대기 시간이 1.0초 감소하고 이동 중 즉시 스킬을 사용할 수 있다.",
                values: {},
            },
            {
                base: "이동기 사용 시 8.0초 동안 공격속도가 {x}% 증가한다.",
                values: { x: { 1: 1.6, 2: 3.2, 3: 4.8, 4: 6.4, 5: 8.0 } },
            },
            {
                base: "랜스 및 일반 스킬의 피해량이 {y}% 증가한다.",
                values: { y: { 1: 0.8, 2: 1.6, 3: 2.4, 4: 3.2, 5: 4.0 } },
            },
        ],
    },
}as const ;