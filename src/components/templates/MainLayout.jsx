import React from 'react';
import { Navbar, Footer } from '../organisms';

const MainLayout = ({ 
  children, 
  activeTab, 
  setActiveTab, 
  isAdmin, 
  setIsAdmin,
  menuOpen,
  setMenuOpen,
  mission
}) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer mission={mission} />
    </div>
  );
};

export default MainLayout;
