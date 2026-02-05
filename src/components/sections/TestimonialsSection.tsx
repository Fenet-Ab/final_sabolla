import { type JSX } from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ASI, rosenbauer, sabollaLogo, SACCON } from '../../assets/asset';


interface Testimonial {
    id: number;
    name: string;
    title: string;
    avatarUrl: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Rosenbauer',
        title: 'Klaus Hörschläger, Regional Vice President Sales, Sales Region Middle East and Africa',
        avatarUrl: rosenbauer,
        quote:
            'It has been a pleasure collaborating with Sabolla International Trading since our partnership began in 2007. Together, we have successfully delivered several fire engines to Ethiopian aviation authorities and the Ministry of Urban Development. Throughout every project, Sabolla has demonstrated exceptional reliability and a strong commitment to achieving the best outcomes.'
    },
    {
        id: 2,
        name: 'Saccon Gomme S.P.A.',
        title: 'Ennio Saccon, Legal Representative',
        avatarUrl: SACCON,
        quote:
            'Our collaboration with the Sabolla International Trading team began in 2016, and over the past nine to ten years, we have built a strong and productive working relationship. Through this partnership, we successfully executed major supply projects in 2019 and 2020. Saccon Gomme S.P.A. is a leading company in the tire sector, specializing in worldwide import and export.'
    },
    {
        id: 3,
        name: 'ASI (EUROPE) Ltd.',
        title: 'Laurent Toledano, Managing Director',
        avatarUrl: ASI,
        quote:
            'Working with Sabolla International Trading over the past three years has significantly strengthened our business and enabled us to establish a solid presence in the Ethiopian market. Their support has been particularly valuable in managing tender submissions, navigating the online tendering system, arranging site visits, and acting as an effective liaison with customers.'
    },
    {
        id: 4,
        name: 'Yiwu Foreal Import & Export Co., Ltd.',
        title: 'Hou Fu, Sales Manager',
        avatarUrl: sabollaLogo,
        quote:
            'Yiwu Foreal Import & Export Co., Ltd. has worked closely with Sabolla International Trading for over five years. During this period, Sabolla has been a reliable and committed partner, supporting the supply and distribution of key products. Their strong understanding of the local market, professionalism in procurement processes, and consistent follow-up have played a vital role in our success.'
    },
];

const TestimonialsSection = (): JSX.Element => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const slideVariants: Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    };

    return (
        <section className="relative py-16 bg-[#F9F2D6] overflow-hidden font-['Montserrat'] border-t border-black/5">
            {/* Background Watermark - Smaller and less intrusive */}
            <div className="absolute top-10 right-0 text-[6rem] font-black text-[#0B1A13]/[0.02] select-none pointer-events-none tracking-tighter leading-none">
                VOICE
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Side: Compact Header */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-2"
                        >
                            <div className="h-[1px] w-8 bg-[#308667]" />
                            <span className="text-xs font-black text-[#308667] uppercase tracking-[0.3em]">Testimonials</span>
                        </motion.div>
                        <h2 className="text-5xl lg:text-7xl font-black text-[#0B1A13] uppercase tracking-tighter leading-none mb-6">
                            Global <br /> <span className="text-[#308667]">Perspectives</span>
                        </h2>
                        <p className="text-sm md:text-base text-[#0B1A13]/60 max-w-sm font-medium leading-relaxed mb-8">
                            Trusted by industry leaders to engineer sustainable growth and navigate complex market entries within the Ethiopian economic landscape.
                        </p>

                        {/* Compact Navigation Controls */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                className="p-3 rounded-full border border-[#0B1A13]/10 text-[#0B1A13] hover:bg-[#0B1A13] hover:text-white transition-all duration-300"
                            >
                                <FaChevronLeft size={12} />
                            </button>
                            <button
                                onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                className="p-3 rounded-full border border-[#0B1A13]/10 text-[#0B1A13] hover:bg-[#0B1A13] hover:text-white transition-all duration-300"
                            >
                                <FaChevronRight size={12} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side: The Compact Testimonial Card */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="bg-[#0B1A13] rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden"
                            >
                                {/* Decorative quote icon - smaller */}
                                <FaQuoteLeft className="text-3xl text-[#308667]/20 mb-6" />

                                <p className="text-[#F9F2D6] text-sm md:text-base mb-8 font-medium leading-relaxed italic relative z-10">
                                    "{testimonials[currentIndex].quote}"
                                </p>

                                <div className="flex items-center justify-between relative z-10 pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#308667] border border-[#308667]/30 flex items-center justify-center p-1">
                                            <img
                                                className="w-full h-full object-contain"
                                                src={testimonials[currentIndex].avatarUrl}
                                                alt={testimonials[currentIndex].name}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#F9F2D6] uppercase tracking-wide text-sm">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-[#308667] text-[11px] font-bold uppercase tracking-[0.1em] mt-1 max-w-[250px]">
                                                {testimonials[currentIndex].title}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Indicator inside the card */}
                                    <div className="hidden md:flex gap-1.5">
                                        {testimonials.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`h-1 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-5 bg-[#308667]' : 'w-1.5 bg-white/10'}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Subtle background gradient */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-[#308667]/5 blur-[60px] rounded-full -mr-10 -mt-10" />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;