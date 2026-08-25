import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText
} from 'lucide-react';


export default function Navbar({ darkMode, setDarkMode, onResumeClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Coding Profiles', href: '#profiles' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      setIsScrolled(window.scrollY > 20);

      // Scroll progress calculation
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }

      // Active section spy
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'experience', 'certifications', 'achievements', 'profiles', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-[#0b0f17]/95 backdrop-blur-md shadow-xs border-b border-orange-200/80 dark:border-orange-500/10 py-3' 
        : 'bg-transparent py-5'
    }`}>
      {/* Top Reading Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Kishan K S Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600 to-amber-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              K
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-slate-950 dark:text-white flex items-center gap-1.5">
                Kishan K S
                <span className="w-2 h-2 rounded-full bg-orange-600 dark:bg-orange-500 animate-pulse" />
              </span>
              <span className="text-[11px] font-mono text-orange-700 dark:text-orange-400 font-bold -mt-1">
                CSE Student & Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all relative ${
                    isActive
                      ? 'text-orange-700 dark:text-orange-400 bg-orange-100/90 dark:bg-orange-500/15'
                      : 'text-slate-800 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-600 dark:bg-orange-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Resume + Dark Mode + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Resume Button */}
            <button
              onClick={onResumeClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-sm shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
              aria-label="View or Download Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-800 dark:text-slate-200 bg-orange-50/80 dark:bg-slate-800 border border-orange-200/80 dark:border-slate-700 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/40 shadow-2xs"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-orange-600" />
              )}
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-orange-100/70 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 dark:bg-[#0b0f17]/95 backdrop-blur-xl border-b border-orange-200 dark:border-orange-500/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-transparent shadow-xs'
                      : 'text-slate-900 dark:text-slate-200 bg-orange-50/60 dark:bg-slate-900/60 border-orange-200/60 dark:border-slate-800 hover:bg-orange-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-orange-100 dark:border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 shadow-md shadow-orange-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>View / Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
