import { motion } from 'framer-motion';
import { MERCH_PRODUCTS } from '@shared/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const MerchSection = () => {
  const { addItem } = useCart();
  const navigate = useNavigate();
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
          <p className="text-gray-600">Step into the spotlight with custom WWE merch!</p>

          {/* Decorative dots */}
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {MERCH_PRODUCTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-lg p-6 text-center overflow-hidden relative"
            >
              {item.soldOut && (
                <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">SOLD OUT</div>
              )}
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm mb-2">{item.name}</h3>
              <div className="text-lg font-bold mb-3">${item.price.toLocaleString()}.00</div>
              <Button
                onClick={() => {
                  if ((item as any).soldOut) {
                    toast.error('Sold out');
                    return;
                  }
                  addItem({ id: item.id as any, name: (item as any).name, price: (item as any).price, image: (item as any).image, description: 'Merch item' });
                  toast.success('Added to cart', {
                    action: { label: 'Go to cart', onClick: () => navigate('/cart') },
                    cancel: { label: 'Continue shopping' }
                  });
                }}
                className="w-full bg-black hover:bg-white hover:text-black"
              >
                {(item as any).soldOut ? 'Sold Out' : 'Add to Cart'}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
