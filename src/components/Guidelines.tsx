import { CheckCircle } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function HackathonGuidelines() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      id="guidelines"
      className="relative bg-gradient-to-b from-surface-dark via-black to-surface-dark text-white pt-16 md:pt-32 px-6 lg:px-24"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-surface-dark/60 backdrop-blur-md z-0 rounded-xl" />

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="flex gap-3 text-3xl md:text-5xl font-bold text-center justify-center items-center mb-5">
          🚀
          <span className="flex gap-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Hackathon Guidelines
          </span>
        </div>
        <p className="text-lg md:text-xl text-content-muted mb-10">
          Follow these rules to ensure a fair and exciting competition!
        </p>

        {/* Guidelines List */}
        <ul className="text-left md:text-lg space-y-6">
          {guidelines.map((guideline, index) => (
            <GuidelineCard key={index} guideline={guideline} index={index} />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

// Guideline Card (Repeats Every Time on Scroll)
interface Guideline {
  point: string;
  subPoints: string[];
}

function GuidelineCard({ guideline, index }: { guideline: Guideline; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <motion.li
      ref={ref}
      key={index}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg"
    >
      <div className="flex items-start gap-4">
        <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
        <span className="text-gray-300 font-semibold">{guideline.point}</span>
      </div>

      {/* Subpoints Animation */}
      {guideline.subPoints.length > 0 && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-2 ml-10 space-y-2 text-gray-400 list-disc md:ml-10"
        >
          {guideline.subPoints.map((subPoint, subIndex) => (
            <li key={subIndex}>{subPoint}</li>
          ))}
        </motion.ul>
      )}
    </motion.li>
  );
}

// Updated Guidelines
const guidelines = [
  {
    point: "Team Composition",
    subPoints: ["Each team must have 6 students, including at least 1 female member.", "Only MITS students can participate."]
  },
  {
    point: "Problem Selection",
    subPoints: ["Choose a problem statement from the official event website."]
  },
  {
    point: "Preliminary Submission",
    subPoints: [
      "Submit a presentation outlining your approach.",
      "Optional: 1-minute video explaining your solution (priority given to video submissions).",
      "Must cover: Problem Definition, Technical Approach, Feasibility, and Societal Impact."
    ]
  },
  {
    point: "Final Presentation",
    subPoints: [
      "Shortlisted teams present on hackathon day.",
      "Include a working prototype or logic demonstrating the solution."
    ]
  }
];
