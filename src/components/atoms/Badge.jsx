import React from 'react';

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-orange-500 text-white",
    secondary: "bg-cyan-700 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    yellow: "bg-yellow-200 text-yellow-900",
    green: "bg-green-200 text-green-900"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
