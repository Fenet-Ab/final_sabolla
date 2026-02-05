import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// IMPORT LOCAL ASSET

import Topfooter from '../components/layout/Topfooter';
import { agreculture, aviation, bgPattern, fire, military, power, safety, transportation, water } from '../assets/asset';

const PRODUCT_CATEGORIES = [
  {
    name: "Aviation",
    slug: "aviation",
    desc: "Critical communication, navigation, and information-management systems for air traffic and airports.",
    image: aviation
  },
  {
    name: "Military",
    slug: "military",
    desc: "Advanced defense technologies and secure communication systems meeting exacting military standards.",
    image: military
  },
  {
    name: "Fire & Disaster Risk",
    slug: "fire-disaster",
    desc: "Extensive range of firefighting trucks, aerial ladders, and emergency-response equipment.",
    image: fire

  },
  {
    name: "Safety & Security",
    slug: "safety-security",
    desc: "Specialized protective gear, breathing apparatus, and suits for high-risk industrial environments.",
    image: safety
  },
  {
    name: "Agricultural Products",
    slug: "agriculture",
    desc: "Food-grade hermetic storage, post-harvest protection, and essential farming implements.",
    image: agreculture
  },
  {
    name: "Water & Sewerage",
    slug: "water-sewerage",
    desc: "Infrastructure equipment including jetting trucks, water meters, and urban sanitation pumps.",
    image: water
    // "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Power & Energy",
    slug: "power-energy",
    desc: "Electrical infrastructure components, transformers, and scalable energy system solutions.",
    image: power
  },
  {
    name: "Transportation & Storage",
    slug: "transportation",
    desc: "Heavy machinery, reachstackers, specialized tires, and global logistics storage solutions.",
    image: transportation
    // "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  }
];

const ProductsIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F2D6] font-['Montserrat'] selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#cff4e4] pt-40 pb-56 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />

        <div className=" mt-4 relative z-10 container mx-auto px-6 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#122C21] mb-8 uppercase tracking-tighter leading-none">
              Managed <span className="text-[#308667]">Commodities</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#122C21]/60 max-w-4xl mx-auto font-bold italic pb-12 inline-block">
              Facilitating global excellence across Ethiopia's eight primary industrial pillars.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#F9F2D6]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </section>

      {/* ================= CATEGORY GRID ================= */}
      <section className="pb-32 container mx-auto px-6 max-w-7xl relative z-20 -mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -15 }}
              className="bg-white p-6 rounded-[2.5rem] shadow-[0_30px_60px_rgba(18,44,33,0.08)] border border-[#122C21]/5 flex flex-col h-full group transition-all duration-500 min-h-[450px]"
            >
              {/* IMAGE AREA */}
              <div className="relative w-full h-48 rounded-2xl mb-8 overflow-hidden bg-[#122C21]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

              </div>

              <h2 className="text-2xl font-black text-[#122C21] mb-4 uppercase tracking-tighter leading-tight px-2">
                {cat.name}
              </h2>

              <p className="text-[#122C21]/60 mb-8 grow font-bold text-sm leading-relaxed px-2">
                {cat.desc}
              </p>

              <div className="px-2 pb-2">
                <Link
                  to={`/products/${cat.slug}`}
                  className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-[#308667] hover:text-[#122C21] transition-all"
                >
                  Learn More <FaArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      {/* ================= FINAL CALL TO ACTION ================= */}

      <Topfooter />
    </div>
  );
};

export default ProductsIndex;