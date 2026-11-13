import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Star } from 'lucide-react';
import { DemoReview } from '../types';
import { INITIAL_DEMO_REVIEWS, RESTAURANT_CONFIG } from '../data/restaurantData';
import { GoogleGLogo, InstagramIcon } from '../components/Icons';
import { CommunityChannel } from '../components/CommunityModal';

interface ReviewsPageProps {
  onOpenCommunity: (channel: CommunityChannel) => void;
}

const RATING_BREAKDOWN = [
  { stars: 5, percent: 84 },
  { stars: 4, percent: 11 },
  { stars: 3, percent: 3 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 1 },
];

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenCommunity }) => {
  const [reviews, setReviews] = useState<DemoReview[]>(INITIAL_DEMO_REVIEWS);
  const [author, setAuthor] = useState('');
  const [visitContext, setVisitContext] = useState('Evening Dinner');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) {
      setError('Please enter your name and review comment.');
      return;
    }

    const newReview: DemoReview = {
      id: `demo-rev-${Date.now()}`,
      author: author.trim(),
      visitContext,
      rating,
      dateLabel: 'Demo Review (Submitted Locally)',
      comment: comment.trim(),
      isUserSubmitted: true,
    };

    setReviews((prev) => [newReview, ...prev]);
    setAuthor('');
    setComment('');
    setRating(5);
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F5EDE3] min-h-screen">
      {/* Dark Editorial Header */}
      <section className="bg-[#211710] text-[#F5EDE3] py-10 sm:py-14 lg:py-16 border-b border-[#E8D9C8]/12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A16D] uppercase mb-2.5">
              GUEST STORIES · ILLUSTRATIVE DEMO REVIEWS
            </p>
            <h1 className="font-serif text-page-fluid font-semibold text-[#FBF7F1] text-balance mb-3">
              Your Experience Means Everything.
            </h1>
            <p className="text-sm sm:text-base text-[#E8D9C8]/85 max-w-2xl leading-relaxed">
              See how The Urban Table presents guest ratings, review invitations, and community engagement. All ratings and testimonials displayed here are illustrative demo content.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={() => onOpenCommunity('google')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg bg-[#F5EDE3] text-[#211710] text-sm font-semibold hover:bg-[#FBF7F1] transition-colors whitespace-nowrap"
            >
              <GoogleGLogo className="w-4 h-4 shrink-0" />
              <span>Review on Google</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenCommunity('instagram')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg border border-[#E8D9C8]/40 text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] transition-colors whitespace-nowrap"
            >
              <InstagramIcon className="w-4 h-4 text-[#E88CA5] shrink-0" />
              <span>Follow on Instagram</span>
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 sm:space-y-12">
        {/* Rating Summary & Submission Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left: Attractive Rating Summary */}
          <div className="lg:col-span-5 rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#76563F] mb-2">
                Illustrative Rating Summary
              </p>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-5xl font-bold text-[#211710] tabular-nums">
                  4.8
                </span>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 fill-[#C5A16D] text-[#C5A16D]"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-[#76563F] tabular-nums">
                    Based on 1,200+ illustrative demo reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-[#E8D9C8]">
              {RATING_BREAKDOWN.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-medium text-[#211710] tabular-nums">
                    {row.stars} Stars
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-[#E8D9C8]/70 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#76563F]"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                  <span className="w-9 text-right text-[#76563F] tabular-nums">
                    {row.percent}%
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] p-4 text-xs text-[#76563F] leading-relaxed">
              <strong className="text-[#211710] block mb-1">Placeholder Integration URLs:</strong>
              Google Reviews: <span className="font-mono break-all">{RESTAURANT_CONFIG.links.googleReviews}</span>
              <br />
              Instagram: <span className="font-mono break-all">{RESTAURANT_CONFIG.links.instagramProfile}</span>
            </div>
          </div>

          {/* Right: Review Submission Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-8 shadow-xs">
            <h2 className="font-serif text-section-fluid font-semibold text-[#211710] mb-1.5">
              Share a Demo Review
            </h2>
            <p className="text-sm text-[#76563F] mb-6">
              Test the guest review experience below. Submitted reviews appear immediately in the demo showcase list on this page.
            </p>

            {submitted && (
              <div className="mb-6 rounded-xl bg-[#F5EDE3] border border-[#C5A16D]/60 p-4 flex items-start gap-2.5 text-sm text-[#211710]">
                <CheckCircle2 className="w-5 h-5 text-[#3A6B46] shrink-0 mt-0.5" />
                <div>
                  <strong>Thank you!</strong> Your demo review has been added below locally.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="rev-author" className="block text-xs font-semibold text-[#211710] mb-1.5">
                    Your Name <span className="text-[#8F3A2B]">*</span>
                  </label>
                  <input
                    id="rev-author"
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g., Sophia Chen"
                    className="w-full min-h-[48px] rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3.5 py-2.5 text-base sm:text-sm text-[#211710] placeholder:text-[#76563F]/55 focus:border-[#76563F] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="rev-context" className="block text-xs font-semibold text-[#211710] mb-1.5">
                    Dining Occasion
                  </label>
                  <select
                    id="rev-context"
                    value={visitContext}
                    onChange={(e) => setVisitContext(e.target.value)}
                    className="w-full min-h-[48px] rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3.5 py-2.5 text-base sm:text-sm text-[#211710] focus:border-[#76563F] focus:outline-none"
                  >
                    <option value="Evening Dinner">Evening Dinner</option>
                    <option value="Weekend Brunch">Weekend Brunch</option>
                    <option value="Lunch & Coffee">Lunch &amp; Coffee</option>
                    <option value="Special Celebration">Special Celebration</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#211710] mb-1.5">
                  Star Rating
                </label>
                <div className="flex flex-wrap items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="w-11 h-11 rounded-lg flex items-center justify-center hover:bg-[#F5EDE3] transition-colors"
                      aria-label={`Select ${star} stars`}
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? 'fill-[#C5A16D] text-[#C5A16D]'
                            : 'text-[#76563F]/30'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-xs text-[#76563F] font-medium tabular-nums">
                    {rating}.0 / 5.0
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="rev-comment" className="block text-xs font-semibold text-[#211710] mb-1.5">
                  Review Comment <span className="text-[#8F3A2B]">*</span>
                </label>
                <textarea
                  id="rev-comment"
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write an illustrative review about your favorite dish or ambiance..."
                  className="w-full rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3.5 py-3 text-base sm:text-sm text-[#211710] placeholder:text-[#76563F]/55 focus:border-[#76563F] focus:outline-none"
                />
              </div>

              {error && (
                <p className="flex items-center gap-1.5 text-xs text-[#8F3A2B] font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-lg bg-[#211710] text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] transition-colors"
              >
                Post Demo Review
              </button>
            </form>
          </div>
        </div>

        {/* Sample Review Cards (Vertical mobile stack, 2-col desktop) */}
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E8D9C8] pb-3 mb-6">
            <h2 className="font-serif text-section-fluid font-semibold text-[#211710]">
              Recent Guest Impressions
            </h2>
            <span className="text-xs text-[#76563F]">
              All reviews shown are illustrative demo entries
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {reviews.map((rev) => (
              <article
                key={rev.id}
                className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-5 sm:p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${
                            s <= rev.rating
                              ? 'fill-[#C5A16D] text-[#C5A16D]'
                              : 'text-[#76563F]/25'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-[#76563F]">
                      {rev.dateLabel}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#191512] leading-relaxed mb-5">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8D9C8]/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-semibold text-[#211710]">{rev.author}</span>
                  <span className="text-[#76563F]">{rev.visitContext}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
