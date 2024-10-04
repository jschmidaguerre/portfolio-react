import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-zinc-700 py-12 mt-36 relative" id='about-me'>
      
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-600 opacity-75 rounded-lg"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <div className="relative group">
            <img
              src="img/yo.svg" // Replace with your image URL
              alt="Your Name"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl object-cover transform transition duration-500 ease-in-out group-hover:scale-105"
            />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 bg-black bg-opacity-60 rounded-full transition-opacity duration-300">
              <p className="text-white font-semibold text-lg">Hey! That's me!</p>
            </div>
          </div>
        </div>

        
        <div className="md:w-1/2 text-center md:text-left md:pl-8">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">About Me</h2>
          <p className="text-gray-300 mb-4 animate-slideUp">
            Hi! I’m <span className="text-teal-400 font-semibold">Juan Segundo Aguerre</span>, a passionate software developer skilled in both frontend and backend development. I enjoy creating dynamic, responsive web applications using modern technologies like <span className="text-teal-400">React</span>, <span className="text-teal-400">Node.js</span>, and <span className="text-teal-400">TailwindCSS</span>.
          </p>
          <p className="text-gray-300 mb-4 animate-slideUp delay-100">
            I thrive on solving complex problems and continuously strive to improve. Whether collaborating with teams or working solo, I believe that great things are achieved through creativity, hard work, and passion.
          </p>
          <p className="text-gray-300 mb-4 animate-slideUp delay-200">
            When I’m not coding, you’ll find me diving into personal projects, learning new technologies, or sharing knowledge with fellow developers. Let’s connect and create something awesome!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
