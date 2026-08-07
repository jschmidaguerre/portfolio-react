import React from 'react';
import {
  DiPython,
  DiReact,
  DiMongodb,
  DiJava,
  DiJavascript1,
  DiPostgresql,
  DiDocker,
  DiGit,
} from 'react-icons/di';
import {
  SiExpress,
  SiMicrosoftsqlserver,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiPandas,
  SiNumpy,
  SiSelenium,
  SiGithub,
  SiAmazonwebservices,
  SiOpenai,
  SiRedis,
  SiPytest,
  SiSentry,
} from 'react-icons/si';
import { FaDatabase, FaLock } from 'react-icons/fa';
import { HiSparkles, HiCodeBracket, HiServerStack, HiCpuChip, HiWrenchScrewdriver } from 'react-icons/hi2';

const CATEGORIES = [
  {
    title: 'Backend & APIs',
    icon: <HiServerStack />,
    accent: true,
    items: [
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'REST APIs', icon: <SiPostman /> },
      { name: 'OAuth2 / JWT', icon: <FaLock /> },
      { name: 'Node.js / Express', icon: <SiExpress /> },
    ],
  },
  {
    title: 'Languages',
    icon: <HiCodeBracket />,
    items: [
      { name: 'Python', icon: <DiPython /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <DiJavascript1 /> },
      { name: 'SQL', icon: <SiMicrosoftsqlserver /> },
      { name: 'Java', icon: <DiJava /> },
    ],
  },
  {
    title: 'Data & storage',
    icon: <FaDatabase />,
    items: [
      { name: 'PostgreSQL', icon: <DiPostgresql /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'MongoDB', icon: <DiMongodb /> },
      { name: 'SQL Server', icon: <SiMicrosoftsqlserver /> },
      { name: 'Pandas / NumPy', icon: <SiPandas /> },
    ],
  },
  {
    title: 'AI & document intelligence',
    icon: <HiSparkles />,
    items: [
      { name: 'Claude API', icon: <HiSparkles /> },
      { name: 'LLMs / GPT', icon: <SiOpenai /> },
      { name: 'Google Document AI', icon: <HiCpuChip /> },
      { name: 'AWS Textract', icon: <SiAmazonwebservices /> },
      { name: 'Structured output', icon: <SiNumpy /> },
    ],
  },
  {
    title: 'Infra, CI & observability',
    icon: <HiWrenchScrewdriver />,
    items: [
      { name: 'Docker', icon: <DiDocker /> },
      { name: 'Railway', icon: <HiServerStack /> },
      { name: 'Pytest', icon: <SiPytest /> },
      { name: 'Sentry', icon: <SiSentry /> },
      { name: 'Git / GitHub', icon: <SiGithub /> },
    ],
  },
  {
    title: 'Front-end & automation',
    icon: <DiReact />,
    items: [
      { name: 'React', icon: <DiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Selenium', icon: <SiSelenium /> },
      { name: 'SAP integration', icon: <DiGit /> },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative py-24">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Tech Stack</span>
          <h2 className="section-title">
            What I <span className="gradient-text">actually use</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Everything here is running in something I built and maintain — not a list of
            tutorials I finished.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className={`card p-6 hover:-translate-y-1 transition duration-300 ${
                cat.accent ? 'border-accent-400/40 shadow-glow-cyan' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`w-10 h-10 rounded-lg grid place-items-center text-xl ${
                    cat.accent
                      ? 'bg-gradient-to-br from-brand-500/30 to-accent-500/30 text-accent-300'
                      : 'bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-accent-400'
                  }`}
                >
                  {cat.icon}
                </span>
                <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <span
                    key={it.name}
                    className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:border-accent-400 hover:text-accent-300 transition"
                  >
                    <span className="text-base">{it.icon}</span>
                    {it.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
