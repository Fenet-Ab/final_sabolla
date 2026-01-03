import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SabollaLogo from "../../assets/logo/sabolla_logo.png";

// Consolidated nav items
const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Partners", path: "/partners" },
  { name: "Contact", path: "/contact", isPrimary: true },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const updateUnderline = () => {
      if (!navRef.current) return;
      // Select only simple links, exclude the primary button style
      const activeLink = navRef.current.querySelector<HTMLAnchorElement>(
        `a[href='${location.pathname}']:not(.bg-\\[\\#308667\\])`
      );
      if (activeLink) {
        setUnderline({ left: activeLink.offsetLeft, width: activeLink.offsetWidth });
      } else {
        setUnderline({ left: 0, width: 0 });
      }
    };
    // Small delay to ensure layout is ready
    const timeout = setTimeout(updateUnderline, 100);
    window.addEventListener('resize', updateUnderline);
    return () => {
      window.removeEventListener('resize', updateUnderline);
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 z-[80] w-full font-['Montserrat'] transition-all duration-500
          ${hasScrolled
            ? "bg-[#0B1A13]/95 backdrop-blur-md py-3 shadow-2xl"
            : "bg-transparent py-4 lg:py-6"}`}
      >
        <div className="container mx-auto px-6 max-w-7xl relative flex items-center justify-between">

          {/* LOGO (Left) */}
          <Link to="/" className="block z-50">
            <img
              src={SabollaLogo}
              alt="Sabolla"
              className={`w-auto object-contain transition-all duration-500
                ${hasScrolled ? "h-16 lg:h-20" : "h-20 lg:h-28"}`}
            />
          </Link>

          {/* DESKTOP NAV (Right) */}
          <div className="hidden lg:flex items-center space-x-10 relative" ref={navRef}>
            {navItems.map((item) => (
              item.isPrimary ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-8 py-3 rounded-full bg-[#308667] text-white text-[13px] font-black uppercase tracking-widest hover:bg-[#F9F2D6] hover:text-[#0B1A13] transition-all shadow-lg active:scale-95 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 py-2 whitespace-nowrap
                    ${location.pathname === item.path ? "text-[#165940]" : "text-[#39ad83] hover:text-[#1f6048]"}`}
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* Animated Underline */}
            <motion.span
              className="absolute bottom-0 h-[2px] bg-[#308667] rounded-full"
              animate={{ left: underline.left, width: underline.width }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* MOBILE TOGGLE (Right) */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex lg:hidden items-center gap-3 z-50">
            <span className="text-[10px] font-black text-[#F9F2D6] uppercase tracking-[0.3em] opacity-60">Menu</span>
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <span className={`h-[2px] bg-[#F9F2D6] transition-all duration-500 ${menuOpen ? "w-6 rotate-45 translate-y-2 bg-[#308667]" : "w-6"}`} />
              <span className={`h-[2px] bg-[#F9F2D6] transition-all duration-500 ${menuOpen ? "opacity-0" : "w-4"}`} />
              <span className={`h-[2px] bg-[#F9F2D6] transition-all duration-500 ${menuOpen ? "w-6 -rotate-45 -translate-y-2 bg-[#308667]" : "w-5"}`} />
            </div>
          </button>

        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-[75] bg-[#0B1A13] flex flex-col p-8 pt-40"
          >
            <div className="flex flex-col space-y-6 relative z-10 max-w-7xl mx-auto w-full px-6">
              {navItems.map((item, index) => (
                <motion.div key={item.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-5xl font-black uppercase tracking-tighter transition-all
                      ${location.pathname === item.path ? "text-[#308667]" : "text-[#F9F2D6] hover:text-[#308667]"}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;