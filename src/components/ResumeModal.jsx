import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  GraduationCap, 
  Code2, 
  MapPin, 
  Sparkles,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, showToast }) {
  const { personalInfo, education, projects, certifications, achievements } = portfolioData;

  useEffect(() => {
    if (!isOpen) return;

    const orig = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ea580c', '#f97316', '#fbbf24', '#ffffff']
    });

    if (showToast) {
      showToast('Downloading resume...');
    }

    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Kishan_KS_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#111827] rounded-2xl shadow-2xl border border-orange-500/20 overflow-hidden my-4 max-h-[92vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/80 sticky top-0 z-20 backdrop-blur">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-500" />
            <h2 id="resume-modal-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Kishan K S — Interactive Resume Preview
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white dark:bg-[#0e1420] text-slate-800 dark:text-slate-200 font-sans print:p-0">
          {/* Header */}
          <div className="border-b-2 border-orange-500/30 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400 mt-0.5">
                {personalInfo.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-3 h-3 text-orange-500" />
                {personalInfo.location}
              </p>
            </div>

            <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300 text-center sm:text-right font-medium">
              <div><a href={`mailto:${personalInfo.email}`} className="hover:text-orange-500">{personalInfo.email}</a></div>
              <div><a href={`tel:${personalInfo.phone}`} className="hover:text-orange-500">{personalInfo.displayPhone || personalInfo.phone}</a></div>
              <div className="text-orange-600 dark:text-orange-400 font-semibold font-mono">
                github.com/kishanks &bull; leetcode.com/u/kishan_ks
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-orange-600 dark:text-orange-400 flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>

            {education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{edu.degree}</div>
                  <div className="text-slate-600 dark:text-slate-400 text-xs">{edu.institution}, {edu.location}</div>
                </div>
                <div className="text-right shrink-0 font-mono text-xs">
                  <div className="font-semibold text-orange-600 dark:text-orange-400">Expected: {edu.expectedGraduation}</div>
                  <div className="text-slate-500 font-sans">Undergraduate</div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-orange-600 dark:text-orange-400 flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-1">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h3>

            <div className="space-y-1.5 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Languages: </span>
                <span className="text-slate-600 dark:text-slate-300">C, C++, Java, Python, JavaScript</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Web Development: </span>
                <span className="text-slate-600 dark:text-slate-300">HTML, CSS, JavaScript, React, Node.js, Vite</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Machine Learning / Data: </span>
                <span className="text-slate-600 dark:text-slate-300">Python, Pandas, NumPy, Scikit-learn, Matplotlib</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Tools &amp; Technologies: </span>
                <span className="text-slate-600 dark:text-slate-300">Git, GitHub, VS Code, Vite, Supabase</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-orange-600 dark:text-orange-400 flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-1">
              <Sparkles className="w-4 h-4" />
              <span>Featured Engineering Projects</span>
            </h3>

            <div className="space-y-4">
              {projects.slice(0, 3).map((proj, idx) => (
                <div key={idx} className="space-y-1 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {proj.title} <span className="font-normal text-slate-500">| {proj.technologies.join(', ')}</span>
                    </span>
                    <span className="text-[11px] font-mono text-orange-600 dark:text-orange-400 font-bold">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                  <ul className="list-disc list-inside text-[11px] text-slate-500 dark:text-slate-400 space-y-0.5 pl-1">
                    {proj.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-orange-500" />
                <span>Verified Certifications</span>
              </h4>
              <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                {certifications.slice(0, 4).map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span>{c.title} ({c.issuer})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span>Honors &amp; Milestones</span>
              </h4>
              <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                {achievements.slice(0, 4).map((a, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span>{a.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
