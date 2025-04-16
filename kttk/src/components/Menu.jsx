import React from 'react';
 
 const Menu = () => {
   return (
     <aside className="w-64 bg-white p-6 border-r shadow-lg border-gray-200">
       <div className="flex items-center mb-8">
     
         <h1 className="text-xl font-semibold ml-2">Logo</h1>
       </div>
       <nav className="flex flex-col space-y-4">
         <div className="text-lg font-semibold text-gray-700">Dashboard</div>
       </nav>
       <div className="mt-10 p-4  text-center">
         <div className="w-16 h-16 -200 mx-auto mb-2 "></div>
                img
       </div>
     </aside>
   );
 };
 
 export default Menu;