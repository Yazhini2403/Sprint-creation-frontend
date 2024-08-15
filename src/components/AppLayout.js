import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AppLayout = ({ children }) => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <header className="py-4 px-6 bg-blue-500 flex justify-between items-center">
                <div className="flex-1 flex justify-center">
                    <h1 className="text-3xl font-bold text-white">SPRINT BOARD</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="bg-red-500 text-white hover:bg-red-700 px-4 py-2 rounded">
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                        Logout
                    </button>
                </div>
            </header>
        
            <div className='w-screen flex container mx-auto' style={{ height: 'calc(100vh - 56px)' }}>
                <div className="w-[220px]">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div className="flex">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppLayout;