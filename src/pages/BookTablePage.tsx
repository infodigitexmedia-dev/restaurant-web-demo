import React, { useState } from 'react';
import { AlertCircle, Calendar, CheckCircle2, Clock, Users } from 'lucide-react';
import { IMAGES, RESTAURANT_CONFIG } from '../data/restaurantData';
import { SafeImage } from '../components/SafeImage';

function formatTimeDisplay(time24: string): string {
  const [hStr, mStr] = time24.split(':');
  const h = Number(hStr);
  if (Number.isNaN(h)) return time24;
  const suffix = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${mStr} ${suffix}`;
}

export const BookTablePage: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2');
  const [specialRequests, setSpecialRequests] = useState('');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    date: string;
    time: string;
    guests: string;
    email: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim() || !date || !time) {
      setError('Please complete all required reservation fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmittedData({
      name: name.trim(),
      date,
      time: formatTimeDisplay(time),
      guests,
      email: email.trim(),
    });
  };

  return (
    <div className="bg-[#F5EDE3] min-h-screen">
      {/* Dark Header */}
      <section className="bg-[#211710] text-[#F5EDE3] py-10 sm:py-14 lg:py-16 border-b border-[#E8D9C8]/12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A16D] uppercase mb-2.5">
            TABLE RESERVATIONS · DEMO FLOW
          </p>
          <h1 className="font-serif text-page-fluid font-semibold text-[#FBF7F1] text-balance mb-3">
            Reserve Your Table.
          </h1>
          <p className="text-sm sm:text-base text-[#E8D9C8]/85 max-w-2xl leading-relaxed">
            Experience how effortlessly guests can request a table at The Urban Table. Submitting this form demonstrates the reservation request confirmation without connecting to a live booking system.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Reservation Form FIRST on mobile so guests reach it immediately */}
          <div className="order-1 lg:order-2 lg:col-span-7 rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] shadow-xs p-6 sm:p-10">
            {submittedData ? (
              <div className="h-full flex flex-col justify-center py-4 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F5EDE3] border border-[#C5A16D]/50 flex items-center justify-center text-[#3A6B46]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#76563F] mb-2">
                    Demo Confirmation
                  </p>
                  <h2 className="font-serif text-section-fluid font-semibold text-[#211710] mb-2">
                    Thank you! Your demo reservation request has been submitted.
                  </h2>
                  <p className="text-sm text-[#76563F] leading-relaxed">
                    This is an interactive demonstration — no live table has been reserved and no external booking system was contacted.
                  </p>
                </div>

                <div className="rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-xs text-[#76563F]">Guest Name</span>
                    <strong className="text-[#211710]">{submittedData.name}</strong>
                  </div>
                  <div>
                    <span className="block text-xs text-[#76563F]">Party Size</span>
                    <strong className="text-[#211710] tabular-nums">{submittedData.guests} Guests</strong>
                  </div>
                  <div>
                    <span className="block text-xs text-[#76563F]">Preferred Date</span>
                    <strong className="text-[#211710] tabular-nums">{submittedData.date}</strong>
                  </div>
                  <div>
                    <span className="block text-xs text-[#76563F]">Preferred Time</span>
                    <strong className="text-[#211710] tabular-nums">{submittedData.time}</strong>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedData(null);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setSpecialRequests('');
                    }}
                    className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-lg bg-[#211710] text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] transition-colors"
                  >
                    Submit Another Demo Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <h2 className="font-serif text-section-fluid font-semibold text-[#211710] mb-1">
                    Request a Table
                  </h2>
                  <p className="text-sm text-[#76563F]">
                    Fill in your preferred dining details below to preview the reservation flow.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="res-name" className="block text-xs font-semibold text-[#211710] mb-1.5">
                      Customer Name <span className="text-[#8F3A2B]">*</span>
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full min-h-[48px] rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3.5 py-2.5 text-base sm:text-sm text-[#211710] placeholder:text-[#76563F]/55 focus:border-[#76563F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="res-phone" className="block text-xs font-semibold text-[#211710] mb-1.5">
                      Phone Number <span className="text-[#8F3A2B]">*</span>
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full min-h-[48px] rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3.5 py-2.5 text-base sm:text-sm text-[#211710] placeholder:text-[#76563F]/55 focus:border-[#76563F] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="res-email" className="block text-xs font-semibold text-[#211710] mb-1.5">
                    Email Address <span className="text-[#8F3A2B]">*</span>
                  </label>
                  <input
                    id="res-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="guest@example.com"
                    className="w-full min-h-[48px] rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3.5 py-2.5 text-base sm:text-sm text-[#211710] placeholder:text-[#76563F]/55 focus:border-[#76563F] focus:outline-none"
                  />
                </div>

                {/* Single-column on narrow mobile, 3 columns on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="res-date" className="flex items-center gap-1.5 text-xs font-semibold text-[#211710] mb-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#76563F]" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      min={todayStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full min-h-[48px] rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3 py-2.5 text-base sm:text-sm text-[#211710] tabular-nums focus:border-[#76563F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="res-time" className="flex items-center gap-1.5 text-xs font-semibold text-[#211710] mb-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#76563F]" />
                      <span>Preferred Time</span>
                    </label>
                    <input
                      id="res-time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full min-h-[48px] rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3 py-2.5 text-base sm:text-sm text-[#211710] tabular-nums focus:border-[#76563F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="res-guests" className="flex items-center gap-1.5 text-xs font-semibold text-[#211710] mb-1.5">
                      <Users className="w-3.5 h-3.5 text-[#76563F]" />
                      <span>Number of Guests</span>
                    </label>
                    <select
                      id="res-guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full min-h-[48px] rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3 py-2.5 text-base sm:text-sm text-[#211710] tabular-nums focus:border-[#76563F] focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((count) => (
                        <option key={count} value={String(count)}>
                          {count} {count === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="res-notes" className="block text-xs font-semibold text-[#211710] mb-1.5">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="res-notes"
                    rows={3}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Window table, anniversary note, high chair, or dietary allergies..."
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
                  className="w-full min-h-[52px] py-3.5 px-6 rounded-lg bg-[#211710] text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] active:scale-[0.99] transition-all shadow-sm"
                >
                  Submit Reservation Request
                </button>
              </form>
            )}
          </div>

          {/* Dining Room Atmosphere & Hours */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden bg-[#211710] border border-[#E8D9C8] aspect-[4/3]">
              <SafeImage
                src={IMAGES.interior}
                alt="Cozy tables and warm brass lighting inside The Urban Table"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-7 space-y-4 flex-1">
              <h2 className="font-serif text-2xl font-semibold text-[#211710]">
                Dining Hours (Placeholder)
              </h2>
              <div className="space-y-2.5 text-sm">
                {RESTAURANT_CONFIG.contact.hours.map((row) => (
                  <div
                    key={row.days}
                    className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-1 min-[380px]:gap-4 py-2 border-b border-[#E8D9C8]/70 last:border-none"
                  >
                    <span className="text-[#76563F] font-medium">{row.days}</span>
                    <span className="text-[#211710] font-semibold tabular-nums">{row.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#76563F] leading-relaxed pt-1">
                Note: This reservation form is a frontend demonstration. In production, requests can route to your preferred booking engine or host desk email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
