import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/movingData';
import { Star, ChevronDown, MessageSquareQuote, HelpCircle, CheckCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'How is the moving price calculated?',
    a: 'The quote depends on the item volume, distance between pickup and drop in Hyderabad, packing requirements (e.g. bubble wrap for TV/glass), crew size, floor numbers, lift access, and vehicle choice (Tata Ace vs Eicher). Share these details with us so we can provide an accurate, transparent quote.'
  },
  {
    q: 'What should I confirm in my quotation?',
    a: 'Always confirm packing materials used (100 GSM bubble film, cardboard rolls), loading and unloading labour, dedicated vehicle transport, dismantling/assembly of beds and air conditioners, and any parking/toll fees. We provide a full itemized breakdown before booking.'
  },
  {
    q: 'Can I send photos or videos of my items for a fast quote?',
    a: 'Yes, absolutely! You can click our WhatsApp button (+91 9652030215) and send photos or short video walkthroughs of your rooms and heavy appliances. Our team will review them within minutes and send an accurate quote.'
  },
  {
    q: 'Do you handle moves outside Hyderabad?',
    a: 'We serve all areas of Hyderabad, Secunderabad, Cyberabad, and surrounding districts of Telangana and Andhra Pradesh (Warangal, Nizamabad, Vijayawada, etc.). Share your destination and desired date so we can schedule the appropriate closed container vehicle.'
  },
  {
    q: 'Which vehicles do you use for shifting?',
    a: 'We provide all vehicles based on customer requirements, including Tata Ace ("Chota Hathi"), Ashok Leyland Dost, and Eicher 14ft / 17ft closed containers & open trucks chosen to match your exact load.'
  },
  {
    q: 'Are commercial and industrial moves available?',
    a: 'Yes! We arrange commercial moves, shop shifting, and industrial equipment relocations with heavy-duty vehicles, custom crating, and proper loading equipment.'
  },
  {
    q: 'What about damage cover and safety guarantee?',
    a: 'We prioritize safety through 5-layer premium packing, tiedown straps, and experienced in-house loaders. In the rare event of transit damage, we have transparent claim assistance and transit insurance consultation available upon request.'
  }
];

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* CUSTOMER TESTIMONIALS */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs sm:text-sm font-extrabold text-orange-600 uppercase tracking-widest mb-2 font-heading">
              Customer Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#17324d] tracking-tight font-heading">
              Trusted by Families Across Hyderabad
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              Real experiences from recent home and office moves in Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {t.verified}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-black text-slate-900 text-sm font-heading">
                    {t.name}
                  </div>
                  <div className="text-xs text-orange-600 font-semibold mt-0.5">
                    {t.loc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div id="faq" className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs sm:text-sm font-extrabold text-orange-600 uppercase tracking-widest mb-2 font-heading">
              Before You Book
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#17324d] tracking-tight font-heading">
              Moving Questions, Answered
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              Clear answers to help you plan an easy and transparent moving day in Hyderabad.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 font-bold text-sm sm:text-base text-[#17324d] flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
