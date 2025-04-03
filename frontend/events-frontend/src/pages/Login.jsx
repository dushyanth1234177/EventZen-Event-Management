// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/auth/login', {
        email,
        password,
        isAdmin
      });
      console.log(response.data)
      localStorage.setItem('token', response.data);
      localStorage.setItem('role', isAdmin ? 'admin' : 'customer');
      
      if (isAdmin) {
        navigate('/admin');
      } else {
        navigate('/customer');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
    <div className="px-6 sm:px-8 pt-8 pb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
      <p className="text-center text-gray-600 mb-6 sm:mb-8">Sign in to access your account!</p>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-500">
              <FaUser className="h-4 w-4 sm:h-5 sm:w-5" />
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
        
        <div className="space-y-2">
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Login as Admin
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 transition duration-200"
        >
          Sign In
        </button>
      </form>
    </div>
    
    <div className="px-6 sm:px-8 py-4 sm:py-6 bg-cyan-50 border-t border-cyan-100 space-y-2 text-sm text-center">
      <p className="text-cyan-600 hover:text-cyan-800 cursor-pointer transition duration-200">
        Forgot password?
      </p>
      <p className="text-gray-600">
        Don't have an account? <a href="/register" className="text-cyan-600 hover:text-cyan-800 font-medium">Sign up</a>
      </p>
    </div>
  </div>
</div>
  );
}

export default Login;