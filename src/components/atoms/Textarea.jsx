import React from 'react';

const Textarea = ({ 
  placeholder, 
  value, 
  onChange, 
  className = "",
  rows = 3,
  ...props 
}) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    rows={rows}
    className={`w-full border p-2 rounded ${className}`}
    {...props}
  />
);

export default Textarea;
