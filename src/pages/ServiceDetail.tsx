import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaChartBar,
  FaShip,
  FaCubes,
  FaArrowLeft,
  FaLayerGroup,
  FaChevronRight
} from 'react-icons/fa';

// 1. IMPORT YOUR LOCAL ASSET
import bgPattern from "../assets/bg_pattern/image.png";

// --- SERVICE DATA (UNTOUCHED) ---
const DETAILED_SERVICES: Record<string, any> = {
  "advisory": {
    name: "Advisory and Consultancy Services",
    icon: <FaShieldAlt />,
    intro: "We offer high-value advisory and consultancy services to guide international companies through Ethiopia’s complex legal, regulatory, and commercial landscape.",
    fullContent: [
      "Our team helps clients navigate import rules, sector-specific compliance standards, and local operational requirements, ensuring that every business decision aligns with regulatory frameworks.",
      "We actively identify investment opportunities, public tenders, and market entry options, delivering detailed sector analyses that include political, economic, and operational risk assessments.",
      "Our support extends across the entire project lifecycle, from initial market entry strategy to contract negotiation, project development, and execution.",
      "We advise clients on business positioning, pricing strategies, and operational planning while continuously monitoring risks and providing mitigation strategies."
    ],
    outcome: "By offering real-time guidance and tailored consulting, we enable international partners to make informed, strategic decisions that maximize profitability, reduce exposure, and foster long-term sustainable growth in the Ethiopian market."
  },
  "market-assessments": {
    name: "Local Market Assessments",
    icon: <FaChartBar />,
    intro: "Sabolla conducts comprehensive local market assessments to provide international partners with a clear understanding of Ethiopia’s dynamic business environment.",
    fullContent: [
      "Using extensive local networks, field intelligence, and data analytics, we evaluate customer preferences, demand patterns, competitor activity, and emerging trends.",
      "Our studies identify potential buyers, distributors, and strategic project partners while monitoring government procurement pipelines, donor-funded projects, and sector-specific opportunities.",
      "In addition to quantitative research, we conduct field surveys, in-person interviews, and on-site validation to ensure the accuracy and reliability of our findings.",
      "Our ongoing market intelligence reports keep partners updated on shifts in consumer behavior, competitive moves, and regulatory developments, enabling them to adapt strategies proactively."
    ],
    outcome: "This thorough, evidence-based approach helps international businesses reduce uncertainty, increase market penetration, and optimize operational effectiveness."
  },
  "import-export": {
    name: "Import and Export Facilitation",
    icon: <FaShip />,
    intro: "We provide end-to-end support for import and export processes, ensuring smooth, compliant, and efficient movement of goods.",
    fullContent: [
      "Our team manages all aspects of regulatory compliance, including certifications, permits, quality standards, and documentation such as invoices, packing lists, certificates of origin, and pre-shipment inspections.",
      "We coordinate closely with customs authorities, shipping agents, and freight forwarders to streamline operations and minimize procedural delays.",
      "Our services also cover logistics management, transportation planning, and monitoring of exports from Ethiopia to global markets.",
      "We handle risk assessment, tracking, and coordination with stakeholders to ensure timely delivery and minimize disruptions."
    ],
    outcome: "By managing regulatory requirements and operational logistics proactively, we allow international partners to focus on market growth, sales strategy, and business expansion with confidence that their supply chain is fully optimized and compliant."
  },
  "sourcing": {
    name: "Sourcing and Supply Chain Management",
    icon: <FaCubes />,
    intro: "SABOLLA offers full-spectrum sourcing and supply chain management services tailored to both international and domestic clients.",
    fullContent: [
      "We identify reliable suppliers, conduct rigorous verification, negotiate pricing and agreements, and supervise procurement processes from start to finish.",
      "Our team monitors production quality, adherence to specifications, and compliance with industry standards, ensuring that all sourced products meet required benchmarks.",
      "We manage all aspects of local logistics, warehousing, and inland transportation, ensuring timely and secure delivery.",
      "Continuous risk assessment of supply chain operations including market fluctuations, production delays, and operational challenges ensures proactive mitigation."
    ],
    outcome: "By maintaining ethical practices, transparency, and cost-efficiency throughout the supply chain, we provide partners with reliable, high-quality products and services while protecting commercial interests."
  }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = DETAILED_SERVICES[slug || "advisory"] || DETAILED_SERVICES["advisory"];

  return (
    <div className="bg-[#F9F2D6] min-h-screen font-['Montserrat'] selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION - SYNCED WITH PRODUCTS ================= */}
      <section className="relative bg-[#387663] pt-40 pb-56 overflow-hidden">

        {/* LOCAL IMAGE PATTERN */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <Link to="/services" className="group text-[#09140F] font-black uppercase tracking-[0.4em] text-[10px] mb-12 inline-flex items-center hover:text-[#F9F2D6] transition-all">
            <FaArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform" />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black text-[#F9F2D6] uppercase leading-[0.85] tracking-tighter mb-8">
              {service.name.split(' ').slice(0, 2).join(' ')} <br />
              <span className="text-[#09140F]">{service.name.split(' ').slice(2).join(' ')}</span>
            </h1>
          </motion.div>
        </div>

        {/* Diagonal Angle Cut */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#F9F2D6]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </section>

      {/* ================= CONTENT SECTION (UNTOUCHED) ================= */}
      <div className="container mx-auto px-6 py-24 max-w-7xl relative -mt-32 z-20">
        <div className="grid lg:grid-cols-3 gap-16">

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-16 bg-white rounded-[3rem] shadow-xl border border-[#122C21]/5 mb-16"
            >
              <h2 className="text-[10px] font-black text-[#308667] uppercase tracking-[0.4em] mb-6">Introduction</h2>
              <p className="text-2xl font-bold text-[#122C21] leading-relaxed border-l-8 border-[#308667] pl-8">
                {service.intro}
              </p>
            </motion.div>

            <h2 className="text-3xl font-black text-[#122C21] uppercase mb-12 tracking-tight">Scope of Work</h2>

            <div className="space-y-12">
              {service.fullContent.map((paragraph: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 bg-[#122C21] rounded-xl flex items-center justify-center text-[#F9F2D6] group-hover:bg-[#308667] transition-all duration-500 shadow-lg">
                      <FaLayerGroup className="text-lg" />
                    </div>
                    {idx !== service.fullContent.length - 1 && (
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[2px] h-full bg-[#122C21]/5 group-hover:bg-[#308667]/20 transition-colors" />
                    )}
                  </div>

                  <p className="text-lg text-[#09140F]/80 font-medium leading-relaxed pb-12">
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar - Sticky Outcome */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 bg-[#122C21] p-12 rounded-[3.5rem] text-[#F9F2D6] shadow-2xl border-t-8 border-[#308667]">
              <div className="w-16 h-16 bg-[#308667] rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#308667] mb-6">Strategic Outcome</h3>
              <p className="text-xl font-bold leading-relaxed mb-12 opacity-90 tracking-tight">
                {service.outcome}
              </p>

              <Link to="/contact">
                <button className="w-full bg-[#308667] py-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#F9F2D6] hover:text-[#122C21] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
                  Partner With Us <FaChevronRight className="text-sm" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;