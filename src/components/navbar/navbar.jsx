import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-primary hover:scale-110 transition-transform duration-300">
            SkinCare Clinic
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-primary transition duration-300 hover:-translate-y-1">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition duration-300 hover:-translate-y-1">
              About
            </a>
            <a href="#treatments" className="hover:text-primary transition duration-300 hover:-translate-y-1">
              Treatments
            </a>
            <a href="#contact" className="hover:text-primary transition duration-300 hover:-translate-y-1">
              Contact
            </a>
          </div>

          {/* Appointment Button */}
          <div className="hidden md:block">
            <a href="#contact">
              <button className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark hover:scale-105 transition duration-300">
                Book Appointment
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-7 h-7 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transform transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-4 py-3 space-y-3 text-gray-700">
          <a href="#" className="hover:text-primary transition">
            Home
          </a>
          <a href="#" className="hover:text-primary transition">
            About
          </a>
          <a href="#" className="hover:text-primary transition">
            Treatments
          </a>
          <a href="#" className="hover:text-primary transition">
            Contact
          </a>

          <a href="#contact">
            <button className="bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition">
              Book Appointment
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;