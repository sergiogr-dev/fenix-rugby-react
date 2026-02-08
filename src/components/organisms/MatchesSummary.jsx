import React from 'react';
import { Calendar, History } from 'lucide-react';
import { Card } from '../atoms';
import { RecentMatchItem, UpcomingMatchItem } from '../molecules';

const MatchesSummary = ({ recentMatches, upcomingMatches }) => {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      <Card className="p-6">
        <h4 className="font-bold text-xl text-cyan-800 mb-4 flex items-center">
          <History className="mr-2"/> Últimos Resultados
        </h4>
        <ul className="space-y-3">
          {recentMatches.map(m => (
            <RecentMatchItem key={m.id} match={m} />
          ))}
        </ul>
      </Card>
      
      <Card className="p-6">
        <h4 className="font-bold text-xl text-cyan-800 mb-4 flex items-center">
          <Calendar className="mr-2"/> Próximos Encuentros
        </h4>
        <ul className="space-y-3">
          {upcomingMatches.map(m => (
            <UpcomingMatchItem key={m.id} match={m} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default MatchesSummary;
