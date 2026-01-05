import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomePageProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleSearch: (e: React.FormEvent) => void;
}

const HomePage: React.FC<HomePageProps> = ({ searchQuery, setSearchQuery, handleSearch }) => {
    return (
        <motion.div
            key="home"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="flex flex-col items-center justify-center py-20 mx-auto max-w-4xl"
        >


            {/* Search Form: Studio AI High-End Design */}
            <form onSubmit={handleSearch} className="w-full max-w-2xl relative group">
                <div className="
  absolute
  -inset-1
  bg-gradient-to-r from-violet-600 to-indigo-900
  rounded-[2.5rem]
  blur
  opacity-20
  group-hover:opacity-40
  transition
  duration-1000
"></div>

                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="캐릭터명을 입력하세요"
                        className="w-full h-24 px-12 rounded-[2.5rem] bg-white dark:bg-surface border-2 border-slate-200 dark:border-white/10 focus:border-midnight dark:focus:border-white/30 outline-none text-2xl font-black shadow-2xl transition-all dark:text-white placeholder:text-slate-300 dark:placeholder:text-zinc-700"
                    />
                    <button
                        type="submit"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-midnight text-white dark:bg-white dark:text-void rounded-[1.8rem] hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center"
                    >
                        <Search size={32} strokeWidth={3} />
                    </button>
                </div>
            </form>


            {/* Quick Stats Summary (Optional Studio AI Style) */}
            <div className="mt-24 grid grid-cols-3 gap-12 w-full border-t border-slate-100 dark:border-white/5 pt-12">
                {[
                    { label: 'Active Users', value: '12,842' },
                    { label: 'Calculations', value: '859K+' },
                    { label: 'Server Status', value: 'ONLINE' },
                ].map((stat) => (
                    <div key={stat.label} className="text-center">
                        <p className="text-[10px] font-black text-slate-400 dark:text-zinc-600 uppercase tracking-[0.3em] mb-2">{stat.label}</p>
                        <p className="text-xl font-black text-midnight dark:text-white tracking-tight">{stat.value}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default HomePage;