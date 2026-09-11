import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Loader2,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';


export default function Contact({ showToast }) {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable async submission flow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#ea580c', '#f97316', '#fbbf24', '#ffffff']
      });

      if (showToast) {
        showToast('Message validation passed! Note: For production email delivery, connect a backend service like EmailJS or Formspree.');
      }
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSuccess(false);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    if (showToast) {
      showToast(`${label} copied to clipboard!`);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Soft Mesh Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-900 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Let&apos;s Connect & <span className="text-gradient-orange">Build Together</span>
          </h2>
          <p className="mt-3 text-base text-slate-700 dark:text-slate-300 font-medium">
            Open to internship opportunities, software developer roles, hackathons, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-orange-300/50 dark:border-orange-500/20 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-orange-600 dark:text-orange-500" />
                <span>Contact Channels</span>
              </h3>

              {/* Email item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-orange-50/70 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-100/90 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</div>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'Email address')}
                  className="p-2 text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-pointer"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-orange-50/70 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-100/90 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Phone</div>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      {personalInfo.displayPhone || personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'Phone number')}
                  className="p-2 text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-pointer"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-orange-50/70 dark:bg-slate-800/80 border border-orange-200/80 dark:border-slate-700/60 shadow-2xs">
                <div className="p-2.5 rounded-xl bg-orange-100/90 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Social buttons */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider mb-3">
                  Professional Networks
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-orange-50 dark:hover:bg-slate-700 border border-orange-300/70 dark:border-slate-700 text-slate-900 dark:text-slate-200 hover:text-orange-600 font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-orange-50 dark:hover:bg-slate-700 border border-orange-300/70 dark:border-slate-700 text-slate-900 dark:text-slate-200 hover:text-orange-600 font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-orange-300/50 dark:border-orange-500/20 shadow-xs">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-medium">
                    Your message has been validated successfully. (In production mode, this form will forward directly to <span className="font-mono font-bold text-orange-600">{personalInfo.email}</span> via EmailJS/Resend).
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 transition-all shadow-md shadow-orange-500/20"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2 flex items-center gap-2">
                    <Send className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                    <span>Send a Direct Message</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Your Name <span className="text-orange-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-800/80 border ${
                          errors.name ? 'border-rose-500' : 'border-orange-300/80 dark:border-slate-700'
                        } focus:outline-none focus:border-orange-500 text-slate-950 dark:text-white shadow-2xs font-medium transition-colors`}
                      />
                      {errors.name && <p className="text-[11px] font-bold text-rose-600 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Your Email <span className="text-orange-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. recruiter@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-800/80 border ${
                          errors.email ? 'border-rose-500' : 'border-orange-300/80 dark:border-slate-700'
                        } focus:outline-none focus:border-orange-500 text-slate-950 dark:text-white shadow-2xs font-medium transition-colors`}
                      />
                      {errors.email && <p className="text-[11px] font-bold text-rose-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                      Subject <span className="text-orange-600">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. SDE Internship Opportunity / Hackathon Collaboration"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-800/80 border ${
                        errors.subject ? 'border-rose-500' : 'border-orange-300/80 dark:border-slate-700'
                      } focus:outline-none focus:border-orange-500 text-slate-950 dark:text-white shadow-2xs font-medium transition-colors`}
                    />
                    {errors.subject && <p className="text-[11px] font-bold text-rose-600 mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                      Message <span className="text-orange-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Kishan, I came across your portfolio and project Metro-Bot..."
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-800/80 border ${
                        errors.message ? 'border-rose-500' : 'border-orange-300/80 dark:border-slate-700'
                      } focus:outline-none focus:border-orange-500 text-slate-950 dark:text-white shadow-2xs font-medium transition-colors resize-none`}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? (
                        <p className="text-[11px] font-bold text-rose-600">{errors.message}</p>
                      ) : <span />}
                      <span className="text-[10px] text-slate-500 font-mono font-semibold">
                        {formData.message.length} chars
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Validating & Processing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center font-medium">
                    🔒 Client-side validation enabled. No emails are sent without your configured production webhook.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
