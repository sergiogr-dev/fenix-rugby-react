import React from 'react';
import { Card } from '../atoms';

const TrainingSchedule = ({ schedule, location }) => {
  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold text-cyan-900 mb-4">Horarios de Entrenamiento</h3>
      <p className="text-lg text-gray-700 whitespace-pre-line">{schedule}</p>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="font-bold text-orange-600 mb-1">Lugar:</p>
        <p className="text-gray-700">{location}</p>
      </div>
    </Card>
  );
};

export default TrainingSchedule;
