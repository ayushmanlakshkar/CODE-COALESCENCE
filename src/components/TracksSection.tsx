import { Brain, Cpu, Heart, Leaf, Shield, Zap } from 'lucide-react'
import React from 'react'

function TracksSection() {
  const tracks = [
    {
      icon: Brain,
      title: 'AI/ML',
      description: 'Push the boundaries of artificial intelligence and machine learning.'
    },
    {
      icon: Shield,
      title: 'Blockchain & Cybersecurity',
      description: 'Build the future of decentralized applications and blockchain tech.'
    },
    {
      icon: Cpu,
      title: 'FinTech',
      description: 'Revolutionize financial services with innovative solutions.'
    },
    {
      icon: Heart,
      title: 'MedTech / BioTech / HealthTech',
      description: 'Create solutions that improve healthcare accessibility and quality.'
    },
    {
      icon: Leaf,
      title: 'Clean & Green Technology',
      description: 'Develop tech solutions for environmental challenges.'
    },
    {
      icon: Zap,
      title: 'Open Innovation',
      description: 'Choose your own path and surprise us with your creativity.'
    }
  ]
  return (
    <section id="tracks" className="py-32 relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Innovation Tracks
          </span>
        </h2>
        <p className="text-xl text-content-muted max-w-3xl mx-auto">
          Choose your path and make an impact in these cutting-edge domains
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="relative bg-gradient-to-br from-surface-light to-surface-dark p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all">
              <track.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{track.title}</h3>
              <p className="text-content-muted">{track.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default TracksSection
