import { ArrowRight, Bolt, Book, HeartPulse, Leaf, Plane, Shield, Truck, Wheat } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="tracks" className="pt-16 md:pt-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Innovation Tracks
            </span>
          </h2>
          <p className="text-lg md:text-xl text-content-muted max-w-3xl mx-auto">
            Choose your path and make an impact in these cutting-edge domains
          </p>
        </motion.div>

        {/* Tracks Grid */}
        <motion.div
          className="flex flex-wrap gap-8 justify-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.4 } },
          }}
        >
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              className="group relative w-96 flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="relative bg-gradient-to-br from-surface-light/100 to-surface-dark/80 p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all transform hover:scale-105">
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <track.icon className="w-10 h-10 text-primary" />
                </motion.div>
                <motion.h3
                  className="text-lg md:text-2xl font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {track.title}
                </motion.h3>
                <motion.p
                  className="text-content-muted"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {track.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Problem Statements Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}

export default TracksSection;

// import { ArrowRight, Bolt, Book, HeartPulse, Leaf, Plane, Shield, Truck, Wheat } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// function TracksSection() {
//   const tracks = [
//     {
//       icon: Wheat,
//       title: 'Agriculture, FoodTech & Rural Development',
//       description: 'Innovate solutions to enhance agriculture, food production, and rural sustainability.'
//     },
//     {
//       icon: Shield,
//       title: 'Blockchain & Cybersecurity',
//       description: 'Build the future of decentralized applications and secure digital systems.'
//     },
//     {
//       icon: Leaf,
//       title: 'Clean & Green Technology',
//       description: 'Develop eco-friendly solutions to tackle environmental challenges.'
//     },
//     {
//       icon: HeartPulse,
//       title: 'MedTech / BioTech / HealthTech',
//       description: 'Create cutting-edge healthcare solutions for better accessibility and quality.'
//     },
//     {
//       icon: Bolt,
//       title: 'Renewable / Sustainable Energy',
//       description: 'Drive innovation in clean energy and sustainable power solutions.'
//     },
//     {
//       icon: Book,
//       title: 'Smart Education',
//       description: 'Revolutionize learning experiences through technology and digital education tools.'
//     },
//     {
//       icon: Truck,
//       title: 'Transportation & Logistics',
//       description: 'Enhance mobility, supply chain efficiency, and smart transport systems.'
//     },
//     {
//       icon: Plane,
//       title: 'Travel & Tourism',
//       description: 'Redefine travel experiences with tech-driven solutions for the tourism industry.'
//     }
//   ];

//   const problemStatements = "https://web.mitsgwalior.in/images/2025/feb/Problem%20Statements-CC-2025.pdf";

//   const { ref, inView } = useInView({
//     triggerOnce: true, // Trigger once when the element is in view
//     threshold: 1, // Trigger when 50% of the element is in view
//   });

//   return (
//     <section id="tracks" className="pt-16 md:pt-32 relative">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Entire Section Motion Div */}
//         <motion.div
//           className="text-center mb-20"
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-3xl md:text-5xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
//               Innovation Tracks
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl text-content-muted max-w-3xl mx-auto">
//             Choose your path and make an impact in these cutting-edge domains
//           </p>
//         </motion.div>

//         {/* Tracks Grid */}
//         <motion.div
//           className="flex flex-wrap gap-8 justify-center"
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.7 } },
//           }}
//         >
//           {tracks.map((track, index) => (
//             <motion.div
//               key={index}
//               className="group relative w-96 flex"
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.7, delay: index * 0.2 }}
//             >
//               <div className="relative bg-gradient-to-br from-surface-light/100 to-surface-dark/80 p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all transform hover:scale-105">
//                 <motion.div
//                   className="mb-6"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={inView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <track.icon className="w-10 h-10 text-primary" />
//                 </motion.div>
//                 <motion.h3
//                   className="text-lg md:text-2xl font-semibold mb-4"
//                   initial={{ opacity: 0 }}
//                   animate={inView ? { opacity: 1 } : {}}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {track.title}
//                 </motion.h3>
//                 <motion.p
//                   className="text-content-muted"
//                   initial={{ opacity: 0 }}
//                   animate={inView ? { opacity: 1 } : {}}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {track.description}
//                 </motion.p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View Problem Statements Button */}
//         <motion.div
//           className="flex justify-center mt-12"
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.7 }}
//         >
//           <a
//             href={problemStatements}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-3 flex gap-3 justify-center items-center cursor-pointer text-white font-semibold text-lg 
//                bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-lg 
//                hover:shadow-xl hover:scale-105 transition-all duration-300"
//           >
//             View Problem Statements <ArrowRight className="w-6 h-6" />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default TracksSection;
