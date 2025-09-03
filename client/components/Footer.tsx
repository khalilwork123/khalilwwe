import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white py-12 px-6"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-gray-300 transition-colors">Shop</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition-colors">2K Community</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition-colors">Media Kit</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              <Youtube className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 BURNITDOWNYT. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};
