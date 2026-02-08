import React from 'react';
import { Trophy } from 'lucide-react';
import { HallOfFameEntry } from '../molecules';

const HallOfFameSection = ({ hallOfFame }) => {
  const sortedHallOfFame = [...hallOfFame].sort((a, b) => b.year - a.year);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-cyan-900 text-white p-6 rounded-xl shadow-2xl sticky top-24 border-t-4 border-orange-500 max-h-[80vh] overflow-y-auto custom-scrollbar">
      <h3 className="text-2xl font-bold mb-6 flex items-center sticky top-0 bg-gray-900 py-2 z-10">
        <Trophy className="mr-2 text-orange-400" /> Salón de la Fama
      </h3>
      
      <div className="space-y-8">
        {sortedHallOfFame.map((entry) => (
          <HallOfFameEntry key={entry.id} entry={entry} />
        ))}
        {sortedHallOfFame.length === 0 && (
          <p className="text-gray-400 italic text-sm">
            Aún no hay registros en el salón de la fama.
          </p>
        )}
      </div>
    </div>
  );
};

export default HallOfFameSection;
