import React from "react";
import mobileLogo from "../../assets/Mobile.png";
import heroImage from "../../assets/hero.png";

function HeroSection() {
  return (
    <div
      className="relative !min-h-[80vh] overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Container */}
      <div className="px-6 lg:px-28 py-16 lg:py-24 relative z-10 mt-[40px] lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl lg:text-[42px] font-[600] text-[#111827] leading-tight">
              YOUR AI SITE PARTNER — PLAN, BUILD, AND CHECK EVERY SCAFFOLD WITH
              CONFIDENCE
            </h1>

            <p className="text-md md:text-[18px] font-[500] text-gray-800 leading-relaxed max-w-2xl">
              Get instant guidance on scaffold setup, safety checks, load
              limits, and more — right from your phone. Built for every
              scaffolder, whether you're just learning the ropes or have years
              on the tools.
            </p>

            <button className="btn btn-lg bg-black text-white hover:bg-gray-900 border-none rounded-lg px-8 normal-case text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              DOWNLOAD NOW
            </button>
          </div>

          {/* Right Content - Mobile Phone */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Mobile Image */}
              <img
                src={mobileLogo}
                alt="Scaff Assistant Mobile App"
                className="relative lg:!bottom-[-80px] lg:!left-[-120px] z-10 w-full max-w-sm lg:max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
