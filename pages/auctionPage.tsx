import React, { useMemo, useState } from "react";
import { Gavel, Trophy } from "lucide-react";

const RaidPage = () => {
    const [priceInput, setPriceInput] = useState<string>("");

    const price = useMemo(() => {
        const n = Number(priceInput);
        return Number.isFinite(n) ? Math.max(0, n) : 0;
    }, [priceInput]);

    const formatGold = (n: number) =>
        `${Math.max(0, Math.floor(n)).toLocaleString("ko-KR")} G`;

    const plainInt = (n: number) => String(Math.max(0, Math.floor(n)));

    // ✅ 본인이 사용시: 기존 로직 유지 (시세 * 0.95 기준, 순이익 > 0)
    const { bid4, bid8, bid16 } = useMemo(() => {
        const net = price * 0.95;
        const calc = (k: number) => net * (k / (k + 1));
        return { bid4: calc(3), bid8: calc(7), bid16: calc(15) };
    }, [price]);

    /**
     * ✅ 판매시: "수수료(5%) 제외 후"에도
     *   최소 +10% 이익을 목표로 하되, 목표 이익 상한은 3,000
     *
     * 목표이익 = min( 시세의 10%, 3000 )
     * 기준금액(net) = 시세 * 0.95
     *
     * 순이익 = net - bid - bid*(1/k)
     * 순이익 >= 목표이익
     * => net - 목표이익 >= bid*(1 + 1/k)
     * => bid <= (net - 목표이익) * k/(k+1)
     */
    const { sellBid4, sellBid8, sellBid16, targetProfit } = useMemo(() => {
        const net = price * 0.95;

        // 목표이익: 10% (하지만 최대 3,000)
        const target = Math.min(price * 0.10, 3000);

        const calc = (k: number) => {
            const base = net - target;
            if (base <= 0) return 0;
            return base * (k / (k + 1));
        };

        return {
            sellBid4: calc(3),
            sellBid8: calc(7),
            sellBid16: calc(15),
            targetProfit: target,
        };
    }, [price]);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.left = "-9999px";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
        }
    };

    const BidButton = ({
                           label,
                           value,
                       }: {
        label: React.ReactNode;
        value: number;
    }) => (
        <button
            type="button"
            onClick={() => copyToClipboard(plainInt(value))}
            className="text-left p-4 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-emerald-500/30 active:scale-[0.99] transition"
            title="클릭하면 입찰가가 복사됩니다"
        >
            <p className="text-[9px] font-black uppercase text-zinc-600">
                {label}
            </p>
            <p className="text-lg font-black text-emerald-400 mt-1">
                {formatGold(value)}
            </p>
            <p className="mt-2 text-[10px] text-zinc-600 font-semibold">
                클릭하여 복사
            </p>
        </button>
    );


    return (
        <div className="max-w-5xl mx-auto space-y-12 py-10">
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-black italic tracking-tighter">
                    RAID & AUCTION
                </h2>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">
                    효율적인 전리품 분배를 위한 계산 도구
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Auction Calculator Card */}
                <div className="bg-surface p-10 rounded-[3rem] border border-white/5 hover:border-emerald-500/30 transition-all group">
                    <Gavel className="text-emerald-500 mb-6" size={40} />
                    <h3 className="text-2xl font-black mb-4">경매 분배금 계산기</h3>

                    <div className="space-y-4">
                        <div className="bg-zinc-900 p-4 rounded-2xl">
                            <p className="text-[10px] font-black text-zinc-500 uppercase mb-2">
                                아이템 시세 입력
                            </p>

                            <input
                                type="number"
                                min={0}
                                inputMode="numeric"
                                className="bg-transparent w-full text-2xl font-black outline-none"
                                placeholder="0"
                                value={priceInput}
                                onChange={(e) => setPriceInput(e.target.value)}
                            />

                            <div className="mt-2 space-y-1">
                                <p className="text-[10px] text-zinc-500 font-semibold">
                                    수수료(5%) 반영: {(price * 0.95).toLocaleString("ko-KR")} G
                                </p>
                            </div>
                        </div>

                        {/* ✅ 본인이 사용시 섹션 */}
                        <section className="space-y-2">
                            <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">
                                본인이 사용시
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <BidButton
                                    label={
                                        <>
                                            <span className="text-emerald-400">4</span>인 기준 입찰가
                                        </>
                                    }
                                    value={bid4}
                                />

                                <BidButton
                                    label={
                                        <>
                                            <span className="text-sky-400">8</span>인 기준 입찰가
                                        </>
                                    }
                                    value={bid8}
                                />

                                <BidButton
                                    label={
                                        <>
                                            <span className="text-purple-400">16</span>인 기준 입찰가
                                        </>
                                    }
                                    value={bid16}
                                />
                            </div>
                        </section>

                        {/* ✅ 판매시 섹션: +10% (최대 +3,000) 목표 */}
                        <section className="space-y-2">
                            <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">
                                판매시
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <BidButton
                                    label={
                                        <>
                                            <span className="text-emerald-400">4</span>인 기준 입찰가
                                        </>
                                    }
                                    value={bid4}
                                />

                                <BidButton
                                    label={
                                        <>
                                            <span className="text-sky-400">8</span>인 기준 입찰가
                                        </>
                                    }
                                    value={bid8}
                                />

                                <BidButton
                                    label={
                                        <>
                                            <span className="text-purple-400">16</span>인 기준 입찰가
                                        </>
                                    }
                                    value={bid16}
                                />

                            </div>
                        </section>
                    </div>
                </div>

                {/* Raid Rewards Card (Placeholder) */}
                <div className="bg-zinc-900/30 p-10 rounded-[3rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
                    <Trophy className="text-zinc-700 mb-4" size={48} />
                    <h3 className="text-xl font-black text-zinc-500 italic">
                        RAID REWARDS DATABASE
                    </h3>
                    <p className="text-sm text-zinc-600 mt-2 font-medium">
                        관문별 보상 데이터 업데이트 중입니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RaidPage;