// src/pages/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:8081/api/auth/register', {
        name,
        email,
        password,
        isAdmin
      });
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', isAdmin ? 'admin' : 'customer');
      
      if (isAdmin) {
        navigate('/admin');
      } else {
        navigate('/customer');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
    <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h2>
      <p className="text-center text-gray-600 mb-6 sm:mb-8">Join EventZen to discover amazing events.</p>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-500">
              <FaUser className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
            />
          </div>
        </div>
        
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-500">
              <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
            />
          </div>
        </div>
        
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-500">
              <FaLock className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <input
              type="password"
              id="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
            />
          </div>
        </div>
        
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-500">
              <FaLock className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
            />
          </div>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isAdmin"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
            className="h-4 w-4 text-cyan-500 focus:ring-cyan-400 border-gray-300 rounded"
          />
          <label htmlFor="isAdmin" className="ml-2 block text-sm text-gray-700">
            Register as Admin
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 transition duration-200"
        >
          Create Account
        </button>
      </form>
    </div>
    
    <div className="px-6 sm:px-8 py-4 sm:py-6 bg-cyan-50 border-t border-cyan-100 text-center">
      <p className="text-gray-600">
        Already have an account? <a href="/login" className="text-cyan-600 hover:text-cyan-800 font-medium">Sign in</a>
      </p>
    </div>
  </div>
</div>
  );
}

export default Register;