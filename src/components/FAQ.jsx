import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const faqs = [
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on the destination. You can calculate shipping costs during checkout."
    },
    {
      question: "Are eBooks or audiobooks available for purchase?",
      answer: "Currently, we specialize in physical books and accessories. However, we're working on expanding our digital offerings in the near future."
    },
    {
      question: "Do you have a physical store where I can browse books?",
      answer: "Our primary operation is online, but we have a flagship store in downtown. Visit our 'About Us' page for the address and opening hours."
    },
    {
      question: "Can I request a specific book that is currently out of stock?",
      answer: "Absolutely! We can notify you when the book is back in stock, or we can try to source it for you. Use the 'Notify Me' button on the product page or contact our customer service."
    },
    {
      question: "Are there any book clubs or reading events organized by your store?",
      answer: "Yes, we host monthly book clubs and author events. Check our events calendar for upcoming activities. You can also subscribe to our newsletter for updates."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">FAQs</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-[#b0acaa] focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg">{faq.question}</span>
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              {activeIndex === index && (
                <div className="mt-2 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;