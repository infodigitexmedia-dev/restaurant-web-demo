import React, { useEffect, useState } from 'react';
import { Calendar, ChevronRight, Menu, X } from 'lucide-react';
import { PageId } from '../types';
import { BrandLogoMark } from './Icons';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'offers', label: 'Offers' },
  { id: 'guest-experience', label: 'Guest Experience' },
  { id: 'vip-club', label: 'VIP Club' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent background scrolling & support Escape key when mobile drawer is open
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const handleNav = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="relative z-40 w-full bg-[#211710] border-b border-[#E8D9C8]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[74px] lg:h-20 flex items-center justify-between gap-3">
          {/* Left: Circular fork & knife logo + THE URBAN TABLE */}
          <button
            type="button"
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group shrink-0 min-h-[44px] py-1 rounded-lg"
            aria-label="The Urban Table Home"
          >
            <BrandLogoMark className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 transition-transform duration-200 group-hover:scale-105" />
            <span className="font-serif text-[15px] sm:text-lg font-semibold tracking-wide text-[#F5EDE3] whitespace-nowrap">
              THE URBAN TABLE
            </span>
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Primary Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={`relative py-2.5 px-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'text-[#FBF7F1]'
                      : 'text-[#E8D9C8]/80 hover:text-[#FBF7F1]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A16D] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Desktop/Tablet Book a Table CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleNav('book-table')}
              className={`hidden md:inline-flex items-center gap-2 px-4 sm:px-5 min-h-[44px] rounded-lg text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 shadow-sm ${
                currentPage === 'book-table'
                  ? 'bg-[#C5A16D] text-[#211710]'
                  : 'bg-[#F5EDE3] text-[#211710] hover:bg-[#FBF7F1] active:scale-[0.99]'
              }`}
            >
              <Calendar className="w-4 h-4 shrink-0" strokeWidth={1.9} />
              <span>Book a Table</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#F5EDE3] hover:bg-[#35251B] active:bg-[#35251B] transition-colors"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Polished Slide-Out Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#191512]/75 backdrop-blur-xs"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out panel */}
          <div className="relative z-10 w-full max-w-sm bg-[#211710] text-[#F5EDE3] h-full flex flex-col justify-between shadow-2xl border-l border-[#E8D9C8]/15 overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-[#E8D9C8]/12">
                <div className="flex items-center gap-2.5">
                  <BrandLogoMark className="w-8 h-8 shrink-0" />
                  <span className="font-serif text-base font-semibold tracking-wide text-[#F5EDE3]">
                    THE URBAN TABLE
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-[#E8D9C8] hover:bg-[#35251B] active:bg-[#35251B] transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <nav className="px-4 py-5 space-y-1.5" aria-label="Mobile Navigation">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNav(item.id)}
                      className={`w-full min-h-[48px] flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#35251B] text-[#FBF7F1] border border-[#C5A16D]/45'
                          : 'text-[#E8D9C8]/90 hover:bg-[#35251B]/70 active:bg-[#35251B] hover:text-[#FBF7F1]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          isActive ? 'text-[#C5A16D]' : 'text-[#E8D9C8]/40'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-5 border-t border-[#E8D9C8]/12 space-y-3 bg-[#191512]/40">
              <button
                type="button"
                onClick={() => handleNav('book-table')}
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#F5EDE3] text-[#211710] font-semibold text-base hover:bg-[#FBF7F1] active:scale-[0.99] transition-all shadow-md"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book a Table</span>
              </button>
              <p className="text-center text-xs text-[#E8D9C8]/60">
                Interactive restaurant website demo
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
