// src/components/Shared/Footer.jsx
function Footer() {
    return (
<footer className="bg-gray-800 text-white py-10">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-cyan-200">EventZen</h3>
        <p className="text-gray-300">Your premier event management solution</p>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-lg font-semibold border-b border-gray-700 pb-2">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-300 hover:text-cyan-200 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 hover:text-cyan-200 transition duration-200">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-300 hover:text-cyan-200 transition duration-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-lg font-semibold border-b border-gray-700 pb-2">Legal</h4>
        <ul className="space-y-2">
          <li>
            <a href="/privacy" className="text-gray-300 hover:text-cyan-200 transition duration-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-gray-300 hover:text-cyan-200 transition duration-200">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="pt-6 border-t border-gray-700 text-center md:text-left text-sm text-gray-300">
      <p>&copy; {new Date().getFullYear()} EventZen. All rights reserved.</p>
    </div>
  </div>
</footer>
    );
  }
  
  export default Footer;