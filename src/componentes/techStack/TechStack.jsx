import React from 'react';
import {
  DiPython,
  DiReact,
  DiNodejs,
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
  SiPandas,
  SiNumpy,
  SiSelenium,
  SiGithub,
  SiAmazonwebservices,
  SiOpenai,
} from 'react-icons/si';
import { FaFileExcel, FaDatabase } from 'react-icons/fa';
import { HiSparkles, HiCodeBracket, HiServerStack, HiCpuChip, HiWrenchScrewdriver } from 'react-icons/hi2';

const CATEGORIES = [
  {
    title: 'AI & Intelligent tooling',
    icon: <HiSparkles />,
    accent: true,
    items: [
      { name: 'Claude Code', icon: <HiSparkles /> },
      { name: 'LLMs / GPT', icon: <SiOpenai /> },
      { name: 'Document AI', icon: <HiCpuChip /> },
      { name: 'AWS Textract', icon: <SiAmazonwebservices /> },
      { name: 'AI Agents', icon: <HiSparkles /> },
    ],
  },
  {
    title: 'Languages',
    icon: <HiCodeBracket />,
    items: [
      { name: 'Python', icon: <DiPython /> },
      { name: 'JavaScript', icon: <DiJavascript1 /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Java', icon: <DiJava /> },
      { name: 'SQL', icon: <SiMicrosoftsqlserver /> },
    ],
  },
  {
    title: 'Frontend',
    icon: <HiCodeBracket />,
    items: [
      { name: 'React', icon: <DiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: <HiServerStack />,
    items: [
      { name: 'Node.js', icon: <DiNodejs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'REST APIs', icon: <SiPostman /> },
    ],
  },
  {
    title: 'Data, Scraping & Automation',
    icon: <HiCpuChip />,
    items: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Selenium', icon: <SiSelenium /> },
      { name: 'SAP', icon: <FaDatabase /> },
      { name: 'Excel (Expert)', icon: <FaFileExcel /> },
    ],
  },
  {
    title: 'Databases, DevOps & Tools',
    icon: <HiWrenchScrewdriver />,
    items: [
      { name: 'MongoDB', icon: <DiMongodb /> },
      { name: 'PostgreSQL', icon: <DiPostgresql /> },
      { name: 'SQL Server', icon: <SiMicrosoftsqlserver /> },
      { name: 'Docker', icon: <DiDocker /> },
      { name: 'Git / GitHub', icon: <SiGithub /> },
      { name: 'Git', icon: <DiGit /> },
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
            Tools that <span className="gradient-text">build the future</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A curated, battle-tested stack for full-stack products and AI-first automation —
            led by <span className="text-accent-400 font-medium">Claude Code</span> as my primary
            development companion.
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
