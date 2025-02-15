import { Clock, Trophy, Users } from "lucide-react";

export const StatsSection = () => {
    const stats = [
        { number: '150+', label: 'Hackers', icon: Users },
        { number: 'INR 30k', label: 'in Prizes', icon: Trophy },
        { number: '12hrs', label: 'of Hacking', icon: Clock },
    ];
    return (
        <section className="relative pt-16 md:pt-32 overflow-hidden">
            <div className="absolute inset-0 bg-transparent" />
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-gradient-to-br from-surface-dark/50 to-surface-dark/20 backdrop-blur-xl p-8 rounded-2xl border border-content/10 transform hover:scale-105 transition-all">
                            <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                                {stat.number}
                            </div>
                            <p className="text-content-muted">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};
