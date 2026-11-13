import React from 'react';

export const BrandLogoMark: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="20" cy="20" r="18.5" stroke="#C5A16D" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="15.5" stroke="#C5A16D" strokeOpacity="0.35" strokeWidth="0.75" />
    {/* Fork */}
    <path
      d="M15 11.5V17.5C15 19.1569 16.3431 20.5 18 20.5V28.5"
      stroke="#F5EDE3"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path d="M13.2 11.5V16.5C13.2 17.8 14 18.8 15 19.2" stroke="#F5EDE3" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M16.8 11.5V16.5C16.8 17.8 16 18.8 15 19.2" stroke="#F5EDE3" strokeWidth="1.3" strokeLinecap="round" />
    {/* Knife */}
    <path
      d="M24.2 28.5V11.5C26.2 12.2 27.2 14.5 27.2 18.2C27.2 20.1 26.2 21.4 24.2 21.6"
      stroke="#F5EDE3"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StampIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M12.5 9.5C12.5 7.29086 14.067 5.5 16 5.5C17.933 5.5 19.5 7.29086 19.5 9.5C19.5 11.1 18.5 12.5 18.2 14.2L19 19H13L13.8 14.2C13.5 12.5 12.5 11.1 12.5 9.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 21.5C7.5 20.1193 8.61929 19 10 19H22C23.3807 19 24.5 20.1193 24.5 21.5V23.5H7.5V21.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M6.5 26.5H25.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const TableChairsIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Table */}
    <path d="M10 15.5H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M16 15.5V24.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12.5 24.5H19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {/* Left Chair */}
    <path d="M5.5 11.5V24.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5.5 18.5H10.5V24.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    {/* Right Chair */}
    <path d="M26.5 11.5V24.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M26.5 18.5H21.5V24.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GuestServiceIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M7 22C7 16.4772 11.0294 12 16 12C20.9706 12 25 16.4772 25 22"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M16 9V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M13.5 9H18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5 22H27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6.5 25.5H25.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const GoogleGLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.5 9.2c.2-.4.4-.4.6-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .5.4.8 1.2 1.6 2 2 .2.1.4.1.5 0l.5-.4c.2-.1.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .2 0 .4-.4.6-.5.3-1.4.5-2.6 0-1.5-.6-3.1-2.2-3.7-3.7-.5-1.2-.3-2.1 0-2.6Z"
    />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
