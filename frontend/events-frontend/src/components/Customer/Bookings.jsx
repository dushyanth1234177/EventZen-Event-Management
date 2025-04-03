import { useState } from 'react';

function Bookings() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Mock data since backend isn't implemented
  const mockBookings = {
    upcoming: [
      {
        id: 1,
        eventName: "Tech Conference 2023",
        date: "Sep 15, 2023",
        venue: "Convention Center",
        ticketType: "VIP",
        price: "$150",
        confirmation: "TECH+123-VIP"
      },
      {
        id: 2,
        eventName: "Music Festival",
        date: "Oct 5, 2023",
        venue: "Central Park",
        ticketType: "General",
        price: "$75",
        confirmation: "MUSIC-456-GEN"
      }
    ],
    past: [
      {
        id: 3,
        eventName: "Food Expo",
        date: "Jun 10, 2023",
        venue: "Exhibition Hall",
        ticketType: "General",
        price: "$50",
        confirmation: "FOOD-789-GEN"
      }
    ]
  };
  
  const handleCancel = (id) => {
    // In a real app, this would call the backend
    alert(`Booking ${id} would be cancelled `);
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
    <div className="py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">My Bookings</h2>
      <p className="text-gray-600 mb-6">Manage your event bookings and tickets</p>
      
      <div className="flex mb-6 border-b border-gray-200">
        <button
          className={`px-4 py-2 font-medium text-sm focus:outline-none transition-colors duration-200 ${
            activeTab === 'upcoming' 
              ? 'text-cyan-600 border-b-2 border-cyan-600' 
              : 'text-gray-500 hover:text-cyan-700'
          }`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm focus:outline-none transition-colors duration-200 ${
            activeTab === 'past' 
              ? 'text-cyan-600 border-b-2 border-cyan-600' 
              : 'text-gray-500 hover:text-cyan-700'
          }`}
          onClick={() => setActiveTab('past')}
        >
          Past
        </button>
      </div>
      
      <div className="space-y-4">
        {mockBookings[activeTab].length > 0 ? (
          mockBookings[activeTab].map(booking => (
            <div 
              key={booking.id} 
              className="bg-cyan-50 rounded-lg shadow-md overflow-hidden border border-cyan-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="px-4 sm:px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-3">{booking.eventName}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                  <p className="flex items-center"><span className="font-medium mr-1">Date:</span> {booking.date}</p>
                  <p className="flex items-center"><span className="font-medium mr-1">Venue:</span> {booking.venue}</p>
                  <p className="flex items-center"><span className="font-medium mr-1">Ticket:</span> {booking.ticketType} ({booking.price})</p>
                  <p className="flex items-center"><span className="font-medium mr-1">Confirmation:</span> {booking.confirmation}</p>
                </div>
                
                {activeTab === 'upcoming' && (
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => handleCancel(booking.id)}
                      className="px-4 py-2 bg-cyan-600 text-white text-sm font-medium rounded-md hover:bg-cyan-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                    >
                      Cancel Booking
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 bg-cyan-50 rounded-lg border border-cyan-200">
            <p className="text-gray-500">No {activeTab} bookings found</p>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}

export default Bookings;