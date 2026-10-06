import React from 'react';
import { Calendar, FileCheck, CheckCircle2, ShieldCheck, Clock, Truck, Users, Award, DollarSign } from 'lucide-react';

const WHY_POINTS = [
  {
    icon: <Award className="w-5 h-5 text-orange-600" />,
    title: '25+ Years of Experience',
    desc: 'Decades of home, office and industrial moves across Hyderabad with unmatched track record.'
  },
  {
    icon: <Users className="w-5 h-5 text-blue-600" />,
    title: 'Crew Sized to Your Move',
    desc: 'Dedicated packing, loading and moving staff appointed exactly as your inventory requires.'
  },
  {
    icon: <Clock className="w-5 h-5 text-emerald-600" />,
    title: 'Open 24x7 365 Days',
    desc: 'Call or WhatsApp any time, day or night. Emergency early morning or late night shifting welcome.'
  },
  {
    icon: <Truck className="w-5 h-5 text-amber-600" />,
    title: 'Right Vehicle for the Load',
    desc: 'Tata Ace "Chota Hathi", Ashok Leyland, and Eicher closed containers ready for your move.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
    title: 'All Types Covered',
    desc: 'Domestic home shifting, corporate IT office relocations, and industrial equipment handled smoothly.'
  },
  {
    icon: <DollarSign className="w-5 h-5 text-teal-600" />,
    title: 'Affordable Rates & No Hidden Fees',
    desc: 'Confirm the full scope and charges upfront before booking. Transparent itemized breakdown.'
  }
];

export const ProcessAndWhyUs: React.FC = () => {
  return (
    <div id="why" className="py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* WHY CHOOSE US SECTION */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs sm:text-sm font-extrabold text-orange-600 uppercase tracking-widest mb-2 font-heading">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#17324d] tracking-tight font-heading">
              Fast, Safe &amp; Reliable Movers
            </h2>
            <p className="mt-2 text-slate-600 text-base sm:text-lg">
              Over two and a half decades of earning the trust of thousands of families and businesses across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#17324d] mb-1 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS PROCESS SECTION */}
        <div id="process" className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs sm:text-sm font-extrabold text-orange-600 uppercase tracking-widest mb-2 font-heading">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#17324d] tracking-tight font-heading">
              A Clear Plan for Moving Day
            </h2>
            <p className="mt-2 text-slate-600 text-base sm:text-lg">
              Stress-free moving simplified into 3 seamless steps from quote to final doorstep placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md relative overflow-hidden group">
              <span className="text-6xl font-black text-orange-100 absolute -top-2 right-4 font-heading group-hover:text-orange-200 transition-colors">
                01
              </span>
              <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-black text-lg font-heading mb-6 shadow">
                1
              </div>
              <h3 className="text-xl font-black text-[#17324d] mb-2 font-heading">
                Share Your Move
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tell us your pickup and delivery areas in Hyderabad, preferred moving date, inventory list, and building floor access. You can attach room photos directly in WhatsApp for quick assessment.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md relative overflow-hidden group">
              <span className="text-6xl font-black text-orange-100 absolute -top-2 right-4 font-heading group-hover:text-orange-200 transition-colors">
                02
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#17324d] text-white flex items-center justify-center font-black text-lg font-heading mb-6 shadow">
                2
              </div>
              <h3 className="text-xl font-black text-[#17324d] mb-2 font-heading">
                Confirm Your Quote
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Discuss packing materials (bubble wrap, corrugated boxes), handling labour, suitable vehicle (Tata Ace, Ashok Leyland or Eicher), lift access, and dismantling. Get an all-inclusive transparent rate with zero surprises.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md relative overflow-hidden group">
              <span className="text-6xl font-black text-orange-100 absolute -top-2 right-4 font-heading group-hover:text-orange-200 transition-colors">
                03
              </span>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg font-heading mb-6 shadow">
                3
              </div>
              <h3 className="text-xl font-black text-[#17324d] mb-2 font-heading">
                Sit Back &amp; Relax
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our uniformed team arrives on schedule with the clean Tata Ace, Ashok Leyland or Eicher, carefully wraps, carries down, transports, and unloads everything at your new home or office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
