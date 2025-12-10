import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PartnersShowcase from "../components/partners/PartnersShowcase";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Words used to render the animated tagline in the hero heading

const Home: React.FC = () => {

  return (
    <div className="bg-slate-50">

      {/* ================= HERO ================= */}
<section className="relative min-h-[92vh] flex items-center justify-center text-[#D4AF37] overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')",
    }}
  />
  <div className="absolute inset-0 bg-black/65" />
  <div className="relative z-10 container mx-auto px-6 max-w-6xl text-center">

    <motion.p 
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="text-sm tracking-widest uppercase text-corporate-gold mb-6"
    >
      SABOLLA INTERNATIONAL TRADING PLC
    </motion.p>

    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Your Gateway to Ethiopia’s Market
      </motion.span>
    </h1>

    <motion.p 
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ delay: 0.3 }}
      className="text-lg md:text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
    >
      SABOLLA INTERNATIONAL TRADING PLC connects international businesses with Ethiopia’s
      growing market. With over 20 years of expertise in trade representation, we provide
      comprehensive solutions including advisory services, market insights, sourcing,
      import and export facilitation, and supply chain management.
    </motion.p>

    <motion.p 
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ delay: 0.5 }}
      className="text-lg font-semibold text-corporate-gold mb-12"
    >
      Expert Support. Seamless Operations. Global Connections.
    </motion.p>

    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ delay: 0.7 }}
      className="flex flex-col sm:flex-row gap-6 justify-center"
    >
      <Link 
        to="/services"
        className="bg-corporate-gold text-corporate-blue font-bold py-4 px-12 rounded-full hover:scale-105 hover:shadow-xl transition"
      >
        Explore Our Services
      </Link>

      <Link 
        to="/contact"
        className="border-2 border-[#D4AF37] py-4 px-12 rounded-full hover:bg-white hover:text-corporate-blue transition"
      >
        Talk to an Expert
      </Link>
    </motion.div>

    {/* ================= STATS ================= */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { value: "20+", label: "Years Experience" },
        { value: "100+", label: "International Suppliers" },
        { value: "150+", label: "Successful Shipments" },
        { value: "50+", label: "Product Categories" },
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.9 + i * 0.1 }}
          className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
        >
          <div className="text-4xl font-extrabold text-white mb-2">{stat.value}</div>
          <div className="text-xs uppercase tracking-widest text-gray-200">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* ================= INTRO ================= */}
<section className="relative py-28 bg-white">
  <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-100"></div>

  <div className="relative container mx-auto px-6 max-w-5xl text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-8"
    >
      Who We Are
    </motion.h2>

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-lg text-gray-700 leading-relaxed"
    >
      SABOLLA INTERNATIONAL TRADING PLC is a trusted bridge between international suppliers
      and Ethiopia’s rapidly growing marketplace. Our experienced trade professionals deliver
      market entry strategies, regulatory guidance, product sourcing, logistics coordination,
      and long-term partnership development to ensure business success in Ethiopia’s unique
      trade environment.
    </motion.p>
  </div>
</section>

 {/* ================= WORLD MAP ================= */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6 text-center max-w-6xl">
    <h2 className="text-4xl font-bold text-[#0A1F44] mb-12">
      Our Global Footprint
    </h2>

    <div className="relative w-full">
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        alt="World Map"
        className="w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* ✅ ACCURATE ETHIOPIA PIN */}
      <div
        className="absolute flex flex-col items-center"
        style={{ top: "49%", left: "56%" }}
      >
        {/* Pulse Ring */}
        <div className="absolute w-10 h-10 bg-[#D4AF37]/30 rounded-full animate-ping"></div>

        {/* Solid Pin */}
        <div className="relative w-4 h-4 bg-[#D4AF37] rounded-full shadow-xl border-2 border-white"></div>

        {/* Label */}
        <span className="mt-2 text-xs font-bold text-[#0A1F44] bg-white/90 px-3 py-1 rounded-full shadow">
          Ethiopia
        </span>
      </div>
    </div>

    <p className="mt-8 text-gray-700 text-lg max-w-3xl mx-auto">
      Ethiopia is our operational hub — linking international suppliers to national markets.
    </p>
  </div>
</section>


{/* ================= PARTNERS ================= */}
<section className="relative py-28 bg-linear-to-b from-slate-100 to-white overflow-hidden">
  <div className="relative container mx-auto px-6 max-w-7xl">

    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0A1F44] mb-6">
      Our Trusted Global Partners
    </h2>

    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
      We collaborate with globally recognized manufacturers and technology leaders to deliver premium solutions into Ethiopia.
    </p>

    <PartnersShowcase />

  </div>
</section>


      {/* ================= CTA ================= */}
<section className="relative py-28 text-white text-center overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920')",
    }}
  />
  <div className="absolute inset-0 bg-linear-to-r from-[#0A1F44]/90 via-black/70 to-[#0A1F44]/90"></div>

  <div className="relative z-10 container mx-auto px-6 max-w-5xl">
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-5xl font-extrabold mb-6"
    >
      Ready to Expand into the Ethiopian Market?
    </motion.h3>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <Link
        to="/contact"
        className="inline-block bg-[#D4AF37] text-[#0A1F44] font-bold py-4 px-14 rounded-full hover:scale-105 hover:shadow-xl transition"
      >
        Book a Consultation
      </Link>
    </motion.div>
  </div>
</section>

    </div>
  );
};

export default Home;
