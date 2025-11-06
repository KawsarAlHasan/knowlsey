import React, { useState } from "react";
import qutetion from "../../assets/Quote mark.png";

function FAQ() {
  const [openIndex, setOpenIndex] = useState([0, 1]);

  const faqItems = [
    {
      question: "How does the AI chatbot help scaffolders?",
      answer:
        "It provides instant, accurate answers to your scaffolding-related questions based on official guides and standards.",
    },
    {
      question: "Can I use voice commands instead of typing?",
      answer:
        "Yes! You can simply speak your question using the voice input feature for hands-free convenience onsite.",
    },
    {
      question: "Do I need an account to use the app?",
      answer:
        "No account is required to access basic features. Simply download and start using the app immediately.",
    },
    {
      question: "How accurate are the answers?",
      answer:
        "Our AI is trained on official scaffolding guides and industry standards, ensuring highly accurate and reliable information for your projects.",
    },
    {
      question: "Why choose ScaffAssistant instead of ChatGPT?",
      answer:
        "ScaffAssistant is specifically trained on scaffolding standards and regulations, providing specialized, accurate information tailored to your industry needs.",
    },
    {
      question: "Will the app include regular updates?",
      answer:
        "Yes, we regularly update the app with new features, improved AI models, and the latest scaffolding standards and safety regulations.",
    },
  ];

  const toggleFAQ = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <img src={qutetion} className="mt-1" alt="qutetion" />
                    <div>
                      <h3 className="text-gray-900 font-semibold text-base mt-1">
                        {index + 1}. {item.question}
                      </h3>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      openIndex.includes(index) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {openIndex.includes(index) && (
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-9">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
