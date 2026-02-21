import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#009087] text-white py-10 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section (Optional: You can add links or logo here later) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold tracking-wider">AQUA</h2>
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/faq" className="hover:underline">FAQs</Link>
          </div>
        </div>

        {/* The Horizontal Line from your reference image */}
        <div className="border-t border-white/30 w-full mb-6"></div>

        {/* Bottom Section: Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <div>
            <p>© COPYRIGHTS 2025-26</p>
          </div>
          
          <div className="flex gap-8">
            <Link to="/compliance" className="hover:underline">Compliance</Link>
            <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;