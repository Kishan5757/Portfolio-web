import React from 'react';
import { 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Cpu,
  UserCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';

export default function About({ onResumeClick }) {
  const { about, personalInfo } = portfolioData;

  const coreStrengths = [
    "Full-Stack Web Architecture (React, Vite, Node.js)",
    "Applied Machine Learning & Data Pipeline Engineering",
    "Algorithmic Problem Solving & Data Structures in Java/C++",
    "Clean Code, Modular OOP Design & SOLID Principles",
    "RESTful API Design, Postman Testing & Database Schema Modeling",
    "Git Collaboration, Agile Workflows & Continuous Learning"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Bridging Theory with <span className="text-gradient-orange">Real-World Engineering</span>
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-300 font-medium">
            A Computer Science student passionate about engineering dependable, user-first software.
          </p>
        </div>

        {/* Grid: Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-orange-300/40 dark:border-orange-500/20 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <span>Professional Background</span>
              </h3>
              
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  📍 Based in <span className="font-bold text-slate-900 dark:text-slate-200">{personalInfo.location}</span>
                </div>
                <button
                  onClick={onResumeClick}
                  className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 flex items-center gap-1 group"
                >
                  <span>Read Full Resume Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="glass-card p-6 rounded-2xl border border-orange-300/40 dark:border-orange-500/20 shadow-xs">
              <h4 className="text-sm font-bold text-slate-950 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span>Core Engineering Principles</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreStrengths.map((strength, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-orange-600 dark:bg-orange-500 mt-1.5 shrink-0" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <span>Key Focus Areas</span>
            </h3>

            <div className="space-y-3">
              {about.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-4.5 rounded-2xl border border-orange-300/40 dark:border-orange-500/15 flex items-start gap-3.5 shadow-xs"
                >
                  <div className="p-2.5 rounded-xl bg-orange-100/80 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 border border-orange-300 dark:border-orange-900/60 shrink-0">
                    <DynamicIcon name={area.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                      {area.title}
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed font-normal">
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
