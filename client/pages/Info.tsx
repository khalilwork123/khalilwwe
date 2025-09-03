import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InfoSection } from '@/components/InfoSection';
import { CartSidebar } from '@/components/CartSidebar';
import { ShieldCheck, Award, Package, CheckCircle } from 'lucide-react';

export default function Info() {
  return (
    <div className="min-h-screen">
      <InfoSection />
      <Header />

      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F82c0af6178024f2eaa8410500e19f4e2?format=webp&width=800" alt="BURNITDOWNYT Logo" className="mx-auto w-32 h-32 object-contain mb-6" />
            <h1 className="text-4xl font-extrabold mb-2">Custom Championship Belts – Crafted for Champions</h1>
            <p className="text-gray-600">Premium custom championship belts for all leagues and events worldwide.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Materials & Craft</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><Award className="w-5 h-5 text-black mt-1" />HD 24k gold plates with genuine gemstones</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-black mt-1" />Pure cowhide leather straps for durability and comfort</li>
                <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-black mt-1" />Built for functionality and a luxurious finish</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Design Process</h2>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>2D Design Approval – A detailed 2D design begins your journey.</li>
                <li>Precision Crafting – CNC-machined main and side plates for exact patterns.</li>
                <li>Premium Finishing – Genuine materials, polished detailing, and custom options.</li>
              </ol>
              <p className="mt-4 font-semibold">Investment range: $1,000 – $4,000 (depends on complexity).</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-black text-white p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Explore Our Championship Belts</h2>
            <p className="opacity-90 mb-4">Unbeaten craftsmanship, refined artwork, and world-class designs:</p>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <span>• WWE Championship Belts</span>
              <span>• WCW Championship Belts</span>
              <span>• WWF Championship Belts</span>
              <span>• ECW Championship Belts</span>
              <span>• TNA Championship Belts</span>
              <span>• UFC Championship Belts</span>
              <span>• Custom CNC Championship Belts</span>
            </div>
            <p className="mt-4">Every strap is pure cowhide leather with extensive customization options: colors, textures, logos, titles, gemstones, engravings, and unique finishes.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><Award className="w-5 h-5 text-black mt-1" />Authentic HD belts with 24k gold plates and genuine gemstones</li>
                <li className="flex items-start gap-2"><Package className="w-5 h-5 text-black mt-1" />Premium quality cowhide leather straps</li>
                <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-black mt-1" />ISO certified – international quality standards</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-black mt-1" />Complete customization from logos to side plates</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-black mt-1" />Fast worldwide delivery in 2–3 weeks</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-black mt-1" />24/7 customer support via WhatsApp and email</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Discount Codes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>BURN – 10% off</li>
                <li>WM42 – 25% off</li>
                <li>RKO – 40% off</li>
              </ul>
              <p className="text-sm text-gray-500 mt-2">Apply codes in your cart.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  );
}
