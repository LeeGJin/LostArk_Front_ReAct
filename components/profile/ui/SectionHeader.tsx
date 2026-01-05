import React from 'react';

export const SectionHeader = ({ title, icon: Icon, right }: { title: string, icon?: any, right?: React.ReactNode }) => (
    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
        <div className="flex items-center gap-2">
            {Icon && <Icon size={16} className="text-zinc-500" />}
            <h3 className="text-xs font-black text-zinc-100 uppercase tracking-widest">{title}</h3>
        </div>
        {right}
    </div>
);