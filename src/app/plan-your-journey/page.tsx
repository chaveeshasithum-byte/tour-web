'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { HERITAGE_DESTINATIONS } from '@/data/destinations';
import { 
  Calendar, 
  Users, 
  Sparkles, 
  MapPin, 
  Car, 
  Bed, 
  DollarSign, 
  UserCheck, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck,
  RotateCcw,
  Compass,
  AlertCircle
} from 'lucide-react';

export default function PlanYourJourneyPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading planner...</div>}>
      <PlannerContent />
    </Suspense>
  );
}

function PlannerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initial step
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Dates
    arrivalDate: '2026-11-10',
    departureDate: '2026-11-18',
    isFlexibleDates: false,
    
    // Step 2: Travellers
    adults: 2,
    children: 0,
    childrenAges: '',

    // Step 3: Interests
    interests: ['Ancient kingdoms', 'Sacred architecture', 'Culinary heritage'] as string[],

    // Step 4: Destinations
    destinations: ['sigiriya', 'kandy', 'galle-fort'] as string[],
    wantsRecommendations: false,

    // Step 5: Travel Preferences
    travelPace: 'Balanced' as 'Relaxed' | 'Balanced' | 'Active',
    partyType: 'Private' as 'Private' | 'Small Group',
    transportType: 'Private Sedan with Chauffeur' as string,
    accommodationStyle: 'Boutique Heritage & Restored Villas' as string,
    mobilityRequirements: '',

    // Step 6: Budget
    currency: 'USD' as 'USD' | 'EUR' | 'GBP' | 'AUD',
    budgetRange: 'Moderate ($2,000 – $3,500 total)' as string,

    // Step 7: Contact Details
    fullName: '',
    email: '',
    phoneWhatsApp: '',
    country: '',
    specialRequests: '',
    privacyConsent: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prefill destination or tour from query param if provided
  useEffect(() => {
    const destParam = searchParams.get('destination');
    if (destParam && HERITAGE_DESTINATIONS.some(d => d.slug === destParam)) {
      setFormData(prev => ({
        ...prev,
        destinations: Array.from(new Set([...prev.destinations, destParam]))
      }));
    }
  }, [searchParams]);

  // Duration calculation
  const tripDuration = useMemo(() => {
    if (!formData.arrivalDate || !formData.departureDate) return { days: 0, nights: 0 };
    const start = new Date(formData.arrivalDate);
    const end = new Date(formData.departureDate);
    const diffTime = end.getTime() - start.getTime();
    if (diffTime <= 0) return { days: 0, nights: 0 };
    const nights = Math.round(diffTime / (1000 * 60 * 60 * 24));
    return { days: nights + 1, nights };
  }, [formData.arrivalDate, formData.departureDate]);

  // Available Interests options
  const interestOptions = [
    'Ancient kingdoms',
    'Archaeology',
    'Sacred architecture',
    'Colonial history',
    'Traditional crafts',
    'Culinary heritage',
    'Cultural landscapes',
    'Village experiences',
    'Museums & collections',
    'Photography',
    'Scenic highland travel'
  ];

  const toggleInterest = (interest: string) => {
    setFormData(prev => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  const toggleDestination = (slug: string) => {
    setFormData(prev => {
      const exists = prev.destinations.includes(slug);
      if (exists) {
        return { ...prev, destinations: prev.destinations.filter(d => d !== slug) };
      } else {
        return { ...prev, destinations: [...prev.destinations, slug] };
      }
    });
  };

  // Step Validation
  const validateStep = (stepNumber: number): boolean => {
    const errors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!formData.arrivalDate) errors.arrivalDate = 'Arrival date is required';
      if (!formData.departureDate) errors.departureDate = 'Departure date is required';
      if (new Date(formData.departureDate) <= new Date(formData.arrivalDate)) {
        errors.departureDate = 'Departure date must be after arrival date';
      }
    } else if (stepNumber === 2) {
      if (formData.adults < 1) errors.adults = 'At least 1 adult traveller is required';
    } else if (stepNumber === 3) {
      if (formData.interests.length === 0) errors.interests = 'Please select at least 1 cultural interest';
    } else if (stepNumber === 4) {
      if (!formData.wantsRecommendations && formData.destinations.length === 0) {
        errors.destinations = 'Please select at least one destination, or choose recommendations';
      }
    } else if (stepNumber === 7) {
      if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
      if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required';
      if (!formData.country.trim()) errors.country = 'Country of residence is required';
      if (!formData.privacyConsent) errors.privacyConsent = 'Please agree to the privacy policy to proceed';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      window.scrollTo({ top: 180, behavior: 'smooth' });
      setCurrentStep(prev => Math.min(prev + 1, 8));
    }
  };

  const handleBack = () => {
    window.scrollTo({ top: 180, behavior: 'smooth' });
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(7)) {
      setCurrentStep(7);
      return;
    }

    setIsSubmitting(true);

    // Generate unique reference number
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const refCode = `HT-2026-${randomNum}`;

    const submissionPayload = {
      referenceCode: refCode,
      submittedAt: new Date().toISOString(),
      ...formData,
      calculatedDuration: tripDuration
    };

    // Store in localStorage for receipt retrieval
    try {
      localStorage.setItem('heritage_latest_enquiry', JSON.stringify(submissionPayload));
    } catch (err) {
      console.warn('LocalStorage save failed', err);
    }

    // Simulate server response delay
    setTimeout(() => {
      setIsSubmitting(false);
      router.push(`/enquiry-confirmation?ref=${refCode}`);
    }, 800);
  };

  const stepTitles = [
    'Travel Dates',
    'Travellers',
    'Interests',
    'Destinations',
    'Preferences',
    'Budget',
    'Contact',
    'Review'
  ];

  return (
    <div className="space-y-12 pb-24 pt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
          Bespoke Journey Designer
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#252720]">
          Custom Tour Planner
        </h1>
        <p className="text-xs sm:text-sm text-[#77756D] font-light max-w-xl mx-auto leading-relaxed">
          Share your travel timeframe and passions. We formulate an unhurried, privately chauffeured Sri Lankan journey tailored exclusively to your rhythm.
        </p>
      </div>

      {/* Progress Step Bar */}
      <div className="border-y border-[#DCD4C6] py-4">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-2 sm:gap-4 px-2">
          {stepTitles.map((title, idx) => {
            const stepNum = idx + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (stepNum < currentStep) setCurrentStep(stepNum);
                }}
                disabled={stepNum > currentStep}
                className={`flex items-center gap-1.5 text-xs whitespace-nowrap transition-colors ${
                  isCurrent
                    ? 'text-[#252720] font-semibold'
                    : isCompleted
                    ? 'text-[#6C7357] hover:underline cursor-pointer'
                    : 'text-[#77756D]/50 cursor-not-allowed'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                  isCurrent
                    ? 'bg-[#252720] text-white'
                    : isCompleted
                    ? 'bg-[#6C7357] text-white'
                    : 'bg-[#DCD4C6] text-[#77756D]'
                }`}>
                  {isCompleted ? <Check className="w-3 h-3" /> : stepNum}
                </span>
                <span className="hidden md:inline font-sans">{title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN STEP CONTAINER */}
      <div className="bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs p-6 sm:p-10 shadow-xs">
        
        {/* STEP 1: TRAVEL DATES */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#A88C5A]">Step 1 of 8</span>
              <h2 className="text-2xl font-serif font-medium text-[#252720]">When do you plan to visit Sri Lanka?</h2>
              <p className="text-xs text-[#77756D] font-light">
                Select your intended arrival and departure dates. We will automatically calculate trip duration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#252720] block">
                  Intended Arrival Date:
                </label>
                <input
                  type="date"
                  value={formData.arrivalDate}
                  onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                  className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-3 text-xs text-[#252720] focus:ring-1 focus:ring-[#6C7357]"
                />
                {formErrors.arrivalDate && (
                  <p className="text-[11px] text-red-600 font-light">{formErrors.arrivalDate}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#252720] block">
                  Intended Departure Date:
                </label>
                <input
                  type="date"
                  value={formData.departureDate}
                  onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                  className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-3 text-xs text-[#252720] focus:ring-1 focus:ring-[#6C7357]"
                />
                {formErrors.departureDate && (
                  <p className="text-[11px] text-red-600 font-light">{formErrors.departureDate}</p>
                )}
              </div>
            </div>

            <div className="p-4 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#A88C5A]" />
                <span className="text-xs text-[#252720]">
                  Calculated Duration: <strong>{tripDuration.days} Days / {tripDuration.nights} Nights</strong>
                </span>
              </div>
              <label className="flex items-center gap-2 text-xs text-[#77756D] cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isFlexibleDates}
                  onChange={(e) => setFormData({ ...formData, isFlexibleDates: e.target.checked })}
                  className="rounded-xs text-[#6C7357]"
                />
                <span>My dates are flexible (± 3 days)</span>
              </label>
            </div>
          </div>
        )}

        {/* STEP 2: TRAVELLERS */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#A88C5A]">Step 2 of 8</span>
              <h2 className="text-2xl font-serif font-medium text-[#252720]">Who is travelling with you?</h2>
              <p className="text-xs text-[#77756D] font-light">
                Vehicle size and room configurations are tailored to your travel party.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2 p-5 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs">
                <label className="text-xs font-semibold text-[#252720] block">
                  Adults (Ages 12+):
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, adults: Math.max(1, formData.adults - 1) })}
                    className="w-8 h-8 rounded-xs border border-[#DCD4C6] bg-white text-sm font-semibold hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="text-base font-serif font-bold w-8 text-center">{formData.adults}</span>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, adults: formData.adults + 1 })}
                    className="w-8 h-8 rounded-xs border border-[#DCD4C6] bg-white text-sm font-semibold hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-2 p-5 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs">
                <label className="text-xs font-semibold text-[#252720] block">
                  Children (Under 12):
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, children: Math.max(0, formData.children - 1) })}
                    className="w-8 h-8 rounded-xs border border-[#DCD4C6] bg-white text-sm font-semibold hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="text-base font-serif font-bold w-8 text-center">{formData.children}</span>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, children: formData.children + 1 })}
                    className="w-8 h-8 rounded-xs border border-[#DCD4C6] bg-white text-sm font-semibold hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {formData.children > 0 && (
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#252720] block">
                  Ages of children (to assist with family bedding and activity suitability):
                </label>
                <input
                  type="text"
                  placeholder="e.g. 6 and 9 years old"
                  value={formData.childrenAges}
                  onChange={(e) => setFormData({ ...formData, childrenAges: e.target.value })}
                  className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-3 text-xs text-[#252720]"
                />
              </div>
            )}
          </div>
        )}

        {/* STEP 3: INTERESTS */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#A88C5A]">Step 3 of 8</span>
              <h2 className="text-2xl font-serif font-medium text-[#252720]">What cultural elements inspire you?</h2>
              <p className="text-xs text-[#77756D] font-light">
                Select all that apply to guide our choice of excursions, lectures, and masterclasses.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {interestOptions.map((interest) => {
                const isSelected = formData.interests.includes(interest);

                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`p-4 rounded-xs border text-left text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#252720] text-[#F5F1E9] border-[#252720] shadow-sm font-medium'
                        : 'bg-[#F5F1E9] text-[#77756D] border-[#DCD4C6] hover:border-[#252720]'
                    }`}
                  >
                    <span>{interest}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#A88C5A] shrink-0" />}
                  </button>
                );
              })}
            </div>
            {formErrors.interests && (
              <p className="text-[11px] text-red-600 font-light">{formErrors.interests}</p>
            )}
          </div>
        )}

        {/* STEP 4: DESTINATIONS */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#A88C5A]">Step 4 of 8</span>
              <h2 className="text-2xl font-serif font-medium text-[#252720]">Which regions would you like to explore?</h2>
              <p className="text-xs text-[#77756D] font-light">
                Choose specific destinations or select the recommendations option for expert routing.
              </p>
            </div>

            <div className="p-3 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs">
              <label className="flex items-center gap-2 text-xs text-[#252720] cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.wantsRecommendations}
                  onChange={(e) => setFormData({ ...formData, wantsRecommendations: e.target.checked })}
                  className="rounded-xs text-[#6C7357]"
                />
                <span className="font-medium">I would like Heritage Travels to recommend an optimal route based on my travel dates.</span>
              </label>
            </div>

            {!formData.wantsRecommendations && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {HERITAGE_DESTINATIONS.map((d) => {
                  const isSelected = formData.destinations.includes(d.slug);

                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => toggleDestination(d.slug)}
                      className={`p-3.5 rounded-xs border text-left text-xs transition-all flex items-start justify-between ${
                        isSelected
                          ? 'bg-[#252720] text-[#F5F1E9] border-[#252720] shadow-sm font-medium'
                          : 'bg-[#F5F1E9] text-[#77756D] border-[#DCD4C6] hover:border-[#252720]'
                      }`}
                    >
                      <div>
                        <div className="font-serif text-sm">{d.name}</div>
                        <div className="text-[10px] opacity-75">{d.region}</div>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#A88C5A] shrink-0 mt-1" />}
                    </button>
                  );
                })}
              </div>
            )}
            {formErrors.destinations && (
              <p className="text-[11px] text-red-600 font-light">{formErrors.destinations}</p>
            )}
          </div>
        )}

        {/* STEP 5: TRAVEL PREFERENCES */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#A88C5A]">Step 5 of 8</span>
              <h2 className="text-2xl font-serif font-medium text-[#252720]">Travel Style & Accommodation</h2>
              <p className="text-xs text-[#77756D] font-light">
                Tailor the rhythm, vehicle, and boutique lodging standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#252720] block">
                  Travel Pace:
                </label>
                {(['Relaxed', 'Balanced', 'Active'] as const).map((pace) => (
                  <label key={pace} className="flex items-center gap-2 p-3 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="pace"
                      checked={formData.travelPace === pace}
                      onChange={() => setFormData({ ...formData, travelPace: pace })}
                      className="text-[#6C7357]"
                    />
                    <span><strong>{pace}:</strong> {pace === 'Relaxed' ? 'Unhurried mornings, single-night stays avoided' : pace === 'Balanced' ? 'Comfortable discovery with afternoon rest' : 'Early starts, comprehensive monument exploration'}</span>
                  </label>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#252720] block">
                  Accommodation Standard:
                </label>
                {[
                  'Boutique Heritage & Restored Villas',
                  'Colonial Luxury & 5-Star Sanctuaries',
                  'Characterful Eco-Lodges & Nature Pavilions',
                  'Balanced Mix of Verified Properties'
                ].map((style) => (
                  <label key={style} className="flex items-center gap-2 p-3 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="accStyle"
                      checked={formData.accommodationStyle === style}
                      onChange={() => setFormData({ ...formData, accommodationStyle: style })}
                      className="text-[#6C7357]"
                    />
                    <span>{style}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-medium text-[#252720] block">
                Any specific mobility, dietary, or accessibility considerations?
              </label>
              <input
                type="text"
                placeholder="e.g. Vegetarian diet, ground-floor room preference, stair assistance..."
                value={formData.mobilityRequirements}
                onChange={(e) => setFormData({ ...formData, mobilityRequirements: e.target.value })}
                className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-3 text-xs text-[#252720]"
              />
            </div>
          </div>
        )}

        {/* STEP 6: INDICATIVE BUDGET */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#A88C5A]">Step 6 of 8</span>
              <h2 className="text-2xl font-serif font-medium text-[#252720]">Indicative Budget Guidance</h2>
              <p className="text-xs text-[#77756D] font-light">
                Helping us match boutique properties and private transport to your intended range.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#252720] block">
                  Preferred Currency:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['USD', 'EUR', 'GBP', 'AUD'] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setFormData({ ...formData, currency: curr })}
                      className={`p-3 rounded-xs border text-xs text-center font-medium ${
                        formData.currency === curr
                          ? 'bg-[#252720] text-white border-[#252720]'
                          : 'bg-[#F5F1E9] text-[#77756D] border-[#DCD4C6]'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#252720] block">
                  Indicative Total Trip Range ({formData.currency}):
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-3 text-xs text-[#252720]"
                >
                  <option value="Essential ($1,500 – $2,500 total)">Essential Private Touring (approx. $1,500 – $2,500 total)</option>
                  <option value="Moderate ($2,500 – $4,000 total)">Moderate Heritage Boutique (approx. $2,500 – $4,000 total)</option>
                  <option value="Luxury ($4,000 – $7,000+ total)">Luxury Colonial & Specialist (approx. $4,000 – $7,000+ total)</option>
                  <option value="Guidance Needed">Please provide options across tiers</option>
                </select>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-[#EBE5DA] border-l-2 border-[#A88C5A] text-xs text-[#77756D] font-light space-y-1">
              <span className="font-medium text-[#252720] block">Indicative Estimates Notice:</span>
              <p>
                All budget selections are indicative. Your formal itinerary proposal will feature exact, transparent pricing confirmed by our Colombo team without hidden charges.
              </p>
            </div>
          </div>
        )}

        {/* STEP 7: CONTACT DETAILS */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#A88C5A]">Step 7 of 8</span>
              <h2 className="text-2xl font-serif font-medium text-[#252720]">Where should we send your proposal?</h2>
              <p className="text-xs text-[#77756D] font-light">
                We will email your bespoke itinerary and connect by WhatsApp if you prefer direct messaging.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#252720]">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                />
                {formErrors.fullName && <p className="text-[11px] text-red-600">{formErrors.fullName}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-[#252720]">Email Address *</label>
                <input
                  type="email"
                  placeholder="e.g. eleanor@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                />
                {formErrors.email && <p className="text-[11px] text-red-600">{formErrors.email}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-[#252720]">Phone / WhatsApp (Optional)</label>
                <input
                  type="text"
                  placeholder="+44 7700 900077"
                  value={formData.phoneWhatsApp}
                  onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                  className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-[#252720]">Country of Residence *</label>
                <input
                  type="text"
                  placeholder="e.g. United Kingdom, Australia, United States..."
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
                />
                {formErrors.country && <p className="text-[11px] text-red-600">{formErrors.country}</p>}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-[#252720]">Special Requests or Specific Visions</label>
              <textarea
                rows={3}
                placeholder="Tell us anything else you have in mind: celebrating an anniversary, interest in Buddhist meditation, specific train journeys..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs p-2.5 text-xs text-[#252720]"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-2 text-xs text-[#77756D] cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="rounded-xs text-[#6C7357] mt-0.5"
                />
                <span>
                  I consent to Heritage Travels processing my travel enquiry in accordance with the{' '}
                  <Link href="/privacy-policy" className="underline hover:text-[#252720]">Privacy Policy</Link>.
                </span>
              </label>
              {formErrors.privacyConsent && <p className="text-[11px] text-red-600">{formErrors.privacyConsent}</p>}
            </div>
          </div>
        )}

        {/* STEP 8: REVIEW & SUBMIT */}
        {currentStep === 8 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#A88C5A]">Step 8 of 8</span>
              <h2 className="text-2xl font-serif font-medium text-[#252720]">Review Your Proposed Journey Selections</h2>
              <p className="text-xs text-[#77756D] font-light">
                Verify your choices below. You can return to any step to make refinements.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              
              {/* Summary Card 1: Timeframe & Party */}
              <div className="p-4 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#252720]">Dates & Party Size</div>
                  <div className="text-xs text-[#77756D] font-light">
                    {formData.arrivalDate} to {formData.departureDate} ({tripDuration.days} Days / {tripDuration.nights} Nights) • {formData.adults} Adults {formData.children > 0 ? `• ${formData.children} Children` : ''}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-xs text-[#6C7357] underline hover:text-[#4D533B]"
                >
                  Edit
                </button>
              </div>

              {/* Summary Card 2: Cultural Interests */}
              <div className="p-4 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#252720]">Selected Interests</div>
                  <div className="text-xs text-[#77756D] font-light">
                    {formData.interests.join(', ')}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="text-xs text-[#6C7357] underline hover:text-[#4D533B]"
                >
                  Edit
                </button>
              </div>

              {/* Summary Card 3: Destinations */}
              <div className="p-4 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#252720]">Destinations</div>
                  <div className="text-xs text-[#77756D] font-light">
                    {formData.wantsRecommendations
                      ? 'Specialist Recommended Itinerary'
                      : formData.destinations.join(', ')}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="text-xs text-[#6C7357] underline hover:text-[#4D533B]"
                >
                  Edit
                </button>
              </div>

              {/* Summary Card 4: Preferences & Budget */}
              <div className="p-4 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#252720]">Travel Style & Indicative Budget</div>
                  <div className="text-xs text-[#77756D] font-light">
                    {formData.travelPace} Pace • {formData.accommodationStyle} • {formData.budgetRange}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(5)}
                  className="text-xs text-[#6C7357] underline hover:text-[#4D533B]"
                >
                  Edit
                </button>
              </div>

              {/* Summary Card 5: Traveller Contact */}
              <div className="p-4 bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#252720]">Lead Traveller Details</div>
                  <div className="text-xs text-[#77756D] font-light">
                    {formData.fullName} ({formData.email}) • {formData.country}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(7)}
                  className="text-xs text-[#6C7357] underline hover:text-[#4D533B]"
                >
                  Edit
                </button>
              </div>

            </div>

            {/* Route preview if destinations selected */}
            <div className="p-5 bg-[#EBE5DA] border border-[#DCD4C6] rounded-xs space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#A88C5A] font-semibold block">
                Suggested Routing Logic
              </span>
              <p className="text-xs text-[#252720]">
                Colombo Arrival → {formData.destinations.map(d => d.toUpperCase()).join(' → ')} → Departure
              </p>
              <p className="text-[11px] text-[#77756D] font-light">
                Our specialists will configure private vehicle legs with comfortable driving intervals and en-route scenic heritage pauses.
              </p>
            </div>

          </div>
        )}

        {/* STEP BUTTON CONTROLS */}
        <div className="pt-8 border-t border-[#DCD4C6] flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#77756D] hover:text-[#252720] transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Step</span>
            </button>
          ) : (
            <Link
              href="/"
              className="text-xs uppercase tracking-wider text-[#77756D] hover:underline"
            >
              Cancel
            </Link>
          )}

          {currentStep < 8 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-[#252720] text-[#F5F1E9] hover:bg-[#34372C] text-xs uppercase tracking-[0.18em] font-medium px-6 py-3 rounded-xs transition shadow-sm"
            >
              <span>Continue to Step {currentStep + 1}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-[#6C7357] text-white hover:bg-[#555B44] text-xs uppercase tracking-[0.18em] font-medium px-8 py-3.5 rounded-xs transition shadow-md disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Generating Proposal...</span>
              ) : (
                <>
                  <span>Submit Custom Itinerary Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
