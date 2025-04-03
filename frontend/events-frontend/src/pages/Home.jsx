// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import EventCard from '../components/Shared/EventCard';

function Home() {
  const featuredEvents = [
    {
      id: 1,
      title: "Tech Conference 2023",
      date: "Sep 15, 2023",
      venue: "Convention Center",
      price: "$150"
    },
    {
      id: 2,
      title: "Music Festival",
      date: "Oct 5, 2023",
      venue: "Central Park",
      price: "$75"
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      date: "Oct 20, 2023",
      venue: "Exhibition Hall",
      price: "$50"
    },
    {
      id: 4,
      title: "Business Summit",
      date: "Nov 10, 2023",
      venue: "Grand Hotel",
      price: "$200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white text-gray-800 font-sans">
    {/* Hero Section */}
    <section className="py-20 px-6 md:px-12 lg:px-24 text-center flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">EventZen</h1>
      <p className="text-xl md:text-2xl max-w-md mx-auto mb-10 font-light">Discover Exciting Events Happening Near You</p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-xs mx-auto">
        <Link to="/register" className="py-3 px-8 bg-white text-cyan-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center">Sign Up</Link>
        <Link to="/login" className="py-3 px-8 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 text-center">Log in</Link>
      </div>
    </section>
  
    {/* Featured Events Section */}
    <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Upcoming Events</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
        EventZen brings you a curated selection of the finest events, designed with elegance and simplicity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {featuredEvents.map(event => (
          <div key={event.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-cyan-100">
            <div className="bg-cyan-200 h-32"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h3>
              <div className="text-sm text-gray-600 mb-4">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {event.date}
                </p>
                <p className="flex items-center gap-2 mt-1">
                  <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {event.venue}
                </p>
              </div>
              <p className="text-lg font-bold text-cyan-600">{event.price}</p>
              <button
                onClick={() => console.log('View details:', event.id)}
                className="mt-4 py-2 px-4 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium hover:bg-cyan-200 transition-all duration-300 inline-block"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  
    {/* About Section */}
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-cyan-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">About EventZen</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        We connect event organizers with attendees, making event management seamless and enjoyable for everyone.
      </p>
    </section>
  </div>
  );
}

export default Home;