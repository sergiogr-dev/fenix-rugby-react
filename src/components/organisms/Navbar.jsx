import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ 
  activeTab, 
  setActiveTab, 
  isAdmin, 
  setIsAdmin, 
  menuOpen, 
  setMenuOpen 
}) => {
  const handleNavigation = (itemName) => {
    const lowerItem = itemName.toLowerCase();
    if (lowerItem === 'inicio') return 'home';
    if (lowerItem === 'únete') return 'join';
    return lowerItem.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  return (
    <nav className="bg-cyan-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
            <span className="font-bold text-xl italic">F</span>
          </div>
          <span className="text-2xl font-black tracking-wider uppercase">Fénix RC</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold">
          {['Inicio', 'Nosotros', 'Equipo', 'Partidos', 'Únete'].map((item) => {
            const targetTab = handleNavigation(item);
            return (
              <button 
                key={item}
                onClick={() => setActiveTab(targetTab)}
                className={`hover:text-orange-400 transition-colors ${
                  activeTab === targetTab ? 'text-orange-500 border-b-2 border-orange-500' : ''
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Admin Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => isAdmin ? setIsAdmin(false) : setActiveTab('admin')} 
            className={`text-sm px-3 py-1 rounded border ${
              isAdmin ? 'bg-red-500 border-red-500' : 'border-gray-400 hover:border-white'
            }`}
          >
            {isAdmin ? 'Salir Admin' : 'Admin'}
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cyan-800 p-4 space-y-2">
          {['Inicio', 'Nosotros', 'Equipo', 'Partidos', 'Únete'].map((item) => (
            <button 
              key={item}
              onClick={() => {
                setActiveTab(handleNavigation(item));
                setMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:bg-cyan-700 px-2 rounded"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
