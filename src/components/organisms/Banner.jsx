import React from 'react';
import { Button } from '../atoms';

const Banner = ({ title, subtitle, onAction, actionText }) => {
  return (
    <div className="relative bg-cyan-900 text-white py-20 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase drop-shadow-lg text-orange-500">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 italic">"{subtitle}"</p>
        <Button onClick={onAction} variant="primary" className="text-lg px-8 py-3">
          {actionText}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
