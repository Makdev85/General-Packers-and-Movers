import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight, Truck, Award, Star } from 'lucide-react';
import { heroMovingTruckImg } from '../data/movingData';

export const Hero: React.FC = () => {
  const [quickPickup, setQuickPickup] = useState('');
  const [quickDrop, setQuickDrop] = useState('');
  const [quickSize, setQuickSize] = useState('1 BHK');

  const handleQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi General Packers & Movers, I need a quick shifting quote in Hyderabad!\nPickup: ${quickPickup || 'To be discussed'}\nDestination: ${quickDrop || 'To be discussed'}\nMove Size: ${quickSize}\nPlease share charges and vehicle availability.`;
    window.open(`https://wa.me/919652030215?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="relative bg-gradient-to-b from-[#eef4f8] via-[#f3f7fa] to-white border-b border-slate-200 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Decorative Hyderabad road grid patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#17324d_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Trust Badges & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/90 border border-orange-300 text-orange-800 text-xs sm:text-sm font-extrabold shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-pulse" />
              <span>Packing &amp; Moving • Hyderabad • 25+ Years Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17324d] tracking-tight leading-[1.12] font-heading">
              General Packers <br />
              <span className="text-orange-600">&amp; Movers Hyderabad</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl font-semibold text-slate-700">
              Your next move starts here — Reliable Home &amp; Office Shifting.
            </p>

            {/* Tagline - EXACT USER REQUESTED TEXT */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Professional packing and moving services in and around Hyderabad with speed, care, and reliability. Open 24x7.
            </p>

            {/* Quick Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs sm:text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tata Ace &ldquo;Chota Hathi&rdquo;</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Eicher Trucks </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ashok Leyland as Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Professional Workforce</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Open 24x7 Every Day</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All Hyderabad Covered</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 min-h-[50px] px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-base shadow-xl shadow-orange-600/25 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get a Quote on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+919652030215"
                className="inline-flex items-center justify-center gap-2 min-h-[50px] px-6 py-3.5 rounded-xl bg-white border-2 border-[#17324d] text-[#17324d] hover:bg-slate-50 font-black text-base shadow-sm transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-orange-600" />
                <span>📞 Call +91 96520 30215</span>
              </a>

              <a
                href="#fleet"
                className="inline-flex items-center justify-center gap-1.5 min-h-[50px] px-5 py-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 font-bold text-sm transition"
              >
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>View All Vehicles</span>
              </a>
            </div>

            {/* Mini Quick-Enquiry Box */}
            <form onSubmit={handleQuickWhatsApp} className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-md space-y-3">
              <div className="text-xs font-black uppercase tracking-wider text-[#17324d] flex items-center justify-between">
                <span>⚡ Instant WhatsApp Quote Estimate</span>
                <span className="text-orange-600 font-bold">Responds in &lt; 5 mins</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <input
                  type="text"
                  placeholder="Pickup Area (e.g. Nampally)"
                  value={quickPickup}
                  onChange={(e) => setQuickPickup(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Drop Area (e.g. Gachibowli)"
                  value={quickDrop}
                  onChange={(e) => setQuickDrop(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <select
                  value={quickSize}
                  onChange={(e) => setQuickSize(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="1 RK / Single Room">1 RK / Single Room</option>
                  <option value="1 BHK Flat">1 BHK Flat</option>
                  <option value="2 BHK Flat">2 BHK Flat</option>
                  <option value="3 BHK / Villa">3 BHK / Villa</option>
                  <option value="Office Relocation">Office Relocation</option>
                  <option value="Tata Ace Transport Only">Tata Ace Transport Only</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl transition flex items-center justify-center gap-2"
              >
                <span>Check Moving Rates on WhatsApp</span>
                <span>&rarr;</span>
              </button>
            </form>
          </div>

          {/* Right Column: Hero Visual Card with High-Res Moving Truck & Graphics */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative bg-slate-900 group">
                <img
                  src={heroMovingTruckImg}
                  alt="Tata Ace moving truck with professional packers and movers in Hyderabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 aspect-[4/3]"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10263b]/90 via-transparent to-black/20 pointer-events-none" />

                {/* Overlay Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-full bg-emerald-600/90 text-white text-xs font-black backdrop-blur-md shadow-md flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-white" />
                    <span>ALL VEHICLES ON DEMAND</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-black/60 text-white text-xs font-bold backdrop-blur-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>4.9 / 5</span>
                  </div>
                </div>

                {/* Overlay Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-orange-400 font-bold text-xs uppercase tracking-wider">
                    Tata Ace, Eicher &amp; Ashok Leyland
                  </div>
                  <h3 className="text-xl font-black text-white font-heading">
                    All Vehicles Available as Required
                  </h3>
                  <p className="text-slate-200 text-xs mt-1">
                    Tell us your requirement — we provide the right vehicle to suit your load.
                  </p>
                </div>
              </div>

              {/* Floating Trust Card 1 (Experience) */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-[220px]">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-xl font-black text-[#17324d] font-heading">25+ Years</div>
                  <div className="text-xs text-slate-600 font-semibold leading-tight">Serving Hyderabad Homes &amp; Offices</div>
                </div>
              </div>

              {/* Floating Trust Card 2 (24x7 Available) */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <Truck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17324d]">Open 24x7</div>
                  <div className="text-[11px] text-slate-500">Call / WhatsApp Any Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          <div className="pt-2 lg:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#17324d] font-heading">25+ Years</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Decades of Moving Experience</div>
          </div>
          <div className="pt-2 lg:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-orange-600 font-heading">24x7</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Call or WhatsApp Any Time</div>
          </div>
          <div className="pt-4 lg:pt-0">
            <div className="text-2xl sm:text-3xl font-black text-[#17324d] font-heading">Tata Ace &amp; Eicher</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Right Vehicle to Suit Your Load</div>
          </div>
          <div className="pt-4 lg:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-emerald-700 font-heading">Hyderabad</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Twin Cities &amp; Surrounding Areas</div>
          </div>
        </div>
      </div>
    </div>
  );
};
