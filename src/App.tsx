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
        "Code Coalescence is an exciting 12-hour hackathon designed to foster innovation, problem-solving, and teamwork among students.",
    },
    {
      question: "When and where will the hackathon take place?",
      answer:
        "The event is scheduled for February 28, 2025, from 8:00 AM to 8:00 PM at MITS-DU Gwalior.",
    },
    {
      question: "Who can participate in the hackathon?",
      answer:
        "All students of MITS-DU with a passion for coding, problem-solving, and teamwork are welcome to participate.",
    },
    {
      question: "Is there a registration fee for participation?",
      answer:
        "No, the hackathon is completely free to participate in, encouraging accessibility for all students.",
    },
    {
      question: "What is the format of the event?",
      answer:
        "The hackathon follows a team-based format where participants work collaboratively to solve real-world problems and present their solutions to a panel of judges.",
    },
    {
      question: "How many members can form a team?",
      answer:
        "Each team must consist of exactly 6 members, including at least one female participant.",
    },
    {
      question: "What are the prizes for the winners?",
      answer:
        "Winning teams will receive certificates, trophies, and exciting cash prizes as recognition for their efforts.",
    },
    {
      question: "Do participants need to bring their own devices?",
      answer:
        "Yes, each team should bring at least two laptops along with any necessary accessories required for development.",
    },
    {
      question: "Will food and refreshments be provided?",
      answer:
        "Yes, participants will be provided with lunch and snacks to keep their energy levels up throughout the event.",
    },
    {
      question: "Are teams allowed to have fewer than 6 members?",
      answer:
        "No, teams must have exactly 6 members, with at least one female participant, to be eligible for participation.",
    },
    {
      question: "Can we propose our own problem statement?",
      answer:
        "Yes, teams can propose their own problem statement as long as it aligns with the college's official theme.",
    },
    {
      question: "Are students from other institutes allowed to participate?",
      answer:
        "No, participation is limited to MITS-DU students with valid ID cards.",
    },
    {
      question: "Can we modify the SIH PPT provided by the organizers?",
      answer:
        "The provided SIH PPT is just a guideline; teams are required to create their own presentations based on their solution.",
    },
    {
      question: "Will new problem statements be given during the event?",
      answer:
        "No, teams should identify and finalize their problem statements before the event begins.",
    },
    {
      question: "Will all participants receive certificates?",
      answer:
        "The top 10 teams will receive hard-copy certificates, while e-certificates will be provided to all shortlisted teams.",
    },
    {
      question: "Can we use pre-written code during the hackathon?",
      answer:
        "No, all coding must be done live in front of mentors to ensure fair competition and originality.",
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