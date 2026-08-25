import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';


export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-900 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Education & <span className="text-gradient-orange">Foundational Learning</span>
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-300 font-medium">
            Rigorous engineering coursework coupled with strong algorithmic and software foundations.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-orange-300/50 dark:border-orange-500/20 shadow-xs relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/40 text-orange-900 dark:text-orange-400 text-xs font-bold mb-2 border border-orange-200 dark:border-orange-900/60">
                    {item.status}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                    {item.degree}
                  </h3>
                  <div className="text-base font-bold text-orange-600 dark:text-orange-400 mt-0.5">
                    {item.branch}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-300 mt-1">
                    {item.institution}
                  </div>
                </div>

                {/* Meta details badge */}
                <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs text-slate-600 dark:text-slate-400 shrink-0">
                  <span className="flex items-center gap-1.5 font-bold px-3 py-1 rounded-xl bg-orange-100/80 dark:bg-orange-950/40 text-orange-950 dark:text-orange-300 border border-orange-300/80 dark:border-orange-900/60 font-mono shadow-xs">
                    <Calendar className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                    {item.startYear} – {item.endYear}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                    <MapPin className="w-3 h-3 text-orange-600 dark:text-slate-400" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-100/90 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-900/60 font-black font-mono shadow-xs">
                    <Award className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                    CGPA: {item.cgpa}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-5">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-500 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Coursework Pills */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500" />
                  <span>Relevant Coursework & Disciplines</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-orange-200/80 dark:border-slate-700 hover:border-orange-500/50 shadow-xs transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
