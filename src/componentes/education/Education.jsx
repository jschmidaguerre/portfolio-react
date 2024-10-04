import React from 'react';

const educationData = [
  {
    id: 1,
    degree: 'University Technician in software development',
    institution: 'Argentine business university',
    location: 'Buenos Aires, Argentina',
    year: '2022 - Present', 
    description: 'Concentrated on software engineering principles, system design, and hands-on programming across various platforms.',
  },
  {
    id: 2,
    degree: 'University diploma in full stack web development',
    institution: 'Argentine business university',
    location: 'Buenos Aires, Argentina',
    year: '2021 - 2022',
    description: 'Focused on Full Stack development, programming languages, and project management.',
  },
  
];

const Education = () => {
  return (
    <section className="bg-zinc-700 py-12 relative" id='education'>
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-600 opacity-75 rounded-lg"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fadeIn">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((edu) => (
            <div key={edu.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
              <h4 className="text-xl text-gray-700 font-medium">{edu.institution}</h4>
              <p className="text-gray-600 italic">{edu.location}</p>
              <p className="text-gray-600">{edu.year}</p>
              <p className="mt-4 text-gray-600 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
