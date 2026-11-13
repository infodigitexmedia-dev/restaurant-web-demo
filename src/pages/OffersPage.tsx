import React, { useState } from 'react';
import { ArrowRight, Calendar, Crown, Gift, Sparkles, Tag } from 'lucide-react';
import { PageId } from '../types';
import { DEMO_OFFERS, IMAGES } from '../data/restaurantData';
import { SafeImage } from '../components/SafeImage';

interface OffersPageProps {
  onNavigate: (page: PageId) => void;
}

const OFFER_ICONS: Record<string, React.ReactNode> = {
  'offer-welcome': <Sparkles className="w-6 h-6 text-[#76563F]" />,
  'offer-weekend': <Calendar className="w-6 h-6 text-[#76563F]" />,
  'offer-stamps': <Gift className="w-6 h-6 text-[#76563F]" />,
  'offer-vip': <Crown className="w-6 h-6 text-[#76563F]" />,
};

export const OffersPage: React.FC<OffersPageProps> = ({ onNavigate }) => {
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);

  return (
    <div className="bg-[#F5EDE3] min-h-screen">
      {/* Dark Header */}
      <section className="bg-[#211710] text-[#F5EDE3] py-10 sm:py-14 lg:py-16 border-b border-[#E8D9C8]/12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A16D] uppercase mb-2.5">
            DEMO OFFERS · ILLUSTRATIVE PROMOTIONS
          </p>
          <h1 className="font-serif text-page-fluid font-semibold text-[#FBF7F1] text-balance mb-3">
            Thoughtful Perks &amp; Seasonal Offers
          </h1>
          <p className="text-sm sm:text-base text-[#E8D9C8]/85 max-w-2xl leading-relaxed">
            Explore how The Urban Table can highlight welcome hospitality, weekend experiences, loyalty milestones, and VIP member privileges. All promotions shown below are illustrative demo offers.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {DEMO_OFFERS.map((offer) => {
            const isPreviewed = selectedOfferId === offer.id;
            return (
              <article
                key={offer.id}
                className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] shadow-xs p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] flex items-center justify-center shrink-0">
                      {OFFER_ICONS[offer.id] || <Tag className="w-6 h-6 text-[#76563F]" />}
                    </div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#76563F]">
                      DEMO OFFER
                    </span>
                  </div>

                  <p className="text-xs font-medium text-[#76563F] mb-1">{offer.subtitle}</p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#211710] mb-3">
                    {offer.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#76563F] leading-relaxed mb-6">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#E8D9C8]/80 space-y-4">
                  <p className="text-xs text-[#76563F]">{offer.availabilityNote}</p>

                  {isPreviewed && (
                    <div className="rounded-xl bg-[#F5EDE3] border border-[#C5A16D]/40 p-4 text-xs text-[#211710] leading-relaxed">
                      <strong>Demo Presentation Note:</strong> In a live deployment, this offer card can link directly to your reservation table notes, seasonal PDF, or WhatsApp VIP community code.
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate(offer.targetPage)}
                      className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#211710] text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] transition-colors"
                    >
                      <span>{offer.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedOfferId(isPreviewed ? null : offer.id)}
                      className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-lg border border-[#E8D9C8] bg-[#F5EDE3] text-xs font-semibold text-[#211710] hover:bg-[#E8D9C8]/70 transition-colors"
                    >
                      {isPreviewed ? 'Hide Demo Note' : 'How It Works (Demo)'}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Visual Showcase Strip */}
        <div className="rounded-2xl overflow-hidden bg-[#211710] border border-[#E8D9C8] grid grid-cols-1 lg:grid-cols-2 items-stretch">
          <div className="aspect-[16/10] lg:aspect-auto lg:h-full">
            <SafeImage
              src={IMAGES.interior}
              alt="Warm ambient dining room at The Urban Table"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-[#F5EDE3]">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C5A16D] uppercase mb-2">
              COMMUNITY &amp; REWARDS
            </p>
            <h2 className="font-serif text-section-fluid font-semibold text-[#FBF7F1] mb-3">
              Turn First-Time Visitors Into Regular Guests
            </h2>
            <p className="text-sm sm:text-base text-[#E8D9C8]/85 leading-relaxed mb-6">
              Pair seasonal dining showcases with our interactive VIP Club and 3-stamp loyalty concept to keep guests excited for their next table visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onNavigate('vip-club')}
                className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-lg bg-[#F5EDE3] text-[#211710] text-sm font-semibold hover:bg-[#FBF7F1] transition-colors"
              >
                Explore VIP Club
              </button>
              <button
                type="button"
                onClick={() => onNavigate('book-table')}
                className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-lg border border-[#E8D9C8]/40 text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] transition-colors"
              >
                Book a Table
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
