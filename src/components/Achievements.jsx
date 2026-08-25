import React from 'react';
import { 
  Trophy, 
  Calendar
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';


export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-900 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Key <span className="text-gradient-orange">Achievements & Awards</span>
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-300 font-medium">
            Recognitions from hackathons, competitive programming platforms, and academic departments.
          </p>
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 sm:p-7 rounded-2xl border border-orange-300/50 dark:border-orange-500/20 shadow-xs flex items-start gap-4"
            >
              <div className="p-3.5 rounded-2xl bg-orange-100/90 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-300 dark:border-orange-500/30 shrink-0 shadow-xs">
                <DynamicIcon name={item.icon} className="w-6 h-6" />
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-orange-100/90 dark:bg-orange-950/40 text-orange-950 dark:text-orange-300 border border-orange-300 dark:border-orange-900/60 uppercase">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <div className="text-xs font-bold text-orange-700 dark:text-orange-400">
                  {item.organization}
                </div>

                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
