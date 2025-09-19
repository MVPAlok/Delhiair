import React from "react";
import { Target, TrendingUp, Shield, FileText } from "lucide-react";
import { mockFeatures } from "../mock/mockData";

const iconMap = {
  Target,
  TrendingUp, 
  Shield,
  FileText
};

const CoreCapabilities = () => {
  return (
    <section id="features" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal relative inline-block pb-4">
            Core AI Capabilities
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-saffron via-pure-white to-india-green rounded-full"></div>
          </h2>
          <p className="text-lg text-dark-charcoal/80 mt-6 max-w-2xl mx-auto">
            The technology driving cleaner air for Delhi-NCR through advanced artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <div
                key={feature.id}
                className={`group feature-card text-center p-6 bg-pure-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-b-4 ${feature.borderColor} relative overflow-hidden`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                  opacity: 0
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-current to-transparent"></div>
                </div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-light-gray/50 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-light-gray/80`}>
                    <IconComponent 
                      size={32} 
                      className={`${feature.color} transition-all duration-300 group-hover:scale-110`} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-dark-charcoal group-hover:text-dark-charcoal/90 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-dark-charcoal/80 leading-relaxed group-hover:text-dark-charcoal/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-aqua-teal/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
              </div>
            );
          })}
        </div>

        {/* Technology Showcase */}
        <div className="mt-16 bg-pure-white rounded-2xl shadow-xl p-8 border border-light-gray/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark-charcoal mb-4">
              Powered by Advanced Technology
            </h3>
            <p className="text-dark-charcoal/70 max-w-3xl mx-auto">
              Our AI models leverage satellite imagery, IoT sensors, weather data, and machine learning 
              to provide unparalleled accuracy in pollution monitoring and forecasting.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-lg bg-gradient-to-br from-tech-blue/10 to-tech-blue/5 hover:from-tech-blue/20 hover:to-tech-blue/10 transition-all duration-300 cursor-pointer group">
              <div className="text-2xl font-bold text-tech-blue mb-2 group-hover:scale-110 transition-transform duration-300">ML</div>
              <div className="text-sm text-dark-charcoal/70">Machine Learning</div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-india-green/10 to-india-green/5 hover:from-india-green/20 hover:to-india-green/10 transition-all duration-300 cursor-pointer group">
              <div className="text-2xl font-bold text-india-green mb-2 group-hover:scale-110 transition-transform duration-300">IoT</div>
              <div className="text-sm text-dark-charcoal/70">Internet of Things</div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-saffron/10 to-saffron/5 hover:from-saffron/20 hover:to-saffron/10 transition-all duration-300 cursor-pointer group">
              <div className="text-2xl font-bold text-saffron mb-2 group-hover:scale-110 transition-transform duration-300">GIS</div>
              <div className="text-sm text-dark-charcoal/70">Geographic System</div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-warning-orange/10 to-warning-orange/5 hover:from-warning-orange/20 hover:to-warning-orange/10 transition-all duration-300 cursor-pointer group">
              <div className="text-2xl font-bold text-warning-orange mb-2 group-hover:scale-110 transition-transform duration-300">AI</div>
              <div className="text-sm text-dark-charcoal/70">Artificial Intelligence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;