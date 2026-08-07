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
    icon: <HiRectangleStack />,
    title: 'API & service design',
    text:
      'FastAPI and Flask services built to be operated: versioned REST contracts, OAuth2, JWT/2FA, rate limiting, structured logging and OpenAPI docs that stay in sync with the code.',
    tags: ['FastAPI', 'Flask', 'REST', 'OAuth2', 'OpenAPI'],
    highlight: true,
  },
  {
    icon: <HiCodeBracket />,
    title: 'Multi-tenant architecture',
    text:
      'Per-tenant data isolation, scoped queries and migrations that do not break customer N while shipping for customer N+1. 40+ domain modules running under one roof in Spom Bridge.',
    tags: ['PostgreSQL', 'SQLAlchemy', 'Redis', 'Alembic'],
  },
  {
    icon: <HiCommandLine />,
    title: 'Integrations that survive production',
    text:
      'SOAP and REST against systems you do not control — idempotency keys, token caching, bounded retries, signed webhooks and reconciliation when the other side disagrees with you.',
    tags: ['SOAP', 'Webhooks', 'Idempotency', 'OAuth2'],
  },
  {
    icon: <HiSparkles />,
    title: 'LLM & Document-AI pipelines',
    text:
      'OCR output is messy; an LLM layer on top turns it into schema-validated JSON downstream systems can trust. Built for pharma document intake handling real compliance requirements.',
    tags: ['Claude API', 'Document AI', 'AWS Textract', 'Structured output'],
  },
  {
    icon: <HiCpuChip />,
    title: 'Python automation',
    text:
      'Pipelines that remove manual steps from business-critical workflows — SAP integration, Pandas/SQL transforms and scheduled jobs. Up to 70% operational time saved at Scienza.',
    tags: ['Python', 'Pandas', 'SAP', 'ETL'],
  },
  {
    icon: <HiPresentationChartLine />,
    title: 'Testing & observability',
    text:
      '250+ automated tests gating every merge, Sentry on the other end, and CI that refuses to ship red. Shipping fast only counts if you find out when it breaks.',
    tags: ['Pytest', 'CI/CD', 'Sentry', 'Docker'],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 border-y border-white/5 bg-ink-800/40">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="section-eyebrow">What I work on</span>
          <h2 className="section-title">
            The parts I&apos;m <span className="gradient-text">actually good at</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Not a menu — this is where I&apos;ve spent the hours and what I&apos;d want to be doing
            on your team.
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
