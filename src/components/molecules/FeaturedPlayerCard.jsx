import React from 'react';
import { Star } from 'lucide-react';

const FeaturedPlayerCard = ({ player }) => {
  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:border-orange-300 transition-all">
      <div className="absolute top-2 right-2 text-yellow-400">
        <Star fill="currentColor" />
      </div>
      <h4 className="font-bold text-lg text-cyan-900">{player.name}</h4>
      <p className="text-sm text-orange-600 font-semibold">{player.position}</p>
      <p className="text-xs text-gray-500 mt-2">
        {player.achievements[0] || "Jugador Destacado"}
      </p>
    </div>
  );
};

export default FeaturedPlayerCard;
