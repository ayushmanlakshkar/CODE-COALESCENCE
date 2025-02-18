import { Clock, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";

export const StatsSection = () => {
    const stats = [
      { number: "150+", label: "Hackers", icon: Users },
      { number: "INR 30k", label: "Prize Pool", icon: Trophy },
      { number: "12hrs", label: "of Hacking", icon: Clock },
    ];

    return (
        <section
            id="stats-section"
            className="relative pt-16 md:pt-16 overflow-hidden"
        >
            <div className="absolute inset-0 bg-transparent" />
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="bg-gradient-to-br from-surface-dark/50 to-surface-dark/20 backdrop-blur-xl p-8 rounded-2xl border border-content/20 transform hover:scale-105 transition-all"
                        >
                            <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                            <motion.div
                                className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                {stat.number}
                            </motion.div>
                            <p className="text-content-muted">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
