'use client';

import { useEffect, useRef, useState } from 'react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (faqRef.current && !faqRef.current.contains(event.target)) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const faqs = [
    {
      question: 'How do I sign up?',
      answer:
        'Signing up is easy! Click "Sign In" at the top of the page, fill out the form, and verify your email to get started.',
    },
    {
      question: 'Are there any fees?',
      answer:
        'There are no fees for browsing listings. However, some premium features and listings may have associated costs.',
    },
    {
      question: 'Can I list my property?',
      answer:
        'Absolutely! Sign up as a seller, and you can create and manage your property listings with ease.',
    },
    {
      question: 'How do I contact an agent?',
      answer:
        'Each listing has a "Contact Agent" button. Click it to send a message directly to the agent responsible for the property.',
    },
  ];

  return (
    <div className="px-4 py-12 md:max-w-6xl lg:mx-auto">
      <header className="mb-7 flex flex-col gap-3">
        <h2 className="text-primary-darkGray text-5xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-500">
          Detailed answers to common questions about using Home Quest to buy or
          sell your home.
        </p>
      </header>
      <div className="boxShadow flex cursor-pointer flex-col divide-y-2 divide-gray-200 rounded-lg border border-gray-200">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3
              onClick={() => handleToggle(index)}
              className={`text-primary-darkGray cursor-pointer p-6 text-lg font-medium ${
                openIndex === index ? 'underline' : ''
              }`}
            >
              {faq.question}
            </h3>
            {openIndex === index && (
              <div className="-mt-5 px-6 pb-5 text-gray-500">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
