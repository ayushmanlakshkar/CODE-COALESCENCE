import { Clock, Trophy, Users } from "lucide-react";

export const StatsSection = () => {
    const stats = [
      { number: '150+', label: 'Hackers', icon: Users },
      { number: 'INR 30k', label: 'in Prizes', icon: Trophy },
      { number: '12hrs', label: 'of Hacking', icon: Clock },
    ];
    return (
      <section className="relative py-10 overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/5" />
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-gradient-to-br from-black/50 to-black/20 backdrop-blur-xl p-8 rounded-2xl border border-white/10 transform hover:scale-105 transition-all">
                      <stat.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                      <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                        {stat.number}
                      </div>
                      <p className="text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    );
  };
  