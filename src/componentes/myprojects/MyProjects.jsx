import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaLock } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const projects = [
  {
    flagship: true,
    title: 'Spom Bridge',
    category: 'Multi-tenant SaaS · In production · Built & operated solo',
    description:
      'An e-invoicing SaaS I architected, built and still run on my own: FastAPI + PostgreSQL + Redis, 40+ domain modules with per-tenant isolation, deployed on Docker/Railway. It authorizes invoices against Argentina’s tax authority over SOAP (WSAA certificate signing, WSFE/CAE) with idempotency keys and a reconciliation state machine, and syncs orders and payments from Mercado Libre, Tiendanube and Mercado Pago via OAuth2 and signed webhooks. 250+ tests gate every merge; Sentry catches what they miss.',
    image: `${process.env.PUBLIC_URL}/img/developing.png`,
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Docker'],
    private: true,
  },
  {
    title: 'Scienza Document Automation',
    category: 'Enterprise AI · Pharmaceutical',
    description:
      'Re-architected the document-reception workflow of a pharma distributor with Document AI and OCR, layered with an LLM that turns messy scans into schema-validated JSON the downstream systems can trust. Removed manual data entry from a compliance-sensitive process and cut operational time by up to 70%.',
    image: `${process.env.PUBLIC_URL}/img/automation.png`,
    tags: ['Python', 'Document AI', 'OCR', 'LLMs', 'Flask', 'Pandas'],
    private: true,
  },
  {
    title: 'OCR Document Processing Application',
    category: 'AI / Web Application',
    description:
      'Web app to upload documents and process them with AWS Textract OCR, layered with an LLM that improves extraction accuracy and returns clean, structured JSON ready to be consumed by downstream systems.',
    image: `${process.env.PUBLIC_URL}/img/magnifying-33170_1280.png`,
    link: 'https://github.com/jschmidaguerre/OCR-LLM-Document-Processing-Application',
    tags: ['AWS Textract', 'Python', 'LLM', 'Flask', 'Next.js'],
  },
  {
    title: 'Web Scraping & Competitive Intelligence Suite',
    category: 'Automation · Data',
    description:
      'Selenium-based scraping engines that collect competitive-intelligence data at scale, clean it with Pandas and feed it into executive dashboards — built as part of the automation practice at Scienza.',
    image: `${process.env.PUBLIC_URL}/img/development-4536630_1280.png`,
    tags: ['Python', 'Selenium', 'Pandas', 'Scraping', 'Data'],
    private: true,
  },
  {
    title: 'Inventory Management System',
    category: 'Full-Stack Web App',
    description:
      'Full-stack inventory platform with a Spring Boot backend and a React front-end. Complete CRUD, role-based access and reporting — designed to give SMBs real control over their stock.',
    image: `${process.env.PUBLIC_URL}/img/Inventory-management-system-mediasoft.png`,
    link: 'https://github.com/jschmidaguerre/Inventory-Management-System',
    tags: ['Java', 'Spring Boot', 'SQL', 'React'],
  },
  {
    title: 'Automated WordPress Blog Publisher',
    category: 'AI · Automation',
    description:
      'Python pipeline that generates SEO-friendly HTML blog posts with an LLM and publishes them straight to WordPress via the REST API, integrating Groq for fast content generation.',
    image: `${process.env.PUBLIC_URL}/img/automation.png`,
    link: 'https://github.com/jschmidaguerre/Automated-WordPress-Blog-Publisher',
    tags: ['Python', 'LLM', 'WordPress', 'REST API', 'Groq'],
  },
];

const ProjectCard = ({ project }) => {
  const hasLink = !!project.link;
  return (
    <div
      className={`card group overflow-hidden flex flex-col h-full transition duration-300 hover:-translate-y-1 ${
        project.flagship ? 'border-accent-400/40 shadow-glow-cyan' : ''
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 to-accent-500/20" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
        {project.flagship && (
          <span className="absolute top-3 left-3 pill !bg-accent-400/20 !border-accent-400/50 !text-accent-300">
            <HiSparkles /> Flagship
          </span>
        )}
        {project.private && (
          <span className="absolute top-3 right-3 pill">
            <FaLock size={10} /> Private
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs font-mono uppercase tracking-widest text-accent-400 mb-1.5">
          {project.category}
        </p>
        <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        {hasLink ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full !py-2.5 text-sm"
          >
            <FaGithub /> View on GitHub
          </a>
        ) : (
          <div className="btn-ghost w-full !py-2.5 text-sm cursor-default !border-white/10 !text-slate-500">
            <FaLock size={12} /> Private repository
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Selected work</span>
          <h2 className="section-title">
            Projects I&apos;ve <span className="gradient-text">built &amp; shipped</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A multi-tenant SaaS with paying customers, enterprise AI automation, and smaller
            builds where I was learning something specific. Some repositories are private —
            happy to walk through the architecture and code on a call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/jschmidaguerre"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <FaGithub /> See more on GitHub <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
