import { Code2, Instagram, Phone } from "lucide-react";
import React from "react";
import logo from '../assets/logo2.png'
function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 border-t border-content-subtle/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Hidden on Small Screens */}
          <div className="hidden md:block">
            <div className="flex items-center mb-6">
              <img src={logo} className="w-12 h-12" />
              <span className="font-bold text-2xl">CODE COALESCENCE</span>
            </div>
            <p className="text-content-muted text-lg">
            Where innovation meets reality! 🚀 Join us for 12 hours of coding, creation, and groundbreaking tech. 💡🔥
            </p>
          </div>

          {/* Quick Links - Hidden on Small Screens */}
          <div className="hidden md:block">
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-content-muted text-lg">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors relative inline-block after:content-[''] after:block after:h-[2px] after:bg-primary after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#tracks"
                  className="hover:text-primary transition-colors relative inline-block after:content-[''] after:block after:h-[2px] after:bg-primary after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Tracks
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-primary transition-colors relative inline-block after:content-[''] after:block after:h-[2px] after:bg-primary after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section - Centered on Small Screens */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-content-muted text-lg">
              <li className="flex justify-center md:justify-start items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+919407590087"
                  className="hover:text-primary transition-colors"
                >
                  Shashank Jain: +91 94075 90087
                </a>
              </li>
              {/* <li className="flex justify-center md:justify-start items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+919130208733"
                  className="hover:text-primary transition-colors"
                >
                  Naman Swarnkar: +91 91302 08733
                </a>
              </li> */}
              <li className="flex justify-center md:justify-start items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+916261211162"
                  className="hover:text-primary transition-colors"
                >
                  Karan Mundre: +91 62612 11162
                </a>
              </li>
              {/* <li className="flex justify-center md:justify-start items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+918871539009"
                  className="hover:text-primary transition-colors"
                >
                  Ayushman Lakshkar: +91 88715 39009
                </a>
              </li> */}
              <li className="flex justify-center md:justify-start items-center gap-3 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6 text-primary" />
                <a
                  href="https://www.instagram.com/mits.hackathon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors relative inline-block after:content-[''] after:block after:h-[2px] after:bg-primary after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-content-subtle/50 text-center text-content-muted text-sm md:text-base">
          <p>© 2025 CODE COALESCENCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
