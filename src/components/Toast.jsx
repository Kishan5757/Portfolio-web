import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose, duration = 3500 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />,
    info: <Info className="w-5 h-5 text-orange-500 shrink-0" />,
  };

  const borders = {
    success: 'border-emerald-500/30 bg-white dark:bg-slate-900',
    error: 'border-rose-500/30 bg-white dark:bg-slate-900',
    info: 'border-orange-500/30 bg-white dark:bg-slate-900',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm w-full">
      <div className={`flex items-start gap-3 p-4 rounded-xl shadow-2xl border ${borders[type]} backdrop-blur-md transition-all`}>
        {icons[type] || icons.info}
        <div className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-200">
          {message}
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
