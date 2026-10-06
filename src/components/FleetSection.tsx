import React, { useState } from 'react';
import { VEHICLE_FLEET, VehicleInfo } from '../data/movingData';
import { Truck, CheckCircle2, Shield, ArrowRight, MessageCircle } from 'lucide-react';

export const FleetSection: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleInfo>(VEHICLE_FLEET[0]);

  return (
    <section id="fleet" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-extrabold text-orange-600 uppercase tracking-widest mb-2 font-heading">
            Tata Ace • Ashok Leyland • Eicher 
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#17324d] tracking-tight font-heading">
            All Vehicles Available as Required
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Whether you need a Tata Ace &ldquo;Chota Hathi&rdquo; for compact loads, an Ashok Leyland Dost for 1-2 BHK flats,  Eicher for full houses and commercial moves — we have all vehicles to match your requirements.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VEHICLE_FLEET.map((truck) => {
            const isFeatured = truck.id === 'tata-ace';
            return (
              <div
                key={truck.id}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col ${
                  isFeatured
                    ? 'border-orange-500 shadow-xl ring-2 ring-orange-500/20'
                    : 'border-slate-200 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Truck Image Container with Badge */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900 group">
                  <img
                    src={truck.image}
                    alt={truck.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-black tracking-wide uppercase ${
                        isFeatured
                          ? 'bg-orange-600 text-white shadow-md'
                          : 'bg-slate-900/80 text-white backdrop-blur'
                      }`}
                    >
                      {isFeatured ? '★ MOST POPULAR' : 'HEAVY LOAD'}
                    </span>
                  </div>

                  {/* Bottom Image Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                      {truck.nickname}
                    </div>
                    <div className="text-xl font-black text-white font-heading">
                      {truck.name}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Capacity Specs */}
                    <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs">
                      <div>
                        <span className="text-slate-500 block">Payload:</span>
                        <strong className="text-slate-900 font-bold">{truck.capacity}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Bed Size:</span>
                        <strong className="text-slate-900 font-bold">{truck.dimensions}</strong>
                      </div>
                    </div>

                    {/* Best For Tag */}
                    <div className="text-xs font-bold text-[#17324d] bg-blue-50/70 p-3 rounded-xl border border-blue-100/80">
                      <span className="text-orange-600 block text-[11px] uppercase tracking-wider mb-0.5">
                        Best Suited For:
                      </span>
                      {truck.bestFor}
                    </div>

                    {/* Key Features List */}
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {truck.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/919652030215?text=${encodeURIComponent(
                        `Hi General Packers & Movers, I want to book a ${truck.name} (${truck.nickname}) for shifting in Hyderabad. Please share your rates.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-sm ${
                        isFeatured
                          ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-600/30'
                          : 'bg-[#17324d] hover:bg-[#10263b] text-white'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book {truck.name} on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vehicle Dispatch Guarantee Callout */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-black text-[#17324d] font-heading">
                All Vehicles Fully Inspected &amp; Cleaned Daily
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5 max-w-xl">
                Every Tata Ace, Ashok Leyland, and Eicher vehicle carries clean tarpaulins, ropes, shock-absorbing cushioning, and tiedowns to protect your belongings from rain and dust.
              </p>
            </div>
          </div>

          <a
            href="tel:+919652030215"
            className="shrink-0 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center gap-2 transition"
          >
            <span>Talk to Fleet Manager</span>
            <span className="text-orange-400 font-bold">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
