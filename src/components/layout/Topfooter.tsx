
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Topfooter = () => {
    return (
        <section className="relative py-28 text-white text-center overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920')",
                }}
            />
            <div className="absolute inset-0 bg-[#09140F]/80" />

            <div className="relative z-10 container mx-auto px-6 max-w-5xl">
                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-extrabold mb-8 text-white tracking-tight"
                >
                    Ready to Expand into the <br /> <span className="text-[#308667]">Ethiopian Market?</span>
                </motion.h3>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(47, 148, 111, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-12 py-5 text-sm font-black bg-[#122C21] text-white rounded-full transition-all duration-300 uppercase tracking-[0.2em] shadow-lg hover:bg-[#308667] hover:text-white"
                        >
                            Contact Us
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Topfooter