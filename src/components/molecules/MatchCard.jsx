import React from 'react';
import { MapPin, Shield } from 'lucide-react';
import { Card } from '../atoms';

export const UpcomingMatchCard = ({ match }) => {
  return (
    <Card className="p-6 flex justify-between items-center border border-gray-200">
      <div>
        <p className="text-sm text-orange-600 font-bold uppercase mb-1">{match.date}</p>
        <h4 className="text-xl font-bold text-cyan-900">vs {match.rival}</h4>
        <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
          <MapPin size={12}/> {match.location}
        </p>
      </div>
      <div className="bg-gray-100 p-3 rounded-full">
        <Shield className="text-gray-400" />
      </div>
    </Card>
  );
};

export const PlayedMatchCard = ({ match }) => {
  return (
    <Card className="p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500 text-xs">{match.date} | {match.location}</span>
        <span className="bg-cyan-900 text-white text-xs px-2 py-1 rounded">Finalizado</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-center">
          <span className="block font-bold text-gray-700">Fénix RC</span>
        </div>
        <div className="text-2xl font-black text-cyan-800 bg-white px-4 py-1 rounded shadow-sm">
          {match.score}
        </div>
        <div className="text-center">
          <span className="block font-bold text-gray-700">{match.rival}</span>
        </div>
      </div>
    </Card>
  );
};

export const RecentMatchItem = ({ match }) => {
  return (
    <li className="flex justify-between items-center border-b pb-2">
      <span className="font-semibold text-gray-700">vs {match.rival}</span>
      <span className="bg-gray-200 px-3 py-1 rounded-full font-mono font-bold">
        {match.score}
      </span>
    </li>
  );
};

export const UpcomingMatchItem = ({ match }) => {
  return (
    <li className="flex flex-col border-b pb-2 border-orange-100">
      <div className="flex justify-between font-semibold text-gray-800">
        <span>vs {match.rival}</span>
        <span className="text-orange-600 text-sm">{match.date}</span>
      </div>
      <span className="text-xs text-gray-500">{match.location}</span>
    </li>
  );
};
