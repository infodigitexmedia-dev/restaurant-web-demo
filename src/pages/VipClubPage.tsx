import React from 'react';
import {
  Bell,
  Cake,
  Check,
  Crown,
  Gift,
  Newspaper,
  RotateCcw,
  Sparkles,
  Tag,
} from 'lucide-react';
import { PageId } from '../types';
import { IMAGES, RESTAURANT_CONFIG } from '../data/restaurantData';
import { InstagramIcon, WhatsAppIcon } from '../components/Icons';
import { SafeImage } from '../components/SafeImage';
import { CommunityChannel } from '../components/CommunityModal';

interface VipClubPageProps {
  onNavigate: (page: PageId) => void;
  onOpenCommunity: (channel: CommunityChannel) => void;
  stampsCompleted: number[];
  onToggleStamp: (stampNumber: number) => void;
  onResetStamps: () => void;
}

const VIP_BENEFITS = [
  {
    icon: <Tag className="w-5 h-5 text-[#76563F]" />,
    title: 'Exclusive Offers',
    description: 'Curated member-only dining invitations and seasonal hospitality treats.',
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#76563F]" />,
    title: 'Member-Only Updates',
    description: 'Direct community announcements shared thoughtfully without clutter.',
  },
  {
    icon: <Bell className="w-5 h-5 text-[#76563F]" />,
    title: 'Early Access to Announcements',
    description: 'First look at chef tasting nights, holiday seatings, and weekend specials.',
  },
  {
    icon: <Cake className="w-5 h-5 text-[#76563F]" />,
    title: 'Special Occasion Surprises',
    description: 'Memorable celebratory moments tailored for birthdays and anniversaries.',
  },
  {
    icon: <Gift className="w-5 h-5 text-[#76563F]" />,
    title: 'Loyalty Rewards',
    description: 'Visual stamp milestones that reward guests for coming back to dine.',
  },
  {
    icon: <Newspaper className="w-5 h-5 text-[#76563F]" />,
    title: 'Restaurant News & New Menu Updates',
    description: 'Be first to discover newly crafted dishes, pastries, and seasonal roasts.',
  },
];

const STAMP_LABELS = [
  { num: 1, title: 'First Order', subtitle: 'Begin your dining journey' },
  { num: 2, title: 'Second Order', subtitle: 'One step closer to your treat' },
  { num: 3, title: 'Third Order', subtitle: 'Unlock your surprise gift' },
];

export const VipClubPage: React.FC<VipClubPageProps> = ({
  onNavigate,
  onOpenCommunity,
  stampsCompleted,
  onToggleStamp,
  onResetStamps,
}) => {
  const allCompleted = stampsCompleted.length === 3;

  return (
    <div className="bg-[#F5EDE3] min-h-screen">
      {/* Editorial VIP Hero */}
      <section className="relative bg-[#211710] text-[#F5EDE3] overflow-hidden border-b border-[#E8D9C8]/12">
        <div className="absolute inset-0">
          <SafeImage
            src={IMAGES.interior}
            alt="Evening dining room ambiance at The Urban Table"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#211710] via-[#211710]/92 to-[#211710]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A16D] uppercase mb-3">
              <Crown className="w-4 h-4 shrink-0" />
              <span>THE URBAN TABLE · VIP MEMBERSHIP DEMO</span>
            </div>
            <h1 className="font-serif text-page-fluid font-semibold text-[#FBF7F1] text-balance mb-4">
              More Than a Meal. Become a VIP.
            </h1>
            <p className="text-sm sm:text-lg text-[#E8D9C8]/90 leading-relaxed mb-7">
              Join our community to discover exclusive offers, special rewards and the latest updates from The Urban Table.
            </p>

            {/* Full-width mobile community buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-4">
              <button
                type="button"
                onClick={() => onOpenCommunity('whatsapp')}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#4ADE80]/60 bg-[#1B2B1E]/85 text-[#F5EDE3] text-sm font-semibold hover:bg-[#233B27] active:bg-[#233B27] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#4ADE80] shrink-0" />
                <span>Join Our WhatsApp Community</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenCommunity('instagram')}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#D96B98]/60 bg-[#2E1A22]/85 text-[#F5EDE3] text-sm font-semibold hover:bg-[#3E222E] active:bg-[#3E222E] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#E88CA5] shrink-0" />
                <span>Follow / Join Us on Instagram</span>
              </button>
            </div>

            <p className="text-xs text-[#E8D9C8]/65 break-all">
              Placeholder invite URL ready to replace: <span className="font-mono">{RESTAURANT_CONFIG.links.whatsappCommunity}</span>
            </p>
          </div>
        </div>
      </section>

      {/* YOUR LOYALTY JOURNEY (Placed prominently before long benefit scroll on mobile) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-6">
        <div className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8D9C8] pb-5 mb-7">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#76563F] uppercase mb-1.5">
                INTERACTIVE LOYALTY DEMO
              </p>
              <h2 className="font-serif text-section-fluid font-semibold text-[#211710] mb-1">
                Your Loyalty Journey
              </h2>
              <p className="text-sm text-[#76563F]">
                Tap each stamp card below to simulate completing three dining visits. (Demo interaction only.)
              </p>
            </div>

            <button
              type="button"
              onClick={onResetStamps}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] text-xs font-semibold text-[#211710] hover:bg-[#E8D9C8]/70 transition-colors self-start sm:self-auto shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Stamps</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-7">
            {STAMP_LABELS.map((stamp) => {
              const stamped = stampsCompleted.includes(stamp.num);
              return (
                <button
                  key={stamp.num}
                  type="button"
                  onClick={() => onToggleStamp(stamp.num)}
                  aria-pressed={stamped}
                  className={`rounded-2xl p-5 sm:p-6 border text-left transition-all duration-200 flex md:flex-col items-center md:text-center gap-4 md:gap-0 min-h-[84px] ${
                    stamped
                      ? 'bg-[#211710] border-[#C5A16D] text-[#FBF7F1] shadow-md'
                      : 'bg-[#F5EDE3] border-[#E8D9C8] text-[#211710] hover:border-[#76563F]'
                  }`}
                >
                  <span
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center md:mb-4 border-2 shrink-0 transition-colors ${
                      stamped
                        ? 'bg-[#C5A16D] border-[#C5A16D] text-[#211710]'
                        : 'bg-[#FBF7F1] border-dashed border-[#76563F]/50 text-[#76563F]'
                    }`}
                  >
                    {stamped ? (
                      <Check className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
                    ) : (
                      <span className="font-serif text-xl font-bold">{stamp.num}</span>
                    )}
                  </span>

                  <div className="flex-1 md:flex-initial">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold mb-0.5 md:mb-1">
                      {stamp.title}
                    </h3>
                    <p
                      className={`text-xs mb-1.5 md:mb-3 ${
                        stamped ? 'text-[#E8D9C8]/85' : 'text-[#76563F]'
                      }`}
                    >
                      {stamp.subtitle}
                    </p>
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider ${
                        stamped ? 'text-[#C5A16D]' : 'text-[#76563F]'
                      }`}
                    >
                      {stamped ? 'Stamped (Demo)' : 'Tap to Stamp'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {allCompleted ? (
            <div className="rounded-xl bg-[#211710] text-[#FBF7F1] border border-[#C5A16D] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#C5A16D] text-[#211710] flex items-center justify-center shrink-0">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#FBF7F1]">
                    Congratulations! Your Surprise Gift Is Unlocked.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E8D9C8]/85">
                    Demo preview complete — shows how guests unlock rewards on their third visit.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('book-table')}
                className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-lg bg-[#F5EDE3] text-[#211710] text-sm font-semibold hover:bg-[#FBF7F1] transition-colors whitespace-nowrap"
              >
                Book Your Next Table
              </button>
            </div>
          ) : (
            <div className="rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] p-4 sm:p-5 text-center text-sm text-[#76563F]">
              Completed <strong className="text-[#211710] tabular-nums">{stampsCompleted.length} of 3</strong> demo stamps — tap the remaining stamp cards above to unlock the surprise gift preview.
            </div>
          )}
        </div>
      </section>

      {/* VIP Benefits Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#76563F] uppercase mb-2">
            MEMBERSHIP PRIVILEGES
          </p>
          <h2 className="font-serif text-section-fluid font-semibold text-[#211710]">
            Designed Around Thoughtful Hospitality
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {VIP_BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-5 sm:p-6 shadow-xs"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] flex items-center justify-center mb-3.5">
                {benefit.icon}
              </div>
              <h3 className="font-serif text-card-fluid font-semibold text-[#211710] mb-1.5">
                {benefit.title}
              </h3>
              <p className="text-sm text-[#76563F] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
