// src/pages/AdminDashboard.jsx
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('venues');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (!token || role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
<div className="flex h-screen bg-cyan-50">
  {/* Sidebar - responsive with toggle functionality */}
  <div className={`${sidebarOpen ? 'w-56 md:w-64' : 'w-16 md:w-20'} bg-cyan-200 text-cyan-800 transition-all duration-300 flex flex-col shadow-lg`}>
    <div className="flex items-center justify-between p-3 md:p-4 border-b border-cyan-300">
      {sidebarOpen ? (
        <h2 className="text-lg md:text-xl font-semibold">Admin Portal</h2>
      ) : (
        <h2 className="text-lg md:text-xl font-semibold">AP</h2>
      )}
      <button 
        onClick={toggleSidebar} 
        className="text-cyan-600 hover:text-cyan-900 focus:outline-none transition-colors"
      >
        {sidebarOpen ? (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        )}
      </button>
    </div>
    
    <ul className="flex-grow py-2 md:py-4">
      <li className={`mb-1 md:mb-2 ${activeTab === 'venues' ? 'bg-cyan-300' : ''}`}>
        <Link 
          to="venues" 
          onClick={() => setActiveTab('venues')} 
          className="flex items-center px-3 md:px-4 py-2 md:py-3 hover:bg-cyan-300 transition-colors rounded-md"
        >
          <svg className="w-5 h-5 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {sidebarOpen && <span className="text-sm md:text-base whitespace-nowrap">Venue Management</span>}
        </Link>
      </li>
      <li className={`mb-1 md:mb-2 ${activeTab === 'events' ? 'bg-cyan-300' : ''}`}>
        <Link 
          to="events" 
          onClick={() => setActiveTab('events')} 
          className="flex items-center px-3 md:px-4 py-2 md:py-3 hover:bg-cyan-300 transition-colors rounded-md"
        >
          <svg className="w-5 h-5 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {sidebarOpen && <span className="text-sm md:text-base whitespace-nowrap">Event Management</span>}
        </Link>
      </li>
      <li className={`mb-1 md:mb-2 ${activeTab === 'vendors' ? 'bg-cyan-300' : ''}`}>
        <Link 
          to="vendors" 
          onClick={() => setActiveTab('vendors')} 
          className="flex items-center px-3 md:px-4 py-2 md:py-3 hover:bg-cyan-300 transition-colors rounded-md"
        >
          <svg className="w-5 h-5 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {sidebarOpen && <span className="text-sm md:text-base whitespace-nowrap">Vendor Management</span>}
        </Link>
      </li>
      <li className={`mb-1 md:mb-2 ${activeTab === 'attendees' ? 'bg-cyan-300' : ''}`}>
        <Link 
          to="attendees" 
          onClick={() => setActiveTab('attendees')} 
          className="flex items-center px-3 md:px-4 py-2 md:py-3 hover:bg-cyan-300 transition-colors rounded-md"
        >
          <svg className="w-5 h-5 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          {sidebarOpen && <span className="text-sm md:text-base whitespace-nowrap">Attendee Management</span>}
        </Link>
      </li>
    </ul>
    
    <div className="p-3 md:p-4 border-t border-cyan-300">
      <button 
        onClick={handleLogout} 
        className="flex items-center w-full px-3 md:px-4 py-2 text-cyan-800 bg-cyan-100 rounded hover:bg-cyan-300 transition-colors"
      >
        <svg className="w-5 h-5 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        {sidebarOpen && <span className="text-sm md:text-base">Logout</span>}
      </button>
    </div>
  </div>

  {/* Main content */}
  <div className="flex-1 overflow-auto">
    <div className="p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-cyan-200">
        <Outlet />
      </div>
    </div>
  </div>
</div>
  );
}

export default AdminDashboard;