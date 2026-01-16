import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, RotateCcw, Trash2 } from "lucide-react";
import { MASTER_DATA } from "@/constants/ArkPassiveData/arkPassiveData.tsx";
import { getTooltip } from "@/constants/ArkPassiveData/tooltipGetter.tsx";

export const ArkPassiveBoard = ({
                                    character,
                                    data,
                                    onChangeData,
                                    onReset,
                                }: {
    character: any;
    data: any;
    onChangeData: (next: any) => void;
    onReset?: () => void;
}) => {
    // ✅ 레벨 추출/패치 유틸
    function getLvFromDesc(desc: string) {
        return Number(desc?.match(/Lv\.(\d+)/)?.[1] ?? 0);
    }

    const [activeTab, setActiveTab] = useState<"진화" | "깨달음" | "도약">("깨달음");

    // ✅ n랭크 / m레벨 파싱/패치
    const parseRankLevel = (desc: string) => {
        const s = String(desc ?? "");
        const rank = Number(s.match(/(\d+)\s*랭크/)?.[1] ?? 0);
        const level = Number(s.match(/(\d+)\s*레벨/)?.[1] ?? 0);
        return {
            rank: Number.isFinite(rank) ? rank : 0,
            level: Number.isFinite(level) ? level : 0,
        };
    };

    const patchRankLevel = (desc: string, rank: number, level: number) => {
        let s = String(desc ?? "");

        if (/\d+\s*랭크/.test(s)) s = s.replace(/\d+\s*랭크/g, `${rank}랭크`);
        else s = `${s} ${rank}랭크`;

        if (/\d+\s*레벨/.test(s)) s = s.replace(/\d+\s*레벨/g, `${level}레벨`);
        else s = `${s} ${level}레벨`;

        return s.replace(/\s+/g, " ").trim();
    };

    const getActivePoint = () => data?.Points?.find((p: any) => p.Name === activeTab);

    const [rankN, setRankN] = useState<number>(() => parseRankLevel(getActivePoint()?.Description ?? "").rank);
    const [levelM, setLevelM] = useState<number>(() => parseRankLevel(getActivePoint()?.Description ?? "").level);

    // ✅ 표시 텍스트/편집 토글
    const [editRankLevel, setEditRankLevel] = useState(false);

    // ✅ 클릭-바깥 감지(라이브러리 없이)
    const rankLevelWrapRef = useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        if (!editRankLevel) return;
        const onDown = (e: MouseEvent | TouchEvent) => {
            const el = rankLevelWrapRef.current;
            if (!el) return;
            const target = e.target as Node | null;
            if (target && el.contains(target)) return;
            setEditRankLevel(false);
        };
        window.addEventListener("mousedown", onDown);
        window.addEventListener("touchstart", onDown);
        return () => {
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("touchstart", onDown);
        };
    }, [editRankLevel]);

    // ✅ 탭 변경/데이터 갱신 시 현재 Description 기준으로 n/m 동기화
    React.useEffect(() => {
        const p = getActivePoint();
        const { rank, level } = parseRankLevel(p?.Description ?? "");
        setRankN(rank);
        setLevelM(level);
        setEditRankLevel(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab, data]);

    const commitRankLevel = (nextRank: number, nextLevel: number) => {
        const points = Array.isArray(data?.Points) ? [...data.Points] : [];
        const idx = points.findIndex((p: any) => p?.Name === activeTab);
        if (idx < 0) return;

        const prevDesc = String(points[idx]?.Description ?? "");
        points[idx] = {
            ...points[idx],
            Description: patchRankLevel(prevDesc, nextRank, nextLevel),
        };

        onChangeData({ ...data, Points: points });
    };

    const [selectedEffect, setSelectedEffect] = useState<any>(null);
    const [selectedNodeMax, setSelectedNodeMax] = useState<number>(0);
    const [editLv, setEditLv] = useState<number>(0);
    const [hoverInfo, setHoverInfo] = useState<{ effect: any; node: any; rect: DOMRect | null } | null>(null);

    // ✅ 시뮬레이터용(수정 가능한) Effects 복사본
    const [simEffects, setSimEffects] = useState<any[]>(() => data?.Effects ?? []);

    const tooltipLines = useMemo(() => {
        if (!hoverInfo) return null;

        const category = activeTab === "진화" ? "EVOLUTION" : activeTab === "깨달음" ? "ENLIGHTENMENT" : "LEAP";

        // ✅ 핵심: DB 매칭은 node.name이 제일 정확함
        const name = String(hoverInfo.node?.name ?? "").trim();

        const level = getLvFromDesc(String(hoverInfo.effect?.Description ?? "Lv.1"));

        const className = character?.CharacterClassName || character?.CharacterClass;

        return getTooltip(category as any, name, level, className);
    }, [hoverInfo, activeTab, character]);

    React.useEffect(() => {
        setSimEffects(data?.Effects ?? []);
    }, [data]);

    const findMasterNode = (nodeName: string) => {
        return currentMaster.find((m: any) => m.name === nodeName);
    };

    const safeJsonParse = (jsonString: string) => {
        try {
            return JSON.parse(jsonString);
        } catch {
            return null;
        }
    };

    const cleanText = (text: any) => {
        if (!text || typeof text !== "string") return "";
        return text.replace(/<[^>]*>?/gm, "").replace(/\s+/g, " ").trim();
    };

    // ✅ (중요) 아이콘 URL 생성은 "원래 코드" 그대로 유지
    const getIconUrl = (iconId: string | number, tab: string) => {
        const idStr = String(iconId);

        if (tab === "진화") {
            return `https://cdn-lostark.game.onstove.com/efui_iconatlas/ark_passive_evolution/ark_passive_evolution_${idStr}.png`;
        }

        if (idStr.includes("_")) {
            const parts = idStr.split("_");

            if (parts.length > 2) {
                return `https://static.inven.co.kr/image_2011/site_image/lostark/arkpassiveicon/ark_passive_${idStr}.png?v=240902a`;
            }

            const folderKey = parts[0];
            const folderName = `ark_passive_${folderKey}`;
            return `https://cdn-lostark.game.onstove.com/efui_iconatlas/${folderName}/${folderName}_${parts[1]}.png`;
        }

        return `https://cdn-lostark.game.onstove.com/efui_iconatlas/ark_passive_01/ark_passive_01_${idStr}.png`;
    };

    const currentMaster = useMemo(() => {
        const currentClass = character?.CharacterClassName || character?.CharacterClass;
        if (!currentClass) return [];

        if (activeTab === "진화") return MASTER_DATA.EVOLUTION || [];
        if (activeTab === "깨달음") return (MASTER_DATA.ENLIGHTENMENT_BY_CLASS as any)[currentClass] || [];
        if (activeTab === "도약") return (MASTER_DATA.LEAP_BY_CLASS as any)[currentClass] || [];
        return [];
    }, [activeTab, character]);

    const theme = useMemo(() => {
        if (activeTab === "진화")
            return {
                accentText: "text-blue-400",
                pill: "bg-blue-500/10 border-blue-500/20",
                tabActive: "bg-blue-500/20 text-blue-400 border-blue-500/30",
                borderActive: "border-blue-500",
                lvBadge: "bg-blue-600",
                lvText: "text-blue-400",
            };
        if (activeTab === "깨달음")
            return {
                accentText: "text-purple-400",
                pill: "bg-purple-500/10 border-purple-500/20",
                tabActive: "bg-purple-500/20 text-purple-400 border-purple-500/30",
                borderActive: "border-purple-500",
                lvBadge: "bg-purple-600",
                lvText: "text-purple-400",
            };
        return {
            accentText: "text-amber-400",
            pill: "bg-amber-500/10 border-amber-500/20",
            tabActive: "bg-amber-500/20 text-amber-400 border-amber-500/30",
            borderActive: "border-amber-500",
            lvBadge: "bg-amber-600",
            lvText: "text-amber-400",
        };
    }, [activeTab]);

    const renderTitleWithTier = (fullText: string | undefined | null, tab: string, isModal = false) => {
        if (!fullText) return null;
        const text = cleanText(fullText);
        const tierMatch = text.match(/(\d+)티어/);
        const tierNum = tierMatch ? tierMatch[1] : null;
        const titleWithoutTier = text.replace(/\d+티어/, "").replace(tab, "").trim();

        const badgeTheme =
            tab === "진화"
                ? "border-blue-500/30 text-blue-400 bg-blue-500/10"
                : tab === "깨달음"
                    ? "border-purple-500/30 text-purple-400 bg-purple-500/10"
                    : "border-amber-500/30 text-amber-400 bg-amber-500/10";

        return (
            <div className="flex items-center gap-2">
                {tierNum && (
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border leading-none ${badgeTheme}`}>T{tierNum}</span>
                )}
                <h4 className={`${isModal ? "text-lg" : "text-[13px]"} text-white font-bold`}>{titleWithoutTier}</h4>
            </div>
        );
    };

    const patchDescLv = (desc: string, lv: number) => {
        const has = /Lv\.\d+/.test(desc || "");
        const base = (desc ?? "").trim();
        if (has) return base.replace(/Lv\.\d+/g, `Lv.${lv}`);
        return `${base} Lv.${lv}`.trim();
    };

    const normalizeKey = (s: string) => (s || "").replace(/\s+/g, "");

    // ✅ (핵심) 노드 ↔ effect 매칭을 node 기준으로 안정적으로 찾기
    const findEffectIndexByNode = (effects: any[], nodeName: string) => {
        const nodeKey = normalizeKey(nodeName);
        return effects.findIndex((eff: any) => {
            const nameOk = String(eff?.Name ?? "").includes(activeTab);
            const descKey = normalizeKey(String(eff?.Description ?? ""));
            return nameOk && descKey.includes(nodeKey);
        });
    };

    // ✅ (핵심) 비활성 노드도 +로 활성화 / 0되면 자동 제거 / 즉시 커밋
    const changeNodeLevel = (node: any, delta: number) => {
        const max = Math.max(0, Number(node?.max ?? 0));
        const nodeIcon = getIconUrl(node.iconId, activeTab);

        setSimEffects((prev) => {
            const next = [...(Array.isArray(prev) ? prev : [])];

            const idx = findEffectIndexByNode(next, String(node.name ?? ""));
            const currentLv = idx >= 0 ? getLvFromDesc(String(next[idx]?.Description ?? "")) : 0;

            const nextLv = Math.max(0, Math.min(max, currentLv + delta));
            if (nextLv === currentLv) return prev;

            const masterNode = findMasterNode(node.name);

            if (nextLv === 0) {
                if (idx >= 0) next.splice(idx, 1);
            } else {
                if (idx < 0) {
                    next.push({
                        Name: `${activeTab} ${node.name}`,
                        Description: `${activeTab} ${node.name} Lv.${nextLv}`,
                        Icon: nodeIcon,
                        ToolTip: masterNode?.tooltip ?? "",
                    });
                } else {
                    next[idx] = {
                        ...next[idx],
                        Description: patchDescLv(String(next[idx]?.Description ?? ""), nextLv),
                    };
                }
            }

            onChangeData({ ...data, Effects: next });

            return next;
        });
    };

    // ✅ data 없으면 UI
    if (!data) {
        return (
            <div className="py-10 text-center bg-[#0f0f0f] text-zinc-500 flex flex-col items-center gap-3 rounded-2xl border border-white/5">
                <AlertCircle className="w-10 h-10 text-zinc-700" />
                <p>아크 패시브 데이터가 없습니다.</p>
            </div>
        );
    }

    // ✅ 모달 "적용" 버튼: simEffects에도/부모에도 커밋
    const applyLevel = () => {
        if (!selectedEffect) return;

        const maxLv = Math.max(0, selectedNodeMax || 0);
        const safeLv = Math.max(0, Math.min(maxLv, Number(editLv || 0)));

        const effects = Array.isArray(simEffects) ? [...simEffects] : [];

        const findIdx = effects.findIndex((e: any) => e?.Name === selectedEffect?.Name && e?.Description === selectedEffect?.Description);

        if (safeLv <= 0) {
            if (findIdx >= 0) effects.splice(findIdx, 1);
            setSimEffects(effects);
            onChangeData({ ...data, Effects: effects });
            setSelectedEffect(null);
            return;
        }

        const patched = {
            ...selectedEffect,
            Icon: selectedEffect?.Icon || "",
            Description: patchDescLv(selectedEffect.Description ?? "", safeLv),
        };

        if (findIdx >= 0) effects[findIdx] = patched;
        else effects.push(patched);

        setSimEffects(effects);
        onChangeData({ ...data, Effects: effects });
        setSelectedEffect(null);
    };

    const removeSelected = () => {
        setEditLv(0);
        applyLevel();
    };

    // ✅ "초기화" 버튼: simEffects를 원본 data.Effects로 되돌리고, 부모에도 알림
    const handleReset = () => {
        const serverEffects = data?.Effects ?? [];

        setSimEffects(serverEffects);
        onChangeData({ ...data, Effects: serverEffects });

        setSelectedEffect(null);
        setHoverInfo(null);
        setEditRankLevel(false);

        if (onReset) onReset();
    };

    return (
        <div className="w-full bg-[#0f0f0f] text-zinc-300 p-6 space-y-6 font-sans relative overflow-x-hidden rounded-3xl border border-white/5">
            {/* 탭 네비게이션 */}
            <div className="flex gap-1 p-1 bg-[#1a1a1c] w-full max-w-[320px] rounded-lg border border-white/5 shadow-xl mx-auto">
                {(["진화", "깨달음", "도약"] as const).map((tab) => {
                    const isActive = activeTab === tab;
                    const activeStyles =
                        tab === "진화"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : tab === "깨달음"
                                ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                : "bg-amber-500/20 text-amber-400 border border-amber-500/30";

                    return (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setHoverInfo(null);
                                setEditRankLevel(false);
                            }}
                            className={`flex-1 py-1.5 rounded text-[12px] font-bold transition-all border border-transparent ${
                                isActive ? activeStyles : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                            }`}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>

            {/* 포인트 + 리셋 */}
            <div className="flex flex-col items-center gap-3">
                <div className="flex flex-row items-end justify-center gap-2">
                    <div className="flex items-baseline gap-1">
            <span className={`text-3xl font-black tracking-tighter transition-colors duration-300 ${theme.accentText}`}>
              {data?.Points?.find((p: any) => p.Name === activeTab)?.Value || 0}
            </span>
                        <span className="text-xl font-bold text-zinc-600 ml-0.5">/</span>
                        <span className="text-xl font-bold text-zinc-500 mr-1.5">{activeTab === "진화" ? 140 : activeTab === "깨달음" ? 101 : 70}</span>
                    </div>

                    {/* ✅ n랭크 m레벨: 기본은 텍스트, 클릭 시 드랍다운 */}
                    <div
                        ref={rankLevelWrapRef}
                        className={`px-3 py-0.5 rounded-full border shadow-inner mt-1 transition-all duration-300 ${theme.pill}`}
                    >
                        {!editRankLevel ? (
                            <button
                                type="button"
                                onClick={() => setEditRankLevel(true)}
                                className="inline-flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/5 transition select-none"
                                title="클릭해서 랭크/레벨 변경"
                            >
                                <span className={`text-sm font-black ${theme.accentText}`}>{rankN}랭크</span>
                                <span className="text-sm font-black text-zinc-300">{levelM}레벨</span>
                                <span className="text-xs font-black text-zinc-600">▼</span>
                            </button>
                        ) : (
                            <div className="flex items-center gap-2 py-1">
                                {/* Rank */}
                                <div className="relative">
                                    <select
                                        value={rankN}
                                        onChange={(e) => {
                                            const v = Math.max(0, Math.min(6, Number(e.target.value)));
                                            setRankN(v);
                                            commitRankLevel(v, levelM);
                                        }}
                                        className="appearance-none bg-white/5 hover:bg-white/10 transition border border-white/10 rounded-lg pl-3 pr-7 py-1 text-zinc-100 text-sm font-black outline-none"
                                    >
                                        {Array.from({ length: 7 }, (_, i) => i).map((v) => (
                                            <option
                                                key={v}
                                                value={v}
                                                style={{ color: "#111827", backgroundColor: "#ffffff" }} // ✅ 텍스트/배경 강제
                                            >
                                                {v}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 text-xs">▼</span>
                                </div>

                                <span className="text-zinc-500 text-sm font-black">랭크</span>

                                {/* Level */}
                                <div className="relative">
                                    <select
                                        value={levelM}
                                        onChange={(e) => {
                                            const v = Math.max(0, Math.min(30, Number(e.target.value)));
                                            setLevelM(v);
                                            commitRankLevel(rankN, v);
                                        }}
                                        className="appearance-none bg-white/5 hover:bg-white/10 transition border border-white/10 rounded-lg pl-3 pr-7 py-1 text-zinc-100 text-sm font-black outline-none"
                                    >
                                        {Array.from({ length: 31 }, (_, i) => i).map((v) => (
                                            <option
                                                key={v}
                                                value={v}
                                                style={{ color: "#111827", backgroundColor: "#ffffff" }} // ✅ 텍스트/배경 강제
                                            >
                                                {v}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 text-xs">▼</span>
                                </div>

                                <span className="text-zinc-500 text-sm font-black">레벨</span>

                                <button
                                    type="button"
                                    onClick={() => setEditRankLevel(false)}
                                    className="ml-1 px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 text-xs font-black transition"
                                >
                                    완료
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* ✅ "초기화" */}
                <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-200 font-black text-xs hover:bg-white/[0.05] transition"
                >
                    <RotateCcw className="w-4 h-4" />
                    초기화
                </button>
            </div>

            {/* 메인 보드 */}
            <div className="flex flex-col gap-1">
                {[1, 2, 3, 4, 5].map((tierNum) => {
                    const tierNodes = currentMaster.filter((m: any) => Number(m.tier) === tierNum);
                    if (tierNodes.length === 0) return null;

                    return (
                        <div key={tierNum} className="flex items-center w-full relative min-h-[140px] border-b border-white/[0.03] last:border-0">
                            <div className="flex flex-col items-center justify-center w-20 md:w-28 shrink-0 z-10 border-r border-white/5">
                                <span className="text-xl md:text-2xl font-black text-zinc-500 leading-none">{tierNum}</span>
                            </div>

                            <div className="flex-1 flex justify-center items-center gap-x-2 md:gap-x-10 ml-[-110px] pr-55 md:pr-38 relative h-full min-w-0">
                                {tierNodes.map((node: any) => {
                                    const idx = findEffectIndexByNode(simEffects, String(node.name ?? ""));
                                    const activeEffect = idx >= 0 ? simEffects[idx] : null;

                                    const isActive = !!activeEffect;
                                    const currentLv = isActive ? Number(activeEffect.Description?.match(/Lv\.(\d+)/)?.[1] ?? 0) : 0;

                                    return (
                                        <div key={node.name} className="flex flex-col items-center relative py-4 w-16 md:w-24 shrink-0">
                                            <div
                                                className={`relative rounded-lg border transition-all flex items-center justify-center shrink-0 ${
                                                    isActive ? `cursor-pointer ${theme.borderActive} bg-zinc-900 shadow-lg scale-110` : "grayscale opacity-20 border-white/5 bg-zinc-900 scale-90"
                                                }`}
                                                style={{ width: "clamp(44px, 5vw, 56px)", height: "clamp(44px, 5vw, 56px)" }}
                                                onClick={() => {
                                                    if (!isActive) return;
                                                    setSelectedEffect(activeEffect);
                                                    setSelectedNodeMax(Number(node.max || 0));
                                                    setEditLv(currentLv);
                                                }}
                                                onMouseEnter={(e) => {
                                                    const hoverEffect = isActive
                                                        ? activeEffect
                                                        : {
                                                            Name: `${activeTab} ${node.name}`,
                                                            Description: `${activeTab} ${node.name} Lv.1`,
                                                            Icon: getIconUrl(node.iconId, activeTab),
                                                        };

                                                    setHoverInfo({
                                                        effect: hoverEffect,
                                                        node,
                                                        rect: e.currentTarget.getBoundingClientRect(),
                                                    });
                                                }}
                                                onMouseLeave={() => setHoverInfo(null)}
                                            >
                                                <img
                                                    src={getIconUrl(node.iconId, activeTab)}
                                                    className="w-[85%] h-[85%] object-contain"
                                                    referrerPolicy="no-referrer"
                                                    alt=""
                                                />
                                                {isActive && (
                                                    <div className={`absolute -top-1 -right-1 ${theme.lvBadge} text-white text-[10px] font-black px-1 rounded shadow-lg border border-white/20 z-20`}>
                                                        Lv.{currentLv}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="mt-3 text-center w-full min-h-[35px] px-1">
                                                <div className="flex items-center justify-center gap-1">
                                                    <button
                                                        onClick={(e) => changeNodeLevel(node, e.shiftKey ? -10 : -1)}
                                                        className="w-4 h-4 text-[10px] font-black rounded bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed"
                                                        title="클릭: -1 / Shift+클릭: -10"
                                                        disabled={currentLv <= 0}
                                                    >
                                                        −
                                                    </button>

                                                    <p className={`text-[11px] md:text-[13px] font-bold truncate leading-tight ${isActive ? "text-zinc-100" : "text-zinc-600"} max-w-[96px]`}>
                                                        {node.name}
                                                    </p>

                                                    <button
                                                        onClick={(e) => changeNodeLevel(node, e.shiftKey ? +10 : +1)}
                                                        className="w-4 h-4 text-[10px] font-black rounded bg-zinc-800 hover:bg-zinc-700"
                                                        title="클릭: +1 / Shift+클릭: +10"
                                                        disabled={currentLv >= Number(node.max ?? 0)}
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <p className={`text-[10px] font-black mt-1 ${isActive ? theme.lvText : "text-zinc-800"}`}>
                                                    {currentLv}/{node.max}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 툴팁 */}
            <AnimatePresence>
                {hoverInfo && !selectedEffect && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: "fixed",
                            left: (hoverInfo.rect?.left ?? 0) + (hoverInfo.rect?.width ?? 0) / 2,
                            top: (hoverInfo.rect?.top ?? 0) - 10,
                            transform: "translate(-50%, -100%)",
                            zIndex: 9999,
                            pointerEvents: "none",
                        }}
                        className="w-64"
                    >
                        <div className="bg-[#1a1a1c] border border-white/10 p-4 rounded-lg shadow-2xl">
                            <div className="flex items-center gap-3 mb-2 pb-2 border-b border-white/5">
                                <img src={hoverInfo.effect.Icon} className="w-8 h-8 rounded border border-white/10" alt="" />
                                {renderTitleWithTier(hoverInfo.effect.Description?.split(" Lv")[0], activeTab)}
                            </div>
                            <div className="text-[12px] leading-relaxed text-zinc-400 space-y-1">
                                {tooltipLines ? tooltipLines.map((t, i) => <div key={i}>{t}</div>) : <div className="text-zinc-500">툴팁 데이터 없음</div>}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 상세 모달 + 레벨 편집 */}
            <AnimatePresence>
                {selectedEffect && (
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 backdrop-blur-sm">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedEffect(null)} className="absolute inset-0 bg-black/80" />
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="relative w-full max-w-[520px] bg-[#1a1a1c] border border-white/10 p-6 rounded-xl shadow-2xl"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={selectedEffect.Icon || ""}
                                    className="w-14 h-14 rounded-lg border border-white/10 p-1 bg-zinc-900 shadow-lg"
                                    alt=""
                                />
                                <div className="flex-1 min-w-0">
                                    {renderTitleWithTier(selectedEffect.Description?.split(" Lv")[0], activeTab, true)}
                                    <span className={`text-sm font-bold mt-1 block ${theme.accentText}`}>시뮬레이터에서만 적용</span>
                                </div>

                                <button
                                    onClick={removeSelected}
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 font-black text-xs hover:bg-red-500/15 transition"
                                >
                                    <Trash2 className="w-4 h-4" />
                                    비활성화
                                </button>
                            </div>

                            <div className="bg-black/30 border border-white/10 rounded-2xl p-4 mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="text-sm font-black text-zinc-200">레벨 조절</div>
                                    <div className="text-sm font-black text-white">
                                        Lv.{editLv} <span className="text-zinc-500">/ {selectedNodeMax || 0}</span>
                                    </div>
                                </div>

                                <input
                                    type="range"
                                    min={0}
                                    max={Math.max(0, selectedNodeMax || 0)}
                                    value={editLv}
                                    onChange={(e) => setEditLv(Number(e.target.value))}
                                    className="w-full"
                                />

                                <div className="mt-3 text-[12px] text-zinc-500 font-bold">0으로 두면 해당 효과를 “시뮬에서만” 제거합니다.</div>
                            </div>

                            <div className="bg-black/40 p-4 rounded-lg border border-white/5 text-[13px] leading-relaxed text-zinc-300 max-h-[320px] overflow-y-auto custom-scrollbar mb-4">
                                {safeJsonParse(selectedEffect.ToolTip)?.Element_002?.value ? (
                                    <div
                                        className="inline-block w-full"
                                        dangerouslySetInnerHTML={{
                                            __html: safeJsonParse(selectedEffect.ToolTip).Element_002.value.replace(/\|\|/g, "<br/>").trim(),
                                        }}
                                    />
                                ) : (
                                    <p className="py-1 text-center">상세 정보가 없습니다.</p>
                                )}
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSelectedEffect(null)}
                                    className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-black text-sm transition-colors"
                                >
                                    닫기
                                </button>
                                <button
                                    onClick={applyLevel}
                                    className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 text-black rounded-lg font-black text-sm transition-colors"
                                >
                                    적용
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
