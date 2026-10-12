'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const destinationsDropdown = [
    { label: 'Cultural Triangle & Sigiriya', href: '/destinations/sigiriya', desc: 'Ancient citadels & royal water gardens' },
    { label: 'Kandy & Hill Country', href: '/destinations/kandy', desc: 'Sacred Tooth temple & royal mountain court' },
    { label: 'Southern Heritage & Galle Fort', href: '/destinations/galle-fort', desc: '17th-century ramparts & maritime history' },
    { label: 'Northern Heritage & Jaffna', href: '/destinations/jaffna', desc: 'Tamil kingdom, Dravidian kovils & forts' },
    { label: 'Anuradhapura & Sacred Stupas', href: '/destinations/anuradhapura', desc: 'First imperial kingdom of Sri Lanka' },
    { label: 'Discover All Destinations →', href: '/destinations', desc: 'Explore all 11+ heritage locations' },
  ];

  const experiencesDropdown = [
    { label: 'Ancient Kingdoms and Lost Cities', href: '/experiences/ancient-kingdoms', desc: 'Archaeology & royal fortress ruins' },
    { label: 'Sacred Architecture & Temples', href: '/experiences/sacred-architecture', desc: 'Living sanctuaries of faith & devotion' },
    { label: 'Architecture Through the Ages', href: '/experiences/historic-architecture', desc: 'Colonial bastions & timber temples' },
    { label: 'Traditional Crafts & Living Culture', href: '/experiences/living-traditions', desc: 'Artisanal guilds & intangible heritage' },
    { label: 'Sri Lankan Culinary Traditions', href: '/experiences/culinary-heritage', desc: 'Clay pots, spices & regional recipes' },
    { label: 'Village Life & Cultural Landscapes', href: '/experiences/village-cultural-landscapes', desc: 'Ancient wewas & cascade tank ecology' },
  ];

  const toursDropdown = [
    { label: 'The Cultural Triangle Journey (5 Days)', href: '/tours/cultural-triangle-journey', desc: 'Sigiriya, Polonnaruwa, Dambulla' },
    { label: 'Ancient Kingdoms & Sacred Cities (8 Days)', href: '/tours/ancient-kingdoms-sacred-cities', desc: 'The definitive classical deep-dive' },
    { label: 'Galle Fort & Southern Heritage (4 Days)', href: '/tours/southern-heritage-escape', desc: 'Maritime ramparts & cinnamon estates' },
    { label: 'Kandy & Hill Country Trail (6 Days)', href: '/tours/kandy-hill-country-trail', desc: 'Sacred relics & colonial tea country' },
    { label: 'Sri Lanka Grand Heritage Journey (14 Days)', href: '/tours/grand-heritage-journey', desc: 'The comprehensive island odyssey' },
    { label: 'Custom Tour Planner →', href: '/plan-your-journey', desc: 'Design your personal bespoke itinerary' },
  ];

  const isNavLight = isHome && !isScrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavLight 
          ? 'bg-transparent text-white border-b border-white/10' 
          : 'bg-[#F5F1E9]/95 text-[#252720] backdrop-blur-md border-b border-[#DCD4C6] shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Brand Wordmark & Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-emblem.png"
              alt="Heritage Travels Logo"
              className="w-10 h-10 rounded-sm object-cover border border-[#D7C4A6]/40 shadow-xs group-hover:scale-105 group-hover:border-[#C9A24D] transition-all duration-200 shrink-0"
            />
            <div>
              <span className={`block font-serif text-lg sm:text-xl font-medium tracking-[0.2em] uppercase transition-colors ${
                isNavLight ? 'text-white' : 'text-[#252720]'
              }`}>
                Heritage Travels
              </span>
              <span className={`block text-[10px] uppercase tracking-[0.25em] font-sans font-medium transition-colors ${
                isNavLight ? 'text-white/70' : 'text-[#77756D]'
              }`}>
                Sri Lanka • Est. Ceylon
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Destinations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('destinations')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                  isNavLight 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-[#252720]/80 hover:text-[#252720]'
                }`}
              >
                <span>Destinations</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'destinations' && (
                <div className="absolute top-full left-0 w-80 bg-[#F5F1E9] border border-[#DCD4C6] shadow-xl rounded-sm p-3 space-y-1 animate-fadeIn text-[#252720]">
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#77756D] font-semibold border-b border-[#DCD4C6]/60">
                    Sacred Regions & Ancient Capitals
                  </div>
                  {destinationsDropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-3 py-2 rounded-xs hover:bg-[#EBE5DA] transition group"
                    >
                      <div className="text-xs font-serif font-semibold text-[#252720] group-hover:text-[#6C7357]">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-[#77756D] font-sans font-light">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Experiences Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('experiences')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                  isNavLight 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-[#252720]/80 hover:text-[#252720]'
                }`}
              >
                <span>Experiences</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'experiences' && (
                <div className="absolute top-full left-0 w-84 bg-[#F5F1E9] border border-[#DCD4C6] shadow-xl rounded-sm p-3 space-y-1 animate-fadeIn text-[#252720]">
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#77756D] font-semibold border-b border-[#DCD4C6]/60">
                    Cultural Traditions & Heritage Pillars
                  </div>
                  {experiencesDropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-3 py-2 rounded-xs hover:bg-[#EBE5DA] transition group"
                    >
                      <div className="text-xs font-serif font-semibold text-[#252720] group-hover:text-[#6C7357]">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-[#77756D] font-sans font-light">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tours Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('tours')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                  isNavLight 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-[#252720]/80 hover:text-[#252720]'
                }`}
              >
                <span>Curated Tours</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'tours' && (
                <div className="absolute top-full left-0 w-88 bg-[#F5F1E9] border border-[#DCD4C6] shadow-xl rounded-sm p-3 space-y-1 animate-fadeIn text-[#252720]">
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#77756D] font-semibold border-b border-[#DCD4C6]/60">
                    Private Heritage Itineraries
                  </div>
                  {toursDropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-3 py-2 rounded-xs hover:bg-[#EBE5DA] transition group"
                    >
                      <div className="text-xs font-serif font-semibold text-[#252720] group-hover:text-[#6C7357]">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-[#77756D] font-sans font-light">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Static Editorial Links */}
            <Link
              href="/about"
              className={`px-3.5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                isNavLight 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-[#252720]/80 hover:text-[#252720]'
              }`}
            >
              Our Story
            </Link>

            <Link
              href="/journal"
              className={`px-3.5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                isNavLight 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-[#252720]/80 hover:text-[#252720]'
              }`}
            >
              Travel Journal
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                isNavLight 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-[#252720]/80 hover:text-[#252720]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Primary Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/plan-your-journey"
              className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium px-5 py-2.5 rounded-xs transition-all duration-200 ${
                isNavLight
                  ? 'bg-white text-[#252720] hover:bg-stone-100 shadow-md'
                  : 'bg-[#252720] text-[#F5F1E9] hover:bg-[#34372C] shadow-sm'
              }`}
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/plan-your-journey"
              className={`text-[11px] uppercase tracking-wider font-medium px-3 py-1.5 rounded-xs transition ${
                isNavLight
                  ? 'bg-white text-[#252720]'
                  : 'bg-[#252720] text-[#F5F1E9]'
              }`}
            >
              Plan Trip
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`p-2 rounded-sm transition focus:outline-none ${
                isNavLight 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-[#252720] hover:bg-[#EBE5DA]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#F5F1E9] text-[#252720] border-b border-[#DCD4C6] px-5 py-6 space-y-4 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          
          <div className="space-y-1 border-b border-[#DCD4C6] pb-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#77756D] font-semibold">
              Destinations
            </div>
            <div className="grid grid-cols-1 gap-1.5 pt-1.5 pl-2">
              <Link href="/destinations" className="text-sm font-serif font-medium text-[#252720] hover:text-[#6C7357]">
                All Destinations Overview
              </Link>
              <Link href="/destinations/sigiriya" className="text-xs text-[#77756D] hover:text-[#252720]">
                Sigiriya & Cultural Triangle
              </Link>
              <Link href="/destinations/anuradhapura" className="text-xs text-[#77756D] hover:text-[#252720]">
                Anuradhapura Sacred Stupas
              </Link>
              <Link href="/destinations/kandy" className="text-xs text-[#77756D] hover:text-[#252720]">
                Kandy & Temple of the Tooth
              </Link>
              <Link href="/destinations/galle-fort" className="text-xs text-[#77756D] hover:text-[#252720]">
                Galle Fort & Maritime Ramparts
              </Link>
              <Link href="/destinations/jaffna" className="text-xs text-[#77756D] hover:text-[#252720]">
                Jaffna Northern Kingdom
              </Link>
            </div>
          </div>

          <div className="space-y-1 border-b border-[#DCD4C6] pb-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#77756D] font-semibold">
              Experiences & Tours
            </div>
            <div className="grid grid-cols-1 gap-1.5 pt-1.5 pl-2">
              <Link href="/experiences" className="text-sm font-serif font-medium text-[#252720] hover:text-[#6C7357]">
                Heritage Experiences
              </Link>
              <Link href="/tours" className="text-sm font-serif font-medium text-[#252720] hover:text-[#6C7357]">
                Curated Tours Catalogue
              </Link>
              <Link href="/journal" className="text-sm font-serif font-medium text-[#252720] hover:text-[#6C7357]">
                Heritage Travel Journal
              </Link>
            </div>
          </div>

          <div className="space-y-2 border-b border-[#DCD4C6] pb-4 pl-2">
            <Link href="/about" className="block text-sm font-serif font-medium text-[#252720]">
              Our Story & Philosophy
            </Link>
            <Link href="/faqs" className="block text-sm font-serif font-medium text-[#252720]">
              Frequently Asked Questions
            </Link>
            <Link href="/contact" className="block text-sm font-serif font-medium text-[#252720]">
              Contact Concierge
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/plan-your-journey"
              className="w-full flex items-center justify-center gap-2 bg-[#252720] text-[#F5F1E9] py-3 rounded-xs text-xs uppercase tracking-[0.18em] font-medium shadow"
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}
