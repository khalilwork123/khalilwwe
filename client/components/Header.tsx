import { ShoppingCart, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { motion } from 'framer-motion';

export const Header = () => {
  const { getItemCount, toggleCart } = useCart();
  const itemCount = getItemCount();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-black py-4 px-6 border-b border-gray-200"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left - Empty space for balance */}
        <div className="hidden md:flex items-center text-sm w-48">
        </div>

        {/* Center - Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wider text-black">
          BURNITDOWNYT
        </Link>

        {/* Right - Navigation */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-600 transition-colors text-sm">Home</Link>
          <Link to="/shop" className="hover:text-gray-600 transition-colors text-sm">Shop</Link>
          <Link to="#" className="hover:text-gray-600 transition-colors text-sm">Latest News</Link>
          <Link to="#" className="hover:text-gray-600 transition-colors text-sm">Merch</Link>
          <Link to="#" className="hover:text-gray-600 transition-colors text-sm">Info</Link>
          <Link to="#" className="hover:text-gray-600 transition-colors text-sm">Contact Us</Link>

          <div className="flex items-center space-x-3 ml-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <User className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <button
              onClick={toggleCart}
              className="relative cursor-pointer hover:text-gray-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};
