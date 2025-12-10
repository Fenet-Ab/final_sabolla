// src/pages/ProductsIndex.tsx
import React from 'react';
import { PRODUCT_CATEGORIES } from '../data/mockData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- CUSTOM VARIANTS ---
// Updated variants for a more pronounced lift and visual change on hover
const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  hover: { 
    y: -8, // Lift the card higher
    scale: 1.03, 
    // Stronger shadow for depth on hover
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
  },
};

// Assuming the PRODUCT_CATEGORIES mockData has a property like 'imageUrl' 
// or a simple 'iconName' to differentiate them visually. 
// For this example, we will use a placeholder function for the image style.
const getCategoryImageStyle = (index: number) => {
    // This is a placeholder. In a real app, you'd use a dynamic import or static URL.
    // You would replace the background property with actual image URLs:
    // For now, using subtle patterns/colors to demonstrate the effect:
    const styles = [
        { backgroundColor: '#0A1F44', backgroundImage: 'linear-gradient(135deg, #0A1F44 0%, #1a3a64 100%)' },
        { backgroundColor: '#F4C430', backgroundImage: 'linear-gradient(135deg, #F4C430 0%, #C49F27 100%)' },
        { backgroundColor: '#1a3a64', backgroundImage: 'linear-gradient(135deg, #1a3a64 0%, #30588c 100%)' },
        { backgroundColor: '#C49F27', backgroundImage: 'linear-gradient(135deg, #C49F27 0%, #F4C430 100%)' },
    ];
    return styles[index % styles.length];
};

const ProductsIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ================= HERO/HEADER SECTION ================= */}
      <section className="bg-slate-50 border-b border-slate-200 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-[#0A1F44] mb-4 tracking-tighter"
          >
            Explore Our <span className="text-corporate-gold">Commodities</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-700 max-w-3xl"
          >
            We specialize in connecting global suppliers of high-value, essential commodities with the thriving Ethiopian market, ensuring quality and compliance.
          </motion.p>
        </div>
      </section>
      
      {/* ================= PRODUCT GRID ================= */}
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCT_CATEGORIES.map((product, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              variants={cardVariants}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="group relative border border-slate-200 rounded-2xl shadow-xl h-full flex flex-col overflow-hidden cursor-pointer transition-all duration-300 bg-white hover:border-corporate-gold/50"
                whileHover="hover"
                variants={cardVariants}
              >
                
                {/* Visual Header/Image Placeholder */}
                <div 
                  className="h-36 rounded-t-2xl flex items-center justify-center p-6 text-white"
                  style={getCategoryImageStyle(index)}
                >
                    <span className="text-3xl font-bold tracking-wider opacity-80 uppercase">
                        {product.name.split(' ')[0]}
                    </span>
                </div>

                <div className="p-8 flex flex-col justify-between grow">
                    <h2 className="text-2xl font-bold text-[#0A1F44] mb-3 group-hover:text-corporate-blue transition-colors duration-300">
                      {product.name}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 grow">{product.description}</p>
                    
                    <Link 
                        to={`/products/${product.slug}`} 
                        className="inline-flex items-center text-lg font-semibold text-corporate-gold hover:text-corporate-blue transition-colors duration-300 group-hover:translate-x-1"
                    >
                        Explore Line
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* ================= CALL TO ACTION - Bottom Strip ================= */}
      <section className="bg-corporate-blue mt-12 py-10">
        <div className="container mx-auto px-6 max-w-7xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
                Need a Custom Sourcing Solution?
            </h3>
            <p className="text-md text-[#0A1F44] mb-6">
                Our global network is ready to meet your specific trade requirements.
            </p>
                  <motion.a
                          href="/contact"
                          whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212,175,55,0.8)' }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-block px-12 py-5 text-lg md:text-xl font-bold bg-corporate-gold text-[#D4AF37] rounded-full transition-all duration-300 uppercase tracking-wider shadow-lg hover:brightness-110 hover:shadow-2xl"
                        >
                         Get a Qoute
                        </motion.a>
        </div>
      </section>
    </div>
  );
};

export default ProductsIndex;