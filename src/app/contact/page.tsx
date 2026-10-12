'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { MapPin, Phone, Mail, MessageSquare, Check, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading contact...</div>}>
      <ContactContent />
    </Suspense>
  );
}

function ContactContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    phoneWhatsApp: '',
    enquiryType: 'Custom Tour',
    preferredDates: '',
    travellersCount: '2 Adults',
    interestedTourOrDestination: '',
    message: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [generatedRef, setGeneratedRef] = useState('');

  // Prefill interestedTourOrDestination if passed in query param
  useEffect(() => {
    const tourParam = searchParams.get('tour');
    const destParam = searchParams.get('destination');
    if (tourParam) {
      setForm((prev) => ({
        ...prev,
        enquiryType: 'Existing Tour',
        interestedTourOrDestination: tourParam,
        message: `Hello Heritage Travels, I am interested in inquiring about the "${tourParam}" tour concept.`
      }));
    } else if (destParam) {
      setForm((prev) => ({
        ...prev,
        enquiryType: 'Destination Information',
        interestedTourOrDestination: destParam,
        message: `Hello Heritage Travels, I would like to include ${destParam} in my proposed journey.`
      }));
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!form.email.trim() || !form.email.includes('@')) newErrors.email = 'Please provide a valid email address.';
    if (!form.country.trim()) newErrors.country = 'Please indicate your country of residence.';
    if (!form.message.trim()) newErrors.message = 'Please provide details about your enquiry.';
    if (!form.privacyConsent) newErrors.privacyConsent = 'You must agree to the privacy policy to submit.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const refCode = `HT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedRef(refCode);

    try {
      localStorage.setItem('heritage_latest_contact_enquiry', JSON.stringify({
        ...form,
        referenceCode: refCode,
        submittedAt: new Date().toISOString()
      }));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 750);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. HEADER */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
          Colombo Concierge Desk
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#252720]">
          Contact Heritage Travels
        </h1>
        <p className="text-xs sm:text-sm text-[#77756D] font-light max-w-xl mx-auto leading-relaxed">
          Whether you have a specific tour in mind, wish to formulate a custom private itinerary, or simply seek travel advice for Sri Lanka, our destination specialists are here to assist.
        </p>
      </div>

      {/* 2. TWO-COLUMN: FORM & DIRECT CONTACT INFO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs p-6 sm:p-10 shadow-xs">
          
          {submittedSuccess ? (
            <div className="py-12 text-center space-y-4 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-[#6C7357] text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-medium text-[#252720]">
                Thank You, {form.name}
              </h2>
              <div className="p-4 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs inline-block text-xs font-mono text-[#252720]">
                Reference ID: <strong className="text-[#6C7357]">{generatedRef}</strong>
              </div>
              <p className="text-xs text-[#77756D] font-light max-w-md mx-auto leading-relaxed">
                Your enquiry has been safely received. A dedicated Sri Lanka travel designer will review your notes and respond within 24 business hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="text-xs uppercase tracking-wider text-[#252720] hover:text-[#6C7357] underline underline-offset-4"
                >
                  Return to Homepage
                </Link>
                <span className="hidden sm:inline text-stone-400">•</span>
                <Link
                  href="/destinations"
                  className="text-xs uppercase tracking-wider text-[#252720] hover:text-[#6C7357] underline underline-offset-4"
                >
                  Explore Destinations
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="border-b border-[#DCD4C6] pb-4">
                <h2 className="text-xl font-serif font-medium text-[#252720]">
                  Send a Travel Enquiry
                </h2>
                <p className="text-xs text-[#77756D] font-light">
                  Please complete the fields below to help us tailor our recommendations.
                </p>
              </div>

              {/* Enquiry Type */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#252720] block">Enquiry Type</label>
                <select
                  value={form.enquiryType}
                  onChange={(e) => setForm({ ...form, enquiryType: e.target.value })}
                  className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                >
                  <option value="Custom Tour">Custom Private Tour Itinerary</option>
                  <option value="Existing Tour">Existing Curated Tour (Quote & Dates)</option>
                  <option value="Destination Information">Destination & Archaeological Inquiries</option>
                  <option value="Partnership">Travel Trade or Media Partnership</option>
                  <option value="General Enquiry">General Travel Inquiry</option>
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#252720]">Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. David & Sarah Miller"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                  />
                  {errors.name && <p className="text-[11px] text-red-600">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#252720]">Email Address *</label>
                  <input
                    type="email"
                    placeholder="e.g. sarah@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                  />
                  {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                </div>
              </div>

              {/* Country & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#252720]">Country of Residence *</label>
                  <input
                    type="text"
                    placeholder="e.g. Germany, Canada, UK, Singapore..."
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                  />
                  {errors.country && <p className="text-[11px] text-red-600">{errors.country}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#252720]">Phone / WhatsApp (Optional)</label>
                  <input
                    type="text"
                    placeholder="+44 7700 900000"
                    value={form.phoneWhatsApp}
                    onChange={(e) => setForm({ ...form, phoneWhatsApp: e.target.value })}
                    className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                  />
                </div>
              </div>

              {/* Optional Travel Context */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#252720]">Approximate Dates / Month</label>
                  <input
                    type="text"
                    placeholder="e.g. November 2026 or 2 weeks in Feb"
                    value={form.preferredDates}
                    onChange={(e) => setForm({ ...form, preferredDates: e.target.value })}
                    className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#252720]">Number of Travellers</label>
                  <input
                    type="text"
                    placeholder="e.g. 2 Adults, 1 Child"
                    value={form.travellersCount}
                    onChange={(e) => setForm({ ...form, travellersCount: e.target.value })}
                    className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                  />
                </div>
              </div>

              {/* Specific tour or destination interest */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#252720]">Interested Tour or Destination (if applicable)</label>
                <input
                  type="text"
                  placeholder="e.g. The Cultural Triangle Journey or Sigiriya & Jaffna"
                  value={form.interestedTourOrDestination}
                  onChange={(e) => setForm({ ...form, interestedTourOrDestination: e.target.value })}
                  className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#252720]">Your Message or Questions *</label>
                <textarea
                  rows={4}
                  placeholder="Share details about what you wish to see, preferred pace, special occasions, or accommodation style..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                />
                {errors.message && <p className="text-[11px] text-red-600">{errors.message}</p>}
              </div>

              {/* Privacy Consent */}
              <div className="space-y-1 pt-1">
                <label className="flex items-start gap-2 text-xs text-[#77756D] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.privacyConsent}
                    onChange={(e) => setForm({ ...form, privacyConsent: e.target.checked })}
                    className="rounded-xs text-[#6C7357] mt-0.5"
                  />
                  <span>
                    I consent to Heritage Travels collecting and processing my details in accordance with the{' '}
                    <Link href="/privacy-policy" className="underline hover:text-[#252720]">Privacy Policy</Link>.
                  </span>
                </label>
                {errors.privacyConsent && <p className="text-[11px] text-red-600">{errors.privacyConsent}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#252720] text-[#F5F1E9] hover:bg-[#34372C] text-xs uppercase tracking-[0.18em] font-medium px-8 py-3.5 rounded-xs transition shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Travel Enquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Colombo Office & Details Column */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-[#252720] text-[#F5F1E9] p-8 rounded-xs space-y-6 border border-[#3D4034]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A88C5A] font-semibold block">
              Direct Connection
            </span>
            <h3 className="text-2xl font-serif font-normal">
              Colombo Concierge Office
            </h3>
            
            <div className="space-y-4 text-xs text-[#C5C1B6] font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A88C5A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-serif text-sm">Central Office:</strong>
                  <span>No. 42 Galle Face Court, Galle Road, Colombo 03, Sri Lanka</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#A88C5A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-serif text-sm">Telephone:</strong>
                  <span>+94 (11) 234-5678 (Monday–Saturday, 08:30–17:30 IST)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-[#6C7357] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-serif text-sm">WhatsApp Concierge:</strong>
                  <span>+94 77 123 4567 (Dedicated traveller support)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#A88C5A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-serif text-sm">Email Inquiries:</strong>
                  <span>enquiries@heritagetravels.lk</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EBE5DA] border border-[#DCD4C6] p-6 rounded-xs space-y-3 text-xs text-[#77756D] font-light">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252720] font-serif">
              Our Promise to Enquirers
            </h4>
            <p className="leading-relaxed">
              We never sell or share your contact information with third-party marketing firms. All recommendations are prepared by authentic destination specialists who know Sri Lanka intimately.
            </p>
            <div className="pt-2">
              <Link
                href="/faqs"
                className="text-xs text-[#6C7357] hover:underline font-medium"
              >
                Read our Frequently Asked Questions →
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
