import React from "react";
import mobile2 from "../../assets/Mobile2.png";
import qotation from "../../assets/qotation.png";
import smallQutetion from "../../assets/Quote mark.png";

function HowItWorks() {
  return (
    <div className="relative bg-[#edff4d] py-16 overflow-hidden">
      {/* Decorative Quote Mark */}
      <div className="absolute top-8 left-8 lg:top-16 lg:left-20">
        <svg
          className="w-24 h-24 lg:w-32 lg:h-32 text-[#f4ff81] opacity-60"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <text
            x="0"
            y="80"
            fontSize="100"
            fontFamily="Georgia, serif"
            fontWeight="bold"
          >
            "
          </text>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <img
          src={qotation}
          alt="qotation"
          className="absolute !top-[8px] laft-8 lg:top-16 lg:laft-20  text-[#f4ff81] opacity-60"
        />

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-lg md:text-xl text-gray-900 font-medium">
            Your scaffolding guide in three simple steps
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Phone Mockup */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative w-full max-w-[320px] lg:max-w-[380px]">
              {/* Phone Shadow */}
              {/* <div className="absolute inset-0 bg-black opacity-20 blur-2xl transform translate-y-8"></div> */}

              {/* Phone Frame */}
              <img src={mobile2} alt="mobile2" />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="space-y-6">
            <div className="grid grid-cols-12 gap-5">
              {/* Step 1 */}
              <div className="col-span-12 lg:col-span-5 bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                <div className="flex items-start gap-5">
                  <img
                    src={smallQutetion}
                    className="mt-1"
                    alt="smallQutetion"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-3">
                      Ask a Question
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Type your query or use voice input to ask anything about
                      scaffolding — from load limits to safety setup. The app
                      understands your intent and prepares to guide you
                      instantly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="col-span-12 lg:col-span-7 bg-white rounded-2xl p-6 lg:p-8 shadow-lg mt-0 lg:mt-20">
                <div className="flex items-start gap-5">
                  <img
                    src={smallQutetion}
                    className="mt-1"
                    alt="smallQutetion"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-3">
                      Get Reliable Answers
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Receive clear, paraphrased explanations that are easy to
                      understand, practical for onsite use, and always aligned
                      with safety standards and regulations
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="col-span-12 lg:col-span-8 bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                <div className="flex items-start gap-5">
                  <img
                    src={smallQutetion}
                    className="mt-1"
                    alt="smallQutetion"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-3">
                      AI Analyzes Guides
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The system searches through trusted scaffolding
                      operational and design guides, interpreting technical
                      details to find the most relevant and reliable answers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
