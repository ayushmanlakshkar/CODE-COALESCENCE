import React, { useEffect, useState } from "react";
import logo from "./assets/logo2.png";
import HeroSection from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { AboutSection } from "./components/AboutSection";
import TracksSection from "./components/TracksSection";
// import SponsorSection from './components/SponsorSection';
import FaqSection from "./components/FaqSection";
// import ContactSection from './components/ContactSection';
import Footer from "./components/Footer";
import { TimelineSection } from "./components/TimelineSection";
import Navbar from "./components/Navbar";
import background from "./assets/background.avif";
import Guidelines from "./components/Guidelines";
// import AnnouncementToast from "./components/AnnouncementToast";
import ScrollingAnnouncement from "./components/ScrollingAnnouncement";
import { ShortlistedTeams } from "./components/ShortlistedTeams";

const docsLink = import.meta.env.VITE_DOCS_LINK;

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    {
      question:
        "🤖 What exactly is Code Coalescence, and when can we be a part of it?",
      answer:
        "🎉 Code Coalescence is your chance to showcase your coding skills in a thrilling 12-hour hackathon! 🧠 It's all about creativity, problem-solving, and teamwork. Join us on 📅 February 28, 2025, from 8:00 AM to 8:00 PM at MITS-DU Gwalior to make your mark! 🚀",
    },
    {
      question: "👩‍💻 Who can join, and how do I sign up for this epic event?",
      answer:
        "Are you a student at MITS-DU with a passion for coding? 🔥 Then you're in! Register now by ⏰ 18th February 2025 through our registration link or QR code. Don’t wait—secure your spot today! 📝",
    },
    {
      question: "💸 Is there a fee to join Code Coalescence?",
      answer:
        "Absolutely not! 🚫 Code Coalescence is free of charge, so you can focus entirely on coding and innovating without worrying about fees. 💻",
    },
    {
      question:
        "🏆 How will the hackathon be structured, and what’s the team setup?",
      answer:
        "It’s a team-based event where you’ll collaborate with like-minded coders! 🤝 Each team should have 6 members, with at least one female participant. 👩‍💻 You’ll tackle real-world problems and pitch your creative solutions to a panel of judges! 🎤",
    },
    {
      question:
        "🧐 How will my team be judged, and what’s expected of our solution?",
      answer:
        "Get ready to shine! ✨ Your solution will be judged on innovation 💡, feasibility ✅, technical execution 🖥️, and how well you present it 🎤. It’s your opportunity to wow the judges and show off your problem-solving skills! 🔥",
    },
    {
      question:
        "💻 Do we need to bring our own devices, and what’s the food situation like?",
      answer:
        "Yes, bring your laptops (at least 2 per team) and all the essentials like chargers and extension cords! 🔌 And no need to worry about food 🍕—we’ll keep you energized with a delicious lunch and afternoon snacks! 🍫",
    },
    {
      question:
        "🤔 Can we participate with fewer than 6 members or as students from another institute?",
      answer:
        "Code Coalescence requires teams of 6, including at least one female member. 👩‍💻 Plus, the event is exclusive to MITS-DU students, so make sure you bring your ID to join the fun! 🎟️",
    },
    {
      question:
        "💻 Are we allowed to use pre-built code, and how does the presentation process work?",
      answer:
        "No pre-built code here! 🚫 All coding must be done live during the event. When it’s time to present, you’ll showcase your hard work and creativity in front of our judges 🎤—make it count! 🎯",
    },
    {
      question: "🏅 What’s in it for the winners? Will we get certificates?",
      answer:
        "There are exciting prizes awaiting you! 🏆 Winners will snag certificates, trophies 🏅, and cash prizes 💰. The top ten teams will receive hard copy certificates, while others will earn e-certificates 🎉. Everyone’s a winner when they push their limits! 💪",
    },
  ];

  return (
    <div className="bg-[#050303] relative text-white pt-24 min-h-screen max-w-[100vw]">
      <div className="absolute flex justify-center w-full z-0 mix-blend-lighten max-w-full">
        <div className="absolute inset-0  bg-gradient-to-b from-surface-dark via-surface-dark/10 to-surface-dark z-10" />
        <img
          src={background}
          alt="Background"
          className="w-full h-full min-w-[350px] object-cover mix-blend-overlay"
        />
      </div>
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar scrolled={scrolled} docsLink={docsLink} logo={logo} />
        <ScrollingAnnouncement />

        {/* Hero Section */}
        <HeroSection docsLink={docsLink} />

        {/* Stats Section */}
        <StatsSection />
        
        <ShortlistedTeams/>
        {/* About Section */}
        <AboutSection />

        {/* Tracks Section */}
        <TracksSection />
        {/* guidelines */}
        <Guidelines />

        {/* Timeline Section */}
        <TimelineSection />

        {/* <AnnouncementToast /> */}

        {/* <ScrollingAnnouncement /> */}

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
