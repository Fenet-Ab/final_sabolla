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
    <div className="bg-[#FCFAF2] min-h-screen font-['Montserrat'] text-[#0B1A13] overflow-x-hidden">
      
      {/* ================= HERO SECTION (Matched to Home/About Style) ================= */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-[#cff4e4]">
        {/* Decorative background accents matching Home Page */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#0B1A13] hidden lg:block" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#308667]/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] font-black text-[#308667] uppercase tracking-[0.5em] block mb-6">
                Global Network
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-black leading-[1.1] tracking-tighter uppercase mb-8">
                Strategic <br />
                <span className="text-[#308667]">Synergy & Partnerships</span>
              </h1>
              <p className="text-xl text-[#0B1A13]/70 max-w-2xl font-medium leading-relaxed mb-10">
                We bridge the gap between world-class technology and Ethiopia's industrial landscape by representing the world's most innovative manufacturers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

       {/* ================= PARTNERS SECTION ================= */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-[#122C21] uppercase tracking-tighter mb-6">
              Trusted <span className="text-[#308667]">Partners</span>
            </h2>
            <p className="text-xl text-[#122C21]/60 max-w-2xl mx-auto font-medium">
              We collaborate with globally recognized manufacturers and technology leaders
              to deliver premium solutions into Ethiopia.
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
      <Topfooter/>
    </div>
  );
};

export default PartnersPage;