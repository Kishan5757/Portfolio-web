import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Users,
  Trophy,
  GitPullRequest
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';


export default function Experience() {
  const { experience } = portfolioData;

  const typeIcons = {
    Internship: <Briefcase className="w-4 h-4 text-orange-500" />,
    'Technical Activity': <Users className="w-4 h-4 text-orange-500" />,
    Hackathons: <Trophy className="w-4 h-4 text-orange-500" />,
    'Open Source': <GitPullRequest className="w-4 h-4 text-orange-500" />
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-900 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Experience & <span className="text-gradient-orange">Technical Activities</span>
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-300 font-medium">
            Internships, hackathons, departmental technical leadership, and collaborative open-source work.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-orange-400/40 dark:border-orange-500/30 pl-6 sm:pl-8 space-y-10">
          {experience.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-orange-500 flex items-center justify-center shadow-md group-hover:scale-125 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600 dark:bg-orange-500" />
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-7 rounded-2xl border border-orange-300/50 dark:border-orange-500/20 shadow-xs space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-orange-100/90 dark:bg-orange-950/40 border border-orange-300/80 dark:border-orange-900/60 inline-flex shadow-xs">
                        {typeIcons[item.type] || <Briefcase className="w-4 h-4 text-orange-600 dark:text-orange-500" />}
                      </span>
                      <span className="text-xs font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white mt-1">
                      {item.role}
                    </h3>
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-300">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1 font-mono font-bold px-3 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-orange-200/80 dark:border-slate-700 shadow-xs">
                      <Calendar className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                      <MapPin className="w-3 h-3 text-orange-600 dark:text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Key Bullet Achievements */}
                <div className="space-y-2 pt-1">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-500 mt-0.5 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills used */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-orange-100/90 dark:bg-orange-950/40 text-orange-950 dark:text-orange-300 border border-orange-300/80 dark:border-orange-900/60 shadow-2xs"
                    >
                      {skill}
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
