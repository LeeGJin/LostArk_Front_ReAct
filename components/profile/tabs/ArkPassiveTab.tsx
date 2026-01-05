import React, { useState } from 'react';

// --- 데이터 정의 ---
const ARK_DATA = {
    진화: [
        // 1단계
        [{ name: '치명', lv: '10/30', pt: '1P', active: true }, { name: '특화', lv: '30/30', pt: '1P', active: true }, { name: '제압', lv: '0/30', pt: '1P' }, { name: '신속', lv: '0/30', pt: '1P' }, { name: '인내', lv: '0/30', pt: '1P' }, { name: '숙련', lv: '0/30', pt: '1P' }],
        // 2단계 (비어있음)
        [],
        // 3단계
        [null, null, null, { name: '한계 돌파', lv: '3/3', pt: '10P', active: true }, { name: '최적화 훈련', lv: '0/2', pt: '10P' }, { name: '축복의 여신', lv: '0/3', pt: '10P' }],
        // 4단계
        [null, null, { name: '일격', lv: '2/2', pt: '10P', active: true, type: 'cyan' }, null, null, null],
        // 5단계
        [null, null, null, { name: '입식 타격가', lv: '2/2', pt: '15P', active: true }]
    ],
    깨달음: [
        // 1단계
        [null, null, { name: '버스트 강화', lv: '1/1', pt: '24P', active: true }],
        // 2단계 (비어있음)
        [],
        // 3단계
        [null, null, { name: '오브 압축', lv: '3/3', pt: '8P', active: true }],
        // 4단계 (비어있음)
        [],
        // 5단계
        [null, { name: '에너지 강화', lv: '2/5', pt: '2P', active: true, type: 'cyan' }, { name: '검기 압축', lv: '3/3', pt: '8P', active: true, type: 'cyan' }]
    ],
    도약: [
        // 1단계
        [{ name: '초월적인 힘', lv: '4/5', pt: '4P', active: true }, { name: '충전된 분노', lv: '0/5', pt: '4P' }, { name: '각성 증폭기', lv: '0/3', pt: '2P' }, { name: '풀려난 힘', lv: '5/5', pt: '4P', active: true }, { name: '잠재력 해방', lv: '0/5', pt: '4P' }, { name: '즉각적인 주문', lv: '2/3', pt: '2P', active: true, type: 'cyan' }],
        // 2단계 (비어있음)
        [],
        // 3단계
        [null, null, { name: '악몽의 춤사위', lv: '3/1', pt: '10P', active: true }]
    ]
};

// --- 서브 컴포넌트 ---
const Node = ({ data }: { data: any }) => {
    if (!data) return <div className="w-14 h-20" />; // 빈 공간 처리

    return (
        <div className={`flex flex-col items-center gap-2 transition-all ${data.active ? 'opacity-100' : 'opacity-20'}`}>
            <div className="relative">
                <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center
          ${data.active
                    ? (data.type === 'cyan' ? 'bg-cyan-500/80 border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.6)]' : 'bg-orange-500/80 border-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.6)]')
                    : 'bg-zinc-900 border-zinc-800'}`}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                        <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" />
                    </svg>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-950 border border-white/10 px-1.5 py-0.5 rounded text-[7px] font-black text-zinc-400">
                        {data.pt}
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="text-[9px] font-black text-zinc-500 leading-none mb-1">Lv. {data.lv}</p>
                <p className={`text-[11px] font-black tracking-tighter whitespace-nowrap ${data.active ? 'text-zinc-100' : 'text-zinc-600'}`}>
                    {data.name}
                </p>
            </div>
        </div>
    );
};

// --- 메인 컴포넌트 ---
export const ArkPassiveTab = () => {
    const [tab, setTab] = useState<'진화' | '깨달음' | '도약'>('진화');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 보드 영역 */}
            <div className="lg:col-span-9 bg-zinc-900/20 rounded-[2.5rem] border border-white/5 p-10 relative min-h-[700px]">
                {/* 탭 버튼 */}
                <div className="flex bg-zinc-950 p-1 rounded-xl border border-white/5 w-fit mb-16">
                    {(['진화', '깨달음', '도약'] as const).map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`px-8 py-2.5 rounded-lg text-xs font-black transition-all ${tab === t ? 'bg-zinc-800 text-white' : 'text-zinc-600'}`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    {/* 단계 표시줄 */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800/50 flex flex-col justify-between py-6">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="relative -left-3 w-6 h-6 bg-zinc-900 border border-white/10 rounded flex items-center justify-center text-[10px] font-black text-zinc-600">
                                {n}
                            </div>
                        ))}
                    </div>

                    {/* 노드 그리드 */}
                    <div className="pl-12 space-y-12">
                        {ARK_DATA[tab].map((row, rIdx) => (
                            <div key={rIdx} className="grid grid-cols-6 gap-4 min-h-[80px]">
                                {row.map((node, nIdx) => (
                                    <Node key={nIdx} data={node} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 포인트 요약 영역 */}
            <div className="lg:col-span-3">
                <div className="bg-zinc-900/40 rounded-[2rem] border border-white/5 p-8 space-y-8">
                    <h3 className="text-sm font-black text-white uppercase tracking-widest">포인트</h3>
                    <div className="space-y-8">
                        {[{ l: '진화', p: 77 }, { l: '깨달음', p: 84 }, { l: '도약', p: 70 }].map((item) => (
                            <div key={item.l} className="space-y-3">
                                <div className="flex justify-between text-[11px] font-black uppercase">
                                    <span className="text-zinc-500">{item.l}</span>
                                    <span className="text-zinc-100">{item.p}%</span>
                                </div>
                                <div className="h-1 bg-zinc-950 rounded-full overflow-hidden shadow-inner">
                                    <div className="h-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" style={{ width: `${item.p}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};