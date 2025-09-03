import { ShoppingCart, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useSearch } from '@/contexts/SearchContext';
import { motion } from 'framer-motion';

export const Header = () => {
  const { getItemCount, toggleCart } = useCart();
  const { query, setQuery } = useSearch();
  const navigate = useNavigate();
  const itemCount = getItemCount();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el2 = document.getElementById(id);
        if (el2) el2.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-black py-4 px-6 border-b border-gray-200"
    >
      <div className="container mx-auto flex items-center justify-between gap-6">
        {/* Left - Logo */}
        <Link to="/" aria-label="Home" className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F82c0af6178024f2eaa8410500e19f4e2?format=webp&width=800"
            alt="BURNITDOWNYT"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Center/Right - Navigation */}
        <nav className="flex items-center gap-6 ml-auto">
          <Link to="/" className="hover:text-gray-600 transition-colors text-sm">Home</Link>
          <button onClick={() => scrollTo('shop')} className="hover:text-gray-600 transition-colors text-sm">Shop</button>
          <Link to="#" className="hover:text-gray-600 transition-colors text-sm">Latest News</Link>
          <button onClick={() => scrollTo('merch')} className="hover:text-gray-600 transition-colors text-sm">Merch</button>
          <Link to="/info" className="hover:text-gray-600 transition-colors text-sm">Info</Link>
          <Link to="/media-kit" className="hover:text-gray-600 transition-colors text-sm">Media Kit</Link>
          <Link to="#" className="hover:text-gray-600 transition-colors text-sm">Contact Us</Link>

          <div className="flex items-center gap-3 ml-2">
            <div className="flex items-center gap-2 border rounded-full px-3 py-1">
              <Search className="w-4 h-4" />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  scrollTo('shop');
                }}
                placeholder="Search products"
                className="outline-none text-sm w-32 md:w-48"
              />
            </div>
            <button
              onClick={toggleCart}
              className="relative cursor-pointer hover:text-gray-600 transition-colors"
              aria-label="Open cart"
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
