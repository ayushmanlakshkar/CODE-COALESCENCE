import { Brain, Globe, Rocket } from "lucide-react";

export const AboutSection = () => {
    const features = [
      { icon: Brain, title: 'Learn & Grow', description: 'Workshops and mentorship from experts.' },
      { icon: Rocket, title: 'Build & Launch', description: 'Transform ideas into prototypes.' },
      { icon: Globe, title: 'Connect & Network', description: 'Meet innovators and mentors.' },
    ];
    return (
      <section id="about" className="py-32 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
              <div className="max-w-7xl mx-auto px-4 relative">
                <div className="text-center mb-20">
                  <h2 className="text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                      The Future of Innovation
                    </span>
                  </h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  A high-energy, 12-hour coding marathon where ideas meet execution, creativity fuels innovation, and YOU get a chance to build something extraordinary! 💡💻
      Then this is YOUR moment! 🌟
      
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="group bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    );
  };