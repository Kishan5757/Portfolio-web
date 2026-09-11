import React from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  GraduationCap, 
  Award,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ResumeSection({ onViewResume, showToast }) {
  const { personalInfo } = portfolioData;


  const handleDownload = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#ea580c', '#f97316', '#fbbf24', '#ffffff']
    });

    if (showToast) {
      showToast('Downloading Kishan_KS_Resume.pdf...');
    }

    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Kishan_KS_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl border border-orange-300/60 dark:border-orange-500/20 p-8 sm:p-12 relative overflow-hidden shadow-md bg-gradient-to-br from-white via-orange-50/50 to-orange-100/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-[#1a1c29]">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-900 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Looking for a <span className="text-gradient-orange">Full-Time or Internship Candidate?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed max-w-2xl font-normal">
                My resume includes a detailed overview of my Computer Science coursework, full-stack projects (Metro-Bot, UrbanEye), competitive problem-solving records, and verified certifications.
              </p>

              {/* Quick Resume Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-200 shadow-2xs">
                  <GraduationCap className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                  <span>B.E. CSE &bull; BNMIT (2028)</span>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-200 shadow-2xs">
                  <Award className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                  <span>Verified Certifications</span>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-200 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                  <span>Hackathon Finalist</span>
                </div>
              </div>
            </div>

            {/* Right CTAs */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 justify-center">
              <button
                onClick={onViewResume}
                className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-orange-300/80 dark:border-slate-700 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 shadow-xs transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                <span>View Interactive Resume</span>
              </button>

              <button
                onClick={handleDownload}
                className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              <div className="text-center">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Configurable path: <code className="font-mono text-orange-600 dark:text-orange-400 font-bold">public/resume.pdf</code>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
