// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import AdminDashboard from './pages/AdminDashboard';
// import CustomerDashboard from './pages/CustomerDashboard';
// import Navbar from './components/Shared/Navbar';
// import Footer from './components/Shared/Footer';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/admin/*" element={<AdminDashboard />} ><Route/>
//         <Route path="/customer/*" element={<CustomerDashboard />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;



// src/App.jsx
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import AdminDashboard from './pages/AdminDashboard';
// import CustomerDashboard from './pages/CustomerDashboard';
// import Navbar from './components/Shared/Navbar';
// import Footer from './components/Shared/Footer';
// import VenueManagement from './components/Admin/VenueManagement';
// import EventManagement from './components/Admin/EventManagement';
// import VendorManagement from './components/Admin/VendorManagement';
// import AttendeeManagement from './components/Admin/AttendeeManagement';
// import Venues from './components/Customer/Venues';
// import Bookings from './components/Customer/Bookings';
// import Profile from './components/Customer/Profile';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
        
//         {/* Admin Routes */}
//         <Route path="/admin" element={<AdminDashboard />}>
//           <Route index element={<Navigate to="venues" replace />} />
//           <Route path="venues" element={<VenueManagement />} />
//           <Route path="events" element={<EventManagement />} />
//           <Route path="vendors" element={<VendorManagement />} />
//           <Route path="attendees" element={<AttendeeManagement />} />
//         </Route>
        
//         {/* Customer Routes */}
//         <Route path="/customer" element={<CustomerDashboard />}>
//           <Route index element={<Navigate to="venues" replace />} />
//           <Route path="venues" element={<Venues />} />
//           <Route path="bookings" element={<Bookings />} />
          
//           <Route path="profile" element={<Profile />} />
//         </Route>
        
//         {/* Fallback route */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//       <Footer />
//       <ToastContainer position="top-right" autoClose={5000} />
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import VenueManagement from './components/Admin/VenueManagement';
import EventManagement from './components/Admin/EventManagement';
import VendorManagement from './components/Admin/VendorManagement';
import AttendeeManagement from './components/Admin/AttendeeManagement';
import Venues from './components/Customer/Venues';
import Bookings from './components/Customer/Bookings';
import Profile from './components/Customer/Profile';
import Events from './components/Customer/Events'; // Import the new Events component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Navigate to="venues" replace />} />
          <Route path="venues" element={<VenueManagement />} />
          <Route path="events" element={<EventManagement />} />
          <Route path="vendors" element={<VendorManagement />} />
          <Route path="attendees" element={<AttendeeManagement />} />
        </Route>
        
        {/* Customer Routes */}
        <Route path="/customer" element={<CustomerDashboard />}>
          <Route index element={<Navigate to="venues" replace />} />
          <Route path="events" element={<Events />} /> {/* Added Events route */}
          <Route path="venues" element={<Venues />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={5000} />
    </Router>
  );
}

export default App;