import React from 'react';

export const QualityCircle = ({ quality }: { quality: number }) => {
    const getColor = (q: number) => {
        if (q === 100) return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
        if (q >= 90) return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
        if (q >= 70) return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
        return 'text-green-400 bg-green-400/10 border-green-400/20';
    };
    return (
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-black ${getColor(quality)}`}>
            {quality}
        </div>
    );
};