import React from 'react'

function SponsorSection() {
  return (
    <section id="sponsors" className="py-32 relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Our Sponsors
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Backed by industry leaders who believe in innovation
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
            <div className="aspect-[3/2] rounded-lg bg-gradient-to-br from-gray-800 to-gray-900" />
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default SponsorSection
