import { ArrowRight, Bolt, Book, HeartPulse, Leaf, Plane, Shield, Truck, Wheat } from 'lucide-react';

function TracksSection() {
  const tracks = [
    {
      icon: Wheat,
      title: 'Agriculture, FoodTech & Rural Development',
      description: 'Innovate solutions to enhance agriculture, food production, and rural sustainability.'
    },
    {
      icon: Shield,
      title: 'Blockchain & Cybersecurity',
      description: 'Build the future of decentralized applications and secure digital systems.'
    },
    {
      icon: Leaf,
      title: 'Clean & Green Technology',
      description: 'Develop eco-friendly solutions to tackle environmental challenges.'
    },
    {
      icon: HeartPulse,
      title: 'MedTech / BioTech / HealthTech',
      description: 'Create cutting-edge healthcare solutions for better accessibility and quality.'
    },
    {
      icon: Bolt,
      title: 'Renewable / Sustainable Energy',
      description: 'Drive innovation in clean energy and sustainable power solutions.'
    },
    {
      icon: Book,
      title: 'Smart Education',
      description: 'Revolutionize learning experiences through technology and digital education tools.'
    },
    {
      icon: Truck,
      title: 'Transportation & Logistics',
      description: 'Enhance mobility, supply chain efficiency, and smart transport systems.'
    },
    {
      icon: Plane,
      title: 'Travel & Tourism',
      description: 'Redefine travel experiences with tech-driven solutions for the tourism industry.'
    }
  ];

  const problemStatements = "https://web.mitsgwalior.in/images/2025/feb/Problem%20Statements-CC-2025.pdf";

  return (
    <section id="tracks" className="pt-32 pb-10 relative">
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

        <div className="flex flex-wrap gap-8 justify-center">
          {tracks.map((track, index) => (
            <div key={index} className="group relative w-96 flex">
              <div className="relative bg-gradient-to-br from-surface-light/100 to-surface-dark/80 p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all transform hover:scale-105">
                <track.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{track.title}</h3>
                <p className="text-content-muted">{track.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View Problem Statements Button */}
        <div className="flex justify-center mt-12">
          <a
            href={problemStatements}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 flex gap-3 justify-center items-center cursor-pointer text-white font-semibold text-lg 
               bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-lg 
               hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View Problem Statements <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default TracksSection;
