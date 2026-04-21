import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const LINKS = [
  { to: 'home', label: 'Home' },
  { to: 'about-me', label: 'About' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'services', label: 'Services' },
  { to: 'tech-stack', label: 'Stack' },
  { to: 'education', label: 'Education' },
  { to: 'contact-me', label: 'Contact' },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-narrow py-4 flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth
          duration={500}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white font-display font-bold grid place-items-center shadow-glow">
            JS
          </span>
          <span className="hidden sm:inline font-display font-semibold tracking-wide text-slate-100 group-hover:text-accent-400 transition">
            Schmid Aguerre
          </span>
        </ScrollLink>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {LINKS.map((l) => (
            <ScrollLink
              key={l.to}
              to={l.to}
              spy
              smooth
              duration={500}
              offset={-70}
              activeClass="active"
              className="nav-link cursor-pointer"
            >
              {l.label}
            </ScrollLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={`${process.env.PUBLIC_URL}/img/cv.pdf`}
            download
            className="btn-primary text-sm !py-2 !px-4"
          >
            Download CV
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-200 hover:text-accent-400 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className={`h-7 w-7 transition-transform duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? 'max-h-[600px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-5 pt-2 space-y-2 bg-ink-900/95 border-t border-white/5">
          {LINKS.map((l) => (
            <ScrollLink
              key={l.to}
              to={l.to}
              smooth
              duration={500}
              offset={-70}
              onClick={close}
              className="block py-2 text-slate-200 hover:text-accent-400 transition cursor-pointer"
            >
              {l.label}
            </ScrollLink>
          ))}
          <a
            href={`${process.env.PUBLIC_URL}/img/cv.pdf`}
            download
            onClick={close}
            className="btn-primary w-full mt-3"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
