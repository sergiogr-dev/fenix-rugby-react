import React from 'react';
import { SectionTitle } from '../components/atoms';
import { ContactInfo, TrainingSchedule } from '../components/molecules';

const JoinPage = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle>Únete a la Manada</SectionTitle>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <ContactInfo contact={data.contact} />
          <TrainingSchedule 
            schedule={data.contact.trainingSchedule}
            location={data.contact.trainingLocation}
          />
        </div>

        <div className="h-full min-h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-lg border-4 border-white">
          <iframe 
            src={data.contact.mapUrl} 
            width="100%" 
            height="100%" 
            style={{border:0, minHeight: '500px'}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Ubicacion"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
