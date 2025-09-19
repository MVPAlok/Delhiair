import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-dark-charcoal/95 backdrop-blur-sm text-light-gray fixed top-0 left-0 right-0 z-50 shadow-xl border-b border-saffron/20">
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-extrabold text-3xl tracking-wider bg-gradient-to-r from-saffron via-pure-white to-india-green bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          DelhiAir.AI
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("solutions")}
            className="hover:text-aqua-teal transition-colors duration-300 font-medium"
          >
            Solutions
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="hover:text-aqua-teal transition-colors duration-300 font-medium"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("cta")}
            className="hover:text-aqua-teal transition-colors duration-300 font-medium"
          >
            For Policymakers
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="hover:text-aqua-teal transition-colors duration-300 font-medium"
          >
            About
          </button>
        </div>

        {/* Get Started Button */}
        <button className="hidden md:block bg-gradient-to-r from-saffron via-pure-white to-india-green p-0.5 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <span className="block bg-dark-charcoal text-pure-white py-3 px-6 rounded-full">
            Get Started
          </span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-light-gray hover:text-aqua-teal transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-charcoal/98 backdrop-blur-sm border-t border-saffron/20">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("solutions")}
              className="block w-full text-left hover:text-aqua-teal transition-colors duration-300 font-medium"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left hover:text-aqua-teal transition-colors duration-300 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="block w-full text-left hover:text-aqua-teal transition-colors duration-300 font-medium"
            >
              For Policymakers
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="block w-full text-left hover:text-aqua-teal transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button className="w-full bg-gradient-to-r from-saffron via-pure-white to-india-green p-0.5 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300">
              <span className="block bg-dark-charcoal text-pure-white py-3 px-6 rounded-full">
                Get Started
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;