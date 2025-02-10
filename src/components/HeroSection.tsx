import React from 'react'
import logo from '../assets/mits.png'

interface HeroSectionProps {
  docsLink: string;
}

function HeroSection({ docsLink }: HeroSectionProps) {
  return (
    <header className="relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-8 relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl" />
            <img className='w-32 md:w-40' src={logo}/>
          </div>
          <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              CODE COALESCENCE 2k25
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          MITS DU presents its FIRST-EVER official hackathon
          </p>
          <div className="flex sm:hidden gap-4 justify-center">
          <a href={docsLink}
             className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] relative">
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              Register Now
            </a>
            {/* <button className="px-8 py-4 rounded-xl font-semibold text-lg border border-cyan-500/30 hover:bg-cyan-500/10 transition-all">
              Learn More
            </button> */}
          </div>
          {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </div> */}
        </div>
      </header>
  )
}

export default HeroSection
