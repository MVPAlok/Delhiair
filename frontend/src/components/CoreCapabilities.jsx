import React, { useState, useEffect } from "react";
import { Target, TrendingUp, Shield, FileText } from "lucide-react";

// Mock data
const mockFeatures = [
  {
    id: 1,
    title: "Real-time Monitoring",
    description: "Continuous air quality tracking with precision sensors across Delhi-NCR region.",
    icon: "Target",
    color: "text-tech-blue",
    borderColor: "border-tech-blue"
  },
  {
    id: 2,
    title: "Predictive Analytics",
    description: "Advanced forecasting models to predict pollution levels 24-48 hours in advance.",
    icon: "TrendingUp",
    color: "text-india-green",
    borderColor: "border-india-green"
  },
  {
    id: 3,
    title: "Health Protection",
    description: "Personalized health recommendations based on air quality and individual risk factors.",
    icon: "Shield",
    color: "text-warning-orange",
    borderColor: "border-warning-orange"
  },
  {
    id: 4,
    title: "Policy Insights",
    description: "Data-driven recommendations for government policies and environmental regulations.",
    icon: "FileText",
    color: "text-saffron",
    borderColor: "border-saffron"
  }
];

const iconMap = {
  Target,
  TrendingUp, 
  Shield,
  FileText
};

const CoreCapabilities = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % mockFeatures.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-light-gray to-pure-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal relative inline-block pb-4">
            Core AI Capabilities Journey
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-saffron via-pure-white to-india-green rounded-full"></div>
          </h2>
          <p className="text-lg text-dark-charcoal/80 mt-6 max-w-2xl mx-auto">
            Follow the intelligent path of AI-driven solutions for cleaner air in Delhi-NCR.
          </p>
        </div>

        {/* Path Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Curved Path SVG */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1200 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Path */}
              <path
                d="M50 200 Q300 100 600 150 Q900 200 1150 100"
                stroke="#E5E7EB"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,5"
              />
              
              {/* Animated Progress Path */}
              <path
                d="M50 200 Q300 100 600 150 Q900 200 1150 100"
                stroke="url(#pathGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
                style={{
                  strokeDasharray: "1200",
                  strokeDashoffset: `${1200 - (currentStep + 1) * (1200 / mockFeatures.length)}`,
                  transition: "stroke-dashoffset 2s ease-in-out"
                }}
              />
              
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF9933" />
                  <stop offset="33%" stopColor="#FFFFFF" />
                  <stop offset="66%" stopColor="#138808" />
                  <stop offset="100%" stopColor="#0066CC" />
                </linearGradient>
                
                {/* Glowing Effect */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Traversing Indicator */}
              <circle
                cx={50 + (currentStep * 275)}
                cy={currentStep % 2 === 0 ? (200 - Math.sin(currentStep * Math.PI / 2) * 50) : (150 + Math.sin(currentStep * Math.PI / 2) * 50)}
                r="8"
                fill="url(#pathGradient)"
                filter="url(#glow)"
                className="animate-pulse"
                style={{
                  transition: "all 2s ease-in-out"
                }}
              />
            </svg>
          </div>

          {/* Feature Cards in Path Formation */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
            {mockFeatures.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              const isActive = index <= currentStep;
              const isCurrent = index === currentStep;
              
              return (
                <div
                  key={feature.id}
                  className={`group feature-card text-center transition-all duration-1000 ${
                    index % 2 === 0 ? 'mt-0' : 'mt-16'
                  } ${
                    isCurrent ? 'scale-105 z-20' : isActive ? 'scale-100 z-10' : 'scale-95 opacity-70'
                  }`}
                  onMouseEnter={() => setIsAnimating(false)}
                  onMouseLeave={() => setIsAnimating(true)}
                >
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white transition-all duration-500 ${
                    isActive ? 'bg-gradient-to-r from-saffron to-india-green' : 'bg-gray-400'
                  } ${isCurrent ? 'animate-bounce' : ''}`}>
                    {index + 1}
                  </div>

                  <div
                    className={`p-6 bg-pure-white rounded-xl shadow-lg transition-all duration-500 border-b-4 ${feature.borderColor} relative overflow-hidden ${
                      isCurrent 
                        ? 'shadow-2xl hover:shadow-3xl border-opacity-100' 
                        : isActive 
                        ? 'hover:shadow-xl border-opacity-80' 
                        : 'border-opacity-40'
                    }`}
                  >
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${
                      isCurrent ? 'opacity-10' : 'opacity-5'
                    } group-hover:opacity-15`}>
                      <div className="w-full h-full bg-gradient-to-br from-current to-transparent"></div>
                    </div>

                    {/* Glow Effect for Current Card */}
                    {isCurrent && (
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-aqua-teal/10 to-transparent rounded-xl animate-pulse"></div>
                    )}

                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-light-gray/50 mb-4 transition-all duration-300 ${
                        isCurrent ? 'scale-110 bg-light-gray/80 animate-pulse' : 'group-hover:scale-110 group-hover:bg-light-gray/80'
                      }`}>
                        <IconComponent 
                          size={32} 
                          className={`${feature.color} transition-all duration-300 ${
                            isCurrent ? 'scale-110' : 'group-hover:scale-110'
                          }`} 
                        />
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-3 text-dark-charcoal transition-colors duration-300 ${
                        isCurrent ? 'text-dark-charcoal' : 'group-hover:text-dark-charcoal/90'
                      }`}>
                        {feature.title}
                      </h3>
                      
                      <p className={`text-dark-charcoal/80 leading-relaxed transition-colors duration-300 ${
                        isCurrent ? 'text-dark-charcoal/90' : 'group-hover:text-dark-charcoal/90'
                      }`}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-saffron to-india-green rounded-b-xl" 
                           style={{ width: `${((index + 1) / mockFeatures.length) * 100}%` }}>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Path Controls */}
          <div className="flex justify-center mt-12 space-x-3">
            {mockFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentStep(index);
                  setIsAnimating(false);
                  setTimeout(() => setIsAnimating(true), 5000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= currentStep 
                    ? 'bg-gradient-to-r from-saffron to-india-green scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technology Showcase - Enhanced */}
        <div className="mt-20 bg-pure-white rounded-2xl shadow-xl p-8 border border-light-gray/30 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-gradient-to-br from-tech-blue via-india-green to-saffron"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dark-charcoal mb-4">
                Powered by Advanced Technology Stack
              </h3>
              <p className="text-dark-charcoal/70 max-w-3xl mx-auto">
                Our AI models leverage satellite imagery, IoT sensors, weather data, and machine learning 
                to provide unparalleled accuracy in pollution monitoring and forecasting.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { tech: "ML", name: "Machine Learning", color: "tech-blue" },
                { tech: "IoT", name: "Internet of Things", color: "india-green" },
                { tech: "GIS", name: "Geographic System", color: "saffron" },
                { tech: "AI", name: "Artificial Intelligence", color: "warning-orange" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg bg-gradient-to-br from-${item.color}/10 to-${item.color}/5 hover:from-${item.color}/20 hover:to-${item.color}/10 transition-all duration-300 cursor-pointer group transform hover:scale-105`}
                >
                  <div className={`text-2xl font-bold text-${item.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {item.tech}
                  </div>
                  <div className="text-sm text-dark-charcoal/70">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;