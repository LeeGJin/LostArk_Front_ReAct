import React from 'react';
import { TrendingUp, Activity } from 'lucide-react';
import { CharacterInfo } from '../../../types.ts';
import { SectionHeader } from '../ui/SectionHeader';

export const StatsTab = ({ character }: { character: CharacterInfo }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 아이템 레벨 기록 */}
        <div className="bg-surface rounded-[2.5rem] border border-white/5 p-8 space-y-8">
            <SectionHeader title="아이템 레벨 기록" icon={TrendingUp} />
            <div className="h-48 flex items-end gap-1.5 px-2 border-b border-white/10 pb-2">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 bg-emerald-500/20 border-t border-emerald-500/40 rounded-t-sm transition-all hover:bg-emerald-500/40"
                        style={{ height: `${30 + (i * 5)}%` }}
                    />
                ))}
            </div>
            <p className="text-[10px] font-black text-zinc-500 text-center uppercase tracking-widest">최근 12주간 레벨 변동</p>
        </div>

        {/* 전투력 기록 */}
        <div className="bg-surface rounded-[2.5rem] border border-white/5 p-8 space-y-8">
            <SectionHeader title="전투력 추이" icon={Activity} />
            <div className="h-48 flex items-end gap-1.5 px-2 border-b border-white/10 pb-2">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 bg-red-500/20 border-t border-red-500/40 rounded-t-sm transition-all hover:bg-red-500/40"
                        style={{ height: `${40 + (Math.sin(i) * 20 + 20)}%` }}
                    />
                ))}
            </div>
            <p className="text-[10px] font-black text-zinc-500 text-center uppercase tracking-widest">주간 전투력 시뮬레이션 기록</p>
        </div>
    </div>
);