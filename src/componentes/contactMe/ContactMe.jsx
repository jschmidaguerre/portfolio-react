import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    const data = new FormData(event.target);
    try {
      const res = await fetch('https://formspree.io/f/xkgnblle', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        event.target.reset();
      } else {
        setError('Something went wrong. Please try again or email me directly.');
      }
    } catch (err) {
      setError('Network error. Please try again or email me directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-me" className="relative py-24">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">talk</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            I&apos;m open to remote backend and AI engineering roles. If you&apos;re hiring — or
            just want to dig into how the AFIP integration works — drop me a line and I&apos;ll
            get back to you within a day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-5">
            <div className="card p-6">
              <h3 className="font-display text-lg font-semibold mb-4">Direct contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-accent-400 flex-shrink-0">
                    <FaEnvelope />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">Email</p>
                    <a
                      href="mailto:juanseaguerre@gmail.com"
                      className="text-slate-200 hover:text-accent-400 transition break-all"
                    >
                      juanseaguerre@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-accent-400 flex-shrink-0">
                    <FaPhone />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">Phone</p>
                    <a
                      href="tel:+541133690090"
                      className="text-slate-200 hover:text-accent-400 transition"
                    >
                      +54 11 3369-0090
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-accent-400 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">Location</p>
                    <p className="text-slate-200">Buenos Aires, Argentina</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-white/5 flex gap-3">
                <a
                  href="https://www.linkedin.com/in/juan-segundo-schmid-aguerre-311b16225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-ghost !py-2.5 text-sm"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/jschmidaguerre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-ghost !py-2.5 text-sm"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

            <div className="card p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                Working with me
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Remote-first, based in Buenos Aires (GMT-3) — a full overlap with US Eastern
                business hours and a workable one with most of Europe. I work in English and
                Spanish. Looking for backend or AI engineering roles where the hard part is
                integration, resilience and data.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 mx-auto rounded-full bg-accent-400/20 text-accent-400 grid place-items-center text-3xl mb-4">
                    ✓
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">Message sent</h3>
                  <p className="text-slate-400">
                    Thanks for reaching out — I&apos;ll reply as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium uppercase tracking-widest text-slate-400 mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-ink-700/60 border border-white/5 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30 focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium uppercase tracking-widest text-slate-400 mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-ink-700/60 border border-white/5 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30 focus:outline-none transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-widest text-slate-400 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-lg bg-ink-700/60 border border-white/5 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-ink-700/60 border border-white/5 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30 focus:outline-none transition resize-none"
                    />
                  </div>
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending…' : 'Send message'}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
