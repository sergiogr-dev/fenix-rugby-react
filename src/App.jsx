import React, { useState } from 'react';
import { INITIAL_DATA } from './data/initialData';
import { MainLayout } from './components/templates';
import { HomePage, AboutPage, TeamPage, MatchesPage, JoinPage, AdminPage } from './pages';

export default function FenixRugbyApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  const [menuOpen, setMenuOpen] = useState(false);

  // --- LOGICA DE ADMINISTRACION ---
  const updateGeneralData = (field, value) => {
    setData(prev => ({ ...prev, general: { ...prev.general, [field]: value } }));
  };

  const updateContactData = (field, value) => {
    setData(prev => ({ ...prev, contact: { ...prev.contact, [field]: value } }));
  };
  
  const addHallOfFameEntry = (entry) => {
    setData(prev => ({
      ...prev,
      hallOfFame: [...prev.hallOfFame, { ...entry, id: Date.now() }]
    }));
  };

  const deleteHallOfFameEntry = (id) => {
    setData(prev => ({
      ...prev,
      hallOfFame: prev.hallOfFame.filter(h => h.id !== id)
    }));
  };

  const savePlayer = (playerData) => {
    if (playerData.id) {
      setData(prev => ({
        ...prev,
        players: prev.players.map(p => p.id === playerData.id ? playerData : p)
      }));
    } else {
      setData(prev => ({ 
        ...prev, 
        players: [...prev.players, { ...playerData, id: Date.now() }] 
      }));
    }
  };
  
  const deletePlayer = (id) => {
    setData(prev => ({...prev, players: prev.players.filter(p => p.id !== id)}));
  };

  const togglePlayerFeatured = (id) => {
    setData(prev => ({
      ...prev,
      players: prev.players.map(p => p.id === id ? { ...p, featured: !p.featured } : p)
    }));
  };

  const addMatch = (match) => {
    setData(prev => ({ 
      ...prev, 
      matches: [...prev.matches, { ...match, id: Date.now() }] 
    }));
  };
  
  const deleteMatch = (id) => {
    setData(prev => ({...prev, matches: prev.matches.filter(m => m.id !== id)}));
  };

  // --- RENDER ---
  const renderPage = () => {
    switch(activeTab) {
      case 'home':
        return <HomePage data={data} setActiveTab={setActiveTab} />;
      case 'nosotros':
        return <AboutPage data={data} />;
      case 'equipo':
        return <TeamPage data={data} />;
      case 'partidos':
        return <MatchesPage data={data} />;
      case 'join':
        return <JoinPage data={data} />;
      case 'admin':
        return (
          <AdminPage 
            data={data}
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
            updateGeneralData={updateGeneralData}
            updateContactData={updateContactData}
            addHallOfFameEntry={addHallOfFameEntry}
            deleteHallOfFameEntry={deleteHallOfFameEntry}
            savePlayer={savePlayer}
            deletePlayer={deletePlayer}
            togglePlayerFeatured={togglePlayerFeatured}
            addMatch={addMatch}
            deleteMatch={deleteMatch}
          />
        );
      default:
        return <HomePage data={data} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <MainLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      isAdmin={isAdmin}
      setIsAdmin={setIsAdmin}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      mission={data.general.mission}
    >
      {renderPage()}
    </MainLayout>
  );
}