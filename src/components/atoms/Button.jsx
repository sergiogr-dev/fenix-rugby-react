import React from 'react';

const Button = ({ children, onClick, variant = "primary", className = "", type = "button" }) => {
  const baseStyle = "px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-cyan-700 text-white hover:bg-cyan-800",
    outline: "border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-50"
  };
  
  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
