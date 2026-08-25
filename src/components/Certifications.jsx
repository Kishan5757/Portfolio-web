import React from 'react';
import { 
  Award, 
  ExternalLink, 
  Copy, 
  Calendar, 
  ShieldCheck 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';


export default function Certifications({ showToast }) {
  const { certifications } = portfolioData;

  const copyCredentialId = (id) => {
    navigator.clipboard.writeText(id);
    if (showToast) {
      showToast(`Credential ID copied: ${id}`);
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-900 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Certifications & <span className="text-gradient-orange">Specializations</span>
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-300 font-medium">
            Industry-recognized certifications in Machine Learning, Front-End React Development, and Problem Solving.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-orange-300/50 dark:border-orange-500/20 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon & Issuer */}
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-xl bg-orange-100/90 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-300 dark:border-orange-900/60 shrink-0 shadow-xs">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-900/60 text-emerald-950 dark:text-emerald-400 text-[11px] font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" /> Verified
                  </span>
                </div>

                {/* Title and Org */}
                <div>
                  <h3 className="text-base font-bold text-slate-950 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-bold text-orange-700 dark:text-orange-400 mt-1">
                    {cert.issuer}
                  </div>
                </div>

                {/* Credential ID snippet */}
                <div className="p-2.5 rounded-xl bg-orange-50/70 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-800 dark:text-slate-200 font-semibold shadow-2xs">
                  <div className="truncate mr-2">
                    <span className="text-slate-500 select-none">ID: </span>
                    <span>{cert.credentialId}</span>
                  </div>
                  <button
                    onClick={() => copyCredentialId(cert.credentialId)}
                    className="p-1 text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    title="Copy Credential ID"
                    aria-label={`Copy credential ID for ${cert.title}`}
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-orange-200/80 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" /> Issued {cert.date}
                </span>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 dark:text-orange-400 hover:text-orange-700 font-black flex items-center gap-1 transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
