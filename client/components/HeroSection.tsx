import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section
      className="bg-black text-white px-6 relative overflow-hidden h-[80vh]"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2Fbb05f806738f41afb6c3a0b51a1ffac0?format=webp&width=1200')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="container mx-auto relative z-10 h-full flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mr-6"
        >
          <a href="https://championshipbeltmaker.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-6 text-lg"
            >
              Tickets
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
