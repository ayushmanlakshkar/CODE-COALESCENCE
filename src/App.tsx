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
      question: "What is Code Coalescence?",
      answer:
        "A 12-hour hackathon promoting innovation, problem-solving, and teamwork.",
    },
    {
      question: "When and where is the hackathon?",
      answer: "February 28, 2025, from 8:00 AM to 8:00 PM at MITS-DU Gwalior.",
    },
    {
      question: "Who can participate?",
      answer:
        "All MITS-DU students passionate about coding and problem-solving.",
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation is free.",
    },
    {
      question: "What is the format?",
      answer:
        "Team-based event solving real-world problems and presenting to judges.",
    },
    {
      question: "How many members per team?",
      answer:
        "Each team must have 6 members, including at least one female member.",
    },
    {
      question: "Are there prizes?",
      answer: "Yes, winners receive certificates, trophies, and cash prizes.",
    },
    {
      question: "Do we need to bring our own devices?",
      answer:
        "Yes, bring at least 2 laptops per team along with necessary accessories.",
    },
    {
      question: "Will food be provided?",
      answer: "Yes, lunch and snacks will be available.",
    },
    {
      question: "Can teams have fewer than 6 members?",
      answer: "No, at least 6 members, including one female, are required.",
    },
    {
      question: "Can we register our own problem statement?",
      answer: "Yes, if it aligns with the college's theme.",
    },
    {
      question: "Are students from other institutes allowed?",
      answer: "No, only MITS-DU students with valid ID cards can participate.",
    },
    {
      question: "Can we modify the provided SIH PPT?",
      answer: "It is a guideline; teams must create their own presentation.",
    },
    {
      question: "Will fresh problem statements be provided?",
      answer: "No, teams must determine their problem statements beforehand.",
    },
    {
      question: "Will we receive certificates?",
      answer:
        "Top 10 teams get hard copies, e-certificates for shortlisted teams only.",
    },
    {
      question: "Are pre-built codes allowed?",
      answer: "No, coding must be done live in front of mentors.",
    },
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

      {/* Tracks Section */}
      <TracksSection />
      
      {/* guidelines */}
      <Guidelines/>

      {/* Timeline Section */}
      <TimelineSection />
      

      {/* Sponsors Section */}
      {/* <SponsorSection/> */}

      {/* FAQ Section */}
      <FaqSection faqs={faqs} />

      {/* Contact Section */}
      {/* <ContactSection/> */}

      {/* Footer */}
      <Footer />
      </div>
    </div>
  );
}

export default App;