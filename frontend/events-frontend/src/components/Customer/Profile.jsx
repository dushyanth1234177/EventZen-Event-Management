import { useState } from 'react';

function Profile() {
  // Mock data since backend isn't implemented
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    notifications: true
  });
  
  const [isEditing, setIsEditing] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call the backend
    alert('Profile would be saved ');
    setIsEditing(false);
  };
  
  return (
<div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
  <div className="py-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
      <div className="mb-4 sm:mb-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">My Profile</h2>
        <p className="text-gray-600">View and manage your account details</p>
        
        <div className="mt-2">
          <h3 className="text-lg font-semibold text-gray-700">{profile.name}</h3>
          <p className="text-gray-500">{profile.email}</p>
        </div>
      </div>
      
      <button
        onClick={() => setIsEditing(!isEditing)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
          isEditing 
            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500' 
            : 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500'
        }`}
      >
        {isEditing ? 'Cancel Editing' : 'Edit Profile'}
      </button>
    </div>
    
    {isEditing ? (
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6 border border-cyan-200">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            checked={profile.notifications}
            onChange={handleInputChange}
            className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
          />
          <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700">
            Enable Notifications
          </label>
        </div>
        
        <div className="pt-2">
          <button 
            type="submit" 
            className="w-full sm:w-auto px-4 py-2 bg-cyan-600 text-white text-sm font-medium rounded-md hover:bg-cyan-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
          >
            Save Changes
          </button>
        </div>
      </form>
    ) : (
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-cyan-200">
        <div className="divide-y divide-cyan-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 hover:bg-cyan-50">
            <div className="font-medium text-gray-700">Full Name</div>
            <div className="text-gray-900 sm:mt-0 mt-1">{profile.name}</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 hover:bg-cyan-50">
            <div className="font-medium text-gray-700">Email Address</div>
            <div className="text-gray-900 break-all sm:mt-0 mt-1">{profile.email}</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 hover:bg-cyan-50">
            <div className="font-medium text-gray-700">Phone Number</div>
            <div className="text-gray-900 sm:mt-0 mt-1">{profile.phone}</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 hover:bg-cyan-50">
            <div className="font-medium text-gray-700">Notifications</div>
            <div className="text-gray-900 sm:mt-0 mt-1">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                profile.notifications ? 'bg-cyan-100 text-cyan-800' : 'bg-red-100 text-red-800'
              }`}>
                {profile.notifications ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
</div>
  );
}

export default Profile;