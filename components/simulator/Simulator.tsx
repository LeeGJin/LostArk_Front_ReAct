import React, { useState } from 'react';
import { CharacterInfo } from '../../types.ts';
import {
    Plus, Minus, BarChart3, Zap, Shield, Sword, Activity,
    Heart, Sparkles, Trophy, Wand2, Star, Flame, Gem,
    RefreshCw, User, Shirt, ChevronDown, Swords
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Internal Helper Components (시인성 최적화 버전) ---

const EditableField = ({ label, value, onChange, type = "number", suffix = "" }: any) => (
    <div className="flex justify-between items-center border-b border-zinc-900/50 pb-3 group">
        <span className="text-[13px] text-zinc-500 font-bold uppercase tracking-wider">{label}</span>
        <div className="flex items-center gap-2">
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="bg-transparent text-right text-lg font-black text-zinc-100 outline-none w-24 focus:text-indigo-400 transition-colors"
            />
            {suffix && <span className="text-[11px] font-bold text-zinc-600">{suffix}</span>}
        </div>
    </div>
);

const SectionCard = ({ title, icon: Icon, children, accent = "text-indigo-400" }: any) => (
    <div className="bg-surface/50 p-6 rounded-[2rem] border border-zinc-900/50 relative group shadow-lg">
        <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg bg-zinc-900 border border-zinc-800 ${accent}`}>
                <Icon size={18} />
            </div>
            <h4 className="text-[15px] font-black text-zinc-100 uppercase tracking-widest">{title}</h4>
        </div>
        <div className="space-y-4">{children}</div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, right, accentColor = "text-zinc-500" }: { title: string, icon?: any, right?: React.ReactNode, accentColor?: string }) => (
    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
        <div className="flex items-center gap-2.5">
            {Icon && <Icon size={16} className={accentColor} />}
            <h3 className="text-[12px] font-black text-zinc-400 uppercase tracking-widest">{title}</h3>
        </div>
        {right}
    </div>
);

// --- Main Simulator Component ---

export const Simulator: React.FC<{ character: CharacterInfo }> = ({ character: initialCharacter }) => {
    const [subTab, setSubTab] = useState<'info' | 'synergy' | 'results'>('info');
    const [char, setChar] = useState<CharacterInfo>(initialCharacter);
    const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);

    const updateChar = (path: string, value: any) => {
        const newChar = { ...char };
        const keys = path.split('.');
        let current: any = newChar;
        for (let i = 0; i < keys.length - 1; i++) current = current[keys[i]];
        current[keys[keys.length - 1]] = value;
        setChar(newChar);
    };

    const selectedSkill = char.skills[selectedSkillIndex];

    return (
        <div className="space-y-8">
            {/* Simulation Top Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex bg-zinc-900 p-1.5 rounded-xl border border-zinc-800">
                    {['데미지 비교', 'DPS 비교', '버프 비교'].map((tab, idx) => (
                        <button key={tab} className={`px-6 py-2.5 rounded-lg text-[13px] font-black tracking-widest transition-all ${idx === 0 ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}>
                            {tab}
                        </button>
                    ))}
                </div>
                <button className="h-12 px-8 bg-indigo-600 text-white rounded-xl text-sm font-black hover:bg-indigo-500 transition-all shadow-lg flex items-center gap-2">
                    <RefreshCw size={18} /> 시뮬레이션 실행
                </button>
            </div>

            {/* Sub-Tabs Nav */}
            <div className="flex gap-10 border-b border-zinc-900 px-4">
                {[
                    { id: 'info', label: '캐릭터 정보 세팅', icon: User },
                    { id: 'synergy', label: '시너지/버프 설정', icon: Zap },
                    { id: 'results', label: '데미지 분석 결과', icon: BarChart3 },
                ].map(tab => (
                    <button
                        key={tab.id} onClick={() => setSubTab(tab.id as any)}
                        className={`flex items-center gap-2.5 pb-5 text-[15px] font-black transition-all relative ${subTab === tab.id ? 'text-indigo-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                        <tab.icon size={18} />
                        {tab.label}
                        {subTab === tab.id && <motion.div layoutId="simNav" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-indigo-500" />}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={subTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="pt-6 pb-20">

                    {subTab === 'info' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                            {/* Column 1: Core & Passives */}
                            <div className="space-y-8">
                                <SectionCard title="캐릭터 내실 / 펫" icon={Heart} accent="text-red-400">
                                    <div className="space-y-3">
                                        <EditableField label="아이템 레벨" value={char.itemLevel} onChange={(v: any) => updateChar('itemLevel', parseFloat(v))} />
                                        <EditableField label="전투 레벨" value={char.battleLevel} onChange={(v: any) => updateChar('battleLevel', parseInt(v))} />
                                        <EditableField label="원정대 레벨" value={char.expeditionLevel} onChange={(v: any) => updateChar('expeditionLevel', parseInt(v))} />
                                        <div className="pt-6">
                                            <SectionHeader title="기본 스탯" icon={Activity} />
                                            <EditableField label="치명" value={char.innerStats.crit} onChange={(v: any) => updateChar('innerStats.crit', parseInt(v))} />
                                            <EditableField label="특화" value={char.innerStats.specialization} onChange={(v: any) => updateChar('innerStats.specialization', parseInt(v))} />
                                            <EditableField label="신속" value={char.innerStats.swiftness} onChange={(v: any) => updateChar('innerStats.swiftness', parseInt(v))} />
                                        </div>
                                    </div>
                                </SectionCard>

                                <SectionCard title="진화 (Evolution)" icon={Sparkles} accent="text-amber-400">
                                    <div className="grid grid-cols-5 gap-3">
                                        {Array.from({length: 20}).map((_, i) => (
                                            <div key={i} className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${i < 5 ? 'bg-amber-500/10 border-amber-500/30' : 'bg-zinc-900 border-zinc-800 opacity-30'}`}>
                                                <Star size={16} className={i < 5 ? 'text-amber-400' : 'text-zinc-700'} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-zinc-900/50">
                                        <EditableField label="진화 잔여 포인트" value={char.arkPassivePoints.evolution} onChange={(v: any) => updateChar('arkPassivePoints.evolution', parseInt(v))} />
                                    </div>
                                </SectionCard>
                            </div>

                            {/* Column 2: Gear & Engravings */}
                            <div className="space-y-8">
                                <SectionCard title="장비 (Gear)" icon={Shield} accent="text-orange-400">
                                    <div className="space-y-3">
                                        {char.gear.map((item, idx) => (
                                            <div key={idx} className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/50 flex items-center justify-between group">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-9 h-9 bg-zinc-800 rounded-lg flex items-center justify-center text-[13px] font-black text-white border border-zinc-700">7</div>
                                                    <span className="text-[15px] font-bold text-zinc-300">{item.slot}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-lg font-black text-orange-400">{item.quality}</span>
                                                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter">{item.trans}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </SectionCard>

                                <SectionCard title="각인 (Engravings)" icon={Sparkles} accent="text-indigo-400">
                                    <div className="space-y-2.5">
                                        {char.engravings.map((eng, idx) => (
                                            <div key={idx} className="flex items-center justify-between border-b border-zinc-900/50 pb-2.5">
                                                <span className="text-[15px] font-bold text-zinc-300">{eng.name}</span>
                                                <span className="text-[13px] font-black text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-md border border-indigo-400/20">Lv. {eng.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </SectionCard>
                            </div>

                            {/* Column 3: Gems & Skills */}
                            <div className="space-y-8">
                                <SectionCard title="보석 (Gems)" icon={Gem} accent="text-emerald-400">
                                    <div className="grid grid-cols-4 gap-3">
                                        {char.gems.map((gem, idx) => (
                                            <div key={idx} className={`aspect-square rounded-xl flex items-center justify-center text-base font-black text-white border-2 shadow-inner ${gem.type === 'Damage' ? 'bg-red-500/10 border-red-500/20' : 'bg-blue-500/10 border-blue-500/20'}`}>
                                                {gem.level}
                                            </div>
                                        ))}
                                    </div>
                                </SectionCard>

                                <SectionCard title="스킬 (Skills)" icon={Swords} accent="text-zinc-100">
                                    <div className="space-y-2">
                                        {char.skills.map((skill, idx) => (
                                            <div key={idx} className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${selectedSkillIndex === idx ? 'bg-indigo-500/10 border border-indigo-500/20' : 'hover:bg-zinc-800/40 border border-transparent'}`} onClick={() => setSelectedSkillIndex(idx)}>
                                                <span className={`text-[14px] font-bold ${selectedSkillIndex === idx ? 'text-indigo-400' : 'text-zinc-400'}`}>{skill.name}</span>
                                                <span className="text-[11px] font-bold text-zinc-600">Lv.{skill.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </SectionCard>

                                <SectionCard title="아바타 (Avatars)" icon={Shirt} accent="text-pink-400">
                                    <div className="space-y-3">
                                        <EditableField label="무기 아바타" value={1.5} suffix="%" />
                                        <EditableField label="상의/하의" value={2.0} suffix="%" />
                                    </div>
                                </SectionCard>
                            </div>
                        </div>
                    )}

                    {/* Results View */}
                    {subTab === 'results' && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-surface rounded-[2.5rem] border border-zinc-900 p-10 min-h-[700px]">
                            <div className="lg:col-span-5 space-y-8 border-r border-zinc-900/50 pr-10">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-black text-zinc-100 italic">SKILLS</h3>
                                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase">
                                        Sort <ChevronDown size={14} />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {char.skills.map((skill, i) => (
                                        <div key={i} onClick={() => setSelectedSkillIndex(i)} className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${selectedSkillIndex === i ? 'bg-zinc-800 border-indigo-500/30' : 'bg-zinc-950/20 border-zinc-900'}`}>
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800">
                                                    <Sword size={20} className={selectedSkillIndex === i ? 'text-indigo-400' : 'text-zinc-700'} />
                                                </div>
                                                <div>
                                                    <p className="text-[15px] font-bold text-zinc-100">{skill.name}</p>
                                                    <div className="h-1.5 w-24 bg-zinc-900 rounded-full mt-1.5 overflow-hidden">
                                                        <div className="h-full bg-indigo-500" style={{ width: `${skill.damageContribution}%` }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-lg font-black text-white italic">{(skill.damageContribution * 0.25).toFixed(1)}억</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-7 flex flex-col items-center justify-center text-center space-y-10">
                                <div className="space-y-4">
                                    <div className="w-20 h-20 bg-indigo-500/10 rounded-3xl border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto">
                                        <Zap size={36} />
                                    </div>
                                    <h3 className="text-4xl font-black text-zinc-100 italic">{selectedSkill.name}</h3>
                                    <div className="pt-4">
                                        <p className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-1">Expected Damage</p>
                                        <p className="text-7xl font-black text-white italic tracking-tighter">
                                            {(selectedSkill.damageContribution * 0.25).toFixed(2)}<span className="text-2xl text-zinc-700 ml-2">억</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 w-full max-w-lg bg-zinc-950/40 p-8 rounded-[2rem] border border-zinc-900/50">
                                    <div className="space-y-2">
                                        <p className="text-blue-400 text-xs font-black uppercase">CASE 1 (Crit)</p>
                                        <p className="text-3xl font-black text-white">9.6억</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-pink-400 text-xs font-black uppercase">CASE 2 (Normal)</p>
                                        <p className="text-3xl font-black text-white">2.8억</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};