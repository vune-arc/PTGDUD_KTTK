import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const pageTitles = {
    '/': 'Dashboard',
    '/dashboard': 'Dashboard',
    '/notifications': 'Notifications',
    '/help': 'Help',
    '/projects': 'Projects',
    '/teams': 'Teams',
    '/analytics': 'Analytics',
    '/messages': 'Messages',
    '/integrations': 'Integrations',
  };
  

  const currentTitle = pageTitles[location.pathname] || 'Page';

  return (
    <div className="header flex justify-between bg-white pl-5 shadow-md">
      <div className="flex items-center justify-between px-4 py-2 w-full">
        <h2 className="font-bold text-pink-400 text-3xl">{currentTitle}</h2>

        <div className="flex items-center gap-x-4">
          <div className="relative w-[200px]">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-50 pr-8 pl-2 w-full rounded-lg h-[32px] outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 hover:opacity-80">
              <img src="./img/Search.png" className="h-[16px]" alt="Search" />
            </button>
          </div>

          <button onClick={() => navigate('/notifications')}>
            <img src="./img/Bell 1.png" className="h-[20px]" alt="Notifications" />
          </button>

          <button onClick={() => navigate('/help')}>
            <img src="./img/Question 1.png" className="h-[20px]" alt="Help" />
          </button>

          <button>
            <img src="./img/Avatar (1).png" className="h-[32px] rounded-full" alt="Profile" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
