import logo from '../assets/logo2.png';
import { TypeAnimation } from 'react-type-animation';

interface HeroSectionProps {
    docsLink: string;
}

function HeroSection({ docsLink }: HeroSectionProps) {
    return (
        <header className="relative flex items-center justify-center overflow-hidden pt-20">
            {/* <div className="absolute flex justify-center inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark/20 to-surface-dark z-10" />
                <img
                    src={background}
                    alt="Background"
                    className="w-full h-auto object-center"
                />
            </div> */}

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div className="inline-block relative">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl" />
                    <img className='w-32 md:w-40 mix-blend-overlay' src={logo} alt="Logo" />
                </div>
                <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r text-zinc-300 bg-clip-text">
                        CODE COALESCENCE 2025
                    </span>
                </h1>

                {/* Typing Animation for Subtitle */}
                <TypeAnimation
                    sequence={[
                        "MITS DU presents its FIRST-EVER official hackathon",
                        4000, // Pause for 2 seconds
                        "Join us for an exhilarating coding experience!",
                        2000, // Pause for 2 seconds
                        "Get ready for 12 hours of innovation and creativity!",
                        2000 // Pause for 2 seconds
                    ]}
                    wrapper="p"
                    speed={50}
                    repeat={Infinity}
                    className="text-lg md:text-2xl text-content-muted mb-12 max-w-2xl mx-auto"
                />

                <div className="flex sm:hidden gap-4 justify-center">
                    <a href={docsLink}
                        className="group bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] relative">
                        <div className="absolute inset-0 bg-content/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        Register Now
                    </a>
                </div>
                {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div> */}
            </div>
        </header>
        //     <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        //     <div className="absolute inset-0 z-0">
        //       <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark/90 to-surface-dark z-10" />
        //       <img 
        //         src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80"
        //         alt="Background"
        //         className="w-full h-full object-cover"
        //       />
        //     </div>
        //     <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        //       <div className="inline-block mb-8 relative">
        //         <div className="absolute inset-0 bg-primary/20 blur-3xl" />
        //         <Code2 className="w-20 h-20 text-primary relative" />
        //       </div>
        //       <h1 className="text-7xl font-bold mb-6 leading-tight">
        //         <span className="bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text">
        //           InnovateCon 2025
        //         </span>
        //       </h1>
        //       <p className="text-2xl text-content-muted mb-12 max-w-2xl mx-auto">
        //         Where Innovation Meets Reality: 48 Hours of Coding, Creation, and Revolutionary Tech
        //       </p>
        //       <div className="flex flex-col sm:flex-row gap-4 justify-center">
        //         <button className="group bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] relative">
        //           <div className="absolute inset-0 bg-content/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        //           Register Now
        //         </button>
        //         <button className="px-8 py-4 rounded-xl font-semibold text-lg border border-primary/30 hover:bg-primary/10 transition-all">
        //           Learn More
        //         </button>
        //       </div>
        //       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        //         <ChevronDown className="w-8 h-8 text-primary" />
        //       </div>
        //     </div>
        //   </header>
    )
}

export default HeroSection;
    