import React from 'react';

const SectionTitle = ({ children, color = "text-cyan-800" }) => (
  <h2 className={`text-3xl font-bold uppercase mb-6 border-b-4 border-orange-500 inline-block ${color}`}>
    {children}
  </h2>
);

export default SectionTitle;
