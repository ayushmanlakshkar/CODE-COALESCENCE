import { Code2 } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-content-subtle/50">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-12">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Code2 className="w-8 h-8 text-primary" />
                    <span className="font-bold text-xl">CODE COALESCENCE</span>
                  </div>
                  <p className="text-content-muted">Where innovation meets reality. Join us for 48 hours of coding, creation, and revolutionary tech.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-content-muted">
                    <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                    <li><a href="#tracks" className="hover:text-primary transition-colors">Tracks</a></li>
                    <li><a href="#sponsors" className="hover:text-primary transition-colors">Sponsors</a></li>
                    <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Contact</h3>
                  <ul className="space-y-2 text-content-muted">
                    <li>hello@CODE COALESCENCE.dev</li>
                    <li>Discord Community</li>
                    <li>Twitter Updates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Newsletter</h3>
                  <p className="text-content-muted mb-4">Stay updated with our latest news and announcements.</p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-surface-dark/50 border border-primary/20 rounded-l-xl px-4 py-2 focus:outline-none focus:border-cyan-500/50"
                    />
                    <button className="bg-gradient-to-r from-primary to-secondary px-4 rounded-r-xl font-medium">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-content-subtle/50 text-center text-content-muted">
                <p>© 2k25 CODE COALESCENCE. All rights reserved.</p>
              </div>
            </div>
          </footer>
  )
}

export default Footer
