import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
    projectUrl: 'https://yourprojectlink.com',   // Replace with actual project link
  }
  
];

const MyProjects = () => {
  return (
    <section className="bg-zinc-700 py-12 relative" id='my-projects'>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-600 opacity-75 rounded-lg"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fadeIn">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative group">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 bg-black bg-opacity-50 transition-opacity duration-300">
                  <p className="text-white font-semibold text-lg">View Project</p>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.projectUrl}
                  className="inline-block bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
