import React from 'react';
 
 const Content = () => {
   return (
     <main className="flex-1 p-6 bg-gray-100">
       {/* Overview Cards */}
       <div className="grid grid-cols-3 gap-6 mb-6">
         overview
       </div>
 
       {/* Detailed Report */}
       <div className="flex justify-between items-center mb-4">
         Detailed report
       </div>
 
       <div className="overflow-auto rounded-xl border bg-white">
         <table className="min-w-full text-sm">
           table
         </table>
       </div>
     </main>
   );
 };
 
 export default Content;