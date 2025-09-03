import { motion } from 'framer-motion';

export const BrandHighlights = () => {
  const brands = [
    { name: 'WWE 2K', color: 'bg-red-600', textColor: 'text-white', href: 'https://www.facebook.com/share/g/1FNLn37Fvm/?mibextid=wwXIfr' },
    { name: 'YouTube', color: 'bg-white', textColor: 'text-red-600', border: true, href: 'https://youtube.com/@burnitdownyt?si=M1570QuonyesV4R-' },
    { name: 'Instagram', color: 'bg-black', textColor: 'text-white', href: 'https://www.instagram.com/burnitdownyt?igsh=MTExOGNwOHJhZWYyYQ%3D%3D&utm_source=qr' },
    { name: 'Instagram Store', color: 'bg-purple-900', textColor: 'text-white', href: 'https://www.instagram.com/burnitdown.store?igsh=MWc0aDhpZTd0b3dudA%3D%3D&utm_source=qr' },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Brand Highlights</h2>
          <p className="text-gray-600">
            Join our WWE 2K community group and explore some of our top brand highlights
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`
                aspect-square rounded-lg flex items-center justify-center
                ${brand.color} ${brand.textColor}
                ${brand.border ? 'border-2 border-red-600' : ''}
                cursor-pointer
              `}
            >
              <span className="text-xl font-bold">{brand.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
