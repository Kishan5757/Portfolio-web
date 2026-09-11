import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const pos = target.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 pt-16 pb-12 border-t border-orange-300/60 dark:border-orange-500/20 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-300 dark:border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-orange-500/20">
                K
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-slate-950 dark:text-white flex items-center gap-1.5">
                  Kishan K S
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                </span>
                <span className="text-xs text-orange-700 dark:text-orange-400 font-mono block">
                  Computer Science Engineering Undergraduate
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Aspiring Software Engineer &amp; Web Developer. Passionate about building robust full-stack applications, intelligent AI models, and clean user interfaces.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.email}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Status */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider">
              Status &amp; Location
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              📍 {personalInfo.location}
            </p>
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-orange-200 dark:border-slate-700/60 text-xs space-y-1">
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Available for Opportunities
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                SDE Internships &amp; Full-Time Roles
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
            <span>&copy; 2026 Kishan K S. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400">
              <Code2 className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
              Built with React &amp; Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-orange-500 hover:text-white text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-1 font-semibold text-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
