import React from 'react';
import { ExternalLink, Bookmark } from 'lucide-react';

export const TabNavigation = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
    const tabs = ['전투', '스킬', '아크 패시브', '내실', '아바타', '통계', '캐릭터', '길드'];
    return (
        <div className="flex gap-1 overflow-x-auto bg-zinc-900/30 p-1.5 rounded-2xl border border-white/5 items-center">
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-xl text-[11px] font-black transition-all whitespace-nowrap ${activeTab === tab ? 'bg-emerald-500 text-black' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                    {tab}
                </button>
            ))}
            <div className="flex-1" />
            <div className="flex gap-2 pr-2">
                <button className="p-2 text-zinc-600 hover:text-zinc-300"><ExternalLink size={16} /></button>
                <button className="p-2 text-zinc-600 hover:text-zinc-300"><Bookmark size={16} /></button>
                <button className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-lg text-[10px] font-black">갱신</button>
            </div>
        </div>
    );
};