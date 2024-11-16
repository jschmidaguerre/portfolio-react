import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-teal-400 text-2xl font-bold">
          JSA
        </a>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-200 hover:text-teal-400 focus:outline-none transition duration-300"
          >
            {/* Animated Hamburger Icon */}
            <svg
              className={`h-8 w-8 ${isOpen ? 'transform rotate-90' : ''} transition duration-300`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                // Close Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Visible on Desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-teal-400 transition duration-300">
            Home
          </a>
          <a href="#about-me" className="text-white hover:text-teal-400 transition duration-300">
            About Me
          </a>
          <a href="#projects" className="text-white hover:text-teal-400 transition duration-300">
            My Projects
          </a>
          <a href="#contact-me" className="text-white hover:text-teal-400 transition duration-300">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-6 pt-2 pb-4 space-y-1">
            <a
              href="#home"
              className="block text-white hover:text-teal-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about-me"
              className="block text-white hover:text-teal-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </a>
            <a
              href="#projects"
              className="block text-white hover:text-teal-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              My Projects
            </a>
            <a
              href="#contact-me"
              className="block text-white hover:text-teal-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
