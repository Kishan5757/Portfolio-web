import React from 'react';

export function GithubIcon({ className = 'w-5 h-5', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = 'w-5 h-5', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetCodeIcon({ className = 'w-5 h-5', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.815 3.618 5.922 5.922 0 0 0 3.86-1.077l3.87-3.957 4.093-4.18a1.378 1.378 0 0 0 0-1.95 1.38 1.38 0 0 0-1.951 0l-4.093 4.18-3.87 3.957a3.18 3.18 0 0 1-2.072.578 3.188 3.188 0 0 1-2.585-1.942 3.167 3.167 0 0 1-.033-1.268 3.166 3.166 0 0 1 .65-1.13l3.854-4.126 5.406-5.788A1.38 1.38 0 0 0 13.483 0zm2.71 14.86a1.38 1.38 0 0 0-.986.416l-2.073 2.115a1.38 1.38 0 0 0 1.97 1.93l2.073-2.115a1.38 1.38 0 0 0-.984-2.346zm5.836 2.015h-8.058a1.38 1.38 0 1 0 0 2.76h8.058a1.38 1.38 0 1 0 0-2.76z" />
    </svg>
  );
}

export function TwitterIcon({ className = 'w-5 h-5', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
