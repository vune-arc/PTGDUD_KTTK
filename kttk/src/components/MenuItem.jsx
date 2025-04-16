import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItem({ iconSrc, label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors no-underline ${
          isActive
            ? 'bg-pink-600 text-white font-semibold'
            : 'text-black font-semibold hover:bg-gray-100'
        }`
      }
    >
      <img src={iconSrc} alt={label} className="w-5 h-5" />
      <span>{label}</span>
    </NavLink>
  );
}

export default MenuItem;
