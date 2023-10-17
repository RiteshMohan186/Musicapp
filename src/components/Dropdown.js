import React from 'react';

const DropdownMenu = ({ label, options, selectedValue, handleChange }) => {
  const dropdownStyle = {
    marginBottom: '1px',
    width: '60%',
    display: 'block',
    margin: '0 auto'
  };

  return (
    <div style={dropdownStyle}>
      <label>{label}</label>
      <select value={selectedValue} onChange={handleChange} style={{ width: '100%', padding: '5px', position:'relative', marginTop:'20vh' }}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
