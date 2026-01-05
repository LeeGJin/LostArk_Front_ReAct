import React from 'react';
import { CharacterInfo } from '../../types.ts';

export const CharacterHeader = ({ character }: { character: CharacterInfo }) => (
    <div className="relative bg-zinc-900/20 rounded-[2.5rem] p-8 border border-white/5 overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-full border-4 border-zinc-800 p-1 bg-zinc-900 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${character.name}`} className="w-full h-full object-cover" alt="pfp" />
                </div>
                <div className="text-center md:text-left space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <span className="text-[10px] font-black bg-zinc-800 text-zinc-500 px-2.5 py-1 rounded uppercase">{character.server}</span>
                        <span className="text-[10px] font-black bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded border border-indigo-500/20 uppercase">{character.class}</span>
                    </div>
                    <h1 className="text-4xl font-black text-white tracking-tighter italic">{character.name}</h1>
                    <p className="text-zinc-500 text-sm font-bold">"{character.title}"</p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: '아이템', val: character.itemLevel.toFixed(1) },
                    { label: '전투력', val: character.combatPower.toLocaleString(), color: 'text-red-400' },
                    { label: '전투', val: character.battleLevel },
                    { label: '원정대', val: character.expeditionLevel },
                ].map((stat, i) => (
                    <div key={i} className="text-center md:text-right">
                        <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className={`text-xl font-black ${stat.color || 'text-white'}`}>{stat.val}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);