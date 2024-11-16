import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 bg-gray-800 text-white relative">
      {/* Decorative Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/development-4536630_1280.png)`,
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}/img/profilepic.jpg`}
              alt="Juan Segundo Aguerre"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl transform hover:scale-105 transition duration-500"
            />
            {/* Decorative Ring */}
            <div className="absolute inset-0 border-4 border-gray-800 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-6xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4">
            I am a dedicated Computer Science Engineering student with a strong passion for software development and a focus on full-stack development.
          </p>
          <p className="text-lg">
            With a solid foundation in programming languages and frameworks, I have honed my skills in both front-end and back-end development, enabling me to create efficient, user-friendly applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
