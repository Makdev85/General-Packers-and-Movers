import React, { useState } from 'react';
import { HYDERABAD_AREAS } from '../data/movingData';
import { MapPin, Search, Phone, Truck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const HyderabadCoverage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('All');

  const zones = ['All', 'Central', 'West / IT Corridor', 'North', 'South / Old City', 'East'];

  const filteredAreas = HYDERABAD_AREAS.filter((area) => {
    const matchesSearch = area.name.toLowerCase().includes(search.toLowerCase()) ||
                          area.popularFor.toLowerCase().includes(search.toLowerCase());
    const matchesZone = selectedZone === 'All' || area.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  return (
    <section id="areas" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-extrabold text-orange-600 uppercase tracking-widest mb-2 font-heading">
            Hyderabad Localities Covered
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#17324d] tracking-tight font-heading">
            Every Corner of Twin Cities Served
          </h2>
          <p className="mt-2 text-slate-600 text-base sm:text-lg">
            We provide prompt home shifting and office relocation services across all localities in Hyderabad, Secunderabad, and Cyberabad. With Tata Ace, Eicher, and Ashok Leyland vehicles available, we arrange the right truck to match your requirements.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search area (e.g. Gachibowli, Banjara Hills)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Zone Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedZone === zone
                    ? 'bg-[#17324d] text-white shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-orange-400 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#17324d] group-hover:text-orange-600 transition-colors">
                    <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                    <span className="line-clamp-1">{area.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                    {area.zone.split('/')[0]}
                  </span>
                </div>

                <div className="text-xs text-slate-500 line-clamp-1 mb-3">
                  {area.popularFor}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Full Shifting</span>
                </span>

                <a
                  href={`https://wa.me/919652030215?text=${encodeURIComponent(
                    `Hi General Packers & Movers, I want shifting services in ${area.name}. Please confirm vehicle options.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 font-bold hover:underline flex items-center gap-0.5"
                >
                  <span>Book Vehicle</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* If no area found */}
        {filteredAreas.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-600 font-bold text-base">
              No matching area found in quick filter.
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Don&apos;t worry — we serve all of Hyderabad and surrounding Telangana districts!
            </p>
            <a
              href="tel:+919652030215"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white font-bold rounded-xl text-sm"
            >
              📞 Call +91 96520 30215 for your location
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
