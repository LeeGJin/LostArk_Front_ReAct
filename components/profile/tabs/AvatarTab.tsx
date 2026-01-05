import React from 'react';
import { Palette, Shirt } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const AvatarTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 아바타 프리뷰 영역 */}
        <div className="lg:col-span-5 bg-surface rounded-[2.5rem] border border-white/5 p-8 flex items-center justify-center min-h-[500px]">
            <div className="w-full h-full bg-zinc-950/50 rounded-3xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                <Palette size={64} className="text-zinc-800 transition-transform group-hover:scale-110 duration-500" />
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mt-4">Avatar Rendering Area</p>
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
            </div>
        </div>

        {/* 아바타 슬롯 리스트 */}
        <div className="lg:col-span-7 space-y-6">
            <div className="bg-surface rounded-[2rem] border border-white/5 p-6">
                <SectionHeader title="장착 아바타" icon={Shirt} />
                <div className="space-y-3">
                    {['무기', '머리', '상의', '하의', '얼굴 1', '얼굴 2'].map((slot) => (
                        <div key={slot} className="flex justify-between items-center p-4 bg-zinc-900/40 rounded-xl border border-white/5 hover:border-white/10 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center text-[10px] font-black text-zinc-500">
                                    {slot[0]}
                                </div>
                                <span className="text-[11px] font-black text-zinc-400 uppercase">{slot}</span>
                            </div>
                            <span className="text-[11px] font-black text-indigo-400">전설의 고결한 아바타</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);