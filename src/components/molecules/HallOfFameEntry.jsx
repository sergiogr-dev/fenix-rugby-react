import React from 'react';

const HallOfFameEntry = ({ entry }) => {
  return (
    <div className="border-b border-cyan-700 pb-6 last:border-0 last:pb-0">
      <h4 className="text-3xl text-orange-500 font-black mb-4">{entry.year}</h4>
      <div className="space-y-3">
        <div>
          <p className="text-cyan-300 text-xs font-bold uppercase tracking-wider">Mejor 7s</p>
          <p className="font-semibold">{entry.best7s}</p>
        </div>
        <div>
          <p className="text-cyan-300 text-xs font-bold uppercase tracking-wider">Mejor 15s</p>
          <p className="font-semibold">{entry.best15s}</p>
        </div>
        <div>
          <p className="text-cyan-300 text-xs font-bold uppercase tracking-wider">Mejor Entrenador</p>
          <p className="font-semibold">{entry.coach}</p>
        </div>
        <div>
          <p className="text-cyan-300 text-xs font-bold uppercase tracking-wider">Mejor Admin</p>
          <p className="font-semibold">{entry.admin}</p>
        </div>
      </div>
    </div>
  );
};

export default HallOfFameEntry;
