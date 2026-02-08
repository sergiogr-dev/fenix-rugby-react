import React from 'react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

export default Card;
