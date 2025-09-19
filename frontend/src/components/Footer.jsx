import React from "react";
import { mockFooterLinks } from "../mock/mockData";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="bg-dark-charcoal/95 text-light-gray/70 border-t border-pure-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-2xl mb-4 tracking-wider bg-gradient-to-r from-saffron via-pure-white to-india-green bg-clip-text text-transparent">
              DelhiAir.AI
            </h4>
            <p className="text-sm leading-relaxed text-light-gray/80">
              AI-Powered Pollution Insights for a Healthier Delhi-NCR. 
              Empowering citizens and policymakers with real-time air quality data.
            </p>
            <div className="flex space-x-4 pt-4">
              <div className="w-8 h-8 bg-light-gray/20 rounded-full flex items-center justify-center hover:bg-aqua-teal/30 transition-colors duration-300 cursor-pointer">
                <span className="text-xs">X</span>
              </div>
              <div className="w-8 h-8 bg-light-gray/20 rounded-full flex items-center justify-center hover:bg-aqua-teal/30 transition-colors duration-300 cursor-pointer">
                <span className="text-xs">Li</span>
              </div>
              <div className="w-8 h-8 bg-light-gray/20 rounded-full flex items-center justify-center hover:bg-aqua-teal/30 transition-colors duration-300 cursor-pointer">
                <span className="text-xs">Gh</span>
              </div>
            </div>
          </div>

          {/* Navigate Section */}
          <div>
            <h4 className="font-bold text-lg text-pure-white mb-4">Navigate</h4>
            <ul className="space-y-3 text-sm">
              {mockFooterLinks.navigate.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-aqua-teal transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="font-bold text-lg text-pure-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              {mockFooterLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-aqua-teal transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Sources Section */}
          <div>
            <h4 className="font-bold text-lg text-pure-white mb-4">Data Sources</h4>
            <div className="flex flex-wrap gap-3">
              {mockFooterLinks.dataSources.map((source, index) => (
                <div
                  key={index}
                  className="px-3 py-1 bg-light-gray/20 rounded-full text-sm font-semibold hover:bg-aqua-teal/30 transition-colors duration-300 cursor-pointer"
                >
                  {source}
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2 text-xs">
              <div className="text-light-gray/60">Last Data Update:</div>
              <div className="text-aqua-teal font-semibold">2 minutes ago</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-light-gray/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              © 2024 DelhiAir.AI. For Smart India Hackathon. All Rights Reserved.
            </p>
            
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-light-gray/60">Powered by:</span>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-tech-blue/20 rounded text-tech-blue text-xs">React</span>
                <span className="px-2 py-1 bg-india-green/20 rounded text-india-green text-xs">FastAPI</span>
                <span className="px-2 py-1 bg-saffron/20 rounded text-saffron text-xs">MongoDB</span>
              </div>
            </div>
          </div>
          
          {/* Decorative Line */}
          <div className="w-32 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-saffron via-pure-white to-india-green opacity-70"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;