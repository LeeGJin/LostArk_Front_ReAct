import React from 'react';
import { CharacterCard } from '../components/profile/CharacterCard';
import { MOCK_CHARACTER } from '../constants';
import { Info } from 'lucide-react';

const ProfilePage = () => {
    // 실제 구현 시: const { name } = useParams(); 를 통해 데이터를 fetch 합니다.

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-between px-4">
                <div>
                    <h2 className="text-2xl font-black tracking-tight">CHARACTER PROFILE</h2>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-1">실시간 캐릭터 정보 데이터</p>
                </div>
                <div className="flex items-center gap-2 bg-zinc-900/50 px-4 py-2 rounded-xl border border-white/5">
                    <Info size={14} className="text-zinc-500" />
                    <span className="text-[10px] font-black text-zinc-400 uppercase">최근 업데이트: 방금 전</span>
                </div>
            </div>

            <CharacterCard character={MOCK_CHARACTER} />
        </div>
    );
};

export default ProfilePage;