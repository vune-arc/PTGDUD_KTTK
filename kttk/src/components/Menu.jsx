// src/components/Menu.jsx
import React from 'react';
import menuData from '../data/menu.json';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <aside className="w-64 bg-white p-6 border-r shadow-lg border-gray-200">
      <div className="flex items-center mb-8">
        <img src="/img/logo.png" alt="Logo" className="h-6" />
      </div>

      <nav className="flex flex-col space-y-2">
        {menuData.menu.map((item) => (
          <MenuItem
            key={item.id}
            iconSrc={item.src}
            label={item.menuName}
          />
        ))}
      </nav>

      <div className="mt-10 p-4 bg-blue-50 rounded-xl text-center">
        <div className="w-16 h-16 bg-gray-200 mx-auto mb-2 rounded-full" />
        <img src="/img/Group.png" alt="Update" className="mx-auto w-12 h-12" />
      </div>
    </aside>
  );
}

export default Menu;
