import React from 'react';

const Select = ({ value, onChange, options, className = "", ...props }) => (
  <select
    value={value}
    onChange={onChange}
    className={`border p-2 rounded ${className}`}
    {...props}
  >
    {options.map((option, index) => (
      <option key={index} value={option.value || option}>
        {option.label || option}
      </option>
    ))}
  </select>
);

export default Select;
