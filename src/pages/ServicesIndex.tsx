import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShip, FaArrowRight, FaChartLine, FaGavel, FaBoxOpen } from 'react-icons/fa';

// IMPORT LOCAL ASSET
import bgPattern from "../assets/bg_pattern/image.png";
import Topfooter from '../components/layout/Topfooter';
import { advisory, import_export, market, sourcing } from '../assets/asset';

const SERVICES_LIST = [
  {
    name: "Advisory & Consultancy",
    slug: "advisory",
    shortDesc: "Guiding international companies through Ethiopia’s complex legal, regulatory, and commercial landscape with actionable, pragmatic recommendations.",
    image: advisory

  },
  {
    name: "Market Assessments",
    slug: "market-assessments",
    shortDesc: "Comprehensive field intelligence and data analytics to evaluate demand, competitor activity, and government procurement pipelines.",
    image: market
  },
  {
    name: "Import & Export",
    slug: "import-export",
    shortDesc: "End-to-end support for regulatory compliance, documentation, and the efficient movement of goods through customs and logistics.",
    image: import_export
  },
  {
    name: "Sourcing & Supply Chain",
    slug: "sourcing",
    shortDesc: "Full-spectrum sourcing, rigorous supplier verification, and supervising procurement workflows from production to delivery.",
    image: sourcing
  }
];
const ServicesIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F2D6] font-['Montserrat'] selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#cff4e4] pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl lg:text-5xl xl:text-6xl font-black text-[#122C21] mb-8 uppercase tracking-tighter leading-none">
              Strategic <span className="text-[#308667] ">Trade</span>
            </h1>
            <p className="text-lg md:text-xl text-[#122C21]/60 font-bold italic inline-block pb-8">
              Maximizing profitability through 20 years of localized intelligence.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#F9F2D6]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="pb-32 container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-white p-6 rounded-[2.5rem] shadow-[0_30px_60px_rgba(18,44,33,0.08)] border border-[#122C21]/5 flex flex-col h-full group transition-all duration-500 overflow-hidden"
            >
              {/* IMAGE AREA - Color filters removed */}
              <div className="relative w-full h-44 rounded-2xl mb-8 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay removed to show normal colors */}
              </div>

              <h2 className="text-xl font-black text-[#308667] mb-4 uppercase tracking-tighter leading-tight px-2">
                {service.name}
              </h2>

              <p className="text-[#122C21]/60 mb-8 grow font-bold text-[16px] leading-relaxed px-2">
                {service.shortDesc}
              </p>

              <div className="px-2 pb-2">
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.3em] text-[#308667] hover:text-[#122C21] transition-all"
                >
                  Learn More <FaArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= THE PROCESS BLUEPRINT ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-black text-[#308667] uppercase tracking-[0.4em] mb-4 block">Our Lifecycle Management</span>
              <h3 className="text-4xl md:text-6xl font-black text-[#122C21] uppercase tracking-tighter mb-8 leading-none">
                Strategic <br /> <span className="text-[#308667]">Execution</span>
              </h3>
              <p className="text-[#122C21]/70 text-lg font-bold mb-10 leading-relaxed">
                We combine international best practices with localized field intelligence to ensure every business decision aligns with Ethiopian regulatory frameworks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Market Entry", icon: <FaChartLine /> },
                  { title: "Legal Navigation", icon: <FaGavel /> },
                  { title: "Logistics Control", icon: <FaShip /> },
                  { title: "Supply Integrity", icon: <FaBoxOpen /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-[#122C21]/5 rounded-2xl">
                    <div className="text-[#308667] text-xl">{item.icon}</div>
                    <span className="text-[#122C21] font-black uppercase tracking-widest text-[10px]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-[#F9F2D6] p-12 rounded-[4rem] border border-[#122C21]/5 shadow-inner relative flex flex-col items-center justify-center min-h-[450px]">
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <FaShip className="text-[20rem]" />
              </div>
              <div className="text-center relative z-10">
                <h5 className="text-[10px] font-black text-[#122C21] uppercase tracking-[0.4em] mb-8">Integrated Trade Model</h5>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-[#122C21]/5 font-black text-[10px] uppercase text-[#308667]"> Assessment & Analysis</div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-[#122C21]/5 font-black text-[10px] uppercase text-[#308667]"> Regulatory Compliance</div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-[#122C21]/5 font-black text-[10px] uppercase text-[#308667]"> Operational Logistics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Topfooter />
    </div>
  );
};

export default ServicesIndex;