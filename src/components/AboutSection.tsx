import { Brain, Globe, Rocket } from "lucide-react";

export const AboutSection = () => {
    const features = [
      { icon: Brain, title: 'Learn & Grow', description: 'Workshops and mentorship from experts.' },
      { icon: Rocket, title: 'Build & Launch', description: 'Transform ideas into prototypes.' },
      { icon: Globe, title: 'Connect & Network', description: 'Meet innovators and mentors.' },
    ];
    return (
    //     <section id="about" className="py-32 relative">
    //     <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark/95 to-surface-dark" />
    //     <div className="max-w-7xl mx-auto px-4 relative">
    //       <div className="text-center mb-20">
    //         <h2 className="text-5xl font-bold mb-6">
    //           <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
    //             The Future of Innovation
    //           </span>
    //         </h2>
    //         <p className="text-xl text-content-muted max-w-3xl mx-auto">
    //           Join us for an extraordinary weekend of innovation, collaboration, and breakthrough technologies.
    //         </p>
    //       </div>
    //       <div className="grid md:grid-cols-3 gap-8">
    //         {[
    //           {
    //             icon: Brain,
    //             title: 'Learn & Grow',
    //             description: 'Access workshops, mentorship, and resources from industry experts.'
    //           },
    //           {
    //             icon: Rocket,
    //             title: 'Build & Launch',
    //             description: 'Transform your ideas into working prototypes with cutting-edge tech.'
    //           },
    //           {
    //             icon: Globe,
    //             title: 'Connect & Network',
    //             description: 'Meet fellow innovators, mentors, and potential collaborators.'
    //           }
    //         ].map((feature, index) => (
    //           <div key={index} className="group bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all">
    //             <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
    //               <feature.icon className="w-8 h-8 text-primary" />
    //             </div>
    //             <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
    //             <p className="text-content-muted">{feature.description}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
      <section id="about" className="pt-40 relative">
              <div className="absolute inset-0" />
              <div className="max-w-7xl mx-auto px-4 relative">
                <div className="text-center mb-20">
                  <h2 className="text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                      The Future of Innovation
                    </span>
                  </h2>
                  <p className="text-xl text-content-muted max-w-3xl mx-auto">
                  A high-energy, 12-hour coding marathon where ideas meet execution, creativity fuels innovation, and YOU get a chance to build something extraordinary! 💡💻
      Then this is YOUR moment! 🌟
      
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="group bg-gradient-to-br from-primary/10 to-secondary/5 p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                      <p className="text-content-muted">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    );
  };