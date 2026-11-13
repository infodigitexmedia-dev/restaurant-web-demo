import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { IMAGES, RESTAURANT_CONFIG } from '../data/restaurantData';
import { InstagramIcon, WhatsAppIcon } from '../components/Icons';
import { SafeImage } from '../components/SafeImage';
import { CommunityChannel } from '../components/CommunityModal';

interface ContactPageProps {
  onOpenCommunity: (channel: CommunityChannel) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenCommunity }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email address, and message.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <div className="bg-[#F5EDE3] min-h-screen">
      {/* Dark Header */}
      <section className="bg-[#211710] text-[#F5EDE3] py-10 sm:py-14 lg:py-16 border-b border-[#E8D9C8]/12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A16D] uppercase mb-2.5">
            LOCATION &amp; HOSPITALITY DESK · EDITABLE PLACEHOLDERS
          </p>
          <h1 className="font-serif text-page-fluid font-semibold text-[#FBF7F1] text-balance mb-3">
            Find &amp; Connect With Us
          </h1>
          <p className="text-sm sm:text-base text-[#E8D9C8]/85 max-w-2xl leading-relaxed">
            All address, phone, map, and community links below are structured as editable placeholders ready to customize for the restaurant.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left: Contact Placeholders & Community */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="font-serif text-section-fluid font-semibold text-[#211710]">
                Restaurant Details (Placeholders)
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] flex items-center justify-center text-[#76563F] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#76563F] mb-0.5">
                      Restaurant Address
                    </p>
                    <p className="font-medium text-[#211710] break-words">
                      {RESTAURANT_CONFIG.contact.address}
                    </p>
                  </div>
                </div>

                {/* Tap-to-Call Phone Link */}
                <a
                  href="tel:+15552348910"
                  className="flex items-start gap-3.5 min-h-[48px] rounded-xl p-1 -m-1 hover:bg-[#F5EDE3]/70 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] flex items-center justify-center text-[#76563F] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#76563F] mb-0.5">
                      Phone Number (Tap to Call)
                    </p>
                    <p className="font-medium text-[#211710] tabular-nums underline decoration-[#C5A16D]/60 underline-offset-4 break-words">
                      {RESTAURANT_CONFIG.contact.phone}
                    </p>
                  </div>
                </a>

                {/* Tap-to-Email Link */}
                <a
                  href={`mailto:${RESTAURANT_CONFIG.contact.email}`}
                  className="flex items-start gap-3.5 min-h-[48px] rounded-xl p-1 -m-1 hover:bg-[#F5EDE3]/70 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] flex items-center justify-center text-[#76563F] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#76563F] mb-0.5">
                      Email Address (Tap to Email)
                    </p>
                    <p className="font-medium text-[#211710] underline decoration-[#C5A16D]/60 underline-offset-4 break-all">
                      {RESTAURANT_CONFIG.contact.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 pt-1">
                  <div className="w-11 h-11 rounded-xl bg-[#F5EDE3] border border-[#E8D9C8] flex items-center justify-center text-[#76563F] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#76563F] mb-2">
                      Opening Hours
                    </p>
                    <div className="space-y-2">
                      {RESTAURANT_CONFIG.contact.hours.map((h) => (
                        <div
                          key={h.days}
                          className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between gap-0.5 min-[380px]:gap-4 text-xs sm:text-sm"
                        >
                          <span className="text-[#76563F]">{h.days}</span>
                          <span className="font-medium text-[#211710] tabular-nums">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram & WhatsApp Placeholder Buttons */}
              <div className="pt-5 border-t border-[#E8D9C8] flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => onOpenCommunity('whatsapp')}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#211710] text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>WhatsApp Link</span>
                </button>
                <button
                  type="button"
                  onClick={() => onOpenCommunity('instagram')}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] text-[#211710] text-sm font-semibold hover:bg-[#E8D9C8]/70 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#76563F] shrink-0" />
                  <span>Instagram Link</span>
                </button>
              </div>
            </div>

            {/* Google Maps Location Placeholder */}
            <div className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-7 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#76563F]">
                    Google Maps Location (Placeholder)
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-[#211710]">
                    Interactive Map Slot
                  </h3>
                </div>
                <a
                  href={RESTAURANT_CONFIG.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] text-xs font-semibold text-[#211710] hover:bg-[#E8D9C8]/60 transition-colors"
                >
                  <span>Open Map URL</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
              <div className="rounded-xl bg-[#F5EDE3] border border-dashed border-[#C5A16D] p-5 text-center space-y-1.5">
                <MapPin className="w-6 h-6 text-[#76563F] mx-auto" />
                <p className="text-sm font-semibold text-[#211710]">
                  The Urban Table — Map Embed Placeholder
                </p>
                <p className="text-xs text-[#76563F] font-mono break-words">
                  {RESTAURANT_CONFIG.contact.mapCoordinatesLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Restaurant Interior Image + Demo Message Form */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden bg-[#211710] border border-[#E8D9C8] aspect-[16/10]">
              <SafeImage
                src={IMAGES.interior}
                alt="Evening ambiance inside The Urban Table"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-6 sm:p-8 shadow-xs flex-1">
              <h2 className="font-serif text-2xl font-semibold text-[#211710] mb-1.5">
                Send a Demo Inquiry
              </h2>
              <p className="text-sm text-[#76563F] mb-5">
                Demonstrates private event or general guest inquiries (local demo confirmation only).
              </p>

              {sent ? (
                <div className="rounded-xl bg-[#F5EDE3] border border-[#C5A16D]/60 p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[#211710]">
                    <CheckCircle2 className="w-5 h-5 text-[#3A6B46] shrink-0" />
                    <strong className="font-serif text-lg">Demo Inquiry Submitted</strong>
                  </div>
                  <p className="text-sm text-[#76563F]">
                    Thank you, {name}. In a live deployment, this inquiry would be delivered to the restaurant’s hospitality inbox.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-lg bg-[#211710] text-[#F5EDE3] text-xs font-semibold hover:bg-[#35251B]"
                  >
                    Send Another Demo Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-name" className="block text-xs font-semibold text-[#211710] mb-1.5">
                        Your Name <span className="text-[#8F3A2B]">*</span>
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className="w-full min-h-[48px] rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3.5 py-2.5 text-base sm:text-sm text-[#211710] placeholder:text-[#76563F]/55 focus:border-[#76563F] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="block text-xs font-semibold text-[#211710] mb-1.5">
                        Email Address <span className="text-[#8F3A2B]">*</span>
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full min-h-[48px] rounded-lg bg-[#F5EDE3] border border-[#E8D9C8] px-3.5 py-2.5 text-base sm:text-sm text-[#211710] placeholder:text-[#76563F]/55 focus:border-[#76563F] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-msg" className="block text-xs font-semibold text-[#211710] mb-1.5">
                      Message <span className="text-[#8F3A2B]">*</span>
                    </label>
                    <textarea
                      id="c-msg"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Private dining questions, group seating, or general inquiry..."
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
                    Send Demo Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
