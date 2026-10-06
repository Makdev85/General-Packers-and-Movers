import heroMovingTruckImg from '../assets/images/hero_moving_truck_1791288916992.jpg';
import tataAceFleetImg from '../assets/images/tata_ace_fleet_1791288941955.jpg';
import packingCrewWorkImg from '../assets/images/packing_crew_work_1791288957873.jpg';
import officeRelocationImg from '../assets/images/office_relocation_1791288969196.jpg';
import hyderabadDeliveryImg from '../assets/images/hyderabad_delivery_1791288988508.jpg';

export { heroMovingTruckImg, tataAceFleetImg, packingCrewWorkImg, officeRelocationImg, hyderabadDeliveryImg };

export interface VehicleInfo {
  id: string;
  name: string;
  nickname: string;
  capacity: string;
  dimensions: string;
  bestFor: string;
  image: string;
  features: string[];
  basePriceNotice: string;
}

export const VEHICLE_FLEET: VehicleInfo[] = [
  {
    id: 'tata-ace',
    name: 'Tata Ace Gold',
    nickname: 'Chota Hathi (Customer Favorite)',
    capacity: '750 - 1000 kg',
    dimensions: '7.2 ft x 4.9 ft x 5.5 ft',
    bestFor: '1 RK / 1 BHK Shifting, Single Room, Studio, Bachelor moves, Narrow Hyderabadi bylanes',
    image: heroMovingTruckImg,
    features: [
      'Fits easily into tight residential colonies across Hyderabad',
      'Waterproof heavy-duty protective tarpaulin cover',
      'Accommodates double cot, fridge, washing machine & 10-15 cartons',
      'Smooth transit through city roads and flyovers'
    ],
    basePriceNotice: 'Most budget-friendly choice for local twin-city moves'
  },
  {
    id: 'ashok-leyland',
    name: 'Ashok Leyland Dost / Bada Dost',
    nickname: 'Reliable Mid-Size Transporter',
    capacity: '1,250 - 1,850 kg',
    dimensions: '9.8 ft x 5.9 ft x 6 ft',
    bestFor: '1.5 BHK & 2 BHK household shifting, furniture sets, and small office loads',
    image: hyderabadDeliveryImg,
    features: [
      'Sturdy cargo deck with heavy tie-downs and cushioning',
      'Smooth suspension protecting fragile electronics and glass',
      'Spacious cargo volume suitable for full living room sets',
      'Available as required on demand'
    ],
    basePriceNotice: 'Optimal capacity for 1.5 - 2 BHK family relocations'
  },
  {
    id: 'eicher-truck',
    name: 'Eicher 14ft / 17ft Closed Container',
    nickname: 'The Heavy Lifter & Corporate Carrier',
    capacity: '3,500 - 6,000 kg',
    dimensions: '14 - 19 ft Closed Weatherproof Box',
    bestFor: '3 BHK, Duplex villas, Corporate IT office relocations, Industrial equipment',
    image: tataAceFleetImg,
    features: [
      '100% Weather-sealed closed container protects against rain & dust',
      'Holds complete 3 BHK / 4 BHK villa contents in a single trip',
      'Dedicated transport for fragile IT server racks and corporate setups',
      'Local Hyderabad & inter-district routes covered'
    ],
    basePriceNotice: 'Maximum safety for large homes & office setups'
  }
];

export interface HyderabadArea {
  name: string;
  zone: 'Central' | 'West / IT Corridor' | 'North' | 'South / Old City' | 'East';
  popularFor: string;
  serviceAvailable: string;
}

export const HYDERABAD_AREAS: HyderabadArea[] = [
  { name: 'Nampally', zone: 'Central', popularFor: 'Commercial & Residential Hub', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Abids & Koti', zone: 'Central', popularFor: 'Commercial & Residential', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Banjara Hills', zone: 'Central', popularFor: 'Luxury Flats & Bungalows', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Jubilee Hills', zone: 'Central', popularFor: 'Villas & Executive Homes', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Gachibowli', zone: 'West / IT Corridor', popularFor: 'Gated Communities & Tech Park', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Hitec City / Madhapur', zone: 'West / IT Corridor', popularFor: 'IT Professionals & Apartments', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Kondapur', zone: 'West / IT Corridor', popularFor: 'High-rise Residential', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Financial District / Nanakramguda', zone: 'West / IT Corridor', popularFor: 'Luxury Gated Towers', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Kukatpally (KPHB)', zone: 'West / IT Corridor', popularFor: 'Large Residential Colonies', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Miyapur & Nizampet', zone: 'West / IT Corridor', popularFor: 'Family Apartments', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Secunderabad & Paradise', zone: 'North', popularFor: 'Cantonment & Old Town', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Begumpet & Somajiguda', zone: 'North', popularFor: 'Central Twin Cities', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Bowenpally & Alwal', zone: 'North', popularFor: 'Independent Houses', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Kompally & Medchal', zone: 'North', popularFor: 'Villas & Warehouses', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Charminar & Falaknuma', zone: 'South / Old City', popularFor: 'Heritage & Traditional Homes', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Chandrayangutta & Santoshnagar', zone: 'South / Old City', popularFor: 'Independent Colonies', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Mehdipatnam & Tolichowki', zone: 'Central', popularFor: 'Apartments & Families', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Dilsukhnagar & Malakpet', zone: 'East', popularFor: 'High-density Residential', serviceAvailable: 'Home & Office Shifting' },
  { name: 'LB Nagar & Nagole', zone: 'East', popularFor: 'Suburban Residences', serviceAvailable: 'Home & Office Shifting' },
  { name: 'Uppal & Habsiguda', zone: 'East', popularFor: 'Residential & Institutes', serviceAvailable: 'Home & Office Shifting' }
];

export const TESTIMONIALS = [
  {
    name: 'Syed Rahmathullah',
    loc: 'Nampally to Kondapur (3 BHK)',
    review: 'Extremely polite and hardworking crew! Their truck reached on time. Not even a single scratch on our dining glass table or double door fridge. Handled all 4 floors smoothly.',
    rating: 5,
    date: '2 weeks ago',
    verified: 'Verified Move'
  },
  {
    name: 'Venkata Krishna Rao',
    loc: 'Banjara Hills to Gachibowli (2 BHK)',
    review: 'General Packers & Movers have been our family movers for 15+ years. As always, their packing with bubble wrap and stretch film was top notch. Arranged our vehicle promptly. Highly recommended!',
    rating: 5,
    date: '1 month ago',
    verified: 'Repeat Customer'
  },
  {
    name: 'Ananya Sharma',
    loc: 'Hitec City to Kukatpally (1 BHK)',
    review: 'Was moving alone for my new IT job. They dismantled my bed, packed my monitor and kitchenware safely, and reassembled everything at the new flat. Very reasonable rates and transparent pricing.',
    rating: 5,
    date: '3 weeks ago',
    verified: 'Verified Move'
  }
];
