import React from 'react';
import { Swords } from 'lucide-react';
import { SkillInfo } from '../../../types.ts';

export const SkillTab = ({ skills }: { skills: SkillInfo[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
            <div key={i} className="bg-surface p-6 rounded-[2rem] border border-white/5 space-y-6 group hover:border-white/10 transition-all">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-zinc-900 rounded-xl border border-white/10 flex items-center justify-center relative">
                            <Swords size={24} className="text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                            <div className="absolute -bottom-1 -right-1 bg-zinc-950 px-2 py-0.5 rounded text-[8px] font-black border border-white/10">Lv.{skill.level}</div>
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-zinc-100">{skill.name}</h4>
                            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-tighter">{skill.rune || '룬 미착용'}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-black text-zinc-600 uppercase">점유율</p>
                        <p className="text-lg font-black text-zinc-100 italic">{skill.damageContribution}%</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {skill.tripods.map((tp, ti) => (
                        <div key={ti} className={`p-2 rounded-lg border text-center transition-all ${skill.activeTripodIndices.includes(ti) ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-zinc-900/50 border-white/5 text-zinc-700 opacity-40'}`}>
                            <p className="text-[9px] font-black uppercase truncate">{tp}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);