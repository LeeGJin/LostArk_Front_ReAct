import * as EAL from "./EnlightmentAndLeap.tsx";
import { EVOLUTION_DATA } from "./EVOLUTION_DATA.tsx";


const ENLIGHTENMENT_DATA = Object.assign(
    {},
    ...Object.entries(EAL)
        .filter(([key]) => key.endsWith("_ENLIGHTENMENT"))
        .map(([, value]) => value)
);

const LEAP_DATA = Object.assign(
    {},
    ...Object.entries(EAL)
        .filter(([key]) => key.endsWith("_LEAP"))
        .map(([, value]) => value)
);


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

export const TOOLTIP_DB = {
    // ✅ 진화(공용) 툴팁 데이터
    ...EVOLUTION_DATA,
    ...ENLIGHTENMENT_DATA,
    ...LEAP_DATA,
} as const;




