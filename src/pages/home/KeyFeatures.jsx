import React from "react";

import icons from "../../assets/icons/Rectangle 22643.png";
import icons2 from "../../assets/icons/Rectangle 22643 (1).png";
import icons3 from "../../assets/icons/Rectangle 22643 (2).png";
import icons4 from "../../assets/icons/Rectangle 22643 (3).png";
import icons5 from "../../assets/icons/Rectangle 22643 (4).png";
import icons6 from "../../assets/icons/Rectangle 22643 (5).png";

function KeyFeatures() {
  const features = [
    {
      icon: <img src={icons} alt="icon" />,
      title: "Smart Assistance",
      description:
        "Get instant, accurate answers to your scaffolding questions.",
    },
    {
      icon: <img src={icons2} alt="icon" />,
      title: "Hands-Free Mode",
      description: "Use voice input while working onsite for quick guidance.",
    },
    {
      icon: <img src={icons3} alt="icon" />,
      title: "Real-Time Guidance",
      description: "Receive step-by-step support for scaffolding tasks",
    },
    {
      icon: <img src={icons4} alt="icon" />,
      title: "Quick Access",
      description: "Find tools, safety info, and load limits in seconds",
    },
    {
      icon: <img src={icons5} alt="icon" />,
      title: "History",
      description: "View and manage your previous chats and",
    },
    {
      icon: <img src={icons6} alt="icon" />,
      title: "Progress Tracking",
      description: "Review your past queries and learning history",
    },
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-[40px] font-bold text-black mb-6">
            KEY FEATURES
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Built for professionals and learners alike, our app combines AI
            intelligence with real scaffolding expertise to make every task
            easier and every site safer
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-6">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeyFeatures;
