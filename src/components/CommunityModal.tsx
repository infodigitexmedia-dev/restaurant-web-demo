import React from 'react';
import { ExternalLink, X } from 'lucide-react';
import { GoogleGLogo, InstagramIcon, WhatsAppIcon } from './Icons';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

export type CommunityChannel = 'whatsapp' | 'instagram' | 'google' | null;

interface CommunityModalProps {
  channel: CommunityChannel;
  onClose: () => void;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({ channel, onClose }) => {
  if (!channel) return null;

  const config = {
    whatsapp: {
      title: 'WhatsApp VIP Community (Demo Link)',
      subtitle: 'Connect diners directly to your restaurant’s private WhatsApp broadcast or VIP group.',
      url: RESTAURANT_CONFIG.links.whatsappCommunity,
      icon: <WhatsAppIcon className="w-6 h-6 text-[#4ADE80]" />,
      accentBorder: 'border-[#4ADE80]/30',
      note: 'Placeholder URL configured in restaurantData.ts — replace with your restaurant’s official WhatsApp invitation link before launch.',
    },
    instagram: {
      title: 'Instagram Community (Demo Link)',
      subtitle: 'Drive diners to follow daily chef specials, seasonal plating, and behind-the-scenes stories.',
      url: RESTAURANT_CONFIG.links.instagramProfile,
      icon: <InstagramIcon className="w-6 h-6 text-[#E88CA5]" />,
      accentBorder: 'border-[#C5A16D]/40',
      note: 'Placeholder URL configured in restaurantData.ts — replace with your restaurant’s official Instagram profile URL before launch.',
    },
    google: {
      title: 'Google Reviews Integration (Demo Link)',
      subtitle: 'Make it effortless for delighted guests to leave verified Google Maps reviews after dining.',
      url: RESTAURANT_CONFIG.links.googleReviews,
      icon: <GoogleGLogo className="w-6 h-6" />,
      accentBorder: 'border-[#C5A16D]/40',
      note: 'Placeholder URL configured in restaurantData.ts — replace with your Google Business Profile review link. All ratings shown on this site are illustrative demo figures.',
    },
  }[channel];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191512]/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="community-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] shadow-2xl p-6 sm:p-7 text-[#191512]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-[#211710] border ${config.accentBorder} flex items-center justify-center shrink-0`}>
            {config.icon}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-11 h-11 rounded-lg flex items-center justify-center text-[#76563F] hover:bg-[#E8D9C8]/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 id="community-modal-title" className="font-serif text-2xl font-semibold text-[#211710] mb-2">
          {config.title}
        </h3>
        <p className="text-sm text-[#76563F] leading-relaxed mb-5">
          {config.subtitle}
        </p>

        <div className="rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] p-3.5 mb-5">
          <p className="text-xs font-semibold text-[#76563F] mb-1">Editable Placeholder Destination</p>
          <p className="text-xs font-mono text-[#211710] break-all select-all">{config.url}</p>
        </div>

        <p className="text-xs text-[#76563F] leading-relaxed mb-6">
          {config.note}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 min-h-[48px] px-4 py-3 rounded-lg bg-[#211710] text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] transition-colors"
          >
            Got It
          </button>
          <a
            href={config.url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#76563F]/30 text-[#211710] text-sm font-medium hover:bg-[#E8D9C8]/50 transition-colors"
          >
            <span>Open Placeholder URL</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
