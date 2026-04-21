import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    role: 'Process Analyst — Automation & AI',
    company: 'Scienza Argentina',
    sector: 'Pharmaceutical',
    period: 'Feb 2025 — Present',
    highlights: [
      'Re-architected the full pharmacy document-reception pipeline with Document AI & OCR, eliminating manual data entry.',
      'Built Python automations reducing operational time by up to 70% across critical processes.',
      'Delivered Pandas/SQL data pipelines feeding automated executive dashboards.',
      'Integrated SAP through Python scripts to orchestrate mission-critical workflows.',
      'Shipped REST APIs in Flask connecting multiple enterprise systems.',
      'Developed Selenium-based scraping engines for competitive intelligence.',
      'Presented measurable ROI results directly to C-Level stakeholders.',
    ],
    tags: ['Python', 'Document AI', 'OCR', 'Pandas', 'Flask', 'SAP', 'Selenium', 'LLMs'],
  },
  {
    role: 'Functional Analyst',
    company: 'Whirlpool Corporation',
    sector: 'Consumer goods / Manufacturing',
    period: 'Jan 2024 — Feb 2025',
    highlights: [
      'Analyzed and documented requirements for digital transformation projects.',
      'Implemented Agile/Scrum practices across multidisciplinary teams.',
      'Designed technology solutions and optimized production processes.',
      'Coordinated IT and business areas to deliver operational improvements.',
    ],
    tags: ['Agile/Scrum', 'Requirements', 'Process Design', 'Digital Transformation'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">
            Work that <span className="gradient-text">delivers impact</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            From Fortune-500 manufacturing to pharma-grade automation — where software meets
            measurable business outcomes.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-accent-400/40 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const right = i % 2 === 1;
              return (
                <div key={exp.company} className="md:grid md:grid-cols-2 md:gap-10 items-start">
                  <div className={`${right ? 'md:col-start-2' : ''}`}>
                    <div className="card p-6 lg:p-7 hover:-translate-y-1 transition duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-accent-400">
                          <FaBriefcase />
                        </span>
                        <div>
                          <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                          <p className="text-sm text-accent-400">
                            {exp.company} · <span className="text-slate-400">{exp.sector}</span>
                          </p>
                        </div>
                      </div>
                      <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
                        {exp.period}
                      </p>

                      <ul className="space-y-2">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                            <span className="text-accent-400 mt-1">▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span key={t} className="pill">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`hidden md:block ${right ? 'md:col-start-1 md:row-start-1' : ''}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
