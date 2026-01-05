import React from 'react';
import { Shield } from 'lucide-react';
import { GearInfo } from '../../../types.ts';
import { QualityCircle } from './QualityCircle';

export const GearCard = ({ item }: { item: GearInfo }) => (
    <div className="bg-zinc-900/40 p-3 rounded-xl border border-white/5 flex items-center justify-between group hover:border-white/10 transition-all">
        <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg ${item.isT4 ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-orange-500/10 border-orange-500/20'} border flex items-center justify-center`}>
                <Shield size={20} className={item.isT4 ? 'text-emerald-400' : 'text-orange-400'} />
            </div>
            <div>
                <p className="text-[11px] font-black text-zinc-200">{item.slot}</p>
                <p className="text-[9px] text-zinc-500 font-bold">+{item.honingLevel} | {item.trans}</p>
            </div>
        </div>
        <QualityCircle quality={item.quality} />
    </div>
);