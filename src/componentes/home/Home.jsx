import React, { useEffect, useMemo, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const ROLES = [
  'AI-First Full-Stack Developer',
  'SAAS Builder — Spom Bridge',
  'Systems Engineer',
  'Python Automation Specialist',
  'Process Analyst',
];

const useTyped = (words, speed = 80, pause = 1600) => {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, sub.length + 1);
          setSub(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          const next = current.slice(0, sub.length - 1);
          setSub(next);
          if (next === '') {
            setDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [sub, deleting, index, words, speed, pause]);

  return sub;
};

const Home = () => {
  const words = useMemo(() => ROLES, []);
  const typed = useTyped(words);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-radial"
    >
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
        aria-hidden
      />

      <div className="container-narrow relative z-10 pt-28 pb-24">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 animate-fade-in-up">
            <span className="pill !border-accent-400/40 !text-accent-400 !bg-accent-400/10 mb-5">
              <HiSparkles className="text-accent-400" />
              Available for new projects · Buenos Aires, Argentina
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight">
              Hi, I&apos;m{' '}
              <span className="gradient-text">Juan Segundo</span>
              <br />
              <span className="text-slate-300 text-3xl sm:text-4xl lg:text-5xl font-semibold">
                I build{' '}
                <span className="gradient-text">{typed}</span>
                <span className="inline-block w-[3px] h-8 sm:h-10 lg:h-12 bg-accent-400 align-middle ml-1 animate-blink" />
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300/90 max-w-2xl leading-relaxed">
              <span className="text-white font-semibold">AI-First Full-Stack Developer</span> &amp;
              Systems Engineer. I design, build and ship products end-to-end — from the{' '}
              <span className="text-accent-400 font-medium">React front-end</span> to the{' '}
              <span className="text-accent-400 font-medium">Python/Node backend</span>,
              databases and intelligent automations with{' '}
              <span className="text-accent-400 font-medium">LLMs and Document AI</span>.
              Creator of <span className="text-white font-semibold">Spom Bridge</span>, a
              full-stack SAAS I designed and built solo. Every line is engineered with{' '}
              <span className="text-accent-400 font-medium">Claude Code</span> as my core
              development partner.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ScrollLink to="projects" smooth duration={500} offset={-70} className="btn-primary cursor-pointer">
                View my work
              </ScrollLink>
              <ScrollLink to="contact-me" smooth duration={500} offset={-70} className="btn-ghost cursor-pointer">
                Let&apos;s talk
              </ScrollLink>
              <a
                href={`${process.env.PUBLIC_URL}/img/cv.pdf`}
                download="Juan-Segundo-Schmid-Aguerre-CV.pdf"
                className="btn-ghost"
              >
                Download CV
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-slate-400">
              <a
                href="https://github.com/jschmidaguerre"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-400 transition"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-segundo-schmid-aguerre-311b16225/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:juanseaguerre@gmail.com"
                className="hover:text-accent-400 transition"
                aria-label="Email"
              >
                <FaEnvelope size={22} />
              </a>
              <div className="h-5 w-px bg-white/10" />
              <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider">
                <span><span className="text-accent-400">1</span> SAAS shipped solo</span>
                <span><span className="text-accent-400">5+</span> yrs full-stack</span>
                <span><span className="text-accent-400">70%</span> ops time saved</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative animate-fade-in">
            <div className="relative mx-auto w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500/40 to-accent-400/40 blur-3xl" />
              <div className="absolute inset-0 rounded-full border border-white/10 animate-slow-spin" />
              <div className="absolute inset-4 rounded-full border border-accent-400/30 animate-slow-spin [animation-direction:reverse]" />
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-glow border border-white/10">
                <img
                  src={`${process.env.PUBLIC_URL}/img/profilepic.jpg`}
                  alt="Juan Segundo Schmid Aguerre"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 card px-3 py-2 text-xs font-mono animate-float">
                <span className="text-accent-400">$</span> claude code
              </div>
              <div
                className="absolute -bottom-2 -left-4 card px-3 py-2 text-xs font-mono animate-float"
                style={{ animationDelay: '1.2s' }}
              >
                <span className="text-accent-400">🤖</span> AI-First
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <ScrollLink
          to="about-me"
          smooth
          duration={500}
          offset={-70}
          className="text-accent-400 hover:text-accent-300 cursor-pointer animate-bounce block"
          aria-label="Scroll to about me"
        >
          <FaChevronDown size={28} />
        </ScrollLink>
      </div>
    </section>
  );
};

export default Home;
