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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[100vw] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className='w-16 md:w-20' src={logo} />
            <span className="font-bold text-lg md:text-xl">CODE COALESCENCE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#timeline" className="hover:text-primary transition-colors">Timeline</a>
            {/* <a href="#tracks" className="hover:text-primary transition-colors">Tracks</a> */}
            {/* <a href="#sponsors" className="hover:text-primary transition-colors">Sponsors</a> */}
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>
          <a href={docsLink}
            className="hidden sm:flex bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
            Register Now
          </a>
        </div>
      </nav>
    //   <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
    //   <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
    //     <div className="flex items-center gap-2">
    //       <Code2 className="w-8 h-8 text-primary" />
    //       <span className="font-bold text-xl">InnovateCon</span>
    //     </div>
    //     <div className="hidden md:flex items-center gap-8">
    //       <a href="#about" className="hover:text-primary transition-colors">About</a>
    //       <a href="#tracks" className="hover:text-primary transition-colors">Tracks</a>
    //       <a href="#sponsors" className="hover:text-primary transition-colors">Sponsors</a>
    //       <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
    //     </div>
    //     <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
    //       Register Now
    //     </button>
    //   </div>
    // </nav>
  )
}

export default Navbar
