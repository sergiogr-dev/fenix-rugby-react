import React from 'react';
import { SectionTitle } from '../atoms';
import { FeaturedPlayerCard } from '../molecules';

const FeaturedPlayers = ({ players }) => {
  return (
    <section>
      <SectionTitle>Figuras del Club</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players.map(player => (
          <FeaturedPlayerCard key={player.id} player={player} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlayers;
