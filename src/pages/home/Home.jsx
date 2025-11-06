import React from "react";
import HeroSection from "./HeroSection";
import KeyFeatures from "./KeyFeatures";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import Guidance from "./Guidance";

function Home() {
  return (
    <div>
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <FAQ />
      <Guidance />
    </div>
  );
}

export default Home;
