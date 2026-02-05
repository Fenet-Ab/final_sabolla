import * as React from 'react';
import { motion } from "framer-motion";
import PartnersShowcase from "../components/partners/PartnersShowcase";
// import TestimonialsSection from "../components/sections/TestimonialsSection";

// Full data imports from your files
import { PARTNERS } from "../data/partners";
import { LOCAL_PARTNERS } from "../data/localPartners";
import Topfooter from '../components/layout/Topfooter';

const PartnersPage: React.FC = () => {
  return (
    <div className="bg-[#F9F2D6] min-h-screen font-['Montserrat'] w-full overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#cff4e4] pt-48 pb-32 overflow-hidden">
        {/* Subtle Brand Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `url('/pattern.png')`, backgroundSize: '400px' }}
        />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-7xl font-black text-[#122C21] uppercase tracking-tighter leading-none mb-8"
          >
            Strategic   <span className="text-[#308667]">Synergy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-[#122C21]/60 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            We represent the world's most innovative manufacturers, ensuring Ethiopia has
            seamless access to mission-critical technologies and industrial solutions.
          </motion.p>
        </div>
      </section>

      {/* ================= PARTNERS SECTION ================= */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#122C21] uppercase tracking-tighter mb-6">
              Trusted <span className="text-[#308667]">Partners</span>
            </h2>
            <div className="w-24 h-2 bg-[#308667] mx-auto mb-8 rounded-full" />
            <p className="text-[#387663] max-w-2xl mx-auto text-lg font-medium">
              A curated network of international leaders and local stakeholders driving
              national progress across aviation, safety, and infrastructure.
            </p>
          </div>

          <div className="space-y-32">
            <div className="relative">
              <div className="absolute -left-10 top-0 text-[12rem] font-black text-[#122C21]/5 leading-none pointer-events-none">INTL</div>
              <h3 className="relative z-10 text-sm font-black text-[#308667] uppercase tracking-[0.5em] mb-12 text-center lg:text-left">
                International Partners
              </h3>
              <PartnersShowcase partners={PARTNERS} />
            </div>

            <div className="relative">
              <div className="absolute -right-10 top-0 text-[12rem] font-black text-[#122C21]/5 leading-none pointer-events-none text-right">LOCAL</div>
              <h3 className="relative z-10 text-xs font-black text-[#308667] uppercase tracking-[0.5em] mb-12 text-center lg:text-right">
                Local & Government Partners
              </h3>
              <PartnersShowcase partners={LOCAL_PARTNERS} />
            </div>
          </div>
        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      {/* <TestimonialsSection /> */}

      {/* ================= CALL TO ACTION ================= */}
      <Topfooter />
    </div>
  );
};

export default PartnersPage;