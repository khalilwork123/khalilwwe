export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  isHot?: boolean;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
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

// Using the exact belts from the screenshot with proper images
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'WWE Undisputed Championship with John Cena side plates',
    price: 20000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'Premium WWE Undisputed Championship belt featuring authentic John Cena side plates.'
  },
  {
    id: '2',
    name: 'WWE Winged Eagle Championship Belt',
    price: 5000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    isHot: true,
    description: 'Classic WWE Winged Eagle Championship belt with premium craftsmanship.'
  },
  {
    id: '3',
    name: 'WWE Spinner Championship with Custom name plate',
    price: 20000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'Iconic WWE Spinner Championship belt with personalized name plate.'
  },
  {
    id: '4',
    name: 'WWE Big Gold World Heavyweight Championship',
    price: 20000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'Legendary Big Gold World Heavyweight Championship belt.'
  },
  {
    id: '5',
    name: 'WWE Undisputed Championship with Custom name plate',
    price: 20000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'WWE Undisputed Championship belt with custom personalization.'
  },
  {
    id: '6',
    name: 'WWE New World Heavyweight Championship Belt',
    price: 5000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    isHot: true,
    description: 'Modern WWE World Heavyweight Championship belt design.'
  },
  {
    id: '7',
    name: 'Custom WWE Side Plates of any WWE Superstar / Custom Names',
    price: 2000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'Custom side plates featuring your favorite WWE Superstar or personal names.'
  },
  {
    id: '8',
    name: 'WWE New NXT Championship',
    price: 15000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'Latest NXT Championship belt with modern design elements.'
  },
  {
    id: '9',
    name: 'WWE Smoking Skull Title',
    price: 20000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'Stone Cold Steve Austin\'s iconic Smoking Skull championship belt.'
  },
  {
    id: '10',
    name: 'WWE Heavyweight Champion',
    price: 20000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    isHot: true,
    description: 'Classic WWE Heavyweight Championship belt.'
  },
  {
    id: '11',
    name: 'WWE US Summer Championship',
    price: 20000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'Special edition WWE United States Championship belt.'
  },
  {
    id: '12',
    name: 'WWE IC Championship 2024',
    price: 20000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: '2024 edition WWE Intercontinental Championship belt.'
  },
  // Second set of 12 products for pagination
  {
    id: '13',
    name: 'WWE Universal Championship',
    price: 18000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'WWE Universal Championship with premium design.'
  },
  {
    id: '14',
    name: 'WWE Women\'s Championship',
    price: 15000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'WWE Women\'s Championship belt.'
  },
  {
    id: '15',
    name: 'WWE Tag Team Championship',
    price: 12000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'WWE Tag Team Championship set.'
  },
  {
    id: '16',
    name: 'WWE Cruiserweight Championship',
    price: 10000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'WWE Cruiserweight Championship belt.'
  },
  {
    id: '17',
    name: 'WWE European Championship',
    price: 8000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'Classic WWE European Championship belt.'
  },
  {
    id: '18',
    name: 'WWE Hardcore Championship',
    price: 7000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'WWE Hardcore Championship with unique design.'
  },
  {
    id: '19',
    name: 'WWE Light Heavyweight Championship',
    price: 6000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'WWE Light Heavyweight Championship belt.'
  },
  {
    id: '20',
    name: 'WWE Million Dollar Championship',
    price: 25000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'Ted DiBiase\'s Million Dollar Championship belt.'
  },
  {
    id: '21',
    name: 'WWE ECW Championship',
    price: 14000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'WWE ECW Championship belt with classic design.'
  },
  {
    id: '22',
    name: 'WWE WCW Championship',
    price: 16000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'Classic WCW Championship belt.'
  },
  {
    id: '23',
    name: 'WWE King of the Ring Championship',
    price: 11000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'WWE King of the Ring Championship belt.'
  },
  {
    id: '24',
    name: 'WWE Custom Championship',
    price: 30000.00,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    description: 'Fully customizable WWE Championship belt.'
  }
];

export const MERCH_PRODUCTS = [
  {
    id: 'm1',
    name: 'WWE RAW T-shirt / 25$',
    price: 25,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    color: 'red'
  },
  {
    id: 'm2',
    name: 'WWE SmackDown T-shirt / 25$',
    price: 25,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    color: 'blue'
  },
  {
    id: 'm3',
    name: 'WWE NXT T-shirt / 25$',
    price: 25,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    color: 'black'
  },
  {
    id: 'm4',
    name: 'WWE RAW Black T-shirt / 25$',
    price: 25,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800',
    color: 'black'
  }
];
