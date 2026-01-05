import React from 'react';
import { CharacterInfo } from '../../../types.ts';
import { Crown } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const GuildTab = ({ character }: { character: CharacterInfo }) => (
    <div className="space-y-6">
        <div className="bg-surface rounded-[2.5rem] border border-white/5 p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-indigo-500/10 rounded-full border border-indigo-500/20 flex items-center justify-center">
                <Crown size={40} className="text-indigo-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-zinc-100 italic">{character.guildName || '길드 정보 없음'}</h3>
                <p className="text-xs font-bold text-zinc-500 mt-1 uppercase tracking-widest">Level 25 | Member 50/50</p>
            </div>
            <button className="px-6 py-3 bg-white text-black text-[11px] font-black rounded-xl hover:bg-zinc-200 transition-all">길드 상세 보기</button>
        </div>
        <div className="bg-surface rounded-[2.5rem] border border-white/5 p-8">
            <SectionHeader title="최근 활동 길드원" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Array.from({length: 10}).map((_, i) => (
                    <div key={i} className="p-4 bg-zinc-950 rounded-2xl border border-white/5 text-center hover:border-indigo-500/30 transition-all cursor-pointer">
                        <div className="w-10 h-10 bg-zinc-800 rounded-full mx-auto mb-2" />
                        <p className="text-[11px] font-black text-zinc-300 truncate">길드원_{i+1}</p>
                        <p className="text-[9px] font-black text-zinc-600">Lv.1680.0</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);