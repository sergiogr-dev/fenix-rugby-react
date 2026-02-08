import React from 'react';
import { Target, Star } from 'lucide-react';
import { SectionTitle, Card } from '../components/atoms';

const AboutPage = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SectionTitle>Sobre Nosotros</SectionTitle>
      
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-cyan-50 border-t-4 border-cyan-600">
            <h3 className="text-xl font-bold mb-4 flex items-center text-cyan-800">
              <Target className="mr-2"/> Misión
            </h3>
            <p className="text-gray-700 leading-relaxed">{data.general.mission}</p>
          </Card>
          <Card className="p-8 bg-orange-50 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold mb-4 flex items-center text-orange-800">
              <Star className="mr-2"/> Visión
            </h3>
            <p className="text-gray-700 leading-relaxed">{data.general.vision}</p>
          </Card>
        </div>

        <section>
          <h3 className="text-2xl font-bold text-cyan-900 mb-4">Nuestra Historia</h3>
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gray-300">
            <p className="text-gray-700 leading-relaxed text-lg">{data.general.history}</p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-cyan-900 mb-4">Logros Históricos</h3>
          <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white p-8 rounded-xl shadow-lg">
            <p className="font-medium text-lg text-center md:text-left">
              {data.general.achievements}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
