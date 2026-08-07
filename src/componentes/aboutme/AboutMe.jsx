import React from 'react';
import { HiSparkles, HiBolt, HiCpuChip, HiCodeBracket } from 'react-icons/hi2';

const HIGHLIGHTS = [
  {
    icon: <HiCodeBracket />,
    title: 'Backend that stays up',
    text:
      'FastAPI services on PostgreSQL and Redis, multi-tenant from day one. JWT/2FA, rate limiting, 250+ tests gating every merge and Sentry on the other end.',
  },
  {
    icon: <HiSparkles />,
    title: 'Spom Bridge — shipped and operated solo',
    text:
      'A multi-tenant e-invoicing SaaS I architected, built and still run: 40+ domain modules, real customers, real money moving through it.',
  },
  {
    icon: <HiCpuChip />,
    title: 'Integrations nobody wants to touch',
    text:
      "Argentina's tax authority over SOAP — certificate signing, ambiguous errors, no idempotency. Solved with idempotency keys, bounded retries and a reconciliation state machine.",
  },
  {
    icon: <HiBolt />,
    title: 'LLMs where they actually pay off',
    text:
      'Document AI and OCR layered with an LLM to turn messy pharma paperwork into clean structured JSON — cutting operational time by up to 70%.',
  },
];

const STATS = [
  { value: 'Spom', label: 'Multi-tenant SaaS, built & operated solo' },
  { value: '40+', label: 'Domain modules in production' },
  { value: '70%', label: 'Ops time reduced at Scienza' },
  { value: '250+', label: 'Automated tests gating CI' },
];

const AboutMe = () => {
  return (
    <section id="about-me" className="relative py-24">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="section-eyebrow">About me</span>
            <h2 className="section-title">
              I don&apos;t just ship it —{' '}
              <span className="gradient-text">I keep it running</span>
            </h2>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              I&apos;m <span className="text-white font-semibold">Juan Segundo Schmid Aguerre</span>,
              a <span className="text-white font-semibold">backend engineer</span> in Buenos Aires
              working in <span className="text-accent-400 font-medium">Python and FastAPI</span>.
              Most of what I enjoy sits where systems meet the real world: third-party APIs that
              lie to you, data that arrives malformed, and money that has to reconcile at the end
              of the day.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              My flagship is{' '}
              <a
                href="https://app.spomsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 font-medium underline decoration-accent-400/40 underline-offset-4 hover:decoration-accent-400"
              >
                Spom Bridge
              </a>
              {' '}(app.spomsolutions.com), a multi-tenant e-invoicing SaaS I architected, built
              and still operate on my own — front-end, back-end, database, auth and deploy. It
              talks to{' '}
              <span className="text-slate-200 font-medium">AFIP/ARCA over SOAP</span>, Mercado
              Libre, Tiendanube and Mercado Pago, and it has to be right every time: an invoice
              that fails silently is a legal problem, not a bug report.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              In parallel I lead{' '}
              <span className="text-slate-200 font-medium">automation &amp; AI at Scienza Argentina</span>,
              where I rebuilt the pharma document-reception pipeline with Document AI, OCR and an
              LLM layer. Before that I was a Functional Analyst at{' '}
              <span className="text-slate-200 font-medium">Whirlpool</span>, which is where I
              learned to ask what the business actually needs before writing anything. I work with
              coding agents daily — with the tests, CI and review discipline that makes that safe.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              I&apos;m looking for <span className="text-white font-semibold">remote backend / AI
              roles</span>. Buenos Aires is GMT-3 — a full overlap with US Eastern business hours.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="card p-4">
                  <div className="text-2xl font-display font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-brand-500/10 to-accent-500/10 rounded-3xl blur-2xl" />
              <div className="relative grid sm:grid-cols-2 gap-5">
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.title}
                    className="card p-6 hover:-translate-y-1 transition duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-accent-400 text-2xl mb-4 group-hover:scale-110 transition">
                      {h.icon}
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-1.5">
                      {h.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
