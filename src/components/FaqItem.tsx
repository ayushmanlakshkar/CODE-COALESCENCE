import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'
import { motion } from "framer-motion";

const FaqItem = ({ question, answer, index }: { question: string; answer: string, index:number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
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
          <p className="md:text-lg p-8 pt-0 text-content-muted">{answer}</p>
        </div>
      </div>
    </div>
              </motion.div>
  );
};

export default FaqItem
