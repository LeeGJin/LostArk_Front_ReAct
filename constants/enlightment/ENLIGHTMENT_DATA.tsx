import {BERSERKER_ENLIGHTENMENT} from "@/constants/enlightment/class/BERSERKER_ENLIGHTENMENT.tsx";
import {WARLORD_ENLIGHTENMENT_DATA} from "@/constants/enlightment/class/WARLORD_ENLIGHTENMENT_DATA.tsx";

export const ENLIGHTENMENT_DATA=
    {
        ...BERSERKER_ENLIGHTENMENT,
        ...WARLORD_ENLIGHTENMENT_DATA


    }as const;