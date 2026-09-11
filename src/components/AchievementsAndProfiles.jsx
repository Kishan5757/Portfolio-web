import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Terminal, 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck, 
  Copy, 
  Calendar, 
  CheckCircle2,
  Code2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';

export default function AchievementsAndProfiles({ showToast }) {
  const { certifications, achievements, codingProfiles } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const copyCredentialId = (id) => {
    navigator.clipboard.writeText(id);
    if (showToast) {
      showToast(`Credential ID copied: ${id}`);
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      {/* Anchor aliases for smooth navigation */}
      <div id="certifications" className="sr-only" tabIndex={-1} aria-hidden="true" />
      <div id="profiles" className="sr-only" tabIndex={-1} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-900 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones &amp; Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Achievements &amp; <span className="text-gradient-orange">Coding Profiles</span>
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-300 font-medium">
            Verified industry certifications, hackathon recognition, academic milestones, and active competitive programming profiles.
          </p>
        </div>

        {/* Part 1: Coding Profiles Showcase (GitHub & LeetCode Only) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              Coding Profiles
            </h3>
            <span className="text-xs text-slate-500 font-mono font-semibold ml-2">
              (Active Platforms)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {codingProfiles.map((profile, idx) => (
              <a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover p-6 sm:p-7 rounded-3xl border border-orange-300/60 dark:border-orange-500/20 shadow-md flex flex-col justify-between group transition-all relative overflow-hidden"
              >
                {/* Accent glow on top */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: profile.color }}
                />

                <div className="space-y-4">
                  {/* Platform header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-orange-100/90 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-300/80 dark:border-orange-900/60 group-hover:scale-110 transition-transform shadow-xs">
                        {profile.platform === 'GitHub' ? (
                          <GithubIcon className="w-6 h-6" />
                        ) : (
                          <Code2 className="w-6 h-6 text-amber-500" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-slate-950 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {profile.platform}
                        </h4>
                        <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                          @{profile.handle}
                        </span>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/40 border border-orange-300 dark:border-orange-900/60 text-orange-900 dark:text-orange-300 text-xs font-bold font-mono shadow-2xs">
                      {profile.badge}
                    </span>
                  </div>

                  {/* Highlights / Stats */}
                  <div className="p-3 rounded-2xl bg-orange-50/70 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60">
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Focus &amp; Activity
                    </div>
                    <div className="text-sm font-black text-slate-900 dark:text-white mt-0.5">
                      {profile.stats}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {profile.description}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-bold text-orange-600 dark:text-orange-400 flex items-center justify-between">
                  <span>Open {profile.platform} Profile</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Part 2: Achievements & Verified Certifications */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Achievements &amp; Certifications
              </h3>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-orange-50 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'text-slate-700 dark:text-slate-300 hover:text-orange-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'certifications'
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'text-slate-700 dark:text-slate-300 hover:text-orange-600'
                }`}
              >
                Certificates
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'achievements'
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'text-slate-700 dark:text-slate-300 hover:text-orange-600'
                }`}
              >
                Honors &amp; Hackathons
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certifications cards */}
            {(activeTab === 'all' || activeTab === 'certifications') && certifications.map((cert, idx) => (
              <div
                key={`cert-${idx}`}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-orange-300/50 dark:border-orange-500/20 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2.5 rounded-xl bg-orange-100/90 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-300 dark:border-orange-900/60 shrink-0 shadow-xs">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-900/60 text-emerald-950 dark:text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" /> Verified
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-950 dark:text-white leading-snug">
                      {cert.title}
                    </h4>
                    <div className="text-xs font-bold text-orange-700 dark:text-orange-400 mt-1">
                      {cert.issuer}
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="p-2.5 rounded-xl bg-orange-50/70 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-800 dark:text-slate-200 font-semibold shadow-2xs">
                    <div className="truncate mr-2 text-[11px]">
                      <span className="text-slate-500 select-none">ID: </span>
                      <span>{cert.credentialId}</span>
                    </div>
                    <button
                      onClick={() => copyCredentialId(cert.credentialId)}
                      className="p-1 text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-pointer"
                      title="Copy Credential ID"
                      aria-label={`Copy credential ID for ${cert.title}`}
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-orange-200/80 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" /> {cert.date}
                  </span>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-orange-600 dark:text-orange-400 hover:text-orange-700 flex items-center gap-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}

            {/* Achievements cards */}
            {(activeTab === 'all' || activeTab === 'achievements') && achievements.map((item, idx) => (
              <div
                key={`achieve-${idx}`}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-orange-300/50 dark:border-orange-500/20 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2.5 rounded-xl bg-orange-100/90 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-300 dark:border-orange-500/30 shrink-0 shadow-xs">
                      <DynamicIcon name={item.icon} className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-orange-100/90 dark:bg-orange-950/40 text-orange-950 dark:text-orange-300 border border-orange-300 dark:border-orange-900/60 uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h4>

                  <div className="text-xs font-bold text-orange-700 dark:text-orange-400">
                    {item.organization}
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1 font-mono font-bold">
                    <Calendar className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                    {item.date}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Recognized
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
