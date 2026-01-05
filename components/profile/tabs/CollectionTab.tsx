import React from 'react';
import { CharacterInfo } from '../../../types.ts';
import { Heart, Settings } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const CollectionTab = ({ character }: { character: CharacterInfo }) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface rounded-[2rem] border border-white/5 p-6 space-y-6">
                <SectionHeader title="성향" icon={Heart} />
                <div className="grid grid-cols-2 gap-4">
                    {['지성', '담력', '매력', '친절'].map((s, i) => (
                        <div key={i} className="p-3 bg-zinc-950 rounded-xl border border-white/5 text-center">
                            <p className="text-[9px] font-black text-zinc-600 uppercase mb-1">{s}</p>
                            <p className="text-xl font-black text-zinc-100">{350 + i * 20}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="lg:col-span-8 bg-surface rounded-[2.5rem] border border-white/5 p-8">
            <SectionHeader title="전체 수집품 현황" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {character.collections.map((c, i) => (
                    <div key={i} className="bg-zinc-950 p-4 rounded-2xl border border-white/5 space-y-3">
                        <div className="flex justify-between items-center text-[10px] font-black">
                            <span className="text-zinc-500 uppercase">{c.name}</span>
                            <span className="text-zinc-100">{c.percent}%</span>
                        </div>
                        <div className="h-1 bg-void rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500" style={{ width: `${c.percent}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);