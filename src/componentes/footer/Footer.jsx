import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-ink-900/70 py-12">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white font-display font-bold grid place-items-center shadow-glow">
                JS
              </span>
              <span className="font-display font-semibold tracking-wide text-slate-100">
                Schmid Aguerre
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Python backend &amp; AI engineer in Buenos Aires, Argentina. Open to remote roles
              across US and European teams (GMT-3).
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Navigate</p>
            <ul className="space-y-2 text-sm">
              {[
                ['about-me', 'About'],
                ['experience', 'Experience'],
                ['projects', 'Projects'],
                ['services', 'Services'],
                ['contact-me', 'Contact'],
              ].map(([to, label]) => (
                <li key={to}>
                  <ScrollLink
                    to={to}
                    smooth
                    duration={500}
                    offset={-70}
                    className="text-slate-300 hover:text-accent-400 transition cursor-pointer"
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Connect</p>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.linkedin.com/in/juan-segundo-schmid-aguerre-311b16225/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg grid place-items-center bg-white/5 border border-white/10 text-slate-200 hover:text-accent-400 hover:border-accent-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/jschmidaguerre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg grid place-items-center bg-white/5 border border-white/10 text-slate-200 hover:text-accent-400 hover:border-accent-400 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:juanseaguerre@gmail.com"
                className="w-10 h-10 rounded-lg grid place-items-center bg-white/5 border border-white/10 text-slate-200 hover:text-accent-400 hover:border-accent-400 transition"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            <p className="text-sm text-slate-400">
              <a href="mailto:juanseaguerre@gmail.com" className="hover:text-accent-400 transition">
                juanseaguerre@gmail.com
              </a>
            </p>
            <p className="text-sm text-slate-400">+54 11 3369-0090</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Juan Segundo Schmid Aguerre. All rights reserved.</p>
          <p className="font-mono">
            Built with React + Tailwind ·{' '}
            <span className="text-accent-400">Buenos Aires, GMT-3</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
