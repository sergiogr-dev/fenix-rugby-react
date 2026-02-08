import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card } from '../atoms';

const ContactInfo = ({ contact }) => {
  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold text-cyan-900 mb-6">Información de Contacto</h3>
      <div className="space-y-4">
        <p className="flex items-center gap-4 text-lg text-gray-700">
          <span className="bg-orange-100 p-2 rounded-full text-orange-600">
            <Phone />
          </span>
          {contact.phone}
        </p>
        <p className="flex items-center gap-4 text-lg text-gray-700">
          <span className="bg-orange-100 p-2 rounded-full text-orange-600">
            <Mail />
          </span>
          {contact.email}
        </p>
        <p className="flex items-center gap-4 text-lg text-gray-700">
          <span className="bg-orange-100 p-2 rounded-full text-orange-600">
            <MapPin />
          </span>
          {contact.address}
        </p>
      </div>
    </Card>
  );
};

export default ContactInfo;
