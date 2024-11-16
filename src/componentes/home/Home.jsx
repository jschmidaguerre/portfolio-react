// src/components/Home.jsx

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white relative"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="bg-gradient-to-b from-teal-500 to-transparent opacity-20 w-full h-full"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/background-animation.png)`, // Optional: Add a background animation image
          }}
        ></div>
        {/* You can add more animated elements here */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column: Text */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-teal-400">Juan Segundo</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6">
              Computer Science Engineering student, Software & Full Stack Developer from Argentina.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-400 transition duration-300 cursor-pointer"
              >
                View My Projects
              </ScrollLink>
              <a
              href={`${process.env.PUBLIC_URL}/img/CV_Juan_Segundo_Schmid_Aguerre.pdf`}
              download="CV_Juan_Segundo_Schmid_Aguerre.pdf" // Only the filename
              className="border border-teal-500 text-teal-500 px-6 py-3 rounded-md hover:bg-teal-500 hover:text-white transition duration-300"
              >
              Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src={`${process.env.PUBLIC_URL}/img/developing.png`}
              alt="Developer at Work"
              className="w-72 h-72 md:w-96 md:h-96 object-contain transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Animation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <ScrollLink
          to="about-me"
          smooth={true}
          duration={500}
          className="text-teal-400 hover:text-teal-200 cursor-pointer animate-bounce"
        >
          <FaChevronDown size={30} />
        </ScrollLink>
      </div>

      {/* Separator */}
      <div className="relative z-10">
        <svg
          className="absolute left-0 right-0 -bottom-1 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1F2937"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,240C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Home;
