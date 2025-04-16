// src/components/MenuItem.jsx
import React from 'react';

function MenuItem({ iconSrc, label }) {
  return (
    
    <>
      <img src={iconSrc} alt={label} className="w-5 h-5 opacity-80" />
      <span>{label}</span>
      </>
    
  );
}

export default MenuItem;
