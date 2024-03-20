import React, { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        className="py-4 px-6 w-full text-left font-semibold text-lg hover:bg-gray-50 focus:outline-none"
        onClick={toggleOpen}
      >
        {question}
      </button>
      {isOpen && <p className="py-2 px-6 text-gray-600">{answer}</p>}
    </div>
  );
};

type FaqSectionProps = {
  title: string;
  faqs: { question: string; answer: string }[];
};

const FaqSection: React.FC<FaqSectionProps> = ({ title, faqs }) => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-4xl font-bold mb-8">{title}</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

// Render example
const ExampleFaqSection = () => {
  const title = "Frequently Asked Questions";
  const faqs = [
    {
      question: "How do I start?",
      answer: "Just sign up and enjoy our features for free!",
    },
    {
      question: "Can I cancel at any time?",
      answer: "Absolutely, you are not tied to any contract.",
    },
    // Add more FAQs as needed
  ];

  return <FaqSection title={title} faqs={faqs} />;
};

export default ExampleFaqSection;
