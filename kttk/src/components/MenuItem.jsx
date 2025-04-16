
import React from 'react';

function MenuItem({ iconSrc, label }) {
  return (
    <>
      <img src={iconSrc} alt={label} className="w-5 h-5 opacity-80" />
      <span className=''>{label}</span>
      </>
    
  );
}

export default MenuItem;
