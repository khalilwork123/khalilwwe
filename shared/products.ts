export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  isHot?: boolean;
  description: string;
  details?: string[];
  soldOut?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  customRequest?: string;
}

export interface CheckoutData {
  name: string;
  email: string;
  paymentMethod: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface Voucher {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
}

export const VOUCHERS: Voucher[] = [
  { code: 'BURN', discount: 10, type: 'percentage' },
  { code: 'WM42', discount: 25, type: 'percentage' },
  { code: 'RKO', discount: 40, type: 'percentage' }
];

const IMG = 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'WWE Championship',
    price: 1400,
    image: IMG,
    images: [IMG, IMG],
    description:
      '24k gold plated plates, real gemstones, and genuine leather strap. HD CNC‑machined 12mm plates for authentic TV feel.',
    details: [
      '12mm plates for authentic TV feel',
      'Includes Limited Edition John Cena side plates',
      'Worldwide shipping within 2 weeks'
    ]
  },
  {
    id: '2',
    name: 'WWE Spinner Championship',
    price: 1300,
    image: IMG,
    images: [IMG, IMG],
    description:
      '24k gold‑plated plates, real gemstones, genuine leather. HD CNC‑machined with iconic spinning centerpiece and custom name plate option.',
    details: [
      '8mm plates for authentic TV feel',
      'Fully functional spinning centerpiece',
      'Includes custom engraved name plate',
      'Worldwide shipping within 2 weeks'
    ]
  },
  {
    id: '3',
    name: 'WWE Winged Eagle Championship',
    price: 1200,
    image: IMG,
    images: [IMG, IMG],
    description:
      '24k gold‑plated plates, real gemstones, genuine leather. Faithful recreation of the legendary Winged Eagle design.',
    details: [
      '8mm plates for TV‑quality feel',
      'Classic Winged Eagle with globe and eagle engravings',
      'Worldwide shipping within 2 weeks'
    ]
  },
  {
    id: '4',
    name: 'WWE World Heavyweight Championship – Big Gold',
    price: 1400,
    image: IMG,
    images: [IMG, IMG],
    description:
      '24k gold‑plated plates, real gemstones, genuine leather. The legendary Big Gold with intricate engravings.',
    details: [
      '6mm plates for classic lightweight feel',
      'Intricate lion and crown engravings',
      'Includes engraved name plates of legendary champions',
      'Worldwide shipping within 2 weeks'
    ]
  },
  {
    id: '5',
    name: 'WWE Undisputed Championship',
    price: 1100,
    image: IMG,
    images: [IMG, IMG],
    description:
      '24k gold‑plated plates, real gemstones, genuine leather. Iconic Undisputed design with optional custom name plate.',
    details: [
      '6mm plates for authentic TV feel',
      'Custom engraved name plate available',
      'Detailed dual‑eagle design with classic WWE logo',
      'Worldwide shipping within 2 weeks'
    ]
  },
  {
    id: '6',
    name: 'WWE World Heavyweight Championship (Modern)',
    price: 1400,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Modern redesign of Big Gold with prominent WWE logo. 24k plates, gemstones, genuine leather.',
    details: [
      '6mm plates for authentic TV feel',
      'Modernized Big Gold with detailed gold etching',
      'Prominent WWE logo centerpiece and side plates',
      'Worldwide shipping within 2 weeks'
    ]
  },
  {
    id: '7',
    name: 'Custom WWE Side Plates (Any Superstar / Custom Design)',
    price: 349,
    image: IMG,
    images: [IMG, IMG],
    description:
      '24k gold‑plated finish with real gemstones. Precision CNC‑machined side plates compatible with removable‑plate titles.',
    details: [
      'Compatible with official and TV‑style belts',
      'Any Superstar logo or fully custom design',
      'Personal logos and brand marks supported'
    ]
  },
  {
    id: '8',
    name: 'WWE NXT Championship (Gold / Grey)',
    price: 999,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Bold “X” centerpiece in gold or grey finish. HD CNC‑machined plates on genuine leather.',
    details: [
      '6mm plates for authentic TV feel',
      'Choice of Gold or Grey finish',
      'Detailed NXT engravings with premium side plates'
    ]
  },
  {
    id: '9',
    name: 'WWF Smoking Skull Championship',
    price: 1200,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Iconic skull‑and‑snake custom belt made for “Stone Cold” Steve Austin. 24k plates, gemstones, genuine leather.',
    details: [
      '8mm plates for TV‑quality feel',
      'Signature skull with red WWF logo',
      'Intricate snakes and flame engravings'
    ]
  },
  {
    id: '10',
    name: 'WWF Heavyweight Championship',
    price: 1400,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Classic eagle and globe centerpiece from the golden era. 24k plates, gemstones, genuine leather.',
    details: [
      '8mm plates for authentic TV feel',
      'Classic WWF logo with eagle and globe',
      'Highly detailed side plates with gold etching'
    ]
  },
  {
    id: '11',
    name: 'WWE John Cena Edition US Spinner Championship',
    price: 1200,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Patriotic red, white and blue design with functional spinning “US” centerpiece.',
    details: [
      '8mm plates for authentic TV feel',
      'Functional spinning centerpiece',
      'American flag side plates and Cena signature elements'
    ]
  },
  {
    id: '12',
    name: 'WWE Intercontinental Championship (White Strap)',
    price: 1400,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Classic white strap IC title with globe centerpiece and black/gold lettering.',
    details: [
      '8mm plates for TV‑quality feel',
      'Iconic globe centerpiece with detailed etching',
      'Classic WWE styling on side plates'
    ]
  },
  {
    id: '13',
    name: 'WWE Hardcore Championship – Travis Scott Edition',
    price: 1600,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Modern twist on the Hardcore Title with custom overlays and graffiti‑style detailing inspired by Travis Scott.',
    details: [
      '12mm plates for authentic TV feel',
      'Custom distressed overlay and graffiti text',
      'Genuine leather with premium hardware'
    ]
  },
  {
    id: '14',
    name: 'WWE Championship ��� 2016 Edition',
    price: 1300,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Bold modern WWE logo centerpiece with crystal detailing and red triangle panels.',
    details: [
      '12mm plates for authentic TV feel',
      'Large WWE logo centerpiece with crystals',
      'Customizable side plates'
    ]
  },
  {
    id: '15',
    name: 'WWE Tribal Chief Championship',
    price: 1249,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Special edition honoring Roman Reigns’ reign with black and red tribal‑inspired detailing.',
    details: [
      '8mm plates for authentic TV feel',
      'Exclusive “Tribal Chief” design elements',
      'Customizable side plates'
    ]
  },
  {
    id: '16',
    name: 'WWE Intercontinental Championship (Modern)',
    price: 1200,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Modern reimagining of the IC Title with globe‑centered plate and laurel accents.',
    details: [
      '8mm plates for TV‑quality feel',
      'Globe centerpiece with laurel wreath detail',
      'Customizable Superstar side plates'
    ]
  },
  {
    id: '17',
    name: 'WWE Universal Championship (Red Edition)',
    price: 1300,
    image: IMG,
    images: [IMG, IMG],
    description:
      'First Universal Title introduced in 2016 with red strap and large WWE logo.',
    details: [
      '12mm plates for authentic TV feel',
      'Red leather strap with gemstone detailing',
      'Customizable side plates'
    ]
  },
  {
    id: '18',
    name: 'TNA World Heavyweight Championship',
    price: 1200,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Historic TNA design with bold logo and globe engravings on genuine leather.',
    details: [
      '8mm plates for authentic TV feel',
      'Classic TNA logo centerpiece',
      'Globe‑etched side plates with gold detailing'
    ]
  },
  {
    id: '19',
    name: 'WWE United States Championship',
    price: 1200,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Modern American‑inspired design with stars, stripes and golden eagle centerpiece.',
    details: [
      '8mm plates for TV‑quality feel',
      'American flag motif with gold eagle',
      'Customizable WWE logo side plates'
    ]
  },
  {
    id: '20',
    name: 'Money in the Bank Briefcase',
    price: 200,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Iconic green briefcase with gold lettering from the legendary ladder match.',
    details: [
      'Full‑size replica with glossy green finish',
      'Functional handle and secure latch',
      'Lightweight yet durable construction'
    ],
    soldOut: true
  },
  {
    id: '21',
    name: 'WWE Championship – 2013 Edition (The Rock)',
    price: 1500,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Large logo title introduced by The Rock with custom Brahma Bull side plates.',
    details: [
      '12mm plates for authentic TV feel',
      'Crystal‑detailed WWE logo centerpiece',
      'Includes Brahma Bull side plates'
    ]
  },
  {
    id: '22',
    name: 'Custom Championship (Design Your Own)',
    price: 1100,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Fully personalized title: plates, logos, text, colors and strap styles made to your spec.',
    details: [
      'Design a brand‑new belt or modify an existing title',
      'Full control over plates, finish, engravings and stones',
      'Genuine leather straps with gold‑plated hardware'
    ]
  },
  {
    id: '23',
    name: 'UFC World Championship',
    price: 1000,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Octagonal UFC design with national flag accents and premium engraving.',
    details: [
      '8mm plates for authentic fight‑night feel',
      'Octagonal gold centerpiece with UFC logo',
      'National flag accents and gemstone inlays'
    ]
  },
  {
    id: '24',
    name: 'WWE Undisputed Championship – Roman Reigns 1316 Tribal Chief Edition',
    price: 1249,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Special edition with WWE logo centerpiece, red gemstone accents and Tribal Chief side plates.',
    details: [
      '12mm plates for authentic TV feel',
      'Roman Reigns “Tribal Chief” side plates',
      'Red and black tribal‑inspired detailing'
    ]
  },
  {
    id: '25',
    name: 'WWE Brahma Bull Championship – The Rock Exclusive Edition',
    price: 1249,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Iconic Brahma Bull centerpiece with red gemstone eyes and custom side plates.',
    details: [
      '8mm HD CNC‑machined plates',
      'Custom Rock side plates with lightning accents',
      'Black leather strap with detailed tooling'
    ]
  },
  {
    id: '26',
    name: "WWE Women's World Championship (White Strap Special Edition)",
    price: 1200,
    image: IMG,
    images: [IMG, IMG],
    description:
      'White strap special with bold WWE logo over globe pattern and crystal‑studded border.',
    details: [
      '8mm HD CNC‑machined plates',
      'Polished logo over globe pattern with floral etching',
      'Crystal‑studded border for TV presence'
    ]
  },
  {
    id: '27',
    name: "WWE Women's Undisputed Championship (White Strap Edition)",
    price: 1200,
    image: IMG,
    images: [IMG, IMG],
    description:
      '24k plates with textured detailing, black and silver logo centerpiece with red gemstones.',
    details: [
      '12mm HD CNC‑machined plates',
      'Interchangeable Superstar side plates',
      'White leather strap with reinforced stitching'
    ]
  },
  {
    id: '28',
    name: 'WWE Intercontinental Championship – Classic Globe Edition',
    price: 1300,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Classic IC with iconic blue globe centerpiece and textured gold etching on black strap.',
    details: [
      '8mm gold‑plated plates',
      'Blue globe centerpiece',
      'Detailed tooling on leather strap'
    ]
  },
  {
    id: '29',
    name: 'TNA World Championship – Golden Legacy Edition',
    price: 1400,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Regal TNA design with ornate scrollwork and red TNA logo over globe centerpiece.',
    details: [
      '8mm CNC‑machined plates with ornate etching',
      'Red TNA logo across globe centerpiece',
      'Matching side plates with TNA insignia'
    ]
  },
  {
    id: '30',
    name: 'WWE Classic United States Championship',
    price: 1300,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Bold American flag backdrop with gold accents and WWE logo centerpiece on black strap.',
    details: [
      'Gold‑plated plates with red/white/blue enamel',
      'United States Champion banner',
      'Interchangeable WWE side plates'
    ]
  },
  {
    id: '31',
    name: 'WWE Unified Tag Team Championship – Dual Belt Edition',
    price: 1559,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Dual Raw/World Tag and SmackDown Tag titles representing unified supremacy.',
    details: [
      'World Tag: red globe centerpiece and wrestling imagery',
      'WWE Tag: blue globe with gold banners',
      'Both on black leather with WWE logo side plates'
    ]
  },
  {
    id: '32',
    name: 'WWE Tag Team Championships – Golden Globe Edition',
    price: 1449,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Modern unified era set with globe centerpieces, eagle etching and crystal detailing.',
    details: [
      'Raw: circular globe with crystals and interchangeable plates',
      'SmackDown: wider plate with eagle etching and bold banner',
      '24k gold with deep etching; black leather straps'
    ]
  },
  {
    id: '33',
    name: 'WWE Women’s Championship – Attitude Era Edition',
    price: 1200,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Oval centerpiece with red Women’s Champion lettering and scratch WWE logo.',
    details: [
      '24k oval centerpiece with flame‑style etching',
      'Scratch WWE logo above title banner',
      'Black leather strap with detailed tooling'
    ]
  },
  {
    id: '34',
    name: 'WWE ECW Championship – Silver & Black Edition',
    price: 999,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Silver‑plated design with massive ECW letters, flame etching and sunburst backdrop.',
    details: [
      'Oversized ECW lettering at center',
      'Flame and spike patterns for hardcore identity',
      'Engraved WWE banner across the top'
    ]
  },
  {
    id: '35',
    name: 'WWE Eco‑Friendly Championship – Daniel Bryan Edition',
    price: 999,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Sustainable title featuring wooden centerpiece, hemp strap and blue/white stones.',
    details: [
      'Wooden central plate with carved WWE logo',
      'Hemp‑based strap and custom Daniel Bryan side plates',
      'Blue and white stone detailing'
    ]
  },
  {
    id: '36',
    name: 'The Fiend Championship Belt – Custom Edition',
    price: 1200,
    image: IMG,
    images: [IMG, IMG],
    description:
      'Sculpted mask faceplate with haunting eyes and teeth; black strap with HURT/HEAL marks.',
    details: [
      '3D sculpted, hand‑painted mask centerpiece',
      'Black strap with “HURT” and “HEAL” inscriptions',
      'Red stitching to enhance the theme'
    ]
  }
];

export const MERCH_PRODUCTS = [
  {
    id: 'm1',
    name: 'WWE RAW T-shirt / 25$',
    price: 25,
    image: IMG,
    color: 'red'
  },
  {
    id: 'm2',
    name: 'WWE SmackDown T-shirt / 25$',
    price: 25,
    image: IMG,
    color: 'blue'
  },
  {
    id: 'm3',
    name: 'WWE NXT T-shirt / 25$',
    price: 25,
    image: IMG,
    color: 'black'
  },
  {
    id: 'm4',
    name: 'WWE RAW Black T-shirt / 25$',
    price: 25,
    image: IMG,
    color: 'black'
  }
];
