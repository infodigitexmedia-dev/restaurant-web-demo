import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PageId } from '../types';
import { RESTAURANT_CONFIG } from '../data/restaurantData';
import { BrandLogoMark, GoogleGLogo, InstagramIcon, WhatsAppIcon } from './Icons';
import { CommunityChannel } from './CommunityModal';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenCommunity: (channel: CommunityChannel) => void;
}

const FOOTER_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'offers', label: 'Offers' },
  { id: 'guest-experience', label: 'Guest Experience' },
  { id: 'vip-club', label: 'VIP Club' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCommunity }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#211710] text-[#F5EDE3] border-t border-[#E8D9C8]/12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-3.5">
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left group min-h-[44px]"
            >
              <BrandLogoMark className="w-10 h-10 shrink-0" />
              <span className="font-serif text-lg font-semibold tracking-wide text-[#F5EDE3]">
                THE URBAN TABLE
              </span>
            </button>
            <p className="font-serif italic text-[#C5A16D] text-base">
              &ldquo;Great Food. Better Experiences.&rdquo;
            </p>
            <p className="text-sm text-[#E8D9C8]/75 leading-relaxed max-w-xs">
              An interactive hospitality website demonstration crafted to showcase modern restaurant presentation, digital menus, and guest engagement.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#C5A16D] mb-3">
              Explore
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-0.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className="min-h-[44px] inline-flex items-center text-sm text-[#E8D9C8]/85 hover:text-[#FBF7F1] hover:underline underline-offset-4 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('book-table')}
                  className="min-h-[44px] inline-flex items-center text-sm font-semibold text-[#C5A16D] hover:text-[#FBF7F1] hover:underline underline-offset-4 transition-colors text-left"
                >
                  Book a Table
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders Column */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#C5A16D] mb-4">
              Visit &amp; Contact
            </h3>
            <ul className="space-y-3 text-sm text-[#E8D9C8]/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A16D] shrink-0 mt-1" />
                <span className="leading-relaxed break-words">{RESTAURANT_CONFIG.contact.address}</span>
              </li>
              <li>
                <a
                  href="tel:+15552348910"
                  className="min-h-[44px] flex items-center gap-2.5 hover:text-[#FBF7F1] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A16D] shrink-0" />
                  <span className="tabular-nums break-words">{RESTAURANT_CONFIG.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${RESTAURANT_CONFIG.contact.email}`}
                  className="min-h-[44px] flex items-center gap-2.5 hover:text-[#FBF7F1] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C5A16D] shrink-0" />
                  <span className="break-all">{RESTAURANT_CONFIG.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C5A16D] shrink-0 mt-0.5" />
                <span>Daily 11:30 AM – 10:30 PM (Placeholder)</span>
              </li>
            </ul>
          </div>

          {/* Community & Social Links Column */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#C5A16D] mb-4">
              Community &amp; Reviews
            </h3>
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => onOpenCommunity('instagram')}
                className="w-full min-h-[44px] flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#35251B]/70 border border-[#E8D9C8]/15 text-sm text-[#F5EDE3] hover:border-[#C5A16D]/60 active:bg-[#35251B] transition-colors text-left"
              >
                <InstagramIcon className="w-4 h-4 text-[#C5A16D] shrink-0" />
                <span>Instagram (Placeholder)</span>
              </button>
              <button
                type="button"
                onClick={() => onOpenCommunity('whatsapp')}
                className="w-full min-h-[44px] flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#35251B]/70 border border-[#E8D9C8]/15 text-sm text-[#F5EDE3] hover:border-[#4ADE80]/50 active:bg-[#35251B] transition-colors text-left"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#4ADE80] shrink-0" />
                <span>WhatsApp (Placeholder)</span>
              </button>
              <button
                type="button"
                onClick={() => onOpenCommunity('google')}
                className="w-full min-h-[44px] flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#35251B]/70 border border-[#E8D9C8]/15 text-sm text-[#F5EDE3] hover:border-[#C5A16D]/60 active:bg-[#35251B] transition-colors text-left"
              >
                <GoogleGLogo className="w-4 h-4 shrink-0" />
                <span>Google Reviews (Placeholder)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#E8D9C8]/12 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-[#E8D9C8]/65">
          <p>&copy; {new Date().getFullYear()} The Urban Table — Interactive Restaurant Website Demo.</p>
          <p>Illustrative demo content · Editable placeholders ready for customization</p>
        </div>
      </div>
    </footer>
  );
};
