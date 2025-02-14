import React, { useEffect, useState } from 'react';
import logo from './assets/logo2.png'
import HeroSection from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import TracksSection from './components/TracksSection';
// import SponsorSection from './components/SponsorSection';
import FaqSection from './components/FaqSection';
// import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { TimelineSection } from './components/TimelineSection';
import Navbar from './components/Navbar';
import background from './assets/background.png';
import Guidelines from './components/Guidelines';
function App() {
  const [scrolled, setScrolled] = useState(false);
  const docsLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfy9Jv-g-FT4iwmUKSsX9ZMw3R1HuF95GjBlz5Q9anYCC4sUQ/viewform'

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
    <div className="bg-[#050303] relative text-white pt-24 min-h-screen max-w-[100vw]">
      <div className="absolute flex justify-center w-full z-0 mix-blend-lighten max-w-full">
        <div className="absolute inset-0  bg-gradient-to-b from-surface-dark via-surface-dark/10 to-surface-dark z-10" />
        <img
          src={background}
          alt="Background"
          className="w-full h-full min-w-[400px] object-cover mix-blend-overlay"
          />
      </div>
      <div className='relative z-10'>
      {/* Navigation */}
      <Navbar scrolled={scrolled} docsLink={docsLink} logo={logo} />

      {/* Hero Section */}
      <HeroSection docsLink={docsLink} />

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <AboutSection />

      {/* guidelines */}
      <Guidelines/>

      {/* Timeline Section */}
      {/* <TimelineSection /> */}
      {/* Tracks Section */}
      <TracksSection />

      {/* Sponsors Section */}
      {/* <SponsorSection/> */}

      {/* FAQ Section */}
      <FaqSection faqs={faqs} />

      {/* Contact Section */}
      {/* <ContactSection/> */}

      {/* Footer */}
      {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;