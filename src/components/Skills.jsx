import React, { useState } from 'react';
import { 
  Search, 
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Skills', icon: 'Layers' },
    { id: 'programming', name: 'Programming', icon: 'Code2' },
    { id: 'web', name: 'Web Dev', icon: 'Globe' },
    { id: 'database', name: 'Database', icon: 'Database' },
    { id: 'aiml', name: 'AI / ML', icon: 'Brain' },
    { id: 'tools', name: 'Tools & DevOps', icon: 'Wrench' },
  ];

  // Filter skills based on tab and search query
  const filteredCategories = skills.categories.map(category => {
    if (activeTab !== 'all' && category.id !== activeTab) {
      return null;
    }

    const filteredSkills = category.skills.filter(skill => {
      const matchName = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchTag = skill.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchName || matchTag;
    });

    if (filteredSkills.length === 0) return null;

    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="text-gradient-orange">Technical Expertise</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A comprehensive matrix of programming languages, modern web frameworks, AI libraries, and engineering tools.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-orange-300/60 dark:border-slate-800 max-w-full overflow-x-auto shadow-xs">
            {categories.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/30 scale-102'
                    : 'text-slate-750 dark:text-slate-300 hover:text-orange-600 dark:hover:text-white hover:bg-orange-50 dark:hover:bg-slate-800 font-semibold'
                }`}
              >
                <DynamicIcon name={tab.icon} className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-orange-600 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 text-xs font-medium rounded-xl bg-white dark:bg-slate-900 border border-orange-300/80 dark:border-slate-800 focus:outline-none focus:border-orange-500 text-slate-900 dark:text-white shadow-xs placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Display Grouped by Category */}
        <div className="space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 glass-card rounded-2xl p-8 border border-dashed border-orange-300 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                No skills found matching &quot;{searchQuery}&quot;. Try a different keyword.
              </p>
            </div>
          ) : (
            filteredCategories.map(cat => (
              <div key={cat.id} className="space-y-4">
                <div className="flex items-center gap-2.5 border-b border-orange-300/50 dark:border-orange-500/20 pb-2.5">
                  <div className="p-2 rounded-xl bg-orange-100/90 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-300/80 dark:border-orange-500/20 shadow-xs">
                    <DynamicIcon name={cat.icon} className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-950 dark:text-white">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="glass-card glass-card-hover p-4.5 rounded-2xl border border-orange-300/40 dark:border-orange-500/20 shadow-xs group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-orange-100/90 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-300/80 dark:border-orange-900/60 group-hover:scale-110 transition-transform shadow-xs">
                            <DynamicIcon name={skill.icon} className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-950 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                              {skill.name}
                            </div>
                            <span className="text-[10px] font-bold text-orange-950 dark:text-slate-300 px-2 py-0.5 rounded-md bg-orange-100/80 dark:bg-slate-800 border border-orange-200 dark:border-slate-700">
                              {skill.tag}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-black text-orange-600 dark:text-orange-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Level Progress Bar */}
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-3.5">
                        <div
                          className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 h-full rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
