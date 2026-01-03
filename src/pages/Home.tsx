import * as React from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaHandshake, 
  FaFileContract, 
  FaHistory, 
  FaTruckLoading, 
  FaArrowRight
} from "react-icons/fa";

import GlobalFootprint from "../components/sections/GlobalFootprint";
import PartnersShowcase from "../components/partners/PartnersShowcase";
import { PARTNERS } from "../data/partners";
import { LOCAL_PARTNERS } from "../data/localPartners";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import Topfooter from '../components/layout/Topfooter';
import { award } from '../assets/asset';

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);
  return <span ref={ref}>{count}</span>;
};

const Home: React.FC = () => {
  const dynamicTexts = ["Gateway to Growth", "Trade Representation", "Market Solutions", "Strategic Pathway"];
  const [textIndex, setTextIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setTextIndex((prev) => (prev + 1) % dynamicTexts.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden font-['Montserrat'] bg-white text-[#0B1A13]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
        {/* Background Large Text - Responsive sizing and increased visibility */}
        <div className="absolute top-24 left-4 md:left-10 text-[6rem] md:text-[12rem] font-black text-gray-100/80 select-none z-0 tracking-tighter opacity-100">
          SABOLLA
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            
            {/* LEFT SIDE */}
            <div className="w-full lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-7xl lg:text-5xl font-black leading-[1.1] tracking-tighter uppercase mb-6">
                  Your <br />
                  <div className="relative inline-block w-full min-h-[1.2em]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={dynamicTexts[textIndex]}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-[#308667] absolute left-0 whitespace-nowrap"
                      >
                        {dynamicTexts[textIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <br /> to Ethiopia.
                </h1>

                <p className="text-lg md:text-xl text-[#0B1A13]/70 max-w-xl font-medium leading-relaxed mb-8">
                  Navigating the complexities of East African trade. We bridge the gap between world-class technology and Ethiopia's industrial landscape.
                </p>

                <div className="flex flex-wrap gap-4 md:gap-6">
                  <Link to="/services" className="group flex items-center gap-4 bg-[#0B1A13] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-[#308667] transition-all duration-300 shadow-xl">
                    Our Services
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link to="/contact" className="group flex items-center gap-4 border-2 border-[#0B1A13] text-[#0B1A13] px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-[#0B1A13] hover:text-white transition-all duration-300">
                    Get in Touch
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: 3D Globe */}
            <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[400px] lg:h-[700px]">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="relative w-72 h-72 lg:w-[480px] lg:h-[480px] bg-gradient-to-br from-white to-gray-50 rounded-full shadow-[0_50px_100px_rgba(48,134,103,0.12)] flex items-center justify-center border border-gray-100">
                   {/* Brand "S" - Visibility Increased */}
                   <span className="text-[10rem] lg:text-[18rem] font-black text-[#308667]/20 absolute z-10 select-none">S</span>
                   
                   <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain" />
                   
                   {/* Spinning Ring */}
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[95%] h-[95%] border-[10px] lg:border-[20px] border-[#308667] rounded-full border-t-transparent opacity-80" 
                   />
                </div>

                {/* Floating Elements */}
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 right-10 w-10 h-10 bg-[#308667]/20 rounded-full blur-sm" />
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-20 left-0 w-12 h-12 bg-[#308667] rounded-full shadow-lg" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

{/* ================= MILESTONES (Exact Bento Style) ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Main Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* 1. LARGE AWARD CARD (Dark Forest Green) */}
            <div className="md:col-span-7 bg-[#0B1A13] rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden shadow-lg border border-white/5 group">
              {/* Trophy Watermark Icon */}
              <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg width="180" height="180" viewBox="0 0 24 24" fill="white"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 0 0 3.61-1.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 10V7h2v3c0 1.21-.88 2.22-2 2.39V10m14 2.39c-1.12-.17-2-1.18-2-2.39V7h2v3z"/></svg>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="w-12 h-12 rounded-2xl bg-[#308667] flex items-center justify-center mb-10 shadow-[0_0_20px_rgba(48,134,103,0.4)]">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 16H6V4h12zM8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z"/></svg>
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight mb-6">
                  Winner of <br/> 
                  <span className="text-[#308667]">Kalmar's 2013</span> <br/>
                  Global Award
                </h4>
                <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                  Recognized for unparalleled operational excellence and strategic market growth within the East African heavy machinery sector.
                </p>
              </div>
            </div>

            {/* 2. PARTNERS CARD (Solid Emerald Green) */}
            <div className="md:col-span-5 bg-[#308667] rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg group">
               <div className="absolute top-10 opacity-20">
                 <FaHandshake size={80} className="text-white" />
               </div>
               <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-baseline gap-2">
                    <span className="text-8xl font-black text-white tracking-tighter"><Counter value={100} /></span>
                    <span className="text-6xl font-black text-white/40">+</span>
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-white mt-4">Global Industrial Partners</p>
                  <div className="w-full h-[1px] bg-white/20 my-8" />
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Forging Links Worldwide</p>
               </div>
            </div>

            {/* 3. TENDERS (White Card) */}
            <div className="md:col-span-4 bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-sm border border-gray-100 group">
                <FaFileContract size={32} className="text-[#0B1A13] mb-6 opacity-80 group-hover:scale-110 transition-transform" />
                <div className="flex items-center gap-1">
                  <span className="text-5xl font-black text-[#0B1A13] tracking-tighter"><Counter value={500} /></span>
                  <span className="text-4xl font-black text-[#308667]">+</span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-4">Active Tenders</p>
            </div>

            {/* 4. EXPERIENCE (Cream Card) */}
            <div className="md:col-span-4 bg-[#F9F6E5] rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-sm group">
                <FaHistory size={32} className="text-[#0B1A13] mb-6 opacity-80 group-hover:rotate-12 transition-transform" />
                <div className="flex items-center gap-1">
                  <span className="text-5xl font-black text-[#0B1A13] tracking-tighter"><Counter value={20} /></span>
                  <span className="text-4xl font-black text-[#308667]">+</span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-4">Years Experience</p>
            </div>

            {/* 5. LOGISTICS (Dark Forest Green Small) */}
            <div className="md:col-span-4 bg-[#0B1A13] rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-lg group border border-white/5">
                <FaTruckLoading size={32} className="text-[#308667] mb-6 group-hover:translate-x-2 transition-transform" />
                <div className="flex items-center gap-1">
                  <span className="text-5xl font-black text-white tracking-tighter"><Counter value={150} /></span>
                  <span className="text-4xl font-black text-[#308667]">+</span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-4">Shipments Logged</p>
            </div>

          </div>
        </div>
      </section>

      <GlobalFootprint />
      
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


      <TestimonialsSection />
      <Topfooter />
    </div>
  );
};

export default Home;