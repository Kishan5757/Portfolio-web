import React from 'react';
import { 
  Terminal, 
  ExternalLink, 
  ArrowUpRight 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';


export default function CodingProfiles() {
  const { codingProfiles } = portfolioData;

  return (
    <section id="profiles" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-900 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Competitive & Developer Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Coding Profiles & <span className="text-gradient-orange">Problem Solving Stats</span>
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-300 font-medium">
            Active presence on leading competitive programming and algorithmic evaluation platforms.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {codingProfiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 rounded-2xl border border-orange-300/50 dark:border-orange-500/20 shadow-xs flex flex-col justify-between group transition-all"
            >
              <div className="space-y-3">
                {/* Platform Header */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-orange-100/90 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-300/80 dark:border-orange-900/60 group-hover:scale-110 transition-transform shadow-xs">
                    <DynamicIcon name={profile.icon} className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-950 dark:text-orange-400 text-[10px] font-bold">
                    {profile.badge}
                  </span>
                </div>

                {/* Name & Handle */}
                <div>
                  <h3 className="text-base font-bold text-slate-950 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors flex items-center justify-between">
                    <span>{profile.platform}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-600 dark:text-orange-500" />
                  </h3>
                  <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-400 mt-0.5">
                    @{profile.handle}
                  </div>
                </div>

                {/* Solved Stat Highlight */}
                <div className="p-2.5 rounded-xl bg-orange-50/80 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 text-center shadow-2xs">
                  <span className="text-xs font-black text-orange-600 dark:text-orange-400 font-mono block">
                    {profile.stats}
                  </span>
                </div>

                <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-2 font-medium">
                  {profile.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-black text-orange-600 dark:text-orange-400 flex items-center justify-between">
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
