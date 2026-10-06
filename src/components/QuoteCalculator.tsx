import React, { useState } from 'react';
import { HYDERABAD_AREAS } from '../data/movingData';
import { Calculator, MessageCircle, Phone, Truck, ShieldCheck, CheckCircle2, Info, ArrowRight } from 'lucide-react';

export const QuoteCalculator: React.FC = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [pickup, setPickup] = useState('Banjara Hills');
  const [destination, setDestination] = useState('Gachibowli');
  const [moveType, setMoveType] = useState('1 BHK home');
  const [access, setAccess] = useState('Pickup: 2nd floor (Lift); Drop: Ground floor');
  const [items, setItems] = useState('1 Queen Bed, Fridge, Washing Machine, 10 Cartons, 3-Seater Sofa');
  const [needDismantling, setNeedDismantling] = useState(true);
  const [needFragilePacking, setNeedFragilePacking] = useState(true);

  // Price estimate algorithm based on Hyderabad distance and move type
  const calculateEstimate = () => {
    let baseMin = 2200;
    let baseMax = 3500;
    let vehicle = 'Tata Ace Gold (Chota Hathi)';
    let crew = '2 Persons Crew';

    switch (moveType) {
      case '1 RK / few items':
        baseMin = 1800;
        baseMax = 2800;
        vehicle = 'Tata Ace (Chota Hathi)';
        crew = '2 Helpers + Driver';
        break;
      case '1 BHK home':
        baseMin = 3200;
        baseMax = 4800;
        vehicle = 'Tata Ace / Ashok Leyland';
        crew = '3 Trained Crew + Driver';
        break;
      case '2 BHK home':
        baseMin = 5500;
        baseMax = 8200;
        vehicle = 'Ashok Leyland Dost / Eicher';
        crew = '4 Trained Crew + Driver';
        break;
      case '3 BHK or larger home':
        baseMin = 8500;
        baseMax = 13500;
        vehicle = 'Eicher 14ft / 17ft Closed Container';
        crew = '5 Trained Crew + Driver';
        break;
      case 'Office relocation':
        baseMin = 7000;
        baseMax = 16000;
        vehicle = 'Eicher Container or Multiple Trucks';
        crew = 'Specialized IT Moving Team';
        break;
      case 'Local transport':
        baseMin = 1500;
        baseMax = 2500;
        vehicle = 'Tata Ace / Ashok Leyland';
        crew = 'Driver + 1 Helper';
        break;
      case 'Packing only':
        baseMin = 2000;
        baseMax = 4500;
        vehicle = 'Materials Van';
        crew = '3 Professional Packers';
        break;
      default:
        baseMin = 3000;
        baseMax = 6000;
        vehicle = 'Tata Ace / Ashok Leyland / Eicher';
        crew = 'Custom Crew';
    }

    if (needDismantling) {
      baseMin += 400;
      baseMax += 800;
    }
    if (needFragilePacking) {
      baseMin += 500;
      baseMax += 1000;
    }

    return { baseMin, baseMax, vehicle, crew };
  };

  const estimate = calculateEstimate();

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      'Hi General Packers & Movers, I would like an official moving quote.',
      '--------------------------------',
      `• Name: ${name.trim() || 'Customer'}`,
      `• Moving Date: ${date}`,
      `• Pickup Area: ${pickup.trim()}`,
      `• Destination Area: ${destination.trim()}`,
      `• Move Type: ${moveType}`,
      `• Floors & Lift Access: ${access.trim()}`,
      `• Items & Requirements: ${items.trim() || 'Standard items'}`,
      `• Bed/Appliance Dismantling: ${needDismantling ? 'Yes' : 'No'}`,
      `• Multi-layer Fragile Packing: ${needFragilePacking ? 'Yes' : 'No'}`,
      `• Recommended Vehicle: ${estimate.vehicle}`,
      '--------------------------------',
      'Please confirm availability for this date and send the final quote.'
    ].join('\n');

    window.open(`https://wa.me/919652030215?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="quote" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-black uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#17324d] tracking-tight font-heading">
            Tell Us Where You’re Moving
          </h2>
          <p className="mt-2 text-slate-600 text-base sm:text-lg">
            Complete the details below to view your estimated rate and generate a ready-to-send WhatsApp enquiry with our dispatch team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Moving Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Moving Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Pickup Area */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Pickup Area in Hyderabad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="E.g. Nampally, Banjara Hills, etc."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-slate-500">
                    <span>Quick picks:</span>
                    {['Banjara Hills', 'Secunderabad', 'Madhapur'].map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setPickup(p)}
                        className="text-orange-600 hover:underline font-semibold"
                      >
                        {p},
                      </button>
                    ))}
                  </div>
                </div>

                {/* Drop Area */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Destination Area / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="E.g. Gachibowli, Kondapur, etc."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-slate-500">
                    <span>Quick picks:</span>
                    {['Gachibowli', 'Hitec City', 'Kukatpally'].map((d) => (
                      <button
                        type="button"
                        key={d}
                        onClick={() => setDestination(d)}
                        className="text-orange-600 hover:underline font-semibold"
                      >
                        {d},
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Move Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Moving Requirement <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={moveType}
                    onChange={(e) => setMoveType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="1 RK / few items">1 RK / few items (Tata Ace)</option>
                    <option value="1 BHK home">1 BHK home (Tata Ace / Ashok Leyland)</option>
                    <option value="2 BHK home">2 BHK home (Ashok Leyland / Eicher)</option>
                    <option value="3 BHK or larger home">3 BHK or larger home (Eicher Container)</option>
                    <option value="Office relocation">Office relocation (Commercial)</option>
                    <option value="Local transport">Tata Ace / Ashok Leyland Local Transport</option>
                    <option value="Packing only">Professional Packing only</option>
                    <option value="Industrial moving enquiry">Industrial moving enquiry</option>
                  </select>
                </div>

                {/* Floor / Lift Access */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Floors &amp; Lift Access <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={access}
                    onChange={(e) => setAccess(e.target.value)}
                    placeholder="E.g. Pickup: 3rd floor (lift); Drop: Ground"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Items List */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Items List &amp; Special Requirements
                </label>
                <textarea
                  rows={3}
                  value={items}
                  onChange={(e) => setItems(e.target.value)}
                  placeholder="E.g. Double bed, refrigerator, TV, dining table, fragile glassware, dismantling needed..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Additional Options Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer text-xs font-bold text-slate-800">
                  <input
                    type="checkbox"
                    checked={needDismantling}
                    onChange={(e) => setNeedDismantling(e.target.checked)}
                    className="w-4 h-4 text-orange-600 rounded"
                  />
                  <span>Bed / AC / TV Dismantling &amp; Fitting</span>
                </label>
                <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer text-xs font-bold text-slate-800">
                  <input
                    type="checkbox"
                    checked={needFragilePacking}
                    onChange={(e) => setNeedFragilePacking(e.target.checked)}
                    className="w-4 h-4 text-orange-600 rounded"
                  />
                  <span>100 GSM Air Bubble Wrap Protection</span>
                </label>
              </div>

              {/* Submit to WhatsApp */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Continue to WhatsApp with Details ↗</span>
              </button>

              <div className="text-center text-xs text-slate-500 space-y-1">
                <p>
                  WhatsApp will open with your pre-filled details. Review and tap Send.
                </p>
                <p>
                  No payment required now. You can attach photos of your rooms directly in WhatsApp!
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Live Estimate Breakdown Box (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#17324d] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="text-orange-400 font-extrabold text-xs uppercase tracking-wider mb-2">
                Estimated Price Range
              </div>

              {/* Price Range */}
              <div className="text-3xl sm:text-4xl font-black font-heading text-white flex items-baseline gap-2">
                <span>₹{estimate.baseMin.toLocaleString('en-IN')}</span>
                <span className="text-slate-400 text-xl font-normal">-</span>
                <span>₹{estimate.baseMax.toLocaleString('en-IN')}</span>
              </div>
              <p className="text-slate-300 text-xs mt-1">
                *Approximate Hyderabad local rate for {moveType}
              </p>

              {/* Vehicle & Staff Breakdown */}
              <div className="mt-6 pt-6 border-t border-slate-700/80 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Allocated Vehicle:</span>
                    <strong className="text-white font-bold">{estimate.vehicle}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Handling Crew:</span>
                    <strong className="text-white font-bold">{estimate.crew}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Inclusions:</span>
                    <strong className="text-white font-bold">
                      Loading, Local Transport, Unloading &amp; Placement
                    </strong>
                  </div>
                </div>
              </div>

              {/* Direct Call Button */}
              <div className="mt-8 pt-6 border-t border-slate-700/80">
                <div className="text-xs text-slate-300 mb-2">Prefer speaking to our owner directly?</div>
                <a
                  href="tel:+919652030215"
                  className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 96520 30215 (24x7)</span>
                </a>
              </div>
            </div>

            {/* Why Book With Us Mini Pill */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 text-xs text-slate-700 space-y-2 shadow-sm">
              <div className="font-extrabold text-[#17324d] uppercase tracking-wider text-[11px]">
                Why Hyderabad Residents Trust General P&amp;M
              </div>
              <p className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero hidden charges on arrival — confirmed upfront.</span>
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All vehicles as required (Tata Ace, Eicher, Ashok Leyland &amp; more).</span>
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>25+ years experienced packing and moving staff.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
