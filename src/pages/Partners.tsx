// src/pages/Partners.tsx
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PartnersShowcase from "../components/partners/PartnersShowcase";


const PartnersPage: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  /* Continuous horizontal scroll effect for logos */
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const firstChild = sliderRef.current.children[0] as HTMLElement;
        const width = firstChild.offsetWidth + 32; // 32px gap
        sliderRef.current.scrollBy({ left: width, behavior: "smooth" });

        // Rotate the first child to the end to create infinite loop
        setTimeout(() => {
          sliderRef.current?.appendChild(firstChild);
          sliderRef.current!.scrollLeft -= width;
        }, 600); // match smooth scroll timing
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-[#D4AF37] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920')",
          }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Floating shapes */}
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-corporate-gold/30 top-10 left-10"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-60 h-60 rounded-full bg-corporate-blue/30 bottom-10 right-10"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />

        <div className="relative z-10 container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-corporate-gold mb-6 tracking-tight"
          >
            Our Global Network
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-[#D4AF37] leading-relaxed"
          >
            We proudly partner with <span className="font-semibold">leading international firms</span> and robust <span className="font-semibold">local Ethiopian enterprises</span> to deliver quality and reliability across the market.
          </motion.p>
        </div>
      </section>

      {/* ================= PARTNER LOGOS - SCROLLING CAROUSEL ================= */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-extrabold text-[#0A1F44] mb-12 text-center">
            <span className="text-corporate-gold">International</span> Suppliers & Strategic Partners
          </h2>

          <div
            ref={sliderRef}
            className="flex gap-8 overflow-hidden whitespace-nowrap py-8"
          >
            <PartnersShowcase />
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-corporate-gold py-16">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44] mb-6">
            Interested in Partnering with Us?
          </h3>
                 <motion.a
                         href="/contact"
                         whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212,175,55,0.8)' }}
                         whileTap={{ scale: 0.95 }}
                         className="inline-block px-12 py-5 text-lg md:text-xl font-bold bg-corporate-gold text-[#D4AF37] rounded-full transition-all duration-300 uppercase tracking-wider shadow-lg hover:brightness-110 hover:shadow-2xl"
                       >
                        Reach Our Partnership Team →
                       </motion.a>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
