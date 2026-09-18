import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Code2, 
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ showToast }) {
  const { personalInfo, stats } = portfolioData;


  const handleDownloadResume = () => {
    // Fire confetti effect
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#ea580c', '#f97316', '#fbbf24', '#ffffff']
    });

    if (showToast) {
      showToast('Downloading Kishan_KS_Resume.pdf...');
    }

    // Trigger download
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl || '/resume.pdf';
    link.download = 'Kishan_KS_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-400/5 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-60 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/15 border border-orange-300 dark:border-orange-500/30 text-orange-900 dark:text-orange-300 text-xs font-bold mb-6 animate-float shadow-sm backdrop-blur">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-4.5" />
          <span>{personalInfo.status}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15] mb-4">
          Hi, I&apos;m{' '}
          <span className="text-gradient-orange inline-block">
            {personalInfo.name}
          </span>
        </h1>

        {/* Subtitle / Role */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 max-w-3xl mx-auto mb-6 leading-relaxed">
          {personalInfo.title}
        </p>

        {/* Short Bio */}
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
          {personalInfo.shortBio}
        </p>

        {/* Location & Quick Meta */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-8">
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            {personalInfo.location}
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            B.E. CSE @ BNMIT &bull; Class of 2028
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 shadow-xs">
            <Code2 className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            React &bull; Python &bull; Java
          </span>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleDownloadResume}
            className="px-5 py-3 rounded-xl text-sm font-bold text-orange-950 dark:text-orange-200 bg-orange-100/90 dark:bg-orange-950/50 border border-orange-300 dark:border-orange-800/70 hover:bg-orange-200/90 dark:hover:bg-orange-900/60 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xs"
          >
            <Download className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-5 py-3 rounded-xl text-sm font-bold text-slate-850 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-orange-500/60 hover:text-orange-600 dark:hover:text-orange-400 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xs"
          >
            <Mail className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Links Strip */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-slate-700 border border-orange-200/80 dark:border-slate-700 shadow-xs transition-all hover:-translate-y-1"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-slate-700 border border-orange-200/80 dark:border-slate-700 shadow-xs transition-all hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.email}
            className="p-3 rounded-xl bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-slate-700 border border-orange-200/80 dark:border-slate-700 shadow-xs transition-all hover:-translate-y-1"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Key Statistics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-4.5 rounded-2xl text-center border border-orange-300/40 dark:border-orange-500/20 shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
