import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('venues');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (!token || role !== 'customer') {
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
<div className="flex h-screen bg-cyan-100">
  {/* Mobile sidebar toggle */}
  <button
    className="lg:hidden fixed z-50 bottom-4 right-4 p-2 rounded-full bg-cyan-600 text-white shadow-lg hover:bg-cyan-700 transition-colors"
    onClick={toggleSidebar}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {sidebarOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>

  {/* Sidebar */}
  <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transform fixed lg:relative lg:w-64 w-64 h-full transition-transform duration-300 ease-in-out z-30 bg-cyan-200 shadow-lg`}>
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-cyan-300">
        <h2 className="text-xl font-semibold text-cyan-900">Customer Portal</h2>
      </div>
      
      <nav className="flex-grow py-4">
        <ul className="space-y-2 px-3">
          <li>
            <Link 
              to="venues" 
              onClick={() => setActiveTab('venues')}
              className={`flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeTab === 'venues' ? 'bg-cyan-300 text-cyan-900 font-medium' : 'text-cyan-800 hover:bg-cyan-300/70'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              View Venues
            </Link>
          </li>
          <li>
            <Link 
              to="bookings" 
              onClick={() => setActiveTab('bookings')}
              className={`flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeTab === 'bookings' ? 'bg-cyan-300 text-cyan-900 font-medium' : 'text-cyan-800 hover:bg-cyan-300/70'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Manage Bookings
            </Link>
          </li>
         
<li>
  <Link 
    to="events" 
    onClick={() => setActiveTab('events')}
    className={`flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeTab === 'events' ? 'bg-cyan-300 text-cyan-900 font-medium' : 'text-cyan-800 hover:bg-cyan-300/70'}`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
    Browse Events
  </Link>
</li>
          <li>
            <Link 
              to="profile" 
              onClick={() => setActiveTab('profile')}
              className={`flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-cyan-300 text-cyan-900 font-medium' : 'text-cyan-800 hover:bg-cyan-300/70'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Manage Profile
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-cyan-300 mt-auto">
        <button 
          onClick={handleLogout} 
          className="w-full flex items-center justify-center px-4 py-2 text-sm text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 transition-colors shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  </div>

  {/* Main content */}
  <div className="flex-1 overflow-x-hidden overflow-y-auto bg-cyan-50">
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <Outlet />
    </div>
  </div>
</div>
  );
}

export default CustomerDashboard;