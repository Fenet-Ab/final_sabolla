import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

// 1. IMPORT YOUR LOCAL ASSET
import bgPattern from "../assets/bg_pattern/image.png";
import Topfooter from '../components/layout/Topfooter';

// --- SERVICE DATA (EXTRACTED FROM UPLOADED IMAGES) ---
const DETAILED_SERVICES: Record<string, any> = {
  "advisory": {
    name: "Advisory and Consultancy",
    intro: "We offer high-value advisory and consultancy services to guide international companies through Ethiopia’s complex legal, regulatory, and commercial landscape. Our team helps clients navigate import rules, sector-specific compliance standards, and local operational requirements, ensuring that every business decision aligns with regulatory frameworks. We actively identify investment opportunities, public tenders, and market entry options, delivering detailed sector analyses that include political, economic, and operational risk assessments.",
    outcome: "Our support extends across the entire project lifecycle, from initial market entry strategy to contract negotiation, project development, and execution. We advise clients on business positioning, pricing strategies, and operational planning while continuously monitoring risks and providing mitigation strategies. By offering real-time guidance and tailored consulting, we enable international partners to make informed, strategic decisions that maximize profitability, reduce exposure, and foster long-term sustainable growth in the Ethiopian market."
  },
  "market-assessments": {
    name: "Local Market Assessments",
    intro: "Sabolla conducts comprehensive local market assessments to provide international partners with a clear understanding of Ethiopia’s dynamic business environment. Using extensive local networks, field intelligence, and data analytics, we evaluate customer preferences, demand patterns, competitor activity, and emerging trends. Our studies identify potential buyers, distributors, and strategic project partners while monitoring government procurement pipelines, donor-funded projects, and sector-specific opportunities.",
    outcome: "In addition to quantitative research, we conduct field surveys, in-person interviews, and on-site validation to ensure the accuracy and reliability of our findings. Our ongoing market intelligence reports keep partners updated on shifts in consumer behavior, competitive moves, and regulatory developments, enabling them to adapt strategies proactively. This thorough, evidence-based approach helps international businesses reduce uncertainty, increase market penetration, and optimize operational effectiveness."
  },
  "import-export": {
    name: "Import and Export",
    intro: "We provide end-to-end support for import and export processes, ensuring smooth, compliant, and efficient movement of goods. Our team manages all aspects of regulatory compliance, including certifications, permits, quality standards, and documentation such as invoices, packing lists, certificates of origin, and pre-shipment inspections. We coordinate closely with customs authorities, shipping agents, and freight forwarders to streamline operations and minimize procedural delays.",
    outcome: "Our services also cover logistics management, transportation planning, and monitoring of exports from Ethiopia to global markets. We handle risk assessment, tracking, and coordination with stakeholders to ensure timely delivery and minimize disruptions. By managing regulatory requirements and operational logistics proactively, we allow international partners to focus on market growth with confidence that their supply chain is fully optimized."
  },
  "sourcing": {
    name: "Sourcing & Supply Chain",
    intro: "SABOLLA offers full-spectrum sourcing and supply chain management services tailored to both international and domestic clients. We identify reliable suppliers, conduct rigorous verification, negotiate pricing and agreements, and supervise procurement processes from start to finish. Our team monitors production quality, adherence to specifications, and compliance with industry standards, ensuring that all sourced products meet required benchmarks.",
    outcome: "We also manage all aspects of local logistics, warehousing, and inland transportation, ensuring timely and secure delivery. Continuous risk assessment of supply chain operations including market fluctuations, production delays, and operational challenges ensures proactive mitigation. By maintaining ethical practices, transparency, and cost-efficiency, we provide partners with reliable, high-quality products while protecting commercial interests."
  }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const serviceKeys = Object.keys(DETAILED_SERVICES);
  const currentIndex = serviceKeys.indexOf(slug || "advisory");
  const service = DETAILED_SERVICES[slug || "advisory"] || DETAILED_SERVICES["advisory"];

  const nextSlug = serviceKeys[(currentIndex + 1) % serviceKeys.length];
  const prevSlug = serviceKeys[(currentIndex - 1 + serviceKeys.length) % serviceKeys.length];

  return (
    <div className="bg-[#F9F2D6] min-h-screen font-['Montserrat'] selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#387663] pt-40 pb-56 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: '150px 150px' }}
        />

        <div className="container mx-auto px-6 relative z-10 text-center pb-12">
          <div className="md:absolute md:left-6 md:bottom-12 md:mb-0 mb-8 flex justify-center md:block">
            <Link to="/services" className="group inline-flex items-center gap-3 text-[#09140F] font-black uppercase tracking-[0.4em] text-[10px] hover:text-[#F9F2D6] transition-all no-underline">
              <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              Back to Services
            </Link>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="inline-block">
            <h1 className="text-4xl md:text-6xl mt-20 font-black text-[#F9F2D6] uppercase leading-none tracking-tighter">
              {service.name}
            </h1>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#F9F2D6]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto px-6 py-24 max-w-6xl relative -mt-40 z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className=""
        >
          {/* STACKED TEXT SECTIONS */}
          <div className="flex flex-col gap-16 mb-20">
            {/* DESCRIPTION SECTION 01 */}
            <div className="w-full">
              <div className="w-12 h-1 bg-[#308667] mb-6 rounded-full" />
              <h2 className="text-xs font-black text-[#308667] uppercase tracking-[0.3em] mb-6">
                Overview & Methodology
              </h2>
              <p className="text-lg md:text-xl text-[#122C21] leading-relaxed font-bold tracking-tight">
                {service.intro}
              </p>
            </div>

            {/* DESCRIPTION SECTION 02 */}
            <div className="w-full">
              <div className="w-12 h-1 bg-[#308667]/30 mb-6 rounded-full" />
              <h2 className="text-xs font-black text-[#308667] uppercase tracking-[0.3em] mb-6">
                Strategic Implementation
              </h2>
              <p className="text-lg md:text-xl text-[#122C21]/70 leading-relaxed font-bold tracking-tight">
                {service.outcome}
              </p>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="flex flex-col md:flex-row gap-6 items-center border-t border-[#122C21]/10 pt-12">
            <Link
              to={`/services/${prevSlug}`}
              className="group flex flex-col items-start w-full md:w-1/2 p-6 hover:bg-[#F9F2D6]/50 rounded-2xl transition-all text-left"
            >
              <span className="text-[9px] font-black text-[#122C21]/30 uppercase mb-2 tracking-[0.2em]">Previous Service</span>
              <span className="text-xs font-black text-[#308667] uppercase tracking-widest group-hover:text-[#122C21] transition-colors">
                ← {DETAILED_SERVICES[prevSlug].name}
              </span>
            </Link>

            <div className="hidden md:block w-px h-12 bg-[#122C21]/10" />

            <Link
              to={`/services/${nextSlug}`}
              className="group flex flex-col items-end w-full md:w-1/2 p-6 hover:bg-[#F9F2D6]/50 rounded-2xl transition-all text-right"
            >
              <span className="text-[9px] font-black text-[#122C21]/30 uppercase mb-2 tracking-[0.2em]">Next Service</span>
              <span className="text-xs font-black text-[#308667] uppercase tracking-widest group-hover:text-[#122C21] transition-colors">
                {DETAILED_SERVICES[nextSlug].name} →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      <Topfooter />
    </div>
  );
};

export default ServiceDetail;