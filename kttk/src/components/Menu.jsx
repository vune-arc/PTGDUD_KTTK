import React from 'react';
import menuData from '../data/menu.json';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <aside className="w-64 bg-white pl-6 pr-6 border-r shadow-lg border-gray-200">
      {/* Logo */}
      <div className="flex items-center bg-white pb-5">
        <Link to="/" className="block">
          <img src="/img/logo.png" alt="Logo" className="w-full" />
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex flex-col space-y-2 text-black">
        {menuData.menu.map((item) => (
          <MenuItem
            key={item.id}
            iconSrc={item.src}
            label={item.menuName}
            to={item.to}
          />
        ))}
      </nav>

      {/* Version card giống ảnh demo */}
      <div className="mt-10 p-4 bg-blue-50 rounded-xl text-center">
        <img
          src="/img/Group.png"
          alt="Update Illustration"
          className="mx-auto h-24 object-contain mb-2"
        />
        <h3 className="font-semibold text-sm">V2.0 is available</h3>
        <button className="mt-2 border border-blue-400 text-blue-500 rounded-md px-3 py-1 text-sm hover:bg-blue-100">
          Try now
        </button>
      </div>
    </aside>
  );
}

export default Menu;
