import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { SidebarAds } from './components/layout/SidebarAds';
import { FloatingBanner } from './components/layout/FloatingBanner';
import HomePage from './pages/HomePage';
import { CharacterCard } from './components/profile/CharacterCard';
import { Simulator } from './components/simulator/Simulator';

import { RAIDS, MOCK_CHARACTER } from './constants';
import { PageType, CharacterInfo } from './types';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activePage, setActivePage] = useState<PageType>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [characterData, setCharacterData] = useState<CharacterInfo>(MOCK_CHARACTER);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#09090b';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
    }
  }, [theme]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setActivePage('profile');
      setLoading(false);
    }, 800);
  };

  return (
      // font-size 기본값을 살짝 높여 전체적인 스케일을 키움
      <div className={`min-h-screen transition-colors duration-500 font-sans text-[16px] ${theme === 'dark' ? 'dark text-white' : 'text-slate-900'}`}>

        <Header
            theme={theme}
            setTheme={setTheme}
            activePage={activePage}
            setActivePage={setActivePage}
            setIsMenuOpen={setIsMenuOpen}
        />

        {/* 컨테이너 폭 확대 및 상단 여백 증대 */}
        <div className="pt-44 pb-64 px-12 mx-auto flex gap-20 transition-all duration-500 max-w-[1920px]">

          {/* 사이드바 너비 확보 */}
          <div className="hidden 2xl:block w-72 shrink-0">
            <SidebarAds side="left" />
          </div>

          <main className="flex-1 w-full min-h-[80vh] relative z-10">
            <AnimatePresence mode="wait">

              {activePage === 'home' && (
                  <HomePage
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      handleSearch={handleSearch}
                  />
              )}

              {activePage === 'profile' && (
                  <motion.div
                      key="profile"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-20" // 섹션 간 간격 확대
                  >
                    <div className="flex justify-between items-end border-b-2 border-slate-200 dark:border-white/10 pb-12">
                      <div className="space-y-4">
                        <p className="text-indigo-500 font-black tracking-[0.3em] uppercase text-sm">Arkesia Profile</p>
                        <h2 className="text-7xl font-black tracking-tighter italic leading-none">CHARACTER</h2>
                      </div>
                      {/* 버튼 크기 대폭 확대 */}
                      <button
                          onClick={() => setActivePage('simulator')}
                          className="px-12 py-6 bg-midnight dark:bg-white text-white dark:text-void rounded-[2rem] font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                      >
                        Open Simulator
                      </button>
                    </div>

                    {/* 카드 컴포넌트 자체의 scale도 CSS로 조정 가능 */}
                    <div className="transform scale-105 origin-top">
                      <CharacterCard character={characterData} />
                    </div>
                  </motion.div>
              )}

              {activePage === 'simulator' && (
                  <motion.div
                      key="simulator"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-16"
                  >
                    <div className="space-y-4">
                      <p className="text-indigo-500 font-black tracking-[0.3em] uppercase text-sm">Simulation Engine v2.0</p>
                      <h2 className="text-7xl font-black tracking-tighter leading-none">시뮬레이터</h2>
                    </div>
                    <Simulator character={characterData} />
                  </motion.div>
              )}

            </AnimatePresence>
          </main>

          <div className="hidden 2xl:block w-72 shrink-0">
            <SidebarAds side="right" />
          </div>
        </div>

        <Footer />
        <FloatingBanner />

        {/* 모바일 메뉴 모달 크기 및 폰트 업스케일 */}
        <AnimatePresence>
          {isMenuOpen && (
              <div className="fixed inset-0 z-[100]">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />
                <motion.div initial={{ x: -400 }} animate={{ x: 0 }} exit={{ x: -400 }} className="absolute inset-y-0 left-0 w-[450px] bg-white dark:bg-[#0c0c0e] p-20 border-r border-white/5 shadow-2xl">
                  <h2 className="text-4xl font-black italic mb-20 tracking-tighter">LOAPANG</h2>
                  <div className="flex flex-col gap-10">
                    {['home', 'raid', 'simulator', 'auction'].map(id => (
                        <button
                            key={id}
                            onClick={() => { setActivePage(id as any); setIsMenuOpen(false); }}
                            className="text-left text-4xl font-black uppercase tracking-tighter text-slate-300 dark:text-zinc-700 hover:text-indigo-500 dark:hover:text-white transition-all hover:translate-x-4"
                        >
                          {id}
                        </button>
                    ))}
                  </div>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
      </div>
  );
}