import {WARLORD_LEAP} from "@/constants/LEAP/class/WARLORD_LEAP.tsx";
import{BERSERKER_ENLIGHTENMENT} from "@/constants/enlightment/class/BERSERKER_ENLIGHTENMENT.tsx";

export const LEAP_DATA = {
    ...WARLORD_LEAP,
    ...BERSERKER_ENLIGHTENMENT
}as const