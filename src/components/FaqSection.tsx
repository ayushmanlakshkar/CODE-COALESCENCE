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
        <section id="faq" className="pt-16 md:pt-32 pb-10 relative bg-transparent">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center flex justify-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="flex gap-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                            FAQ
                            <HelpCircle className="w-9 h-9 md:w-12 md:h-12 text-primary" />
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
