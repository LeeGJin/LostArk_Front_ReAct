import React from 'react';
import { Github, Twitter, MessageSquare } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mt-32 border-t border-slate-200 dark:border-white/5 pt-24 pb-16 bg-white dark:bg-void relative z-10">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 items-start">

                    {/* Brand Section */}
                    <div className="space-y-6 lg:col-span-1">
                        <h2 className="text-4xl font-black tracking-tighter text-midnight dark:text-white italic">LOAPANG</h2>
                        <p className="text-slate-400 dark:text-zinc-500 font-bold leading-relaxed text-xs uppercase tracking-wider">
                            High-efficiency search and <br /> combat simulator for Arkasians.
                        </p>
                        <div className="flex gap-4">
                            <Github size={18} className="text-slate-300 dark:text-zinc-700 hover:text-midnight dark:hover:text-white cursor-pointer transition-colors" />
                            <Twitter size={18} className="text-slate-300 dark:text-zinc-700 hover:text-midnight dark:hover:text-white cursor-pointer transition-colors" />
                            <MessageSquare size={18} className="text-slate-300 dark:text-zinc-700 hover:text-midnight dark:hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-black text-midnight dark:text-white uppercase tracking-[0.3em]">Utility</h4>
                            <ul className="space-y-3 text-sm font-bold text-slate-400 dark:text-zinc-600">
                                <li className="hover:text-midnight dark:hover:text-zinc-400 cursor-pointer transition-colors">프로필 검색</li>
                                <li className="hover:text-midnight dark:hover:text-zinc-400 cursor-pointer transition-colors">데미지 시뮬레이터</li>
                                <li className="hover:text-midnight dark:hover:text-zinc-400 cursor-pointer transition-colors">주간 골드 계산기</li>
                            </ul>
                        </div>
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-black text-midnight dark:text-white uppercase tracking-[0.3em]">Support</h4>
                            <ul className="space-y-3 text-sm font-bold text-slate-400 dark:text-zinc-600">
                                <li className="hover:text-midnight dark:hover:text-zinc-400 cursor-pointer transition-colors">이용약관</li>
                                <li className="hover:text-midnight dark:hover:text-zinc-400 cursor-pointer transition-colors">개인정보처리방침</li>
                                <li className="hover:text-midnight dark:hover:text-zinc-400 cursor-pointer transition-colors">패치노트</li>
                            </ul>
                        </div>
                    </div>

                    {/* Discord Banner Section */}
                    <div className="lg:col-span-1 lg:text-right flex flex-col lg:items-end">
                        <h4 className="text-[10px] font-black text-midnight dark:text-white uppercase tracking-[0.3em] mb-6">Community</h4>
                        <a href="#" className="group flex items-center gap-4 bg-slate-50 dark:bg-surface px-6 py-4 rounded-[2rem] border border-slate-100 dark:border-white/5 hover:border-[#5865F2] transition-all shadow-sm">
                            <div className="text-left">
                                <span className="block text-[8px] font-black text-slate-300 dark:text-zinc-600 uppercase tracking-widest">Join the</span>
                                <span className="text-sm font-black text-slate-500 dark:text-zinc-400 group-hover:text-[#5865F2] transition-colors">DISCORD</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#5865F2]/10 flex items-center justify-center group-hover:bg-[#5865F2] transition-colors">
                                <MessageSquare size={18} className="text-[#5865F2] group-hover:text-white" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-10 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[9px] font-black text-slate-300 dark:text-zinc-700 uppercase tracking-[0.5em]">
                        © 2026 LOAPANG. Built with Studio AI Intelligence.
                    </p>
                    <p className="text-[9px] font-bold text-slate-300 dark:text-zinc-800 italic max-w-xs text-center md:text-right">
                        LOAPANG is a fan-made project and is not affiliated with Smilegate RPG.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;