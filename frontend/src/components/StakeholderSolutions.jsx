import React from "react";
import { ArrowRight, Smartphone, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockSolutions } from "../mock/mockData";

const StakeholderSolutions = () => {
  return (
    <section id="solutions" className="py-20 bg-dark-charcoal text-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pure-white relative inline-block pb-4">
            Empowering Every Stakeholder
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-saffron via-pure-white to-india-green rounded-full"></div>
          </h2>
          <p className="text-lg text-light-gray/80 mt-6 max-w-2xl mx-auto">
            Tailored solutions for citizens and policymakers with advanced AI-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mockSolutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`group bg-dark-charcoal/50 border ${solution.borderColor} rounded-xl shadow-xl p-8 transition-all duration-500 hover:-translate-y-3 ${solution.shadowColor} hover:shadow-2xl backdrop-blur-sm`}
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: "fadeInUp 0.8s ease-out forwards",
                opacity: 0
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg ${solution.id === 1 ? 'bg-india-green/20' : 'bg-saffron/20'} transition-transform duration-300 group-hover:scale-110`}>
                  {solution.id === 1 ? (
                    <Smartphone className={`w-8 h-8 ${solution.linkColor}`} />
                  ) : (
                    <BarChart className={`w-8 h-8 ${solution.linkColor}`} />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-pure-white group-hover:text-aqua-teal transition-colors duration-300">
                  {solution.title}
                </h3>
              </div>
              
              <p className="text-light-gray/80 mb-6 leading-relaxed group-hover:text-light-gray transition-colors duration-300">
                {solution.description}
              </p>
              
              <div className="flex items-center gap-2 group/link cursor-pointer">
                <span className={`font-semibold ${solution.linkColor} group-hover/link:underline transition-all duration-300`}>
                  {solution.link}
                </span>
                <ArrowRight 
                  className={`w-5 h-5 ${solution.linkColor} transition-transform duration-300 group-hover/link:translate-x-2`} 
                />
              </div>

              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl ${solution.id === 1 ? 'bg-gradient-to-br from-india-green to-fresh-green' : 'bg-gradient-to-br from-saffron to-warning-orange'}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-aqua-teal">10M+</div>
            <div className="text-light-gray/70">Citizens Reached</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-aqua-teal">50+</div>
            <div className="text-light-gray/70">Government Partners</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-aqua-teal">99.9%</div>
            <div className="text-light-gray/70">Forecast Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderSolutions;