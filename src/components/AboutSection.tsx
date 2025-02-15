import { Brain, Globe, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const features = [
    { icon: Brain, title: 'Learn & Grow', description: 'Workshops and mentorship from experts.' },
    { icon: Rocket, title: 'Build & Launch', description: 'Transform ideas into prototypes.' },
    { icon: Globe, title: 'Connect & Network', description: 'Meet innovators and mentors.' },
  ];

  return (
    <section id="about" className="pt-12 md:pt-40 relative">
      <div className="absolute inset-0" />
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              The Future of Innovation
            </span>
          </h2>
          <p className="text-lg md:text-xl text-content-muted max-w-3xl mx-auto">
            <span className="font-bold text-white">A high-energy, 12-hour coding marathon {" "}</span>
            where ideas meet execution, creativity fuels innovation, and
            YOU get a chance to build something extraordinary! 💡💻
            <br />
            <br />
            <span className="font-bold text-2xl text-accent">
            Then this is YOUR moment! 🌟
            </span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 0.7 } },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-primary/10 to-secondary/5 p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Icon */}
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-lg md:text-2xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-content-muted"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
