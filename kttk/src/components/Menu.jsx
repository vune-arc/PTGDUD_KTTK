
import React from 'react';
import menuData from '../data/menu.json';
import MenuItem from './MenuItem';
import { useNavigate,Link } from 'react-router-dom';
function Menu() {
  return (
    <aside className="w-64 bg-white pl-6 pr-6 border-r shadow-lg border-gray-200">
      <div className="flex items-center bg-white pb-5">
        <Link to="/" className="block">
          <img src="/img/logo.png" alt="Logo" className="w-full" />
        </Link>
      </div>

      <nav className="flex flex-col space-y-2 text-black ">
        {menuData.menu.map((item) => (
          <MenuItem
          key={item.id}
          iconSrc={item.src}
          label={item.menuName}
          to={item.to}
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
