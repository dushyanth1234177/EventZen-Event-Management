import { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../Shared/EventCard';

function Venues() {
  const [venues, setVenues] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [capacityFilter, setCapacityFilter] = useState('');
  
  useEffect(() => {
    fetchVenues();
  }, [locationFilter, capacityFilter]);
  
  const fetchVenues = async () => {
    try {
      let url = 'http://localhost:8081/api/customer/venues';
      const params = new URLSearchParams();
      
      if (locationFilter) params.append('location', locationFilter);
      if (capacityFilter) params.append('minCapacity', capacityFilter);
      
      if (params.toString()) url += `?${params.toString()}`;
      
      const response = await axios.get(url);
      setVenues(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };
  
  return (
<div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
  <div className="py-4 sm:py-6">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Available Venues</h2>
    
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6 border border-cyan-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-1 sm:space-y-2">
          <label className="block text-sm font-medium text-gray-700">Location:</label>
          <input
            type="text"
            placeholder="Filter by location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full px-3 py-2 border border-cyan-200 rounded-md shadow-sm focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 text-sm"
          />
        </div>
        
        <div className="space-y-1 sm:space-y-2">
          <label className="block text-sm font-medium text-gray-700">Minimum Capacity:</label>
          <input
            type="number"
            placeholder="Filter by capacity"
            value={capacityFilter}
            onChange={(e) => setCapacityFilter(e.target.value)}
            className="w-full px-3 py-2 border border-cyan-200 rounded-md shadow-sm focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 text-sm"
          />
        </div>
      </div>
    </div>
    
    {venues.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {venues.map(venue => (
          <EventCard 
            key={venue.id}
            title={venue.name}
            date={venue.location}
            venue={`Capacity: ${venue.capacity}`}
            price="View Details"
            onViewDetails={() => console.log('View details:', venue.id)}
          />
        ))}
      </div>
    ) : (
      <div className="text-center py-8 sm:py-12 bg-cyan-50 rounded-lg border border-cyan-100">
        <p className="text-gray-500">No venues found matching your criteria</p>
      </div>
    )}
  </div>
</div>
  );
}

export default Venues;