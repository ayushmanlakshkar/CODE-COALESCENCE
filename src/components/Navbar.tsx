import React from 'react'

function Navbar({
    scrolled,
    docsLink,
    logo
    }: {
    scrolled: boolean;
    docsLink: string;
    logo: string;
}) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[100vw] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className='w-16 md:w-20' src={logo} />
            <span className="font-bold text-lg md:text-xl">CODE COALESCENCE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#timeline" className="hover:text-cyan-400 transition-colors">Timeline</a>
            {/* <a href="#tracks" className="hover:text-cyan-400 transition-colors">Tracks</a> */}
            {/* <a href="#sponsors" className="hover:text-cyan-400 transition-colors">Sponsors</a> */}
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          </div>
          <a href={docsLink}
            className="hidden sm:flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
            Register Now
          </a>
        </div>
      </nav>
  )
}

export default Navbar
