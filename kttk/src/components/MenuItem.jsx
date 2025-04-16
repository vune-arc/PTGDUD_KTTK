// src/components/MenuItem.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItem({ iconSrc, label }) {
  return (
    
    //   className={({ isActive }) =>
    //     `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors cursor-pointer ${
    //       isActive
    //         ? 'bg-pink-600 text-white font-semibold'
    //         : 'text-gray-700 hover:bg-pink-100'
    //     }`
    //   }
    // >
    <>
      <img src={iconSrc} alt={label} className="w-5 h-5 opacity-80" />
      <span className=''>{label}</span>
      </>
    
  );
}

export default MenuItem;
