import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ mission }) => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 border-t-4 border-orange-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-black uppercase mb-4 tracking-widest">Fénix Rugby Club</h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">{mission}</p>
        <div className="flex justify-center space-x-6 mb-8">
          <span className="hover:text-orange-500 cursor-pointer"><Mail /></span>
          <span className="hover:text-orange-500 cursor-pointer"><Phone /></span>
          <span className="hover:text-orange-500 cursor-pointer"><MapPin /></span>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Fénix RC - Medellín, Colombia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
