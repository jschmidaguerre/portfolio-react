import React from 'react';
import {
  HiSparkles,
  HiCpuChip,
  HiRectangleStack,
  HiCommandLine,
  HiCodeBracket,
  HiPresentationChartLine,
} from 'react-icons/hi2';

const services = [
  {
    icon: <HiCodeBracket />,
    title: 'Full-Stack Product Development',
    text:
      'End-to-end product engineering — React/Next.js front-ends, Node/Python back-ends, REST APIs, databases, auth and deploy. From zero to shipped SAAS like Spom Bridge.',
    tags: ['React', 'Next.js', 'Node.js', 'Python', 'REST APIs'],
  },
  {
    icon: <HiSparkles />,
    title: 'AI-First Engineering',
    text:
      'I build every project with an AI-First mindset, using Claude Code as my core development partner. LLMs, AI agents and Document AI integrated as first-class citizens of the stack.',
    tags: ['Claude Code', 'LLMs', 'AI Agents', 'RAG', 'Prompt Engineering'],
    highlight: true,
  },
  {
    icon: <HiCpuChip />,
    title: 'Process Automation',
    text:
      'Python automations that eliminate manual workflows. Document AI, OCR, Pandas/SQL pipelines and SAP integrations that deliver up to 70% operational time savings.',
    tags: ['Python', 'OCR', 'Document AI', 'SAP', 'RPA'],
  },
  {
    icon: <HiCommandLine />,
    title: 'Web Scraping & Data Extraction',
    text:
      'Selenium-powered scraping engines for competitive intelligence and data pipelines. Clean, structured data ready for BI and ML downstream.',
    tags: ['Selenium', 'Pandas', 'Scraping', 'ETL'],
  },
  {
    icon: <HiRectangleStack />,
    title: 'REST APIs & Integrations',
    text:
      'Robust Flask/Django/Express APIs that connect enterprise systems, third-party services and AI providers. Auth, rate limiting, observability and documentation out of the box.',
    tags: ['Flask', 'Django', 'Express', 'OpenAPI'],
  },
  {
    icon: <HiPresentationChartLine />,
    title: 'Executive Dashboards & Analytics',
    text:
      'Pandas/SQL pipelines feeding automated dashboards with ROI-driven KPIs. Built for C-Level audiences and fast executive decision-making.',
    tags: ['Pandas', 'SQL', 'BI', 'Data Viz'],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 border-y border-white/5 bg-ink-800/40">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="section-eyebrow">What I do</span>
          <h2 className="section-title">
            Services with an <span className="gradient-text">AI-First</span> edge
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            I partner with teams that want to ship faster, automate smarter and build products
            that leverage AI from day one — not as an afterthought.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`card p-6 hover:-translate-y-1 transition duration-300 group ${
                s.highlight ? 'border-accent-400/40 shadow-glow-cyan' : ''
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl grid place-items-center text-2xl mb-5 transition group-hover:scale-110 ${
                  s.highlight
                    ? 'bg-gradient-to-br from-brand-500/40 to-accent-500/40 text-accent-300'
                    : 'bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-accent-400'
                }`}
              >
                {s.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{s.text}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
