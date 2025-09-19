import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AQISnapshot from "../components/AQISnapshot";
import StakeholderSolutions from "../components/StakeholderSolutions";
import CoreCapabilities from "../components/CoreCapabilities";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-dark-charcoal">
      <Header />
      <main>
        <HeroSection />
        <AQISnapshot />
        <StakeholderSolutions />
        <CoreCapabilities />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;