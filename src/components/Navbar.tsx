import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({
  scrolled,
  docsLink,
  logo
}: {
  scrolled: boolean;
  docsLink: string;
  logo: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[100vw] mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-16 md:w-20" src={logo} alt="Logo" />
          <span className="font-bold text-lg md:text-xl">CODE COALESCENCE</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden nav:flex items-center gap-8">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#timeline" className="hover:text-primary transition-colors">Timeline</a>
          <a href="#tracks" className="hover:text-primary transition-colors">Tracks</a>
          <a href="#guidelines" className="hover:text-primary transition-colors">Guidelines</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        {/* Register Button */}
        <a href={docsLink}
          className="hidden nav:flex bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
          Register Now
        </a>

        {/* Hamburger Menu Button (Mobile) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav:hidden p-2 rounded-md focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="nav:hidden absolute top-[100%] left-0 w-full bg-surface-dark/90 backdrop-blur-md shadow-lg p-6 flex flex-col items-center gap-4">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#timeline" className="hover:text-primary transition-colors">Timeline</a>
          <a href="#tracks" className="hover:text-primary transition-colors">Tracks</a>
          <a href="#guidelines" className="hover:text-primary transition-colors">Guidelines</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href={docsLink} className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
