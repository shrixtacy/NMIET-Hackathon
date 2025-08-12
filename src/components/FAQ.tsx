import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer: "Any college or university student in India can participate. Form teams of 2-5 members from any academic institution."
    },
    {
      question: "Is there any registration fee?",
      answer: "No! Registration is completely FREE for all participants. We believe in making innovation accessible to everyone."
    },
    {
      question: "What is the hackathon format?",
      answer: "Stage 1: Online shortlisting through pitch deck submission. Stage 2: 48-hour in-person hackathon at NMIET campus for selected teams."
    },
    {
      question: "What themes should our project focus on?",
      answer: "Focus on Defence & Military AI including: Military Strategy AI, Surveillance & Reconnaissance, Cybersecurity & Warfare, and Disaster Response AI."
    },
    {
      question: "What are the prizes and recognition?",
      answer: "Winners receive cash prizes, certificates, internship opportunities, and mentorship from defence technology experts."
    },
    {
      question: "Do we need prior AI/ML experience?",
      answer: "While AI/ML knowledge is helpful, we encourage all innovative minds to participate. Mentorship will be provided during the hackathon."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <h2 className="military-heading section-title text-center">
          Frequently Asked <span className="green-text">Questions</span>
        </h2>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item fade-in-up">
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text green-text">{faq.question}</span>
                <span className="question-icon">
                  {openIndex === index ? 
                    <ChevronUp size={20} className="army-text" /> : 
                    <ChevronDown size={20} className="army-text" />
                  }
                </span>
              </button>
              
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;