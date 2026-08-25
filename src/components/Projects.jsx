import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectCardGraphic from './ProjectCardGraphic';



export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'AI/ML', 'Java', 'Python', 'Other'];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Other') {
      return !['Web', 'AI/ML', 'Java', 'Python'].includes(project.category);
    }
    return project.category === activeFilter || project.categories?.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-900 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Featured <span className="text-gradient-orange">Projects & Systems</span>
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-300 font-medium">
            Real-world software built to solve actual problems — from municipal civic platforms to metro transit assistants.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/30 scale-105'
                  : 'bg-white/90 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 border border-orange-300/70 dark:border-slate-700/80 hover:border-orange-500/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl border border-orange-300/50 dark:border-orange-500/20 overflow-hidden flex flex-col justify-between shadow-xs group"
            >
              <div>
                {/* Project Graphic / Visual Preview */}
                <div className="relative">
                  <ProjectCardGraphic projectId={project.id} title={project.title} />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur text-orange-700 dark:text-orange-400 text-[11px] font-black border border-orange-300 dark:border-orange-500/30 shadow-xs">
                      {project.badge || project.category}
                    </span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs font-bold text-orange-700 dark:text-orange-400">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-800 dark:text-slate-200 line-clamp-3 leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-orange-50 dark:bg-slate-800 text-orange-950 dark:text-slate-300 border border-orange-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold text-orange-700 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/40 border border-orange-200/80 dark:border-orange-900/40">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Card Footer */}
              <div className="p-5 sm:p-6 pt-0 space-y-3">
                {/* Details Button */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-orange-950 dark:text-orange-200 bg-orange-100/90 dark:bg-orange-950/50 border border-orange-300 dark:border-orange-900/60 hover:bg-orange-200/90 dark:hover:bg-orange-900/60 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Info className="w-3.5 h-3.5 text-orange-700 dark:text-orange-400" />
                  <span>View Details & Architecture</span>
                </button>

                {/* External Action Links */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 font-bold flex items-center gap-1 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-700 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
