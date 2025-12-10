// src/pages/ServicesIndex.tsx
import React, { useEffect, useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- Placeholder Icons (Replace with real icons if desired) ---
const Icons: { [key: string]: React.FC<{ className: string }> } = {
  TradeConsulting: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.51 23.51 0 0112 15c-3.18 0-6.23-.74-9-2.245M12 12V3m0 9l3.52 2.03m-3.52-2.03L8.48 14.03"/>
    </svg>
  ),
  Logistics: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7L12 3 4 7m16 0v10l-8 4-8-4V7"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18"/>
    </svg>
  ),
  Compliance: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 4.04A11.955 11.955 0 002.944 12c.045 2.12.87 4.14 2.378 5.75.925.753 2.02 1.403 3.25 1.836M12 21.056c-2.12 0-4.14-.87-5.75-2.378-.753-.925-1.403-2.02-1.836-3.25"/>
    </svg>
  ),
  Sourcing: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0V3h10v2M9 5h6m-3 0v11"/>
    </svg>
  ),
};

const getIcon = (index: number) => {
  const keys = Object.keys(Icons);
  return Icons[keys[index % keys.length]];
};

// Animation variants for cards
const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 15px 30px rgba(10,31,68,0.15)",
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

const ServicesIndex: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const floatingShapes = [
    { size: 80, top: 15, left: 10, color: 'bg-corporate-gold/20', delay: 0 },
    { size: 100, top: 60, left: 80, color: 'bg-corporate-blue/20', delay: 2 },
    { size: 120, top: 35, left: 40, color: 'bg-corporate-gold/15', delay: 4 },
  ];

  return (
    <div className="bg-white min-h-screen relative">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative border-b border-slate-200 py-28 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            "url('https://unsplash.com/photos/aerial-top-view-containers-ship-cargo-business-commercial-trade-logistic-and-transportation-of-international-import-export-by-container-freight-cargo-ship-in-the-open-seaport-GuGFpnGwVzI')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0A1F44]/75 pointer-events-none"></div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {floatingShapes.map((sh, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, opacity: 0.6 }}
              animate={{ y: [0, 20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 8 + i * 2,
                delay: sh.delay,
                ease: "easeInOut",
              }}
              style={{
                top: `${sh.top}%`,
                left: `${sh.left}%`,
                width: sh.size,
                height: sh.size,
              }}
              className={`${sh.color} rounded-full absolute`}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-6 max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] mb-4 tracking-tight"
          >
            Our <span className="text-corporate-gold">End-to-End</span> Trade Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-[#D4AF37] max-w-4xl mx-auto"
          >
            We offer services designed to streamline your operations, reduce risk, and ensure regulatory compliance in the dynamic Ethiopian market.
          </motion.p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="relative py-20">
        {/* Subtle pattern background (optional) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-paper.png')] opacity-10 pointer-events-none"></div>

        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_LIST.map((service, index) => {
              const ServiceIcon = getIcon(index);
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="p-8 bg-white border border-slate-200 rounded-xl shadow-lg flex flex-col justify-between h-full group transition-all duration-300 cursor-pointer hover:border-corporate-gold/50 hover:bg-linear-to-t hover:from-corporate-gold/10 hover:to-white"
                    whileHover="hover"
                  >
                    <div className="w-14 h-14 rounded-full bg-corporate-blue/10 text-corporate-blue flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-corporate-gold group-hover:text-[#0A1F44]">
                      <ServiceIcon className="w-7 h-7 stroke-2" />
                    </div>
                    <h2 className="text-xl font-bold text-[#0A1F44] mb-3 transition-colors duration-300 group-hover:text-corporate-blue">
                      {service.name}
                    </h2>
                    <p className="text-gray-600 mb-6 grow">{service.shortDesc}</p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-corporate-gold font-semibold transition-colors duration-300 group-hover:text-corporate-blue group-hover:translate-x-1"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section className="bg-corporate-blue mt-12 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#0A1F44]/85 via-[#0A1F44]/70 to-[#0A1F44]/85 pointer-events-none"></div>

        <div className="relative container mx-auto px-6 max-w-7xl text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#D4AF37] mb-4">
            Let's Build Your Successful Trade Strategy
          </h3>
          <p className="text-lg text-[#D4AF37] mb-6">
            Our specialists are ready to simplify your most complex import and export challenges.
          </p>
         
             <motion.a
               href="/contact"
               whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212,175,55,0.8)' }}
               whileTap={{ scale: 0.95 }}
               className="inline-block px-12 py-5 text-lg md:text-xl font-bold bg-corporate-gold text-[#D4AF37] rounded-full transition-all duration-300 uppercase tracking-wider shadow-lg hover:brightness-110 hover:shadow-2xl"
             >
              Get a Consultation
             </motion.a>
        </div>
      </section>
    </div>
  );
};

export default ServicesIndex;
