import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Truck, ShieldCheck } from 'lucide-react';

export const FooterAndFloatingCTA: React.FC = () => {
  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-[#17324d] text-white text-center relative overflow-hidden">
        {/* Decorative background radial pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0,_transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-xs sm:text-sm font-extrabold text-orange-300 uppercase tracking-widest mb-3 font-heading">
            Get In Touch 24x7
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Ready to Move? Let&apos;s Discuss Your Move
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Call or message our dispatch desk for instant vehicle availability, packing advice, and guaranteed quotes.
          </p>

          {/* Big Phone Number */}
          <div className="my-8">
            <a
              href="tel:+919652030215"
              className="text-4xl sm:text-6xl font-black text-white hover:text-orange-400 transition-colors tracking-tight font-heading block"
            >
              +91 96520 30215
            </a>
            <div className="text-xs sm:text-sm text-emerald-400 font-bold uppercase tracking-wider mt-2 flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available Right Now • Day &amp; Night 24x7</span>
            </div>
          </div>

          {/* Address Details */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 max-w-xl mx-auto space-y-2 text-sm text-slate-200">
            <div className="flex items-center justify-center gap-2 font-bold text-white">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Near Nampally Railway Station, Nampally, Hyderabad, Telangana 500001</span>
            </div>
            <div className="text-xs text-slate-300">
              Serving All Hyderabad Localities, Cyberabad &amp; Surrounding Districts
            </div>
            <div className="pt-2">
              <a
                href="mailto:generalpackersandmovers@gmail.com"
                className="text-white hover:text-orange-300 font-medium text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>generalpackersandmovers@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919652030215"
              className="min-h-[50px] px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-base shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>📞 Call for a Free Quote</span>
            </a>

            <a
              href="https://wa.me/919652030215?text=Hi%20General%20Packers%20%26%20Movers%2C%20I%20would%20like%20a%20moving%20quote%20for%20Hyderabad."
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[50px] px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#10263b] text-slate-400 text-xs py-10 pb-28 sm:pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-white font-black text-lg font-heading">
            <Truck className="w-5 h-5 text-orange-500" />
            <span>GENERAL PACKERS &amp; MOVERS HYDERABAD</span>
          </div>

          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            © 2026 General Packers &amp; Movers • Near Nampally Railway Station, Hyderabad • 25+ Years of Home &amp; Office Shifting Excellence. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 text-[11px] pt-2">
            <a href="#services" className="hover:text-white">Services</a>
            <span>•</span>
            <a href="#fleet" className="hover:text-white">Our Fleet (Tata Ace, Eicher, Ashok Leyland)</a>
            <span>•</span>
            <a href="#quote" className="hover:text-white">Get a Quote</a>
            <span>•</span>
            <a href="#areas" className="hover:text-white">Hyderabad Areas</a>
            <span>•</span>
            <a href="mailto:generalpackersandmovers@gmail.com" className="hover:text-white">generalpackersandmovers@gmail.com</a>
          </div>
        </div>
      </footer>

      {/* FLOATING QUICK ACTIONS BAR (MOBILE & DESKTOP STICKY) */}
      <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 flex items-center gap-3">
        {/* Floating Call Button */}
        <a
          href="tel:+919652030215"
          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-black text-sm rounded-2xl shadow-2xl transition hover:scale-105 border-2 border-white/20"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call 96520 30215</span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919652030215?text=Hi%2C%20I%20would%20like%20a%20moving%20quote%20for%20Hyderabad."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-2xl shadow-2xl transition hover:scale-105 border-2 border-white/20"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp ↗</span>
        </a>
      </div>
    </>
  );
};
