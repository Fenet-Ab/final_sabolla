// src/pages/ServiceDetail.tsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_LIST } from '../data/mockData';
import { motion } from 'framer-motion';

// --- Necessary Icon Definitions (Unchanged) ---
const CheckCircle = ({ className }: { className: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>;
const ChevronRight = ({ className }: { className: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>;
// --- End Icon Definitions ---

// Mock data remains the same
const getDetailedServiceContent = (slug: string) => {
  const service = SERVICES_LIST.find(s => s.slug === slug);
  if (!service) return null;

  return {
    ...service,
    details: [
      { title: "Regulatory Guidance", content: "Expert assistance navigating Ethiopian trade laws, customs duties, and import/export licensing requirements. Ensure 100% compliance from day one." },
      { title: "Market Intelligence", content: "Up-to-date local market assessments, consumer trends, and competitor analysis to inform your strategic decision-making in the region." },
      { title: "Sourcing & Compliance", content: "Identifying reliable local partners and ensuring all products and processes meet Ethiopian standards (ES) and international quality regulations." },
      { title: "Logistics & Risk Management", content: "Seamless coordination of global shipping, local storage, and distribution, while proactively identifying and mitigating supply chain risks." },
      { title: "Operational Support", content: "End-to-end support, including meticulous documentation, efficient ground handling, and securing necessary governmental permissions without delay." },
    ]
  };
};

// --- Framer Motion Variants (Unchanged for timeline) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

// Create a motion-enabled react-router Link component to allow motion props on Link
const MotionLink = motion(Link);

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // The type-safe version of getDetailedServiceContent would be used here in a TS environment.
  const serviceData = getDetailedServiceContent(slug || ''); 

  if (!serviceData) {
    return (
        <div className="container mx-auto px-6 py-40 text-center">
            <h1 className="text-5xl font-extrabold text-corporate-blue">Service Not Found</h1>
            <p className="mt-4 text-xl text-gray-600">Please check the URL or return to the services page.</p>
            <Link to="/services" className="mt-8 inline-block text-corporate-gold font-semibold hover:underline">
              ← Back to All Services
            </Link>
        </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

        {/* ================= HERO HEADER: Enhanced with Gradient ================= */}
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#0A1F44] py-32 relative overflow-hidden shadow-xl"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="%23FFFFFF" fill-opacity="0.1"><path d="M0 0h20v20H0zm20 20h20v20H20z" /></g></svg>')` }}></div>
            
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>

            <div className="relative z-10 container mx-auto px-6 max-w-7xl">
                <p className="text-md font-semibold text-corporate-gold uppercase mb-3 tracking-widest">
                    Expert Trade Solutions
                </p>
                <motion.h1 
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
                >
                    {serviceData.name}
                </motion.h1>
                <motion.p 
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-xl md:text-2xl text-gray-300 max-w-4xl font-light"
                >
                    {serviceData.shortDesc}
                </motion.p>
            </div>
        </motion.section>

        {/* ================= MAIN CONTENT & SIDEBAR ================= */}
        <div className="container mx-auto px-6 py-20 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-12">
                
                {/* ----------------- LEFT: SERVICE DETAILS (Enhanced Timeline) ----------------- */}
                <div className="md:col-span-2">
                    
                    {/* Introductory Quote/Summary */}
                    <p className="text-2xl text-gray-700 leading-relaxed mb-12 border-l-4 border-corporate-gold pl-6 italic bg-slate-50 p-4 rounded-lg shadow-sm">
                        Our comprehensive **{serviceData.name}** service is built on two decades of local expertise, ensuring professional, end-to-end support for your entry or expansion into the Ethiopian market.
                    </p>

                    <h2 className="text-4xl font-extrabold text-[#0A1F44] mb-10">
                        The Sabolla Advantage: Our Process
                    </h2>
                    
                    {/* Detailed Components - Vertical Timeline/Flow */}
                    <motion.div 
                        // Enhanced: Use a slightly thicker border for the timeline path
                        className="relative space-y-12 pl-6 border-l-4 border-slate-300" 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {serviceData.details.map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                className="relative group"
                            >
                                {/* Timeline Dot/Connector: Bolder hover color */}
                                <div className="absolute -left-[38px] top-0 w-8 h-8 rounded-full bg-corporate-blue flex items-center justify-center transition-all duration-300 group-hover:bg-corporate-gold group-hover:scale-110 shadow-lg border-4 border-white">
                                    <CheckCircle className="w-5 h-5 text-white"/>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 transition-all duration-300 group-hover:shadow-2xl group-hover:border-corporate-gold group-hover:bg-slate-50">
                                    <h3 className="text-2xl font-bold text-corporate-blue mb-2 transition-colors duration-300 group-hover:text-[#0A1F44]">
                                        {index + 1}. {item.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{item.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ----------------- RIGHT: SIDEBAR CTA (Sticky) ----------------- */}
                <div className="md:col-span-1">
                    <div className="sticky top-20 space-y-8"> 
                        {/* Primary CTA: Enhanced with Framer Motion for interactivity */}
                        <div className="bg-corporate-blue text-white p-8 rounded-xl shadow-2xl border-t-4 border-corporate-gold">
                            <h3 className="text-3xl font-extrabold mb-4 text-corporate-gold leading-snug">
                                Secure Your Global Trade Path
                            </h3>
                            <p className="mb-8 text-gray-200">
                                Discuss your specific trade needs with one of our expert consultants and get a tailored strategy.
                            </p>
                            {/* Use motion-enabled Link for a more tactile press */}
                            <MotionLink
                                to="/contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98, backgroundColor: '#FFFFFF', color: '#0A1F44' }}
                                className="w-full inline-flex items-center justify-center bg-corporate-gold text-[#0A1F44] font-bold py-3 rounded-xl transition-all duration-300 shadow-xl text-lg"
                            >
                                Get Expert Consultation
                                <ChevronRight className="w-5 h-5 ml-2"/>
                            </MotionLink>
                        </div>

                        {/* Secondary Navigation */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-md">
                             <h4 className="text-xl font-bold text-[#0A1F44] mb-4">
                                Didn't Find What You Need?
                            </h4>
                            <Link to="/services" className="inline-flex items-center text-corporate-blue font-semibold hover:text-corporate-gold transition">
                                <ChevronRight className="w-4 h-4 mr-1"/> View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back Link at the bottom */}
            <Link to="/services" className="mt-16 inline-block text-lg text-corporate-blue font-semibold hover:text-corporate-gold transition hover:translate-x-1">
                ← Return to All Services
            </Link>
        </div>
    </div>
  );
};

export default ServiceDetail;