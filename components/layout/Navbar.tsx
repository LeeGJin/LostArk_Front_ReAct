import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Zap, BarChart3, Calculator } from 'lucide-react';

const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-void/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">
            <Link to="/" className="text-2xl font-black italic tracking-tighter text-white">LOAPANG</Link>
            <div className="flex items-center gap-8">
                {[
                    { name: '캐릭터 검색', path: '/profile', icon: User },
                    { name: '시뮬레이터', path: '/simulator', icon: Zap },
                    { name: '레이드 계산기', path: '/raid', icon: Calculator },
                    { name: '통계', path: '#', icon: BarChart3 },
                ].map((item) => (
                    <Link key={item.name} to={item.path} className="flex items-center gap-2 text-xs font-black text-zinc-400 hover:text-white transition-all uppercase tracking-widest">
                        <item.icon size={14} /> {item.name}
                    </Link>
                ))}
            </div>
            <div className="flex items-center gap-4 bg-zinc-900 border border-white/5 px-4 py-2 rounded-xl">
                <Search size={16} className="text-zinc-500" />
                <input className="bg-transparent border-none outline-none text-xs font-bold text-white w-40" placeholder="캐릭터명을 검색하세요" />
            </div>
        </div>
    </nav>
);
export default Navbar;