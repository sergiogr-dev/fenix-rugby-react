import React from 'react';

const Input = ({ 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  className = "",
  ...props 
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`border p-2 rounded ${className}`}
    {...props}
  />
);

export default Input;
