import React, { useState } from 'react';
import { SectionTitle } from '../components/atoms';
import { PlayersGrid } from '../components/organisms';

const TeamPage = ({ data }) => {
  const [category, setCategory] = useState('Masculino');
  const filteredPlayers = data.players.filter(p => p.category === category);

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle>Nuestro Equipo</SectionTitle>
      
      {/* Category Navbar */}
      <div className="flex justify-center mb-12 space-x-4">
        {['Masculino', 'Femenino', 'Juvenil'].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              category === cat 
                ? 'bg-orange-500 text-white shadow-lg scale-105' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <PlayersGrid players={filteredPlayers} />
      
      {filteredPlayers.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No hay jugadores registrados en esta categoría.
        </p>
      )}
    </div>
  );
};

export default TeamPage;
