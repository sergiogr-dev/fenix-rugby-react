import React, { useState } from 'react';
import { Trash2, Edit2, Star } from 'lucide-react';
import { Button, Card, Input, Select, Textarea } from '../components/atoms';

const AdminPage = ({ 
  data, 
  isAdmin, 
  setIsAdmin,
  updateGeneralData,
  updateContactData,
  addHallOfFameEntry,
  deleteHallOfFameEntry,
  savePlayer,
  deletePlayer,
  togglePlayerFeatured,
  addMatch,
  deleteMatch
}) => {
  const [password, setPassword] = useState('');
  const [activeAdminTab, setActiveAdminTab] = useState('general');
  const [newPlayer, setNewPlayer] = useState({ 
    name: '', position: '', category: 'Masculino', age: '', weight: '', 
    height: '', tenure: '', featured: false, selection: [], achievements: [] 
  });
  const [newMatch, setNewMatch] = useState({ 
    rival: '', date: '', location: '', status: 'upcoming', score: '' 
  });
  const [newHallEntry, setNewHallEntry] = useState({ 
    year: '', best7s: '', best15s: '', coach: '', admin: '' 
  });

  const handleLogin = (password) => {
    if (password === 'admin123') setIsAdmin(true);
    else alert("Contraseña incorrecta");
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Card className="p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-cyan-900 mb-6">
            Acceso Administrativo
          </h2>
          <Input 
            type="password" 
            placeholder="Contraseña (admin123)" 
            className="w-full mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => handleLogin(password)} className="w-full">
            Entrar
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Panel de Control</h2>
        <Button onClick={() => setIsAdmin(false)} variant="outline">
          Cerrar Sesión
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 border-b pb-2">
        {['general', 'jugadores', 'partidos'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveAdminTab(tab)}
            className={`px-4 py-2 rounded-t-lg font-semibold ${
              activeAdminTab === tab 
                ? 'bg-cyan-700 text-white' 
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* --- ADMIN GENERAL --- */}
      {activeAdminTab === 'general' && (
        <div className="space-y-8 animate-fadeIn">
          <Card className="p-6">
            <h3 className="font-bold text-xl mb-4 text-orange-600">Banner Principal</h3>
            <div className="grid gap-4">
              <label className="block">
                <span className="text-gray-700 font-bold">Título:</span>
                <Input 
                  className="w-full mt-1" 
                  value={data.general.bannerTitle} 
                  onChange={(e) => updateGeneralData('bannerTitle', e.target.value)} 
                />
              </label>
              <label className="block">
                <span className="text-gray-700 font-bold">Frase:</span>
                <Input 
                  className="w-full mt-1" 
                  value={data.general.bannerSubtitle} 
                  onChange={(e) => updateGeneralData('bannerSubtitle', e.target.value)} 
                />
              </label>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-xl mb-4 text-orange-600">
              Salón de la Fama (Por Años)
            </h3>
            
            <div className="bg-gray-50 p-4 rounded mb-6 border border-gray-200">
              <h4 className="font-bold mb-3 text-sm uppercase text-gray-600">
                Agregar Nuevo Año
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <Input 
                  type="number" 
                  placeholder="Año (2023)" 
                  value={newHallEntry.year} 
                  onChange={e => setNewHallEntry({...newHallEntry, year: e.target.value})} 
                />
                <Input 
                  placeholder="Mejor 7s" 
                  value={newHallEntry.best7s} 
                  onChange={e => setNewHallEntry({...newHallEntry, best7s: e.target.value})} 
                />
                <Input 
                  placeholder="Mejor 15s" 
                  value={newHallEntry.best15s} 
                  onChange={e => setNewHallEntry({...newHallEntry, best15s: e.target.value})} 
                />
                <Input 
                  placeholder="Entrenador" 
                  value={newHallEntry.coach} 
                  onChange={e => setNewHallEntry({...newHallEntry, coach: e.target.value})} 
                />
                <Input 
                  placeholder="Admin" 
                  value={newHallEntry.admin} 
                  onChange={e => setNewHallEntry({...newHallEntry, admin: e.target.value})} 
                />
              </div>
              <Button 
                className="mt-3 w-full md:w-auto" 
                onClick={() => {
                  if (!newHallEntry.year) return alert("El año es requerido");
                  addHallOfFameEntry(newHallEntry);
                  setNewHallEntry({ year: '', best7s: '', best15s: '', coach: '', admin: '' });
                }}
              >
                Agregar Año
              </Button>
            </div>

            <div className="space-y-3">
              {data.hallOfFame.sort((a,b) => b.year - a.year).map(entry => (
                <div 
                  key={entry.id} 
                  className="flex flex-col md:flex-row justify-between items-center bg-white border p-3 rounded shadow-sm"
                >
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-2 w-full text-sm">
                    <span className="font-bold text-orange-600 text-lg">{entry.year}</span>
                    <span>
                      <span className="font-bold text-xs text-gray-400 block">7s</span>
                      {entry.best7s}
                    </span>
                    <span>
                      <span className="font-bold text-xs text-gray-400 block">15s</span>
                      {entry.best15s}
                    </span>
                    <span>
                      <span className="font-bold text-xs text-gray-400 block">Coach</span>
                      {entry.coach}
                    </span>
                    <span>
                      <span className="font-bold text-xs text-gray-400 block">Admin</span>
                      {entry.admin}
                    </span>
                  </div>
                  <button 
                    onClick={() => deleteHallOfFameEntry(entry.id)} 
                    className="text-red-500 hover:text-red-700 ml-4 mt-2 md:mt-0"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-xl mb-4 text-orange-600">Nosotros & Contacto</h3>
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-700 font-bold">Misión:</span>
                <Textarea 
                  rows={4}
                  className="mt-1" 
                  value={data.general.mission} 
                  onChange={(e) => updateGeneralData('mission', e.target.value)} 
                />
              </label>
              <label className="block">
                <span className="text-gray-700 font-bold">Teléfono:</span>
                <Input 
                  className="w-full mt-1" 
                  value={data.contact.phone} 
                  onChange={(e) => updateContactData('phone', e.target.value)} 
                />
              </label>
              <label className="block">
                <span className="text-gray-700 font-bold">Horarios:</span>
                <Input 
                  className="w-full mt-1" 
                  value={data.contact.trainingSchedule} 
                  onChange={(e) => updateContactData('trainingSchedule', e.target.value)} 
                />
              </label>
            </div>
          </Card>
        </div>
      )}

      {/* --- ADMIN JUGADORES --- */}
      {activeAdminTab === 'jugadores' && (
        <div className="space-y-8 animate-fadeIn">
          <Card className="p-6 bg-blue-50 border border-blue-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">
                {newPlayer.id ? 'Editar Jugador' : 'Agregar Nuevo Jugador'}
              </h3>
              {newPlayer.id && (
                <button 
                  onClick={() => setNewPlayer({ 
                    name: '', position: '', category: 'Masculino', age: '', weight: '', 
                    height: '', tenure: '', featured: false, selection: [], achievements: [] 
                  })}
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Cancelar Edición
                </button>
              )}
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <Input 
                placeholder="Nombre" 
                value={newPlayer.name} 
                onChange={e => setNewPlayer({...newPlayer, name: e.target.value})} 
              />
              <Input 
                placeholder="Posición" 
                value={newPlayer.position} 
                onChange={e => setNewPlayer({...newPlayer, position: e.target.value})} 
              />
              <Select 
                value={newPlayer.category} 
                onChange={e => setNewPlayer({...newPlayer, category: e.target.value})}
                options={['Masculino', 'Femenino', 'Juvenil']}
              />
              <Input 
                type="number" 
                placeholder="Edad" 
                value={newPlayer.age} 
                onChange={e => setNewPlayer({...newPlayer, age: e.target.value})} 
              />
              <Input 
                type="number" 
                placeholder="Altura (cm)" 
                value={newPlayer.height} 
                onChange={e => setNewPlayer({...newPlayer, height: e.target.value})} 
              />
              <Input 
                type="number" 
                placeholder="Peso (kg)" 
                value={newPlayer.weight} 
                onChange={e => setNewPlayer({...newPlayer, weight: e.target.value})} 
              />
              <Input 
                placeholder="Antigüedad (ej. 2 años)" 
                value={newPlayer.tenure} 
                onChange={e => setNewPlayer({...newPlayer, tenure: e.target.value})} 
              />
              <div className="flex items-center gap-2 bg-white p-2 rounded border">
                <input 
                  type="checkbox" 
                  checked={newPlayer.featured} 
                  onChange={e => setNewPlayer({...newPlayer, featured: e.target.checked})} 
                />
                <span className="text-sm">¿Destacado?</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2 rounded border col-span-2">
                <span className="text-sm font-bold">Selección:</span>
                <label className="flex items-center gap-1">
                  <input 
                    type="checkbox" 
                    checked={newPlayer.selection.includes("Colombia")} 
                    onChange={e => {
                      const val = "Colombia";
                      setNewPlayer(prev => ({
                        ...prev, 
                        selection: e.target.checked 
                          ? [...prev.selection, val] 
                          : prev.selection.filter(x => x !== val)
                      }));
                    }}
                  /> COL
                </label>
                <label className="flex items-center gap-1">
                  <input 
                    type="checkbox" 
                    checked={newPlayer.selection.includes("Antioquia")} 
                    onChange={e => {
                      const val = "Antioquia";
                      setNewPlayer(prev => ({
                        ...prev, 
                        selection: e.target.checked 
                          ? [...prev.selection, val] 
                          : prev.selection.filter(x => x !== val)
                      }));
                    }}
                  /> ANT
                </label>
              </div>
            </div>
            <Button 
              className="mt-4" 
              onClick={() => {
                if(!newPlayer.name) return alert("Nombre requerido");
                savePlayer(newPlayer);
                setNewPlayer({ 
                  name: '', position: '', category: 'Masculino', age: '', weight: '', 
                  height: '', tenure: '', featured: false, selection: [], achievements: [] 
                });
              }}
            >
              {newPlayer.id ? 'Actualizar Jugador' : 'Guardar Jugador'}
            </Button>
          </Card>

          <div className="bg-white rounded shadow overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Nombre</th>
                  <th className="p-3">Categoría</th>
                  <th className="p-3">Posición</th>
                  <th className="p-3 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.players.map(p => (
                  <tr key={p.id} className="border-t">
                    <td className="p-3">{p.name} {p.featured && '⭐'}</td>
                    <td className="p-3">
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                        {p.category}
                      </span>
                    </td>
                    <td className="p-3">{p.position}</td>
                    <td className="p-3 text-right flex justify-end gap-2">
                      <button 
                        onClick={() => togglePlayerFeatured(p.id)} 
                        className={`${
                          p.featured ? 'text-yellow-500' : 'text-gray-300'
                        } hover:scale-110 transition-transform`} 
                        title={p.featured ? "Quitar destacado" : "Destacar"}
                      >
                        <Star size={18} fill={p.featured ? "currentColor" : "none"}/>
                      </button>
                      <button 
                        onClick={() => {
                          setNewPlayer(p);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }} 
                        className="text-blue-500 hover:text-blue-700" 
                        title="Editar"
                      >
                        <Edit2 size={18}/>
                      </button>
                      <button 
                        onClick={() => deletePlayer(p.id)} 
                        className="text-red-500 hover:text-red-700" 
                        title="Eliminar"
                      >
                        <Trash2 size={18}/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* --- ADMIN PARTIDOS --- */}
      {activeAdminTab === 'partidos' && (
        <div className="space-y-8 animate-fadeIn">
          <Card className="p-6 bg-blue-50 border border-blue-200">
            <h3 className="font-bold text-lg mb-4">Agregar Partido</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <Input 
                placeholder="Rival" 
                value={newMatch.rival} 
                onChange={e => setNewMatch({...newMatch, rival: e.target.value})} 
              />
              <Input 
                type="date" 
                value={newMatch.date} 
                onChange={e => setNewMatch({...newMatch, date: e.target.value})} 
              />
              <Input 
                placeholder="Lugar" 
                value={newMatch.location} 
                onChange={e => setNewMatch({...newMatch, location: e.target.value})} 
              />
              <Select 
                value={newMatch.status} 
                onChange={e => setNewMatch({...newMatch, status: e.target.value})}
                options={[
                  { value: 'upcoming', label: 'Por Jugar' },
                  { value: 'played', label: 'Jugado' }
                ]}
              />
              {newMatch.status === 'played' && (
                <Input 
                  placeholder="Marcador (ej. 24-10)" 
                  value={newMatch.score} 
                  onChange={e => setNewMatch({...newMatch, score: e.target.value})} 
                />
              )}
            </div>
            <Button 
              className="mt-4" 
              onClick={() => {
                if(!newMatch.rival) return alert("Rival requerido");
                addMatch(newMatch);
                setNewMatch({ rival: '', date: '', location: '', status: 'upcoming', score: '' });
              }}
            >
              Guardar Partido
            </Button>
          </Card>

          <div className="bg-white rounded shadow overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Estado</th>
                  <th className="p-3">Rival</th>
                  <th className="p-3">Fecha</th>
                  <th className="p-3">Marcador</th>
                  <th className="p-3 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.matches.map(m => (
                  <tr key={m.id} className="border-t">
                    <td className="p-3">
                      <span className={`text-xs px-2 py-1 rounded text-white ${
                        m.status === 'played' ? 'bg-gray-500' : 'bg-green-500'
                      }`}>
                        {m.status === 'played' ? 'Jugado' : 'Próximo'}
                      </span>
                    </td>
                    <td className="p-3 font-bold">{m.rival}</td>
                    <td className="p-3">{m.date}</td>
                    <td className="p-3">{m.score || '-'}</td>
                    <td className="p-3 text-right">
                      <button 
                        onClick={() => deleteMatch(m.id)} 
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18}/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
