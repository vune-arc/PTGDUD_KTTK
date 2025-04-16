import React from 'react';
import Menu from './Menu';
import Header from './Header';
import Contents from './Contents';
function MainLayout() {
    return (
        <div className="min-h-screen grid grid-cols-12">
        {/* Sidebar */}
        <div className="col-span-3">
          <Menu />
        </div>
  
        {/* Main Content */}
        <div className="col-span-9">
          <Header />
          <Contents />
        </div>
      </div>
    );
  }
  export default MainLayout;    
  