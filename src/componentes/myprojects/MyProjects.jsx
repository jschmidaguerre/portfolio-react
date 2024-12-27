// src/components/Projects.jsx

import React from 'react';

const projects = [
  {
    title: 'OCR Document Processing Application',
    description:
      'This project is a web application that allows users to upload documents and process them using AWS Textract for Optical Character Recognition (OCR). Additionally, it implements a Large Scale Language Model (LLM) to improve the accuracy and processing of the extracted information, providing key data in clean and structured JSON format.',
    image: `${process.env.PUBLIC_URL}/img/magnifying-33170_1280.png`, // Updated path
    link: 'https://github.com/jschmidaguerre/OCR-LLM-Document-Processing-Application', // Link to the repository or demo
    tags: ['AWS', 'Textract', 'LLM', 'Flask', 'Next.js'],
  },
  {
    title: 'Inventory-Management-System',
    description: 'The Inventory Management System is a full-stack web application designed to help businesses efficiently manage their product inventory. Built with a robust Spring Boot backend and a dynamic ReactJS frontend, this system provides comprehensive CRUD (Create, Read, Update, Delete) functionalities for managing products.',
    image: `${process.env.PUBLIC_URL}/img/Inventory-management-system-mediasoft.png`,
    link: 'https://github.com/jschmidaguerre/Inventory-Management-System',
    tags: ['Java', 'SpringBoot', 'SQL', 'React']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-3/4 h-56 object-cover mx-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-teal-500 text-white text-sm px-2 py-1 rounded-full mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-400 transition duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
