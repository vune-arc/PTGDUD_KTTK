import React from 'react';
import Menu from './Menu';
import Header from './Header';
import Contents from './Contents';
function MainLayout() {
    return (
        <div className="min-h-screen flex bg-gray-100">       
        
          <Menu />
        
  
        <div className="flex-1 ">
          <Header />
          <Contents />
        </div>
      </div>
    );
  }
  export default MainLayout;    
  