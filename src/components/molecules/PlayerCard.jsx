import React from 'react';
import { Users, Star, Trophy } from 'lucide-react';
import { Card } from '../atoms';

const PlayerCard = ({ player }) => {
  return (
    <Card className="relative group">
      {/* Header Card */}
      <div className="bg-cyan-900 p-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full border-4 border-white mb-3 flex items-center justify-center text-gray-500">
          <Users size={40} />
        </div>
        <h3 className="text-white font-bold text-xl flex justify-center items-center gap-2">
          {player.name}
          {player.featured && <Star size={18} className="text-yellow-400 fill-current" />}
        </h3>
        <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded mt-2">
          {player.position}
        </span>
      </div>
      
      {/* Body Card */}
      <div className="p-6">
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span>Edad:</span>
            <span className="font-semibold text-gray-800">{player.age} años</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span>Altura:</span>
            <span className="font-semibold text-gray-800">{player.height} cm</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span>Peso:</span>
            <span className="font-semibold text-gray-800">{player.weight} kg</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span>Antigüedad:</span>
            <span className="font-semibold text-gray-800">{player.tenure}</span>
          </div>
        </div>

        {player.achievements.length > 0 && (
          <div className="group relative">
            <button className="w-full bg-gray-100 text-cyan-800 font-bold py-2 rounded text-sm hover:bg-gray-200 transition-colors flex justify-center items-center gap-2">
              <Trophy size={14} /> Ver Logros
            </button>
            <div className="hidden group-hover:block absolute bottom-full left-0 w-full bg-gray-800 text-white text-xs p-2 rounded mb-2 z-10">
              {player.achievements.join(", ")}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default PlayerCard;
