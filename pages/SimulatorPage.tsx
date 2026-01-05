import React from 'react';
import { Simulator } from '../components/simulator/Simulator';
import { MOCK_CHARACTER } from '../constants';
import { Sparkles } from 'lucide-react';

const SimulatorPage = () => {
    return (
        <div className="space-y-10 animate-in fade-in duration-1000">
            {/* Page Header */}
            <div className="relative p-12 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-[3rem] border border-white/5 overflow-hidden">
                <Sparkles className="absolute right-12 top-12 text-indigo-500/20" size={120} />
                <div className="relative z-10">
                    <h2 className="text-4xl font-black tracking-tighter mb-2">
                        ARK PASSIVE <span className="text-indigo-500">SIMULATOR</span>
                    </h2>
                    <p className="text-zinc-400 font-medium max-w-xl">
                        전투 스탯, 아크 패시브 노드, 보석 및 각인 설정을 자유롭게 변경하여
                        최적의 데미지 기대값과 DPS 사이클을 시뮬레이션 하세요.
                    </p>
                </div>
            </div>

            {/* Simulator Main Component */}
            <Simulator character={MOCK_CHARACTER} />
        </div>
    );
};

export default SimulatorPage;