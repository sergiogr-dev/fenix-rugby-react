import React from 'react';
import { SectionTitle } from '../components/atoms';
import { UpcomingMatchCard, PlayedMatchCard } from '../components/molecules';

const MatchesPage = ({ data }) => {
  const played = data.matches
    .filter(m => m.status === 'played')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const upcoming = data.matches
    .filter(m => m.status === 'upcoming')
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle>Zona de Partidos</SectionTitle>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">
            Próximos Encuentros
          </h3>
          <div className="space-y-4">
            {upcoming.map(match => (
              <UpcomingMatchCard key={match.id} match={match} />
            ))}
            {upcoming.length === 0 && (
              <p className="text-gray-500 italic">No hay partidos programados.</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-cyan-600 pl-4">
            Resultados Anteriores
          </h3>
          <div className="space-y-4">
            {played.map(match => (
              <PlayedMatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesPage;
