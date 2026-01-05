import React from 'react';
import { CharacterInfo } from '../../../types.ts';
import { SectionHeader } from '../ui/SectionHeader';
import { GearCard } from '../ui/GearCard';
import { Shield, Zap, Info } from 'lucide-react';

export const CombatTab = ({ character }: { character: CharacterInfo }) => {
    return (
        <div className="space-y-6">
            {/* 상단 3열 레이아웃: 장비/보석, 특성/각인, 랭킹/내실 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* 왼쪽: 장비 및 보석 요약 */}
                <div className="lg:col-span-4 bg-surface rounded-[2rem] border border-white/5 p-6 space-y-6">
                    <SectionHeader title="장비" />
                    <div className="grid grid-cols-2 gap-3">
                        {character.gear.map((item, idx) => (
                            <GearCard key={idx} item={item} />
                        ))}
                    </div>

                    <div className="pt-4 border-t border-white/5">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[11px] font-black text-zinc-100 uppercase">보석</span>
                            <span className="text-[10px] text-zinc-500 font-bold">평균 6.7</span>
                        </div>
                        <div className="grid grid-cols-6 gap-2">
                            {/* 보석 요약 아이콘 (숫자형) */}
                            {[7, 7, 7, 10, 7, 7, 8, 8, 8, 8, 8].map((lv, i) => (
                                <div key={i} className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-black border ${lv >= 9 ? 'bg-red-500/20 border-red-500/40 text-red-400' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}`}>
                                    {lv}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 중앙: 특성 및 각인 */}
                <div className="lg:col-span-4 bg-surface rounded-[2rem] border border-white/5 p-6 space-y-8">
                    <div>
                        <SectionHeader title="특성" />
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 text-center">
                                <p className="text-[10px] font-black text-emerald-400 mb-1">특화</p>
                                <p className="text-2xl font-black text-white italic">{character.innerStats.specialization}</p>
                            </div>
                            <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 text-center">
                                <p className="text-[10px] font-black text-orange-400 mb-1">치명</p>
                                <p className="text-2xl font-black text-white italic">{character.innerStats.crit}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <SectionHeader title="각인" />
                        <div className="space-y-2">
                            {character.engravings.map((eng, i) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-zinc-900/40 rounded-xl border border-white/5">
                                    <span className="text-[11px] font-bold text-zinc-200">{eng.name}</span>
                                    <span className="text-[10px] font-black text-zinc-500">Lv.{eng.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 오른쪽: 랭킹 및 내실 요약 */}
                <div className="lg:col-span-4 bg-surface rounded-[2rem] border border-white/5 p-6 space-y-6">
                    <SectionHeader title="랭킹 & 내실" />
                    <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 mb-4">
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] font-black text-zinc-500 uppercase">전체 랭킹</span>
                            <span className="text-[13px] font-black text-white italic"># {character.ranking?.overall.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {character.collections.slice(0, 4).map((c, i) => (
                            <div key={i} className="space-y-1.5">
                                <div className="flex justify-between text-[10px] font-black uppercase">
                                    <span className="text-zinc-500">{c.name}</span>
                                    <span className="text-zinc-300">{c.percent}%</span>
                                </div>
                                <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-yellow-500/80" style={{ width: `${c.percent}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 하단 2열 레이아웃: 스킬&룬, 보석 세부 정보 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 스킬 & 룬 세팅 */}
                <div className="bg-surface rounded-[2.5rem] border border-white/5 p-8">
                    <SectionHeader title="스킬 & 룬 세팅" icon={Shield} />
                    <div className="space-y-3">
                        {character.skills.map((skill, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-zinc-950 rounded-2xl border border-white/5 group hover:border-white/10 transition-all">
                                <div>
                                    <h4 className="text-[13px] font-black text-white">{skill.name}</h4>
                                    <p className="text-[10px] font-bold text-zinc-600 mt-0.5">{skill.tripods.join(' · ')}</p>
                                </div>
                                <div className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-lg text-[9px] font-black text-zinc-400 uppercase">
                                    {skill.rune || '룬 미장착'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 보석 세부 정보 */}
                <div className="bg-surface rounded-[2.5rem] border border-white/5 p-8">
                    <SectionHeader title="보석 세부 정보" icon={Info} />
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { lv: 7, type: '멸화', skill: '버스트' },
                            { lv: 7, type: '멸화', skill: '데스 슬래쉬' },
                            { lv: 7, type: '멸화', skill: '블리츠 러시' },
                            { lv: 10, type: '멸화', skill: '블레이드 댄스' },
                            { lv: 7, type: '홍염', skill: '버스트' },
                            { lv: 7, type: '홍염', skill: '데스 슬래쉬' },
                            { lv: 8, type: '홍염', skill: '블리츠 러시' },
                            { lv: 8, type: '홍염', skill: '블레이드 댄스' },
                        ].map((gem, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-zinc-950 rounded-xl border border-white/5">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-black border ${gem.type === '멸화' ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-blue-500/10 border-blue-500/20 text-blue-500'}`}>
                                    {gem.lv}
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-zinc-600 uppercase">{gem.type}</p>
                                    <p className="text-[11px] font-black text-zinc-200">{gem.skill}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};