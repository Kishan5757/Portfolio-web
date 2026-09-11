import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  ArrowRight,
  Code2,
  FileText,
  Terminal,
  Cpu,
  Globe,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onResumeClick }) {
  const { about, personalInfo, education } = portfolioData;
  const primaryEdu = education[0];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Target anchor for backwards compatibility */}
      <div id="education" className="sr-only" tabIndex={-1} aria-hidden="true" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-900 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Passionate Developer &amp; <span className="text-gradient-orange">Lifelong Learner</span>
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-300 font-medium">
            Building purposeful web applications, machine learning models, and scalable software solutions.
          </p>
        </div>

        {/* Two-Column Layout on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Side: Profile Photo / Avatar Area */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-sm glass-card rounded-3xl border border-orange-300/60 dark:border-orange-500/20 p-6 sm:p-7 shadow-lg relative overflow-hidden group">
              {/* Decorative top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500" />
              
              {/* Avatar Box with Glowing Background Frame */}
              <div className="relative mx-auto w-44 h-44 sm:w-48 sm:h-48 mb-6 mt-2 flex items-center justify-center">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 opacity-20 blur-xl group-hover:opacity-35 transition-opacity" />
                
                {/* Avatar Card Container */}
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 via-amber-600 to-orange-700 p-1 shadow-md shadow-orange-500/20 flex flex-col items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded-xl bg-slate-950 flex flex-col items-center justify-center p-4 relative text-center">
                    {/* Background subtle grid pattern */}
                    <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
                    
                    {/* Monogram / Icon representation */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-orange-500/30 mb-2">
                      K
                    </div>
                    
                    <span className="relative z-10 text-sm font-black text-white tracking-wide">
                      Kishan K S
                    </span>
                    <span className="relative z-10 text-[11px] font-mono text-orange-400 font-semibold mt-0.5">
                      @kishanks
                    </span>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <span className="absolute -top-2 -right-2 px-2 py-1 rounded-lg bg-white dark:bg-slate-900 border border-orange-200 dark:border-slate-700 text-[10px] font-bold text-orange-600 dark:text-orange-400 shadow-sm flex items-center gap-1">
                  <Code2 className="w-3 h-3" /> React &bull; ML
                </span>
                <span className="absolute -bottom-2 -left-2 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-orange-200 dark:border-slate-700 text-[10px] font-bold text-slate-800 dark:text-slate-200 shadow-sm flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-orange-500" /> BNMIT &bull; 2028
                </span>
              </div>

              {/* Profile Details */}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-semibold text-orange-700 dark:text-orange-400">
                  CSE Undergraduate &bull; Full-Stack &amp; AI/ML
                </p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Quick Status Pill */}
              <div className="mt-5 p-3 rounded-xl bg-orange-50 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700 text-center">
                <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Institution</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                  B N M Institute of Technology
                </div>
              </div>

              {/* View Resume CTA */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={onResumeClick}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-sm shadow-orange-500/25 transition-all hover:scale-102 active:scale-98 flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Full Resume</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative Intro & Compact Education Card */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            
            {/* About Me Narrative Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-orange-300/60 dark:border-orange-500/20 shadow-xs space-y-4">
              <div className="space-y-3.5 text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                <p className="font-semibold text-slate-950 dark:text-white">
                  Hi, I&apos;m <span className="text-orange-600 dark:text-orange-400 font-bold">Kishan K S</span>, a Computer Science Engineering student passionate about building software and exploring new technologies.
                </p>

                <p>
                  I&apos;m currently pursuing my <span className="font-semibold text-slate-950 dark:text-slate-100">B.E. in Computer Science and Engineering at B N M Institute of Technology</span>. My journey in technology has led me to explore <span className="font-semibold text-slate-950 dark:text-slate-100">web development, machine learning, backend development, and software engineering</span>.
                </p>

                <p>
                  I enjoy turning ideas into practical projects and learning by building. I&apos;ve worked on projects involving <span className="font-semibold text-slate-950 dark:text-slate-100">web applications, machine learning, mapping solutions, and interactive software</span>, while continuously improving my programming and problem-solving skills.
                </p>

                <p>
                  I&apos;m currently focused on becoming a stronger <span className="font-semibold text-slate-950 dark:text-slate-100">full-stack developer and software engineer</span>, while exploring AI/ML and building projects that solve real-world problems.
                </p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                    <span>Full-Stack Development (React, Vite, Node)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                    <span>Applied Machine Learning &amp; Python</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                    <span>Data Structures &amp; Algorithmic Thinking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                    <span>Problem Solving &amp; Clean Architecture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Education Card (Visually Distinct) */}
            <div className="glass-card glass-card-hover p-6 sm:p-7 rounded-3xl border border-orange-300/70 dark:border-orange-500/30 shadow-md relative overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-orange-100/90 dark:bg-orange-500/15 text-orange-700 dark:text-orange-400 border border-orange-300 dark:border-orange-500/30 shrink-0 shadow-xs">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/40 text-orange-900 dark:text-orange-400 text-[11px] font-bold border border-orange-200 dark:border-orange-900/60">
                      🎓 Engineering Degree
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white">
                      B.E. Computer Science &amp; Engineering
                    </h3>
                    <div className="text-sm font-bold text-orange-700 dark:text-orange-400">
                      B N M Institute of Technology (BNMIT)
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1 font-medium">
                      <MapPin className="w-3 h-3 text-orange-500" />
                      <span>Bengaluru, Karnataka, India</span>
                    </div>
                  </div>
                </div>

                {/* Timeline / Graduation Date Badge */}
                <div className="sm:text-right shrink-0 bg-orange-50/80 dark:bg-slate-800/80 p-3 rounded-2xl border border-orange-200/80 dark:border-slate-700">
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1.5">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Timeline
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-orange-500 text-white font-mono font-bold text-xs shadow-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      Expected: 2028
                    </span>
                  </div>
                </div>
              </div>

              {/* Coursework & Focus Pills */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Core Disciplines:
                </span>
                {primaryEdu.coursework.slice(0, 5).map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-orange-200/80 dark:border-slate-700 shadow-2xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Focus Areas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {about.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-4 rounded-2xl border border-orange-300/50 dark:border-orange-500/15 flex items-start gap-3 shadow-xs"
                >
                  <div className="p-2 rounded-xl bg-orange-100/80 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-300/70 dark:border-orange-900/60 shrink-0">
                    {area.icon === 'Globe' && <Globe className="w-4 h-4" />}
                    {area.icon === 'Layers' && <Layers className="w-4 h-4" />}
                    {area.icon === 'Brain' && <Cpu className="w-4 h-4" />}
                    {area.icon === 'Terminal' && <Terminal className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-950 dark:text-white">
                      {area.title}
                    </h4>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 mt-0.5 leading-relaxed font-normal line-clamp-2">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
