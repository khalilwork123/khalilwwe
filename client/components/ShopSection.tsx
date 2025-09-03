import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS, Product } from '@shared/products';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';

import { useEffect } from 'react';
import { useSearch } from '@/contexts/SearchContext';

export const ShopSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { query } = useSearch();

  const itemsPerPage = 12; // Exactly 4 rows × 3 columns = 12 items
  const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;

  useEffect(() => {
    setCurrentPage(0);
  }, [query]);

  const getCurrentProducts = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return filtered.slice(start, end);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          {/* Header with Title and Navigation Circles on Top */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Shop</h2>

            {/* Circular Navigation Dots - Centered on Top */}
            <div className="flex justify-center space-x-3 mb-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                    index === currentPage
                      ? 'bg-white border-white scale-125'
                      : 'bg-gray-400 border-gray-400 hover:border-white'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Products Grid - 4 columns on desktop, responsive on smaller screens */}
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {getCurrentProducts().map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onViewDetails={handleProductClick}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
