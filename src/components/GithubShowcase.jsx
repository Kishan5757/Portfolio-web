import React from 'react';
import { 
  Star, 
  GitFork, 
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';



export default function GithubShowcase() {
  const { githubShowcase, personalInfo } = portfolioData;

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-900 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Open Source &amp; Repositories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              GitHub <span className="text-gradient-orange">Showcase</span>
            </h2>
          </div>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 group"
          >
            <span>Explore All Repositories</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {githubShowcase.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 sm:p-6 rounded-2xl border border-orange-300/50 dark:border-orange-500/20 shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                    <h3 className="text-sm sm:text-base font-bold text-slate-950 dark:text-white font-mono group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[10px] font-bold text-slate-800 dark:text-slate-300 border border-orange-200 dark:border-slate-700 shadow-2xs">
                    Public
                  </span>
                </div>

                <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed line-clamp-2 font-normal">
                  {repo.description}
                </p>

                {/* Topics tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {repo.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-orange-100/90 dark:bg-orange-950/40 text-orange-950 dark:text-orange-300 border border-orange-300/80 dark:border-orange-900/60"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Footer Stats */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span className="font-bold text-slate-850 dark:text-slate-200">{repo.language}</span>
                  </span>

                  <span className="flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-300">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500/40" />
                    <span>{repo.stars}</span>
                  </span>

                  <span className="flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-300">
                    <GitFork className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>

                <span className="text-orange-600 dark:text-orange-400 font-bold group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
