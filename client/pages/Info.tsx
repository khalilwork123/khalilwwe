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
        <div className="container mx-auto max-w-5xl prose prose-neutral">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="!mb-4">
            Custom Championship Belts: Premium, TV-Quality Belts Built For Champions
          </motion.h1>
          <p>
            We design and craft TV-quality championship belts for wrestling promotions, MMA, boxing,
            esports, influencers and special events. Every title features HD CNC‑machined plates, real
            gemstones and genuine cowhide leather for durability, comfort and prestige.
          </p>

          <h2>What Makes Our Belts Different</h2>
          <ul>
            <li className="flex items-start gap-2"><Award className="w-5 h-5 mt-1" /> 24k gold‑plated plates with deep, crisp engraving</li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 mt-1" /> Genuine gemstones and crystal settings</li>
            <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 mt-1" /> Pure cowhide straps cut, dyed and stitched by hand</li>
            <li className="flex items-start gap-2"><Package className="w-5 h-5 mt-1" /> Built for real use: durable, wearable and camera‑ready</li>
          </ul>

          <h2>Simple, Professional Process</h2>
          <ol>
            <li>2D Design Approval – Collaborate on a precise 2D mockup you can sign off on.</li>
            <li>Precision Crafting – Main and side plates are CNC‑machined for exact patterns.</li>
            <li>Premium Finishing – Polishing, plating, leatherwork and final quality control.</li>
          </ol>
          <p className="font-semibold">Typical investment: $1,000 – $4,000 depending on complexity and options.</p>

          <h2>Leagues and Styles We Build</h2>
          <p>
            From WWE, WCW, WWF and ECW to TNA, UFC and fully custom titles, we reproduce legendary
            designs and create originals with the same attention to detail you see on television.
            Straps are pure cowhide leather with optional colorways, textures, logos, engravings and
            gemstone patterns.
          </p>

          <h2>Why Teams Worldwide Trust Us</h2>
          <ul>
            <li>Authentic HD builds – not replicas – with 24k plates and real gemstones</li>
            <li>ISO‑certified workshop and rigorous QC</li>
            <li>Full customization: logos, side plates, finishes, stones and strap styles</li>
            <li>Fast global delivery in 2–3 weeks</li>
            <li>24/7 support via WhatsApp and email</li>
          </ul>

          <h2>Get Started</h2>
          <p>
            Share your concept, inspiration images and requirements. We’ll prepare a detailed 2D
            layout, finalize specs and start machining. Your championship arrives ready to display,
            wear and celebrate.
          </p>
        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  );
}
