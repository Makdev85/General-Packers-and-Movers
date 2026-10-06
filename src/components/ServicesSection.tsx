import React from 'react';
import { Home, Building2, Factory, PackageCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { heroMovingTruckImg, officeRelocationImg, packingCrewWorkImg } from '../data/movingData';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  tag: string;
  description: string;
  points: string[];
  image?: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'domestic',
    icon: <Home className="w-6 h-6 text-orange-600" />,
    title: 'Domestic Home Shifting',
    tag: '1 BHK, 2 BHK, 3 BHK & Villas',
    description: 'Relocating your home within Hyderabad or to surrounding areas? We pack, dismantle, load, transport, unload, and reassemble with the utmost care for every household belonging.',
    points: ['Furniture dismantling & reassembly', 'Dedicated Tata Ace, Ashok Leyland or Eicher', 'Fragile glassware special handling'],
    image: heroMovingTruckImg
  },
  {
    id: 'commercial',
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    title: 'Commercial Office Relocation',
    tag: 'Hitec City, Madhapur, Gachibowli',
    description: 'Office relocations planned and executed seamlessly — minimising downtime so your IT infrastructure, workstations, conference suites, and staff resume work without a hitch.',
    points: ['Server racks & desktop IT safety', 'Weekend & overnight moving options', 'Coded boxes for each department'],
    image: officeRelocationImg
  },
  {
    id: 'packing',
    icon: <PackageCheck className="w-6 h-6 text-emerald-600" />,
    title: 'Professional Packing Services',
    tag: 'Bubble Wrap, Foam & Boxes',
    description: 'Professional packing using high-quality materials — air bubble wrap, 5-ply corrugated sheets, corner guards, and stretch film protecting every item.',
    points: ['High-density air bubble wrap', 'Heavy corrugated wardrobe boxes', 'Waterproof rain & dust protection'],
    image: packingCrewWorkImg
  },
  {
    id: 'transport',
    icon: <Truck className="w-6 h-6 text-amber-600" />,
    title: 'Local Transport (Tata Ace, Ashok Leyland & Eicher)',
    tag: 'Point-to-Point Swift Delivery',
    description: 'In and around Hyderabad, we deploy Tata Ace, Ashok Leyland Dost, and Eicher trucks chosen strictly to suit your load, for scheduled deliveries and single item transfers.',
    points: ['Vehicles sized to your requirement', 'No mixed loads / dedicated vehicle', 'Experienced city route drivers']
  },
  {
    id: 'industrial',
    icon: <Factory className="w-6 h-6 text-purple-600" />,
    title: 'Industrial Moving Enquiry',
    tag: 'Machinery & Heavy Equipment',
    description: 'Planning to move machinery, workshop equipment, or industrial units? Share item weights, dimensions, and access requirements so our team can confirm arrangements.',
    points: ['Heavy machinery loading support', 'Custom wooden crating as required', 'Safe tie-downs & heavy duty transport']
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-extrabold text-orange-600 uppercase tracking-widest mb-2 font-heading">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#17324d] tracking-tight font-heading">
            Moving Services for Homes &amp; Businesses in Hyderabad
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Backed by 25+ years of real field experience. Every move is handled by our permanent, trained packing and loading staff.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-orange-50 transition-all">
                    {srv.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                    {srv.tag}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-black text-[#17324d] mb-2.5 font-heading group-hover:text-orange-600 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {srv.description}
                </p>

                {/* Optional Image thumbnail for key services */}
                {srv.image && (
                  <div className="mb-5 rounded-2xl overflow-hidden h-36 border border-slate-200 shadow-inner relative">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Key Checklist */}
                <ul className="space-y-2 mb-6">
                  {srv.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={`https://wa.me/919652030215?text=${encodeURIComponent(
                  `Hi General Packers & Movers, I am looking for ${srv.title} in Hyderabad. Please share pricing and details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-200 text-xs font-extrabold text-[#17324d] group-hover:text-orange-600 transition-colors"
              >
                <span>Book This Service on WhatsApp</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
