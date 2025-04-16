import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import Header from './Header';

function MainLayout() {
    return (
        <div className="w-full min-h-screen flex justify-center overflow-x-hidden bg-gray-50 pt-0 mt-2 ml-20">
            <div className="flex w-[1470px] h-screen overflow-hidden shadow-lg border border-gray-200 rounded-xl pt-0 mt-0">
                <Menu />
                <div className="flex-1">
                    <Header />
                    <Outlet /> {/* nơi các page sẽ được render */}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
