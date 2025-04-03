// src/components/Shared/EventCard.jsx
function EventCard({ title, date, venue, price, onViewDetails }) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-40 sm:h-48 bg-gradient-to-r from-cyan-100 to-cyan-300">
        {/* Placeholder for event image */}
        <div className="absolute inset-0 flex items-center justify-center text-cyan-700 text-4xl sm:text-5xl font-bold">
          {title.charAt(0)}
        </div>
      </div>
      
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <p className="text-xs sm:text-sm font-medium text-cyan-600 mb-1">{date}</p>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-1 flex items-center text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {venue}
        </p>
        <p className="text-gray-800 font-semibold mt-2 mb-3 sm:mb-4 text-sm sm:text-base">{price}</p>
        
        <div className="mt-auto">
          <button 
            onClick={onViewDetails} 
            className="w-full bg-cyan-200 hover:bg-cyan-300 text-cyan-700 font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg transition duration-200 transform hover:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-opacity-50 text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
    );
  }
  
  export default EventCard;