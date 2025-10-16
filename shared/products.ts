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
  type: "percentage" | "fixed";
}

export const VOUCHERS: Voucher[] = [
  { code: "BURN", discount: 10, type: "percentage" },
  { code: "WM42", discount: 25, type: "percentage" },
  { code: "RKO", discount: 40, type: "percentage" },
];

// Default/fallback image
const FallbackIMG =
  "https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Ff07cbd074e61425097bd59bc2a8e5fea?format=webp&width=800";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "WWE Championship",
    price: 1400,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F806f9c142c6c44ca95e2b7adacdb1de0?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F806f9c142c6c44ca95e2b7adacdb1de0?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Ff37dcc4d0c8448e08e777e0a52ed8273?format=webp&width=800",
    ],
    description:
      "24k gold plated plates, real gemstones, and genuine leather strap. HD CNC‑machined 12mm plates for authentic TV feel.",
    details: [
      "12mm plates for authentic TV feel",
      "Includes Limited Edition John Cena side plates",
      "Worldwide shipping within 2 weeks",
    ],
  },
  {
    id: "2",
    name: "WWE Spinner Championship",
    price: 1300,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F7c9dea0bc8be4bd0a7a966960a3b6f9c?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F7c9dea0bc8be4bd0a7a966960a3b6f9c?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fa2c9143d51804c038b6b9744a00dc939?format=webp&width=800",
    ],
    description:
      "24k gold‑plated plates, real gemstones, genuine leather. HD CNC‑machined with iconic spinning centerpiece and custom name plate option.",
    details: [
      "8mm plates for authentic TV feel",
      "Fully functional spinning centerpiece",
      "Includes custom engraved name plate",
      "Worldwide shipping within 2 weeks",
    ],
  },
  {
    id: "3",
    name: "WWE Winged Eagle Championship",
    price: 1200,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F3f62b0f5b102478c84cdc778bb651439?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F3f62b0f5b102478c84cdc778bb651439?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fbcdeb78f15e9448f8294471abea8054e?format=webp&width=800",
    ],
    description:
      "24k gold‑plated plates, real gemstones, genuine leather. Faithful recreation of the legendary Winged Eagle design.",
    details: [
      "8mm plates for TV‑quality feel",
      "Classic Winged Eagle with globe and eagle engravings",
      "Worldwide shipping within 2 weeks",
    ],
  },
  {
    id: "4",
    name: "WWE World Heavyweight Championship – Big Gold",
    price: 1400,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fb4da063f981b41b48d29d6325d50cdef?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fb4da063f981b41b48d29d6325d50cdef?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fd7909aa45bf140c9811134414e83d094?format=webp&width=800",
    ],
    description:
      "24k gold‑plated plates, real gemstones, genuine leather. The legendary Big Gold with intricate engravings.",
    details: [
      "6mm plates for classic lightweight feel",
      "Intricate lion and crown engravings",
      "Includes engraved name plates of legendary champions",
      "Worldwide shipping within 2 weeks",
    ],
  },
  {
    id: "5",
    name: "WWE Undisputed Championship",
    price: 1100,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F9572095db48047ba885fa0427d420149?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F9572095db48047ba885fa0427d420149?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F8588a7acd35f43489481692fb757bfc0?format=webp&width=800",
    ],
    description:
      "24k gold‑plated plates, real gemstones, genuine leather. Iconic Undisputed design with optional custom name plate.",
    details: [
      "6mm plates for authentic TV feel",
      "Custom engraved name plate available",
      "Detailed dual‑eagle design with classic WWE logo",
      "Worldwide shipping within 2 weeks",
    ],
  },
  {
    id: "6",
    name: "WWE World Heavyweight Championship (Modern)",
    price: 1400,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F221850ecef6843b88b54c432abb1efa1?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F221850ecef6843b88b54c432abb1efa1?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F49c436befc5741d59f183d280bfa92c7?format=webp&width=800",
    ],
    description:
      "Modern redesign of Big Gold with prominent WWE logo. 24k plates, gemstones, genuine leather.",
    details: [
      "6mm plates for authentic TV feel",
      "Modernized Big Gold with detailed gold etching",
      "Prominent WWE logo centerpiece and side plates",
      "Worldwide shipping within 2 weeks",
    ],
  },
  {
    id: "7",
    name: "Custom WWE Side Plates (Any Superstar / Custom Design)",
    price: 349,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F0fdf9e950f1247718be4a4b2dce9e9b1?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F0fdf9e950f1247718be4a4b2dce9e9b1?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F56e44e68778c4d519b9fc6e169324c6d?format=webp&width=800",
    ],
    description:
      "24k gold‑plated finish with real gemstones. Precision CNC‑machined side plates compatible with removable‑plate titles.",
    details: [
      "Compatible with official and TV‑style belts",
      "Any Superstar logo or fully custom design",
      "Personal logos and brand marks supported",
    ],
  },
  {
    id: "8",
    name: "WWE NXT Championship (Gold / Grey)",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F50f25f48bd0c4a449bd8599f86cdf0a2?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F50f25f48bd0c4a449bd8599f86cdf0a2?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F39dd246d89a74870b122bd4e465f1ebf?format=webp&width=800",
    ],
    description:
      "Bold “X” centerpiece in gold or grey finish. HD CNC‑machined plates on genuine leather.",
    details: [
      "6mm plates for authentic TV feel",
      "Choice of Gold or Grey finish",
      "Detailed NXT engravings with premium side plates",
    ],
  },
  {
    id: "9",
    name: "WWF Smoking Skull Championship",
    price: 1200,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F25a6cd061ae642febb72a88305bc4131?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F25a6cd061ae642febb72a88305bc4131?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F4dc3b0b61eee43b8ba596e3fb76836fd?format=webp&width=800",
    ],
    description:
      "Iconic skull‑and‑snake custom belt made for “Stone Cold” Steve Austin. 24k plates, gemstones, genuine leather.",
    details: [
      "8mm plates for TV‑quality feel",
      "Signature skull with red WWF logo",
      "Intricate snakes and flame engravings",
    ],
  },
  {
    id: "10",
    name: "WWF Heavyweight Championship",
    price: 1400,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F8347b571bbb947bf913dac08fd59dd3d?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F8347b571bbb947bf913dac08fd59dd3d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc8cec5e1503b4321bb523e00e47fa585?format=webp&width=800",
    ],
    description:
      "Classic eagle and globe centerpiece from the golden era. 24k plates, gemstones, genuine leather.",
    details: [
      "8mm plates for authentic TV feel",
      "Classic WWF logo with eagle and globe",
      "Highly detailed side plates with gold etching",
    ],
  },
  {
    id: "11",
    name: "WWE John Cena Edition US Spinner Championship",
    price: 1200,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F90e89752db2b4687a7130b0e4a4bd6a4?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F90e89752db2b4687a7130b0e4a4bd6a4?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F0479cf317fd94e5aa7d1d9c28c40c78e?format=webp&width=800",
    ],
    description:
      "Patriotic red, white and blue design with functional spinning “US” centerpiece.",
    details: [
      "8mm plates for authentic TV feel",
      "Functional spinning centerpiece",
      "American flag side plates and Cena signature elements",
    ],
  },
  {
    id: "12",
    name: "WWE Intercontinental Championship (White Strap)",
    price: 1400,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F336b0fdfd929422f8070df55f75422b9?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F336b0fdfd929422f8070df55f75422b9?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F9f608885d78d4571a978a4f97974914b?format=webp&width=800",
    ],
    description:
      "Classic white strap IC title with globe centerpiece and black/gold lettering.",
    details: [
      "8mm plates for TV‑quality feel",
      "Iconic globe centerpiece with detailed etching",
      "Classic WWE styling on side plates",
    ],
  },
  {
    id: "13",
    name: "WWE Hardcore Championship – Travis Scott Edition",
    price: 1600,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fd132c05a542141478452cc05cf058662?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fd132c05a542141478452cc05cf058662?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F4f0eb17e51484d4ab29c369072a04509?format=webp&width=800",
    ],
    description:
      "Modern twist on the Hardcore Title with custom overlays and graffiti‑style detailing inspired by Travis Scott.",
    details: [
      "12mm plates for authentic TV feel",
      "Custom distressed overlay and graffiti text",
      "Genuine leather with premium hardware",
    ],
  },
  {
    id: "14",
    name: "WWE Championship – 2016 Edition",
    price: 1300,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fed8a644539e442b18f3de771f639eef1?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fed8a644539e442b18f3de771f639eef1?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc4bac9de7d4b4bd1990ff432279ce29c?format=webp&width=800",
    ],
    description:
      "Bold modern WWE logo centerpiece with crystal detailing and red triangle panels.",
    details: [
      "12mm plates for authentic TV feel",
      "Large WWE logo centerpiece with crystals",
      "Customizable side plates",
    ],
  },
  {
    id: "15",
    name: "WWE Tribal Chief Championship",
    price: 1249,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F2f82e566689b412889fda9a9c54b5d72?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F2f82e566689b412889fda9a9c54b5d72?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fae4d0edadaa34030afa1af7988f7fbf4?format=webp&width=800",
    ],
    description:
      "Special edition honoring Roman Reigns’ reign with black and red tribal‑inspired detailing.",
    details: [
      "8mm plates for authentic TV feel",
      "Exclusive “Tribal Chief” design elements",
      "Customizable side plates",
    ],
  },
  {
    id: "16",
    name: "WWE Intercontinental Championship (Modern)",
    price: 1200,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fd8911714f8754881b0e84ccc1ae19a51?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fd8911714f8754881b0e84ccc1ae19a51?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc244865605a34cfeb7a5bd9554e15e74?format=webp&width=800",
    ],
    description:
      "Modern reimagining of the IC Title with globe‑centered plate and laurel accents.",
    details: [
      "8mm plates for TV‑quality feel",
      "Globe centerpiece with laurel wreath detail",
      "Customizable Superstar side plates",
    ],
  },
  {
    id: "17",
    name: "WWE Universal Championship (Red Edition)",
    price: 1300,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F5aaca6afaabe47fa9a020a7792aee4cf?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F5aaca6afaabe47fa9a020a7792aee4cf?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F1b2a75d7704349a89e34887340de5e7b?format=webp&width=800",
    ],
    description:
      "First Universal Title introduced in 2016 with red strap and large WWE logo.",
    details: [
      "12mm plates for authentic TV feel",
      "Red leather strap with gemstone detailing",
      "Customizable side plates",
    ],
  },
  {
    id: "18",
    name: "TNA World Heavyweight Championship",
    price: 1200,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F21bc1adf74114454b3b1f89e0bdfe1b3?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F21bc1adf74114454b3b1f89e0bdfe1b3?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F5f102c6c109c4806a1c067d9eabcf61f?format=webp&width=800",
    ],
    description:
      "Historic TNA design with bold logo and globe engravings on genuine leather.",
    details: [
      "8mm plates for authentic TV feel",
      "Classic TNA logo centerpiece",
      "Globe���etched side plates with gold detailing",
    ],
  },
  {
    id: "19",
    name: "WWE United States Championship",
    price: 1200,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F1d8d1b1b3fcf4ef6a479988b5a7cbff6?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F1d8d1b1b3fcf4ef6a479988b5a7cbff6?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fe803152ce0024644b0785c13a42581ff?format=webp&width=800",
    ],
    description:
      "Modern American‑inspired design with stars, stripes and golden eagle centerpiece.",
    details: [
      "8mm plates for TV‑quality feel",
      "American flag motif with gold eagle",
      "Customizable WWE logo side plates",
    ],
  },
  {
    id: "20",
    name: "Money in the Bank Briefcase",
    price: 200,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F6c6e39b3e60f4dac9f044687d7ee4ff5?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F6c6e39b3e60f4dac9f044687d7ee4ff5?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F7dee7378c80d40d19f932f1cd749b2ea?format=webp&width=800",
    ],
    description:
      "Iconic green briefcase with gold lettering from the legendary ladder match.",
    details: [
      "Full‑size replica with glossy green finish",
      "Functional handle and secure latch",
      "Lightweight yet durable construction",
    ],
    soldOut: true,
  },
  {
    id: "21",
    name: "WWE Championship – 2013 Edition (The Rock)",
    price: 1500,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F184c163fe1d74b909a669a5c795d5a5d?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F184c163fe1d74b909a669a5c795d5a5d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F4fb3d115f6e5421abd565b4a4254093e?format=webp&width=800",
    ],
    description:
      "Large logo title introduced by The Rock with custom Brahma Bull side plates.",
    details: [
      "12mm plates for authentic TV feel",
      "Crystal‑detailed WWE logo centerpiece",
      "Includes Brahma Bull side plates",
    ],
  },
  {
    id: "22",
    name: "Custom Championship (Design Your Own)",
    price: 1100,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F462f6df9ca644a97bc0990f98ae73d32?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F462f6df9ca644a97bc0990f98ae73d32?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F0dec2ce2784f453dae618f0d93cdb9fb?format=webp&width=800",
    ],
    description:
      "Fully personalized title: plates, logos, text, colors and strap styles made to your spec.",
    details: [
      "Design a brand‑new belt or modify an existing title",
      "Full control over plates, finish, engravings and stones",
      "Genuine leather straps with gold‑plated hardware",
    ],
  },
  {
    id: "23",
    name: "UFC World Championship",
    price: 1000,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F1b8fa823e6194e13bc6e22fe1a53289d?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F1b8fa823e6194e13bc6e22fe1a53289d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Feb6465955d3e410a99895c79b2e032a8?format=webp&width=800",
    ],
    description:
      "Octagonal UFC design with national flag accents and premium engraving.",
    details: [
      "8mm plates for authentic fight‑night feel",
      "Octagonal gold centerpiece with UFC logo",
      "National flag accents and gemstone inlays",
    ],
  },
  {
    id: "24",
    name: "WWE Undisputed Championship – Roman Reigns 1316 Tribal Chief Edition",
    price: 1249,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F1e1dc657237447f48c4dba7c64fd8fae?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F1e1dc657237447f48c4dba7c64fd8fae?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc3f720f608a5460e9c0ce10673ae147c?format=webp&width=800",
    ],
    description:
      "Special edition with WWE logo centerpiece, red gemstone accents and Tribal Chief side plates.",
    details: [
      "12mm plates for authentic TV feel",
      "Roman Reigns “Tribal Chief” side plates",
      "Red and black tribal‑inspired detailing",
    ],
  },
  {
    id: "25",
    name: "WWE Brahma Bull Championship – The Rock Exclusive Edition",
    price: 1249,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F8458562dab804f4dbf8ba71a9e833c77?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F8458562dab804f4dbf8ba71a9e833c77?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fd5ae1b3c707243e39826fcfe01cd4058?format=webp&width=800",
    ],
    description:
      "Iconic Brahma Bull centerpiece with red gemstone eyes and custom side plates.",
    details: [
      "8mm HD CNC‑machined plates",
      "Custom Rock side plates with lightning accents",
      "Black leather strap with detailed tooling",
    ],
  },
  {
    id: "26",
    name: "WWE Women's World Championship (White Strap Special Edition)",
    price: 1199,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fa77631d3585b43fab3c4ba892a29382f?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fa77631d3585b43fab3c4ba892a29382f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F2feba3f25c294823bd1b619bce779d35?format=webp&width=800",
    ],
    description:
      "White strap special with bold WWE logo over globe pattern and crystal‑studded border.",
    details: [
      "8mm HD CNC‑machined plates",
      "Polished logo over globe pattern with floral etching",
      "Crystal‑studded border for TV presence",
    ],
  },
  {
    id: "27",
    name: "WWE Women's Undisputed Championship (White Strap Edition)",
    price: 1199,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F57047ee7d56f4a73a297ad69ec595e2b?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F57047ee7d56f4a73a297ad69ec595e2b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F8b74cfb3c9154db6856158f0cae5507c?format=webp&width=800",
    ],
    description:
      "24k plates with textured detailing, black and silver logo centerpiece with red gemstones.",
    details: [
      "12mm HD CNC‑machined plates",
      "Interchangeable Superstar side plates",
      "White leather strap with reinforced stitching",
    ],
  },
  {
    id: "28",
    name: "WWE Intercontinental Championship – Classic Globe Edition",
    price: 1300,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F7b987ee317aa44d99bc63cd0ea09c4ec?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F7b987ee317aa44d99bc63cd0ea09c4ec?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F577a0fee40ba4afd944712d06e8e6601?format=webp&width=800",
    ],
    description:
      "Classic IC with iconic blue globe centerpiece and textured gold etching on black strap.",
    details: [
      "8mm gold‑plated plates",
      "Blue globe centerpiece",
      "Detailed tooling on leather strap",
    ],
  },
  {
    id: "29",
    name: "TNA World Championship – Golden Legacy Edition",
    price: 1400,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fdc90b57e19734ed0a56ff0691174381d?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fdc90b57e19734ed0a56ff0691174381d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fb914c973081549beb7ba44e59d827359?format=webp&width=800",
    ],
    description:
      "Regal TNA design with ornate scrollwork and red TNA logo over globe centerpiece.",
    details: [
      "8mm CNC‑machined plates with ornate etching",
      "Red TNA logo across globe centerpiece",
      "Matching side plates with TNA insignia",
    ],
  },
  {
    id: "30",
    name: "WWE Classic United States Championship",
    price: 1300,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F56ba66b3e51940e79cfb9c85fb94344f?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F56ba66b3e51940e79cfb9c85fb94344f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F94dec38de98146e380eb13f9dcda91e7?format=webp&width=800",
    ],
    description:
      "Bold American flag backdrop with gold accents and WWE logo centerpiece on black strap.",
    details: [
      "Gold‑plated plates with red/white/blue enamel",
      "United States Champion banner",
      "Interchangeable WWE side plates",
    ],
  },
  {
    id: "31",
    name: "WWE Unified Tag Team Championship – Dual Belt Edition",
    price: 1559,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc6b90a3f1cbe4596aef80649e4981b27?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc6b90a3f1cbe4596aef80649e4981b27?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Ff93c7f5a018048c8a6832183d6cdf54c?format=webp&width=800",
    ],
    description:
      "Dual Raw/World Tag and SmackDown Tag titles representing unified supremacy.",
    details: [
      "World Tag: red globe centerpiece and wrestling imagery",
      "WWE Tag: blue globe with gold banners",
      "Both on black leather with WWE logo side plates",
    ],
  },
  {
    id: "32",
    name: "WWE Tag Team Championships – Golden Globe Edition",
    price: 1449,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F352a068dfdee46928793db92af30dd95?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F352a068dfdee46928793db92af30dd95?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F2f50945bcbdb44399fbdcb47fcbd3bde?format=webp&width=800",
    ],
    description:
      "Modern unified era set with globe centerpieces, eagle etching and crystal detailing.",
    details: [
      "Raw: circular globe with crystals and interchangeable plates",
      "SmackDown: wider plate with eagle etching and bold banner",
      "24k gold with deep etching; black leather straps",
    ],
  },
  {
    id: "33",
    name: "WWE Women’s Championship – Attitude Era Edition",
    price: 1200,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F5f57aab2f6b440718d5927f061dc0166?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F5f57aab2f6b440718d5927f061dc0166?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fe36ca83a1a2245c184070ba976648799?format=webp&width=800",
    ],
    description:
      "Oval centerpiece with red Women’s Champion lettering and scratch WWE logo.",
    details: [
      "24k oval centerpiece with flame‑style etching",
      "Scratch WWE logo above title banner",
      "Black leather strap with detailed tooling",
    ],
  },
  {
    id: "34",
    name: "WWE ECW Championship – Silver & Black Edition",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fb0f868b6d5c145ccbd6e352b8f2ccfc2?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fb0f868b6d5c145ccbd6e352b8f2ccfc2?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F11805fd00b734796893339e6662a30f7?format=webp&width=800",
    ],
    description:
      "Silver‑plated design with massive ECW letters, flame etching and sunburst backdrop.",
    details: [
      "Oversized ECW lettering at center",
      "Flame and spike patterns for hardcore identity",
      "Engraved WWE banner across the top",
    ],
  },
  {
    id: "35",
    name: "WWE Eco‑Friendly Championship – Daniel Bryan Edition",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc140c3b38bd744a88f1487bb4d63fc8d?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc140c3b38bd744a88f1487bb4d63fc8d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fb2b7b132e0aa4b438e94c35de83d6def?format=webp&width=800",
    ],
    description:
      "Sustainable title featuring wooden centerpiece, hemp strap and blue/white stones.",
    details: [
      "Wooden central plate with carved WWE logo",
      "Hemp‑based strap and custom Daniel Bryan side plates",
      "Blue and white stone detailing",
    ],
  },
  {
    id: "36",
    name: "The Fiend Championship Belt – Custom Edition",
    price: 1200,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fe71a4f9613824994b27a356a31de86e6?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fe71a4f9613824994b27a356a31de86e6?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc288be9e0d294d57859d1c1ced3d04ca?format=webp&width=800",
    ],
    description:
      "Sculpted mask faceplate with haunting eyes and teeth; black strap with HURT/HEAL marks.",
    details: [
      "3D sculpted, hand‑painted mask centerpiece",
      "Black strap with “HURT” and “HEAL” inscriptions",
      "Red stitching to enhance the theme",
    ],
  },
  {
    id: "37",
    name: "Million Dollar Championship",
    price: 1299,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Ff33f2dedd5354012929918db472ce90a?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Ff33f2dedd5354012929918db472ce90a?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F87003a68e2c04e2baace2cd3c43d9866?format=webp&width=800",
    ],
    description:
      "24k gold-plated plates with sparkling crystals and genuine leather strap. A symbol of luxury, power, and prestige that made the Million Dollar Man unforgettable.",
    details: [
      "6mm plates for classic heavyweight feel",
      "Intricate dollar sign engravings with diamond accents",
      "Premium gold-tone finish and raised texture",
    ],
  },
  {
    id: "38",
    name: "Triple AAA Mega Championship",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F2ef65ed67c6048ca9e205f95d1e80bfa?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F2ef65ed67c6048ca9e205f95d1e80bfa?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F6d4bcc3f41904c95a699f7b4511b9af2?format=webp&width=800",
    ],
    description:
      "Crafted with precision and passion, this belt represents the spirit of lucha libre excellence with an intricate design inspired by Mexican wrestling heritage.",
    details: [
      "Dual-layered 6mm plates",
      "Authentic AAA logo engraving",
      "Hand-stitched genuine leather strap",
      "Includes display case",
    ],
  },
  {
    id: "39",
    name: "Lucha Underground Championship",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F20c330a56d7240b594a6ac3357f3b4ea?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F20c330a56d7240b594a6ac3357f3b4ea?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fb9067473b5694f47befaed0f5c0f01e4?format=webp&width=800",
    ],
    description:
      "Bold, fierce, and full of attitude — this championship embodies the underground energy of the ring with detailed Aztec motifs and antique gold plating.",
    details: [
      "Antique 24k gold finish",
      "Aztec mask and temple engravings",
      "6mm dual-layer plates",
    ],
  },
  {
    id: "40",
    name: "UFC Heavyweight Championship",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F8e368fb251304827a97b7f2adf9eb608?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F8e368fb251304827a97b7f2adf9eb608?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F230deb8a21444fd1b7c765ee2b700003?format=webp&width=800",
    ],
    description:
      "Precision-designed with a mix of gold and black plating. A tribute to the world's top fighters who define strength and discipline.",
    details: [
      "Octagon-inspired central plate",
      "Dual-layer 6mm structure",
      "Genuine leather strap with heavy-duty snaps",
      "Includes custom name engraving",
    ],
  },
  {
    id: "41",
    name: "Divas Championship",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F53dcbf490ff240fd939f27c43e7ef4a0?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F53dcbf490ff240fd939f27c43e7ef4a0?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F52f46213b19b4ccba423e7e158ee993f?format=webp&width=800",
    ],
    description:
      "A fan-favorite masterpiece with a stunning butterfly centerpiece and brilliant gemstones representing elegance and dominance.",
    details: [
      "Pink crystal-studded butterfly centerpiece",
      "5mm plates for lightweight feel",
      "Genuine leather strap",
      "Includes custom nameplate engraving",
    ],
  },
  {
    id: "42",
    name: "Speed Championship",
    price: 899,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F16dd99014547488d81efa9ed349869d4?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F16dd99014547488d81efa9ed349869d4?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F3fad9bcfa4094711832f198d2a82095a?format=webp&width=800",
    ],
    description:
      "Modern and sleek, built for those who rise above limits. The Speed Championship captures energy and agility in every detail.",
    details: [
      "Chrome silver finish with racing stripes",
      "Lightweight 5mm plates",
      "Laser-cut precision engravings",
      "Worldwide shipping within 2 weeks",
    ],
  },
  {
    id: "43",
    name: "Evolve Championship",
    price: 899,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F544cdefbe6d8494b9b8b0928e33a669a?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F544cdefbe6d8494b9b8b0928e33a669a?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fa5d382e4fa314b7684cca4e8d07d584f?format=webp&width=800",
    ],
    description:
      "Symbolizing evolution and excellence, this belt stands out with its refined silver plating and sharp geometric design.",
    details: [
      "5mm dual-layer plates",
      "Reflective silver shine",
      "High-grade leather strap",
      "Includes engraved nameplate",
    ],
  },
  {
    id: "44",
    name: "Rated R Spinner Championship",
    price: 1199,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fd76669cbabf040d88f624416add7fdf7?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fd76669cbabf040d88f624416add7fdf7?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Ff56e1fb047284648bbbe312e0079e877?format=webp&width=800",
    ],
    description:
      "An iconic piece featuring a spinning center plate and red Rated R logo, representing rebellion and attitude.",
    details: [
      "Spinning central plate mechanism",
      "Gloss red Rated R logo",
      "24k gold and silver plating",
    ],
  },
  {
    id: "45",
    name: "WWE Cruiserweight Championship",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc8625f739a874aaf867fb16c1ab50af6?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc8625f739a874aaf867fb16c1ab50af6?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F2d2709c994ea439b80ae7855da935bd4?format=webp&width=800",
    ],
    description:
      "Designed for agility and prestige, this belt features purple highlights and the signature WWE logo in silver finish.",
    details: [
      "5mm plates for lightweight comfort",
      "Silver finish with purple enamel details",
      "Includes engraved nameplate",
    ],
  },
  {
    id: "46",
    name: "Classic 2014 WWE Tag Team Title",
    price: 1299,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fb64cd18363904efbb84e32d71963ba2c?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fb64cd18363904efbb84e32d71963ba2c?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fe44681f54dfb457198825268111a1a94?format=webp&width=800",
    ],
    description:
      "Revisit tag team glory with these iconic copper-plated titles, crafted with legendary precision and bold dual gladiator emblems.",
    details: [
      "Copper-finished 6mm plates",
      "Dual gladiator engravings",
      "Genuine black leather strap",
    ],
  },
  {
    id: "47",
    name: "24/7 Championship",
    price: 699,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fa9902c63fff345bea73fa98595d0d612?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fa9902c63fff345bea73fa98595d0d612?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fee6abc9ff8064eb498a0c27bc75665bf?format=webp&width=800",
    ],
    description:
      "Always on the line, this green leather beauty brings fun and chaos together with an instantly recognizable gold-plated design.",
    details: [
      "Green genuine leather strap",
      "Polished gold-plated centerpiece",
      "5mm plates with lightweight construction",
    ],
  },
  {
    id: "48",
    name: "Crown Jewel Championship",
    price: 1399,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F9c3f39db2c78416a9beb15e4a759a2cc?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F9c3f39db2c78416a9beb15e4a759a2cc?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F03bec16028c24d5db7762fc058a39b38?format=webp&width=800",
    ],
    description:
      "A royal masterpiece celebrating excellence and grandeur, inspired by the Crown Jewel event with emerald gemstone detailing.",
    details: [
      "24k gold-plated centerpiece",
      "Embedded emerald stones",
      "Intricate crown and sword engravings",
    ],
  },
  {
    id: "49",
    name: "Classic NXT Championship",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F607a01c541834221bd1ad08212aaca5c?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F607a01c541834221bd1ad08212aaca5c?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fe34ce97d1d5247cbb6f204f628d05877?format=webp&width=800",
    ],
    description:
      "The golden era of NXT captured in one belt. Bold, dominant, and unmatched in its metallic black and gold tone.",
    details: [
      "6mm dual-layer plates",
      "Black and gold contrast finish",
      "Signature NXT logo engraving",
    ],
  },
  {
    id: "50",
    name: "Internet Championship",
    price: 1099,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F6fe8df13d4de42f7bae61cd79dd1578d?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F6fe8df13d4de42f7bae61cd79dd1578d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F55f3ba697fd84a058a571b8797a0383b?format=webp&width=800",
    ],
    description:
      "An online icon reborn with holographic effects, chrome details, and vibrant purple and blue accents.",
    details: [
      "6mm polished silver plates",
      "Holographic background engraving",
      "Includes personalized nameplate",
    ],
  },
  {
    id: "51",
    name: "Big Gold Brown Strap Edition",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F0b4fae6f53c1420caad67c24d391691c?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F0b4fae6f53c1420caad67c24d391691c?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fe16f0532783b4a699347b088fc0da7bf?format=webp&width=800",
    ],
    description:
      "A classic twist on the Big Gold legacy with a vintage brown strap and timeworn gold shine, built for collectors.",
    details: [
      "24k aged gold-plated plates",
      "Brown genuine leather strap",
      "Intricate lion and crown engravings",
    ],
  },
  {
    id: "52",
    name: "Undertaker Legacy Title",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc810db1ac2804d1c852de3cad42dc099?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc810db1ac2804d1c852de3cad42dc099?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc3adc6487428456eb768fffa2b3b6d98?format=webp&width=800",
    ],
    description:
      "Dark, powerful, and iconic. This legacy belt honors the Phenom with purple undertones and gothic engravings.",
    details: [
      "6mm antique silver plates",
      "Purple highlights and custom side plates",
      "Hand-tooled genuine leather strap",
      "Includes exclusive Undertaker nameplate",
    ],
  },
  {
    id: "53",
    name: "WWF European Championship",
    price: 999,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F8e0e048f932d4a41946d9052689c1a87?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F8e0e048f932d4a41946d9052689c1a87?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F9d704381117c4ae6a39090472d21a63b?format=webp&width=800",
    ],
    description:
      "A timeless collector's piece celebrating international glory with detailed European map engraving and national flags.",
    details: [
      "6mm dual-layer gold plates",
      "European continent engravings",
      "Includes engraved champion nameplate",
    ],
  },
  {
    id: "54",
    name: "WWF Cruiserweight Championship",
    price: 1099,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc8625f739a874aaf867fb16c1ab50af6?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fc8625f739a874aaf867fb16c1ab50af6?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F2d2709c994ea439b80ae7855da935bd4?format=webp&width=800",
    ],
    description:
      "A classic throwback to the early cruiserweight era, this WWF edition features silver plating, red accents, and a timeless globe centerpiece representing speed and honor.",
    details: [
      "6mm dual-layer silver plates",
      "Red enamel detailing with WWF logo engraving",
      "Classic globe centerpiece design",
    ],
  },
  {
    id: "55",
    name: "NXT North American Title",
    price: 899,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F824c1438199a42c5bde3447765790139?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F824c1438199a42c5bde3447765790139?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Feede575a2b424256a28e5b7ab0919de2?format=webp&width=800",
    ],
    description:
      "Bold red centerpiece and bronze plating make this title a must-have for collectors and NXT fans alike.",
    details: [
      "6mm gold dual-layer plates",
      "Brown leather strap",
      "Globe centerpiece design",
    ],
  },
  {
    id: "56",
    name: "Gold WWE 2013 Championship",
    price: 1500,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Ff00d33451ee1473e91c253f1ed259311?format=webp&width=800",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Ff00d33451ee1473e91c253f1ed259311?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F8e632876613441fbb5f9e8e17e386267?format=webp&width=800",
    ],
    description:
      "Custom made fully gold edition WWE Championship belt",
    details: [
      "12mm plates for authentic TV feel",
      "Crystal‑detailed WWE logo centerpiece",
      "Includes 24k gold plates",
    ],
  },
];

export const MERCH_PRODUCTS = [
  {
    id: "m1",
    name: "WWE RAW T-shirt",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fa852db6d2da44c528c733d84aa5b06e5?format=webp&width=800",
    color: "red",
    soldOut: true,
  },
  {
    id: "m2",
    name: "WWE SmackDown T-shirt",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F856c2b06280a48559713850d8158e33c?format=webp&width=800",
    color: "blue",
    soldOut: true,
  },
  {
    id: "m3",
    name: "WWE NXT T-shirt",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F98893064804f4644814c79c0fd474446?format=webp&width=800",
    color: "black",
    soldOut: true,
  },
  {
    id: "m4",
    name: "WWE RAW Black T-shirt",
    price: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F69659b68456a4710a7eaa03bc5564ea1?format=webp&width=800",
    color: "black",
    soldOut: true,
  },
];
