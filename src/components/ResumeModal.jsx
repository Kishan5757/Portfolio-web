import React, { useEffect, useRef } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, showToast }) {
  const { personalInfo } = portfolioData;
  const iframeRef = useRef(null);

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
      showToast('Downloading Kishan_KS_Resume.pdf...');
    }

    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl || '/resume.pdf';
    link.download = 'Kishan_KS_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.focus();
      iframeRef.current.contentWindow.print();
    } else {
      window.open('/resume.html', '_blank')?.print();
    }
  };

  const handleOpenNewTab = () => {
    window.open('/resume.html', '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="relative w-full max-w-5xl bg-white dark:bg-[#111827] rounded-2xl shadow-2xl border border-orange-500/30 overflow-hidden h-[92vh] max-h-[94vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-900/95 shrink-0 z-20 backdrop-blur">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="min-w-0">
              <h2 id="resume-modal-title" className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                Kishan K S — Resume
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Interactive ATS Format &bull; Web Preview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleOpenNewTab}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title="Open full page resume in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Full Page</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-sm transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded HTML Resume Content */}
        <div className="flex-1 w-full h-full relative bg-[#f1f5f9] overflow-hidden">
          <iframe 
            ref={iframeRef}
            src="/resume.html" 
            title="Kishan K S — Interactive Resume"
            className="w-full h-full border-0 bg-[#f1f5f9] block"
          />
        </div>
      </div>
    </div>
  );
}
