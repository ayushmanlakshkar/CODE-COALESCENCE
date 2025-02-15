import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({
  scrolled,
  docsLink,
  logo,
}: {
  scrolled: boolean;
  docsLink: string;
  logo: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll with offset
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      console.log(target);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if(window.innerWidth < 768) {
        setTimeout(() => {
          window.scrollBy({ top: -45, behavior: "smooth" });
        }, 800);
      }
    }
    setMenuOpen(false); // Close menu on mobile
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-surface-dark/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[100vw] mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-16 md:w-20" src={logo} alt="Logo" />
          <span className="font-bold text-lg md:text-xl">CODE COALESCENCE</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden nav:flex items-center gap-8">
          {["about", "timeline", "tracks", "guidelines", "faq"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleSmoothScroll(e, `#${item}`)}
              className="hover:text-primary transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Register Button */}
        <a
          href={docsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden nav:flex bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
        >
          Register Now
        </a>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav:hidden p-2 rounded-md focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="nav:hidden absolute top-[100%] left-0 w-full bg-surface-dark/90 backdrop-blur-md shadow-lg p-6 flex flex-col items-center gap-4"
          >
            {["about", "timeline", "tracks", "guidelines", "faq"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleSmoothScroll(e, `#${item}`)}
                className="hover:text-primary transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={docsLink}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Register Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
