import React from 'react';
import { FaGraduationCap } from 'react-icons/fa'; // Importamos un icono de react-icons

const educationData = [
  {
    id: 3,
    degree: 'Computer Science Engineering',
    institution: 'Argentine Business University (UADE)',
    location: 'Buenos Aires, Argentina',
    year: '2022-2027 (Expected)',
    description: 'Training in both technical aspects, management and managerial tasks. Regarding the technical aspect, I will be able to perform in the different activities of software development such as programming itself, but also in the analysis, design and architecture of systems.'
  },
  {
    id: 1,
    degree: 'University Technician in Software Development',
    institution: 'Argentine Business University (UADE)',
    location: 'Buenos Aires, Argentina',
    year: '2022 - 2025',
    description:
      'Focus on software engineering principles, system design and practical programming on various platforms.',
  },
  {
    id: 2,
    degree: 'University Diploma in Full Stack Web Development',
    institution: 'Argentine Business University (UADE)',
    location: 'Buenos Aires, Argentina',
    year: '2021 - 2022',
    description:
      'Specialization in Full Stack development, programming languages ​​and project management.',
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white relative">
      {/* Decorative Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('img/background-pattern.png')" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="relative">
          
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-teal-500"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Contenido */}
                <div className="md:w-1/2 md:px-8">
                  <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-500">
                    <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-teal-400 font-medium">{edu.institution}</h4>
                    <p className="text-gray-400 italic mb-1">{edu.location}</p>
                    <p className="text-gray-500 mb-4">{edu.year}</p>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>

                {/* Punto en la línea de tiempo */}
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg z-10">
                  <FaGraduationCap />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
