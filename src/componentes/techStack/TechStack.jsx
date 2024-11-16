import React from 'react';
import {
  DiPython,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiAngularSimple,
  DiPostgresql,
  DiDocker,
  DiGit,
} from 'react-icons/di';
import {
  SiExpress,
  SiMicrosoftsqlserver,
  SiSpring,
  SiNextdotjs,
  SiPostman,
  SiGnubash,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const TechStack = () => {
  const techStack = [
    { name: 'Python', icon: <DiPython size="3em" /> },
    { name: 'React', icon: <DiReact size="3em" /> },
    { name: 'Node.js', icon: <DiNodejs size="3em" /> },
    { name: 'Express', icon: <SiExpress size="3em" /> },
    { name: 'MongoDB', icon: <DiMongodb size="3em" /> },
    { name: 'SQL Server', icon: <SiMicrosoftsqlserver size="3em" /> },
    { name: 'Java', icon: <DiJava size="3em" /> },
    { name: 'HTML', icon: <DiHtml5 size="3em" /> },
    { name: 'CSS', icon: <DiCss3 size="3em" /> },
    { name: 'JavaScript', icon: <DiJavascript1 size="3em" /> },
    { name: 'Angular', icon: <DiAngularSimple size="3em" /> },
    { name: 'Spring', icon: <SiSpring size="3em" /> },
    { name: 'Next.js', icon: <SiNextdotjs size="3em" /> },
    { name: 'PostgreSQL', icon: <DiPostgresql size="3em" /> },
    { name: 'Docker', icon: <DiDocker size="3em" /> },
    { name: 'Postman', icon: <SiPostman size="3em" /> },
    { name: 'Git', icon: <DiGit size="3em" /> },
    { name: 'Bash', icon: <SiGnubash size="3em" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size="3em" /> },
    { name: 'TypeScript', icon: <SiTypescript size="3em" /> },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-800 text-white relative">
      {/* Decorative Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/techstack.jpg)`,
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="flex justify-center text-4xl font-bold mb-10">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 border border-gray-700 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <div className="text-5xl mb-2">{tech.icon}</div>
              <p className="text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
