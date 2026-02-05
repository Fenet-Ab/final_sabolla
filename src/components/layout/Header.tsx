import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { sabollaLogo } from "../../assets/asset";


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
    const onScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const updateUnderline = () => {
      if (!navRef.current) return;
      const activeLink = navRef.current.querySelector<HTMLAnchorElement>(
        `a[href='${location.pathname}']:not(.bg-\\[\\#308667\\])`
      );
      if (activeLink) {
        setUnderline({ left: activeLink.offsetLeft, width: activeLink.offsetWidth });
      } else {
        setUnderline({ left: 0, width: 0 });
      }
    };
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
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="block z-[90]">
            <img
              src={sabollaLogo}
              alt="Sabolla"
              className={`w-auto object-contain transition-all duration-500
                ${hasScrolled ? "h-14 lg:h-16" : "h-16 lg:h-24"}`}
            />
          </Link>

          {/* DESKTOP NAV (Visible ONLY on lg) */}
          <div className="hidden lg:flex items-center space-x-10 relative" ref={navRef}>
            {navItems.map((item) => (
              item.isPrimary ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-8 py-3 rounded-full bg-[#308667] text-white text-[13px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 py-2
                    ${location.pathname === item.path ? "text-[#308667]" : "text-[#308667] hover:text-[#308667]"}`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <motion.span
              className="absolute bottom-0 h-[2px] bg-[#308667] rounded-full"
              animate={{ left: underline.left, width: underline.width }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* MOBILE TOGGLE (Hamburger to Close Icon) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex lg:hidden flex-col gap-1.5 items-end z-[100] p-2"
          >
            {/* Top Line -> Becomes part of X */}
            <span className={`h-[2px] transition-all duration-500 ${menuOpen ? "w-7 rotate-45 translate-y-2 bg-[#F9F2D6]" : "w-7 bg-[#308667]"}`} />
            {/* Middle Line -> Disappears */}
            <span className={`h-[2px] bg-[#308667] transition-all duration-300 ${menuOpen ? "opacity-0" : "w-5"}`} />
            {/* Bottom Line -> Becomes part of X */}
            <span className={`h-[2px] transition-all duration-500 ${menuOpen ? "w-7 -rotate-45 -translate-y-2 bg-[#F9F2D6]" : "w-6 bg-[#308667]"}`} />
          </button>
        </div>
      </motion.header>

      {/* FANCY SIDE DRAWER MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[81]"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-[#0B1A13] z-[82] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] p-12 pt-40 flex flex-col"
            >
              <div className="flex flex-col space-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-3xl font-black uppercase tracking-tighter transition-all
                        ${location.pathname === item.path ? "text-[#308667]" : "text-[#F9F2D6] hover:text-[#308667]"}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;