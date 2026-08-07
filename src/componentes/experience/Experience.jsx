import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    role: 'Founder & Lead Engineer',
    company: 'Spom Bridge — Spom Solutions',
    sector: 'Independent SaaS product · Live in production',
    period: '2025 — Present',
    live: 'https://app.spomsolutions.com',
    highlights: [
      'Architected and operate a multi-tenant SaaS in production on FastAPI, PostgreSQL and Redis, containerized with Docker on Railway — 40+ domain modules with strict per-tenant data isolation.',
      'Integrated the AFIP/ARCA SOAP web services (WSAA certificate signing, WSFE invoice authorization) so every sale is invoiced with no manual step — solved the non-idempotent tax API with per-document idempotency keys, token caching, bounded retries and a reconciliation state machine.',
      'Built OAuth2 connectors and signed-webhook consumers for Mercado Libre, Tiendanube and Mercado Pago, keeping orders, catalog and payments in sync in near real time.',
      'Shipped production-grade security — JWT, 2FA, CSRF protection and rate limiting — and held quality with 250+ automated tests, CI gating every merge and Sentry-based observability.',
      'Built the React 18 + TypeScript front-end end to end, from design system to release.',
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'React', 'TypeScript', 'Sentry'],
  },
  {
    role: 'Automation & AI Developer',
    company: 'Scienza Argentina',
    sector: 'Pharmaceutical distribution',
    period: 'Feb 2025 — Present',
    highlights: [
      'Re-architected the pharmacy document-reception pipeline with Document AI & OCR, removing manual data entry from a high-volume, compliance-sensitive process.',
      'Layered an LLM over raw OCR output to raise extraction accuracy and emit schema-validated JSON consumed directly by downstream enterprise systems.',
      'Built Python automations reducing operational time by up to 70% across business-critical processes.',
      'Integrated SAP through Python and shipped Flask REST APIs connecting multiple enterprise systems.',
      'Delivered Pandas/SQL pipelines feeding automated executive dashboards, with measurable ROI presented directly to C-Level stakeholders.',
    ],
    tags: ['Python', 'Document AI', 'OCR', 'LLMs', 'Pandas', 'Flask', 'SAP', 'Selenium'],
  },
  {
    role: 'Functional Analyst',
    company: 'Whirlpool Corporation',
    sector: 'Fortune 500 · Manufacturing',
    period: 'Jan 2024 — Feb 2025',
    highlights: [
      'Gathered and documented requirements for digital transformation projects, translating business needs into technical specifications for development teams.',
      'Implemented Agile/Scrum practices across multidisciplinary IT and business teams.',
      'Designed technology solutions and process improvements for production operations.',
      'Coordinated IT and business stakeholders from analysis through go-live.',
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
            Where I&apos;ve <span className="gradient-text">shipped</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A SaaS I run in production, pharma-grade AI automation, and a Fortune 500 where I
            learned to start from the business problem.
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
                        {exp.live && (
                          <>
                            {' · '}
                            <a
                              href={exp.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-400 hover:text-accent-300 normal-case tracking-normal"
                            >
                              {exp.live.replace('https://', '')} ↗
                            </a>
                          </>
                        )}
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
