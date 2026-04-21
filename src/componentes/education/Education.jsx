import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    degree: 'Systems Engineering',
    institution: 'Universidad Argentina de la Empresa (UADE)',
    location: 'Buenos Aires, Argentina',
    year: '2022 — Present',
    description:
      'In-depth training in both the technical and managerial sides of software engineering: analysis, design, architecture and delivery of full systems.',
  },
  {
    id: 2,
    degree: 'University Technician in Software Development',
    institution: 'Universidad Argentina de la Empresa (UADE)',
    location: 'Buenos Aires, Argentina',
    year: '2021 — 2023 · Completed',
    description:
      'Intensive training in software engineering principles, system design and practical programming across multiple platforms.',
  },
  {
    id: 3,
    degree: 'University Diploma in Full Stack Web Development',
    institution: 'Universidad Argentina de la Empresa (UADE)',
    location: 'Buenos Aires, Argentina',
    year: '2021 — 2022 · Completed',
    description:
      'Specialization in full-stack web development, modern programming languages and project management fundamentals.',
  },
];

const trainings = [
  'Python for Data Science & Machine Learning',
  'SAP Automation & Integration',
  'MERN Stack (MongoDB, Express, React, Node.js)',
  'SQL Server Database Administration',
  'Scrum Master Professional Certificate',
  'Angular Development',
  'Process Automation with Python',
  'Machine Learning & Artificial Intelligence',
  'DevOps & Containerization with Docker',
];

const Education = () => {
  return (
    <section id="education" className="relative py-24">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Education</span>
          <h2 className="section-title">
            Academic &amp; <span className="gradient-text">continuous learning</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            University foundations backed by a long list of specialized certifications —
            from data science and ML to DevOps and enterprise SAP.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="card p-6 hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-accent-400 text-xl flex-shrink-0">
                    <FaGraduationCap />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-accent-400 text-sm">{edu.institution}</p>
                    <div className="mt-1 flex flex-wrap gap-3 text-xs font-mono uppercase tracking-wider text-slate-500">
                      <span>{edu.location}</span>
                      <span>·</span>
                      <span>{edu.year}</span>
                    </div>
                    <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="card p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-accent-400">
                  <FaCertificate />
                </span>
                <h3 className="font-display text-lg font-semibold">Complementary training</h3>
              </div>
              <ul className="space-y-3">
                {trainings.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
                  Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="pill">Spanish · Native</span>
                  <span className="pill">English · Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
