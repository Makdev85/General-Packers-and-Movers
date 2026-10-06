import React, { useState } from 'react';
import { Phone, MessageCircle, Truck, Menu, X, Clock, MapPin, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#10263b] text-slate-200 text-xs py-2 px-4 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Clock className="w-3.5 h-3.5" /> Open 24x7 • Immediate Shifting Available
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400" /> Serving All Hyderabad &amp; Surrounding Areas
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> 25+ Years Trusted Movers
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href="tel:+919652030215"
              className="text-white hover:text-orange-400 font-bold flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-orange-400" /> +91 96520 30215
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://wa.me/919652030215?text=Hi%20General%20Packers%20%26%20Movers%2C%20I%20need%20a%20moving%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-[#17324d] flex items-center justify-center text-white shadow-md group-hover:bg-orange-600 transition-colors">
                <Truck className="w-7 h-7 text-orange-400 group-hover:text-white transition-colors" />
              </div>
              <div className="leading-tight">
                <div className="text-xl sm:text-2xl font-black text-[#17324d] tracking-tight font-heading">
                  GENERAL <span className="text-orange-600">P&amp;M</span>
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <span>Packers &amp; Movers</span>
                  <span className="w-1 h-1 rounded-full bg-orange-500" />
                  <span className="text-orange-600 font-semibold">Hyderabad</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              <a href="#services" className="text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors">
                Services
              </a>
              <a href="#fleet" className="text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-orange-600" />
                Vehicles (Tata Ace, Eicher, Ashok Leyland)
              </a>
              <a href="#quote" className="text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors">
                Get a Quote
              </a>
              <a href="#why" className="text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors">
                Why Us
              </a>
              <a href="#areas" className="text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors">
                Hyderabad Areas
              </a>
              <a href="#contact" className="text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors">
                Contact
              </a>
            </div>

            {/* Call / WhatsApp CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+919652030215"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-[#17324d] text-[#17324d] font-bold text-sm hover:bg-[#17324d] hover:text-white transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>Call Now</span>
              </a>

              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm transition-all shadow-md shadow-orange-600/25 hover:shadow-lg"
              >
                <span>Get a Quote</span>
                <span className="text-orange-200">&rarr;</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="tel:+919652030215"
                className="p-2.5 rounded-lg bg-orange-600 text-white sm:hidden"
                aria-label="Call phone number"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-700 hover:text-orange-600"
            >
              Services
            </a>
            <a
              href="#fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-orange-600 flex items-center gap-2"
            >
              <Truck className="w-4 h-4" /> Vehicles (Tata Ace, Eicher, Ashok Leyland)
            </a>
            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-700 hover:text-orange-600"
            >
              Instant Cost Estimator
            </a>
            <a
              href="#why"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-700 hover:text-orange-600"
            >
              Why Us (25+ Years Experience)
            </a>
            <a
              href="#areas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-700 hover:text-orange-600"
            >
              Areas Served in Hyderabad
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-700 hover:text-orange-600"
            >
              Contact &amp; Address
            </a>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href="tel:+919652030215"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#17324d] text-white font-bold rounded-xl text-center"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                Call +91 96520 30215
              </a>
              <a
                href="https://wa.me/919652030215?text=Hi%20General%20Packers%20%26%20Movers%2C%20I%20want%20a%20quote%20for%20Hyderabad%20shifting."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white font-bold rounded-xl text-center"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
