import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Install react-icons: npm install react-icons

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="w-full font-sans shadow-sm sticky top-0 bg-white z-50">
      {/* Top Bar: Contact Info (Hidden on mobile) */}
      <div className="hidden md:flex justify-end items-center px-10 py-2 bg-gray-50 text-sm ">
        <div className="flex gap-6 text-gray-600">
          <span className="flex items-center gap-2">📞 1800-000-0000</span>
          <span className="flex items-center gap-2">
            ✉️ support@h2o-pure.com
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-12 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/3105/3105807.png"
                alt="Logo"
              />
              <span className="ml-2 font-bold text-2xl text-teal-700">
                AQUA
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
            <Link to="/" className="hover:text-teal-600 transition">
              Home
            </Link>
            <Link to="/promise" className="hover:text-teal-600 transition">
              Our Promise
            </Link>
            <Link to="/products" className="hover:text-teal-600 transition">
              Shop Products
            </Link>
            <Link to="/brands" className="hover:text-teal-600 transition">
              Brands
            </Link>

            {/* Action Icons */}
            <div className="flex items-center space-x-4 border-l pl-6 ml-4">
              <button className="p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700">
                🔍
              </button>
              <button className="p-2 text-teal-600 border border-teal-600 rounded-full hover:bg-teal-50">
                👤
              </button>
              <button className="p-2 bg-teal-600 text-white rounded-full relative">
                🛒
                <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] rounded-full px-1">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-3xl text-teal-700"
            >
              {navOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`${navOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 h-full w-2/3 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden z-[60]`}
      >
        <div className="p-6 flex flex-col space-y-6 text-lg font-semibold text-gray-800">
          <button
            onClick={() => setNavOpen(false)}
            className="self-end text-3xl"
          >
            ×
          </button>
          <Link to="/" onClick={() => setNavOpen(false)}>
            Home
          </Link>
          <Link to="/promise" onClick={() => setNavOpen(false)}>
            Our Promise
          </Link>
          <Link to="/products" onClick={() => setNavOpen(false)}>
            Shop Products
          </Link>
          <Link to="/brands" onClick={() => setNavOpen(false)}>
            Brands
          </Link>
          <div className="pt-6 border-t flex justify-around">
            <span>🔍</span>
            <span>👤</span>
            <span>🛒</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
