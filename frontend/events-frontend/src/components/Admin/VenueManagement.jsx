// src/components/Admin/VenueManagement.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function VenueManagement() {
  const [venues, setVenues] = useState([]);
  const [newVenue, setNewVenue] = useState({
    name: '',
    location: '',
    capacity: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8081/api/venues', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setVenues(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVenue(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      
      if (editingId) {
        await axios.put(`http://localhost:8081/api/venues/${editingId}`, newVenue, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await axios.post('http://localhost:8081/api/venues', newVenue, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      
      setNewVenue({ name: '', location: '', capacity: '' });
      setEditingId(null);
      fetchVenues();
    } catch (error) {
      console.error('Error saving venue:', error);
    }
  };

  const handleEdit = (venue) => {
    setNewVenue({
      name: venue.name,
      location: venue.location,
      capacity: venue.capacity
    });
    setEditingId(venue.id);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8081/api/venues/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchVenues();
    } catch (error) {
      console.error('Error deleting venue:', error);
    }
  };

  const filteredVenues = venues.filter(venue =>
    venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<div className="p-4 sm:p-6 max-w-5xl mx-auto bg-cyan-50 rounded-xl shadow-lg">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-cyan-700">Venue Management</h2>
  
  <div className="flex flex-col md:flex-row items-center md:justify-between mb-6 gap-4">
    <input
      type="text"
      placeholder="Search venues..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border border-cyan-200 p-2 sm:p-3 w-full md:w-1/2 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-200 focus:border-cyan-200 transition-all duration-200"
    />
    <button className="bg-cyan-200 text-cyan-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-cyan-300 transition-all duration-200 w-full md:w-auto">
      Add Venue
    </button>
  </div>
  
  <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-8 rounded-xl shadow-md mb-8 border border-cyan-200">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
      <div>
        <label className="block text-cyan-700 font-medium mb-2">Venue Name</label>
        <input
          type="text"
          name="name"
          value={newVenue.name}
          onChange={handleInputChange}
          required
          className="w-full border border-cyan-200 p-2 sm:p-3 rounded-lg focus:ring-2 focus:ring-cyan-200 focus:border-cyan-200 transition-all duration-200"
        />
      </div>
      <div>
        <label className="block text-cyan-700 font-medium mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={newVenue.location}
          onChange={handleInputChange}
          required
          className="w-full border border-cyan-200 p-2 sm:p-3 rounded-lg focus:ring-2 focus:ring-cyan-200 focus:border-cyan-200 transition-all duration-200"
        />
      </div>
      <div>
        <label className="block text-cyan-700 font-medium mb-2">Capacity</label>
        <input
          type="number"
          name="capacity"
          value={newVenue.capacity}
          onChange={handleInputChange}
          required
          className="w-full border border-cyan-200 p-2 sm:p-3 rounded-lg focus:ring-2 focus:ring-cyan-200 focus:border-cyan-200 transition-all duration-200"
        />
      </div>
    </div>
    <button
      type="submit"
      className="w-full bg-cyan-200 text-cyan-700 p-2 sm:p-3 rounded-lg font-medium hover:bg-cyan-300 transition-all duration-200"
    >
      {editingId ? "Update Venue" : "Add Venue"}
    </button>
  </form>
  
  <div className="overflow-x-auto rounded-xl shadow-lg border border-cyan-200">
    <table className="min-w-full bg-white rounded-xl overflow-hidden">
      <thead className="bg-cyan-100">
        <tr>
          <th className="py-2 sm:py-3 px-3 sm:px-6 text-left text-cyan-700 font-medium">ID</th>
          <th className="py-2 sm:py-3 px-3 sm:px-6 text-left text-cyan-700 font-medium">Venue Name</th>
          <th className="hidden md:table-cell py-2 sm:py-3 px-3 sm:px-6 text-left text-cyan-700 font-medium">Location</th>
          <th className="hidden sm:table-cell py-2 sm:py-3 px-3 sm:px-6 text-left text-cyan-700 font-medium">Capacity</th>
          <th className="py-2 sm:py-3 px-3 sm:px-6 text-left text-cyan-700 font-medium">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-cyan-200">
        {filteredVenues.map((venue) => (
          <tr key={venue.id} className="hover:bg-cyan-50 transition-colors duration-150">
            <td className="py-2 sm:py-3 px-3 sm:px-6 text-cyan-700">{venue.id}</td>
            <td className="py-2 sm:py-3 px-3 sm:px-6 font-medium text-cyan-800">{venue.name}</td>
            <td className="hidden md:table-cell py-2 sm:py-3 px-3 sm:px-6 text-cyan-700">{venue.location}</td>
            <td className="hidden sm:table-cell py-2 sm:py-3 px-3 sm:px-6 text-cyan-700">{venue.capacity}</td>
            <td className="py-2 sm:py-3 px-3 sm:px-6 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => handleEdit(venue)}
                className="bg-cyan-200 text-cyan-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-cyan-300 transition-colors duration-200 text-sm sm:text-base"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(venue.id)}
                className="bg-red-200 text-red-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-red-300 transition-colors duration-200 text-sm sm:text-base"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
}

export default VenueManagement;