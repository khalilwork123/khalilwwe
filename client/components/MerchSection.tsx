import { motion } from "framer-motion";
import { MERCH_PRODUCTS, Product } from "@shared/products";
import { Button } from "@/components/ui/button";
import { ProductModal } from "@/components/ProductModal";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const MerchSection = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(MERCH_PRODUCTS.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = MERCH_PRODUCTS.slice(startIdx, startIdx + itemsPerPage);

  const openModal = (item: Product) => {
    setSelected(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelected(null);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="merch" className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">WWE MERCH</h2>
          <p className="text-gray-600">
            Step into the spotlight with custom WWE merch!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-lg p-6 text-center overflow-hidden relative"
            >
              {item.soldOut && (
                <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  SOLD OUT
                </div>
              )}
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm mb-2">{item.name}</h3>
              <div className="text-lg font-bold mb-3">
                ${item.price.toLocaleString()}.00
              </div>
              <Button
                onClick={() => openModal(item)}
                className="w-full bg-black hover:bg-white hover:text-black"
              >
                View Details
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="p-2 rounded-full border border-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "border border-black hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-gray-600"
        >
          <p>
            Page {currentPage} of {totalPages}
          </p>
        </motion.div>
      </div>
      <ProductModal product={selected} isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};
