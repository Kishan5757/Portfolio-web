import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AchievementsAndProfiles from './components/AchievementsAndProfiles';
import GithubShowcase from './components/GithubShowcase';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import CustomCursor from './components/CustomCursor';

export default function App() {
  // Theme state: default to dark or system preference, saved to localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Modal states
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Toast state
  const [toast, setToast] = useState({ message: '', type: 'info' });

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast({ message: '', type: 'info' });
  };

  // Sync theme with DOM and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/40 via-40% to-orange-100/30 dark:from-[#0b0f17] dark:via-[#0e1422] dark:to-[#0b0f17] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-orange-500 selection:text-white">
      {/* Custom cursor overlay */}
      <CustomCursor />

      {/* Top Navbar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onResumeClick={() => setIsResumeModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onResumeClick={() => setIsResumeModalOpen(true)} 
          showToast={showToast} 
        />

        {/* 2. Combined About Me & Education Section */}
        <About 
          onResumeClick={() => setIsResumeModalOpen(true)} 
        />

        {/* 3. Skills Matrix & Filter (without percentages) */}
        <Skills />

        {/* 4. Projects Showcase (Algorunner removed) */}
        <Projects 
          onSelectProject={(proj) => setSelectedProject(proj)} 
        />

        {/* 5. Combined Achievements, Certifications & Coding Profiles */}
        <AchievementsAndProfiles 
          showToast={showToast} 
        />

        {/* 6. GitHub Open Source Showcase */}
        <GithubShowcase />

        {/* 7. Dedicated Resume Download / Preview Section */}
        <ResumeSection 
          onViewResume={() => setIsResumeModalOpen(true)} 
          showToast={showToast} 
        />

        {/* 8. Contact Form & Direct Channels */}
        <Contact 
          showToast={showToast} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onResumeClick={() => setIsResumeModalOpen(true)} 
      />

      {/* Interactive Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Interactive Resume Sheet Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
        showToast={showToast} 
      />

      {/* Notification Toast */}
      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={closeToast} 
      />
    </div>
  );
}
