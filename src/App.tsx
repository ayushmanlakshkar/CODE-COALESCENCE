import React, { useEffect, useState } from 'react';
import { 
  Code2, 
  Users, 
  Trophy, 
  MessageCircle, 
  HelpCircle, 
  ChevronDown,
  ChevronUp, 
  Globe, 
  Cpu, 
  Brain, 
  Shield, 
  Rocket, 
  Zap, 
  Clock, 
  Heart, 
  Leaf, 
  Linkedin, 
  Twitter,
  Disc as Discord
} from 'lucide-react';
import logo from './assets/mits.png'
import timeline from './assets/timeline.png'
// FAQ Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-cyan-500/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left hover:bg-cyan-500/5 transition-colors"
      >
        <h3 className="text-xl font-semibold text-cyan-400">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0 ml-4" />
        )}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="p-8 pt-0 text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const docsLink ='https://docs.google.com/forms/d/e/1FAIpQLSfy9Jv-g-FT4iwmUKSsX9ZMw3R1HuF95GjBlz5Q9anYCC4sUQ/viewform' 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      question: "Who can participate?",
      answer: "Anyone over 18 years old with a passion for technology and innovation can participate. Whether you're a student, professional, or self-taught developer, you're welcome to join!"
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and any hardware you might need for your project. We'll provide high-speed internet, power strips, meals, drinks, and a comfortable hacking space."
    },
    {
      question: "How do teams work?",
      answer: "Teams can have up to 4 members. Don't have a team? No worries! We'll host team formation events before the hackathon, and you can also find teammates during our opening ceremony."
    },
    {
      question: "Is it free?",
      answer: "Yes! Thanks to our generous sponsors, the event is completely free for all participants. We'll provide meals, snacks, swag, and access to all workshops and mentorship sessions."
    },
    {
      question: "What kind of support is provided?",
      answer: "We provide technical mentorship, workshops, API credits from our sponsors, hardware for testing, and dedicated spaces for brainstorming and collaboration."
    }
  ];

  return (
    <div className="bg-black relative text-white pt-24">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[100vw] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className='w-16 md:w-20' src={logo}/>
            <span className="font-bold text-lg md:text-xl">CODE COALESCENCE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#timeline" className="hover:text-cyan-400 transition-colors">Timeline</a>
            {/* <a href="#tracks" className="hover:text-cyan-400 transition-colors">Tracks</a> */}
            {/* <a href="#sponsors" className="hover:text-cyan-400 transition-colors">Sponsors</a> */}
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          </div>
          <a href={docsLink}
          className="hidden sm:flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
            Register Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-8 relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl" />
            <img className='w-32 md:w-40' src={logo}/>
          </div>
          <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              CODE COALESCENCE 2k25
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          MITS DU presents its FIRST-EVER official hackathon
          </p>
          <div className="flex sm:hidden gap-4 justify-center">
          <a href={docsLink}
             className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] relative">
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              Register Now
            </a>
            {/* <button className="px-8 py-4 rounded-xl font-semibold text-lg border border-cyan-500/30 hover:bg-cyan-500/10 transition-all">
              Learn More
            </button> */}
          </div>
          {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </div> */}
        </div>
      </header>

      {/* Stats Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '150+', label: 'Hackers', icon: Users },
              { number: 'INR 30k', label: 'in Prizes', icon: Trophy },
              { number: '12hrs', label: 'of Hacking', icon: Clock },
              // { number: '20+', label: 'Workshops', icon: Cpu }
            ].map((stat, index) => (
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

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                The Future of Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A high-energy, 12-hour coding marathon where ideas meet execution, creativity fuels innovation, and YOU get a chance to build something extraordinary! 💡💻
Then this is YOUR moment! 🌟

            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Learn & Grow',
                description: 'Access workshops, mentorship, and resources from industry experts.'
              },
              {
                icon: Rocket,
                title: 'Build & Launch',
                description: 'Transform your ideas into working prototypes with cutting-edge tech.'
              },
              {
                icon: Globe,
                title: 'Connect & Network',
                description: 'Meet fellow innovators, mentors, and potential collaborators.'
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="timeline" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center flex justify-center">
            <h2 className="text-5xl font-bold mb-6">
              <span className="flex gap-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Timeline
              <Clock className="w-12 h-12 text-cyan-400 mx-auto" />
              </span>
            </h2>
          </div>
      <div className='w-full justify-center flex md:px-20'>
<img className=' w-full md:w-8/12' src={timeline}/>
      </div>
        </div>
      </section>
      {/* Tracks Section */}
      {/* <section id="tracks" className="py-32 relative bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Innovation Tracks
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose your path and make an impact in these cutting-edge domains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI/ML',
                description: 'Push the boundaries of artificial intelligence and machine learning.'
              },
              {
                icon: Shield,
                title: 'Web3',
                description: 'Build the future of decentralized applications and blockchain tech.'
              },
              {
                icon: Cpu,
                title: 'FinTech',
                description: 'Revolutionize financial services with innovative solutions.'
              },
              {
                icon: Heart,
                title: 'Healthcare',
                description: 'Create solutions that improve healthcare accessibility and quality.'
              },
              {
                icon: Leaf,
                title: 'Sustainability',
                description: 'Develop tech solutions for environmental challenges.'
              },
              {
                icon: Zap,
                title: 'Open Innovation',
                description: 'Choose your own path and surprise us with your creativity.'
              }
            ].map((track, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                  <track.icon className="w-10 h-10 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">{track.title}</h3>
                  <p className="text-gray-400">{track.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Sponsors Section */}
      {/* <section id="sponsors" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Our Sponsors
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Backed by industry leaders who believe in innovation
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
                <div className="aspect-[3/2] rounded-lg bg-gradient-to-br from-gray-800 to-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section id="faq" className="py-32 relative bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 flex justify-center">
            <h2 className="text-5xl font-bold mb-6">
              <span className="flex gap-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                FAQ
            <HelpCircle className="w-12 h-12 text-cyan-400 mb-6" />
              </span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="text-center">
            <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-400 mb-12">Have questions? We're here to help!</p>
            <div className="max-w-md mx-auto bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-cyan-500/10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mb-4 bg-black/50 border border-cyan-500/20 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full mb-6 bg-black/50 border border-cyan-500/20 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50"
              />
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105">
                Send Message
              </button>
            </div>
            <div className="flex justify-center gap-6 mt-12">
              <button className="group bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                <Discord className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </button>
              <button className="group bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                <Twitter className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </button>
              <button className="group bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-8 h-8 text-cyan-400" />
                <span className="font-bold text-xl">CODE COALESCENCE</span>
              </div>
              <p className="text-gray-400">Where innovation meets reality. Join us for 48 hours of coding, creation, and revolutionary tech.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#tracks" className="hover:text-cyan-400 transition-colors">Tracks</a></li>
                <li><a href="#sponsors" className="hover:text-cyan-400 transition-colors">Sponsors</a></li>
                <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>hello@CODE COALESCENCE.dev</li>
                <li>Discord Community</li>
                <li>Twitter Updates</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest news and announcements.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-black/50 border border-cyan-500/20 rounded-l-xl px-4 py-2 focus:outline-none focus:border-cyan-500/50"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 rounded-r-xl font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800/50 text-center text-gray-400">
            <p>© 2k25 CODE COALESCENCE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;