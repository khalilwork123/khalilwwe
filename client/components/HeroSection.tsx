import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section
      className="bg-black text-white px-6 relative overflow-hidden h-[80vh]"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F7c7981c24ce04d2abcdbf111ce19775e%2Fd7ea3bbbcb4f4a6b8f11bad177507db5?format=webp&width=800')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto text-center relative z-10 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-auto mb-20"
        >
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-6 text-lg"
          >
            Tickets
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
