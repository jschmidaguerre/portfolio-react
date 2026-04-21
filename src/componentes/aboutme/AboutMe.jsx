import React from 'react';
import { HiSparkles, HiBolt, HiCpuChip, HiCodeBracket } from 'react-icons/hi2';

const HIGHLIGHTS = [
  {
    icon: <HiCodeBracket />,
    title: 'Full-stack, end-to-end',
    text:
      'I ship complete products — React front-ends, Node/Python back-ends, REST APIs, databases, auth, deploys and CI. Comfortable alone across the whole stack.',
  },
  {
    icon: <HiSparkles />,
    title: 'SAAS builder — Spom Bridge',
    text:
      'I designed, engineered and launched Spom Bridge, a full-stack SAAS, on my own. Product thinking, architecture, UX and delivery under one hat.',
  },
  {
    icon: <HiBolt />,
    title: 'AI-First workflow',
    text:
      'Every project is engineered with Claude Code as my core development partner. LLMs, agents and AI tooling are first-class citizens in my stack.',
  },
  {
    icon: <HiCpuChip />,
    title: 'Automation with real ROI',
    text:
      'Python, Document AI/OCR, SAP integrations and scraping engines that cut operational time by up to 70% with measurable business impact.',
  },
];

const STATS = [
  { value: 'Spom', label: 'Full-stack SAAS I built solo' },
  { value: 'AI-First', label: 'Engineering philosophy' },
  { value: '70%', label: 'Ops time reduced at Scienza' },
  { value: '5+', label: 'Years building across the stack' },
];

const AboutMe = () => {
  return (
    <section id="about-me" className="relative py-24">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="section-eyebrow">About me</span>
            <h2 className="section-title">
              Full-stack developer who{' '}
              <span className="gradient-text">ships products</span>
            </h2>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              I&apos;m <span className="text-white font-semibold">Juan Segundo Schmid Aguerre</span>,
              a 23-year-old <span className="text-white font-semibold">full-stack developer</span>{' '}
              and Systems Engineering student from Buenos Aires, Argentina. I build products
              end-to-end — from architecture to the pixel — with a strong{' '}
              <span className="text-accent-400 font-medium">AI-First</span> philosophy.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              My flagship project is{' '}
              <span className="text-accent-400 font-medium">Spom Bridge</span>, a full-stack SAAS
              I designed, built and shipped completely solo — front-end, back-end, database,
              auth, payments and deploy. In parallel, I lead{' '}
              <span className="text-slate-200 font-medium">automation &amp; AI at Scienza Argentina</span>,
              where I re-architected the entire pharma document-reception workflow with Document
              AI, OCR and Python pipelines.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Previously, I worked as a Functional Analyst at{' '}
              <span className="text-slate-200 font-medium">Whirlpool Corporation</span>, bridging
              IT and business in Agile teams. Across every stack and role, I build with{' '}
              <span className="text-accent-400 font-medium">Claude Code</span> at the center of
              my workflow — shipping faster, safer and at a higher bar than I could alone.
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
