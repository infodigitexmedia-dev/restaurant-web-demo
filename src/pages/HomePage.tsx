import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Check,
  Coffee,
  Croissant,
  Crown,
  Gift,
  LayoutGrid,
  MoreHorizontal,
  Pizza,
  Sandwich,
  Star,
  Utensils,
  UtensilsCrossed,
} from 'lucide-react';
import { HomePreviewCategory, PageId } from '../types';
import { HOME_PREVIEW_CARDS, IMAGES, MENU_ITEMS } from '../data/restaurantData';
import {
  GoogleGLogo,
  GuestServiceIcon,
  InstagramIcon,
  StampIcon,
  TableChairsIcon,
  WhatsAppIcon,
} from '../components/Icons';
import { SafeImage } from '../components/SafeImage';
import { CommunityChannel } from '../components/CommunityModal';

interface HomePageProps {
  onNavigate: (page: PageId, initialMenuCategory?: string) => void;
  onOpenCommunity: (channel: CommunityChannel) => void;
  stampsCompleted: number[];
  onToggleStamp: (stampNumber: number) => void;
  onResetStamps: () => void;
}

const PREVIEW_TABS: { id: HomePreviewCategory; label: string; icon: React.ReactNode }[] = [
  { id: 'All', label: 'All', icon: <LayoutGrid className="w-4 h-4 shrink-0" /> },
  { id: 'Burgers', label: 'Burgers', icon: <Sandwich className="w-4 h-4 shrink-0" /> },
  { id: 'Pizza', label: 'Pizza', icon: <Pizza className="w-4 h-4 shrink-0" /> },
  { id: 'Pasta', label: 'Pasta', icon: <Utensils className="w-4 h-4 shrink-0" /> },
  { id: 'Coffee', label: 'Coffee', icon: <Coffee className="w-4 h-4 shrink-0" /> },
  { id: 'Desserts', label: 'Desserts', icon: <Croissant className="w-4 h-4 shrink-0" /> },
  { id: 'More', label: 'More', icon: <MoreHorizontal className="w-4 h-4 shrink-0" /> },
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenCommunity,
  stampsCompleted,
  onToggleStamp,
  onResetStamps,
}) => {
  const [activeCategory, setActiveCategory] = useState<HomePreviewCategory>('All');
  const allStampsDone = stampsCompleted.length === 3;

  const filteredPreviewItems = (() => {
    if (activeCategory === 'All') {
      return null;
    }
    if (activeCategory === 'More') {
      return MENU_ITEMS.filter(
        (item) =>
          item.category === 'Starters' ||
          item.category === 'Main Course' ||
          item.category === 'Beverages'
      ).slice(0, 5);
    }
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  })();

  return (
    <div>
      {/* SECTION 1 — HERO (Recomposed cleanly for mobile; reference split on desktop) */}
      <section className="relative bg-[#211710] overflow-hidden">
        {/* Desktop Background Gourmet Pasta Photography (Right-weighted) */}
        <div className="hidden lg:block absolute inset-0">
          <div className="w-[76%] h-full ml-auto relative">
            <SafeImage
              src={IMAGES.heroPasta}
              alt="Steaming gourmet handmade pasta in a ceramic stoneware bowl on a dark oak bistro table"
              fetchPriority="high"
              className="w-full h-full object-cover object-right opacity-90"
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#211710] via-[#211710]/85 to-[#211710]/25"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#211710] via-transparent to-[#211710]/60"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-6 max-w-xl">
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.22em] text-[#C5A16D] uppercase mb-3 sm:mb-4">
                CAFÉ · BISTRO · DINING
              </p>

              <h1 className="font-serif text-hero-fluid font-semibold text-[#FBF7F1] tracking-tight text-balance mb-4 sm:mb-5">
                Great Food,
                <br />
                Better Experiences.
              </h1>

              <p className="text-[15px] sm:text-lg text-[#E8D9C8]/90 leading-relaxed max-w-md mb-6 sm:mb-8">
                A cozy place for delicious food, exclusive offers and memorable moments.
              </p>

              {/* Stacked full-width CTAs on narrow mobile (<420px), side-by-side on wider phones & desktop */}
              <div className="flex flex-col min-[420px]:flex-row flex-wrap items-stretch min-[420px]:items-center gap-3 mb-6 sm:mb-8">
                <button
                  type="button"
                  onClick={() => onNavigate('menu')}
                  className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#F5EDE3] text-[#211710] text-sm font-semibold hover:bg-[#FBF7F1] active:scale-[0.99] shadow-md transition-all duration-150 whitespace-nowrap"
                >
                  <UtensilsCrossed className="w-4 h-4 shrink-0" strokeWidth={1.8} />
                  <span>Explore Our Menu</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('book-table')}
                  className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#35251B]/75 lg:bg-[#211710]/65 border border-[#E8D9C8]/45 text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] hover:border-[#E8D9C8]/75 active:scale-[0.99] transition-all duration-150 whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 shrink-0" strokeWidth={1.8} />
                  <span>Book a Table</span>
                </button>
              </div>

              {/* Customer Rating Area (Illustrative Demo Content) */}
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-sm text-[#E8D9C8]/90">
                <button
                  type="button"
                  onClick={() => onNavigate('reviews')}
                  className="min-h-[44px] inline-flex items-center gap-1.5 hover:text-[#FBF7F1] transition-colors"
                  title="Illustrative demo rating — click to view Reviews page"
                >
                  <Star className="w-4 h-4 fill-[#C5A16D] text-[#C5A16D] shrink-0" />
                  <span className="font-semibold text-[#FBF7F1] tabular-nums">4.8</span>
                  <span className="text-[#E8D9C8]/80">(1,200+ Reviews)</span>
                </button>

                <span className="text-[#E8D9C8]/35 hidden min-[375px]:inline" aria-hidden="true">
                  |
                </span>

                <button
                  type="button"
                  onClick={() => onOpenCommunity('google')}
                  className="min-h-[44px] inline-flex items-center gap-2 hover:text-[#FBF7F1] transition-colors"
                >
                  <GoogleGLogo className="w-4 h-4 shrink-0" />
                  <span>Review on Google</span>
                </button>

                <span className="w-full text-[11px] text-[#E8D9C8]/60 tracking-wide">
                  Illustrative demo rating &amp; review count
                </span>
              </div>
            </div>

            {/* Mobile & Tablet Recomposed Hero Food Dish Card (No text overlap!) */}
            <div className="lg:hidden">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8D9C8]/20 shadow-xl aspect-[16/10] sm:aspect-[16/9] bg-[#35251B]">
                <SafeImage
                  src={IMAGES.pasta}
                  alt="Creamy gourmet pasta dish served in a stoneware bowl at The Urban Table"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#211710]/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <p className="absolute bottom-3 left-4 right-4 text-xs font-medium tracking-wide text-[#FBF7F1]/90">
                  House-Made Pasta · Wood-Fired Specialties · Artisan Coffee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CUSTOMER EXPERIENCE FEATURES (4 Cards) */}
      <section className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-7 lg:pt-0 lg:-mt-14">
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Stamp & Win */}
          <div className="bg-[#FBF7F1] rounded-2xl border border-[#E8D9C8] shadow-[0_8px_24px_rgba(33,23,16,0.07)] p-5 sm:p-6 flex flex-col items-center text-center justify-between transition-transform duration-200 lg:hover:-translate-y-1">
            <div className="w-full">
              <div className="w-12 h-12 rounded-xl bg-[#F5EDE3] text-[#76563F] flex items-center justify-center mx-auto mb-3">
                <StampIcon className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-card-fluid font-semibold text-[#211710] mb-1.5">
                Stamp &amp; Win
              </h2>
              <p className="text-sm text-[#76563F] leading-relaxed mb-4">
                Complete 3 orders and unlock a surprise gift!
              </p>
            </div>

            {/* Touch-friendly 3-Stamp Visual Demo (44x44px hit targets) */}
            <div className="w-full pt-3 border-t border-[#E8D9C8]/80">
              <div className="flex items-center justify-center gap-2 mb-2">
                {[1, 2, 3].map((num) => {
                  const stamped = stampsCompleted.includes(num);
                  return (
                    <button
                      key={num}
                      type="button"
                      onClick={() => onToggleStamp(num)}
                      className="min-w-[48px] min-h-[48px] flex flex-col items-center justify-center gap-1 group rounded-xl p-1 active:bg-[#F5EDE3] transition-colors"
                      aria-pressed={stamped}
                      title={`Demo Stamp: Order ${num}`}
                    >
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border transition-all duration-150 ${
                          stamped
                            ? 'bg-[#76563F] border-[#76563F] text-[#FBF7F1]'
                            : 'bg-[#F5EDE3] border-[#C5A16D]/60 text-[#76563F] group-hover:border-[#76563F]'
                        }`}
                      >
                        {stamped ? <Check className="w-4 h-4" strokeWidth={2.5} /> : num}
                      </span>
                      <span className="text-[11px] font-medium text-[#76563F] whitespace-nowrap">
                        Order {num}
                      </span>
                    </button>
                  );
                })}
              </div>

              {allStampsDone ? (
                <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-semibold text-[#211710]">
                  <Gift className="w-3.5 h-3.5 text-[#C5A16D] shrink-0" />
                  <span>Surprise Gift Unlocked!</span>
                  <button
                    type="button"
                    onClick={onResetStamps}
                    className="ml-1 px-2 py-1 underline text-[11px] font-normal text-[#76563F] hover:text-[#211710]"
                  >
                    Reset
                  </button>
                </div>
              ) : (
                <p className="text-[11px] text-[#76563F]/85">
                  Tap stamps to preview loyalty demo
                </p>
              )}
            </div>
          </div>

          {/* Card 2: VIP Club */}
          <div className="bg-[#FBF7F1] rounded-2xl border border-[#E8D9C8] shadow-[0_8px_24px_rgba(33,23,16,0.07)] p-5 sm:p-6 flex flex-col items-center text-center justify-between transition-transform duration-200 lg:hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F5EDE3] text-[#76563F] flex items-center justify-center mx-auto mb-3">
                <Crown className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h2 className="font-serif text-card-fluid font-semibold text-[#211710] mb-1.5">
                VIP Club
              </h2>
              <p className="text-sm text-[#76563F] leading-relaxed mb-5">
                Exclusive offers, special rewards and exciting updates.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('vip-club')}
              className="w-full min-h-[44px] py-2.5 px-4 rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] text-sm font-semibold text-[#211710] hover:bg-[#E8D9C8]/70 active:bg-[#E8D9C8] transition-colors whitespace-nowrap"
            >
              Explore VIP Club
            </button>
          </div>

          {/* Card 3: Guest Experience (Replaces Online Orders) */}
          <div className="bg-[#FBF7F1] rounded-2xl border border-[#E8D9C8] shadow-[0_8px_24px_rgba(33,23,16,0.07)] p-5 sm:p-6 flex flex-col items-center text-center justify-between transition-transform duration-200 lg:hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F5EDE3] text-[#76563F] flex items-center justify-center mx-auto mb-3">
                <GuestServiceIcon className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-card-fluid font-semibold text-[#211710] mb-1.5">
                Guest Experience
              </h2>
              <p className="text-sm text-[#76563F] leading-relaxed mb-5">
                Everything you need for a comfortable dining experience.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('guest-experience')}
              className="w-full min-h-[44px] py-2.5 px-4 rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] text-sm font-semibold text-[#211710] hover:bg-[#E8D9C8]/70 active:bg-[#E8D9C8] transition-colors whitespace-nowrap"
            >
              Explore Experience
            </button>
          </div>

          {/* Card 4: Book a Table */}
          <div className="bg-[#FBF7F1] rounded-2xl border border-[#E8D9C8] shadow-[0_8px_24px_rgba(33,23,16,0.07)] p-5 sm:p-6 flex flex-col items-center text-center justify-between transition-transform duration-200 lg:hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F5EDE3] text-[#76563F] flex items-center justify-center mx-auto mb-3">
                <TableChairsIcon className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-card-fluid font-semibold text-[#211710] mb-1.5">
                Book a Table
              </h2>
              <p className="text-sm text-[#76563F] leading-relaxed mb-5">
                Reserve your favorite spot in just a few clicks.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('book-table')}
              className="w-full min-h-[44px] py-2.5 px-4 rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] text-sm font-semibold text-[#211710] hover:bg-[#E8D9C8]/70 active:bg-[#E8D9C8] transition-colors whitespace-nowrap"
            >
              Reserve Your Table
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 — MENU PREVIEW */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5EDE3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-9">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#76563F] uppercase mb-2">
              OUR MENU
            </p>
            <h2 className="font-serif text-section-fluid font-semibold text-[#211710] tracking-tight text-balance">
              What Would You Like Today?
            </h2>
          </div>

          {/* Responsive wrapping category tabs on mobile, single centered row on desktop */}
          <div
            className="menu-categories justify-center mb-7 sm:mb-9"
            role="tablist"
            aria-label="Menu preview categories"
          >
            {PREVIEW_TABS.map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#E8D9C8] text-[#211710] shadow-xs border border-[#C5A16D]/50'
                      : 'bg-[#FBF7F1]/70 md:bg-transparent text-[#76563F] hover:text-[#211710] hover:bg-[#E8D9C8]/50 border border-[#E8D9C8]/70 md:border-transparent'
                  }`}
                >
                  <span className="text-[#76563F]">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Food Photography Cards */}
          {activeCategory === 'All' ? (
            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-8 sm:mb-10">
              {HOME_PREVIEW_CARDS.map((card, index) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => onNavigate('menu', card.category)}
                  className={`group relative rounded-xl overflow-hidden bg-[#211710] aspect-[4/3] shadow-sm border border-[#E8D9C8] text-left focus-visible:outline-[#C5A16D] ${
                    index === 4 ? 'min-[380px]:col-span-2 md:col-span-1' : ''
                  }`}
                >
                  <SafeImage
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 lg:group-hover:scale-105"
                  />
                  {/* Always readable on touch screens; hover-enhanced on desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211710]/85 via-[#211710]/20 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 sm:p-3.5">
                    <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-[#C5A16D]">
                      {card.category}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-[#FBF7F1] leading-snug">
                      {card.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto mb-8 sm:mb-10">
              {(filteredPreviewItems || []).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate('menu', item.category)}
                  className="group rounded-2xl overflow-hidden bg-[#FBF7F1] border border-[#E8D9C8] shadow-sm hover:shadow-md transition-all duration-200 text-left flex flex-col"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#211710]">
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 lg:group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-[#76563F] mb-1">
                        <span>{item.category}</span>
                        <span className="font-semibold text-[#211710] tabular-nums">
                          {item.demoPrice}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-[#211710] mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#76563F] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* View Full Menu CTA */}
          <div className="text-center">
            <button
              type="button"
              onClick={() =>
                onNavigate(
                  'menu',
                  activeCategory === 'All' || activeCategory === 'More' ? 'All' : activeCategory
                )
              }
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-lg bg-[#FBF7F1] border border-[#76563F]/35 text-[#211710] text-sm font-semibold hover:bg-[#E8D9C8]/60 hover:border-[#76563F] active:bg-[#E8D9C8] transition-all duration-150 shadow-xs"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* VIP CLUB PROMOTIONAL BANNER */}
      <section className="bg-[#211710] border-t border-[#E8D9C8]/12 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C5A16D]/60 bg-[#35251B]/60 flex items-center justify-center shrink-0 text-[#C5A16D]">
              <Crown className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.6} />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-[1.85rem] font-semibold text-[#FBF7F1] leading-tight mb-1.5">
                Join Our VIP Club
              </h2>
              <p className="text-sm text-[#E8D9C8]/85 max-w-xl leading-relaxed">
                Be part of our exclusive community and get special offers, new menu updates and member-only treats.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => onOpenCommunity('whatsapp')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg border border-[#4ADE80]/60 bg-[#1B2B1E]/60 text-[#F5EDE3] text-sm font-semibold hover:bg-[#233B27] active:bg-[#233B27] transition-colors whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#4ADE80] shrink-0" />
              <span>Join on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenCommunity('instagram')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg border border-[#D96B98]/60 bg-[#2E1A22]/60 text-[#F5EDE3] text-sm font-semibold hover:bg-[#3E222E] active:bg-[#3E222E] transition-colors whitespace-nowrap"
            >
              <InstagramIcon className="w-4 h-4 text-[#E88CA5] shrink-0" />
              <span>Join on Instagram</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
