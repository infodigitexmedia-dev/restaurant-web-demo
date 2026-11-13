import React, { useState } from 'react';
import {
  AlertCircle,
  Armchair,
  BellRing,
  BookOpen,
  Calendar,
  CheckCircle2,
  Crown,
  Droplets,
  Info,
  Receipt,
  Star,
  Utensils,
} from 'lucide-react';
import { PageId } from '../types';
import { IMAGES, MENU_ITEMS } from '../data/restaurantData';
import { SafeImage } from '../components/SafeImage';

interface GuestExperiencePageProps {
  onNavigate: (page: PageId) => void;
}

const SPECIAL_REQUEST_OPTIONS = [
  { id: 'cutlery', label: 'Extra Cutlery', icon: <Utensils className="w-4 h-4 shrink-0" /> },
  { id: 'water', label: 'Water', icon: <Droplets className="w-4 h-4 shrink-0" /> },
  { id: 'napkins', label: 'Napkins', icon: <BookOpen className="w-4 h-4 shrink-0" /> },
  { id: 'seating', label: 'Assistance with Seating', icon: <Armchair className="w-4 h-4 shrink-0" /> },
];

export const GuestExperiencePage: React.FC<GuestExperiencePageProps> = ({ onNavigate }) => {
  const [staffCalled, setStaffCalled] = useState(false);
  const [billRequested, setBillRequested] = useState<'card' | 'cash' | 'split' | null>(null);
  const [billMethod, setBillMethod] = useState<'card' | 'cash' | 'split'>('card');
  const [activeRequests, setActiveRequests] = useState<string[]>([]);
  const [lastRequestNote, setLastRequestNote] = useState<string | null>(null);

  const [feedbackRating, setFeedbackRating] = useState<number>(5);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackNote, setFeedbackNote] = useState('');
  const [feedbackError, setFeedbackError] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSpecialRequest = (id: string, label: string) => {
    setActiveRequests((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setLastRequestNote(
      `Demo Confirmation: "${label}" request simulated locally. In a live deployment, this notifies your table host.`
    );
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackNote.trim()) {
      setFeedbackError('Please share a quick note about your dining experience.');
      return;
    }
    setFeedbackError('');
    setFeedbackSubmitted(true);
  };

  const sampleDietaryItems = MENU_ITEMS.slice(0, 6);

  return (
    <div className="bg-[#F5EDE3] min-h-screen">
      {/* Dark Editorial Header */}
      <section className="relative bg-[#211710] text-[#F5EDE3] overflow-hidden border-b border-[#E8D9C8]/12">
        <div className="absolute inset-0">
          <SafeImage
            src={IMAGES.interior}
            alt="Warm table setting at The Urban Table"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#211710] via-[#211710]/92 to-[#211710]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A16D] uppercase mb-2.5">
            TABLE-SIDE DIGITAL HOSPITALITY · DEMO
          </p>
          <h1 className="font-serif text-page-fluid font-semibold text-[#FBF7F1] text-balance mb-3">
            Your Experience. Made Better.
          </h1>
          <p className="text-sm sm:text-base text-[#E8D9C8]/90 max-w-2xl leading-relaxed mb-5">
            Thoughtful digital experiences that make every restaurant visit more convenient.
          </p>
          <div className="inline-flex items-start sm:items-center gap-2.5 text-xs text-[#E8D9C8]/80 bg-[#35251B]/85 border border-[#C5A16D]/30 rounded-xl px-4 py-2.5">
            <Info className="w-4 h-4 text-[#C5A16D] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              Interactive Demonstration: Buttons below simulate local table-side hospitality responses and do not notify live staff.
            </span>
          </div>
        </div>
      </section>

      {/* Main 8-Feature Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* 1. DIGITAL MENU */}
          <article className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] flex items-center justify-center text-[#76563F] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold tracking-wider text-[#76563F] uppercase mb-1">
                01 · Browse Effortlessly
              </p>
              <h2 className="font-serif text-2xl font-semibold text-[#211710] mb-2">
                Digital Menu
              </h2>
              <p className="text-sm text-[#76563F] leading-relaxed mb-5">
                Allow guests to explore rich photography, dish descriptions, and dietary notes directly from their table without waiting for printed menus.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('menu')}
              className="w-full min-h-[48px] py-3 px-4 rounded-lg bg-[#211710] text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] transition-colors"
            >
              Open Digital Menu
            </button>
          </article>

          {/* 2. CALL STAFF */}
          <article className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] flex items-center justify-center text-[#76563F] mb-4">
                <BellRing className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold tracking-wider text-[#76563F] uppercase mb-1">
                02 · Table Assistance
              </p>
              <h2 className="font-serif text-2xl font-semibold text-[#211710] mb-2">
                Call Staff
              </h2>
              <p className="text-sm text-[#76563F] leading-relaxed mb-5">
                Demonstrate how guests can politely request a server at their table with one calm tap—no waving across a busy dining room.
              </p>
            </div>

            <div className="space-y-3">
              {staffCalled && (
                <div className="rounded-xl bg-[#F5EDE3] border border-[#C5A16D]/50 p-3.5 text-xs text-[#211710] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3A6B46] shrink-0 mt-0.5" />
                  <span>
                    <strong>Demo Confirmation:</strong> Staff assistance alert simulated locally. (No live restaurant staff notified.)
                  </span>
                </div>
              )}
              <button
                type="button"
                onClick={() => setStaffCalled((prev) => !prev)}
                className={`w-full min-h-[48px] py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                  staffCalled
                    ? 'bg-[#E8D9C8] text-[#211710] hover:bg-[#DFCEBA]'
                    : 'bg-[#211710] text-[#F5EDE3] hover:bg-[#35251B]'
                }`}
              >
                {staffCalled ? 'Reset Staff Demo' : 'Call Staff (Demo)'}
              </button>
            </div>
          </article>

          {/* 3. REQUEST THE BILL */}
          <article className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] flex items-center justify-center text-[#76563F] mb-4">
                <Receipt className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold tracking-wider text-[#76563F] uppercase mb-1">
                03 · Seamless Wrap-Up
              </p>
              <h2 className="font-serif text-2xl font-semibold text-[#211710] mb-2">
                Request the Bill
              </h2>
              <p className="text-sm text-[#76563F] leading-relaxed mb-4">
                Showcase how guests can let their server know they are ready for the check without waiting.
              </p>

              <div className="flex items-center gap-1.5 mb-4">
                {(['card', 'cash', 'split'] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setBillMethod(method)}
                    className={`flex-1 min-h-[44px] px-2 py-2 rounded-lg text-xs font-medium capitalize transition-colors ${
                      billMethod === method
                        ? 'bg-[#E8D9C8] text-[#211710] border border-[#C5A16D]/50'
                        : 'bg-[#F5EDE3] text-[#76563F] hover:text-[#211710]'
                    }`}
                  >
                    {method === 'split' ? 'Split Check' : method}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {billRequested && (
                <div className="rounded-xl bg-[#F5EDE3] border border-[#C5A16D]/50 p-3.5 text-xs text-[#211710] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3A6B46] shrink-0 mt-0.5" />
                  <span>
                    <strong>Demo Confirmation:</strong> Bill request ({billRequested}) simulated locally. No real payment or POS action triggered.
                  </span>
                </div>
              )}
              <button
                type="button"
                onClick={() => setBillRequested(billRequested ? null : billMethod)}
                className={`w-full min-h-[48px] py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                  billRequested
                    ? 'bg-[#E8D9C8] text-[#211710]'
                    : 'bg-[#211710] text-[#F5EDE3] hover:bg-[#35251B]'
                }`}
              >
                {billRequested ? 'Clear Demo Confirmation' : 'Request the Bill (Demo)'}
              </button>
            </div>
          </article>

          {/* 4. SPECIAL REQUESTS */}
          <article className="md:col-span-2 rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#76563F] uppercase mb-1">
                04 · Quick Comfort Requests
              </p>
              <h2 className="font-serif text-2xl font-semibold text-[#211710] mb-2">
                Special Requests
              </h2>
              <p className="text-sm text-[#76563F] leading-relaxed mb-5 max-w-2xl">
                Demonstrate one-tap table comforts so guests feel cared for throughout their meal. Tap any request below to preview the instant demo confirmation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                {SPECIAL_REQUEST_OPTIONS.map((opt) => {
                  const requested = activeRequests.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSpecialRequest(opt.id, opt.label)}
                      className={`min-h-[48px] flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                        requested
                          ? 'bg-[#211710] border-[#211710] text-[#FBF7F1]'
                          : 'bg-[#F5EDE3] border-[#E8D9C8] text-[#211710] hover:border-[#76563F]'
                      }`}
                    >
                      <span className={requested ? 'text-[#C5A16D]' : 'text-[#76563F]'}>
                        {opt.icon}
                      </span>
                      <span className="leading-tight">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {lastRequestNote && (
              <div className="rounded-xl bg-[#F5EDE3] border border-[#C5A16D]/50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#211710]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3A6B46] shrink-0 mt-0.5" />
                  <span>{lastRequestNote}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveRequests([]);
                    setLastRequestNote(null);
                  }}
                  className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#FBF7F1] border border-[#E8D9C8] font-semibold text-[#76563F] hover:text-[#211710] self-start sm:self-auto shrink-0"
                >
                  Reset Requests
                </button>
              </div>
            )}
          </article>

          {/* 5. SHARE YOUR EXPERIENCE */}
          <article className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] flex items-center justify-center text-[#76563F] mb-4">
                <Star className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold tracking-wider text-[#76563F] uppercase mb-1">
                05 · Guest Voices
              </p>
              <h2 className="font-serif text-2xl font-semibold text-[#211710] mb-2">
                Share Your Experience
              </h2>
              <p className="text-sm text-[#76563F] leading-relaxed mb-5">
                Invite guests to leave immediate private feedback at the table or browse community reviews on our dedicated Reviews page.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href="#guest-feedback-form"
                className="w-full min-h-[44px] inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#211710] text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] transition-colors"
              >
                Leave Feedback Below
              </a>
              <button
                type="button"
                onClick={() => onNavigate('reviews')}
                className="w-full min-h-[44px] py-2.5 px-4 rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] text-[#211710] text-sm font-semibold hover:bg-[#E8D9C8]/70 transition-colors"
              >
                Visit Reviews Page
              </button>
            </div>
          </article>
        </div>

        {/* 6. DIETARY INFORMATION (Mobile Card Stack + Desktop Table) */}
        <article className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-5 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8D9C8] pb-4 mb-5">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#76563F] uppercase mb-1">
                06 · Transparency &amp; Care
              </p>
              <h2 className="font-serif text-section-fluid font-semibold text-[#211710]">
                Dietary &amp; Allergen Guide
              </h2>
            </div>
            <span className="text-xs text-[#76563F]">
              Illustrative sample allergens for demo
            </span>
          </div>

          {/* Mobile Card Layout (< md) */}
          <div className="md:hidden space-y-3">
            {sampleDietaryItems.map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] p-4 space-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-sm text-[#211710] leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-xs text-[#76563F] shrink-0">{item.category}</span>
                </div>
                <p className="text-xs text-[#76563F]">{item.dietaryNote}</p>
                <p className="text-xs text-[#211710] font-medium pt-1">
                  Sample Allergens: {item.allergens.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop / Tablet Table (md+) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#E8D9C8] text-xs uppercase tracking-wider text-[#76563F]">
                  <th className="py-3 pr-4 font-semibold">Illustrative Dish</th>
                  <th className="py-3 px-4 font-semibold">Category</th>
                  <th className="py-3 px-4 font-semibold">Dietary Classification</th>
                  <th className="py-3 pl-4 font-semibold">Sample Allergens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8D9C8]/70">
                {sampleDietaryItems.map((item) => (
                  <tr key={item.id} className="hover:bg-[#F5EDE3]/60 transition-colors">
                    <td className="py-3.5 pr-4 font-medium text-[#211710]">{item.name}</td>
                    <td className="py-3.5 px-4 text-[#76563F]">{item.category}</td>
                    <td className="py-3.5 px-4 text-[#76563F]">{item.dietaryNote}</td>
                    <td className="py-3.5 pl-4 text-[#211710] font-medium">
                      {item.allergens.join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        {/* 7. CUSTOMER FEEDBACK & 8. VISIT AGAIN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <article
            id="guest-feedback-form"
            className="lg:col-span-7 rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-8 shadow-xs"
          >
            <p className="text-xs font-semibold tracking-wider text-[#76563F] uppercase mb-1">
              07 · In-Dining Feedback
            </p>
            <h2 className="font-serif text-section-fluid font-semibold text-[#211710] mb-2">
              Customer Feedback (Demo)
            </h2>
            <p className="text-sm text-[#76563F] mb-6">
              Select a star rating and submit a quick comment to test the local feedback confirmation experience.
            </p>

            {feedbackSubmitted ? (
              <div className="rounded-xl bg-[#F5EDE3] border border-[#C5A16D]/60 p-5 sm:p-6 space-y-3">
                <div className="flex items-start gap-2.5 text-[#211710]">
                  <CheckCircle2 className="w-6 h-6 text-[#3A6B46] shrink-0" />
                  <h3 className="font-serif text-xl font-semibold">
                    Thank You! Demo Feedback Recorded Locally
                  </h3>
                </div>
                <p className="text-sm text-[#76563F]">
                  Rating: <strong className="text-[#211710] tabular-nums">{feedbackRating}/5 Stars</strong> — &ldquo;{feedbackNote}&rdquo;
                </p>
                <p className="text-xs text-[#76563F]/80">
                  This is a frontend demo confirmation; no data was transmitted externally.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFeedbackSubmitted(false);
                    setFeedbackNote('');
                    setFeedbackName('');
                  }}
                  className="min-h-[44px] px-4 py-2.5 rounded-lg bg-[#211710] text-[#F5EDE3] text-xs font-semibold hover:bg-[#35251B]"
                >
                  Submit Another Demo Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#211710] mb-2">
                    Your Experience Rating
                  </label>
                  <div className="flex flex-wrap items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFeedbackRating(star)}
                        className="w-11 h-11 rounded-lg flex items-center justify-center hover:bg-[#F5EDE3] transition-colors"
                        aria-label={`Rate ${star} out of 5 stars`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= feedbackRating
                              ? 'fill-[#C5A16D] text-[#C5A16D]'
                              : 'text-[#76563F]/35'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-xs font-medium text-[#76563F] tabular-nums">
                      {feedbackRating} / 5
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="gx-name" className="block text-xs font-semibold text-[#211710] mb-1.5">
                    Guest Name (Optional)
                  </label>
                  <input
                    id="gx-name"
                    type="text"
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    placeholder="e.g., Jordan Patel"
                    className="w-full min-h-[48px] rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3.5 py-2.5 text-base sm:text-sm text-[#211710] placeholder:text-[#76563F]/55 focus:border-[#76563F] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="gx-note" className="block text-xs font-semibold text-[#211710] mb-1.5">
                    Your Thoughts <span className="text-[#8F3A2B]">*</span>
                  </label>
                  <textarea
                    id="gx-note"
                    rows={3}
                    value={feedbackNote}
                    onChange={(e) => setFeedbackNote(e.target.value)}
                    placeholder="Share how your visit felt—food, atmosphere, or hospitality..."
                    className="w-full rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3.5 py-3 text-base sm:text-sm text-[#211710] placeholder:text-[#76563F]/55 focus:border-[#76563F] focus:outline-none"
                  />
                </div>

                {feedbackError && (
                  <p className="flex items-center gap-1.5 text-xs text-[#8F3A2B] font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {feedbackError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-lg bg-[#211710] text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] transition-colors"
                >
                  Submit Demo Feedback
                </button>
              </form>
            )}
          </article>

          {/* 8. VISIT AGAIN */}
          <article className="lg:col-span-5 rounded-2xl bg-[#211710] text-[#F5EDE3] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#C5A16D] uppercase mb-1">
                08 · Until Next Time
              </p>
              <h2 className="font-serif text-section-fluid font-semibold text-[#FBF7F1] mb-3">
                Visit Again Soon
              </h2>
              <p className="text-sm text-[#E8D9C8]/85 leading-relaxed mb-6">
                Whether you are exploring tonight’s dishes, unlocking loyalty stamps in our VIP Club, or planning your next evening celebration, we would love to welcome you back.
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => onNavigate('menu')}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#F5EDE3] text-[#211710] text-sm font-semibold hover:bg-[#FBF7F1] transition-colors"
              >
                <Utensils className="w-4 h-4 shrink-0" />
                <span>Explore Full Menu</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('vip-club')}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#35251B] border border-[#C5A16D]/40 text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B]/80 transition-colors"
              >
                <Crown className="w-4 h-4 text-[#C5A16D] shrink-0" />
                <span>Join VIP Club</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('book-table')}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-[#E8D9C8]/30 text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B]/50 transition-colors"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Reserve Another Table</span>
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
