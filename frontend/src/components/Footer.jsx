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
              {/* Twitter/X */}
              <a 
                href="https://twitter.com/alokyadav0707" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-light-gray/20 to-light-gray/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-aqua-teal/30 hover:to-tech-blue/20 transition-all duration-300 cursor-pointer border border-light-gray/10 hover:border-aqua-teal/40 hover:scale-110 group"
              >
                <svg className="w-4 h-4 text-light-gray group-hover:text-aqua-teal transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/alok-yadav-6ba852295/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-light-gray/20 to-light-gray/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-tech-blue/30 hover:to-aqua-teal/20 transition-all duration-300 cursor-pointer border border-light-gray/10 hover:border-tech-blue/40 hover:scale-110 group"
              >
                <svg className="w-4 h-4 text-light-gray group-hover:text-tech-blue transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* GitHub */}
              <a 
                href="https://github.com/MVPAlok/Delhiair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-light-gray/20 to-light-gray/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-india-green/30 hover:to-saffron/20 transition-all duration-300 cursor-pointer border border-light-gray/10 hover:border-india-green/40 hover:scale-110 group"
              >
                <svg className="w-4 h-4 text-light-gray group-hover:text-india-green transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
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
            
            {/* Designer Credit */}
            <div className="flex items-center space-x-3">
              <a 
                href="https://alokyadav-portfolio.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-dark-charcoal/50 to-light-gray/10 rounded-full border border-light-gray/20 backdrop-blur-sm hover:border-aqua-teal/40 hover:bg-gradient-to-r hover:from-dark-charcoal/70 hover:to-light-gray/20 transition-all duration-300 group hover:scale-105"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-aqua-teal to-tech-blue rounded-full animate-pulse group-hover:animate-spin"></div>
                <span className="text-xs text-light-gray/70 font-medium group-hover:text-light-gray/90 transition-colors duration-300">Designed & Developed by</span>
                <span className="font-bold text-sm bg-gradient-to-r from-aqua-teal via-tech-blue to-india-green bg-clip-text text-transparent tracking-wide group-hover:from-tech-blue group-hover:via-aqua-teal group-hover:to-saffron transition-all duration-300">
                  Alok Yadav
                </span>
                <div className="w-2 h-2 bg-gradient-to-r from-saffron to-india-green rounded-full animate-pulse group-hover:animate-bounce"></div>
                <svg className="w-3 h-3 text-light-gray/50 group-hover:text-aqua-teal transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Enhanced Decorative Elements */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <div className="w-16 h-0.5 rounded-full bg-gradient-to-r from-transparent via-aqua-teal to-transparent opacity-70"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-saffron via-pure-white to-india-green opacity-80 animate-pulse"></div>
            <div className="w-32 h-1 rounded-full bg-gradient-to-r from-saffron via-pure-white to-india-green opacity-70"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-india-green via-pure-white to-saffron opacity-80 animate-pulse"></div>
            <div className="w-16 h-0.5 rounded-full bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-70"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;