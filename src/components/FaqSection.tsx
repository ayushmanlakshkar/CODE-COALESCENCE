import { HelpCircle } from 'lucide-react'
import React from 'react'
import FaqItem from './FaqItem';

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
}

function FaqSection({ faqs }: FaqSectionProps) {
  return (
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
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default FaqSection
