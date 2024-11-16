import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">© {new Date().getFullYear()} Juan Segundo Aguerre. All rights reserved</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/juan-segundo-schmid-aguerre-311b16225/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            LinkedIn
          </a>
          <a href="https://github.com/jschmidaguerre" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            GitHub
          </a>
          <a href="mailto:juanseaguerre@gmail.com" className="hover:text-teal-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
