import React from 'react';
import { PlayerCard } from '../molecules';

const PlayersGrid = ({ players }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {players.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default PlayersGrid;
