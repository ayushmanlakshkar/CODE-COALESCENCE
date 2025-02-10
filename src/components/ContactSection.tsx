import React from 'react'
import {
    MessageCircle,
    Linkedin,
    Twitter,
    Disc as Discord
  } from 'lucide-react';
function ContactSection() {
  return (
    <section className="py-32 relative">
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
      </section>
  )
}

export default ContactSection
