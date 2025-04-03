import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';

function Navbar() {
  const isLoggedIn = !!localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const [isToggled, setIsToggled] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/login';
  };

  return (
<nav className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-24 bg-white shadow-md relative">
  <div className="flex items-center">
    <div className="mr-2 text-cyan-200">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
      </svg>
    </div>
    <Link to="/" className="text-2xl font-bold text-cyan-600">EventZen</Link>
  </div>
  
  <div className="hidden md:flex items-center space-x-6">
    <Link to="/" className="text-gray-700 hover:text-cyan-600 transition-colors duration-300">Home</Link>
    
    {isLoggedIn ? (
      <>
        {role === 'admin' ? (
          <Link to="/admin" className="text-cyan-700 hover:text-cyan-800 transition-colors duration-300">Admin Dashboard</Link>
        ) : (
          <Link to="/customer" className="text-gray-700 hover:text-cyan-600 transition-colors duration-300">My Events</Link>
        )}
        
        <div className="relative group">
          <button className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 transition-colors duration-300">
            <FaUser className="inline" /> <span>Account</span>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <Link to={role === 'admin' ? "/admin" : "/customer/profile"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Profile</Link>
            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Logout</button>
          </div>
        </div>
      </>
    ) : (
      <>
        <Link to="/login" className="text-gray-700 hover:text-cyan-600 transition-colors duration-300">Login</Link>
        <Link to="/register" className="py-2 px-4 bg-cyan-200 text-cyan-700 rounded-full hover:bg-cyan-300 transition-colors duration-300">Register</Link>
      </>
    )}
  </div>
  
  {/* Mobile menu button */}
  <div className="md:hidden flex items-center">
    <button 
      className="mobile-menu-button text-gray-700 hover:text-cyan-600 focus:outline-none" 
      onClick={() => setIsToggled(prev => !prev)}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>
  
  {/* Mobile menu */}
  {isToggled && (
    <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10 flex flex-col items-start">
      <Link to="/" className="block w-full py-4 px-6 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 border-b border-gray-100">Home</Link>
      
      {isLoggedIn ? (
        <>
          {role === 'admin' ? (
            <Link to="/admin" className="block w-full py-4 px-6 text-cyan-700 hover:bg-cyan-50 hover:text-cyan-800 border-b border-gray-100">Admin Dashboard</Link>
          ) : (
            <Link to="/customer" className="block w-full py-4 px-6 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 border-b border-gray-100">My Events</Link>
          )}
          <Link to={role === 'admin' ? "/admin" : "/customer/profile"} className="block w-full py-4 px-6 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 border-b border-gray-100">Profile</Link>
          <button onClick={handleLogout} className="block w-full text-left py-4 px-6 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" className="block w-full py-4 px-6 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 border-b border-gray-100">Login</Link>
          <Link to="/register" className="block w-full py-4 px-6 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700">Register</Link>
        </>
      )}
    </div>
  )}
</nav>
  );
}

export default Navbar;