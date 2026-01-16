// tooltipKey.tsx
import type { ArkCategory } from "./ArkPassiveTooltipData.tsx";

export function makeTooltipKey(category: ArkCategory, name: string, className?: string) {
    const cls = category === "EVOLUTION" ? "" : (className ?? "");
    return `${category}|${cls}|${name}`;
}
