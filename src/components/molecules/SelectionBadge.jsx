import React from 'react';
import { Medal } from 'lucide-react';
import { Badge } from '../atoms';

const SelectionBadge = ({ players, title, variant = "yellow" }) => {
  const variants = {
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      title: "text-yellow-800",
      badge: "yellow"
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      title: "text-green-800",
      badge: "green"
    }
  };

  const style = variants[variant];

  return (
    <div className={`${style.bg} p-6 rounded-xl border ${style.border}`}>
      <h4 className={`font-bold text-lg ${style.title} mb-3 flex items-center`}>
        <Medal className="mr-2"/> {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {players.length > 0 ? (
          players.map(p => (
            <Badge key={p.id} variant={style.badge}>
              {p.name}
            </Badge>
          ))
        ) : (
          <p className="text-sm text-gray-500">Representando nuestra región.</p>
        )}
      </div>
    </div>
  );
};

export default SelectionBadge;
