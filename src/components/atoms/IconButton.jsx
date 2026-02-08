import React from 'react';

const IconButton = ({ 
  icon: Icon, 
  onClick, 
  className = "", 
  title,
  variant = "default" 
}) => {
  const variants = {
    default: "text-gray-500 hover:text-gray-700",
    danger: "text-red-500 hover:text-red-700",
    primary: "text-blue-500 hover:text-blue-700",
    warning: "text-yellow-500 hover:text-yellow-700"
  };

  return (
    <button
      onClick={onClick}
      className={`transition-all ${variants[variant]} ${className}`}
      title={title}
      type="button"
    >
      <Icon size={18} />
    </button>
  );
};

export default IconButton;
