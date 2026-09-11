import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Sparkles, 
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectCardGraphic from './ProjectCardGraphic';



export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle ESC key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#111827] rounded-2xl shadow-2xl border border-orange-500/20 overflow-hidden my-8 max-h-[90vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-orange-200 dark:border-slate-800 bg-orange-50/90 dark:bg-slate-900/80 sticky top-0 z-20 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-bold shadow-xs">
              {project.badge || project.category}
            </span>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white hover:bg-orange-200/60 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-white dark:bg-[#111827]">
          {/* Interactive UI Mockup */}
          <div className="w-full">
            <ProjectCardGraphic projectId={project.id} title={project.title} />
          </div>

          {/* Tagline */}
          <div className="text-base sm:text-lg font-bold text-orange-700 dark:text-orange-400">
            {project.tagline}
          </div>

          {/* Project Summary */}
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
            {project.shortDescription}
          </p>

          {/* Problem & Solution Dual Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4.5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-400/30 dark:border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-orange-500/10 dark:bg-orange-500/5 border border-orange-400/30 dark:border-orange-500/20 space-y-2">
              <div className="flex items-center gap-2 text-orange-800 dark:text-orange-400 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span>Key Features &amp; Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-850 dark:text-slate-200 bg-orange-50/50 dark:bg-slate-800/40 p-3 rounded-xl border border-orange-200/80 dark:border-slate-700/60 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-500 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
              <span>Technologies &amp; Tools Applied</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-bold bg-orange-100 dark:bg-orange-950/40 text-orange-950 dark:text-orange-300 border border-orange-300 dark:border-orange-900/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* What I Learned / Engineering Insights */}
          <div className="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-orange-200/80 dark:border-slate-700 space-y-2">
            <h4 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
              <span>Key Learnings &amp; Architectural Takeaway</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-normal">
              {project.id === 'metro-bot' && "Strengthened algorithmic implementation of graph traversal (Dijkstra's shortest path) under strict frontend latency constraints, while architecting offline-first LocalStorage persistence for mobile commuters."}
              {project.id === 'urban-eye' && "Gained hands-on experience designing end-to-end full-stack architectures integrating Leaflet geospatial coordinate capture with automated machine learning classification for civic triage pipelines."}
              {project.id === 'smarthealth-ai' && "Mastered multi-class classification workflows with Scikit-learn, data preprocessing in Pandas/NumPy, and exposing low-latency inference endpoints via FastAPI microservices."}
              {project.id === 'codereview-ai' && "Deepened understanding of AST syntax tree parsing, GitHub REST webhooks, and automating code linting and security analysis for team development velocity."}
              {project.id === 'portfolio-v2' && "Emphasized web performance, semantic HTML accessibility, modern React component architecture, and building a cohesive, responsive UI design system with Tailwind CSS."}
              {!['metro-bot', 'urban-eye', 'smarthealth-ai', 'codereview-ai', 'portfolio-v2'].includes(project.id) && "Deepened engineering problem-solving, modular architecture design, and building robust, user-centric software solutions."}
            </p>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 border-t border-orange-200 dark:border-slate-800 bg-orange-50/90 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-20 backdrop-blur">
          <div className="text-xs text-slate-700 dark:text-slate-400 font-semibold">
            Repository status: <span className="font-bold text-emerald-700 dark:text-emerald-400">{project.stats?.status || 'Active'}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4.5 py-2.5 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-800 border border-orange-300/80 dark:border-slate-700 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-all flex items-center gap-2 shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-md shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Live Application Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
