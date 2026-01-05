import React from 'react';
import { Coins, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const CharacterDetailTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 주간 수익 정보 */}
        <div className="lg:col-span-4 bg-surface rounded-[2rem] border border-white/5 p-6 space-y-8">
            <SectionHeader title="주간 경제 현황" icon={Coins} />
            <div className="p-8 bg-zinc-950 rounded-3xl border border-white/5 text-center shadow-inner">
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">예상 획득 골드</p>
                <p className="text-4xl font-black text-yellow-500 tracking-tighter">
                    84,500 <span className="text-lg text-zinc-600 ml-1">G</span>
                </p>
            </div>
            <div className="space-y-3">
                {['카멘 (하드)', '에키드나 (하드)', '베히모스'].map((raid) => (
                    <div key={raid} className="flex justify-between items-center p-3 bg-zinc-900/20 rounded-xl">
                        <span className="text-[11px] font-bold text-zinc-300">{raid}</span>
                        <div className="flex items-center gap-1.5 text-emerald-500">
                            <CheckCircle2 size={14} />
                            <span className="text-[10px] font-black uppercase">Clear</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* 평판 및 기타 정보 */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface rounded-[2rem] border border-white/5 p-6">
                <SectionHeader title="특수 관계 (에포나)" icon={ShieldAlert} />
                <div className="h-40 bg-zinc-950/30 rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center text-zinc-600">
                    <p className="text-[10px] font-black uppercase">진행 중인 관계 정보가 없습니다</p>
                </div>
            </div>
            <div className="bg-surface rounded-[2rem] border border-white/5 p-6">
                <SectionHeader title="활동 로그" />
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-3 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5" />
                            <div>
                                <p className="text-[11px] font-bold text-zinc-300">아이템 재련 성공 (+{15+i})</p>
                                <p className="text-[9px] font-black text-zinc-600 uppercase">2026-01-0{i}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);