import { Brain, Cpu, Heart, Leaf, Shield, Zap } from 'lucide-react'
import React from 'react'

function TracksSection() {
  return (
    <section id="tracks" className="py-32 relative bg-gradient-to-b from-black to-slate-900">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Innovation Tracks
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Choose your path and make an impact in these cutting-edge domains
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Brain,
            title: 'AI/ML',
            description: 'Push the boundaries of artificial intelligence and machine learning.'
          },
          {
            icon: Shield,
            title: 'Web3',
            description: 'Build the future of decentralized applications and blockchain tech.'
          },
          {
            icon: Cpu,
            title: 'FinTech',
            description: 'Revolutionize financial services with innovative solutions.'
          },
          {
            icon: Heart,
            title: 'Healthcare',
            description: 'Create solutions that improve healthcare accessibility and quality.'
          },
          {
            icon: Leaf,
            title: 'Sustainability',
            description: 'Develop tech solutions for environmental challenges.'
          },
          {
            icon: Zap,
            title: 'Open Innovation',
            description: 'Choose your own path and surprise us with your creativity.'
          }
        ].map((track, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
              <track.icon className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{track.title}</h3>
              <p className="text-gray-400">{track.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default TracksSection
