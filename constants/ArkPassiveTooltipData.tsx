// ArkPassiveTooltipData.ts

import {ENLIGHTENMENT_DATA} from "@/constants/enlightment/ENLIGHTMENT_DATA.tsx";
import {LEAP_DATA} from "@/constants/LEAP/LEAP_DATA.tsx";
import {EVOLUTION_DATA} from "@/constants/evolution/EVOLUTION_DATA.tsx";
import{MASTER_DATA} from "@/constants/arkPassiveData.tsx";

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
    ...MASTER_DATA,
    ...EVOLUTION_DATA,
    ...ENLIGHTENMENT_DATA,
    ...LEAP_DATA,
} as const;

