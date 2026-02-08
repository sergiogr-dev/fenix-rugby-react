import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Banner, HallOfFameSection, MatchesSummary, FeaturedPlayers } from '../components/organisms';
import { Button } from '../components/atoms';
import { SelectionBadge } from '../components/molecules';

const HomePage = ({ data, setActiveTab }) => {
  const recentMatches = data.matches.filter(m => m.status === 'played').slice(-3);
  const upcomingMatches = data.matches.filter(m => m.status === 'upcoming').slice(0, 3);
  const featuredPlayers = data.players.filter(p => p.featured);
  const colombiaPlayers = data.players.filter(p => p.selection.includes('Colombia'));
  const antioquiaPlayers = data.players.filter(p => p.selection.includes('Antioquia'));

  return (
    <div className="animate-fadeIn">
      <Banner 
        title={data.general.bannerTitle}
        subtitle={data.general.bannerSubtitle}
        onAction={() => setActiveTab('join')}
        actionText="Entrena con Nosotros"
      />

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Hall of Fame (Sidebar Izquierda) */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <HallOfFameSection hallOfFame={data.hallOfFame} />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 order-1 lg:order-2 space-y-12">
          {/* Info Entrenamiento */}
          <section className="bg-white p-8 rounded-xl shadow-md border-l-8 border-cyan-600">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-cyan-900 mb-2">¿Quieres jugar?</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <MapPin size={18} className="text-orange-500"/> 
                  {data.contact.trainingLocation}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <Calendar size={18} className="text-orange-500"/> 
                  {data.contact.trainingSchedule.split('|')[0]}...
                </p>
              </div>
              <Button onClick={() => setActiveTab('join')} variant="outline">
                Ver Horarios Completos
              </Button>
            </div>
          </section>

          {/* Partidos */}
          <MatchesSummary 
            recentMatches={recentMatches} 
            upcomingMatches={upcomingMatches} 
          />

          {/* Jugadores Destacados */}
          <FeaturedPlayers players={featuredPlayers} />

          {/* Selecciones */}
          <section className="grid md:grid-cols-2 gap-8">
            <SelectionBadge 
              players={colombiaPlayers}
              title="Selección Colombia"
              variant="yellow"
            />
            <SelectionBadge 
              players={antioquiaPlayers}
              title="Selección Antioquia"
              variant="green"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
