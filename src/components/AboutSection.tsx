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
        {/* Animated Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              The Future of Innovation
            </span>
          </h2>

          {/* Animated Subtext */}
          <motion.p
            className="text-lg md:text-xl text-content-muted max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="block font-semibold text-white">
              A high-energy, 12-hour coding marathon where{" "}
              <motion.span
                className="text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                ideas meet execution
              </motion.span>
              , creativity fuels innovation, and{" "}
              <motion.span
                className="text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                YOU get a chance to build something extraordinary!
              </motion.span>{" "}
              💡💻
            </span>
            <motion.span
              className="mt-4 block font-bold text-2xl text-accent"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Then this is YOUR moment! 🌟
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-primary/10 to-secondary/5 p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-content-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
