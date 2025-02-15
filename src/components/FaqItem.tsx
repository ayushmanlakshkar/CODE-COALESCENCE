import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-surface-light to-surface-dark rounded-2xl border border-primary/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left hover:bg-cyan-500/5 transition-colors"
      >
        <h3 className="md:text-xl font-semibold text-primary">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
        )}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="overflow-hidden">
          <p className="p-8 pt-0 text-content-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem
